"use client";
import { Box, Typography } from "@mui/material";
import LazyImage from "../customimage/customLazyImage";
import * as APIURLS from "@/apis/apiconstant";
import DatasheetButton from "@/components/compo/datasheet/datasheetbutton";
import ProductlistWraper from "@/components/animatedwrapper/productlistwraper";
import Link from "next/link";
import NewIcon from "../images/newicon";
import TitleIcons from "../images/titleicons";

const ProductCard = (props) => {
  return (
    <ProductlistWraper id={props.id}>
      <Box
        sx={{
          position: "relative",
          display: "block",
          textDecoration: "none",
          color: "inherit",
        }}
        component={props.IsClickable && props.url ? Link : "div"}
        href={props.IsClickable ? props.url : null}
      >
        <Box
          sx={{
            display: "flex",
            transition: "0.5s ease-out",
            position: "relative",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "20%" },
              transition: "0.5s ease-in-out",
              pr: { xs: 1, md: 0 },
              "&:hover img": { transform: "scale(1.5)" },
            }}
            id="img-box"
          >
            <LazyImage
              src={props.ProductImage}
              alt={props.ProductImageAlt}
              placeholder={props.ProductImageAlt}
              style={{
                width: "100%",
                minHeight: 150,
                height: "100%",
                maxHeight: 250,
                transition: "0.5s ease-in-out",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                right: "0%",
                width: "30%",
                height: "1px",
                bgcolor: "#e6e9ed",
              },
              "&:before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "0%",
                width: "40%",
                height: "1px",
                bgcolor: "#e6e9ed",
                zIndex: 1,
              },
            }}
            className="details-box"
          >
            <Box
              sx={{
                width: "100%",
                bgcolor: "white",
                p: { xs: 1, md: 2 },
                py: { md: 1 },
                pt: { md: 0 },
                transition: "0.5s ease-in-out",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
              }}
              className="details"
            >
              <Box sx={{ pr: { xs: 0, md: 5 } }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: "LibreBaskerville",
                      color: "var(--headerColor)",
                      fontSize: {
                        xs: "calc(1rem + 1vw)",
                        md: "calc(0.4rem + 1vw)",
                      },
                      // lineHeight:1,
                      fontWeight: "bold",
                      transition: "0.5s ease-in-out",
                      display: "block",
                      textDecoration: "none",
                      position: "relative",
                    }}
                    dangerouslySetInnerHTML={{ __html: props.ProductName }}
                  />

                  {props.IsShowIcon && <TitleIcons Icon={props.Icon} />}
                  {props.IsShowIcon && <NewIcon />}
                  {props.IsNew && <NewIcon />}
                </Box>

                <Box
                  sx={{
                    mt: 1,
                    fontFamily: "LucidaGrande",
                    fontSize: {
                      xs: "calc(0.8rem + 1vw)",
                      md: "calc(0.1rem + 1vw)",
                    },
                    transition: "0.5s ease-in-out",
                    lineHeight: 1.2,
                  }}
                  variant="subtitle1"
                  dangerouslySetInnerHTML={{ __html: props.ProductDesc }}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                {props.isActiveDatasheetBtn ? (
                  <DatasheetButton
                    path={APIURLS.BASE_PATH.DatasheetsBaseUrl}
                    name={"Download Datasheet"}
                    Datasheet={props.Datasheet}
                    ProductName={props.ProductName}
                    ProductImage={props.ProductImage}
                  />
                ) : (
                  <Typography
                    sx={{
                      borderRadius: "30px",
                      color: "var(--green)",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.1rem + 0.9vw)",
                      },
                      textTransform: "capitalize",
                      py: 0,
                      "&:hover": {
                        cursor: "pointer",
                      },
                      px: 1,
                      visibility:
                        props.Datasheet.length > 0 ? "initial" : "hidden",
                    }}
                    component={"h5"}
                  >
                    Download Datasheet
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ProductlistWraper>
  );
};

export default ProductCard;
