"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PageHeading = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <>
      <Box
        ref={ref}
        component={motion.div}
        initial={{ y: -10 }}
        animate={inView ? { y: 0 } : { y: -10 }}
        transition={{ duration: 1 }}>
        <Typography
          component={props.component ? props.component : "h1"}
          sx={{
            color: "white",
            overflow: "hidden",
            position: "relative",
            // display: "flex",
            // justifyContent: "cenrer",
            // alignItems: "center",
            textAlign: props.align === "right" ? "right" : "left",
            // zIndex: 1,
            gap: 1,
            "&:before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: 4,
              bottom: 0,
              bgcolor: "var(--green)",
              // zIndex: -1,
              left: props.align === "right" ? 0 : undefined,
            },
          }}>
          <Typography
            component={"span"}
            sx={{
              fontSize: { xs: "calc(1rem + 1vw)", md: "calc(0.8rem + 1vw)" },
              color: "white",
              // px: {xs:1},
              pl: props.align === "right" ? undefined : { xs: 1, md: 2 },
              pr: props.align === "right" ? { xs: 1, md: 2 } : undefined,
              bgcolor: " var(--green)",
              // overflow:"hidden",
              position: "relative",
              zIndex: 1,
              "&:after": {
                content: '""',
                position: "absolute",
                width: "100%",
                top: "35%",
                right: props.align === "right" ? undefined : "-56%",
                left: props.align === "right" ? "-56%" : undefined,
                height: "100%",
                bgcolor: " var(--green)",
                transform:
                  props.align === "right" ? "rotate(-45deg)" : "rotate(45deg)",
                zIndex: -1,
              },
            }}>
            {props.title}
          </Typography>
        </Typography>
      </Box>
    </>
  );
};
export default PageHeading;
