"use client";
import React, { useState, useEffect } from "react";
import { Box, Skeleton } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({ src, alt, placeholder, style, ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      setIsError(false);
    };
    img.onerror = () => {
      setIsError(true);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <Box
      position="relative"
      width="100%"
      height={"100%"}
      ref={ref}
      component={motion.div}
      sx={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isError && inView ? (
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"-webkit-fill-available"}
          sx={{ bgcolor: "gray.300" }}
        />
      ) : (
        <LazyLoadImage
          src={imageSrc}
          // srcSet={`/img/Beer-Keg.jpg 800w, /img/product/MOM-10719.png 1000w, ${imageSrc}`}
          alt={alt}
          style={{
            width: props.width ? props.width : "100%",
            display: isLoaded && !isError ? "block" : "none",
            ...(style ? style : {}),
          }}
          {...props}
        />
      )}
    </Box>
  );
};

export default LazyImage;
