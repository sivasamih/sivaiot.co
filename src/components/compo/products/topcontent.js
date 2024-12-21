'use client'
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import CustomModal from "@/components/customcompo/modal/custommodal";
import {
  getLocalStorage,
  ValidateIPs,
  ValidateUser_Data,
} from "@/helper/helper";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import DataSheetDwnldForm from "@/components/compo/datasheet/datasheetdownload";

const comparisonChartURL =
  "https://sivafiles.sivagroup.co/1/comparison-chart.pdf";

const TopContent = () => {
  const [RMDC, setRMDC] = useState({
    Open: false,
    ProductName: "Comparison Guide",
  });
  const Timer = 15; // Timer duration in minutes
  const currentTime = new Date();

  const SET_SUV_DATA = (userData) => {
    const endTime = new Date(currentTime.getTime() + Timer * 60 * 1000);
    const SUVdata = {
      startTime: currentTime,
      endTime: endTime,
      ...userData,
    };
    localStorage.setItem("SUV", JSON.stringify(SUVdata));
  };

  const DownloadComparison_Guid = async () => {
    let valid = await ValidateUser_Data();
    if (valid) {
      openDatasheet();
    } else {
      setRMDC((prev) => {
        return { ...prev, Open: true };
      });
    }
  };

  const openDatasheet = async () => {
    try {
      if (comparisonChartURL) {
        const validIP = await ValidateIPs();
        if (!validIP) {
          await SetUserImformation();
        }
        // const url = "/datasheet/" + datasheet;
        const win = window.open(comparisonChartURL, "_blank");
        if (win) {
          win.focus();
        }
      }
    } catch (ex) {
      console.log("ex", ex);
    }
  };

  const SetUserImformation = async () => {
    try {
      const SUVdata = JSON.parse(localStorage.getItem("SUV"));
      const IOT_PU = getLocalStorage();
      if (IOT_PU || SUVdata) {
        let reqData = {
          WebsiteData: {
            SourceID: 2,
            TypeID: 2,
            isChecked: false,
            JsonData: JSON.stringify({
              email: IOT_PU ? IOT_PU["EmailID"] : SUVdata["email"],
              name: IOT_PU ? IOT_PU["UserName"] : SUVdata["name"],
              subject: "Download Comparison Guide",
              product: RMDC.ProductName,
            }),
          },
        };
        console.log("reqData", reqData);
        // return false;
        let res = await FETCHAPI.Fetch(
          APIURLS.APIURL.Add_Update_WebsiteData,
          reqData
        );
        if (res.status === 2000) {
          // setOpen(false);
        } else {
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <Box sx={{ bgcolor: "#F2F4F7" }}>
        <Container sx={{ mt: 0, p: 0, px: { xs: 2, md: 0 } }}>
          <Grid
            container
            spacing={5}
            sx={{ pt: 6, pb: 2 }}
            position={"relative"}
          >
            <Grid
              item
              xs={12}
              md={8}
              sx={{ py: 0 }}
            >
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "calc(0.8rem + 1vw)",
                      md: "calc(0.5rem + 1vw)",
                    },
                    color: "var(--lightGray)",
                  }}
                  component={"h2"}
                >
                  SIVA’s range of RFID labels & tags are constructed using high
                  quality raw materials & sophisticated manufacturing processes
                  to offer unparalleled quality & RF performance. Please scroll
                  down to view our RFID label/tag solutions for deployment in
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: "bold",
                      mx: 1,
                      color: "var(--green)",
                      fontSize: {
                        xs: "calc(0.8rem + 1vw)",
                        md: "calc(0.5rem + 1vw)",
                      },
                    }}
                  >
                    Logistics & Supply chain, IT & Industrial Asset management,
                    Automotive
                  </Typography>{" "}
                  and many more.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "1px solid #e1e1e3",
                  bgcolor: "transparent",
                  p: 4,
                  position: "relative",
                  zIndex: 1,

                  "&:after": {
                    content: '""',
                    display: "block",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F4F7",
                    position: "absolute",
                    zIndex: -1,
                    borderTopLeftRadius: "50%",
                    borderBottomRightRadius: "50%",
                    transition: "0.5s ease-in-out",
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "var(--darkGreen)",
                    position: "absolute",
                    zIndex: -1,
                    opacity: 0.8,
                  },
                }}
              >
                <Typography
                  component={"h2"}
                  sx={{
                    color: "var(--green)",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "calc(0.4rem + 1vw)",
                  }}
                >
                  Our RFID Product Comparison Guide
                </Typography>
                <Button
                  sx={{ borderRadius: "30px", my: 2 }}
                  style={{ backgroundColor: "var(--headerColor)" }}
                  variant="contained"
                  // onClick={() => setOpenDatasheetModal(true)}
                  onClick={DownloadComparison_Guid}
                >
                  Download
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Typography
                sx={{
                  mt: 2,
                  textAlign: "center",
                  color: "var(--headerColor)",
                  fontSize: "calc(1rem + 1vw)",
                }}
                variant="h1"
              >
                RFID Tags & Labels Portfolio
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <CustomModal2
        open={openDatasheetModal}
        onClose={() => setOpenDatasheetModal(false)}
        width={"xs"}
        Header={"Product Comparison Guide!"}
        Content={
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 150,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "calc(1rem + 1vw)", md: "calc(1rem + 1vw)" },
                }}
              >
                To be available soon
              </Typography>
            </Box>
          </>
        }
      /> */}

      <CustomModal
        Header={"BEGIN DOWNLOAD"}
        open={RMDC.Open}
        width="md"
        onClose={() => {
          setRMDC((prev) => {
            return { ...prev, Open: false };
          });
        }}
        Content={
          <DataSheetDwnldForm
            ProductName={RMDC.ProductName}
            ProductImage={
              APIURLS.BASE_PATH.OthersImage + "Comparison_Guide.png"
            }
            openDatasheet={openDatasheet}
            SET_SUV_DATA={SET_SUV_DATA}
            onClose={() =>
              setRMDC((prev) => {
                return { ...prev, Open: false };
              })
            }
          />
        }
      />
    </>
  );
};
export default TopContent;
