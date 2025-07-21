"use client";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-multi-carousel";
import * as APIURLS from "@/apis/apiconstant";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import { Route_Path } from "@/apis/api";
// let ImageList = [
//   {
//     ImgUrl: APIURLS.BASE_PATH.SlidesImage + "design-lab-banner-1.webp",
//     alt: "SIVA Design Lab- RFID labels/tags fabricated to your specific project needs.",
//     url: Route_Path.DESIGN_LAB,
//     caption: {
//       title: "SIVA Design Lab - RFID labels/tags fabricated to your specific project needs.",
//       desc: "A consultative approach to fabricating a custom RFID label/tag around the unique needs of the customer",
//     }

//   },
//   {
//     ImgUrl: APIURLS.BASE_PATH.SlidesImage + "High-Temp.webp",
//     alt: "Heavy Duty Industries",
//     url: Route_Path.PRODUCTS + "/uhf-hang-tag-for-metal-asset",
//     caption: {
//       title: "Tags For HEAVY DUTY INDUSTRIES",
//       subtitle: "( Metals & Constructions )",
//       desc: "Hang-tags designed to provide durability and robustness in harsh environments. Including temperature resistance up to 450°C",
//     },

//   },
//   {
//     ImgUrl: APIURLS.BASE_PATH.SlidesImage + "Flora_Web_Banner.webp",
//     alt: "Flora_Web_Banner",
//     url: Route_Path.PRODUCTS + "/horticulture-rfid-tag",
//     caption: {
//       title: "",
//       desc: "",
//     }

//   },
// ];


const ImageSlider = (props) => {
  let ImageList = [
    {
      ImgPath: APIURLS.BASE_PATH.SlidesImage + "design-lab-banner-1.webp",
      alt: "SIVA Design Lab- RFID labels/tags fabricated to your specific project needs.",
      url: Route_Path.DESIGN_LAB,
      Title: "SIVA Design Lab - RFID labels/tags fabricated to your specific project needs.",
      desc: "A consultative approach to fabricating a custom RFID label/tag around the unique needs of the customer",
    },
    {
      ImgPath: APIURLS.BASE_PATH.SlidesImage + "High-Temp.webp",
      alt: "Heavy Duty Industries",
      url: Route_Path.PRODUCTS + "/i200T-Hang-Tag",
      Title: "Tags For HEAVY DUTY INDUSTRIES",
      Subtitle: "( Metals & Constructions )",
      desc: "Hang-tags designed to provide durability and robustness in harsh environments. Including temperature resistance up to 450°C",
    },
    {
      ImgPath: APIURLS.BASE_PATH.SlidesImage + "Flora_Web_Banner.webp",
      alt: "Flora_Web_Banner",
      url: Route_Path.PRODUCTS + "/Loop-Lock-Plant-Tag",
      Title: "",
      desc: "",
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
        ssr={true}
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        // customTransition="all .5s ease-in-out" // Keep this for the slide movement
        customTransition={`transform ${props.duration ? props.duration : 500}ms ease-in-out`}
        transitionDuration={props.duration ? props.duration : 500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {ImageList?.map((item, index) => {
          return (
            <Link key={index} href={item.url}>
              <Box
                key={index}
                sx={{
                  bgcolor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  transition: `opacity ${props.duration ? props.duration : 500}ms ease-in-out`,
                }}
              >
                <img src={item.ImgPath} alt={item.alt} width={"100%"} height={"100%"} />
                {item.Title || item.Subtitle || item.desc ? (
                  <Box
                    sx={{
                      width: { xs: "80%", sm: "45%", md: "35%" },
                      position: "absolute",
                      left: { xs: "50%", sm: "50%" },
                      top: { xs: "50%", sm: "50%" },
                      transform: {
                        xs: "translate(-50% , -50%)",
                        md: "translate(-50% , -50%)",
                      },
                      bgcolor: "#f2f3f7cd",
                      backdropFilter: "blur(2px)",
                      p: { xs: 2, sm: 2 },
                    }}
                  >
                    {item.Title && (
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "calc(0.6rem + 1vw)",
                            md: "calc(0.8rem + 1vw)",
                          },
                          color: "#1E4188",
                          fontFamily: "LibreBaskerville",
                          lineHeight: 1.2,
                          mb: { xs: 1, md: 1 },
                          textAlign: "center",
                        }}
                        variant="h6"
                      >
                        {item.Title}
                      </Typography>
                    )}
                    {item.Subtitle && (
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "calc(0.3rem + 1vw)",
                            md: "calc(0.4rem + 1vw)",
                          },
                          color: "#1E4188",
                          fontFamily: "LibreBaskerville",
                          lineHeight: 1.2,
                          mt: { xs: -1, md: 0 },
                          mb: 2,
                          textAlign: "center",
                        }}
                        variant={"subtitle1"}
                      >
                        {item.Subtitle}
                      </Typography>
                    )}
                    {item.desc && (
                      <Typography
                        sx={{
                          color: "black",
                          pl: 1,
                          fontSize: {
                            xs: "calc(0.4rem + 1vw)",
                            md: "calc(0.2rem + 1vw)",
                          },
                          display: "block",
                          textDecoration: "none",
                          fontFamily: "BreeSerif",
                          lineHeight: 1.2,
                          textAlign: "center",
                        }}
                      >
                        {item.desc}
                      </Typography>
                    )}
                  </Box>
                ) : null}
              </Box>
            </Link>
          );
        })}
      </Carousel>
    </>
  );
};

export default ImageSlider;