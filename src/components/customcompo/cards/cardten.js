"use client";
import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// home page Data  Image with text desc
const CardTen = ({ Image, alt, Description, Title, video = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    document.querySelector("video");
    document.querySelector("video").play();
  }, []);
  return (
    <Card
      sx={{ boxShadow: 0, overflow: "initial" }}
      ref={ref}
      component={motion.div}
      initial={{ y: 50 }}
      animate={{ y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          position: "relative",
          "& video": { height: { xs: 250, md: 380 } },
        }}
      >
        {video ? (
          <video
            src={video}
            loop
            width={"100%"}
            muted
            height={250}
            style={{
              objectFit: "cover",
              borderRadius: "40px",
            }}
          />
        ) : (
          <CardMedia
            component="img"
            image={Image}
            sx={{ borderRadius: "40px", height: { xs: 250, md: 380 } }}
          />
        )}
        <Typography
          sx={{
            position: "absolute",
            bottom: -30,
            left: { xs: "50%", md: -30 },
            bgcolor: "white",
            transform: { xs: "translate(-50%)", md: "translate(0%)" },
            p: 2,
            px: { xs: 3, md: 5 },
            borderRadius: "30px",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            color: "var(--green)",
            letterSpacing: 1,
            fontWeight: "bold",
            fontSize: "1.2rem",
            lineBreak: "inherit",
            whiteSpace: "nowrap",
          }}
          variant="h5"
        >
          {Title}
        </Typography>
      </Box>
      <CardContent sx={{ px: 0, pt: 7 }}>
        <Typography
          sx={{
            fontSize: { xs: "calc(0.7rem + 1vw)", md: "calc(0.3rem + 1vw)" },
          }}
          color="text.secondary"
          gutterBottom
        >
          {Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardTen;
