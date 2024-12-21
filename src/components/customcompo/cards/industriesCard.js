import { Box } from "@mui/system";
import React from "react";
import ProductAccHeaderCard from "../cards/productAccHeaderCard";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const IndustriesCard = (props) => {
  return (
    <Box
      component={NavLink}
      to={props.UrlName}
      sx={{ textDecoration: "none", color: "inherit" }}
    >
      <Box
        component={motion.div}
        initial={{ x: props.id % 2 ? -10 : 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 0.8 }}
      >
        <ProductAccHeaderCard
          Title={props.Title}
          Desc={props.Desc}
          Image={props.Image}
          ImageAlt={props.ImageAlt}
        />
      </Box>
    </Box>
  );
};

export default IndustriesCard;
