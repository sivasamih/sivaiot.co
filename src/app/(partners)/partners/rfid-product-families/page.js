import { Box, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import PartnerProductFamilies from "@/components/compo/partners/partnerProductFamilies";

async function getProductFamilies() {
  let data;
  try {
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.GetProductFamily);
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {}
  return data;
}

const PartnerFamilies = async () => {
  const ProductFamilies = await getProductFamilies();

  if (!ProductFamilies) return notFound();

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
      <PartnerProductFamilies ProductFamilies={ProductFamilies} />
    </>
  );
};

export default PartnerFamilies;
