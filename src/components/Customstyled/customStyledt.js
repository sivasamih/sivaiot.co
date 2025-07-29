"use client";
import { ListItemButton, styled, keyframes, Switch } from "@mui/material";

export const StyledListButton = styled(ListItemButton)((props) => ({
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "2px",
    backgroundColor: "white",
    transition: "0.3s ease-in-out",
    width: props.currentpath === props.url ? "100%" : "0",
  },
  "&:hover": {
    "&:after": {
      width: "100%",
    },
  },
  borderBottom: "1px solid rgba(0,0,0,0.2)",
}));

export const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(230, 54, 48, 0.56);
    transform: scale(1);
  }
  30% {
    box-shadow: 0 0 0 6px rgba(221, 33, 33, 0.2);
    transform: scale(1.05);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(218, 39, 39, 0.1);
    transform: scale(1.02);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(255, 105, 105, 0.23);
    transform: scale(1);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 105, 135, 0);
    transform: scale(1);
  }
`;

export const ModernSwitch = styled((props) => <Switch {...props} />)(({ theme, checked }) => {
  const primaryMain = "#0cca25ff";
  const primaryLight = "#19a02b93";
  const offColor = "#f71010ff";
  const offTrack = "#f04f4fff";

  return {
    "& .MuiSwitch-switchBase": {
      color: checked ? primaryMain : offColor,
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: checked ? primaryMain : "#fff",
      border: checked ? "none" : `2px solid ${offColor}`,
      ...(checked === false && {
        animation: `${pulse} 1.6s infinite ease-in-out`,
      }),
    },
    "& .MuiSwitch-track": {
      backgroundColor: checked ? primaryLight : offTrack,
      opacity: 1,
      borderRadius: 20,
    },
    "& .Mui-checked+.MuiSwitch-track": {
      backgroundColor: checked ? primaryLight : offTrack,
      opacity: 1,
      borderRadius: 20,
    }
  };
});
