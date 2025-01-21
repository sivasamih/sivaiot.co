'use client'
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import WhiteSpace from "@/components/customcompo/box/whiteSpace";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import AnimatedBox from "@/components/customcompo/box/animatedBox";
import ProductFamiliesAccHeaderCard from "@/components/customcompo/cards/productFamiliesAccHeaderCard";
import PartnerProductCard from "@/components/customcompo/cards/partnerProductCard";
import { Route_Path } from "@/apis/api";
import Loading from "@/app/loading";

const PartnersFamiliesDetails = (props) => {
  const [FamiliesWiseProduct, setFamiliesWiseProduct] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);


  useEffect(() => {
    GetFamiliesProductsByURL()
  }, [props.URL])

  async function GetFamiliesProductsByURL(productID) {
    let data;
    let reqData = {
      PartnerID: props.userData?.PartnerID,
      WebsiteID: APIURLS.WebsiteID,
      UrlName: props.URL,
    };
    try {
      setIsLoading(true)
      let res = await FETCHAPI.Fetch(
        APIURLS.APIURL.PartnerWebFamilyWiseProducts,
        reqData
      );
      if (res.status === 200) {
        data = await res.json();
        if (productID) {
          const FData = data.productList.find(F => F.ID === productID)
          console.log("FData", FData)
          if (FData) {
            setFamiliesWiseProduct((prev) => ({
              ...prev,
              productList: prev.productList.map((product) =>
                product.ID === productID ? { ...product, IsFavorite: FData.IsFavorite } : product
              ),
            })
            )

          }
        } else {
          setFamiliesWiseProduct(data)
        }
      } else {
        setFamiliesWiseProduct(data)
      }

    } catch (ex) { } finally {
      setIsLoading(false)
    }
  }

  const AddUpdateFavoriteProduct = async (productID, IsFavorite) => {
    const reqData = {
      PartnerID: props.userData?.PartnerID,
      ProdID: productID,
      WebsiteID: APIURLS.WebsiteID,
      IsFavorite: IsFavorite,
    };
    try {
      const responce = await FETCHAPI.Fetch(APIURLS.APIURL.PartnerFavoriteProduct, reqData);
      if (responce.status === 200) {
        GetFamiliesProductsByURL(productID);
      }
    } catch (ex) { }
  };

  return (
    <div>
      <>
        <Loading open={IsLoading} />
        <Box sx={{ mt: 4, overflow: "hidden" }}>
          <Box sx={{ "& img": { maxHeight: 350, minHeight: 200 } }}>
            {FamiliesWiseProduct && (
              <ProductFamiliesAccHeaderCard
                Title={FamiliesWiseProduct.name}
                Desc={FamiliesWiseProduct.desc}
                Image={APIURLS.BASE_PATH.ProductFamily + FamiliesWiseProduct.BannerImage}
                ImageAlt={FamiliesWiseProduct.BannerImageAlt}
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
          {FamiliesWiseProduct
            ? FamiliesWiseProduct["productList"]?.map((P, index) => {
              return (
                <AnimatedBox
                  key={"id" + index}
                  id={P.link}
                >
                  <PartnerProductCard
                    ID={P.ID}
                    ProductImage={APIURLS.BASE_PATH.Product + P.image}
                    ProductImageAlt={P.ImageList[0]["Alt"]}
                    ProductName={P.name}
                    ProductDesc={P.desc}
                    Datasheet={P.Datasheets}
                    url={P.link}
                    BaseURl={Route_Path.PRODUCTS}
                    addUpdateFavoriteProduct={AddUpdateFavoriteProduct}
                    IsFavorite={P.IsFavorite}
                    Icon={APIURLS.BASE_PATH.Product + P.Icon}
                    IsShowIcon={P.IsShowIcon}
                    IsExternalURL={P.IsExternalURL}
                    IsNew={P.IsNew}
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
