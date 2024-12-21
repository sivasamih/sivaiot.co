import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Modalvariants } from "@/components/animation/animation";
import CustomIconButton from "@/components/customcompo/button/CustomIconButton";

const CustomModal = (props) => {
  return (
    <AnimatePresence>
      {props.open && (
        <Dialog
          open={props.open}
          onClose={(e, reason) => {
            if (reason === "backdropClick") {
              return false;
            }
            props.onClose(e, reason);
          }}
          maxWidth={"lg"}
          keepMounted
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          PaperComponent={({ children }) => (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={Modalvariants}
              transition={{ duration: 0.8 }}
              style={{
                transformOrigin: "top center",
                overflow: "hidden",
                backgroundColor: "white",
              }}
            >
              {children}
            </motion.div>
          )}
        >
          <Box
            sx={{
              width: { xs: "90vw", sm: "70vw", md: "50vw", lg: "50vw" },
              // height: "70vh",
              position: "relative",
            }}
          >
            <DialogTitle
              id="customized-dialog-title"
              onClose={props.onClose}
              sx={{
                py: 1,
                position: "sticky",
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
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
