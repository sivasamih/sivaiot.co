'use client'
import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";

const SectionWrapper = ({ borderTop = false, borderBottom = false, borderRight = false, borderLeft = false, children }) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
    const borderSize = isLargeScreen ? "3rem" : 0;

    return (
        <Box
            sx={{
                borderTop: borderTop ? `${borderSize} solid var(--borderColor)` : 0,
                borderRight: borderRight ? `${borderSize} solid var(--borderColor)` : 0,
                borderBottom: borderBottom ? `${borderSize} solid var(--borderColor)` : 0,
                borderLeft: borderLeft ? `${borderSize} solid var(--borderColor)` : 0,
                py: 4,
                position: "relative",
                "&:before": {
                    content: "''",
                    position: "absolute",
                    bottom: borderBottom ? `-${borderSize}` : "auto",
                    right: borderRight ? `-${borderSize}` : "auto",
                    width: borderBottom || borderRight ? borderSize : 0,
                    height: borderBottom || borderRight ? borderSize : 0,
                    backgroundColor: "var(--borderColor)",
                    display: borderBottom || borderRight ? "block" : "none",
                    [theme.breakpoints.up("md")]: {
                        display: borderBottom || borderRight ? "block" : "none",
                    },
                },
            }}
        >
            {/* Wrapper to adjust content margins based on border visibility */}
            <Box
                sx={{
                    mr: borderRight ? `-${borderSize}` : 0,
                    ml: borderLeft ? `-${borderSize}` : 0,
                }}
            >
                    {children}
            </Box>
        </Box>
    );
};

export default SectionWrapper;
