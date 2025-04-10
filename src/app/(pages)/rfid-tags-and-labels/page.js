import { Box } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import { Route_Path } from "@/apis/api";
// import { NewProduct } from "@/helper/helper";
import TopContent from "@/components/compo/products/topcontent";
import ProductListingContainer from "@/components/compo/products/productListingContainer";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "RFID Tag Manufacturer | RFID Label Supplier - SIVA IoT",
  description:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
  keywords:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
  robots: "index, follow",
  metadataBase: new URL("https://sivaiot.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.PRODUCTS,
    title: "RFID Tag Manufacturer | RFID Label Supplier - SIVA IoT",
    description:
      "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
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
    title: "RFID Tag Manufacturer | RFID Label Supplier - SIVA IoT",
    description:
      "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
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

async function GetAllCategoriesWithProduct() {
  let data;
  try {
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.WebCategoryWiseProducts);
    if (res.status === 200) {
      data = await res.json();
      let id = 1;
      try {
        for (let L of data) {
          L.IsExpanded = false;
          L.IsClickable = true;
          // L.IsExternalURL = false;
          L.id = id;
          id++;
        }
      } catch (ex) { }

      // try {
      //   let hardCodeedProcuct = NewProduct ? NewProduct : [];
      //   if (hardCodeedProcuct.length > 0) {
      //     for (let L of hardCodeedProcuct) {
      //       L.IsExpanded = false;
      //       L.IsClickable = true;
      //       L.IsExternalURL = false;
      //       L.id = id;
      //       id++;
      //     }
      //   }
      //   data = [...data, ...hardCodeedProcuct];
      // } catch (ex) {}
    }
  } catch (ex) {
    console.log("ex>>>", ex);
  }
  return data;
}

const RFIDProducts = async () => {
  const Categories = await GetAllCategoriesWithProduct();
  if (!Categories) return notFound();
  return (
    <Box>
      <TopContent />
      <ProductListingContainer Categories={Categories} />
    </Box>
  );
};
export default RFIDProducts;
