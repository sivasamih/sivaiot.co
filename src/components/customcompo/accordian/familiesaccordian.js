import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import ProductAccHeaderCard from "../cards/productAccHeaderCard";

const FamiliesAccordian = (props) => {
  return (
    <Accordion
      expanded={props.IsExpand}
      onChange={props.onChange}
      TransitionProps={{
        timeout: 800, // Set the transition duration in milliseconds
      }}
      sx={{
        m: 0,
        p: 0,
        "& .MuiAccordionSummary-content": {
          m: 0,
        },
        "& .MuiAccordionSummary-content.Mui-expanded": {
          m: 0,
        },
        "&:hover": {
          boxShadow: "none",
        },
        boxShadow: "none",

        "&:hover .MuiAccordionSummary-expandIconWrapper": {
          visibility: "visible",
        },
        "& .MuiAccordionSummary-expandIconWrapper": {
          zIndex: 1,
          position: "absolute",
          right: { xs: 0, sm: 20 },
          bottom: "8%",
          color: "white",
          borderRadius: "50%",
          p: { xs: 1, sm: 2 },
          bgcolor: "#3d3d3d7b",
          visibility: "hidden",
          transition: "visibility 0.2s ease-in-out", // Ensure visibility transition is smooth
        },
      }}
    >
      <AccordionSummary
        sx={{
          p: 0,
          m: 0,
          transition: "0.2s ease-in-out",

          "&:hover #header-img-box img": {
            transition: "transform 0.5s ease-in-out",
            transform: "scale(1.05)",
          },
        }}
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        style={{ margin: 0 }}
      >
        <ProductAccHeaderCard
          Title={props.Title}
          Desc={props.Desc}
          Image={props.Image}
          ImageAlt={props.ImageAlt}
        />
      </AccordionSummary>
      <AccordionDetails sx={{ position: "relative", m: 0, overflow: "hidden" }}>
        {props.Content}
      </AccordionDetails>
    </Accordion>
  );
};

export default FamiliesAccordian;
