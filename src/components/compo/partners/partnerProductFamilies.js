"use client";
import CardNine from "@/components/customcompo/cards/cardNine";
import { Box } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import { useEffect, useState } from "react";
import CustomModal2 from "@/components/customcompo/modal/modal2";
import PartnersFamiliesDetails from "./familiesdetails";
import { getLocalStorage } from "@/helper/helper";
import Loading from "@/app/loading";
import { notFound } from "next/navigation";



const PartnerProductFamilies = () => {
  const [ProductFamilies, setProductFamilies] = useState([])
  const [userData, setUserData] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const [RMDC, setRMDC] = useState({ open: false, header: "", URL: "" });

  useEffect(() => {
    const IOT_PU = getLocalStorage();
    if (IOT_PU) {
      setUserData(IOT_PU);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      getProductFamilies();
    }
  }, [userData]);

  async function getProductFamilies() {
    const reqData = {
      PartnerID: userData?.PartnerID,
      WebsiteID: APIURLS.WebsiteID,
    }
    try {
      setIsLoading(true)
      let res = await FETCHAPI.Fetch(APIURLS.APIURL.PartnerProductFamily, reqData);
      if (res.status === 200) {
        let data = await res.json();
        setProductFamilies(data)
        setIsLoading(false)
      } else {
        setIsLoading(false)
        setProductFamilies([])
      }
    } catch (ex) {
      setIsLoading(false)
      setProductFamilies([])
      notFound();
    }

  }



  const openRMDC = async (url, name) => {
    setRMDC({
      open: true,
      header: "Product Families",
      URL: url,
    });
  };

  return (
    <>
      <Loading open={IsLoading} />
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
        {ProductFamilies?.map((item, index) => {
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
              userData={userData}
            />
          </>
        }
      />
    </>
  );
};
export default PartnerProductFamilies;
