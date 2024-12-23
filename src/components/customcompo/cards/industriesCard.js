
import React from "react";
import ProductAccHeaderCard from "./productAccHeaderCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { Box } from "@mui/material";

const IndustriesCard = (props) => {
  return (
    <Box
      component={Link}
      href={props.UrlName}
      sx={{ textDecoration: "none", color: "inherit" }}
    >
      <Box
        component={motion.div}
        initial={{ x: props.id % 2 ? -10 : 10, opacity: 0 }}
        whileinview={{ x: 0, opacity: 1 }}
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
