import { Box, Container } from "@mui/material";
import * as FETCHAPI from "@/apis/fetchapi";
import * as APIURLS from "@/apis/apiconstant";
import CustomBox from "@/components/customcompo/box/CustomBox";
import ImageSlider from "@/components/compo/imageSlider/imageslider";
import TopContent from "@/components/compo/home/topContent";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import Families from "@/components/compo/home/families";
import NewsSection from "@/components/compo/home/newssection";
import Events from "@/components/compo/home/events";
import { StructureData } from "@/helper/structuredata";
import { Route_Path } from "@/apis/api";
import SectionWrapper from "@/components/animatedwrapper/sectionWrapper";

async function getFamilyList() {
  let data = [];
  try {
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.GetProductFamily);
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {
    console.log("ex", ex);
  }
  return data;
}
export const metadata = {
  title: "RFID Beyond Boundaries - SIVA IoT",
  description:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
  keywords:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
  robots: "index, follow",
  metadataBase: new URL("https://sivaiot.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.HOME,
    title: "RFID Beyond Boundaries - SIVA IoT",
    description:
      "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
    images: [
      {
        url: "/images/Logo-1200x630.jpg",
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
    title: "RFID Beyond Boundaries - SIVA IoT",
    description:
      "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
    images: ["/images/Logo-1200x630.jpg"],
  },
  // Canonical URL
  alternates: {
    canonical: 'https://sivaiot.co',

  },
  // Additional Metadata
  charset: "UTF-8",
};

const HomePage = async () => {
  const FamiliesList = await getFamilyList();
  const jsonLd = StructureData.HOME;
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ImageSlider />
      <Box sx={{ bgcolor: "var(--darkGreen)" }}>
        <Container>
          <CustomBox
            sx={{
              py: 3,
              textAlign: { xs: "justify", sm: "left" },
            }}>
            <TopContent />
          </CustomBox>
        </Container>
      </Box>
      {/* **********-********* */}
      <SectionWrapper borderRight={true} borderBottom={true}>
        <Container>
          <PageHeading
            title={"Product Families"}
            component={"h2"}
          />
          <Box sx={{ p: 2 }}>
            <Families
              header={"Industries"}
              FamiliesList={FamiliesList}
            />
          </Box>
        </Container>
      </SectionWrapper>

      {/* ************-********** */}
      <NewsSection />

      {/* ************Events********** */}
      <Events />
    </section>
  );
};

export default HomePage;
