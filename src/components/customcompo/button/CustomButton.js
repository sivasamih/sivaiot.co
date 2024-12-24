import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Box } from "@mui/system";

const CustomButton = ({ children, fullWidth, ...props }) => {
  return (
    <Box
      // component={motion.button}
      //  whiletap={{ scale: 0.8 }}
      sx={{ border: 0 }}
    >
      <Button
        fullWidth={
          fullWidth === false || props.fullWidth === "false" ? false : true
        }
        style={{
          fontFamily: "LucidaGrande",
          letterSpacing: 2,
          borderRadius: 0,
        }}
        component={motion.button}
        whiletap={{ scale: 0.8 }}
        {...props}
      >
        {children}
      </Button>
    </Box>
  );
};

export default CustomButton;
