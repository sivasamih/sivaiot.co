import { Route_Path } from "@/apis/api";
import { Box, Chip, Divider, Typography } from "@mui/material";
import Link from "next/link";


const ProductDescription = ({ ProductFamilyName, Description, Contents, FamilyURL }) => {
    return (
        <Box sx={{ py: 1, pl: { xs: 0, md: 4 } }}>
            {ProductFamilyName && (
                <Chip
                    sx={{
                        bgcolor: "var(--darkGreen)",
                        color: "white",
                        fontSize: {
                            xs: "calc(0.5rem + 1vw)",
                            md: "calc(0.5rem + 0.5vw)",
                        },
                        cursor: "pointer",
                        mb: 2,
                    }}
                    label={ProductFamilyName}
                    component={FamilyURL ? Link : "div"}
                    href={FamilyURL ? Route_Path.PRODUCT_FAMILY + "/" + FamilyURL : null}
                />
            )}

            {/* -------------------Description --------------- */}
            <Box sx={{}}>
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: {
                            xs: "calc(1rem + 1vw)",
                            md: "calc(0.5rem + 1vw)",
                        },
                        fontWeight: "bold",
                        mb:1
                    }}
                >
                    Description
                </Typography>
                {/* <Divider sx={{ my: 2 }} /> */}
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: {
                            xs: "calc(0.5rem + 1vw)",
                            md: "16px",
                        },
                        textAlign: "justify",
                        color: "black",
                    }}
                >
                    {Description}
                </Typography>
            </Box>

            <Divider sx={{ my: 2, mb: 3 }} />

            <Box
                dangerouslySetInnerHTML={{
                    __html: Contents,
                }}
                sx={{
                    "& li": {
                        ml: 4,
                    },
                }}
            />
        </Box>
    )
}
export default ProductDescription;