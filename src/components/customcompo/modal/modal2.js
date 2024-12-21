import { Dialog, DialogContent, DialogTitle, Divider } from "@mui/material";
import { Box } from "@mui/system";
import CustomIconButton from "../button/CustomIconButton";
import { Close } from "@mui/icons-material";

const CustomModal2 = (props) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={(e, reason) => {
          if (reason === "backdropClick") {
            return false;
          }
          props.onClose(e, reason);
        }}
        maxWidth={props.width ? props.width : "lg"}
        keepMounted>
        <Box
          sx={{
            position: "relative",
          }}>
          <DialogTitle
            id="customized-dialog-title"
            // onClose={props.onClose}
            sx={{
              py: 1,
              pr:8,
              position: "sticky",
              fontWeight: "bold",
              fontFamily: "LibreBaskerville",
            }}>
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
            onClick={props.onClose}>
            <Close />
          </CustomIconButton>
        </Box>
      </Dialog>
    </>
  );
};
export default CustomModal2;
