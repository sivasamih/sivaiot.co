import { Box, Container, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import { Route_Path } from "@/apis/api";
import CardTwo from "@/components/customcompo/cards/cardtwo";
import { notFound } from "next/navigation";
import FamiliesPageSkeleton from "@/components/customcompo/skeleton/familesPageSkeleton";


export const dynamic = "force-dynamic";

export const metadata = {
  title:
    "RFID & NFC Product Families | Radio-Frequency Identification Tags & Labels - SIVA IoT",
  description:
    "SIVA offers a wide range of RFID tags and labels for asset management across various industries. Browse our product families to find the perfect RFID solution for your needs. Visit our website for more details.",
  keywords:
    "SIVA offers a wide range of RFID tags and labels for asset management across various industries. Browse our product families to find the perfect RFID solution for your needs. Visit our website for more details.",
  robots: "index, follow",
  metadataBase: new URL("https://sivaiot.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.PRODUCT_FAMILY,
    title:
      "RFID & NFC Product Families | Radio-Frequency Identification Tags & Labels - SIVA IoT",
    description:
      "SIVA offers a wide range of RFID tags and labels for asset management across various industries. Browse our product families to find the perfect RFID solution for your needs. Visit our website for more details.",
    images: [
      {
        url: `https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`,
        width: 1200,
        height: 630,
        alt: "sivaiot.co",
      },
    ],
  },
  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    site: "@sivaiot.co",
    creator: "@sivaiot.co",
    title:
      "RFID & NFC Product Families | Radio-Frequency Identification Tags & Labels - SIVA IoT",
    description:
      "SIVA offers a wide range of RFID tags and labels for asset management across various industries. Browse our product families to find the perfect RFID solution for your needs. Visit our website for more details.",
    images: [
      `https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`,
    ],
  },
  // Canonical URL
  alternates: {
    canonical: 'https://sivaiot.co',

  },
  // Additional Metadata
  charset: "UTF-8",
};

async function getProductFamilies() {
  let data;
  try {
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.GetProductFamily);
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) { }
  return data;
}

const ProductFamiliesPage = async () => {
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
      <Container
        sx={{
          my: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
          },
          gap: 4,
        }}
      >
        {ProductFamilies.map((item, index) => {
          const { Name, UrlName, Description, ImageAlt, IsExternalURL, Images } = item
          const url = UrlName?.startsWith("/") ? UrlName : Route_Path.PRODUCT_FAMILY + "/" + UrlName
          return (
            <CardTwo
              key={index}
              title={Name}
              desc={Description}
              alt={ImageAlt}
              IsExternalURL={IsExternalURL}
              image={APIURLS.BASE_PATH.ProductFamily + Images}
              titleTextColor={"#263238"}
              titleAlign={"left"}
              url={url}
            />
          );
        })}
      </Container>
    </>
  );
};
export default ProductFamiliesPage;
