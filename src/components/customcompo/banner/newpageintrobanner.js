import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

const NewPageIntroBanner = ({ ImageURL, ImageAlt,title,desc }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "calc(14em + 1vh)", md: 320 },
        zIndex: 1,
        // mb: { xs: 18, md: 8 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter: "brightness(0.7)",
        }}
      >
        <img
          src={ImageURL}
          width={"100%"}
          height={"100%"}
          alt={ImageAlt}
          style={{ objectFit: "cover" }}
        />
      </Box>
      {/* <Container
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "-30%", md: "-20%" },
            left: "1%",
            width: { xs: "95%", md: "60%" },
            height: "auto",
            bgcolor: "#ffff",
            p: 3,
            boxShadow:'0px 1px 4px #0d0d0d2d'
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "var(--headerColor)",
              fontFamily: "LucidaGrande",
              mb: 1,
              fontSize: { xs: "calc(0.6em + 1vw)", md: "calc(0.5em + 1vw)" },
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "LucidaGrande",
              color: "#455a64",
              fontSize: { xs: "calc(0.5em + 1vw)", md: "calc(0.1em + 1vw)" },
            }}
          >
            {desc}
          </Typography>
        </Box>
      </Container> */}
    </Box>
  );
};
export default NewPageIntroBanner;
