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
    box-shadow: 0 0 0 0 rgba(22, 91, 170, 0.56);
    transform: scale(1);
  }
  30% {
    box-shadow: 0 0 0 6px rgba(33, 99, 221, 0.2);
    transform: scale(1.05);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(39, 95, 218, 0.1);
    transform: scale(1.02);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(255, 105, 135, 0);
    transform: scale(1);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 105, 135, 0);
    transform: scale(1);
  }
`;

export const ModernSwitch = styled((props) => <Switch {...props} />)(({ theme, checked }) => {
    const primaryMain = theme?.palette?.primary?.main || "#1976d2";
    const primaryLight = theme?.palette?.primary?.light || "#63a4ff";
    const offColor = "#2c7fc4ff";
    const offTrack = "#569fdbff";

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
    };
});
