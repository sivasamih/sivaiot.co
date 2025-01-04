import { Route_Path } from "@/apis/api";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import AnimatedBox from "@/components/customcompo/box/animatedBox";
import WhiteSpace from "@/components/customcompo/box/whiteSpace";
import ProductCard from "@/components/customcompo/cards/productCard";
import ProductFamiliesAccHeaderCard from "@/components/customcompo/cards/productFamiliesAccHeaderCard";
import { Box, Container } from "@mui/material";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const url = (await params).id;
  const FamiliesData = await getProductFamilies(url);
  if (!FamiliesData) return notFound();
  const { MetaTitle, MetaDescription, name, Images } = FamiliesData;
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
          url: `https://sivafiles.sivagroup.co/1/images/product-family/${Images}`,
          width: 1200,
          height: 630,
          alt: name,
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
      images: [
        `https://sivafiles.sivagroup.co/1/images/product-family/${Images}`,
      ],
    },

    // Canonical URL
    alternates: {
      canonical: `https://sivaiot.co/rfid-tags-and-labels/${url}`,
    },

    // Additional Metadata
    charset: "UTF-8",
  };
}

async function getProductFamilies(url) {
  let data;
  const reqData = {
    UrlName: url,
  };
  try {
    let res = await FETCHAPI.Fetch(
      APIURLS.APIURL.WebFamilyWiseProducts,
      reqData
    );
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {
    return null;
  }
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

const FamiliesDetails = async ({ params }) => {
  const { id } = await params;
  const FamiliesData = await getProductFamilies(id);
  if (!FamiliesData) return notFound();

  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Container sx={{ "& img": { maxHeight: 350, minHeight: 200 } }}>
          {FamiliesData && (
            <ProductFamiliesAccHeaderCard
              Title={FamiliesData.name}
              Desc={FamiliesData.desc}
              Image={`${APIURLS.BASE_PATH.ProductFamily}${FamiliesData.BannerImage}`}
              ImageAlt={FamiliesData.BannerImageAlt}
            />
          )}
        </Container>
      </Box>

      {/* Spacer */}
      <WhiteSpace
        height={{ xs: 0, md: 30 }}
        bgcolor={"#ffff"}
      />

      {/* Product List Section */}
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto" },
          gap: 4,
          "& > :last-of-type .details-box:after": {},
          "& > :last-of-type": {
            pb: 0,
            mb: 0,
          },
        }}
      >
        {FamiliesData?.productList?.map((product, index) => (
          <AnimatedBox
            key={index}
            id={product.link}
          >
            <ProductCard
              ProductImage={ APIURLS.BASE_PATH.Product + product.image}
              ProductImageAlt={product.ImageList?.[0]?.Alt || ""}
              ProductName={product.name}
              ProductDesc={product.desc}
              Datasheet={product.Datasheets}
              url={Route_Path.PRODUCTS + "/" + product.link}
              IsNew={product.IsNew}
              IsClickable={true}
              Icon={APIURLS.BASE_PATH.Product + product.Icon}
              IsShowIcon={product.IsShowIcon}
            />
          </AnimatedBox>
        ))}
      </Container>

      {/* Footer Spacer */}
      <WhiteSpace
        height={50}
        bgcolor={"#ffff"}
      />
    </>
  );
};

export default FamiliesDetails;
