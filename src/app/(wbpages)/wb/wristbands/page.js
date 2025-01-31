import { Box, Container } from "@mui/system";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import { Grid, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import CardSeven from "@/components/customcompo/cards/cardseven";
import * as HELPER from "@/helper/helper";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "RFID Wristbands Supplier | Access Control Wristbands - SIVA IoT",
  description:
    "SIVA manufactures high-quality RFID wristbands for seamless access control enhancing guest experience, shipped worldwide. Visit our website for more information on our printed wristbands.",
  keywords:
    "SIVA manufactures high-quality RFID wristbands for seamless access control enhancing guest experience, shipped worldwide. Visit our website for more information on our printed wristbands.",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.WB_WRISTBANDS,
    title: "RFID Wristbands Supplier | Access Control Wristbands - SIVA IoT",
    description:
      "SIVA manufactures high-quality RFID wristbands for seamless access control enhancing guest experience, shipped worldwide. Visit our website for more information on our printed wristbands.",
    images: [
      {
        url: APIURLS.BASE_PATH.WB + "images/wristbands-banner.jpg",
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
    title: "RFID Wristbands Supplier | Access Control Wristbands - SIVA IoT",
    description:
      "SIVA manufactures high-quality RFID wristbands for seamless access control enhancing guest experience, shipped worldwide. Visit our website for more information on our printed wristbands.",
    images: [APIURLS.BASE_PATH.WB + "images/wristbands-banner.jpg"],
  },
  // Canonical URL
  alternates: {
    canonical: 'https://sivaiot.co',

  },
  // Additional Metadata
  charset: "UTF-8",
};

const Wristbands = () => {
  return (
    <>
      <Box sx={{ bgcolor: "var(--green)", py: 4 }}>
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
            RFID Wristbands
          </Typography>
        </Container>
      </Box>
      <Container>
        <Box sx={{ mt: 4 }}>
          <LazyImage
            src={APIURLS.BASE_PATH.WB + "images/wristbands-banner.jpg"}
            alt="RFID Wristbands Supplier"
          />
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "calc(0.2rem + 1rem )",
                md: "calc(0.2rem + 1rem )",
              },
              color: "var(--lightGray)",
            }}
          >
            Our RFID wristbands are designed to make it easy and convenient for
            visitors to access rides and attractions without the need for
            tickets or tokens. With our wristbands, visitors can simply scan
            their wristband at the entrance to gain access. This not only speeds
            up the entry process but also enhances the overall guest experience.
          </Typography>
        </Box>
        {/* <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "auto",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            },
            gap: 3,
            my: 10,
          }}
        > */}
        <Grid
          container
          spacing={3}
          sx={{
            my: 5,
            height: "100%",
          }}
        >
          {HELPER.WristbandsProductList.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <CardSeven
                  name={item.name}
                  url={item.url}
                  image={item.image}
                  detailsList={item.detailsList}
                  alt={item.alt}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* </Box> */}
      </Container>
    </>
  );
};
export default Wristbands;
