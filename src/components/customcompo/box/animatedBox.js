import React from "react";
import { Box } from "@mui/system";

const AnimatedBox = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
      {...props}>
      {children}
    </Box>
  );
};

export default AnimatedBox;
