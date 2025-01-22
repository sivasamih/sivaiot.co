import { Route_Path } from "@/apis/api";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import CardTwo from "@/components/customcompo/cards/cardtwo";
import ProductCardSmall from "@/components/customcompo/cards/productcardsmall";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import Title5 from "@/components/customcompo/Typo/title5";
import { Box, Container, Typography } from "@mui/material";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
async function ListProductDetailsByIndustriesID(ID) {
  let data = [];
  try {
    let res = await FETCHAPI.Fetch(
      APIURLS.APIURL.ListProductDetailsByIndustriesID,
      { ID: ID }
    );

    if (res.status === 200) {
      data = await res.json();
      data = data.filter((d) => parseInt(d.PISeq) > 0);
    }
  } catch (ex) {
    console.log("ex", ex);
  }
  return data;
}

async function getProductDetailsByIndustries(UrlName) {
  const reqData = { Name: UrlName };

  try {
    const res = await FETCHAPI.Fetch(
      APIURLS.APIURL.ProductDetailsByIndustries,
      reqData
    );

    if (res.status !== 200) {
      console.error("Failed to fetch product details:", res.statusText);
      return { IndustriesCategories: null, IndustriesProduct: null };
    }

    const data = await res.json();

    const IndustryProduct = data.ID
      ? await ListProductDetailsByIndustriesID(data.ID)
      : null;

    return { IndustriesCategories: data, IndustriesProduct: IndustryProduct };
  } catch (error) {
    console.error("Error in getProductDetailsByIndustries:", error);
    return { IndustriesCategories: null, IndustriesProduct: null };
  }
}

export async function generateMetadata({ params }) {
  const url = (await params).id;
  const Industries = await getProductDetailsByIndustries(url);
  if (!Industries) return notFound();

  const {
    IndustriesCategories: {
      MetaTitle = "",
      MetaDescription = "",
      UrlName = "",
      BannerImage = "",
      BannerImageAlt = "",
    },
  } = Industries;
  return {
    title: MetaTitle,
    description: MetaDescription,
    robots: "index, follow",
    metadataBase: new URL('https://sivaiot.co'),
    keywords: MetaDescription,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: Route_Path.Application + "/" + UrlName,
      title: MetaTitle,
      description: MetaDescription,
      images: [
        {
          url: `https://sivafiles.sivagroup.co/1/images/product-Industries/${BannerImage}`,
          width: 1200,
          height: 630,
          alt: BannerImageAlt,
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
        `https://sivafiles.sivagroup.co/1/images/product-Industries/${BannerImage}`,
      ],
    },

    // Canonical URL
    alternates: {
      canonical: Route_Path.Application + "/" + UrlName,
    },

    // Additional Metadata
    charset: "UTF-8",
  };
}

const ApplicationDetails = async ({ params }) => {
  const url = (await params).id;
  const Industries = await getProductDetailsByIndustries(url);
  const {
    IndustriesCategories: {
      Name = "",
      BannerImageAlt = "",
      BannerImage = "",
      PIPDescription = "",
    },
    IndustriesProduct,
  } = Industries;

  console.log("Industries", Industries);
  return (
    <>
      <Box>
        <Title5
          title={Name}
          currentPageName={Name}
          Breadcrumb={[
            { name: "Home", url: "/" },
            { name: "Applications", url: Route_Path.Application },
          ]}
        />
      </Box>
      <Container>
        <Box
          sx={{
            minHeight: { xs: 100, md: 'auto' },
            mt: 4,
            "& img": { maxHeight: "400px" },
          }}
        >
          <LazyImage
            src={APIURLS.BASE_PATH.ProductIndustries + BannerImage}
            alt={BannerImageAlt}
          />
        </Box>
      </Container>

      <Box sx={{ my: 4 }}>
        <Container>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                "& p": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                },
              }}
              dangerouslySetInnerHTML={{
                __html: PIPDescription,
              }}
            />
          </Box>

          {Array.isArray(IndustriesProduct) && IndustriesProduct.length > 0 ? < Box sx={{ my: 5 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "var(--green)",
                letterSpacing: 1,
              }}
            >
              Products Related to Application Segment
            </Typography>

            <Box
              sx={{
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
              {IndustriesProduct?.map((item, index) => {
                let url = item.UrlName.startsWith("/")
                  ? item.UrlName
                  : Route_Path.PRODUCTS + "/" + item.UrlName;

                let desc =
                  item.Description.length > 100
                    ? item.Description.slice(0, 100) + "..."
                    : item.Description;

                return (
                  <div key={index}>
                    <CardTwo
                      key={index}
                      title={item.Name}
                      desc={desc}
                      alt={item.ImageAlt}
                      IsExternalURL={item.IsExternalURL}
                      image={APIURLS.BASE_PATH.Product + item["ThumbnailImage"]}
                      titleAlign={"left"}
                      url={url}
                    />

                    {/* <ProductCardSmall
                      key={index}
                      title={item.Name}
                      desc={desc}
                      alt={item.ImageAlt}
                      IsExternalURL={false}
                      image={APIURLS.BASE_PATH.Product + item["ThumbnailImage"]}
                      titleAlign={"left"}
                      url={url}
                    /> */}
                  </div>
                );
              })}
            </Box>
          </Box> : null}
        </Container >
      </Box >
    </>
  );
};
export default ApplicationDetails;
