import { Share } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const PartnerShareButton = (props) => {
  let origin = window.location.origin;
  let pathname = props.BaseURl + "/";
  const URL = origin   + pathname

  const handleShare = async () => {
    const urlToCopy = URL + "/"  + props.shareUrl;
    console.log("location", urlToCopy);

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(urlToCopy);
        props.showSnackbar("Link Copied");
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = urlToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        props.showSnackbar("Link Copied");
      }
    } catch (error) {
      console.error("Error sharing the link:", error);
    }
  };

  return (
    <>
      <Tooltip
        title="Copy link"
        placement="right"
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: "var(--darkGreen)",
              color: "white",
            },
          },
          arrow: {
            sx: {
              color: "var(--darkGreen)",
            },
          },
        }}>
        <IconButton
          sx={{
            background: "var(--borderColor)",
            transition: "0.5s ease-in-out",
            "&:hover": {
              bgcolor: "var(--allBtnColor)",
              color: "white",
            },
          }}
          size="small"
          onClick={handleShare}>
          <Share
            sx={{
              fontSize: {
                xs: "calc(1rem + 1vw)",
                md: "calc(0.2rem + 1rem)",
              },
            }}
          />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default PartnerShareButton;
