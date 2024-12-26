import { Box, Container, Typography } from "@mui/material";
import React from "react";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import * as APIURLS from "@/apis/apiconstant";
import Link from "next/link";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "Careers at SIVA IoT",
  description:
    "Siva is always on the lookout to recruit the best talent from Printing & RFID Technologies, Sales & Marketing, Administrative and Operational areas.",
  keywords:
    "Siva is always on the lookout to recruit the best talent from Printing & RFID Technologies, Sales & Marketing, Administrative and Operational areas.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.CAREERS,
    title: "Careers at SIVA IoT",
    description:
      "Siva is always on the lookout to recruit the best talent from Printing & RFID Technologies, Sales & Marketing, Administrative and Operational areas.",
    images: [
      {
        url:
          APIURLS.BASE_PATH.OthersImage + "career.png" ||
          `https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`,
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
    title: "Careers at SIVA IoT",
    description:
      "Siva is always on the lookout to recruit the best talent from Printing & RFID Technologies, Sales & Marketing, Administrative and Operational areas.",
    images: [
      APIURLS.BASE_PATH.OthersImage + "career.png" ||
        `https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`,
    ],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.CAREERS,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const CareersPage = () => {
  return (
    <>
      <Box sx={{ mb: { xs: 5, md: 1 } }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography
              sx={{
                color: "#1E4188",
                fontSize: "calc(2em + 1vw)",
                fontWeight: "bold",
              }}
              component={"h1"}
            >
              Careers at SIVA IoT
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.5rem + 1vw)",
                },
                lineHeight: 1.2,
              }}
            >
              We are a team of passionate individuals who are committed to
              building a better future for the world. We are always looking for
              talented individuals who share our vision and are ready to take on
              new challenges. If you are interested in joining our team, please
              send your resume to{" "}
              <Link
                href={"mailto:hr@sivagroup.co"}
                style={{ textDecoration: "none", color: "var(--green)" }}
                title="email"
              >
                hr@sivagroup.co
              </Link>{" "}
              We look forward to hearing from you!
            </Typography>
          </Box>
          <Box sx={{ order: { xs: 1, md: 2 } }}>
            <LazyImage
              alt={"career.png"}
              src={APIURLS.BASE_PATH.OthersImage + "career.png"}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CareersPage;
