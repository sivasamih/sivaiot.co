import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import CustomAccordian1 from "../../customcompo/accordian/customaccordian1";
import moment from "moment/moment";
import { ToggleOff, ToggleOn, Visibility } from "@mui/icons-material";
import Customgridtextfield from "../../customcompo/customtextfield/customgridtextfiel";
import CustomModal2 from "../../customcompo/modal/modal2";
import * as APIURLS from "../../../apis/apiconstant";
import { useLoginData } from "../../../contextapi/loginuserprovider";
import PDFViewer from "../../customcompo/pdfviewer/pdfviewer";

const Profile = () => {
  const data = useLoginData();
  const [NDAList, setNDAList] = useState([]);
  const [RMDC, setRMDC] = useState({
    open: false,
    header: "",
    src: "",
    key: 0, // Unique key to force re-render
  });

  useEffect(() => {
    if (!data) return;
    try {
      const { NDAList = [] } = data;
      const ActiveNDA = NDAList.filter(({ IsActive }) => IsActive);
      const InActiveNDA = NDAList.filter(({ IsActive }) => !IsActive);

      setNDAList([...ActiveNDA, ...InActiveNDA]);
    } catch (ex) {
      console.error("Error processing NDA list:", ex);
    }
  }, [data]);
  console.log("NDAList", NDAList);
  return (
    <>
      <Box sx={{ mt: 4, mb: 5 }}>
        <Container>
          <Box sx={{ my: 4 }}>
            <CustomAccordian1
              ID={"General"}
              Title={"Partner General Details"}
              Content={
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Customgridtextfield
                        label={"Name"}
                        value={data && data["UserName"]}
                        disabled={true}
                        id={"name"}
                        required={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Customgridtextfield
                        label={"Email"}
                        value={data && data["EmailID"]}
                        disabled={true}
                        id={"email"}
                        required={true}
                      />
                    </Grid>
                  </Grid>
                </>
              }
            />
          </Box>
          <CustomAccordian1
            ID={"NDA"}
            Title={"NDA"}
            Content={
              <>
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
                        <TableCell> From Date</TableCell>
                        <TableCell> End Date </TableCell>
                        <TableCell> Comment </TableCell>
                        <TableCell align="center"> Status </TableCell>
                        <TableCell> View </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody
                      sx={{
                        "& td": { py: 0 },
                        maxHeight: 250,
                        overflow: "auto",
                      }}>
                      {NDAList &&
                        NDAList.map((item, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              bgcolor: item.IsActive ? "#e8f5e9 " : "#ffebee ",
                            }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                              {moment(item.StartDate).format("DD/MM/YYYY")}
                            </TableCell>
                            <TableCell>
                              {moment(item.EndDate).format("DD/MM/YYYY")}
                            </TableCell>
                            <TableCell>
                              <Typography>{item.Comments} </Typography>
                            </TableCell>
                            <TableCell align="center">
                              {item.IsActive ? (
                                <Tooltip
                                  title={"Active"}
                                  placement="right"
                                  arrow>
                                  <ToggleOn sx={{ color: "var(--blue)" }} />
                                </Tooltip>
                              ) : (
                                <Tooltip
                                  title={" Expired"}
                                  placement="right"
                                  arrow>
                                  <ToggleOff sx={{ color: "red" }} />
                                </Tooltip>
                              )}
                            </TableCell>
                            <TableCell>
                              <IconButton
                                onClick={() => {
                                  setRMDC((prev) => ({
                                    ...prev,
                                    open: true,
                                    src:
                                      APIURLS.BASE_PATH.PartnersDatasheetsUrl +
                                      item.FileName,
                                    key: index + 1,
                                    header:
                                      "NDA" +
                                      " " +
                                      "(" +
                                      moment(item.StartDate).format(
                                        "DD/MM/YYYY"
                                      ) +
                                      " " +
                                      "-" +
                                      " " +
                                      moment(item.EndDate).format(
                                        "DD/MM/YYYY"
                                      ) +
                                      ")",
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
              </>
            }
          />
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
        Content={<PDFViewer key={RMDC.key} src={RMDC.src} />}
      />
    </>
  );
};

export default Profile;
