import { Container, Grid } from "@mui/material";
import React from "react";
import ContactForm from "@/components/compo/contactus/contactform";
import ContactInfo from "@/components/compo/contactus/contactinfo";
import Address from "@/components/compo/contactus/address";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "Contact SIVA IoT | RFID India",
  description:
    "Contact Siva Iot at (+91) 832-6621000 for best-in-class RFID products for assets management. We have been supplying our products across the globe for the past 35 years to various industries.",
  keywords:
    "Contact Siva Iot at (+91) 832-6621000 for best-in-class RFID products for assets management. We have been supplying our products across the globe for the past 35 years to various industries.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.RFID_CONTACT,
    title: "Contact SIVA IoT | RFID India",
    description:
      "Contact Siva Iot at (+91) 832-6621000 for best-in-class RFID products for assets management. We have been supplying our products across the globe for the past 35 years to various industries.",
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
    title: "Contact SIVA IoT | RFID India",
    description:
      "Contact Siva Iot at (+91) 832-6621000 for best-in-class RFID products for assets management. We have been supplying our products across the globe for the past 35 years to various industries.",
    images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.RFID_CONTACT,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const ContactUsPage = () => {
  return (
    <>
      <Container sx={{ p: 0 }}>
        <Grid
          container
          spacing={0}
        >
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              py: { xs: 3, md: 4 },
              px: { xs: 3, md: 0 },
            }}
          >
            <ContactInfo />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              my: 2,
              px: { xs: 3, md: 0 },
            }}
          >
            <ContactForm />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              my: 5,
              borderTop: "1px solid black",
              py: 2,
              px: { xs: 3, md: 0 },
            }}
          >
            <Address />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default ContactUsPage;
