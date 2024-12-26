import React from "react";
import { Box, SvgIcon, keyframes } from "@mui/material";
import { styled } from "@mui/system";
import { Route_Path } from "@/apis/api";
import Link from "next/link";

const rotationDuration = "30s";
const hoverDuration = "0.3s";
const easeIn = "cubic-bezier(0.32, 0, 0.67, 0)";
const textColor = "#2B3338";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const RotatingLink = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    width: "calc(3rem + 1vw)",
    height: "calc(3rem + 1vw)",
  },
  [theme.breakpoints.up("xl")]: {
    width: "calc(3.8rem + 1vw)",
    height: "calc(3.8rem + 1vw)",
  },
  display: "inline-block",
  font: '500 3.55rem/1.4 "Josefin Sans"',
  textTransform: "uppercase",
  letterSpacing: "0.1175em",
  wordSpacing:'0.1em',
  textDecoration: "none",
  "&:hover": {
    // background: "var(--green)",
  },
  "& .link__svg": {
    width: "100%",
    height: "auto",
    transformBox: "fill-box",
    fill: textColor,
    stroke: textColor,
    strokeWidth: "1em",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    transition: `transform ${hoverDuration} ease-in-out`,
  },
  "&:hover .link__arrow": {
    transition: `transform ${hoverDuration} ease-in-out`,
  },
  "&:hover .link__svg": {
    fill: "var(--green)",
    stroke: "var(--blue)",
    transform: "scale(1.1)",
    transition: `transform ${hoverDuration} ease-in-out`,
  },
  "& .link__arrow": {
    strokeWidth: "0.4em",
    transformOrigin: "50% 50%",
    transition: `transform ${hoverDuration} ${easeIn}`,
  },
  "& .link__text": {
    // animation: `${rotate} ${rotationDuration} linear infinite`,
    transform: "rotate(-45deg)",
    transformOrigin: "50% 50%",
    letterSpacing: 5,
    fontSize: 30,
    
  },
  "&:hover .link__text": {
    animationPlayState: "paused",
  },
}));

const MoreFamiliesButton = () => {
  return (
    <RotatingLink href={Route_Path.PRODUCT_FAMILY} className="link" component={Link} title="View More Families">
      <SvgIcon
        viewBox="0 0 200 200"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        className="link__svg"
        aria-labelledby="link1-title link1-desc">
        <title id="link1-title">View More Families</title>
        <desc id="link1-desc">SIVA IoT Families</desc>
        <path
          id="link-circle"
          className="link__path"
          d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          stroke="none"
          fill="none"
        />
        <path
          className="link__arrow"
          d="M 50,100 L 100,130 L 50,160"
          fill="none"
          transform="translate(30 -30) "
        />
        <text className="link__text">
          <textPath href="#link-circle" stroke="none">
            View More Families 
          </textPath>
        </text>
      </SvgIcon>
    </RotatingLink>
  );
};

export default MoreFamiliesButton;
