import { Box, Container, Grid, Skeleton } from "@mui/material"


const FamiliesPageSkeleton = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Container>
                <Skeleton height={80} sx={{ maxWidth: 350, mx: 'auto' }} animation="wave" />
                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={4}>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <Grid item xs={12} md={6} xl={3} key={index}>
                                <Skeleton variant="rectangular" height={150} sx={{ mb: 2 }} />
                                <Skeleton variant="rectangular" height={30} sx={{ mb: 2 }} />
                                <Skeleton variant="rectangular" height={10} sx={{ mb: 1 }} />
                                <Skeleton variant="rectangular" height={10} sx={{ mb: 1 }} />
                                <Skeleton variant="rectangular" height={10} sx={{ mb: 1 }} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
export default FamiliesPageSkeleton