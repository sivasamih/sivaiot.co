import { Box } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup, Divider, IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { motion } from "framer-motion";

const MultiItemSlider = (props) => {
  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div>
        <Box
          position="absolute"
          top="-16%"
          right={0}
          zIndex={1}
          sx={{ overflow: "hidden", p: 1,
            // display:{xs:props.Content.length <2?"none":"block"}
           }}
        >
          <ButtonGroup
            sx={{ boxShadow: "0 0 5px -1px black", borderRadius: 30 }}
          >
            <IconButton
              onClick={previous}
              size="small"
              disabled={currentSlide === 0 ? true : false}
              component={motion.button}
              whileTap={{ scale: 0.8 }}
              sx={{ color: "#005AAB" }}
            >
              <NavigateBefore />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <IconButton
              onClick={next}
              size="small"
              component={motion.button}
              whileTap={{ scale: 0.8 }}
              sx={{ color: "#005AAB", fontWeight: "bold" }}
            >
              <NavigateNext />
            </IconButton>
          </ButtonGroup>
        </Box>
      </div>
    );
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Carousel
        additionalTransfrom={0}
        autoPlay={false}
        arrows={false}
        containerClass="container-with-dots"
        responsive={{
          largescreen: {
            breakpoint: {
              max: 3000,
              min: 1400,
            },
            items: 4,
            partialVisibilityGutter: 50,
          },
          extralargescreen: {
            breakpoint: {
              max: 5000,
              min: 2500,
            },
            items: 5,
            partialVisibilityGutter: 50,
          },
          desktop: {
            breakpoint: {
              max: 1400,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        customButtonGroup={<CustomButtonGroup />}
        renderButtonGroupOutside={true}
        showDots={false}
        slidesToSlide={1}
      >
        {props.Content ? props.Content : []}
      </Carousel>
    </Box>
  );
};
export default MultiItemSlider;
