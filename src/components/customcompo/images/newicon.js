import { Box } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";

const NewIcon = (props) => {
  const IconURL = props.Icon || APIURLS.BASE_PATH.Others + "new_icon.gif";
  return (
    <Box
      component="img"
      src={IconURL}
      sx={{
        transition: "height 0.5s ease-in-out",
        display: IconURL ? "block" : "none",
      }}
    />
  );
};
export default NewIcon;
