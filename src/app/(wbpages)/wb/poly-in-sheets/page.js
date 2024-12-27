import * as APIURLS from "@/apis/apiconstant";
import PageHeader from "@/components/customcompo/pageheader/pageheader";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DatasheetButton from "@/components/compo/datasheet/datasheetbutton";
import { Route_Path } from "@/apis/api";

let DataSheet = [
  {
    id: 1,
    ProductDatashet: "RFID-Wrsitband-Specifications.pdf",
    IsActive: true,
    ProductDatasheetName: "Product Specification",
  },

  {
    id: 2,
    ProductDatashet: "Poly_10x1_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1" x 10" Artwork',
  },
  {
    id: 3,
    ProductDatashet: "Poly_11x1_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1" x 1" Artwork',
  },
  {
    id: 4,
    ProductDatashet: "artwork/Poly_12x1_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1" x 12" Artwork',
  },
];

export const metadata = {
  //   title: "",
  //   description: "",
  //   keywords: "",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.WB_POLY_IN_SHEETS,
    // title: "",
    // description: "",
    images: [
      {
        url: APIURLS.BASE_PATH.WB + "images/poly-in-sheet-banner.png",
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
    // title: "",
    // description: "",
    images: [APIURLS.BASE_PATH.WB + "images/poly-in-sheet-banner.png"],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.WB_POLY_IN_SHEETS,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const PolyInSheets = () => {
  return (
    <>
      <PageHeader title={"UltimoID® Poly in Sheets"} />
      <Container>
        <Box sx={{ mt: 4 }}>
          <LazyImage
            src={APIURLS.BASE_PATH.WB + "images/poly-in-sheet-banner.png "}
            alt="Waterproof Wristbands"
          />
        </Box>
        <Box>
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
            If you’re looking for high quality & high durability RFID wristbands
            with photo-like full-color print for high-impact branding, then look
            no further. Waterproof, tearproof and fade resistant, the UltimoID®
            Poly wristbands in sheets feature a strong permanent adhesive,
            making it an ideal choice for Waterparks, Theme parks and much more.
            Suitable for multi-day use, the UltimoID® Poly bands are ideal for
            counterfeit prevention and sponsorship revenue as well
          </Typography>
        </Box>
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={12}
            md={9}
          >
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
                Key Benefits:
              </Typography>
              <List
                sx={{
                  listStyleType: "square",
                  pl: { xs: 2, md: 4 },
                  p: 0,
                  "& .MuiListItem-root": { display: "list-item" },
                }}
              >
                <ListItem>Vibrant high-quality full-color printing</ListItem>
                <ListItem>Tamper evident adhesive closure</ListItem>
                <ListItem>Suitable for multi-day use</ListItem>
                <ListItem>
                  Variable serialization and data for guest registration on
                  social media programs
                </ListItem>
                <ListItem>
                  Available in a convenient sheet format, with each sheet
                  containing 10 wristbands.
                </ListItem>
              </List>
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
                sx={{
                  borderRadius: 0,
                  boxShadow: 0,
                  my: 4,
                  px: { xs: 2, md: 5 },
                }}
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
                        Product
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
                            md: "calc(0.01rem + 1rem)",
                          },
                          color: "var(--lightGray)",
                          fontWeight: "bold",
                        }}
                      >
                        Waterproof & Tearproof with tamper-evident adhesive
                        closure
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
                            md: "calc(0.01rem + 1rem)",
                          },
                          color: "var(--lightGray)",
                          fontWeight: "bold",
                        }}
                      >
                        Up to full color printing + variable data printing ; UID
                        printing & pre-encoding
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
                            md: "calc(0.01rem + 1rem)",
                          },
                          color: "var(--lightGray)",
                          fontWeight: "bold",
                        }}
                      >
                        1” wide; 10”/11”/ 12” length options
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
                            md: "calc(0.01rem + 1rem)",
                          },
                          color: "var(--lightGray)",
                          fontWeight: "bold",
                        }}
                      >
                        3,000 pcs ; Sheet form ; 10 Wristbands per sheet
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
                        Lead Time
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid rgba(224, 224, 224, 1)",
                          fontSize: {
                            xs: "calc(0.7rem + 1vw)",
                            md: "calc(0.01rem + 1rem)",
                          },
                          color: "var(--lightGray)",
                          fontWeight: "bold",
                        }}
                      >
                        Ships 2-3 weeks from the date of artwork approval
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
                        IC Options
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid rgba(224, 224, 224, 1)",
                          fontSize: {
                            xs: "calc(0.7rem + 1vw)",
                            md: "calc(0.01rem + 1rem)",
                          },
                          color: "var(--lightGray)",
                          fontWeight: "bold",
                        }}
                      >
                        ICODE SLIX II, Mifare UL EV1, Mifare UL-C, FM1108-1K
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ mb: { xs: 4, md: 0 } }}
          >
            <Box sx={{ mt: 4, border: "1px solid #cfd8dc " }}>
              <LazyImage
                src={APIURLS.BASE_PATH.WB + "images/poly-in-sheet-pg-img.png"}
                alt="Laminated Wristbands"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PolyInSheets;
