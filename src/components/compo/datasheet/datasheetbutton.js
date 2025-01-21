"use client";
import DataSheetDwnldForm from "./datasheetdownload";
import {
  Button,
  Typography,
  Popover,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import * as APIURLS from "@/apis/apiconstant";
import CustomModal from "@/components/customcompo/modal/custommodal";
import * as FETCHAPI from "@/apis/fetchapi";
import {
  getLocalStorage,
  ValidateIPs,
  ValidateUser_Data,
} from "@/helper/helper";
import { Box } from "@mui/system";
import useMobileLandscape from "@/app/hooks/mobileLandscape";

const DatasheetButton = (props) => {
  const [open, setOpen] = useState(false);
  const [datasheet, setDatasheet] = useState("");
  const [IsUpdatedURL, setIsUpdatedURL] = useState(false);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [loading, setLoading] = useState(false);
      const isMobileLandscape = useMobileLandscape();
  
  const Timer = 15; // Timer duration in minutes
  const currentTime = new Date();

  const openDatasheet = async () => {
    try {
      if (datasheet) {
        const validIP = await ValidateIPs();
        if (!validIP) {
          await SetUserImformation();
        }
        const url = "/datasheet/" + datasheet;
        // const url = props.path + "/" + datasheet;
        console.log("url", url);
        const win = window.open(url, "_blank");
        if (win) {
          win.focus();
        }
      }
    } catch (ex) {
      console.log("ex", ex);
    }
  };

  const SET_SUV_DATA = (userData) => {
    const endTime = new Date(currentTime.getTime() + Timer * 60 * 1000);
    const SUVdata = {
      startTime: currentTime,
      endTime: endTime,
      ...userData,
    };
    localStorage.setItem("SUV", JSON.stringify(SUVdata));
  };

  // const ValidateSUV_Data = () => {
  //   let isValid = false;

  //   try {
  //     const SUVdata = JSON.parse(localStorage.getItem("SUV"));
  //     const IOT_PU = getLocalStorage();

  //     if (IOT_PU !== undefined && IOT_PU !== null) {
  //       if (IOT_PU.Token) {
  //         isValid = true;
  //       }
  //     } else if (SUVdata !== undefined && SUVdata !== null) {
  //       const startTime = new Date(SUVdata.startTime);
  //       const endTime = new Date(SUVdata.endTime);

  //       isValid = currentTime >= startTime && currentTime <= endTime;
  //     }
  //   } catch (ex) {}

  //   return isValid;
  // };

  const handleDownloadClick = (event) => {
    if (props.Datasheet.length > 1) {
      setPopoverAnchor(event.currentTarget);
    } else {
      const datasheetURL = props.Datasheet[0]?.ProductDatashet || "";
      setDatasheet(datasheetURL);
      setIsUpdatedURL(true); // Trigger validation and action after state update
    }
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  const handleDatasheetSelect = (datasheetURL) => {
    setDatasheet(datasheetURL);
    setIsUpdatedURL(true); // Trigger validation and action after state update
    setPopoverAnchor(null);
  };

  useEffect(() => {
    (async () => {
      if (IsUpdatedURL) {
        setLoading(true);

        let valid = await ValidateUser_Data();
        setIsUpdatedURL(false); // Reset the flag
        if (valid) {
          setLoading(false);
          openDatasheet();
        } else {
          setLoading(false);
          setOpen(true);
        }
      }
    })();
  }, [datasheet, IsUpdatedURL]);

  const SetUserImformation = async () => {
    try {
      const SUVdata = JSON.parse(localStorage.getItem("SUV"));
      const IOT_PU = getLocalStorage();
      if (IOT_PU || SUVdata) {
        let reqData = {
          WebsiteData: {
            SourceID: 2,
            TypeID: 2,
            isChecked: false,
            JsonData: JSON.stringify({
              email: IOT_PU ? IOT_PU["EmailID"] : SUVdata["email"],
              name: IOT_PU ? IOT_PU["UserName"] : SUVdata["name"],
              subject: "Download Datasheet",
              product: props.ProductName,
            }),
          },
        };
        console.log("reqData", reqData);
        // return false;
        let res = await FETCHAPI.Fetch(
          APIURLS.APIURL.Add_Update_WebsiteData,
          reqData
        );
        if (res.status === 2000) {
          // setOpen(false);
        } else {
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
        }}
      >
        {!loading ? (
          <Typography
            // variant="button"
            id={props.id}
            sx={{
              borderRadius: "30px",
              color: "var(--green)",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: {
                xs: isMobileLandscape?"calc(0.4rem + 1vw)":"calc(0.8rem + 1vw)",
                md: "calc(0.1rem + 0.9vw)",
              },
              textTransform: "capitalize",
              py: 0,
              "&:hover": {
                cursor: "pointer",
              },
              px: 1,
              visibility: props.Datasheet.length > 0 ? "initial" : "hidden",
            }}
            style={{ background: "transparet" }}
            disabled={
              props.Datasheet.length > 0 ? (loading ? true : false) : true
            }
            component={Button}
            onClick={handleDownloadClick}
          >
            {props.name}
          </Typography>
        ) : (
          <CircularProgress
            color="secondary"
            size={20}
            thickness={4}
            sx={{ my: 1.5 }}
          />
        )}
      </Box>
      <Popover
        open={Boolean(popoverAnchor)}
        anchorEl={popoverAnchor}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <List sx={{}}>
          {props.Datasheet.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => handleDatasheetSelect(item.ProductDatashet)}
              sx={{ py: 0 }}
            >
              <ListItemText primary={item.ProductDatasheetName} />
            </ListItem>
          ))}
        </List>
      </Popover>
      <CustomModal
        Header="BEGIN DOWNLOAD"
        open={open}
        width="md"
        onClose={() => setOpen(false)}
        Content={
          <DataSheetDwnldForm
            ProductName={props.ProductName}
            ProductImage={props.ProductImage}
            onClose={() => setOpen(false)}
            openDatasheet={openDatasheet}
            SET_SUV_DATA={SET_SUV_DATA}
          />
        }
      />
    </>
  );
};

export default DatasheetButton;
