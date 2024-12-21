import { Box, Typography } from "@mui/material";

const Title4 = (props) => {
  return (
    <Box>
      <Typography
        variant="h4"
        component={"h4"}
        sx={{
          width: "100%",
          fontSize: { xs: "calc(1em + 1.5vw)", md: "calc(0.8em + 1.5vw)" },
          fontWeight: "bold",
          color: "var(--headerColor)",
          textTransform: "capitalize",
          position: "relative",
          overflow: "hidden",
          fontFamily: "LibreBaskerville",
        }}>
        {props.text ? props.text : ""}
      </Typography>
    </Box>
  );
};
export default Title4;
