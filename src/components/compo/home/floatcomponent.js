import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FloatComponent = () => {
  let image = "https://picsum.photos/500/400";
  return (
    <Box
      sx={{
        height: 400,
        width: 300,
        p: 1,
        pt: 0,
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          color: "var(--headerColor)",
          textAlign: "left",
          fontSize: {
            xs: "calc(0.8em + 1vw)",
            sm: "calc(0.6em + 1vw)",
            md: "calc(0.1em + 1vw)",
          },
          lineHeight: 1,
          textTransform: "capitalize",
          letterSpacing: 1,
          wordSpacing: 2,
          fontFamily: "LibreBaskerville",
          py: 1,
          fontWeight: "bold",
        }}
      >
        important announcement
      </Typography>
      <Divider variant="middle" />
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          overflow: "scroll",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
        }}
      >
        <img
          src={image}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
        <img
          src={image}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};
export default FloatComponent;
