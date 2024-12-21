import { Box, Typography } from "@mui/material";

const TitleH1 = ({ children, color, ...rest }) => {
  return (
    <Box>
      <Typography
        variant="h1"
        component={"h1"}
        sx={{
          color: color ? color : "var(--black)",
          fontFamily: "LibreBaskerville",
          fontSize: "calc(1em + 1vw)",
        }}
        {...rest}
      >
        {children ? children : ""}
      </Typography>
    </Box>
  );
};
export default TitleH1;
