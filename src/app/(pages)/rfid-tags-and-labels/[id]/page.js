import { Box, Chip, Container, Divider, Grid, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import { Route_Path } from "@/apis/api";
import { motion } from "framer-motion";
import Title5 from "@/components/customcompo/Typo/title5";
import MuiSlider from "@/components/customcompo/slider/muislider";
import DatasheetButton from "@/components/compo/datasheet/datasheetbutton";
import { notFound } from "next/navigation";
import ProductSliderWithDatasheetBtn from "@/components/compo/products/productSliderImageWithDatasheetNtn";
import ProductDescription from "@/components/compo/products/productDescription";
import ProductDetailsContainer from "@/components/compo/products/productDetailsContainer";

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
  } catch (ex) { }
  try {
    const isArr = Array.isArray(data);
    if (isArr && data.length > 0) {
      return data[0];
    }
    if (isArr && data.length < 1) {
      data = null;
    }
  } catch (ex) { }
  return data;
}

export async function generateMetadata({ params }) {
  const url = (await params).id;
  const ProductData = await GetProductDetailsByUrlName(url);
  if (!ProductData) return notFound();
  const { MetaTitle, MetaDescription, ImageList, Title } = ProductData;
  const img = ImageList[0] && ImageList[0]["ProductImage"];
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
      canonical: `https://sivaiot.co/`,
    },

    // Additional Metadata
    charset: "UTF-8",
  };
}

const ProductDetailsPage = async ({ params }) => {
  const url = (await params).id;
  const ProductData = await GetProductDetailsByUrlName(url);
  if (!ProductData) return notFound();
  const StructuredData = JSON.stringify(ProductData["StructuredData"])

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: StructuredData }}
      />

      <Box
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileinview={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <Title5
          title={ProductData["Name"]}
          Icon={APIURLS.BASE_PATH.Product + ProductData["Icon"]}
          IsShowIcon={ProductData["IsShowIcon"]}
          IsNew={ProductData["IsNew"]}
          currentPageName={ProductData["Name"]}
          Breadcrumb={[{ name: "Home", url: "/" }, { name: "Products", url: Route_Path.PRODUCTS }]}
        />
      </Box>
      <Container >
        <ProductDetailsContainer
          Name={ProductData["Name"]}
          BannerImage={APIURLS.BASE_PATH.ProductImage + ProductData["BannerImage"]}
          ImageList={ProductData["ImageList"]}
          Datasheets={ProductData["Datasheets"]}
          ProductFamilyName={ProductData["ProductFamilyName"]}
          Description={ProductData["Description"]}
          Contents={ProductData["Contents"]}
          FamilyURL={ProductData["FamilyURL"]}
        />


      </Container>
    </section>
  );
};
export default ProductDetailsPage;
