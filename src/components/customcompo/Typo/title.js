import { Box, Typography } from "@mui/material";

const Title = ({ children, color, ...rest }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        component={"h4"}
        sx={{
          color: color ? color : "var(--black)",
          fontFamily: "LibreBaskerville",
        }}
        {...rest}
      >
        {children ? children : ""}
      </Typography>
    </Box>
  );
};
export default Title;
