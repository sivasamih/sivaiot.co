import { Box } from "@mui/material";

const TitleIcons = (props) => {
  return (
    <Box
      component="img"
      src={props.Icon}
      sx={{
        width: "30px",
        height: "30px",
        transition: "height 0.5s ease-in-out",
        display: props.Icon ? "block" : "none",
      }}
    />
  );
};
export default TitleIcons;
