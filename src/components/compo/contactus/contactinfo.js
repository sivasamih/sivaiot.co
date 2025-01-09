import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import Title4 from "../../customcompo/Typo/title4";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <Box>
        <Title4 text={"Get In Touch"} />

        <Box sx={{ mt: 2 }}>
          <Typography
            component={"h1"}
            paragraph
            sx={{
              fontSize: { xs: "calc(0.8rem + 1vw)", md: "calc(0.4rem + 1vw)" },
              lineHeight: 1.2,
            }}
          >
            Please feel free to reach out to us via email or through the Contact
            form below:
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(auto,1fr)",
                md: "repeat(3,1fr)",
              },
              columnGap: 2,
            }}
          >
            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.4rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
              >
                For General Inquiries
              </Typography>
              <Box sx={{ ml: 0 }}>
                <Typography
                  variant={{ xs: "h6", md: "h5" }}
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "calc(0.8rem + 1vw)",
                      md: "calc(0.4rem + 1vw)",
                    },
                    color: "#455a64",
                  }}
                >
                  Email:
                </Typography>
                <Typography
                  component={Link}
                  href={"mailto:iotsales@sivagroup.co"}
                  sx={{
                    textDecoration: "none",
                    color: "var(--green)",
                    ml: 2,
                    "&:hover": { textDecoration: "underline" },
                    fontSize: {
                      xs: "calc(0.6rem + 1vw)",
                      md: "calc(0.4rem + 1vw)",
                    },
                  }}
                  title="Contact mail"
                >
                  iotsales@sivagroup.co
                  {/* </Link> */}
                </Typography>
              </Box>
              <Box sx={{ ml: 0 }}>
                <Typography
                  variant={{ xs: "h6", md: "h5" }}
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "calc(0.8rem + 1vw)",
                      md: "calc(0.4rem + 1vw)",
                    },
                    color: "#455a64",
                  }}
                >
                  Phone:
                </Typography>
                <Typography
                  component={Link}
                  href={"tel:+918326621000"}
                  sx={{
                    ml: 2,
                    textDecoration: "none",
                    color: "var(--green)",
                    "&:hover": { textDecoration: "underline" },
                    fontSize: {
                      xs: "calc(0.6rem + 1vw)",
                      md: "calc(0.4rem + 1vw)",
                    },
                  }}
                  title="Contact No"
                >
                  (+91) 832-6621000
                  {/* </Link> */}
                </Typography>
              </Box>
            </Box>

            {/* ***** */}
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.4rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
              >
                For Orders
              </Typography>
              <Box sx={{ ml: 0 }}>
                <Typography
                  variant={{ xs: "h6", md: "h5" }}
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "calc(0.8rem + 1vw)",
                      md: "calc(0.3rem + 1vw)",
                    },
                    color: "#455a64",
                  }}
                >
                  Email:
                </Typography>
                <Typography
                  component={Link}
                  href={"mailto:iotorders@sivagroup.co"}
                  sx={{
                    ml: 2,
                    textDecoration: "none",
                    color: "var(--green)",
                    "&:hover": { textDecoration: "underline" },
                    fontSize: {
                      xs: "calc(0.6rem + 1vw)",
                      md: "calc(0.4rem + 1vw)",
                    },
                  }}
                  title="contact mail for Order"
                >
                  {/* tfoster@sivagroup.co */}
                  iotorders@sivagroup.co
                </Typography>
              </Box>
              <Box sx={{ ml: 0 }}>
                <Typography
                  variant={{ xs: "h6", md: "h5" }}
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "calc(0.8rem + 1vw)",
                      md: "calc(0.3rem + 1vw)",
                    },
                    color: "#455a64",
                  }}
                >
                  Phone:
                </Typography>
                <Typography
                  component={Link}
                  href={"tel:+918326621000"}
                  sx={{
                    ml: 2,
                    textDecoration: "none",
                    color: "var(--green)",
                    "&:hover": { textDecoration: "underline" },
                    fontSize: {
                      xs: "calc(0.6rem + 1vw)",
                      md: "calc(0.4rem + 1vw)",
                    },
                  }}
                  title="Contact number for Order"
                >
                  (+91) 832-6621000
                  {/* </Link> */}
                </Typography>
              </Box>
            </Box>

            {/* ***** */}

            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.4rem + 1vw)",
                  },
                  lineHeight: 1.2,
                }}
              >
                For Career Opportunities
              </Typography>
              <Box sx={{ ml: 0 }}>
                <Typography
                  variant={{ xs: "h6", md: "h5" }}
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "calc(0.8rem + 1vw)",
                      md: "calc(0.3rem + 1vw)",
                    },
                    color: "#455a64",
                  }}
                >
                  Email:
                </Typography>
                <Typography
                  component={Link}
                  href={"mailto:hr@sivagroup.co"}
                  sx={{
                    ml: 2,
                    textDecoration: "none",
                    color: "var(--green)",
                    "&:hover": { textDecoration: "underline" },
                    fontSize: {
                      xs: "calc(0.6rem + 1vw)",
                      md: "calc(0.4rem + 1vw)",
                    },
                  }}
                  title="Siva HR mail"
                >
                  hr@sivagroup.co
                  {/* </Link> */}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactInfo;
