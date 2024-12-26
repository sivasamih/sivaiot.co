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
    ProductDatashet: "Fabric_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: "EcoDura™ Artwork",
  },
];

export const metadata = {
  title: "Fabric Wristband Supplier | Access Control Wristbands - SIVA IoT",
  description:
    "Siva's fabric wristbands are perfect for music festivals and live events. Made from comfortable, durable materials, they feature high-security properties and high-quality, full-color artwork printing & providing seamless access control, cashless payments, and VIP guest management.",
  keywords:
    "Siva's fabric wristbands are perfect for music festivals and live events. Made from comfortable, durable materials, they feature high-security properties and high-quality, full-color artwork printing & providing seamless access control, cashless payments, and VIP guest management.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.WB_ULTIMOID_FABRIC,
    title: "Fabric Wristband Supplier | Access Control Wristbands - SIVA IoT",
    description:
      "Siva's fabric wristbands are perfect for music festivals and live events. Made from comfortable, durable materials, they feature high-security properties and high-quality, full-color artwork printing & providing seamless access control, cashless payments, and VIP guest management.",
    images: [
      {
        url: APIURLS.BASE_PATH.WB + "images/ultimoidfabric-banner.jpg",
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
    title: "Fabric Wristband Supplier | Access Control Wristbands - SIVA IoT",
    description:
      "Siva's fabric wristbands are perfect for music festivals and live events. Made from comfortable, durable materials, they feature high-security properties and high-quality, full-color artwork printing & providing seamless access control, cashless payments, and VIP guest management.",
    images: [APIURLS.BASE_PATH.WB + "images/ultimoidfabric-banner.jpg"],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.WB_ULTIMOID_FABRIC,
  },
  // Additional Metadata
  charset: "UTF-8",
};
const UltimoIdFabric = () => {
  return (
    <>
      <PageHeader title={"UltimoID® Fabric"} />
      <Container>
        <Box sx={{ mt: 4 }}>
          <LazyImage
            src={APIURLS.BASE_PATH.WB + "images/ultimoidfabric-banner.jpg"}
            alt="Fabric Wristbands"
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
            Our Fabric wristbands are an ideal solution for music festivals &
            live events. Made using comfortable yet strong materials, our fabric
            bands come with high-security properties. The high quality of the
            wristband paired with high-impact full-color artwork printing make
            our fabric bands a great memento for guests to take back home.
            Non-transferrable, our fabric bands are suitable for multi-day use
            providing seamless access control, cashless payments & VIP guest
            management.
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
                <ListItem>Cashless payments</ListItem>
                <ListItem>Contactless access control</ListItem>
                <ListItem>High-impact full color printing</ListItem>
                <ListItem>
                  VIP management; faster transactions, shorter lines
                </ListItem>
                <ListItem>Keyless lockers</ListItem>
                <ListItem>Multi-day use</ListItem>
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
                        Wristband: Polyester | Saddle: Soft Vinyl
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
                        Wristband: Up to full color printing Saddle: Upto 2
                        color silk screen imprint +laser engraving logos +
                        serialization
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
                        Wristband: 0.6" x 13.8" | Saddle: 1" x 1.5"
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
                        500 pcs
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
                  path={APIURLS.BASE_PATH.Others + "wb/"}
                  name={" Artwork & Product Spec"}
                  Datasheet={[
                    { ProductDatashet: DataSheet[0]["ProductDatashet"] },
                  ]}
                  ProductName={" Artwork & Product Spec"}
                  ProductImage={
                    APIURLS.BASE_PATH.WB + "images/UltimoID-Fabric-pg.jpg"
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
            <Box sx={{ mt: 4, border: "1px solid #cfd8dc " }}>
              <LazyImage
                src={APIURLS.BASE_PATH.WB + "images/UltimoID-Fabric-pg.jpg"}
                alt="Fabric Wristband Supplier"
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
                {DataSheet.map((item, index) => {
                  return (
                    <Box key={index}>
                      <DatasheetButton
                        path={APIURLS.BASE_PATH.Others + "wb/"}
                        name={item.ProductDatasheetName}
                        Datasheet={[{ ProductDatashet: item.ProductDatashet }]}
                        ProductName={item.ProductDatasheetName}
                        ProductImage={
                          APIURLS.BASE_PATH.WB + "images/UltimoID-Fabric-pg.jpg"
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
export default UltimoIdFabric;
