import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinkButtons = (props) => {
  const pathname = usePathname();

  return (
    <ListItem
      key={props.name}
      component={motion.div}
      whileTap={{ scale: 0.8 }}
      sx={{
        bgcolor: "transparent",
        border: 0,
        color: "var(--white)",
        py: 0,
        px: 0,
      }}
    >
      <ListItemButton
        component={props.type === "link" ? Link : "div"}
        href={props.type === "link" ? props.path : null}
        sx={
          ({
            alignItems: "center",
            fontWeight: "bold",
          },
          pathname === props.path
            ? {
                transition: "0.5s all",
                bgcolor: "var(--green)",
              }
            : null)
        }
        onClick={props.onClick}
      >
        <ListItemText primary={props.name} />
      </ListItemButton>
    </ListItem>
  );
};
export default NavLinkButtons;
