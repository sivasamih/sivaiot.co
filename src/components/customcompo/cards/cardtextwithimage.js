import { Box, Button, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Paragraph1 from "../Typo/paragraph1";
import { useInView } from "react-intersection-observer";
import AnimatedPageWrapper from "../../compo/animatepagewrapper";

const CardTextWithImage = (props) => {
  const [ref, Inview] = useInView({ threshold: 0.1, triggerOnce: false });
  return (
    <>
      <AnimatedPageWrapper>
        <Box
          // ref={ref}
          // component={motion.div}
          // initial={{ opacity: 0,scale:0.8}}
          // animate={Inview ? { opacity: 1,scale:1 } : { opacity: 0,scale:0.8 }}
          // transition={{ duration: 0.8 }}
          sx={{
            width: "100%",
            maxHeight: { xs: "auto", md: 260 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            // borderRadius: "8px",
            overflow: "hidden",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",
            position: "relative",
            // background: "#cae3cd61",
            my: 3,
            position: "relative",
            transition: "1s all",
            "&:hover": { transform: "scale(1.02)", transition: "0.5s all" },
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "25%" },
              color: "#fff",
              order: { md: props.ImagePosition === "right" ? 2 : 1 },
              // filter: { xs: "inherit", md: "drop-shadow(0px 0px 8px #000)" },
            }}
            id="img-box"
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                // clipPath: {
                //   xs: "",
                //   md:
                //     props.ImagePosition === "right"
                //       ? "polygon(0 50% ,20% 0,   100% 0, 100% 100%,20% 100%)"
                //       : "polygon(0 0 ,80% 0,  100% 50%, 80% 100%,0 100%)",
                // },
                // clipPath: { xs: "", md: props.ImagePosition === "right" ? 'polygon(20% 0, 100% 0 , 100% 100%, 0 100%)' : 'polygon(0 0 ,75% 0,  100% 100%, 0 100%)' },
                "& img": { minHeight: 150 },
                // shapeOutside: "squire()",
              }}
            >
              <img
                src={props.ImageURL}
                alt="Product"
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "75%" },
              padding: "20px",
              pb: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              pb: 2,
              alignItems: "center",
              zIndex: 2,
              order: { md: props.ImagePosition === "right" ? 1 : 2 },
            }}
          >
            <Box>
              <Paragraph1
                variant="h5"
                sx={{
                  color: "#333",
                  marginBottom: "10px",
                  fontWeight: 550,
                  fontSize: { xs: 14, md: 16, lg: 18 },
                  textAlign: "left",
                }}
              >
                {props.Title}
              </Paragraph1>
              <Paragraph1
                variant="body1"
                sx={{
                  color: "#333",
                  // marginBottom: '20px',
                  fontSize: { xs: 12, md: 14, lg: 18 },
                  fontFamily: '"Source Sans 3", sans-serif;',
                }}
              >
                {props.Desc && props.Desc.slice(0, 200)}
                <Paragraph1
                  sx={{
                    // color: "green",
                    fontWeight: "550",
                    mt: 4,
                    ml: 4,
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                  onClick={props.onClickDrawar}
                  component={"span"}
                >
                  Read More...
                </Paragraph1>
              </Paragraph1>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                gap: { xs: 2, md: 2 },
                p: 1,
                mt: 2,
                "& p": { fontSize: { xs: 10, md: 12, lg: 16 } },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "100%", md: "auto" },
                  mt: { xs: 1, md: 0 },
                }}
              >
                <Button
                  variant="contained"
                  fullWidth={true}
                  component={motion.button}
                  whileTap={{ scale: 0.8 }}
                >
                  Download Datasheet
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </AnimatedPageWrapper>
    </>
  );
};

export default CardTextWithImage;
