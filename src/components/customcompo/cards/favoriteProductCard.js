"use client";
import { Box, Stack } from "@mui/system";
import * as APIURLS from "@/apis/apiconstant";
import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Star } from "@mui/icons-material";
import DatasheetButton from "@/components/compo/datasheet/datasheetbutton";
import { useState } from "react";
import SnackBar from "../snackbar/snackbar";
import LazyImage from "../customimage/customLazyImage";
import TitleIcons from "../images/titleicons";
import NewIcon from "../images/newicon";

const FavoriteProductCard = (props) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("info");

  const showSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };
  let origin = window.location.origin;
  let pathname = "/rfid-tags-and-labels/";
  const BaseURl = origin + pathname;

  const handleShare = async () => {
    const urlToCopy = BaseURl + props.shareUrl;
    console.log("location", urlToCopy);

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(urlToCopy);
        showSnackbar("Link Copied");
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = urlToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showSnackbar("Link Copied");
      }
    } catch (error) {
      console.error("Error sharing the link:", error);
    }
  };

  const ProdutNameWithIcons = (
    <>
      <span>{props.name}</span>
      {props.IsShowIcon && <TitleIcons Icon={props.Icon} />}
      {props.IsNew === true ? <NewIcon /> : null}
    </>
  );
  return (
    <>
      <SnackBar open={snackbarOpen} onClose={(e) => setSnackbarOpen(false)} type={snackbarType} message={snackbarMessage} />
      <Card
        sx={{
          boxShadow: " 0 0 10px rgba(0,0,0,0.15)",
          height: "100%",
          position: "relative",
        }}
        component={motion.div}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}>
        <CardContent
          sx={{
            display: "flex",
            ":last-child": {
              pb: 2,
            },
            flexDirection: { xs: "column", md: "row" },
          }}>
          <Box sx={{ width: { xs: "100%", md: "30%" } }}>
            <LazyImage src={props.imageUrl} width={"100%"} alt={props.name} height={150} />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "70%" }, px: 2, pr: 3 }}>
            <Box sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "var(--headerColor)" }}>{ProdutNameWithIcons}</Box>
            <Typography sx={{}}>{props.desc}</Typography>
            <Box sx={{ mt: 1, ml: -1 }}>
              <DatasheetButton
                path={APIURLS.BASE_PATH.DatasheetsBaseUrl}
                name={"Download Datasheet"}
                // onClick={handleDownloadClick}
                Datasheet={props.Datasheets}
                ProductName={props.name}
                ProductImage={props.imageUrl}
              />
            </Box>
            <Stack direction={"row"} alignItems={"center"} gap={1} mt={2} sx={{ position: "absolute", top: { xs: 5, md: 0 }, right: { xs: 20, md: 10 } }}>
              {/* <Box id={"shareBtn"}>
                <IconButton
                  sx={{
                    background: "var(--borderColor)",
                    transition: "0.5s ease-in-out",
                    "&:hover": {
                      bgcolor: "var(--allBtnColor)",
                      color: "white",
                    },
                  }}
                  size="small"
                  onClick={handleShare}>
                  <Share
                    sx={{
                      fontSize: {
                        xs: "calc(1rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                    }}
                  />
                </IconButton>
              </Box> */}
              <IconButton
                size="small"
                onClick={(e) => {
                  props.addUpdateFavoriteProduct(props.ID, !props.IsFavorite);
                }}
                sx={{ bgcolor: "#e6e7e8b8" }}>
                <Star size="small" sx={{ color: props.IsFavorite ? "var(--green)" : "inherit", fontSize: { xs: '1rem', md: '1.2rem' } }} />
              </IconButton>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
export default FavoriteProductCard;
