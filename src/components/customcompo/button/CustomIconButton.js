import React from "react";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

const CustomIconButton = ({ children, ...props }) => {
  return (
    <IconButton
      // component={motion.button}
      // whileTap={{ scale: 0.5 }}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default CustomIconButton;
