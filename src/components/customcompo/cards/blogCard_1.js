import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Divider,
  Skeleton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import moment from "moment";
import Link from "next/link";

const BlogCard_1 = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Get theme and media queries
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      ref={ref}
      component={motion.div}
      initial={{ y: 20 }}
      animate={{ y: inView ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      sx={{
        // maxWidth: 350,
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        position: "relative",
        borderRadius: 2,
        height: "100%",
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Top Section: Image */}
      <Box
        sx={{ position: "relative", display: "block" }}
        component={Link}
        href={props.url}
        target={props.url ? "_blank" : "_self"}
      >
        <CardMedia
          component="img"
          image={props.image}
          sx={{
            height: { xs: 200, md: 250 },
            borderRadius: "4px 4px 0 0",
            display: props.image ? "block" : "none",
          }}
        />
        {!props.image && (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={250}
          />
        )}
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            fontSize: isSmallScreen ? "0.9rem" : "1rem",
            position: "absolute",
            left: 0,
            bottom: 0,
            p: 1,
            px: 1.5,
            bgcolor: "#ffffffa7",
            borderTopRightRadius: "10px",
            fontWeight: "bold",
          }}
        >
          {moment(props.Time).format("MMMM DD, YYYY")}
        </Typography>
      </Box>

      {/* Bottom Section: Content */}
      <CardContent
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        sx={{ ":last-child": { pb: 2 } }}
      >
        <Typography
          variant="h5"
          component={Link}
          href={props.url}
          target={props.url ? "_blank" : "_self"}
          sx={{
            fontWeight: "bold",
            color: "var(--headerColor)",
            textDecoration: "none",
            fontSize: isSmallScreen ? "1.1rem" : "1.3rem", // Responsive font size
          }}
        >
          {props.Title}
        </Typography>

        {!props.Title && (
          <Skeleton
            variant="text"
            width={"100%"}
            height={50}
          />
        )}

        <Divider sx={{ my: 1 }} />
        {/* Meta Information */}
        <Box sx={{}}>
          {!props.Brief && (
            <Skeleton
              variant="text"
              width={"100%"}
              height={20}
            />
          )}
          {!props.Brief && (
            <Skeleton
              variant="text"
              width={"100%"}
              height={20}
            />
          )}
          {!props.Brief && (
            <Skeleton
              variant="text"
              width={"100%"}
              height={20}
            />
          )}

          {props.Brief && (
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.6rem + 1vw)",
                  md: "calc(0.1rem + 0.9vw)",
                },
                pb: 1,
                color: "var(--lightGray)",
              }}
            >
              {props.Brief}
            </Typography>
          )}
          <Typography
            component={Link}
            href={props.url}
            target={props.url ? "_blank" : "_self"}
            sx={{
              textTransform: "none",
              color: "var(--darkGreen)",
              display: "inline",
              fontSize: isSmallScreen ? "0.9rem" : "1rem", // Responsive font size
              textDecoration: "none",
              // position:"absolute",right:20,bottom:5
            }}
          >
            Read more...
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard_1;
