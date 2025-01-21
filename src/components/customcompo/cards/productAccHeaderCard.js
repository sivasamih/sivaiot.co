'use client'
import { Box } from "@mui/system";
import LazyImage from "../customimage/customLazyImage";
import { Typography } from "@mui/material";
import useMobileLandscape from "@/app/hooks/mobileLandscape";

const ProductAccHeaderCard = (props) => {
  const isMobileLandscape = useMobileLandscape();

  const Title = props.Title ? props.Title : "";
  const Desc = props.Desc ? props.Desc : "";
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        maxHeight: { xs: "100%", md: 200 },
        overflow: { xs: "unset", md: "hidden" },
        boxShadow: {
          xs: "0 0 4px #6f6f707b inset",
        },
        position: "relative",
        mb: { xs: 15, sm: isMobileLandscape ? 5 : 20, md: 0 },
        "&:hover #header-img-box  img": {
          transition: "0.5s ease-in-out",
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 2 },
          pt: { xs: 2, sm: 0 },
          width: { xs: "80%", md: "35%" },
          height: { sm: isMobileLandscape ? 100 : 200, md: "auto" },
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          position: { xs: "absolute", md: "initial" },
          top: { xs: isMobileLandscape ? "80%" : "100%", md: "initial" },
          left: { xs: "50%", md: "initial" },
          transform: { xs: "translate(-50%,-30%)", md: "none" },
          bgcolor: { xs: "white", md: "transparent" },
          zIndex: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "left",
            fontSize: {
              xs: isMobileLandscape ? "calc(0.8rem + 1vw)" : "calc(1rem + 1vw)",
              md: "calc(0.6rem + 1vw)",
            },
            fontWeight: "bold",
          }}
        // dangerouslySetInnerHTML={{ __html: Title }}
        >
          {Title}
        </Typography>
        <Typography
          component={"h5"}
          sx={{
            mt: 1,
            color: "#696969eb",
            lineHeight: 1.2,
            fontSize: {
              xs: isMobileLandscape ? "calc(0.5rem + 1vw)" : "calc(0.8rem + 1vw)",
              md: "calc(0.1rem + 1vw)",
            },
          }}
        // dangerouslySetInnerHTML={{ __html: Desc }}
        >
          {Desc}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "65%" },
          clipPath: {
            xs: "none",
            md: "polygon(10% 0 ,100% 0,100% 100%,0 100%)",
          },
          minHeight: 200,
          overflow: "hidden",
          "& img": {
            height: { xs: "100%" },
            maxHeight: 250,
          },
        }}
        id="header-img-box"
      >
        <LazyImage
          // src={item.image}
          src={props.Image}
          alt={props.ImageAlt}
          style={{
            width: "100%",
            // height:"-webkit-fill-available",
            objectFit: "cover",
            transition: "0.5s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductAccHeaderCard;
