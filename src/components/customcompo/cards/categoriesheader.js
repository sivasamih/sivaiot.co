import { Box, Typography } from "@mui/material";

const CategoriesHeader = (props) => {
  return (
    <>
      <Box
        sx={{
          my: 2,
          minHeight: 120,
          bgcolor: "#39B54A",
          position: "relative",
          border: "1px solid #39B54A",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "100%",
            borderBottomRightRadius: { xs: "70%", md: "70%" },
            bgcolor: "white",
            color: "black",
            overflow: "hidden",
          }}
        >
          <Box sx={{ p: 2, maxWidth: "80%" }}>
            <Typography variant="h5" sx={{ fontSize: "calc(1em + 1vw)" }}>
              {props.Title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "calc(0.4em + 1vw)", md: "calc(0.2em + 1vw)" },
              }}
            >
              {props.Description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CategoriesHeader;
