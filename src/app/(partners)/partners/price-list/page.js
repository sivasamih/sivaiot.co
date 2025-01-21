"use client";
import { useEffect, useState } from "react";
import PDFViewer from "@/components/customcompo/pdfviewer/pdfviewer";
import { Box } from "@mui/system";
import { getLocalStorage } from "@/helper/helper";
import { BASE_PATH } from "@/apis/apiconstant";
import moment from "moment";
import { Typography } from "@mui/material";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";

const PriceListPage = () => {
  const [PriceList, setPriceList] = useState("");


  useEffect(() => {
    const fetchPriceList = () => {
      let currentDate = new Date();
      let formattedCurrentDate = moment(currentDate).format("YYYY-MM-DD");
      try {
        const useData = getLocalStorage();
        let NDAList = useData["NDAList"] ? useData["NDAList"] : [];
        if (!useData || !Array.isArray(useData.PriceList)) {
          throw new Error("Invalid data structure from local storage");
        }

        let NDAIsExpired = NDAList.some((item) => {
          let itemDate = moment(item.EndDate).format("YYYY-MM-DD");
          return moment(itemDate).isBefore(formattedCurrentDate) && item.IsActive === true;
        });

        if (NDAIsExpired) {
          setPriceList(null);
        } else {
          const PriceList = useData.PriceList;
          const ActivePriceList = PriceList.find((item) => item.IsActive);

          if (ActivePriceList) {
            const FileURL =
              BASE_PATH.PartnersDatasheetsUrl + ActivePriceList.FileName;
            setPriceList(FileURL);
          }
        }


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
          // height: "70vh",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "var(--lightGray)",
            userSelect: "none",
          }}
        >
          PriceList not assigned
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
