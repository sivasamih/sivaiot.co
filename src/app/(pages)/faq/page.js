import { Typography } from "@mui/material";
import Paragraph4 from "@/components/customcompo/Typo/paragraph4";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import { Box, Container } from "@mui/system";
import ListOrderNumber from "@/components/customcompo/Typo/listordernumber";
import { Route_Path } from "@/apis/api";
import Link from "next/link";
import { StructureData } from "@/helper/structuredata";

export const metadata = {
  title: "Frequently Asked Questions | RFID Tags & Labels - SIVA IoT",
  description:
    "Find answers to common questions about RFID tags & labels for various industries, Get helpful information and insights to make the most of our innovative technologies, Browse SIVA IoT for more details.",
  keywords:
    "Find answers to common questions about RFID tags & labels for various industries, Get helpful information and insights to make the most of our innovative technologies, Browse SIVA IoT for more details.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.FAQ,
    title: "Frequently Asked Questions | RFID Tags & Labels - SIVA IoT",
    description:
      "Find answers to common questions about RFID tags & labels for various industries, Get helpful information and insights to make the most of our innovative technologies, Browse SIVA IoT for more details.",
    images: [
      {
        url: `https://sivafiles.sivagroup.co/1/images/others/logo.png`,
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
    images: [`https://sivafiles.sivagroup.co/1/images/others/logo.png`],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Box sx={{ my: 4 }}>
        <Container>
          <PageHeading title={"FAQs"} />

          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              1. How is RFID used in asset tracking?
            </Typography>
            <Paragraph4>
              Radio Frequency Identification (RFID) in asset tracking involves
              tagging items with{" "}
              <Typography
                component={Link}
                href={Route_Path.PRODUCTS}
                target="_blank"
                title="RFID labels or tags"
                style={{
                  textDecoration: "none",
                  color: "var(--green)",
                }}
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                  },
                }}
              >
                RFID labels or tags
              </Typography>
              . RFID readers capture data from these tags, enabling real-time
              monitoring of an asset's location and status. This streamlined
              process, integrated with databases, automates tracking, improves
              accuracy, and facilitates efficient inventory management in
              diverse industries.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              2. How much information can an RFID tag or label store?
            </Typography>
            <Paragraph4>
              Passive RFID tags are powered by the energy received from the RFID
              reader and can store limited amounts of data, typically between 96
              and 496 bits. The size of the RFID tag also affects the amount of
              information that can be stored. Smaller tags generally have less
              memory than larger tags, but new advancements in RFID technology
              are increasing the amount of data that can be stored on smaller
              tags making it a useful tool for asset tracking and management.
            </Paragraph4>
          </Box>

          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              3. Does an RFID tag read through walls or people?
            </Typography>
            <Paragraph4>
              RFID tags typically cannot be read through walls or people. RFID
              technology relies on radio frequency signals for communication
              between the RFID reader and the tag. Solid objects, including
              walls and human bodies, can attenuate or block these signals,
              making it difficult for RFID readers to detect and read tags on
              the other side. For effective RFID communication, a direct line of
              sight or proximity between the RFID reader and the tag is
              generally required.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              4. Can RFID be used for surfaces that are not flat?
            </Typography>
            <Paragraph4>
              <Typography
                component={Link}
                href={
                  Route_Path.PRODUCTS +
                  "/" +
                  "rfid-tag-for-cables-pipes-and-ropes"
                }
                title="Cintura Loop-Tag"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "var(--green)",
                }}
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                  },
                  lineHeight: 1,
                }}
              >
                Cintura Loop-Tag
              </Typography>{" "}
              has been developed specifically to tag items that are otherwise
              difficult to tag such as cables, tubes, ropes, etc. This
              all-surface tag is well suited for different kinds of surfaces and
              can also be adjusted to perfectly fit different item diameters.
              These tags use radio waves to communicate with an RFID reader.
              They can be attached to cables and can provide real-time
              identification and tracking of the cables.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              We proudly have introduced one of our innovation:CylTag™, designed
              specifically for{" "}
              <Typography
                component={Link}
                href={Route_Path.PRODUCTS + "/" + "beer-keg-and-gas-canister"}
                title="Beer Kegs, Gas Cylinders and Chemical Drums"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "var(--green)",
                }}
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                  },
                  lineHeight: 1,
                }}
              >
                Beer Kegs, Gas Cylinders and Chemical Drums
              </Typography>{" "}
              . Our state-of-the-art RFID tag has been engineered to
              revolutionize inventory tracking and lifecycle management for
              businesses dealing with beer kegs and gas canisters suitable for
              various curvatures of the cylinder.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              5. Do RFID tags work in high temperatures?
            </Typography>
            <Paragraph4>
              The high temperature can affect the performance of the tag's
              integrated circuit and antenna, potentially leading to reduced
              read range, communication errors, and even permanent damage. To
              address these issues, SIVA has developed
              <Typography
                component={Link}
                href={
                  Route_Path.PRODUCTS + "/high-temperature-resistant-rugged-tag"
                }
                target="_blank"
                title="high-temperature RFID tags"
                style={{
                  textDecoration: "none",
                  color: "var(--green)",
                }}
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                  },
                  lineHeight: 1,
                  px: 0.5,
                }}
              >
                high-temperature RFID tags
              </Typography>
              which are specifically designed to operate in harsh environments
              and withstand temperatures. These tags are made with materials
              that are resistant to heat and feature a rugged design that helps
              to protect the internal components. Additionally, they may also
              have a protective casing or insulation to further enhance their
              performance in high-temperature conditions.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              6. What is the frequency range of RFID tags and labels?
            </Typography>
            <Paragraph4>
              RFID tags and labels operate within different frequency bands, and
              the frequency range can vary. The most common RFID frequency bands
              are Low Frequency (LF), High Frequency (HF), and Ultra High
              Frequency (UHF). LF typically operates around 125 kHz, HF around
              13.56 MHz, and UHF in the range of 860-960 MHz.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              7. What is ETSI and FCC in the context of RFID tags?
            </Typography>
            <Paragraph4>
              ETSI (European Telecommunications Standards Institute) and FCC
              (Federal Communications Commission) are regulatory bodies that
              establish standards and regulations for electronic communication
              devices, including RFID tags. ETSI is responsible for setting
              standards in Europe, while the FCC oversees regulations in the
              United States.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              8. What kind of RFID tags are used in cold chain temperature
              monitoring?
            </Typography>
            <Paragraph4>
              RFID tags used in cold chain temperature monitoring are typically
              equipped with temperature sensors that can measure and transmit
              data about the temperature of the products being monitored. These
              tags do not have a battery and rely on the energy from the reader
              to transmit data. These tags also have inbuilt moisture sensors
              that are designed to detect and report moisture levels in their
              immediate environment.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              9. What is the difference between UHF, HF, and NFC technologies?
            </Typography>
            <Paragraph4>
              UHF (Ultra High Frequency) and HF (High Frequency) are two
              different radio frequency ranges used in RFID (Radio Frequency
              Identification) technology. NFC (Near Field Communication) is a
              subset of HF RFID technology that allows for short-range
              communication between devices.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              10. Do dual frequency RFID labels work with metal assets?
            </Typography>
            <Paragraph4>
              <Typography
                component={Link}
                href={Route_Path.PRODUCTS + "/dual-frequency-labels"}
                title={"Dual frequency RFID labels"}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "var(--green)",
                }}
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                  },
                  lineHeight: 1,
                  pr: 1,
                }}
              >
                Dual frequency RFID labels
              </Typography>
              are radio frequency identification labels that are equipped with
              both high-frequency (HF) and ultra-high-frequency (UHF) chips.
              Yes, dual frequency RFID labels can work with metal assets,
              although their performance may be affected by the metal's
              presence. To ensure proper functioning of RFID tags on metal
              assets, SIVA has developed, a specialized "on-metal" tag, offered
              with an EM4425 chip, this versatile RFID labels can be used to
              secure various types of indoor assets, anti-counterfeiting and
              product identification. These tags are designed to have a stronger
              signal and to better withstand the interference caused by metal
              surfaces.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              11. Which industries use RFID technology?
            </Typography>
            <Paragraph4>
              RFID technology is widely used in various industries for asset
              management. Some of the industries that commonly use RFID for
              asset management include:
            </Paragraph4>
            <Box sx={{ px: 1, mt: 2 }}>
              <Paragraph4>
                Healthcare: RFID is used to track medical equipment, supplies,
                and patient assets in hospitals and clinics.
              </Paragraph4>
              <Paragraph4>
                Retail:
                {/* </Typography>{" "} */}
                RFID is used to track inventory and manage stock levels in
                retail stores.
              </Paragraph4>
              <Paragraph4>
                Logistics and Supply Chain:
                <Typography
                  component={Link}
                  href={
                    Route_Path.PRODUCT_FAMILY +
                    "/general-rfid-tags-supply-chain-logistics"
                  }
                  target="_blank"
                  title="RFID is used to track shipping containers, pallets, and
                  individual items in transit."
                  style={{
                    textDecoration: "none",
                    color: "var(--green)",
                  }}
                  sx={{
                    fontSize: {
                      xs: "calc(0.8em + 1vw)",
                      md: "calc(0.2em + 1vw)",
                    },
                    lineHeight: 1,
                    pl: 0.5,
                  }}
                >
                  RFID is used to track shipping containers, pallets, and
                  individual items in transit.
                </Typography>
              </Paragraph4>
              <Paragraph4>
                <ListOrderNumber>Government</ListOrderNumber>
                Government: RFID is used to track government assets such as
                vehicles, equipment, and supplies.
              </Paragraph4>
              <Paragraph4>
                Defence: RFID is used to track military equipment, weapons, and
                supplies.
              </Paragraph4>
              <Paragraph4>
                Construction: RFID is used to track construction equipment,
                tools, and materials on job sites.
              </Paragraph4>
              <Paragraph4>
                Traffic Management:{" "}
                <Typography
                  component={Link}
                  href={
                    Route_Path.PRODUCT_FAMILY +
                    "/automatic-vehicle-identification"
                  }
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "var(--green)",
                  }}
                  sx={{
                    fontSize: {
                      xs: "calc(0.8em + 1vw)",
                      md: "calc(0.2em + 1vw)",
                    },
                    lineHeight: 1,
                  }}
                  title=" RFID is used in automatic vehicle identification and in
                  Parking & Electronic toll collection applications"
                >
                  RFID is used in automatic vehicle identification and in
                  Parking & Electronic toll collection applications
                </Typography>
                . These are some of the industries that are widely implementing
                RFID technology for asset management, but there are many other
                industries as well that are utilizing RFID for this purpose.
              </Paragraph4>
            </Box>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              12. Are RFID tags ideal to track reusable shipping containers with
              high water content?
            </Typography>
            <Paragraph4>
              When it comes to tracking reusable shipping containers which are
              also referred to as returnable transport items with high water
              content, the ideal identification tags would be those that are
              waterproof and can withstand exposure to water and other harsh
              environmental conditions, tags such as, Re-load Pro 7320 are
              <Typography
                component={Link}
                href={
                  Route_Path.PRODUCT_FAMILY +
                  "/washable-rfid-labels-for-returnable-transport-items"
                }
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "var(--green)",
                }}
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                  },
                  lineHeight: 1,
                  pl: 0.5,
                }}
                title="washable RFID tags designed specifically for reusable shipping
                containers like plastic crates & wooden pallets."
              >
                washable RFID tags designed specifically for reusable shipping
                containers like plastic crates & wooden pallets.
              </Typography>
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              13. Can RFID tags be used for laundry management?
            </Typography>
            <Paragraph4>
              RFID tags used for laundry management are typically rugged and
              durable tags that can withstand the harsh environment of
              industrial laundry facilities. They are often designed to be
              resistant to high temperatures, moisture, chemicals, and
              mechanical stress. Lavanda™ by SIVA are{" "}
              <Typography
                component={Link}
                href={"/blog/rfid-tags-on-clothes"}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "var(--green)",
                }}
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                  },
                  lineHeight: 1,
                }}
                title="RFID laundry tags"
              >
                RFID laundry tags
              </Typography>{" "}
              with small footprint & good read range, The laundry tags robust
              design combats the industrial wash cycles for linens and other
              textiles, withstanding the rigors of repeated washings, cleaning
              chemicals, drying and ironing cycles.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              14. How do tamper-proof RFID tags work?
            </Typography>
            <Paragraph4>
              <Typography
                component={Link}
                href={
                  Route_Path.PRODUCTS +
                  "/tamper-roof-rfid-label-for-metal-assets"
                }
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "var(--green)",
                }}
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                  },
                  lineHeight: 1,
                }}
                title="Tamper-proof RFID tags"
              >
                Tamper-proof RFID tags
              </Typography>{" "}
              often have physical or electronic mechanisms that make it
              challenging to remove or alter the tag without triggering a
              visible indication of tampering. This can include features like
              destructible materials, special adhesives, or electronic circuitry
              that detects tampering.
            </Paragraph4>
          </Box>
          {/*  *******  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              15. What are RFID Hard Tags?
            </Typography>
            <Paragraph4>
              <Typography
                component={Link}
                href={"/blog/rfid-hard-tag-for-asset-management"}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "var(--green)",
                }}
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                  },
                  pr: 0.5,
                }}
                title="RFID Hard Tags"
              >
                RFID Hard Tags
              </Typography>
              are durable, rugged, and long-lasting identification devices
              equipped with an RFID chip or antenna. These tags are designed to
              withstand harsh environmental conditions, making them suitable for
              use in challenging industries such as manufacturing, logistics,
              and supply chain management.
            </Paragraph4>
          </Box>
        </Container>
      </Box>
    </section>
  );
};
export default FAQsPage;
