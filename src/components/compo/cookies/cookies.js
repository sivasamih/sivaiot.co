"use client";

import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const CookiesController = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cookieConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));
    if (!cookieConsent) {
      setShowModal(true);
    }
  }, []);

  const handleConsent = () => {
    document.cookie = `cookieConsent=true; path=/; max-age=86400`; // 1 day
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "#00000083",
        zIndex: 1300,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(4px)",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            maxWidth: 600,
            p: 4,
            pt: 2,
            bgcolor: "white",
            outline: 0,
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "calc(1rem + 1vw)", md: "calc(0.5rem + 1vw)" },
            }}
          >
            We use cookies
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: "calc(0.5rem + 1vw)", md: "calc(0.1rem + 1vw)" },
            }}
          >
            We use cookies and other tracking technologies to improve your
            browsing experience on our website, to show you personalized content
            and targeted ads, to analyze our website traffic, and to understand
            where our visitors are coming from.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={handleConsent}
              variant="contained"
              color="primary"
              fullWidth
              style={{ background: "var(--green)" }}
            >
              I agree
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CookiesController;
