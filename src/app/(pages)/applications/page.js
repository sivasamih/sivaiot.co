import { Box, Container, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import IndustriesCard from "@/components/customcompo/cards/industriesCard";
import { Route_Path } from "@/apis/api";
import { notFound } from "next/navigation";
import CardTwo from "@/components/customcompo/cards/cardtwo";
import IndustriesCardTwo from "@/components/customcompo/cards/industriesCardTwo";

export const dynamic = "force-dynamic";
async function ProductDetailsByIndustries() {
  let data;
  try {
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.GetProductIndustriesDetails);
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) { }
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
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 4,
            }}
          >
            {productsIndustries?.map((item, index) => {
              return (
                <Box key={index}>
                  {/* <IndustriesCard
                    id={index}
                    Title={item.Name}
                    Desc={item.Description}
                    Image={APIURLS.BASE_PATH.ProductIndustries + item.Images}
                    UrlName={Route_Path.Application + "/" + item.UrlName}
                  /> */}
                  <IndustriesCardTwo
                    key={index}
                    title={item.Name}
                    desc={item.Description}
                    alt={item.ImageAlt}
                    IsExternalURL={item.IsExternalURL}
                    image={APIURLS.BASE_PATH.ProductIndustries + item.Images}
                    titleTextColor={"#263238"}
                    titleAlign={"left"}
                    url={Route_Path.Application + "/" + item.UrlName}
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
