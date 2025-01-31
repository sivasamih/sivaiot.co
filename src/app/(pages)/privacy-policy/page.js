import { Box, Container } from "@mui/system";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import { List, ListItemText, Typography } from "@mui/material";
import Paragraph4 from "@/components/customcompo/Typo/paragraph4";
import ListOrderNumber from "@/components/customcompo/Typo/listordernumber";
import Link from "next/link";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "Privacy Policy - SIVA IoT",
  description:
    "Learn about SIVA's privacy policy, detailing how we collect, use, and protect your personal information. Your privacy is our priority—explore our commitment to safeguarding your data.",
  keywords:
    "Learn about SIVA's privacy policy, detailing how we collect, use, and protect your personal information. Your privacy is our priority—explore our commitment to safeguarding your data.",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.PRIVACY_POLICY,
    title: "Privacy Policy - SIVA IoT",
    description:
      "Learn about SIVA's privacy policy, detailing how we collect, use, and protect your personal information. Your privacy is our priority—explore our commitment to safeguarding your data.",
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
    title: "Privacy Policy - SIVA IoT",
    description:
      "Learn about SIVA's privacy policy, detailing how we collect, use, and protect your personal information. Your privacy is our priority—explore our commitment to safeguarding your data.",
    images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: 'https://sivaiot.co',

  },
  // Additional Metadata
  charset: "UTF-8",
};

const PrivacyPolicy = () => {
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Container>
          <PageHeading title={"Privacy Policy"} />

          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              1. INTRODUCTION
            </Typography>
            <Paragraph4>
              This privacy policy lets you know what happens to any personal
              data that you give to us, or any that we may collect from or about
              you. It applies to all products and services, and instances where
              we collect your personal data.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              This privacy policy applies to personal information processed by
              or on behalf of SIVA Group.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              <ListOrderNumber>Changes to this privacy policy</ListOrderNumber>
              <br />
              We may change this privacy policy from time to time by updating
              this page in order to reflect changes in the law and/or our
              privacy practices. We encourage you to check this privacy policy
              for changes whenever you visit our websites –{" "}
              <Typography
                component={Link}
                href={"https://sivagroup.co/"}
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
                }}
                title="sivagroup.co"
              >
                www.sivagroup.co
              </Typography>{" "}
              or{" "}
              <Typography
                component={Link}
                href={"/"}
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
                }}
                 title="sivaiot.co"
              >
                www.sivaiot.co
              </Typography>{" "}
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              <ListOrderNumber>
                SIVA Group and our Data Protection Officer
              </ListOrderNumber>
              <br />
              We, SIVA Inotec Ltd., G-47, 1st floor, Sector 6, Noida, Uttar
              Pradesh, 201301, India, which provide you product or service are
              named at the start of these terms and conditions and are a data
              controller of your personal data.
            </Paragraph4>
            <Paragraph4>
              We have a dedicated data protection officer (“DPO”). You can
              contact the DPO using the details below or by writing to the above
              address, marking it for the attention of the DPO or going to
              <Typography
                component={Link}
                href={"/rfid-contact"}
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
                  pl: 1,
                }}
                title="Contact us"
              >
                Contact us
              </Typography>{" "}
              .
            </Paragraph4>
          </Box>
          {/*  ****** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              2. INFORMATION WE MAY COLLECT ABOUT YOU
            </Typography>

            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                <ListOrderNumber>Information you give us:</ListOrderNumber>We
                collect any information you provide to us when you complete
                registration forms, or provide us with your details over the
                phone, for example when you register an account with us, provide
                information about yourself and your preferences at a tradeshow
                or subscribe to our mailing list. This information might include
                your name, address, email address, phone number, credit card
                information and other information relevant to the product or
                service that you’re registering for.
              </ListItemText>{" "}
              <ListItemText>
                <ListOrderNumber>
                  Information we collect about you:
                </ListOrderNumber>
                We will collect any information contained in any correspondence
                between you and us via contact forms on websites, emails,
                telephone calls and from public sources.
              </ListItemText>
              <ListItemText>
                We may collect information about you visiting our website and
                how you use it. This may include your IP address, geographical
                location, device information, browser type, referral source,
                length of visit, operating system, number of page views and
                similar information. This information may be collected by a
                third-party website analytics service provider on our behalf
                and/or may be collected using cookies. For more information on
                cookies please refer to paragraph 6 below.
              </ListItemText>
              <ListItemText>
                <ListOrderNumber>
                  Information we receive from third parties:
                </ListOrderNumber>
                We may collect information about you from third parties that we
                work closely with for the purposes of delivering to you the
                services that you request from us. For example, we may engage
                third parties to assist us with our online event registration
                systems or payment systems; these entities will collect
                information directly from you on our behalf. We may engage third
                parties to operate event websites on our behalf; these entities
                will collect information directly from you about your visits to
                the website on our behalf.
              </ListItemText>
              <ListItemText>
                We may also receive information about you from third parties
                where you have consented to such third party sharing your
                information with us.
              </ListItemText>
            </List>
          </Box>
          {/* **** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              3. HOW WE USE INFORMATION ABOUT YOU
            </Typography>
            <Paragraph4>
              We use your personal data, including any of the personal data
              listed in section 1 above, for the following purposes:
            </Paragraph4>

            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                Assessing an application for a product or service, the price,
                availability of payment method and the terms
              </ListItemText>
              <ListItemText>
                Managing the product or service you have with us
              </ListItemText>
              <ListItemText>
                Updating your records, tracing your whereabouts and recovering
                debt
              </ListItemText>
              <ListItemText>
                Managing any aspect of the product or service
              </ListItemText>
              <ListItemText>
                To perform and/or test the performance of, our products,
                services and internal processes
              </ListItemText>
              <ListItemText>
                To improve the operation of our business and that of our
                business partners
              </ListItemText>
              <ListItemText>
                To follow guidance and best practice under the change to rules
                of governmental and regulatory bodies
              </ListItemText>
              <ListItemText>
                For management and auditing of our business operations including
                accounting
              </ListItemText>
              <ListItemText>
                To carry out checks at Credit Reference and Fraud Prevention
                Agencies pre-application, at application, and periodically after
                that
              </ListItemText>
              <ListItemText>
                To monitor and to keep records of our communications with you
                and our staff (see below)
              </ListItemText>
              <ListItemText>
                To administer our good governance requirements such as internal
                reporting and compliance obligations or administration required
                for Annual General Meeting (“AGM”) processes
              </ListItemText>
              <ListItemText>
                For market research and analysis and developing statistics
              </ListItemText>
              <ListItemText>
                For direct marketing communications and related profiling to
                help us to offer you relevant products and service, We send
                marketing to you by SMS, email, phone, post, social media and
                digital channels (for example, using Facebook Custom Audiences
                and Google Custom Match). Offers may relate to any of our
                products and services as well as to any other offers and advice
                we think may be of interest
              </ListItemText>
              <ListItemText>
                To develop new products and services and to review and improve
                current products and services
              </ListItemText>
              <ListItemText>
                To comply with legal and regulatory obligations, requirements
                and guidance
              </ListItemText>
              <ListItemText>
                To provide insight and analysis of our customers both for
                ourselves and for the benefit of business partners either as
                part of providing products or services, helping us improve
                products or services, or to assess or improve the operating of
                our businesses
              </ListItemText>
              <ListItemText>
                To share information, as needed, with business partners service
                providers or as part of providing and administering our products
                and services or operating our business
              </ListItemText>
              <ListItemText>
                To facilitate the sale of one or more parts of our business
              </ListItemText>
            </List>
          </Box>
          {/* **** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              4. LEGAL GROUNDS FOR PROCESSING YOUR INFORMATION
            </Typography>
            <Paragraph4>
              We use your personal data, including any of the personal data
              listed in section 1 above, for the following purposes:
            </Paragraph4>
            <Box>
              <Paragraph4 sx={{ mt: 1 }}>
                <ListOrderNumber>
                  1. Where it is needed to provide you with our products or
                  services
                </ListOrderNumber>
                , such as:
              </Paragraph4>
              <List
                sx={{
                  listStyleType: "disclosure-closed",
                  pl: { xs: 2, md: 4 },
                  "& .MuiTypography-root": {
                    fontSize: {
                      xs: "calc(0.8rem + 1vw )",
                      md: "calc(0.2rem + 1vw)",
                      color: "var(--lightGray)",
                      lineHeight: 1.2,
                    },
                    display: "list-item",
                  },
                  "& .MuiListItemText-root::marker": {
                    fontSize: {
                      xs: "calc(0.5rem + 1vw)",
                      md: "calc(0.1rem + 1vw)",
                      color: "black",
                    },
                  },
                }}
              >
                <ListItemText>
                  Assessing an application for a product or service including
                  the price, the payment methods available and the conditions to
                  attach
                </ListItemText>
                <ListItemText>
                  Managing products and services you hold with us, or an
                  application for one
                </ListItemText>
                <ListItemText>
                  Updating your records, tracing your whereabouts to contact you
                  about your account and doing this for recovering debt (where
                  appropriate)
                </ListItemText>
                <ListItemText>
                  Sharing your personal information with business partners and
                  services providers when you apply for a product to help manage
                  your product
                </ListItemText>
                <ListItemText>
                  All stages and activities relevant to managing the product or
                  service including enquiry, application, administration and
                  management of accounts
                </ListItemText>
                <ListItemText>
                  For some of our profiling and other automated decision making
                  to decide whether to offer you a product and/or service,
                  particular payment method and the price or terms of this
                </ListItemText>
              </List>
            </Box>
            <Box>
              <Paragraph4 sx={{ mt: 1 }}>
                <ListOrderNumber>
                  1. Where it is in our legitimate interests to do so
                </ListOrderNumber>
                , such as:
              </Paragraph4>
              <List
                sx={{
                  listStyleType: "disclosure-closed",
                  pl: { xs: 2, md: 4 },
                  "& .MuiTypography-root": {
                    fontSize: {
                      xs: "calc(0.8rem + 1vw )",
                      md: "calc(0.2rem + 1vw)",
                      color: "var(--lightGray)",
                      lineHeight: 1.2,
                    },
                    display: "list-item",
                  },
                  "& .MuiListItemText-root::marker": {
                    fontSize: {
                      xs: "calc(0.5rem + 1vw)",
                      md: "calc(0.1rem + 1vw)",
                      color: "black",
                    },
                  },
                }}
              >
                <ListItemText>
                  Managing your products and services relating to that, updating
                  your records, tracing your whereabouts to contact you about
                  your account and doing this for recovering debt (where
                  appropriate)
                </ListItemText>
                <ListItemText>
                  To perform and/or test the performance of, our products,
                  services and internal processes
                </ListItemText>
                <ListItemText>
                  To follow guidance and recommended best practice of government
                  and regulatory bodies
                </ListItemText>
                <ListItemText>
                  For management and audit of our business operations including
                  accounting
                </ListItemText>
                <ListItemText>
                  To carry out searches at Credit Reference Agencies
                  pre-application, at the application stage, and periodically
                  after that
                </ListItemText>
                <ListItemText>
                  To carry out monitoring and to keep records of our
                  communications with you and our staff (see below)
                </ListItemText>
                <ListItemText>
                  To administer our good governance requirements and those of
                  other members of our Group, such as internal reporting and
                  compliance obligations or administration required for AGM
                  processes
                </ListItemText>
                <ListItemText>
                  For market research and analysis and developing statistics
                </ListItemText>
                <ListItemText>
                  For direct marketing communications and related profiling to
                  help us to offer you relevant products and services, including
                  deciding whether or not to offer you certain products and
                  service. We will send marketing to you by SMS, email, phone,
                  post and social media and digital channels (for example, using
                  Facebook Custom Audiences and Google Custom Match)
                </ListItemText>
                <ListItemText>
                  Subject to the appropriate controls, to provide insight and
                  analysis of our customers to business partners either as part
                  of providing products or services, helping us improve products
                  or services, or to assess or to improve the operating of our
                  businesses
                </ListItemText>
                <ListItemText>
                  For some of our profiling and other automated decision making
                </ListItemText>
                <ListItemText>
                  Where we need to share your personal information with people
                  or organisations in order to run our business or comply with
                  any legal and/or regulatory obligations
                </ListItemText>
              </List>
            </Box>
            <Paragraph4 sx={{ mt: 1 }}>
              {" "}
              3. To comply with our
              <ListOrderNumber>legal obligations</ListOrderNumber>
            </Paragraph4>
            <Box>
              <Paragraph4 sx={{ mt: 1 }}>
                4. With your
                <ListOrderNumber>consent or explicit consent:</ListOrderNumber>
              </Paragraph4>

              <List
                sx={{
                  listStyleType: "disclosure-closed",
                  pl: { xs: 2, md: 4 },
                  "& .MuiTypography-root": {
                    fontSize: {
                      xs: "calc(0.8rem + 1vw )",
                      md: "calc(0.2rem + 1vw)",
                      color: "var(--lightGray)",
                      lineHeight: 1.2,
                    },
                    display: "list-item",
                  },
                  "& .MuiListItemText-root::marker": {
                    fontSize: {
                      xs: "calc(0.5rem + 1vw)",
                      md: "calc(0.1rem + 1vw)",
                      color: "black",
                    },
                  },
                }}
              >
                <ListItemText>
                  For some direct marketing communications
                </ListItemText>
                <ListItemText>
                  For some of our profiling and other automated decision making
                </ListItemText>
                <ListItemText>
                  For some of our processing of special categories of personal
                  data
                </ListItemText>
              </List>
            </Box>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              5. WHO WE MIGHT SHARE YOUR INFORMATION WITH
            </Typography>
            <Paragraph4>
              We may share information with the following third parties for the
              purposes listed above:
            </Paragraph4>
            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                SIVA Inotec Ltd. group companies (companies having over 50%
                common shareholding) and service providers
              </ListItemText>
              <ListItemText>
                Business partners, account beneficiaries, or others who are a
                part of providing your products and services or operating our
                business
              </ListItemText>
              <ListItemText>
                Governmental and regulatory bodies such as HMRC, the Financial
                Conduct Authority, the Prudential Regulation Authority, the
                Ombudsman, the Information Commissioner’s Office and under the
                Financial Services Compensation Scheme
              </ListItemText>
              <ListItemText>
                Other organisations and businesses who provide services to us
                such as debt recovery agencies, back up and server hosting
                providers, IT software and maintenance providers, document
                storage providers and suppliers of other back office functions
              </ListItemText>
              <ListItemText>
                Credit Reference and Fraud Prevention Agencies (see below)
              </ListItemText>
              <ListItemText>
                Market research organisations who help us to develop and improve
                our products and services
              </ListItemText>
            </List>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              6. YOUR RIGHT TO WITHDRAW YOUR CONSENT
            </Typography>
            <Paragraph4>
              Where we’re relying upon your consent to process personal data,
              you can withdraw this at any time by contacting us using the
              details below.
            </Paragraph4>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              7. PERSONAL INFORMATION MAY BE TRANSFERRED OUTSIDE EEA
            </Typography>
            <Paragraph4>
              We’re based in India and operate in UK and Europe, but sometimes
              your personal information may be transferred outside the European
              Economic Area. If we do so we’ll make sure that suitable
              safeguards are in place, for example by using approved contractual
              agreements, unless certain exceptions apply.
            </Paragraph4>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              8. CHANGES TO YOUR PERSONAL INFORMATION
            </Typography>
            <Paragraph4>
              Inform us of any changes to your personal information so that we
              can update our records.
            </Paragraph4>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              9. MONITORING PERSONAL INFORMATION
            </Typography>
            <Paragraph4>
              In this section monitoring means any: listening to, recording of,
              viewing of, intercepting of, or taking and keeping records (as the
              case may be) of calls, email, text messages, social media
              messages, in person (face to face) meetings and other
              communications.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              We may monitor where permitted by law and we’ll do this where the
              law requires it, or to comply with regulatory rules, to prevent or
              detect crime, in the interests of protecting the security of our
              communications systems and procedures and for quality control and
              staff training purposes. This information may be shared for the
              purposes described above.
            </Paragraph4>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              10. HOW LONG WE KEEP THE PERSONAL INFORMATION
            </Typography>
            <Paragraph4>
              Unless we explain otherwise to you, we hold your personal
              information based on the following criteria:
            </Paragraph4>
            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                For as long as we have reasonable business needs, such as
                managing our relationship with you and managing our operations
              </ListItemText>
              <ListItemText>
                For as long as we provide goods and/or services to you and then
                for as long as someone could bring a claim against us; and/or
              </ListItemText>
              <ListItemText>
                Retention periods in line with legal and regulatory requirements
                or guidance.
              </ListItemText>
            </List>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              11. YOUR RIGHTS UNDER DATA PROTECTION LAWS
            </Typography>
            <Paragraph4>
              Following is a list of rights that all individuals have under data
              protection laws. They don’t apply in all circumstances. If you
              wish to use any of them, we will explain at that time if they are
              engaged or not. The right of data portability is only relevant
              from May 2018.
            </Paragraph4>
            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                The right <b>to be informed</b> about the processing of your
                personal information
              </ListItemText>
              <ListItemText>
                The right to have your personal information{" "}
                <b>corrected if it is inaccurate</b> and to have{" "}
                <b>incomplete personal information completed</b>
              </ListItemText>
              <ListItemText>
                The right <b>to object</b> to processing of your personal
                information
              </ListItemText>
              <ListItemText>
                The right <b>to restrict processing</b> of your personal
                information
              </ListItemText>
              <ListItemText>
                The right <b>to have your personal information erased</b> (the
                “right to be forgotten”)
              </ListItemText>
              <ListItemText>
                The right to <b>request access</b> to your personal information
                and to obtain information about how we process it
              </ListItemText>
              <ListItemText>
                The right to{" "}
                <b>move, copy or transfer your personal information</b> (“data
                portability”)
              </ListItemText>
              <ListItemText>
                Rights in relation to{" "}
                <b>
                  automated decision making which has a legal effect or
                  otherwise significantly affects you
                </b>
              </ListItemText>
            </List>
            <Paragraph4>
              You have the right to complain to the Information Commissioner’s
              Office which enforces data protection laws:{" "}
              <Typography
                component={Link}
                href={"https://ico.org.uk"}
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
                }}
                title="ico.org.uk"
              >
                https://ico.org.uk
              </Typography>{" "}
              . You can contact us using the details below. You can contact us
              by going to the{" "}
              <Typography
                component={Link}
                href={"/rfid-contact"}
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
                }}
                title="Contact Us"
              >
                Contact Us
              </Typography>{" "}
              section of our website to exercise these rights.
            </Paragraph4>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              12. YOUR MARKETING PREFERENCES
            </Typography>
            <Paragraph4>
              We may use your office address, phone numbers, email address and
              social media or digital channels (for example, Facebook, Google
              and message facilities in other platforms) to contact you
              according to your marketing preferences. You can stop our
              marketing at any time by contacting us using the details below or
              by following the instructions in the communication.
            </Paragraph4>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              13. CONTACT US
            </Typography>
            <Paragraph4>
              If you have any questions about this privacy policy, or if you
              wish to exercise your rights or contact the DPO, you can contact
              us by going to the Contact Us section of our website.
              Alternatively, you can write to SIVA Inotec Ltd., G-47, 1st floor,
              Sector 6, Noida, Uttar Pradesh, 201301, India, marking it for the
              attention of the DPO.
            </Paragraph4>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default PrivacyPolicy;
