'use client'
import { Box, Skeleton } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import MuiSlider from "@/components/customcompo/slider/muislider";
import DatasheetButton from "@/components/compo/datasheet/datasheetbutton";
import useMobileLandscape from "@/app/hooks/mobileLandscape";
import { useState } from "react";

const ProductSliderWithDatasheetBtn = ({ Name, BannerImage, ImageList = [], Datasheets = [] }) => {
    const isMobileLandscape = useMobileLandscape()
    const [isImageError, serIsImageError] = useState(false)

    const handleImageError = () => {
        serIsImageError(true)
    }

    return (
        <Box
            sx={{
                borderRadius: 5,
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",

                }}
            >
                <MuiSlider
                    // autoPlay={true}
                    indicators={false}
                    duration={1200}
                    Content={ImageList?.map((item, index) => {
                        return (
                            <div key={Name + "-" + index} style={{ padding: 0, marginBottom: -10 }}>
                                {
                                    !isImageError ? (<Box
                                        component={"img"}
                                        sx={{ maxHeight: isMobileLandscape ? 250 : 450 }
                                        }
                                        src={APIURLS.BASE_PATH.ProductImage + item.ProductImage}
                                        alt={item.alt}
                                        width={"100%"}
                                        height={"100%"}
                                        style={{ objectFit: "cover" }
                                        }
                                        onError={handleImageError}
                                    />) :

                                        <Box
                                            component={"img"}
                                            sx={{ maxHeight: isMobileLandscape ? 250 : 450, p: 0, m: 0 }
                                            }
                                            src={`https://placehold.co/600x400?text=${Name}`}
                                            alt={item.alt}
                                            width={"100%"}
                                            height={"100%"}
                                            style={{ objectFit: "cover" }
                                            }
                                        />
                                }
                            </div>
                        );
                    })}
                />
            </Box>

            {Name && Datasheets.length > 0 ? <Box
                sx={{
                    bgcolor: "var(--green)",
                    "& button": {
                        color: "white",
                        py: 1.5,
                        letterSpacing: 1,
                        width: "100%",
                        borderRadius: 0,
                    },
                    "& .MuiBox-root": {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    cursor: "pointer",
                }}
            >
                <DatasheetButton
                    id={"DatasheetBtn"}
                    name={"Download Datasheet"}
                    Datasheet={Datasheets}
                    ProductName={Name}
                    ProductImage={BannerImage}
                />
                {/* <DatasheetBtnWithModal
                    id={"DatasheetBtn"}
                    name={"Download Datasheet"}
                    Datasheet={Datasheets}
                    ProductName={Name}
                    ProductImage={BannerImage}
                /> */}
            </Box> : null}
        </Box>
    )
}
export default ProductSliderWithDatasheetBtn;