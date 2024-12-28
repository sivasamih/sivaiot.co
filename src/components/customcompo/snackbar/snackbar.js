import { Alert, IconButton, Snackbar, SnackbarContent } from "@mui/material";
import { useEffect, useState } from "react";

const SnackBar = (props) => {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            zIndex: 1300,
          }}
        />
      )}
      <Snackbar
        open={open}
        onClose={props.onClose}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1400,
        }}
        sx={{
          width: { xs: "80%", sm: "auto" },
        }}
      >
        <Alert
          onClose={props.onClose}
          variant="filled"
          severity={props.type}
          // icon={false}
          sx={{
            width: "100%",
            fontSize: "calc(0.6rem + 1vw)",
            // height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // px: 2,
            // py: 2,
            bgcolor: "white",
            color: "black",
            position: "relative",
            // "& .MuiAlert-action":{
            // position:"absolute",
            // top:0,right:10
            // }
          }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
