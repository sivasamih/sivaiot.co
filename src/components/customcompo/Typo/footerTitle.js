import { Box, Typography } from "@mui/material";

const FooterTitle = ({ children, color = "white", sx, ...rest }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        component={"h5"}
        sx={{
          color: color ? color : "var(--green)",
          fontFamily: "LucidaGrande",
          py: 0.5,
          letterSpacing: 2,
          textAlign:"center",
          fontSize:{xs:"calc(0.8rem + 1vw)",md:"calc(0.6rem + 1vw)"},
          ...(sx && { ...sx }),
        }}
        {...rest}
      >
        {children ? children : ""}
      </Typography>
    </Box>
  );
};
export default FooterTitle;
