import {
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import CustomAccordian1 from "../../customcompo/accordian/customaccordian1";
import { useEffect, useState } from "react";
import moment from "moment";
import { getLocalStorage } from "../../../helper/helper";
import { Visibility } from "@mui/icons-material";
import CustomModal2 from "../../customcompo/modal/modal2";
import PDFViewer from "../../customcompo/pdfviewer/pdfviewer";
import * as APIURLS from "../../../apis/apiconstant";

const PriceList = () => {
  const [IsNDA_Expired, setIsNDA_Expired] = useState(false);
  const [PriceList, setPriceList] = useState([]);
  const [RMDC, setRMDC] = useState({
    open: false,
    header: "",
    src: "",
    key: 0, // Unique key to force re-render
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    let IOT_PU = getLocalStorage();

    getNDAWillExpiring(IOT_PU);
  }, []);

  let getNDAWillExpiring = (IOT_PU) => {
    let NDAList = IOT_PU["NDAList"] ? IOT_PU["NDAList"] : [];
    let PList = IOT_PU["PriceList"] ? IOT_PU["PriceList"] : [];
    let currentDate = new Date();
    let formattedCurrentDate = moment(currentDate).format("YYYY-MM-DD");
    try {
      let NDAIsExpired = NDAList.some((item) => {
        let itemDate = moment(item.EndDate).format("YYYY-MM-DD");
        return (
          moment(itemDate).isBefore(formattedCurrentDate) &&
          item.IsActive === true
        );
      });
      let iSNDAsAssign = NDAList.some((item) => item.IsActive === true);

      if (NDAIsExpired || !iSNDAsAssign) {
        setIsNDA_Expired(true);
        setPriceList([]);
      } else {
        setIsNDA_Expired(false);
        setPriceList(PList);
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      <Box sx={{ py: 4 }}>
        <Container>
          {/* {!IsNDA_Expired ? ( */}
          <Box>
            <CustomAccordian1
              ID={"Pricelist"}
              Title={"Price List"}
              Content={
                <>
                  {!IsNDA_Expired && PriceList.length > 0 ? (
                    <Box>
                      <TableContainer sx={{ maxHeight: 350 }}>
                        <Table stickyHeader>
                          <TableHead>
                            <TableRow
                              sx={{
                                "& th": {
                                  py: 1,
                                  fontWeight: "bold",
                                  color: "var(--blue)",
                                },
                              }}>
                              <TableCell sx={{ width: { xs: 10, md: 10 } }}>
                                #
                              </TableCell>
                              <TableCell>Name</TableCell>
                              <TableCell> Description </TableCell>
                              <TableCell> Action </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody
                            sx={{
                              "& td": { py: 0 },
                              maxHeight: 250,
                              overflow: "auto",
                            }}>
                            {PriceList &&
                              PriceList.map((item, index) => (
                                <TableRow key={index}>
                                  <TableCell>{index + 1}</TableCell>
                                  <TableCell>
                                    <Typography>{item["Name"]}</Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography>
                                      {item["Description"]}
                                    </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <IconButton
                                      onClick={() => {
                                        setError(false);
                                        setRMDC((prev) => ({
                                          ...prev,
                                          open: true,
                                          src:
                                            APIURLS.BASE_PATH
                                              .PartnersDatasheetsUrl +
                                            item.FileName,
                                          key: index + 1,
                                          header: item["Name"],
                                        }));
                                      }}>
                                      <Visibility fontSize="small" />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        height: { xs: 300, md: 300 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}>
                      <Typography
                        variant="h4"
                        component="h2"
                        align="center"
                        sx={{
                          color: "var(--lightGray)",
                          fontSize: {
                            xs: "calc(1rem + 1vw)",
                            md: "calc(1rem + 1vw)",
                          },
                        }}>
                        Seems like you have not been assigned with any Price
                        list!
                      </Typography>
                    </Box>
                  )}
                </>
              }
            />
          </Box>
          {/* ) : (
            <>
              <Box sx={{ p: 2, bgcolor: "#F2F4F7", borderRadius: 5 }}>
                <Box
                  sx={{
                    height: { xs: 200, md: 400 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    bgcolor: "white",
                    borderRadius: 4,
                  }}>
                  <Typography sx={{ fontSize: "calc(1rem + 1vw)" }}>
                    NDA have expired. Please renew it to continue access.
                  </Typography>
                </Box>
              </Box>
            </>
          )} */}
        </Container>
      </Box>

      <CustomModal2
        open={RMDC.open}
        onClose={() =>
          setRMDC((prev) => ({
            ...prev,
            open: false,
          }))
        }
        Header={RMDC.header}
        Content={
          <>
            <PDFViewer key={RMDC.key} src={RMDC.src} />
          </>
        }
      />
    </>
  );
};
export default PriceList;
