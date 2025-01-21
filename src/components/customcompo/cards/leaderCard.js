'use client'
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import * as APIURLS from "@/apis/apiconstant";
import { Route_Path } from "@/apis/api";
import useMobileLandscape from "@/app/hooks/mobileLandscape";

const LeaderCard = ({ name, image, position, description, description_one, description_two, isImageLeft = false }) => {
    const isMobileLandscape = useMobileLandscape()


    const getBorderStyles = (isImageLeft) => ({
        ...(isImageLeft === 'true' || isImageLeft === true
            ? {
                borderLeft: { xs: "", md: "3rem solid var(--borderColor)" },
                borderBottom: { xs: "", md: "3rem solid var(--borderColor)" },
                borderRight: { xs: "", md: "3rem solid transparent" },
                borderTop: { xs: "", md: "3rem solid transparent" },
            }
            : {
                borderRight: { xs: "", md: "3rem solid var(--borderColor)" },
                borderTop: { xs: "", md: "3rem solid var(--borderColor)" },
                borderLeft: { xs: "", md: "3rem solid transparent" },
                borderBottom: { xs: "", md: "3rem solid transparent" },
            }),
    })

    return (
        <Grid
            container
            spacing={0}
            justifyContent={"center"}
            alignContent={"center"}
        >
            <Grid
                item
                xs={12}
                sm={isMobileLandscape ? 6 : 12}
                md={4}
                lg={4}
                sx={{
                    ...getBorderStyles(isImageLeft),
                    p: 1,
                    order: { xs: 1, md: isImageLeft ? 1 : 2 }
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        p: 1,
                    }}
                >
                    <LazyImage
                        src={image}
                        alt="Rajiv K. Aggarwal"
                        width="100%"
                        height="100%"
                    />
                </Box>{" "}
            </Grid>
            <Grid
                item
                xs={12}
                sm={isMobileLandscape ? 6 : 12}
                md={8}
                lg={8}
                sx={{
                    order: { xs: 2, md: isImageLeft ? 2 : 1 }

                }}

            >
                <Box sx={{ mt: { xs: 0, md: "3rem" } }}>
                    <Typography
                        component="h2"
                        sx={{
                            textAlign: { xs: "left", md: isImageLeft ? "left" : "right" },
                            fontWeight: "bold",
                            py: 1,
                            color: "var(--headerColor)",
                            fontSize: {
                                xs: isMobileLandscape ? "calc(0.6rem + 1vw)" : "calc(1.1rem + 1vw)",
                                md: "calc(1.1rem + 1vw)",
                            },
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        component="h1"
                        sx={{
                            fontWeight: "bold",
                            textAlign: { xs: "left", md: isImageLeft ? "left" : "right" },
                            pb: 1,
                            fontSize: {
                                xs: isMobileLandscape ? "calc(0.6rem + 1vw)" : "calc(0.8rem + 1vw)",
                                md: "calc(0.4rem + 1vw)",
                            },
                        }}
                    >
                        {position}
                    </Typography>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: {
                                xs: isMobileLandscape ? "calc(0.4rem + 1vw)" : "calc(0.8rem + 1vw)",
                                md: "calc(0.2rem + 1vw)",
                            },
                            lineHeight: 1.2,
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {description}
                    </Typography>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: {
                                xs: isMobileLandscape ? "calc(0.4rem + 1vw)" : "calc(0.8rem + 1vw)",
                                md: "calc(0.2rem + 1vw)",
                            },
                            lineHeight: 1.2,
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {description_one}
                    </Typography>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: {
                                xs: isMobileLandscape ? "calc(0.4rem + 1vw)" : "calc(0.8rem + 1vw)",
                                md: "calc(0.2rem + 1vw)",
                            },
                            lineHeight: 1.2,
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {description_two}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default LeaderCard;