import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import * as APIURLS from "@/apis/apiconstant";
import CardFive from "@/components/customcompo/cards/cardfive";
import { WristbandsCardsKeyList } from "@/helper/helper";
import CardSix from "@/components/customcompo/cards/cardsix";
import { Download } from "@mui/icons-material";
import Link from "next/link";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "RFID Wristbands Manufacturer | RFID Cards & Key Fobs - SIVA IoT",
  description:
    "At SIVA, our mission is to enhance guest experience and security in the leisure and entertainment industry with innovative RFID wristbands, cards, and key fobs for amusement parks, waterparks, and resorts",
  keywords:
    "At SIVA, our mission is to enhance guest experience and security in the leisure and entertainment industry with innovative RFID wristbands, cards, and key fobs for amusement parks, waterparks, and resorts",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.WB,
    title: "RFID Wristbands Manufacturer | RFID Cards & Key Fobs - SIVA IoT",
    description:
      "At SIVA, our mission is to enhance guest experience and security in the leisure and entertainment industry with innovative RFID wristbands, cards, and key fobs for amusement parks, waterparks, and resorts",
    images: [
      {
        url: `https://sivafiles.sivagroup.co/1/images/wb/wb-index-banner.jpg`,
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
    title: "RFID Wristbands Manufacturer | RFID Cards & Key Fobs - SIVA IoT",
    description:
      "At SIVA, our mission is to enhance guest experience and security in the leisure and entertainment industry with innovative RFID wristbands, cards, and key fobs for amusement parks, waterparks, and resorts",
    images: [`https://sivafiles.sivagroup.co/1/images/wb/wb-index-banner.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: 'https://sivaiot.co',

  },
  // Additional Metadata
  charset: "UTF-8",
};


const UltimoIDPage = () => {
  return (
    <>
      <Container>
        <Box sx={{ my: 4 }}>
          <LazyImage
            src={APIURLS.BASE_PATH.WB + "wb-index-banner.jpg"}
            // src={APIURLS.BASE_PATH.OthersImage + 'wb/images/wb-index-banner.jpg'}
            alt="ultimoID"
          />
        </Box>
        <Box>
          <Typography
            sx={{
              bgcolor: "#F1F8E9",
              textAlign: "center",
              fontSize: { xs: "calc(0.8rem + 1vw)", md: "calc(1.3rem + 1vw)" },
              color: "var(--headerColor)",
              fontWeight: "bold",
              p: 1,
            }}
            component={"h1"}
          >
            Revolutionizing Security & Access Control with RFID
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              my: 4,
              fontSize: { xs: "calc(0.8rem + 1vw)", md: "calc(0.2rem + 1vw)" },
              color: "var(--lightGray)",
              px: { xs: 2, md: 10 },
            }}
          >
            At{" "}
            <Link
              style={{ color: "var(--green)", textDecoration: "none" }}
              href={"/"}
            >
              SIVA
            </Link>
            , we started with a mission to enhance the guest experience and
            improve security in the leisure and entertainment industry. We saw
            that traditional access control methods, such as paper tickets or
            keys, were not only cumbersome but also posed a security risk.
            That's why we decided to develop RFID wristbands for amusement and
            waterparks and RFID cards and key fobs for resorts.
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              my: 4,
              fontSize: { xs: "calc(0.8rem + 1vw)", md: "calc(0.2rem + 1vw)" },
              color: "var(--lightGray)",
              px: { xs: 2, md: 10 },
            }}
          >
            We at SIVA are passionate about using technology to improve the
            guest experience and enhance security. Our RFID wristbands and cards
            are just one example of how we're achieving this goal. We believe
            that our products are the perfect solution for the leisure and
            entertainment industry, providing convenience, security, and peace
            of mind for both guests and staff.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "auto", md: "repeat(2,1fr)" },
            px: { xs: 2, md: 5 },
            gap: 5,
            my: 10,
          }}
        >
          {[
            {
              id: 1,
              name: "RFID Wristbands",
              image: "images/RFID-Wristbands.jpg",
              alt: "RFID Access Control",
              url: "/wb/wristbands",
              IsExternal: false,
            },
            {
              id: 2,
              name: "Cards & Key fobs",
              image: "images/Cards-Key-fobs.jpg",
              alt: "RFID Cards & Key Fobs",
              url: "/wb/card-keys-fobs",
              IsExternal: true,
            },
          ].map((item, index) => {
            return (
              <CardFive
                key={index}
                name={item.name}
                url={item.url}
                image={item.image}
                IsExternal={item.IsExternal}
                alt={item.alt}
              />
            );
          })}
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography
            sx={{
              bgcolor: "#F1F8E9",
              textAlign: "center",
              fontSize: { xs: "calc(0.8rem + 1vw)", md: "calc(1.3rem + 1vw)" },
              color: "var(--headerColor)",
              fontWeight: "bold",
              p: 1,
            }}
            component={"h5"}
          >
            Why use RFID wristbands/cards/key fobs?
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "auto", md: "repeat(3,1fr)" },
              gap: 2,
              my: 10,
            }}
          >
            {WristbandsCardsKeyList.map((item, index) => {
              return (
                <CardSix
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                />
              );
            })}
          </Box>
        </Box>
        {/* *********************-----------***************** */}
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            // bgcolor:  "#F1F8E9",
            borderRadius: 3,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            mx: "auto",
            my: { xs: 3, md: 6 },
            border: "1px solid #39b54a",
          }}
        >
          <Box
            sx={{
              mx: "auto",
              textAlign: "center",
              maxWidth: { xs: "100%", md: "80%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 2, md: 4 },
                letterSpacing: 0.5,
                fontSize: {
                  xs: "calc(0.9rem + 1vw)",
                  md: "calc(1.3rem + 1vw)",
                },
                color: "var(--headerColor)",
                fontWeight: "bold",
              }}
            >
              Download Our Brochure
            </Typography>

            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      color: "#000",
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.1rem + 1vw)",
                      },
                      lineHeight: 1.6,
                    }}
                  >
                    Get an in-depth look at our offerings and learn how we can
                    help you reach your goals. Download and explore.
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  sx={{
                    background: "linear-gradient(160deg,  #00C6FF,#007AFF)",
                    color: "#fff",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.8,
                    borderRadius: 3,
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.07)",
                      boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                  href="https://sivafiles.sivagroup.co/1/catalogues/RFID-Wrsitband-Brochure.pdf"
                  target="_blank"
                >
                  Download Brochure
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/*  */}
      </Container>
    </>
  );
};
export default UltimoIDPage;
