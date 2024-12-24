import React from "react";
import { Box } from "@mui/material";
import AnimatedPageWrapper from "@/components/animatedwrapper/animatepagewrapper";
import CardFour from "@/components/customcompo/cards/cardfour";
import * as APIURLS from "@/apis/apiconstant";

const NewsSection = () => {
  let newsList = [
    {
      title: "Ferro On-Metal labels receive major upgrades",
      url: "https://wiot-group.com/think/en/news/sivas-on-metal-labels-receive-several-major-updates/",
      image: APIURLS.BASE_PATH.NewsImage + "MoM-3520.webp",
      description: "",
      date: "March 2024",
    },
    {
      title: "Quality in the making since 1986",
      url: "https://wiot-group.com/think/en/news/siva-iot-quality-in-the-making-since-1986/",
      image: APIURLS.BASE_PATH.NewsImage + "Quality-in-the-making.jpg",
      description: "",
      date: "March 2024",
    },

    {
      title: "Elevating Patient Care: Pat-Track UHF Wristband",
      url: "https://www.einpresswire.com/article/678753111/elevating-patient-care-siva-s-rain-rfid-pat-track-uhf-wristband",
      image:
        APIURLS.BASE_PATH.NewsImage + "Pat-Track-UHF-RFID-wristband_2nd.jpg",
      description: "",
      date: "March 2024",
    },
    {
      title: "SIVA IoT Fills the Gap for Track & Trace of Metal Cylinders",
      url: "https://wiot-group.com/think/en/news/siva-iot-fills-the-gap-for-track-trace-of-metal-cylinders/",
      image: APIURLS.BASE_PATH.NewsImage + "Metal-Cylinders.png",
      description: "",
      date: "March 2024",
    },
  ];
  return (
    <>
      <AnimatedPageWrapper>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(4,1fr)",
            },
            gap: 4,
            bgcolor: "transparent",
          }}
        >
          {newsList.map((item, index) => {
            return (
              <div key={index}>
                <CardFour
                  key={index}
                  Image={item.image}
                  Title={item.title}
                  url={item.url}
                />
              </div>
            );
          })}
        </Box>
      </AnimatedPageWrapper>
    </>
  );
};

export default NewsSection;
