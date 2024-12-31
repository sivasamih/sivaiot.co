import { Box, Chip, Container, Divider, Grid, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import { Route_Path } from "@/apis/api";
import { motion } from "framer-motion";
import Title5 from "@/components/customcompo/Typo/title5";
import MuiSlider from "@/components/customcompo/slider/muislider";
import DatasheetButton from "@/components/compo/datasheet/datasheetbutton";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";


async function GetProductDetailsByUrlName(url) {
  let data;
  const reqData = { UrlName: url };
  try {
    let res = await FETCHAPI.Fetch(
      APIURLS.APIURL.ProductDetailsByUrlName,
      reqData
    );
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {}
  try {
    const isArr = Array.isArray(data);
    if (isArr && data.length > 0) {
      return data[0];
    }
    if (isArr && data.length < 1) {
      data = null;
    }
  } catch (ex) {}
  return data;
}

export async function generateMetadata({ params }) {
  const url = (await params).id;
  const ProductData = await GetProductDetailsByUrlName(url);
  if (!ProductData) return notFound();
  const { MetaTitle, MetaDescription, ImageList, Title } = ProductData;
  const img = ImageList[0]["ProductImage"];
  return {
    title: MetaTitle,
    description: MetaDescription,
    robots: "index, follow",
    keywords: MetaDescription,
    metadataBase: new URL("https://sivaiot.co"),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://sivaiot.co/rfid-tags-and-labels/${url}`,
      title: MetaTitle,
      description: MetaDescription,
      images: [
        {
          url: `https://sivafiles.sivagroup.co/1/images/productpage/${img}`,
          width: 1200,
          height: 630,
          alt: Title,
        },
      ],
    },

    // Twitter Metadata
    twitter: {
      card: "summary_large_image",
      site: "@sivaiot.co",
      creator: "@sivaiot.co",
      title: MetaTitle,
      description: MetaDescription,
      images: [`https://sivafiles.sivagroup.co/1/images/productpage/${img}`],
    },

    // Canonical URL
    alternates: {
      canonical: `https://sivaiot.co/rfid-tags-and-labels/${url}`,
    },

    // Additional Metadata
    charset: "UTF-8",
  };
}

const ProductDetailsPage = async ({ params }) => {
  const url = (await params).id;
  const ProductData = await GetProductDetailsByUrlName(url);
  if (!ProductData) return notFound();

  return (
    <>
      <Box
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileinview={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <Title5
          title={ProductData["Name"]}
          currentPageName={ProductData["Name"]}
          Breadcrumb={[
            { name: "Home", url: "/" },
            { name: "Products", url: Route_Path.PRODUCTS },
          ]}
        />
      </Box>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          sx={{ py: 4 }}
          component={motion.div}
          initial={{ scale: 0.95, opacity: 0 }}
          whileinview={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Box
              sx={{
                borderRadius: 5,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                }}
              >
                <MuiSlider
                  // autoPlay={true}
                  indicators={false}
                  duration={1200}
                  Content={ProductData["ImageList"]?.map((item, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{ maxHeight: 450 }}
                      >
                        <img
                          src={
                            "https://sivafiles.sivagroup.co/1/images/productpage/" +
                            item.ProductImage
                          }
                          alt={item.alt}
                          width={"100%"}
                          height={"100%"}
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                    );
                  })}
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "var(--green)",
                  "& button": {
                    color: "white",
                    py: 1.5,
                    letterSpacing: 1,
                    width: "100%",
                    borderRadius: 0,
                  },
                  "& .MuiBox-root": {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  cursor: "pointer",
                }}
              >
                <DatasheetButton
                  id={"DatasheetBtn"}
                  name={"Download Datasheet"}
                  // path={APIURLS.BASE_PATH.DatasheetsBaseUrl}
                  // path = {Route_Path.DATASHEET}
                  Datasheet={
                    ProductData["Datasheets"] ? ProductData["Datasheets"] : []
                  }
                  ProductName={ProductData["Name"]}
                  ProductImage={
                    APIURLS.BASE_PATH.ProductImage + ProductData["BannerImage"]
                  }
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Box sx={{ py: 1, pl: { xs: 0, md: 4 } }}>
              {ProductData["ProductFamilyName"] && (
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
                  label={ProductData["ProductFamilyName"]}
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
                  }}
                >
                  Description
                </Typography>
                <Divider sx={{ my: 2 }} />
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
                  {ProductData["Description"]}
                </Typography>
              </Box>

              <Divider sx={{ my: 2, mb: 3 }} />

              <Box
                dangerouslySetInnerHTML={{
                  __html: ProductData["Contents"],
                }}
                sx={{
                  "& li": {
                    ml: 4,
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default ProductDetailsPage;
