import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import * as APIURLS from "../../../apis/apiconstant";
import * as FETCHAPI from "../../../apis/fetchapi";

export default function CustomAlertMessage(props) {
  const [IsActiveNotice, setIsActiveNotice] = React.useState(true);
  const [NotificationText, setNotificationText] = React.useState("");

  React.useEffect(() => {
    getSivaIOTNotification();
  }, []);

  const getSivaIOTNotification = async () => {
    try {
      const response = await FETCHAPI.Fetch(APIURLS.APIURL.SivaIOTNotification);
      if (response.status === 200) {
        let text = await response.text();
        setNotificationText(text);
      } else {
        setNotificationText("");
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  if (NotificationText) {
    return (
      <Box sx={{ width: "100%" }}>
        <Collapse in={IsActiveNotice}>
          <Alert
            severity="warning"
            icon={false}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={(e) => {
                  setIsActiveNotice(false);
                }}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            //   onClose={(e)=>{
            // setIsActiveNotice(false)}}
            sx={{
              "& .MuiAlert-message": {
                width: "100%",
                textAlign: "center",
                color: "var(--topAlertText)",
              },
              py: 0,
            }}>
            {NotificationText}
          </Alert>
        </Collapse>
      </Box>
    );
  } else {
    return null;
  }
}
