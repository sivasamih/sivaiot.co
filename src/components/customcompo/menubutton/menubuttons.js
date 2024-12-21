import React, { useState } from "react";
import {
  Button,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AnimatedMenuButton = ({ name, path, menuList }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const pathname = usePathname()

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };


  return (
    // <Box sx={{ position: "relative", }}>
    <ListItem
      sx={{
        bgcolor: "transparent",
        border: 0,
        color: "var(--white)",
        p: 0,
        // px: 2,
        position: "relative",
        width: "100%",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <ListItemButton
        // component={Link}
        // href={path}
        sx={{
          width: "100%",
          alignItems: "center",
          transition: "background-color 0.5s",
          ...(menuList.map((x) => x.url).includes(pathname) && {
            bgcolor: "var(--green)",
          }),
          ...(isOpen && {
            bgcolor: "var(--green)",
          }),
        }}
        id={"basic-button" + name}
        variant="contained"
        onMouseEnter={handleMouseEnter}
        aria-expanded={isOpen ? "true" : undefined}
        aria-owns={anchorEl ? "fade-menu" : undefined}
        aria-haspopup="true">
        <ListItemText primary={name} />
      </ListItemButton>
      <Box
        sx={{
          display: isOpen ? "block" : "none",
          position: "absolute",
          top: "100%",
          bgcolor: "white",
          boxShadow: 10,
          zIndex: -1,
          borderLeft: "1px solid var(--light-green)",
          borderRight: "1px solid var(--light-green)",
        }}
        component={motion.div}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: isOpen ? 0 : -10, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {menuList &&
          menuList.map((item, index) => (
            <MenuItem
              key={index}
              onClick={handleMouseLeave}
              sx={{
                py: 0,
                my: 0,
                color: "black",
                "&:hover": {
                  bgcolor: "var(--green)",
                  color: "var(--white)",
                },
                ...(pathname === item.url && {
                  bgcolor: "var(--green)",
                  color: "var(--white)",
                }),
              }}
              component={Link}
              href={item.url}>
              {item.name}
            </MenuItem>
          ))}
      </Box>
    </ListItem>
    // </Box>
  );
};

export default AnimatedMenuButton;
