import { Box, Container } from "@mui/system";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import { ChevronRight } from "@mui/icons-material";
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
    url: Route_Path.THERMAL_RFID_EVENT_TICKETING,
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

const ThermalRFIDEventTicket = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            "& img": {
              minHeight: 150,
            },
          }}
        >
          <LazyImage
            src={APIURLS.BASE_PATH.WB + "images/" + "RFID-Event-ticketing.jpg"}
            alt={"RFID-Event-ticketing"}
          />
        </Box>

        <Container sx={{ mb: 10 }}>
          <Box sx={{ my: 4 }}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "row wrap",
                WebkitBoxPack: "center",

                "& b": {
                  flex: 1,
                  WebkitBoxFlex: 1,
                  height: "2px",
                  width: "100%",
                  bgcolor: "#1E4188",
                  display: "block",
                  opacity: 0.2,
                },
              }}
            >
              <b></b>
              <Typography
                component={"span"}
                sx={{
                  px: 2,
                  fontSize: { xs: "calc(1rem + 1vw)" },
                  color: "var(--blue)",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Thermal + RFID Event Ticketing
              </Typography>
              <b></b>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                my: 4,
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.2rem + 1vw)",
                },
                color: "var(--lightGray)",
              }}
            >
              SIVA’s produces high-quality graphics printed tickets using Direct
              thermal paper & plastic substrates for events, festivals,
              stadiums, museums. Tickets produced are available in different
              length x width options and with optional rounded corners. The
              black timing mark is printed on tickets for print compatibility
              with a range of printer OEMs
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <LazyImage
              src={
                APIURLS.BASE_PATH.WB +
                "images/" +
                "Thermal-Events-Ticket-Flyer.png"
              }
              alt={"Thermal Ticket Printing"}
            />

            <LazyImage
              src={
                APIURLS.BASE_PATH.WB +
                "images/" +
                "Thermal-RFID-Event-ticketing.jpg"
              }
              alt="Sports Event RFID Tickets"
              sizes="(max-width: 640px) 100vw, 640px"
            />
          </Box>
          <Box>
            <Typography
              sx={{
                my: 4,
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.2rem + 1vw)",
                },
                color: "var(--lightGray)",
              }}
            >
              Using different types & thickness levels of substrates, SIVA also
              offers UHF/NFC ticketing with several IC options including Ucode
              8, Monza R6-P, Mifare Ultralight, Mifare 1k, Desfire EV1 and many
              others.
            </Typography>
            <Typography
              sx={{
                my: 4,
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.2rem + 1vw)",
                },
                color: "var(--lightGray)",
              }}
            >
              Supplied with 4c printing in a wide range of die cut profiles,
              ticket length & width options with customer-specific black eyemark
              printing.
            </Typography>
            <Typography
              sx={{
                my: 4,
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.2rem + 1vw)",
                },
                color: "var(--lightGray)",
              }}
            >
              The position of the RFID chip is equally important which is
              matched to the specification of printers for reliable reading &
              encoding.
            </Typography>
            <Typography
              sx={{
                px: 2,
                fontSize: { xs: "calc(1rem + 1vw)" },
                color: "var(--blue)",
                fontWeight: "bold",
                px: 0,
              }}
            >
              Personalisation options offered:
            </Typography>
          </Box>
          <List
            sx={{
              p: 0,
              "& li": {
                py: 0,
                "& span": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  color: "var(--lightGray)",
                },
                "& svg": {
                  fontSize: {
                    xs: "calc(1rem + 1vw)",
                    md: "calc(0.5rem + 1vw)",
                  },
                  color: "var(--lightGray)",
                },
              },
            }}
          >
            <ListItem>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <ChevronRight />
              </ListItemIcon>
              <ListItemText>
                Available in Fan-folded, Roll form and cut singles.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <ChevronRight />
              </ListItemIcon>
              <ListItemText>
                Wide range of Coated / Thermal paper & plastic stocks
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <ChevronRight />
              </ListItemIcon>
              <ListItemText>
                Serial numbering with variable data print option
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <ChevronRight />
              </ListItemIcon>
              <ListItemText>Upto 8 colours printing</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <ChevronRight />
              </ListItemIcon>
              <ListItemText>
                Finishing options such as Invisible Ink printing, Watermarks,
                Punching, perforations, cutting etc.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <ChevronRight />
              </ListItemIcon>
              <ListItemText>Data encoding & UID printing</ListItemText>
            </ListItem>
          </List>
        </Container>
      </Box>
    </>
  );
};
export default ThermalRFIDEventTicket;
