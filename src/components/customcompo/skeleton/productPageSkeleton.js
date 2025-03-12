import { Box, Container, Grid, Skeleton } from "@mui/material";

const ProductPageSkeleton = () => {
    return (

        <Box sx={{ mt: 4 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8} sx={{ mt: 5 }}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Skeleton key={index} variant="rectangular" height={30} sx={{ mb: 1 }} />
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Skeleton variant="rectangular" height={250} />
                    </Grid>
                </Grid>
                <Box sx={{ mt: 5 }}>
                    <Skeleton variant="rectangular" height={50} sx={{ mb: 2, maxWidth: 500, mx: "auto" }} />
                    <Skeleton variant="rectangular" height={50} />
                </Box>
                <Box sx={{ display: "flex", my: 8, justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ flex: 1, px: { xs: 4, md: 8 } }}>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Skeleton key={index} variant="rectangular" height={20} sx={{ mb: 2, }} />
                        ))}

                    </Box>
                    <Box sx={{ flex: 2 }}>
                        <Skeleton variant="rectangular" height={200} sx={{ mb: 2, width: '100%', clipPath: "polygon(10% 0 ,100% 0,100% 100%,0 100%)" }} />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default ProductPageSkeleton;