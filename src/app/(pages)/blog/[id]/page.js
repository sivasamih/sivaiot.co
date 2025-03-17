import { Box, Container, Grid, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import moment from "moment";
import { Route_Path } from "@/apis/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";


async function getBlogByURL(URL) {
  let reqData = { PostURL: URL };
  let data;
  try {
    let res = await FETCHAPI.Fetch(
      APIURLS.APIURL.WebsiteContentByPostURL,
      reqData
    );
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {
    console.log("ex", ex);
  }
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
  const BlogData = await getBlogByURL(url);
  if (!BlogData) return notFound();
  const { MetaTitle, MetaDescription, MetaKeywords, BannerImage } = BlogData;
  return {
    title: MetaTitle,
    description: MetaDescription,
    robots: "index, follow",
    keywords: MetaKeywords,
    metadataBase: new URL("https://sivaiot.co"),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: Route_Path.BLOG + "/" + url,
      title: MetaTitle,
      description: MetaDescription,
      images: [
        {
          url: `${BannerImage}`,
          width: 1200,
          height: 630,
          alt: MetaTitle,
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
      images: [`${BannerImage}`],
    },

    // Canonical URL
    alternates: {
      canonical: 'https://sivaiot.co',
    },

    // Additional Metadata
    charset: "UTF-8",
  };
}

const BlogDetailsPage = async ({ params }) => {
  const url = (await params).id;
  const BlogData = await getBlogByURL(url);
  const BlogContent = BlogData?.ContentHtml;

  const cleanHTMLString = (html) => {
    return html?.replace(/\\n/g, "").replace(/\\"/g, '""');
  };

  const cleanedHtmal = cleanHTMLString(BlogContent)
  const StructureData = BlogData && BlogData.StructuredData

  if (!BlogData) return notFound();
  return (
    <>
      <section>
        <script type="application/ld+json">{StructureData}</script>


        <Box sx={{ bgcolor: "var(--green)", py: 4, display: { xs: "block", md: "none" } }}>
          <Container>
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(1rem + 1vw)",
                  md: "calc(1.2rem + 1vw)",
                },
                fontWeight: "bold",
                color: "white",

              }}
              component={"h1"}
            >
              {BlogData && BlogData.BlogTitle}
            </Typography>
          </Container>
        </Box>

        <Box sx={{ position: "relative", px: { xs: 2, md: 10 }, py: 2 }}>
          <Box
            sx={{
              width: "100%",
              minHeight: { xs: 150, sm: 300, md: 500 },
              background: `url(${BlogData["BannerImage"]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundPosition: "center",
              zIndex: -1,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0%",
                left: "0%",
                maxWidth: "40%",
                height: "100%",
                bgcolor: "rgba(57, 181, 74, 0.88)",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                p: 4,
              }}>
              <Box >
                <Typography
                  component="h1"
                  sx={{
                    // color: "var(--headerColor)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { xs: 'calc(0.6rem + 1vw)', md: "1.8rem" }, lineHeight: 1.2
                  }}>
                  {BlogData && BlogData.BlogTitle}
                </Typography>

              </Box>
            </Box>
          </Box>
        </Box>



        <Container>
          <Box
          // sx={{ minHeight: { xs: 100, md: 300 }, mt: 4, }}
          >
            {/* <LazyImage
              src={BlogData && BlogData["BannerImage"]}
              alt={BlogData && BlogData["BlogTitle"]}
              style={{ maxHeight: 500 }}
            /> */}

            <Typography
              sx={{
                fontSize: {
                  xs: "calc(.5rem + 1vw)",
                  md: "calc(0.01rem + 1vw)",
                },
              }}
            >
              <b style={{ padding: "0 0 5px" }}>Posted on</b>{" "}
              {moment(BlogData && BlogData.PostedDateTime).format("DD/MM/YYYY") +
                " " +
                "|" +
                " "}{" "}
              <b style={{ padding: "0 5px" }}>Tags</b> {BlogData && BlogData.Tags}
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Grid
              container
              spacing={0}
            >
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  "& h6": {
                    fontSize: {
                      xs: "calc(1rem + 1vw)",
                      md: "calc(0.4rem + 1vw)",
                    },
                    mt: 2,
                  },
                  "& p": {
                    fontSize: {
                      xs: "calc(0.8rem + 1vw)",
                      md: "calc(0.2rem + 1vw)",
                    },
                  },
                  "& .css-q8j5sq img": {
                    width: "auto"
                  }


                }}
              >
                <Box
                  sx={{
                    pr: { xs: 0, md: 1 },
                    "& a": {
                      color: "var(--green)",
                      textDecoration: "none",
                    },
                    "& img": {
                      width: "100%",
                    },
                  }}
                  // dangerouslySetInnerHTML={{
                  //   __html: BlogContent,
                  // }}
                  dangerouslySetInnerHTML={{
                    __html: cleanedHtmal,
                  }}


                />
              </Grid>
            </Grid>
          </Box>
        </Container >
      </section>
    </>
  );
};
export default BlogDetailsPage;
