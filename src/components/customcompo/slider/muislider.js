import Carousel from "react-material-ui-carousel";

const MuiSlider = (props) => {
  return (
    <Carousel
      sx={{ position: "relative" }}
      autoPlay={props.autoPlay? props.autoPlay : false}
      animation="slide"
      duration={800}
      height={props.height?props.height:"50vh"}
      navButtonsAlwaysVisible={
        props.Content && props.Content.length > 1 ? true : false
      }
      navButtonsAlwaysInvisible={
        props.Content && props.Content.length > 1 ? false : true
      }
      indicators={props.indicators ? props.indicators : false}
      indicatorContainerProps={{
        style: {
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center", // 4
          zIndex: 1,
        },
        indicatorIcon: {
          fontSize: "40px",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {},
      }}
      navButtonsWrapperProps={{
        style: {
          color: "red",
          fontSize: 30,
        },
      }}
      
    >
      {props.Content}
    </Carousel>
  );
};

export default MuiSlider;