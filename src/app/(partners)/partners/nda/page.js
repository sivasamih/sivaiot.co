"use client";
import { useEffect, useState } from "react";
import PDFViewer from "@/components/customcompo/pdfviewer/pdfviewer";
import { Box } from "@mui/system";
import { getLocalStorage } from "@/helper/helper";
import { BASE_PATH } from "@/apis/apiconstant";
import moment from "moment";
import { Typography } from "@mui/material";

const NDAPage = () => {
  const [NDA, setNDA] = useState("");

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
          const isDateValid =
            moment(item.EndDate).isAfter(moment()) &&
            moment(item.EndDate).isAfter(moment(item.StartDate));
          return isActive && isDateValid;
        });
        if (!ActiveNDA) {
          throw new Error("No valid active NDA found");
        }
        const FileURL = BASE_PATH.PartnersDatasheetsUrl + ActiveNDA.FileName;
        setNDA(FileURL);
      } catch (error) {
        console.error("Error NDA data:", error);
        setNDA(null);
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
          height: "80vh",
          minHeight: "83vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "var(--lightGray)",
            userSelect: "none",
          }}
        >
          NDA not assigned
        </Typography>
      </Box>
    );
  }

  // Render PDF Viewer when NDA is available
  return (
    <Box sx={{ width: "100%", height: "80vh", minHeight: "83vh" }}>
      <PDFViewer
        src={NDA}
        key="NDA"
      />
    </Box>
  );
};

export default NDAPage;
