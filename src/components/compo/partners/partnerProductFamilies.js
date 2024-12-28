"use client";
import CardNine from "@/components/customcompo/cards/cardNine";
import { Box } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import { useState } from "react";
import CustomModal2 from "@/components/customcompo/modal/modal2";
import PartnersFamiliesDetails from "./familiesdetails";

async function GetFamiliesProductsByURL(URL) {
  let data;
  let reqData = {
    UrlName: URL,
  };
  try {
    let res = await FETCHAPI.Fetch(
      APIURLS.APIURL.WebFamilyWiseProducts,
      reqData
    );
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {}
  return data;
}

const PartnerProductFamilies = (props) => {
  const [RMDC, setRMDC] = useState({
    open: false,
    header: "",
    URL: "",
  });
  const [FamiliesWiseProduct, setFamiliesWiseProduct] = useState([]);

  const openRMDC = async (url, name) => {
    const data = await GetFamiliesProductsByURL(url);
    setFamiliesWiseProduct(data);
    setRMDC({
      open: true,
      header: "Product Families",
      URL: url,
    });
  };

  return (
    <>
      <Box
        sx={{
          px: { xs: 4, md: 5, lg: 10 },
          my: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(4,1fr)",
          },
          gap: 4,
        }}
      >
        {props.ProductFamilies?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => openRMDC(item.UrlName, item.Name)}
            >
              <CardNine
                title={item.Name}
                desc={item.Description}
                alt={item.ImageAlt}
                IsExternalURL={item.IsExternalURL}
                image={APIURLS.BASE_PATH.ProductFamily + item["Images"]}
                titleTextColor={"#263238"}
                titleAlign={"left"}
                url={item.UrlName}
              />
            </div>
          );
        })}
      </Box>

      <CustomModal2
        open={RMDC.open}
        onClose={() => {
          setRMDC((prev) => ({ ...prev, open: false }));
        }}
        Header={RMDC.header}
        Content={
          <>
            <PartnersFamiliesDetails
              URL={RMDC.URL}
              FamiliesWiseProduct={FamiliesWiseProduct}
              //   addUpdateFavoriteProduct={this.addUpdateFavorite}
            />
          </>
        }
      />
    </>
  );
};
export default PartnerProductFamilies;
