"use client";
import { useEffect, useState } from "react";
import PDFViewer from "@/components/customcompo/pdfviewer/pdfviewer";
import { Box } from "@mui/system";
import { getLocalStorage } from "@/helper/helper";
import { BASE_PATH } from "@/apis/apiconstant";
import moment from "moment";
import { Typography } from "@mui/material";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";

const NDAPage = () => {
  const [NDA, setNDA] = useState("");
  const [NDAExpDate, setNDAExpDate] = useState("");

  useEffect(() => {
    const fetchNDA = () => {
      try {
        const useData = getLocalStorage();
        if (!useData || !Array.isArray(useData.NDAList)) {
          throw new Error("Invalid data structure from local storage");
        }

        const NDA = useData.NDAList;
        const ActiveNDA = NDA.find((item) => {
          const isActive = item.IsActive;
          const isDateValid = moment(item.EndDate).isAfter(moment()) && moment(item.EndDate).isAfter(moment(item.StartDate));
          return isActive && isDateValid;
        });

        if (!!ActiveNDA) {
          const FileURL = BASE_PATH.PartnersDatasheetsUrl + ActiveNDA.FileName;
          setNDA(FileURL);
          setNDAExpDate(ActiveNDA.EndDate);
        }
      } catch (error) {
        console.error("Error NDA data:", error);
        setNDA(null);
        setNDAExpDate("");
      }
    };

    fetchNDA();
  }, []);

  // Render message if NDA is not available
  if (!NDA) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {/* <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "var(--lightGray)",
            userSelect: "none",
          }}
        >
          NDA not assigned
        </Typography> */}
        <LazyImage
          src={BASE_PATH.Others + "no-data.png"}
          alt="No Data"
          style={{
            width: "50%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    );
  }

  // Render PDF Viewer when NDA is available
  return (
    <Box sx={{ width: "100%", height: "80vh", minHeight: "83vh", position: "relative" }}>
      {NDAExpDate && (
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", bgcolor: "white", zIndex: 100, p: { xs: 1, md: 2 } }}>
          <Typography align="center" sx={{ fontSize: { xs: "10px", md: "15px" },color:"#F80B00" }}>
           NDA Valid Until <b>{moment(NDAExpDate).format("DD-MM-YYYY")}</b>
          </Typography>
        </Box>
      )}
      <PDFViewer src={NDA} key="NDA" />
    </Box>
  );
};

export default NDAPage;
