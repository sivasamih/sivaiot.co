import React from "react";
import { Box } from "@mui/material";
import WhiteSpace from "@/components/customcompo/box/whiteSpace";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import AnimatedBox from "@/components/customcompo/box/animatedBox";
import ProductFamiliesAccHeaderCard from "@/components/customcompo/cards/productFamiliesAccHeaderCard";
import PartnerProductCard from "@/components/customcompo/cards/partnerProductCard";
import { Route_Path } from "@/apis/api";

const PartnersFamiliesDetails = (props) => {
  const families = props.FamiliesWiseProduct;
  return (
    <div>
      <>
        <Box sx={{ mt: 4, overflow: "hidden" }}>
          <Box sx={{ "& img": { maxHeight: 350, minHeight: 200 } }}>
            {families && (
              <ProductFamiliesAccHeaderCard
                Title={families.name}
                Desc={families.desc}
                Image={APIURLS.BASE_PATH.ProductFamily + families.BannerImage}
                ImageAlt={families.BannerImageAlt}
              />
            )}
          </Box>
        </Box>
        <WhiteSpace
          height={{ xs: 0, md: 30 }}
          bgcolor={"#ffff"}
        />

        <Box
          sx={{
            "& > :last-of-type .details-box:after": {
              // display: "none",
            },
            "& > :last-of-type": {
              pb: 0,
              mb: 0,
            },
            display: "grid",
            gridTemplateColumns: {
              xs: "auto",
            },
            gap: 4,
          }}
        >
          {families
            ? families["productList"]?.map((P, index) => {
                return (
                  <AnimatedBox
                    key={"id" + index}
                    id={P.link}
                  >
                    <PartnerProductCard
                      ID={P.ID}
                      ProductImage={
                        APIURLS.BASE_PATH.ProductImage +
                        P.ImageList[0]["ProductImage"]
                      }
                      ProductImageAlt={P.ImageList[0]["Alt"]}
                      ProductName={P.name}
                      ProductDesc={P.desc}
                      Datasheet={P.Datasheets}
                      url={P.link}
                      BaseURl={Route_Path.PRODUCTS}
                      addUpdateFavoriteProduct={props.addUpdateFavoriteProduct}
                    />
                  </AnimatedBox>
                );
              })
            : null}
        </Box>
        <WhiteSpace
          height={50}
          bgcolor={"#ffff"}
        />
      </>
    </div>
  );
};

export default PartnersFamiliesDetails;
