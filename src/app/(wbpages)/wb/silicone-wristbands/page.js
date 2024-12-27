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
    ProductDatashet: "Silicone_Artwork.pdf",
    IsActive: true,
    ProductDatasheetName: "Silicone Artwork",
  },
];

export const metadata = {
  title: "RFID Silicone Wristbands | Multi-Day Use Wristbands - SIVA IoT",
  description:
    "Siva's re-wearable UltimoID® silicone wristbands feature an adjustable locking mechanism for a secure fit on all wrist sizes. Durable and comfortable, they are ideal for multi-day use, season pass credentials, VIP, and loyalty programs.",
  keywords:
    "Siva's re-wearable UltimoID® silicone wristbands feature an adjustable locking mechanism for a secure fit on all wrist sizes. Durable and comfortable, they are ideal for multi-day use, season pass credentials, VIP, and loyalty programs.",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.WB_ULTIMOID_SILICON,
    title: "RFID Silicone Wristbands | Multi-Day Use Wristbands - SIVA IoT",
    description:
      "Siva's re-wearable UltimoID® silicone wristbands feature an adjustable locking mechanism for a secure fit on all wrist sizes. Durable and comfortable, they are ideal for multi-day use, season pass credentials, VIP, and loyalty programs.",
    images: [
      {
        url: APIURLS.BASE_PATH.WB + "images/silicon-banner.jpg",
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
    title: "RFID Silicone Wristbands | Multi-Day Use Wristbands - SIVA IoT",
    description:
      "Siva's re-wearable UltimoID® silicone wristbands feature an adjustable locking mechanism for a secure fit on all wrist sizes. Durable and comfortable, they are ideal for multi-day use, season pass credentials, VIP, and loyalty programs.",
    images: [APIURLS.BASE_PATH.WB + "images/silicon-banner.jpg"],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.WB_ULTIMOID_SILICON,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const UltimoIdSilicone = () => {
  return (
    <>
      <PageHeader title={"UltimoID® Silicone"} />
      <Container>
        <Box sx={{ mt: 4 }}>
          <LazyImage
            src={APIURLS.BASE_PATH.WB + "images/silicon-banner.jpg"}
            alt="RFID Silicone Wristbands"
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
            These re-wearable wristbands feature an adjustable locking mechanism
            ensuring a secure fit to all wrist sizes. Durable, comfortable and
            designed for multi-day & long-term use, the UltimoID® silicone
            wristbands are ideal for season pass credentials, VIP & Loyalty
            programs.
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
                <ListItem>Ideal for Multi-day & Long-term use</ListItem>
                <ListItem>Re-wearable & adjustable locking mechanism</ListItem>
                <ListItem>One size for all wrist sizes</ListItem>
                <ListItem>A great solution for season pass holders</ListItem>
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
                        100% silicone with transponder embedded within the
                        wristband
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
                        1clr silk screen printing
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
                        1” x 10”
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
                        250 pcs
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
                <DatasheetButton
                  path={APIURLS.BASE_PATH.Others + "wb/"}
                  name={" Artwork & Product Spec"}
                  Datasheet={[
                    { ProductDatashet: DataSheet[0]["ProductDatashet"] },
                  ]}
                  ProductName={" Artwork & Product Spec"}
                  ProductImage={
                    APIURLS.BASE_PATH.WB + "images/UltimoID-Silicon-pg.jpg"
                  }
                />
                {/* <Typography
                  component={NavLink}
                  to={""}
                  sx={{ color: "var(--green)", textDecoration: "none" }}>
                  Artwork & Product Spec
                </Typography>{" "} */}
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
                src={APIURLS.BASE_PATH.WB + "images/UltimoID-Silicon-pg.jpg"}
                alt="UltimoID-Ecodura-pg"
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
                          APIURLS.BASE_PATH.WB +
                          "images/UltimoID-Silicon-pg.jpg"
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
export default UltimoIdSilicone;
