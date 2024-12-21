import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustomAccordian = (props) => {
  let ID = props.id ? props.id : "";
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === "panel1" + ID}
      onChange={handleChange("panel1" + ID)} sx={{mb:1,boxShadow:4}}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        >
        <Box>
          <Typography sx={{ fontSize: {xs:'calc(1rem + 1vw)',md:'calc(0.4rem + 1vw)'}, color: "var(--headerColor)", }}>
            {props.Title}
          </Typography>
          <Typography sx={{ color: "text.secondary",fontSize: {xs:'calc(0.5rem + 1vw)',md:'calc(0.1rem + 1vw)'} }} >
            {props.Description}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{ position: "relative",borderTop:'1px solid #d4d6d9' }}>
        
        {props.Content}
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordian;
