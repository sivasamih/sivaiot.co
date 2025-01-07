import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import WhiteSpace from "@/components/customcompo/box/whiteSpace";
import CardTen from "@/components/customcompo/cards/cardten";
import { Settings } from "@mui/icons-material";
import ContactForm from "@/components/compo/contactus/contactform";
import * as APIURLS from "@/apis/apiconstant";
import { CustomizedServiceList } from "@/helper/helper";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "Custom RFID Tag | RFID Label Design Lab - SIVA IoT",
  description:
    "Explore SIVA's Design Lab for customized RFID solutions tailored to your unique needs. From concept to creation, we deliver innovative designs for diverse industries.",
  keywords:
    "Explore SIVA's Design Lab for customized RFID solutions tailored to your unique needs. From concept to creation, we deliver innovative designs for diverse industries.",
  robots: "index, follow",
  metadataBase: new URL("https://sivaiot.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.DESIGN_LAB,
    title: "Custom RFID Tag | RFID Label Design Lab - SIVA IoT",
    description:
      "Explore SIVA's Design Lab for customized RFID solutions tailored to your unique needs. From concept to creation, we deliver innovative designs for diverse industries.",
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
    title: "Custom RFID Tag | RFID Label Design Lab - SIVA IoT",
    description:
      "Explore SIVA's Design Lab for customized RFID solutions tailored to your unique needs. From concept to creation, we deliver innovative designs for diverse industries.",
    images: [
      `https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`,
    ],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.DESIGN_LAB,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const DesignLab = () => {
  return (
    <>
      {/* -----------------Banner----------------- */}
      <Box
        sx={{
          background: `url(${APIURLS.BASE_PATH.DesignLabImages}design-lab-banner.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          zIndex: 1,
          height: { xs: "auto", md: 350 },
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            bgcolor: "#0000007b",
            height: "100%",
            width: "100%",
            zIndex: -1,
          },
        }}
      >
        <Container sx={{ zIndex: 2 }}>
          <Grid
            container
            spacing={0}
            height={"100%"}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: { xs: 4, md: 0 },
              }}
            >
              <Box
                sx={{
                  p: 3,
                  bgcolor: "#ffffffd0",
                  borderRadius: 2,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "calc(1.2rem + 1vw)",
                      md: "calc(2rem + 1vw)",
                    },
                    mb: 1,
                    color: "var(--headerColor)",
                    lineHeight: 1,
                    fontWeight: "bold",
                  }}
                  component={"h1"}
                >
                  Siva Design Lab
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "calc(0.5rem + 1vw)",
                      md: "calc(0.3rem + 1vw)",
                    },
                    borderLeft: "5px solid var(--green)",
                    pl: 2,
                    color: "var(--lightGray)",
                  }}
                >
                  Projects often have requirements which cannot be met by
                  standard tags. Customisation around shape, size, materials
                  etc. is required to develop a tag that can perform specific to
                  the use case.
                </Typography>
                <Settings
                  key={"Settings-1"}
                  sx={{
                    position: "absolute",
                    top: "-50%",
                    right: "-0%",
                    fontSize: "14em",
                    zIndex: -1,
                    animation: "rotations 10s infinite linear",
                    "@keyframes rotations": {
                      "0%": { transform: "rotate(360deg)" },
                      "100%": { transform: "rotate(0deg)" },
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box sx={{ height: { xs: "auto", md: 350 } }}>
                {/* <LazyImage
                // src="https://picsum.photos/200/300"
                src={"/img/other/Bonding.png"}
                alt="SIVA Design Lab"
                style={{ objectFit: "cover" }}
              /> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/*  --------------top-Content------------------ */}
      <Box sx={{ my: 5 }}>
        <Container>
          <Box
            sx={{
              position: "relative",
              pl: 4,
              ":before": {
                position: "absolute",
                top: 0,
                left: 10,
                content: '""',
                height: "100%",
                width: "5px",
                bgcolor: "var(--green)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.6rem + 1vw)",
                  md: "calc(0.5rem + 1vw)",
                },
                mb: 2,
                color: "var(--darkGreen)",
              }}
            >
              Siva Design Lab offers a consultative approach to designing &
              developing, from scratch, a RFID label or hard tag specific to
              your use case / application.
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.6rem + 1vw)",
                  md: "calc(0.5rem + 1vw)",
                },
                color: "var(--darkGreen)",
              }}
            >
              From etched aluminium to printed antennas & UHF - NFC - Dual
              frequency chips, our fully vertically integrated setup provides
              for a wide scope for customization.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ----------------- Customized services -------------- */}

      <Box
        sx={{
          py: 4,
          borderTop: {
            xs: "1.5rem solid var(--borderColor)",
            md: "3rem solid var(--borderColor)",
          },
          borderRight: {
            xs: "1.5rem solid var(--borderColor)",
            md: "3rem solid var(--borderColor)",
          },
        }}
      >
        <Container>
          <Box sx={{ marginRight: { xs: 0, md: "-3rem" } }}>
            <Box
              sx={{
                mb: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  flex: 1,
                  height: "2px",
                  background:
                    "linear-gradient(114deg, rgba(255,255,255,1) 0%, rgba(30,65,136,1) 100%)",
                  borderRadius: "50px",
                }}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  letterSpacing: 1,
                  px: 2,
                  color: "var(--headerColor)",
                  fontSize: {
                    xs: "calc(1.5rem + 1vw)",
                    md: "calc(1.2rem + 1vw)",
                  },
                }}
                variant="h4"
              >
                Why SIVA?
              </Typography>
              <span
                style={{
                  flex: 1,
                  height: "2px",
                  background:
                    "linear-gradient(114deg, rgba(30,65,136,1) 0%, rgba(255,255,255,1) 100%)",
                  borderRadius: "50px",
                }}
              />
            </Box>

            <Grid
              container
              spacing={10}
            >
              {CustomizedServiceList?.map((item, index) => {
                return (
                  <Grid
                    xs={12}
                    md={6}
                    item
                    key={index}
                  >
                    <CardTen
                      Image={item.Image}
                      Title={item.Title}
                      Description={item.Description}
                      video={item.video}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          {/* *************--------------- contact form -----------------********** */}
          <Box
            sx={{
              my: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.7rem + 1vw)",
                  md: "calc(0.3rem + 1vw)",
                },
                color: "var(--green)",
              }}
              // color="text.secondary"
              gutterBottom
            >
              You're only a quick message away from kickstarting your journey to
              develop a custom RFID label / tag. Let SIVA's expertise mould the
              perfect RFID tag for you.
            </Typography>
          </Box>
          <ContactForm />
        </Container>
      </Box>

      <WhiteSpace height={50} />
    </>
  );
};

export default DesignLab;
