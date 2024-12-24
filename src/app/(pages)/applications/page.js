import { Box, Container, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import IndustriesCard from "@/components/customcompo/cards/industriesCard";
import { Route_Path } from "@/apis/api";
import { notFound } from "next/navigation";

async function ProductDetailsByIndustries() {
  let data;
  try {
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.GetProductIndustriesDetails);
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {}
  return data;
}

const ApplicationsPage = async () => {
  const productsIndustries = await ProductDetailsByIndustries();
  if (!productsIndustries) return notFound();

  return (
    <>
      <Box sx={{ bgcolor: "var(--borderColor)" }}>
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
          RFID Product Applications
        </Typography>
      </Box>

      <Box>
        <Container>
          <Box
            sx={{
              my: 4,
              display: "grid",
              gap: 4,
            }}
          >
            {productsIndustries?.map((item, index) => {
              return (
                <Box key={index}>
                  <IndustriesCard
                    id={index}
                    Title={item.Name}
                    Desc={item.Description}
                    Image={APIURLS.BASE_PATH.ProductIndustries + item.Images}
                    UrlName={Route_Path.Application + "/" + item.UrlName}
                  />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default ApplicationsPage;
