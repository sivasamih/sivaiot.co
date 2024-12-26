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

let DataSheetList = [
  {
    id: 1,
    ProductDatashet: "RFID-Wrsitband-Specifications.pdf",
    IsActive: true,
    ProductDatasheetName: "Product Specification",
  },

  {
    id: 2,
    ProductDatashet: "DT_10x1_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1" x 10" Artwork',
  },
  {
    id: 3,
    ProductDatashet: "DT_11x1_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1" x 11" Artwork',
  },
  {
    id: 4,
    ProductDatashet: "DT_12x1_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1" x 12" Artwork',
  },
  {
    id: 5,
    ProductDatashet: "DT_10x1.18_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1.18" x 10" Artwork',
  },

  {
    id: 6,
    ProductDatashet: "DT_11x1.18_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1.18" x 11" Artwork',
  },
  {
    id: 7,
    ProductDatashet: "DT_11.5x1.18_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1.18" x 11.5" Artwork',
  },
  {
    id: 8,
    ProductDatashet: "DT_12x1.18_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: '1.18" x 12" Artwork',
  },
];

export const metadata = {
  title:
    "Waterproof Wristbands | Direct Thermal Printable Wristbands - SIVA IoT",
  description:
    "Achieve on-site variable data printing and encoding with RFID direct thermal printers. Siva's high-quality wristbands are compatible with self-dispensing kiosks and offer excellent durability against soaps, sanitizers, sunscreen, and chlorinated water",
  keywords:
    "Achieve on-site variable data printing and encoding with RFID direct thermal printers. Siva's high-quality wristbands are compatible with self-dispensing kiosks and offer excellent durability against soaps, sanitizers, sunscreen, and chlorinated water",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.WB_ULTIMOID_DIRECTTHERMAL,
    title:
      "Waterproof Wristbands | Direct Thermal Printable Wristbands - SIVA IoT",
    description:
      "Achieve on-site variable data printing and encoding with RFID direct thermal printers. Siva's high-quality wristbands are compatible with self-dispensing kiosks and offer excellent durability against soaps, sanitizers, sunscreen, and chlorinated water",
    images: [
      {
        url: APIURLS.BASE_PATH.WB + "images/ultimoiddirectthermal-banner.jpg",
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
    title:
      "Waterproof Wristbands | Direct Thermal Printable Wristbands - SIVA IoT",
    description:
      "Achieve on-site variable data printing and encoding with RFID direct thermal printers. Siva's high-quality wristbands are compatible with self-dispensing kiosks and offer excellent durability against soaps, sanitizers, sunscreen, and chlorinated water",
    images: [APIURLS.BASE_PATH.WB + "images/ultimoiddirectthermal-banner.jpg"],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.WB_ULTIMOID_DIRECTTHERMAL,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const UltimoIdDirectthermal = () => {
  return (
    <>
      <PageHeader title={"UltimoID® Direct Thermal"} />
      <Container>
        <Box sx={{ mt: 4 }}>
          <LazyImage
            src={
              APIURLS.BASE_PATH.WB + "images/ultimoiddirectthermal-banner.jpg"
            }
            alt="Direct Thermal Wristbands for Access Control"
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
            Achieve on-site variable data printing & encoding using RFID direct
            thermal printers. These wristbands can be integrated into
            self-dispensing kiosks as well. The use of high-quality material
            ensures excellent thermal image durability and resistance to soaps,
            hand sanitizers, sunscreen lotions and chlorinated water.
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
                <ListItem>
                  Print variable data (barcodes, date & time etc.) at the point
                  of issue
                </ListItem>
                <ListItem>Fade-proof direct thermal printing</ListItem>
                <ListItem>
                  Tamper-evident adhesive closure designed especially for
                  waterparks
                </ListItem>
                <ListItem>
                  Kiosk printing/encoding/dispensing compatible
                </ListItem>
                <ListItem>Suitable for multi-day use</ListItem>
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
                        Waterproof & Tearproof, direct thermal printable with
                        tamper evident adhesive closure
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
                        Up to full colour printing + variable data printing ;
                        UID printing & pre-encoding
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
                        1'' or 1.18” wide ; 10”/11”/11.5”/ 12” length options
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
                        3,000 pcs ; Roll form & Fan-folded
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
              <Typography
                sx={{
                  fontSize: {
                    xs: "calc(1rem  + 1vw)",
                    md: "calc(0.1rem + 1vw )",
                  },
                }}
              >
                Click on{" "}
                {/* <Typography
                  component={NavLink}
                  to={""}
                  sx={{ color: "var(--green)", textDecoration: "none" }}>
                  Artwork & Product Spec
                </Typography>{" "} */}
                <DatasheetButton
                  path={APIURLS.BASE_PATH.DatasheetsBaseUrl + "wb/"}
                  name={" Artwork & Product Spec"}
                  Datasheet={[
                    { ProductDatashet: DataSheetList[0]["ProductDatashet"] },
                  ]}
                  ProductName={" Artwork & Product Spec"}
                  ProductImage={
                    APIURLS.BASE_PATH.WB +
                    "images/UltimoID-Direct-Thermal-pg.jpg"
                  }
                />
                to download
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ mb: { xs: 4, md: 0 } }}
          >
            <Box sx={{ mt: 4, border: 1 }}>
              <LazyImage
                src={
                  APIURLS.BASE_PATH.WB + "images/UltimoID-Direct-Thermal-pg.jpg"
                }
                alt="Identification Wristbands"
              />
            </Box>
            <Box sx={{ p: 2, bgcolor: "var(--blue)", mt: 4 }}>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: {
                      xs: "calc(1rem + 1vw)",
                      md: "calc(0.5rem + 1vw)",
                    },
                  }}
                >
                  Download
                </Typography>
              </Box>
              <List
                sx={{
                  p: 0,
                  m: 0,
                  "& li": {
                    p: 0,
                    m: 0,
                    color: "var(--green)",
                    fontSize: { xs: "1rem + 1vw)", md: "cacl(1rem + 1vw" },
                  },
                }}
              >
                {DataSheetList.map((item, index) => {
                  return (
                    <Box key={index}>
                      <DatasheetButton
                        path={APIURLS.BASE_PATH.DatasheetsBaseUrl + "wb/"}
                        name={item.ProductDatasheetName}
                        Datasheet={[{ ProductDatashet: item.ProductDatashet }]}
                        ProductName={item.ProductDatasheetName}
                        ProductImage={
                          APIURLS.BASE_PATH.WB +
                          "images/UltimoID-Direct-Thermal-pg.jpg"
                        }
                      />
                    </Box>
                  );
                })}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default UltimoIdDirectthermal;
