import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// home page Data  Image with text desc
const CardOne = ({ image, alt, description, imagePosition }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [smallSizeref, smallSizeinView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [imgRef, imgInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const boxVariants = {
    hidden: { opacity: 0, x: imagePosition === "left" ? 200 : -200 },
    visible: {
      opacity: 1,
      x: 0,
      zIndex: 9,
      transition: { duration: 1 },
    },
  };
  const ImgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1},
    },
  };

  return (
    <Grid
      container
      spacing={0}
      sx={{ height: { xs: "100%", md: "88vh" }, my: { xs: 4, md: 0 } }}
    >
      <Grid item xs={12}>
        <Grid
          container
          spacing={0}
          sx={{ position: "relative" }}
          justifyContent={"center"}
        >
          <Grid
            item
            xs={12}
            md={7}
            order={{ xs: 1, md: imagePosition === "left" ? 1 : 2 }}
            sx={{height: { xs: "100%", md: "88vh" }}}
          >
            <Box
              sx={{ height: { xs: "100%", md: "88vh" }, bgcolor: "#299D77" }}
              ref={imgRef}
              component={motion.div}
              initial="hidden"
              animate={imgInView ? "visible" : "hidden"}
              variants={ImgVariants}
            >
              <img
                src={image}
                alt={alt}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={10}
            md={5}
            order={{ xs: 2, md: imagePosition === "left" ? 2 : 1 }}
            ref={smallSizeref}
          >
            <Box
              ref={smallSizeref}
              component={motion.div}
              initial="hidden"
              animate={smallSizeinView ? "visible" : "hidden"}
              variants={boxVariants}
              sx={{
                width: "100%",
                minHeight: 250,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                bgcolor: "var(--green)",
                p: 2,
                boxShadow: " 0 0 5px #39b54a78",
                mt: -6,
              }}
            >
              <Typography
                sx={{
                  fontSize: "calc(0.8em + 1vw)",
                  color: "var(--white)",
                  fontFamily: "LibreBaskerville",
                }}
              >
                {description}
              </Typography>
            </Box>
          </Grid>
          <Box
            ref={ref}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
            sx={{
              position: "absolute",
              top: "35%",
              left: imagePosition === "left" ? "40%" : "10%",
              transform: "translate(-50%, -50%)",
              width: "clamp(50%,10vw,60%)",
              minHeight: 250,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              bgcolor: "var(--blurGreen)",
              p: 2,
              boxShadow: " 0 0 4px var(--blurGreen)",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#1E42A9",
                fontFamily: "LibreBaskerville",
                color: "var(--white)",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardOne;
