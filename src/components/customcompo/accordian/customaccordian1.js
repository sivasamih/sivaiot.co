import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustomAccordion1 = (props) => {
  let ID = props.id ? props.id : "";
  const [expanded, setExpanded] = React.useState("panel1" + ID);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        "& .MuiAccordionSummary-root": {
          margin: 0,
          minHeight: 0,
        },
        "& .MuiAccordionSummary-content": {
          margin: 0,
        },
        "& .MuiAccordionSummary-expandIconWrapper": {
          margin: 0,
        },
        "& .MuiAccordionSummary-root.Mui-expanded": {
          minHeight: 0,
        },
        "& .MuiAccordionSummary-content.Mui-expanded": {
          margin: 0,
        },
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
          margin: 0,
        },
      }}>
      <Accordion
        expanded={expanded === "panel1" + ID}
        onChange={handleChange("panel1" + ID)}
        sx={{ mb: 1, boxShadow: 4 }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            margin: 0,
            minHeight: 0,
          }}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "calc(1rem + 1vw)", md: "calc(0.4rem + 1vw)" },
                color: "var(--headerColor)",
                py: 0.5,
                fontWeight: "bold",
              }}>
              {props.Title}
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails
          sx={{ position: "relative", borderTop: "1px solid #d4d6d9" }}>
          {props.Content}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CustomAccordion1;
