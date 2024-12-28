"use client";
import { useEffect, useState } from "react";
import PDFViewer from "@/components/customcompo/pdfviewer/pdfviewer";
import { Box } from "@mui/system";
import { getLocalStorage } from "@/helper/helper";
import { BASE_PATH } from "@/apis/apiconstant";
import moment from "moment";
import { Typography } from "@mui/material";

const PriceListPage = () => {
  const [PriceList, setPriceList] = useState("");

  useEffect(() => {
    const fetchPriceList = () => {
      try {
        const useData = getLocalStorage();
        if (!useData || !Array.isArray(useData.PriceList)) {
          throw new Error("Invalid data structure from local storage");
        }
        const PriceList = useData.PriceList;
        const ActivePriceList = PriceList.find((item) => item.IsActive);
        if (!ActivePriceList) {
          throw new Error("No valid active PriceList found");
        }
        const FileURL =
          BASE_PATH.PartnersDatasheetsUrl + ActivePriceList.FileName;
        setPriceList(FileURL);
      } catch (error) {
        console.error("Error PriceList data:", error);
        setPriceList(null);
      }
    };

    fetchPriceList();
  }, []);

  // Render message if PriceList is not available
  if (!PriceList) {
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
          PriceList not assigned
        </Typography>
      </Box>
    );
  }

  // Render PDF Viewer when PriceList is available
  return (
    <Box sx={{ width: "100%", height: "80vh", minHeight: "83vh" }}>
      <PDFViewer
        src={PriceList}
        key="PriceList"
      />
    </Box>
  );
};

export default PriceListPage;
