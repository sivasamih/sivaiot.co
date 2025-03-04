import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import CardEight from "@/components/customcompo/cards/cardeight";
import { Route_Path } from "@/apis/api";



export const metadata = {
  title: "Access Control Wristbands & NFC Tickets - SIVA IoT",
  description:
    "Explore SIVA's access control solutions like RFID wristbands, NFC tickets, cards, & key fobs for seamless entry management in events, healthcare, and workplaces. Visit website for more details",
  keywords:
    "Explore SIVA's access control solutions like RFID wristbands, NFC tickets, cards, & key fobs for seamless entry management in events, healthcare, and workplaces. Visit website for more details",
  robots: "index, follow",
  metadataBase: new URL("https://sivaiot.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.RFID_ACCESS_CONTROL,
    title: "Access Control Wristbands & NFC Tickets - SIVA IoT",
    description:
      "Explore SIVA's access control solutions like RFID wristbands, NFC tickets, cards, & key fobs for seamless entry management in events, healthcare, and workplaces. Visit website for more details",
    images: [
      {
        url: "/images/Logo-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "sivaiot.co",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sivaiot.co",
    creator: "@sivaiot.co",
    title: "Access Control Wristbands & NFC Tickets - SIVA IoT",
    description:
      "Explore SIVA's access control solutions like RFID wristbands, NFC tickets, cards, & key fobs for seamless entry management in events, healthcare, and workplaces. Visit website for more details",
    images: ["/images/Logo-1200x630.jpg"],
  },
  alternates: {
    canonical: 'https://sivaiot.co',

  },
  charset: "UTF-8",
};

const RFIDAccessControl = () => {
  return (
    <>
      <Box>
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography
              sx={{
                bgcolor: "#F1F8E9",
                textAlign: "center",
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(1.3rem + 1vw)",
                },
                color: "var(--headerColor)",
                fontWeight: "bold",
                p: 1,
              }}
              component={"h1"}>
              Leisure & Entertainment
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "auto", md: "repeat(2,1fr)" },
              px: { xs: 2, md: 5 },
              gap: 5,
              my: 10,
            }}>
            {[
              {
                id: 1,
                name: "RFID Wristbands, Cards & Key Fobs",
                image: "images/RFID-Wristbands.jpg",
                url: "/wb",
                IsExternalURL: "false",
              },
              {
                id: 2,
                name: "Smart NFC Ticketing",
                image: "images/RFID-Event-ticketing.png",
                url: "/thermal-rfid-event-ticketing",
                IsExternalURL: "false",
              },
            ].map((item, index) => {
              return (
                <CardEight
                  key={index}
                  name={item.name}
                  url={item.url}
                  image={item.image}
                  IsExternalURL={item.IsExternalURL}
                />
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RFIDAccessControl;
