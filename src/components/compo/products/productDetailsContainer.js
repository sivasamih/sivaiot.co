'use client'
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ProductSliderWithDatasheetBtn from "@/components/compo/products/productSliderImageWithDatasheetNtn";
import ProductDescription from "@/components/compo/products/productDescription";
import useMobileLandscape from "@/app/hooks/mobileLandscape";

const ProductDetailsContainer = ({ Name, BannerImage, ImageList, Datasheets, ProductFamilyName, Description, Contents,FamilyURL }) => {
    const isMobileLandscape = useMobileLandscape()
    return (
        <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            sx={{ py: 4 }}
        >
            <Grid item xs={12} sm={isMobileLandscape ? 6 : 12} md={6} lg={6}>
                <ProductSliderWithDatasheetBtn
                    Name={Name}
                    BannerImage={BannerImage}
                    ImageList={ImageList}
                    Datasheets={Datasheets}
                />
            </Grid>
            <Grid item xs={12} sm={isMobileLandscape ? 6 : 12} md={6} lg={6}>
                <ProductDescription
                    ProductFamilyName={ProductFamilyName}
                    Description={Description}
                    Contents={Contents}
                    FamilyURL={FamilyURL}
                />
            </Grid>
        </Grid>
    );
};
export default ProductDetailsContainer;
