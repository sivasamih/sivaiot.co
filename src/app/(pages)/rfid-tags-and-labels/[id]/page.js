import { Box, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";

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
  return data;
}

export async function generateMetadata({ params }) {
  const url = (await params).id;
  const ProductData = await GetProductDetailsByUrlName(url);
  const { MetaTitle, MetaDescription, ImageList, Title } = ProductData;
  const img = ImageList[0]["ProductImage"];
  return {
    title: MetaTitle,
    description: MetaDescription,
    robots: "index, follow",
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

const TestingPage = async ({ params }) => {
  const url = (await params).id;
  const ProductData = await GetProductDetailsByUrlName(url);

  return (
    <Box sx={{ textAlign: "center", height: 400 }}>
      <Typography variant="h4">Product url : {url}</Typography>
    </Box>
  );
};
export default TestingPage;
