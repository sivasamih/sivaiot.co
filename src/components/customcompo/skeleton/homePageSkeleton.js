import { Box, Container, Skeleton } from "@mui/material";

const HomePageSkeleton = () => {
    return (
        <Box>
            <Container>
                <Skeleton height={300} animation="wave" sx={{ width: "100%" }} />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
                    <Skeleton height={300} animation="wave" sx={{ flex: 1 }} />
                    <Skeleton height={300} animation="wave" sx={{ flex: 1 }} />
                </Box>
            </Container>
        </Box>
    );
};
export default HomePageSkeleton;
