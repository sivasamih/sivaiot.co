import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CustomDrawer = (props) => {
  const [navHeight, setNavHeight] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    const Navheight = document.getElementById("NavBar");
    if (Navheight) {
      setNavHeight(Navheight.offsetHeight);
    }
  }, [props.open]);

  const variants = {
    open: (height = 200) => ({
      clipPath: `circle(${height * 4 + 200}px at 100% 100%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(20px at 100% 100% )",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Drawer
      anchor={"top"}
      open={props.open}
      onClose={props.onClose}
      ref={containerRef}
      PaperProps={{
        component: motion.div,
        variants: variants,
        initial: "closed",
        animate: props.open ? "open" : "closed",
        sx: {
          overflow: "hidden",
          mt: `calc(${navHeight}px)`,
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          // height: 300,
          pb:1
        }}
      >
        <Divider />
        {props.Content ? props.Content : ""}
      </Box>
    </Drawer>
  );
};
export default CustomDrawer;
