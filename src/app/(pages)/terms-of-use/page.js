import { Box, Container } from "@mui/system";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import Paragraph4 from "@/components/customcompo/Typo/paragraph4";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "Terms of Use - SIVA IoT",
  description:
    "Review SIVA's terms of use for accessing and utilizing our IoT solutions. Understand the rules and responsibilities to ensure a secure and effective experience with our innovative technologies.",
  keywords:
    "Review SIVA's terms of use for accessing and utilizing our IoT solutions. Understand the rules and responsibilities to ensure a secure and effective experience with our innovative technologies.",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.TERMS_OF_USE,
    title: "Terms of Use - SIVA IoT",
    description:
      "Review SIVA's terms of use for accessing and utilizing our IoT solutions. Understand the rules and responsibilities to ensure a secure and effective experience with our innovative technologies.",
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
    title: "Terms of Use - SIVA IoT",
    description:
      "Review SIVA's terms of use for accessing and utilizing our IoT solutions. Understand the rules and responsibilities to ensure a secure and effective experience with our innovative technologies.",
    images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: 'https://sivaiot.co',
  },
  // Additional Metadata
  charset: "UTF-8",
};

const TermsOfUse = () => {
  return (
    <>
      <Box sx={{ py: { xs: 2, md: 4 } }}>
        <Container>
          <PageHeading title={"Terms of Use"} />
        </Container>

        <Container
          sx={{
            "& p": {
              my: 2,
            },
          }}
        >
          <Paragraph4>
            The term user shall refer to the user who is browsing the site. The
            term SIVA shall refer to SIVA Group. The term site refers to
            www.sivaiot.co owned by SIVA Group.
          </Paragraph4>
          <Paragraph4>
            The following are the terms of legal agreement between you and SIVA.
            By accessing, browsing and/ or using this website, you acknowledge
            that you have read, understood and agree to be bound by these terms
            and to comply with all applicable laws and regulations. If you do
            not agree to these terms, do not use this website.
          </Paragraph4>
          <Paragraph4>
            This web site may contain other proprietary notices and copyright
            information, the terms of which must be observed and followed.
            Information on this website may contain technical inaccuracies or
            typographical errors.
          </Paragraph4>
          <Paragraph4>
            SIVA assumes no responsibility regarding the accuracy of the
            information that is provided by SIVA and use of such information is
            at the recipient's own risk. SIVA provides no assurances that any
            reported problems may be resolved with the use of any information
            that SIVA provides. By furnishing information, SIVA does not grant
            any licenses to any copyrights, patents or any other intellectual
            property rights.
          </Paragraph4>
          <Paragraph4>
            SIVA shall have no responsibility for any damage to User's computer
            system or loss of data that results from the download of any
            content, materials, and information from the site.
          </Paragraph4>
          <Paragraph4>
            SIVA does not want to receive confidential or proprietary
            information from you through our website. Please note that any
            information or material sent to SIVA will be deemed NOT TO BE
            CONFIDENTIAL. By sending SIVA any information or material, you grant
            SIVA an unrestricted, irrevocable, license to use, reproduce,
            display, perform, modify, transmit and distribute those materials or
            information, and you also agree that SIVA is free to use any ideas,
            concepts, know how or technique that you send us for any purpose.
          </Paragraph4>
          <Paragraph4>
            In no event will SIVA be liable to any party for any direct,
            indirect, special or other consequential damages for any use of this
            website or any other hyper linked website including without
            limitation, any lost profits, business interruption, loss of
            programs or other data on your information handling system or
            otherwise even if we are expressly advised of the possibility of
            such damages.
          </Paragraph4>
          <Paragraph4>
            SIVA may at anytime change or revise the terms by updating this
            posting. By using this web site you agree to be bound by any such
            revisions and should therefore periodically visit this page to
            determine the then current terms to which you are bound.
          </Paragraph4>
        </Container>
      </Box>
    </>
  );
};
export default TermsOfUse;
