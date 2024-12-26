"use client";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-multi-carousel";
import * as APIURLS from "@/apis/apiconstant";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import { Route_Path } from "@/apis/api";

const ImageSlider = (props) => {
  let ImageList = [
    {
      ImgPath: APIURLS.BASE_PATH.SlidesImage + "Beer-Keg.webp",
      alt: "Metal Cylinder Management",
      url: Route_Path.PRODUCTS + "/beer-keg-and-gas-canister",
      Title: "Metal Cylinder Management",
      desc: "Cyltag™ designed specifically for metal objects with a curved surface like Beer Kegs, cylinders, metal pipes etc. ",
    },
    {
      ImgPath: APIURLS.BASE_PATH.SlidesImage + "Ferro-series-Banner.webp",
      alt: "Metal Cylinder Management",
      url: Route_Path.PRODUCT_FAMILY + "/on-metal-rfid-labels",
      Title: "",
      desc: "",
    },

    {
      ImgPath: APIURLS.BASE_PATH.SlidesImage + "High-Temp.webp",
      alt: "Heavy Duty Industries",
      url: Route_Path.PRODUCTS + "/uhf-hang-tag-for-metal-asset",
      Title: "Tags For HEAVY DUTY INDUSTRIES",
      Subtitle: "( Metals & Constructions )",
      desc: "Hang-tags designed to provide durability and robustness in harsh environments. Including temperature resistance up to 450°C",
    },
    {
      ImgPath: APIURLS.BASE_PATH.SlidesImage + "Flora_Web_Banner.webp",
      alt: "Flora_Web_Banner",
      url: Route_Path.PRODUCTS + "/loop-lock-plant-tag",
      Title: "Ferro On-Metal Label Series, REDEFINED!",
      desc: "New IC, New antenna design, Improved read range and enhanced printer compatibility",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={props.duration ? props.duration : 500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* slide -1 */}
        <Box
          sx={{
            // height: "-webkit-fill-available",
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          component={Link}
          href={ImageList[0].url}
        >
          <img
            src={ImageList[0].ImgPath}
            alt={ImageList[0].alt}
            width={"100%"}
            height={"100%"}
          />
          <Box
            sx={{
              width: { xs: "80%", sm: "35%" },
              position: "absolute",
              left: { xs: "50%", sm: "65%", md: "50%" },
              top: { xs: "50%", sm: "55%", md: "50%" },
              transform: {
                xs: "translate(-50% , -50%)",
                sm: "translate(-30%,-30%)",
                md: "translate(25%)",
              },
              bgcolor: "#f2f3f7cd",
              // backdropFilter:'blur(5px)',
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.8rem + 1vw)",
                },
                p: 1,
                color: "#1E4188",
                // color: "var(--green)",
                fontFamily: "LibreBaskerville",
                lineHeight: 1.2,
                mb: { xs: 1, md: 1 },
                textAlign: "center",
              }}
              variant="h6"
            >
              {ImageList[0].Title}
            </Typography>
            {ImageList[0].Subtitle && (
              <Typography
                sx={{
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.8rem + 1vw)",
                  },
                  p: 1,
                  color: "#1E4188",
                  // color: "var(--green)",
                  fontFamily: "LibreBaskerville",
                  lineHeight: 1.2,
                  mb: 2,
                  textAlign: "center",
                }}
                variant={"subtitle1"}
              >
                {ImageList[0].Subtitle}
              </Typography>
            )}
            <Typography
              sx={{
                color: "black",
                pl: 1,
                fontSize: {
                  xs: "calc(0.6rem + 1vw)",
                  md: "calc(0.2rem + 1vw)",
                },
                display: "block",
                textDecoration: "none",
                fontFamily: "BreeSerif",
                lineHeight: 1.2,
                textAlign: "center",
              }}
              component={Link}
              href={ImageList[0].url}
            >
              {ImageList[0].desc}
            </Typography>
          </Box>
        </Box>
        {/* slide -2 */}
        <Box
          sx={{
            // height: "-webkit-fill-available",
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          component={Link}
          href={ImageList[1].url}
        >
          <img
            src={ImageList[1].ImgPath}
            alt={ImageList[1].alt}
            width={"100%"}
            height={"100%"}
          />
          <Box
            sx={{
              display: "none",
              width: { xs: "80%", sm: "30%" },
              position: "absolute",
              left: { xs: "50%", sm: "5%" },
              top: { xs: "50%", sm: "40%" },
              transform: {
                xs: "translate(-50% , -70%)",
                sm: "translate(-20%)",
                md: "translate(0% , -50%)",
              },
              bgcolor: "#fffc",
              p: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.8rem + 1vw)",
                },
                p: 1,
                color: "#1E4188",
                fontFamily: "LibreBaskerville",
                lineHeight: 1.2,
                mb: 2,
                textAlign: "center",
              }}
              variant="h6"
            >
              {ImageList[1].Title}
            </Typography>
            <Typography
              sx={{
                color: "black",
                pl: 1,
                fontSize: {
                  xs: "calc(0.6rem + 1vw)",
                  md: "calc(0.8rem + 1vw)",
                },
                display: "block",
                textDecoration: "none",
                fontFamily: "BreeSerif",
                lineHeight: 1.2,
                textAlign: "center",
              }}
              component={Link}
              href={ImageList[1].url}
            >
              {ImageList[1].desc}
            </Typography>
          </Box>
        </Box>
        {/* slide-3 */}

        <Box
          sx={{
            // height: "-webkit-fill-available",
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          component={Link}
          href={ImageList[2].url}
        >
          <img
            src={ImageList[2].ImgPath}
            alt={ImageList[2].alt}
            width={"100%"}
            height={"100%"}
          />
          <Box
            sx={{
              width: { xs: "80%", sm: "40%" },
              position: "absolute",
              left: { xs: "50%", sm: "50%" },
              top: { xs: "50%", sm: "50%" },
              transform: {
                xs: "translate(-50% , -50%)",
                sm: "translate(-20%)",
                md: "translate(-50% , -50%)",
              },
              bgcolor: "#fffc",
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.8rem + 1vw)",
                },
                color: "#1E4188",
                fontFamily: "LibreBaskerville",
                lineHeight: 1.2,
                textAlign: "center",
              }}
              variant="h6"
            >
              {ImageList[2].Title}
            </Typography>
            {ImageList[2].Subtitle && (
              <Typography
                sx={{
                  fontSize: {
                    xs: "calc(0.6rem + 1vw)",
                    md: "calc(0.5rem + 1vw)",
                  },
                  color: "#1E4188",
                  // color: "var(--green)",
                  fontFamily: "LibreBaskerville",
                  mb: 2,
                  textAlign: "center",
                }}
                variant={"subtitle1"}
              >
                {ImageList[2].Subtitle}
              </Typography>
            )}
            <Typography
              sx={{
                color: "black",
                pl: 1,
                fontSize: {
                  xs: "calc(0.6rem + 1vw)",
                  md: "calc(0.2rem + 1vw)",
                },
                display: "block",
                textDecoration: "none",
                fontFamily: "BreeSerif",
                lineHeight: 1.2,
                textAlign: "center",
              }}
              component={Link}
              href={ImageList[2].url}
            >
              {ImageList[2].desc}
            </Typography>
          </Box>
        </Box>
        {/* slide-4 */}
        <Box
          sx={{
            // height: "-webkit-fill-available",
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          component={Link}
          href={ImageList[3].url}
        >
          <img
            src={ImageList[3].ImgPath}
            alt={ImageList[3].alt}
            width={"100%"}
            height={"100%"}
          />
          <Box
            sx={{
              display: "none",
              width: { xs: "80%", sm: "30%" },
              position: "absolute",
              left: { xs: "50%", sm: "5%" },
              top: { xs: "50%", sm: "40%" },
              transform: {
                xs: "translate(-50% , -70%)",
                sm: "translate(-20%)",
                md: "translate(0% , -50%)",
              },
              bgcolor: "#fffc",
              p: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.8rem + 1vw)",
                },
                p: 1,
                color: "#1E4188",
                fontFamily: "LibreBaskerville",
                lineHeight: 1.2,
                mb: 2,
                textAlign: "center",
              }}
              variant="h6"
            >
              {ImageList[3].Title}
            </Typography>
            <Typography
              sx={{
                color: "black",
                pl: 1,
                fontSize: {
                  xs: "calc(0.6rem + 1vw)",
                  md: "calc(0.8rem + 1vw)",
                },
                display: "block",
                textDecoration: "none",
                fontFamily: "BreeSerif",
                lineHeight: 1.2,
                textAlign: "center",
              }}
              component={Link}
              href={ImageList[3].url}
            >
              {ImageList[3].desc}
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </>
  );
};
export default ImageSlider;
