import { Box, IconButton, Typography } from "@mui/material";
import LazyImage from "../customimage/customLazyImage";
import ProductlistWraper from "../../compo/animatedwrapper/productlistwraper";
import * as APIURLS from "../../../apis/apiconstant";
import DatasheetButton from "../../compo/datasheet/datasheetbutton";
import { NavLink } from "react-router-dom";
import ShareButton from "../button/sharebutton";
import SnackBar from "../snackbar/snackbar";
import { useState } from "react";
import { Favorite } from "@mui/icons-material";

const ProductCard = (props) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("info");
  const [IsFavorite, setIsFavorite] = useState(false);
  const showSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };
  return (
    <>
      <SnackBar
        open={snackbarOpen}
        onClose={(e) => setSnackbarOpen(false)}
        type={snackbarType}
        message={snackbarMessage}
      />
      <ProductlistWraper id={props.id}>
        <Box
          sx={{
            position: "relative",
            display: "block",
            textDecoration: "none",
            color: "inherit",
          }}
          component={props.IsClickable ? NavLink : "div"}
          to={props.IsClickable ? props.url : ""}>
          <Box
            sx={{
              position: "absolute",
              right: 5,
              top: 2,
              zIndex: 1,
              transition: "0.5s ease-in-out",
              display: "flex",
              flexDirection: "column",
            }}>
            {/* <Box id={"shareBtn"}>
              <ShareButton
                title={props.ProductName}
                desc={props.ProductDesc}
                shareUrl={props.shareUrl}
                showSnackbar={showSnackbar}
              />
            </Box> */}
            {/* <IconButton
              size="small"
              onClick={(e) => {
                props.addUpdateFavoriteProduct(props.ID, !props.IsFavorite);
              }}>
              <Favorite
                size="small"
                sx={{ color: props.IsFavorite ? "red" : "inherit" }}
              />
            </IconButton> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              transition: "0.5s ease-out",
              position: "relative",
              flexDirection: { xs: "column", md: "row" },
            }}>
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
              component={props.IsClickable ? NavLink : "div"}
              to={props.IsClickable ? props.url : ""}
              target={props.IsClickable ? "_blank" : ""}
              id="img-box">
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
              className="details-box">
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "white",
                  p: { xs: 1, md: 2 },
                  py: { md: 1 },
                  transition: "0.5s ease-in-out",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
                className="details">
                <Box sx={{ pr: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "LibreBaskerville",
                      color: "var(--headerColor)",
                      fontSize: {
                        xs: "calc(1rem + 1vw)",
                        md: "calc(0.4rem + 1vw)",
                      },
                      fontWeight: "bold",
                      mt: -1,
                      transition: "0.5s ease-in-out",
                      display: "block",
                      textDecoration: "none",
                    }}
                    component={props.IsClickable ? NavLink : "h5"}
                    to={props.IsClickable ? props.url : ""}
                    target={props.IsExternalURL ? "_blank" : "_self"}
                    dangerouslySetInnerHTML={{ __html: props.ProductName }}
                  />
                  <Typography
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
                  <DatasheetButton
                    path={APIURLS.BASE_PATH.DatasheetsBaseUrl}
                    name={"Download Datasheet"}
                    // onClick={handleDownloadClick}
                    Datasheet={props.Datasheet}
                    ProductName={props.ProductName}
                    ProductImage={props.ProductImage}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ProductlistWraper>
    </>
  );
};

export default ProductCard;
