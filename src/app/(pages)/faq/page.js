
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import { Box, Container } from "@mui/system";
import { Route_Path } from "@/apis/api";
import { StructureData } from "@/helper/structuredata";
import FAQsContainer from "@/components/compo/faqs/FAQsContainer";

export const metadata = {
  title: "Frequently Asked Questions | RFID Tags & Labels - SIVA IoT",
  description:
    "Find answers to common questions about RFID tags & labels for various industries, Get helpful information and insights to make the most of our innovative technologies, Browse SIVA IoT for more details.",
  keywords:
    "Find answers to common questions about RFID tags & labels for various industries, Get helpful information and insights to make the most of our innovative technologies, Browse SIVA IoT for more details.",
  robots: "index, follow",
  metadataBase: new URL("https://sivaiot.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.FAQ,
    title: "Frequently Asked Questions | RFID Tags & Labels - SIVA IoT",
    description:
      "Find answers to common questions about RFID tags & labels for various industries, Get helpful information and insights to make the most of our innovative technologies, Browse SIVA IoT for more details.",
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
    title: "Frequently Asked Questions | RFID Tags & Labels - SIVA IoT",
    description:
      "Find answers to common questions about RFID tags & labels for various industries, Get helpful information and insights to make the most of our innovative technologies, Browse SIVA IoT for more details.",
    images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.FAQ,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const FAQsPage = () => {
  const jsonLd = StructureData.FAQ;
  return (
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Box sx={{ my: 4 }}>
        <Container>
          <PageHeading title={"FAQs"} />
          <FAQsContainer />
        </Container>
      </Box>
    </section>
  );
};
export default FAQsPage;
