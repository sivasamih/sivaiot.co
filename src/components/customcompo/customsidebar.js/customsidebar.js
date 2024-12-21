import { Box, Divider, Drawer, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import Paragraph1 from "../Typo/paragraph1";
import { bgcolor } from "@mui/system";

const CustomSideBar = (props) => {
  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
      anchor={"right"}
      sx={{ zIndex: 99999 }}
    >
      <Box
        sx={{
          width: { xs: 300, sm: 500, md: 700 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py:1,
          bgcolor:"var(--darkGreen)" 
        }}
      >
        <Paragraph1
          sx={{ fontWeight: 600, fontSize: { xs: 15, sm: 17, md: 20, xl: 22 },}}
        >
          {props.Header ? props.Header : ""}
        </Paragraph1>
        <IconButton onClick={props.onClose}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      {props.Content}
    </Drawer>
  );
};
export default CustomSideBar;
