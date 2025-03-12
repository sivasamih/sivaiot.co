"use client"
import React from "react";
import { Box } from "@mui/material";

const CustomLoading = () => {
    return (
        <Box sx={{
            position: "fixed",
            zIndex: 1400,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
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
        </Box>
    )
}
export default CustomLoading;