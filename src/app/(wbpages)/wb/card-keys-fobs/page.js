import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import * as APIURLS from "@/apis/apiconstant";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "RFID Cards & Key Fobs | Access Control Solutions - SIVA IoT",
  description:
    "RFID Cards and Key Fobs by Siva are compact, convenient, and versatile identification solutions. Designed in standard credit card size, RFID Cards fit easily in wallets or badge holders, while RFID Key Fobs attach to keychains or lanyards.",
  keywords:
    "RFID Cards and Key Fobs by Siva are compact, convenient, and versatile identification solutions. Designed in standard credit card size, RFID Cards fit easily in wallets or badge holders, while RFID Key Fobs attach to keychains or lanyards.",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.WB_CARD_KEYS_FOBS,
    title: "RFID Cards & Key Fobs | Access Control Solutions - SIVA IoT",
    description:
      "RFID Cards and Key Fobs by Siva are compact, convenient, and versatile identification solutions. Designed in standard credit card size, RFID Cards fit easily in wallets or badge holders, while RFID Key Fobs attach to keychains or lanyards.",
    images: [
      {
        url: APIURLS.BASE_PATH.WB + "images/Cards-Key-fobs-banner.jpg",
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
    title: "RFID Cards & Key Fobs | Access Control Solutions - SIVA IoT",
    description:
      "RFID Cards and Key Fobs by Siva are compact, convenient, and versatile identification solutions. Designed in standard credit card size, RFID Cards fit easily in wallets or badge holders, while RFID Key Fobs attach to keychains or lanyards.",
    images: [APIURLS.BASE_PATH.WB + "images/Cards-Key-fobs-banner.jpg"],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.WB_CARD_KEYS_FOBS,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const CardKeysFobs = () => {
  return (
    <>
      <Box sx={{ bgcolor: "var(--green)", py: 4 }}>
        <Container>
          <Typography
            sx={{
              fontSize: {
                xs: "calc(1rem + 1vw)",
                md: "calc(1.2rem + 1vw)",
              },
              fontWeight: "bold",
              color: "white",
            }}
            component={"h1"}
          >
            Cards & Key fobs
          </Typography>
        </Container>
      </Box>
      <Container>
        <Box sx={{ mt: 4 }}>
          <LazyImage
            src={APIURLS.BASE_PATH.WB + "images/Cards-Key-fobs-banner.jpg"}
            alt="Access Control Solutions"
          />
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "calc(0.5rem + 1rem )",
                md: "calc(1rem + 1rem )",
              },
              color: "var(--headerColor)",
              fontWeight: "bold",
            }}
          >
            Cards & Key fobs
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "calc(0.1rem + 1rem )",
                md: "calc(0.2rem + 1rem )",
              },
              color: "var(--lightGray)",
              my: 2,
            }}
          >
            RFID Cards are designed in a standard credit card size, making them
            easy to carry and store in wallets, pockets, or ID badge holders.
            Each card is embedded with a small RFID chip that communicates with
            compatible RFID readers. When presented to a reader, the card's
            unique identifier is transmitted wirelessly, allowing for quick and
            contactless identification.
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "calc(0.1rem + 1rem )",
                md: "calc(0.2rem + 1rem )",
              },
              color: "var(--lightGray)",
            }}
          >
            RFID Key Fobs are small, lightweight devices that can be easily
            attached to keychains, lanyards, or other accessories. They provide
            a convenient and hands-free way for users to gain access to
            authorized areas by simply presenting the fob to an RFID reader.
          </Typography>
        </Box>
        <Box sx={{ my: 4 }}>
          <TableContainer
            component={Paper}
            sx={{ borderRadius: 0, boxShadow: 0 }}
          >
            <Table>
              <TableHead
                sx={{
                  display: { xs: "none", md: "table-header-group" },
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: "calc(0.4rem + 1rem)",
                      color: "var(--green)",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  ></TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: "calc(0.4rem + 1rem)",
                      color: "var(--green)",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Cards
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: "calc(0.4rem + 1rem)",
                      color: "var(--green)",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Key Fobs
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  display: { xs: "block", md: "table-row-group" },
                  "& img": { height: { xs: "auto", md: 300 } },
                  "& td": {
                    display: { xs: "block", md: "table-cell" },
                    textAlign: { xs: "right", md: "left" },
                  },
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  ></TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    <LazyImage
                      src={APIURLS.BASE_PATH.WB + "images/cards.jpg"}
                      alt="RFID Cards"
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    <LazyImage
                      src={APIURLS.BASE_PATH.WB + "images/key-fobs-1.jpg"}
                      alt="RFID Key Fobs"
                      style={{ objectFit: "cover" }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: {
                        xs: "calc(1rem + 1vw)",
                        md: "calc(0.4rem + 1rem)",
                      },
                      fontWeight: "bold",
                      color: "var(--green)",
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    BENEFITS
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "calc(0.7rem + 1vw)",
                          md: "calc(0.2rem + 1rem)",
                        },
                        color: "var(--lightGray)",
                        fontWeight: "bold",
                      }}
                    >
                      Ideal for Hotel & Resort Guests and Staff for Keyless
                      Entry & Applications
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "calc(0.7rem + 1vw)",
                          md: "calc(0.1rem + 1rem)",
                        },
                        color: "var(--lightGray)",
                      }}
                    >
                      Re-usable
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "calc(0.7rem + 1vw)",
                          md: "calc(0.2rem + 1rem)",
                        },
                        color: "var(--lightGray)",
                        fontWeight: "bold",
                      }}
                    >
                      Ideal for VIP Members and Season Pass Holders
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "calc(0.7rem + 1vw)",
                          md: "calc(0.1rem + 1rem)",
                        },
                        color: "var(--lightGray)",
                      }}
                    >
                      Lightweight & convenient
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "calc(0.5rem + 1rem )",
                md: "calc(1rem + 1rem )",
              },
              color: "var(--headerColor)",
              fontWeight: "bold",
            }}
          >
            Specifications
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ borderRadius: 0, boxShadow: 0, my: 4 }}
          >
            <Table>
              <TableHead
                sx={{
                  display: { xs: "none", md: "table-header-group" },
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: "calc(0.4rem + 1rem)",
                      color: "var(--green)",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  ></TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: "calc(0.4rem + 1rem)",
                      color: "var(--green)",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Cards
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: "calc(0.4rem + 1rem)",
                      color: "var(--green)",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Key Fobs
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  display: { xs: "block", md: "table-row-group" },
                  "& td": {
                    display: { xs: "block", md: "table-cell" },
                    textAlign: { xs: "right", md: "left" },
                  },
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: {
                        xs: "calc(1rem + 1vw)",
                        md: "calc(0.4rem + 1rem)",
                      },
                      fontWeight: "bold",
                      color: "var(--green)",
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    Material
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    PVC, White
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    PVC, White
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: {
                        xs: "calc(1rem + 1vw)",
                        md: "calc(0.4rem + 1rem)",
                      },
                      fontWeight: "bold",
                      color: "var(--green)",
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    Customization Options
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    Up to full color printin
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    Up to full color printing
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: {
                        xs: "calc(1rem + 1vw)",
                        md: "calc(0.4rem + 1rem)",
                      },
                      fontWeight: "bold",
                      color: "var(--green)",
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    Dimensions
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    W: 2.1'' x L: 3.4”
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    W: 1.1'' x L: 2.2”
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: {
                        xs: "calc(1rem + 1vw)",
                        md: "calc(0.4rem + 1rem)",
                      },
                      fontWeight: "bold",
                      color: "var(--green)",
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    Minimum Order
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    1,000 pcs
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    1,000 pcs
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: {
                        xs: "calc(1rem + 1vw)",
                        md: "calc(0.4rem + 1rem)",
                      },
                      fontWeight: "bold",
                      color: "var(--green)",
                      border: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    Tag Info
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    Ships 2-3 weeks from the date of artwork approval
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: {
                        xs: "calc(0.7rem + 1vw)",
                        md: "calc(0.2rem + 1rem)",
                      },
                      color: "var(--lightGray)",
                      fontWeight: "bold",
                    }}
                  >
                    Ships 2-3 weeks from the date of artwork approval
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};
export default CardKeysFobs;
