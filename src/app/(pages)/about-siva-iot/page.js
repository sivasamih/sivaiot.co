import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import * as APIURLS from "@/apis/apiconstant";
import Link from "next/link";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "About SIVA IoT | RFID & NFC Tracking Solutions",
  description:
    "SIVA IoT is a family-owned business specializing in producing niche RFID labels and tags. For the past 30 years, we have been providing asset tracking solutions to various industries worldwide.",
  keywords:
    "SIVA IoT is a family-owned business specializing in producing niche RFID labels and tags. For the past 30 years, we have been providing asset tracking solutions to various industries worldwide.",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.ABOUT,
    title: "About SIVA IoT | RFID & NFC Tracking Solutions",
    description:
      "SIVA IoT is a family-owned business specializing in producing niche RFID labels and tags. For the past 30 years, we have been providing asset tracking solutions to various industries worldwide.",
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
    title: "About SIVA IoT | RFID & NFC Tracking Solutions",
    description:
      "SIVA IoT is a family-owned business specializing in producing niche RFID labels and tags. For the past 30 years, we have been providing asset tracking solutions to various industries worldwide.",
    images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.ABOUT,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const AboutPage = () => {
  return (
    <>
      <Container sx={{ py: { xs: 1, md: 4 } }}>
        <Box
          sx={{
            my: { xs: 0, md: 4 },
            "&:hover": { boxShadow: 5 },
            transition: "0.5s ease-out",
            p: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              xl={8}
              order={{ xs: 2, md: 1 }}
            >
              <Typography
                variant="h1"
                sx={{ mb: 2, fontSize: "1.5rem" }}
              >
                A global supplier with key competencies in RFID, fueling IoT
                growth
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
                variant="body2"
                color="text.secondary"
              >
                SIVA IoT is an internationally active family owned business
                producing Specialist & Niche RFID labels & tags for a wide range
                of industries securing assets, facilitating cashless
                transactions & goods authentication, streamlining supply chains
                and bringing about efficiencies in manufacturing.
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
                variant="body2"
                color="text.secondary"
              >
                Our passion for constant innovation and high quality are key
                attributes of our high-end products.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              xl={4}
              order={{ xs: 1, md: 2 }}
            >
              <LazyImage
                src={APIURLS.BASE_PATH.OthersImage + "siva-group-company.jpg"}
                alt="RFID & NFC Manufacturing"
              />
            </Grid>
          </Grid>
        </Box>
        <Divider />
        {/*  */}
        <Box
          sx={{
            my: 4,
            "&:hover": { boxShadow: 5 },
            transition: "0.5s ease-out",
            p: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              xl={4}
              order={{ xs: 1, md: 1 }}
            >
              <LazyImage
                src={APIURLS.BASE_PATH.OthersImage + "customer-focus.jpg"}
                alt="siva-group"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              xl={8}
              order={{ xs: 2, md: 2 }}
            >
              {/* <Typography variant="h5" sx={{ mb: 2, fontSize: "1.5rem" }}>
              CUSTOMER FOCUS
            </Typography> */}
              <PageHeading
                title="CUSTOMER FOCUS"
                component={"h2"}
              />
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
                variant="body2"
                color="text.secondary"
              >
                SIVA is deeply committed to servicing its customers, not just
                with high quality, but also offering some of the fastest
                dispatch lead times in the industry. We view ourselves as a
                strategic partner to our customers, focussed in achieving
                excellence in all aspects of our business.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        {/*  */}
        <Box
          sx={{
            my: 4,
            "&:hover": { boxShadow: 5 },
            transition: "0.5s ease-out",
            p: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              xl={8}
              order={{ xs: 2, md: 1 }}
            >
              {/* <Typography variant="h5" sx={{ mb: 2, fontSize: "1.5rem" }}>
              FACILITY
            </Typography> */}
              <PageHeading
                title="FACILITY"
                component={"h2"}
              />
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
                variant="body2"
                color="text.secondary"
              >
                The production facility in Goa, India has been purpose-built for
                the production of high-end & high-quality RFID labels and tags,
                deploying sophisticated production machinery & experience,
                achieving complete control over all qualitative aspects of
                production. The streamlined production brings about efficiencies
                & cost reduction, allowing us to be a competitive supplier.
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
                variant="body2"
                color="text.secondary"
              >
                SIVA deploys a very modular/flexible production setup to achieve
                a streamlined process workflow. From antenna production to label
                & tag conversion all under one roof, this gives SIVA a distinct
                advantage by reacting fast to urgent orders.
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
                variant="body2"
                color="text.secondary"
              >
                In addition to being{" "}
                <Typography
                  sx={{
                    color: "var(--green)",
                    fontSize: "calc(0.3rem + 1vw)",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  component={Link}
                  title="ISO 9001:2015"
                  href={
                    "https://sivaiot.co/downloads/ISO-9001-2015-Siva-inotec-limited-2021.pdf"
                  }
                >
                  ISO 9001:2015
                </Typography>{" "}
                certified, our factory complies fully with periodic audits
                conducted by stakeholders
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              xl={4}
              order={{ xs: 1, md: 2 }}
            >
              <LazyImage
                src={APIURLS.BASE_PATH.OthersImage + "goa-plant-siva.jpg"}
                alt="SIVA's RFID Plant in Goa"
                style={{ height: "-webkit-fill-available" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Divider />
        {/*  */}
        <Box
          sx={{
            my: 4,
            "&:hover": { boxShadow: 5 },
            transition: "0.5s ease-out",
            p: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              xl={4}
              order={{ xs: 1 }}
            >
              <LazyImage
                src={APIURLS.BASE_PATH.OthersImage + "cutomization.jpg"}
                alt="siva-customization"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              xl={8}
              order={{ xs: 2 }}
            >
              {/* <Typography variant="h5" sx={{ mb: 2, fontSize: "1.5rem" }}>
              CUSTOMER FOCUS
            </Typography> */}
              <PageHeading
                title="CUSTOMIZATION"
                component={"h2"}
              />
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
                variant="body2"
                color="text.secondary"
              >
                SIVA is well equipped to print RFID labels, small or large order
                quantities with 4c artwork. In addition, SIVA offers complete
                bureau service which includes Variable data printing, UID
                printing & Data encoding.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        {/*  */}
        <Box
          sx={{
            my: 4,
            "&:hover": { boxShadow: 5 },
            transition: "0.5s ease-out",
            p: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              xl={8}
              order={{ xs: 2, md: 1 }}
            >
              {/* <Typography variant="h5" sx={{ mb: 2, fontSize: "1.5rem" }}>
              FACILITY
            </Typography> */}
              <PageHeading
                title="R&D"
                component={"h2"}
              />
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
                variant="body2"
                color="text.secondary"
              >
                SIVA’s core strength is its R&D team. Our team of RF engineers
                designs finely tuned antennas for best in class performance for
                the specific intended application and the kind of surface the
                RFID label is applied onto. Our diverse knowledge of specialist
                materials, adhesives, production processes & RF design all
                attribute to our new product development.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              xl={4}
              order={{ xs: 1, md: 2 }}
            >
              <LazyImage
                src={APIURLS.BASE_PATH.OthersImage + "rnd.jpg"}
                alt="siva-rnd"
              />
            </Grid>
          </Grid>
        </Box>
        <Divider />
        {/*  */}
        <Box
          sx={{
            my: 4,
            "&:hover": { boxShadow: 5 },
            transition: "0.5s ease-out",
            p: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              xl={4}
            >
              <LazyImage
                src={APIURLS.BASE_PATH.OthersImage + "quality-control.jpg"}
                alt="siva-quality-control"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              xl={8}
            >
              {/* <Typography variant="h5" sx={{ mb: 2, fontSize: "1.5rem" }}>
              CUSTOMER FOCUS
            </Typography> */}
              <PageHeading
                title="QUALITY CONTROL"
                component={"h2"}
              />
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
                variant="body2"
                color="text.secondary"
              >
                As an{" "}
                <Typography
                  sx={{
                    color: "var(--green)",
                    fontSize: "calc(0.3rem + 1vw)",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  component={Link}
                  title="ISO 9001:2015"
                  href={
                    "https://sivaiot.co/downloads/ISO-9001-2015-Siva-inotec-limited-2021.pdf"
                  }
                >
                  ISO 9001:2015
                </Typography>{" "}
                certified company, SIVA deploys high standards in achieving &
                sustaining nothing but the best production quality. We deploy
                sophisticated equipment for testing RF performance and with
                pre-production & post-production checks to ensure we get our
                QUALITY RIGHT THE FIRST TIME.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        {/*  */}
        <Box
          sx={{
            my: 4,
            "&:hover": { boxShadow: 5 },
            transition: "0.5s ease-out",
            p: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              xl={8}
              order={{ xs: 2, md: 1 }}
            >
              {/* <Typography variant="h5" sx={{ mb: 2, fontSize: "1.5rem" }}>
              FACILITY
            </Typography> */}
              <PageHeading
                title="Our Vision & Mission Statement"
                component={"h2"}
              />
              <List sx={{ listStyleType: "square", pl: 4 }}>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    We at SIVA aim to achieve and sustain excellence in all our
                    activities,
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    By producing and supplying superior products and services
                    and be recognized as a credible supplier in each of the
                    markets we serve,
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    To continually improve our operations and our offerings to
                    meet and exceed customer expectations at all times.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              xl={4}
              order={{ xs: 1, md: 2 }}
            >
              <LazyImage
                src={APIURLS.BASE_PATH.OthersImage + "Vision-&-Mission.jpg"}
                alt="siva-Vision-&-Mission"
                style={{ objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Divider />
        {/*  */}
        <Box
          sx={{
            my: 4,
            "&:hover": { boxShadow: 5 },
            transition: "0.5s ease-out",
            p: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              xl={4}
            >
              <LazyImage
                src={APIURLS.BASE_PATH.OthersImage + "Environment-Policy.jpg"}
                alt="Environment-Policy"
                style={{ objectFit: "cover" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              xl={8}
            >
              {/* <Typography variant="h5" sx={{ mb: 2, fontSize: "1.5rem" }}>
              CUSTOMER FOCUS
            </Typography> */}
              <PageHeading
                title="Sustainable Environment Policy"
                component={"h2"}
              />
              <List sx={{ listStyleType: "square", pl: 4 }}>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Reduce wastage across all areas of business and re-Use
                    wherever possible.
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Ensuring our employees work proactively towards adhering to
                    our environmental policies
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Invest in employee training & development for achieving
                    efficiencies in production, thereby reducing wastage
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    By using recyclable & biodegradable raw materials.
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Using REACH compliant materials
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Divider />
      </Container>
    </>
  );
};
export default AboutPage;
