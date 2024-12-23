import { Box } from "@mui/material";

const WhiteSpace = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: props.height ? props.height : 100,
        bgcolor: props.bgcolor ? props.bgcolor : "#F2F4F7",
        ...props.sx,
      }}>
      &nbsp;
    </Box>
  );
};

export default WhiteSpace;
