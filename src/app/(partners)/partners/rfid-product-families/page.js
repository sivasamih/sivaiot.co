import { Box, Typography } from "@mui/material";
import PartnerProductFamilies from "@/components/compo/partners/partnerProductFamilies";


const PartnerFamilies = async () => {


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
          RFID Product Families
        </Typography>
      </Box>
      <PartnerProductFamilies />
    </>
  );
};

export default PartnerFamilies;
