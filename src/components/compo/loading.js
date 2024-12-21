import React, { useEffect } from "react";
import { Backdrop } from "@mui/material";
import { Box } from "@mui/system";

const Loading = (props) => {


  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.open]);

  return (
    <>
      <Backdrop
        open={props.open === false || props.open === "false" ? false : true}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, 

        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            "& .text-line text": {
              stroke: "#fff",
              strokeWidth: '1px',
              strokeDasharray: 500,
              strokeDashoffset: 500,
              animation: "dash 2s linear forwards infinite, filling 1s ease-in forwards",
              fontStyle: "normal",
              fill: "url(#text-gradient)",
              fontSize: 'calc(4rem + 1vw)',
              // fontWeight: 'bold',
              // fontFamily: "LucidaGrande",
              zIndex: (theme) => theme.zIndex + 1,
            },
            "@keyframes dash": {
              to: {
                strokeDashoffset: 0,
              },
            },
            "@keyframes filling": {
              from: {
                fillOpacity: 0,
              },
              to: {
                fillOpacity: 1,
              },
            },
          }}
        >
          <svg height="200" width="300" className="text-line"  >
            <defs>
              <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgb(0, 90, 171)", stopOpacity: 1 }} />
                {/* <stop offset="70%" style={{ stopColor: "rgba(97,238,165,1)", stopOpacity: 1 }} /> */}
                <stop offset="100%" style={{ stopColor: "rgb(57, 181, 74)", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="loader-text">
              SIVA
            </text>
          </svg>
        </Box>
      </Backdrop>
    </>
  );
};

export default Loading;
