import { ListItemButton, styled } from "@mui/material";

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
    borderBottom: '1px solid rgba(0,0,0,0.2)'
}));
