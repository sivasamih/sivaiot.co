import FavoriteProduct from "@/components/compo/partners/FavoriteProduct";
import { Box, Typography } from "@mui/material";



const PartnerFavoriteProduct = async () => {
  return (
    <>
      <Box sx={{ bgcolor: "#F2F4F7" }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: "calc(1.2rem + 1vw)",
            py: 4,
            letterSpacing: 1,
            color: "var(--headerColor)",
          }}
        >
          My Favorites
        </Typography>
      </Box>
      <FavoriteProduct />
    </>
  );
};

export default PartnerFavoriteProduct;
