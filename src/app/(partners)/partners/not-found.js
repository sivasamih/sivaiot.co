"use client";
import { Box, Grid, Typography } from "@mui/material";
import { Route_Path } from "@/apis/api";
import Link from "next/link";
import { redirect } from "next/navigation";
import { scrollByID } from "@/helper/helper";
import { motion } from "framer-motion";
import { BASE_PATH } from "@/apis/apiconstant";

const NotFound = () => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{ overflow: "hidden" }}>
        <Grid
          item
          xs={12}
          md={7}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}>
            <Box
              component={"img"}
              alt="ErrorImage"
              src={BASE_PATH.Others + "error_backgroud.png"}
              width={"100%"}
            />
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ color: "white" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#e3effa",
              p: 4,
            }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textContainerVariants}>
              <motion.div variants={textVariants}>
                <Typography
                  sx={{
                    color: "var(--headerColor)",
                    fontWeight: "bold",
                    fontSize: { xs: "calc(1rem + 1vw)", md: "calc(1rem + 1vw)" },
                  }}>
                  You ended at the wrong place!
                </Typography>
              </motion.div>
              <motion.div variants={textVariants}>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: { xs: "calc(0.7rem + 1vw)", md: "calc(0.5rem + 1vw)" },
                  }}>
                  Feel free to
                  <Typography
                    component={"span"}
                    sx={{
                      textDecoration: "none",
                      color: "var(--green)",
                      fontSize: { xs: "calc(0.7rem + 1vw)", md: "calc(0.5rem + 1vw)" },
                      px: 0.5,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setTimeout(() => {
                        scrollByID("Contact_us");
                      }, 150);
                      redirect(Route_Path.RFID_CONTACT);
                    }}>
                    reach out
                  </Typography>
                  to us with your queries!
                </Typography>
              </motion.div>
              <motion.div variants={textVariants}>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: { xs: "calc(0.7rem + 1vw)", md: "calc(0.5rem + 1vw)" },
                  }}>
                  Visit
                  <Typography
                    component={Link}
                    sx={{
                      textDecoration: "none",
                      color: "var(--green)",
                      fontSize: { xs: "calc(0.7rem + 1vw)", md: "calc(0.5rem + 1vw)" },
                      px: 0.5,
                    }}
                    href={Route_Path.HOME}>
                    Home
                  </Typography>
                  to explore us.
                </Typography>
              </motion.div>
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default NotFound;
