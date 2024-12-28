import { Dialog, DialogContent, DialogTitle, Divider, Slide } from "@mui/material";
import { Box } from "@mui/system";
import CustomIconButton from "../button/CustomIconButton";
import { Close } from "@mui/icons-material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CustomModal2 = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={(e, reason) => {
        if (reason === "backdropClick") {
          return false;
        }
        props.onClose(e, reason);
      }}
      maxWidth={props.width ? props.width : "lg"}
      keepMounted
      TransitionComponent={Transition}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <DialogTitle
          id="customized-dialog-title"
          sx={{
            py: 1,
            pr: 8,
            fontWeight: "bold",
            fontFamily: "LibreBaskerville",
          }}
        >
          {props.Header}
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ p: 2, pt: 1 }}>{props.Content}</DialogContent>
        <CustomIconButton
          sx={{
            position: "absolute",
            right: 5,
            top: 5,
            color: "var(--allBtnColor)",
          }}
          onClick={props.onClose}
        >
          <Close />
        </CustomIconButton>
      </Box>
    </Dialog>
  );
};
export default CustomModal2;
