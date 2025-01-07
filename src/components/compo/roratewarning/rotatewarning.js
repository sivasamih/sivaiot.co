import React from "react";
import { Box, Typography, SvgIcon } from "@mui/material";
import { ScreenRotation } from "@mui/icons-material";

const RotateWarning = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        color: "#333",
        textAlign: "center",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1300,
      }}
    >
      <ScreenRotation
        sx={{
          fontSize: 80,
          color: "#1976d2",
          animation: "rotateAnim 2s infinite",
        }}
      />

      <Typography
        variant="h6"
        sx={{
          fontSize: "1.5rem",
          marginTop: 2,
          maxWidth: "80%",
        }}
      >
        Please rotate your device to portrait mode
      </Typography>
      <style>
        {`
          @keyframes rotateAnim {
            0%, 100% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(15deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default RotateWarning;
