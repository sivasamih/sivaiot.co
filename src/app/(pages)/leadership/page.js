import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import * as APIURLS from "@/apis/apiconstant";
import { Route_Path } from "@/apis/api";
import { StructureData } from "@/helper/structuredata";
import LeaderCard from "@/components/customcompo/cards/leaderCard";

export const metadata = {
  title: "Leadership at Siva IoT | RFID Technology",
  description: "Leadership at Siva IoT | RFID Technology",
  keywords: "Leadership at Siva IoT | RFID Technology",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.LEADERSHIP,
    title: "Leadership at Siva IoT | RFID Technology",
    description: "Leadership at Siva IoT | RFID Technology",
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
    title: "Leadership at Siva IoT | RFID Technology",
    description: "Leadership at Siva IoT | RFID Technology",
    images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: 'https://sivaiot.co',

  },
  // Additional Metadata
  charset: "UTF-8",
};

const LeaderShipPage = () => {
  const jsonLd = StructureData.LEADERSHIP;
  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Container sx={{ py: 4 }}>
          <Box sx={{ mb: 4 }}>
            <LeaderCard
              name={"Rajiv K. Aggarwal"}
              image={APIURLS.BASE_PATH.OthersImage + "rajiv-aggarwal.jpg"}
              position={"Founder & CEO"}
              description={"Rajiv founded SIVA in 1986 and made it a major player in the tag, labels & ticketing industry."}
              description_one={"He has over 30 years of in-depth experience in New product & Business development, hands on with machines & tooling, knowledge of materials & processes. Strong foundations in Accounting & Finance. Rajiv also heads SIVA 'Horizon 3' initiative which focusses on Products & Services to be offered by SIVA to the market in 2-3 years. India."}
              description_two={"Rajiv graduated from Sri Ram College of Commerce(SRCC) one of India's top business schools with a degree in B.Com. He lives in Goa, India."}
              isImageLeft={true}
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <LeaderCard
              name={"Arjun Aggarwal"}
              image={APIURLS.BASE_PATH.OthersImage + "Arjun-Aggarwal-COO.jpg"}
              position={"Executive Vice President, Group Sales"}
              description={"Arjun joined SIVA in Apr 2010. In his role Arjun spearheads the function of Sales across the entire SIVA Group"}
              description_one={"He has over 9 years of experience working on products for industries such as Amusement, Parking & Transportation, Smart industries & Healthcare. Arjun is also involved in group strategy formulation, new market developments, product management and overall group operations. Techinical, Arjun is also hands on with machines, materials, tooling & production processes."}
              description_two={"Arjun holds a degree in Accounting and Management from Cardiff University. He lives in Goa, India."}
              isImageLeft={false}
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <LeaderCard
              name={"Pradeep Mangal"}
              image={APIURLS.BASE_PATH.OthersImage + "Pradeep-Mangal.jpg"}
              position={"Vice President, Finance"}
              description={"Pradeep joined SIVA in 2001 and is responsible for accounting & finance functions of the company"}
              description_one={"He has over 25 years of rich experience managing finance, taxation, legal and accounting functions and cash flow management. As a senior member of the team, Pradeep also adds value towards the corporate governance practices in the Group."}
              description_two={"Prior to his association with SIVA, he has worked at senior positions with multi-national trading companies.Pradeep has a degree in B /com, Chartered Accountancy and lives in Noida, India."}
              isImageLeft={true}
            />
          </Box>


          {/* <Box sx={{ mb: 4 }}>
            <Grid
              container
              spacing={0}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  borderLeft: {
                    xs: "",
                    md: "3rem solid var(--borderColor)",
                  },
                  borderBottom: {
                    xs: "",
                    md: "3rem solid var(--borderColor)",
                  },
                  borderRight: {
                    xs: "",
                    md: "3rem solid transparent",
                  },
                  borderTop: {
                    xs: "",
                    md: "3rem solid transparent",
                  },
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    p: 1,
                  }}
                >
                  <LazyImage
                    src={APIURLS.BASE_PATH.OthersImage + "rajiv-aggarwal.jpg"}
                    alt="Rajiv K. Aggarwal"
                    width="100%"
                    height="100%"
                  />
                </Box>{" "}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
              >
                <Box sx={{ mt: { xs: 0, md: "3rem" } }}>
                  <Typography
                    component="h2"
                    sx={{
                      fontWeight: "bold",
                      py: 1,
                      color: "var(--headerColor)",
                      fontSize: {
                        xs: "calc(1.1rem + 1vw)",
                        md: "calc(1.1rem + 1vw)",
                      },
                    }}
                  >
                    Rajiv K. Aggarwal
                  </Typography>
                  <Typography
                    component="h1"
                    sx={{
                      fontWeight: "bold",
                      pb: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.4rem + 1vw)",
                      },
                    }}
                  >
                    Founder & CEO
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Rajiv founded SIVA in 1986 and made it a major player in the
                    tag, labels & ticketing industry.
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    He has over 30 years of in-depth experience in New product &
                    Business development, hands on with machines & tooling,
                    knowledge of materials & processes. Strong foundations in
                    Accounting & Finance. Rajiv also heads SIVA 'Horizon 3'
                    initiative which focusses on Products & Services to be
                    offered by SIVA to the market in 2-3 years. India.
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Rajiv graduated from Sri Ram College of Commerce(SRCC) one
                    of India's top business schools with a degree in B.Com. He
                    lives in Goa, India.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box> */}

          {/* <Box sx={{}}>
            <Grid
              container
              spacing={0}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
                sx={{ order: { xs: 2, md: 1 } }}
              >
                <Box sx={{ mt: { xs: 0, md: "2rem" } }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      textAlign: { xs: "left", md: "right" },
                      py: 1,
                      color: "var(--headerColor)",
                      fontSize: {
                        xs: "calc(1.1rem + 1vw)",
                        md: "calc(1.1rem + 1vw)",
                      },
                    }}
                  >
                    Arjun Aggarwal
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      textAlign: { xs: "left", md: "right" },
                      pb: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.4rem + 1vw)",
                      },
                    }}
                  >
                    Executive Vice President, Group Sales
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Arjun joined SIVA in Apr 2010. In his role Arjun spearheads
                    the function of Sales across the entire SIVA Group
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    He has over 9 years of experience working on products for
                    industries such as Amusement, Parking & Transportation,
                    Smart industries & Healthcare. Arjun is also involved in
                    group strategy formulation, new market developments, product
                    management and overall group operations. Techinical, Arjun
                    is also hands on with machines, materials, tooling &
                    production processes.
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      mb: 4,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Arjun holds a degree in Accounting and Management from
                    Cardiff University. He lives in Goa, India.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  borderRight: {
                    xs: "",
                    md: "3rem solid var(--borderColor)",
                  },
                  borderTop: {
                    xs: "",
                    md: "3rem solid var(--borderColor)",
                  },
                  borderLeft: {
                    xs: "",
                    md: "3rem solid transparent",
                  },
                  borderBottom: {
                    xs: "",
                    md: "3rem solid transparent",
                  },
                  order: { xs: 1, md: 2 },
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    p: 1,
                  }}
                >
                  <LazyImage
                    src={
                      APIURLS.BASE_PATH.OthersImage + "Arjun-Aggarwal-COO.jpg"
                    }
                    alt="Arjun Aggarwal"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box> */}

          {/* <Box>
            <Grid
              container
              spacing={0}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  borderLeft: {
                    xs: "",
                    md: "3rem solid var(--borderColor)",
                  },
                  borderBottom: {
                    xs: "",
                    md: "3rem solid var(--borderColor)",
                  },
                  borderRight: {
                    xs: "",
                    md: "3rem solid transparent",
                  },
                  borderTop: {
                    xs: "",
                    md: "3rem solid transparent",
                  },
                  p: 1,
                }}
              >
                {" "}
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    p: 1,
                  }}
                >
                  <LazyImage
                    src={APIURLS.BASE_PATH.OthersImage + "Pradeep-Mangal.jpg"}
                    alt="Pradeep Mangal"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
                sx={{ py: 2 }}
              >
                <Box sx={{ py: { xs: 0, md: 4 } }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      py: 1,
                      color: "var(--headerColor)",
                      fontSize: {
                        xs: "calc(1.1rem + 1vw)",
                        md: "calc(1.1rem + 1vw)",
                      },
                    }}
                  >
                    Pradeep Mangal
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      pb: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.4rem + 1vw)",
                      },
                    }}
                  >
                    Vice President, Finance
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Pradeep joined SIVA in 2001 and is responsible for
                    accounting & finance functions of the company
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    He has over 25 years of rich experience managing finance,
                    taxation, legal and accounting functions and cash flow
                    management. As a senior member of the team, Pradeep also
                    adds value towards the corporate governance practices in the
                    Group.
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Prior to his association with SIVA, he has worked at senior
                    positions with multi-national trading companies.
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.2rem + 1vw)",
                      },
                      lineHeight: 1.2,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Pradeep has a degree in B/com, Chartered Accountancy and
                    lives in Noida, India.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box> */}
        </Container>
      </section>
    </>
  );
};
export default LeaderShipPage;
