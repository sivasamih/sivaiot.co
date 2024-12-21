import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Star } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Newscard = (props) => {
  let index = props.index;
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      // ref={ref}
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          maxWidth: 450,
          p: 0,
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          boxShadow: "0 0 8px -1px black",
          borderRadius: 0,
        }}
      >
        <CardContent
          sx={{
            width: { xs: "100%", md: "30%" },
            height: { xs: 150, md: "auto" },
            bgcolor: "var(--darkGreen)",
            p: 0,
          }}
        >
          &nbsp;
        </CardContent>
        <CardContent
          sx={{
            width: { xs: "100%", md: "70%" },
            // bgcolor: "white",
            // bgcolor: "var(--green)",

            px: { xs: 2 },
            mt: { xs: "10%", sm: "10%", md: 2 },
            pl: { xs: 2, md: 11 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "var(--headerColor)",
              letterSpacing: 1,
              fontFamily: "LucidaGrande",
              fontSize: 18,
              py: 1,
            }}
          >
            {props.title}
          </Typography>
          <Divider sx={{ bgcolor: "#b0bec5" }} />
          <Box sx={{ pt: 1, pb: 3, position: "relative" }}>
            <Typography sx={{ fontFamily: "BreeSerif" }}>
              {props.description}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#b0bec5 ",
                width: "100%",
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 5,
                  right: 5,
                  width: "55%",
                  height: "1px",
                  bgcolor: "#b0bec5",
                },
              }}
            >
              {props.date}
            </Typography>
            <Box sx={{ position: "absolute", bottom: 0, right: 5 }}>
              <Typography
                variant="inherit"
                component={NavLink}
                to={"#"}
                sx={{
                  p: 0,
                  m: 0,
                  fontSize: 12,
                  textDecoration: "none",
                  color: "black",
                  // fontStyle: "italic",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Read more...
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "25%", md: "50%" },
            left: { xs: "50%", md: "25%" },
            transform: {
              xs: "translate(-50%,-50%)",
              md: "translate(-50%,-50%)",
            },
            width: { xs: "85%", md: "40%" },
            height: { xs: "40%", sm: "45%", md: "80%" },
            bgcolor: "white",
            boxShadow: {
              xs: "-5px 8px 5px #00000049",
              md: "-5px 8px 5px #00000049",
            },
            p: 0.2,
          }}
        >
          <img
            src={props.image}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Card>
    </motion.div>
  );
};

export default Newscard;
