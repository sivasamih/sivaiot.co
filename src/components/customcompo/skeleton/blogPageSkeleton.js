import { Box, Grid, Skeleton } from "@mui/material"

const BlogPageSkeleton = () => {
    return (
        <Box>
            <Skeleton variant="rectangular" height={80} sx={{ marginBottom: 2 }} />
            <Grid container spacing={4}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Skeleton variant="rectangular" height={120} sx={{ marginBottom: 2 }} />
                        <Skeleton variant="rectangular" height={30} sx={{ marginBottom: 1 }} />
                        <Skeleton variant="rectangular" height={30} sx={{ marginBottom: 2 }} />
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Skeleton key={i} variant="rectangular" height={30} sx={{ marginBottom: 1 }} />
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default BlogPageSkeleton;