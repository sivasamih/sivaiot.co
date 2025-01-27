"use client";

import { Box, ButtonBase, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const FAQAccordion = ({ Title, Content }) => {
  const [isActive, setisActive] = useState(false);

  if (!Title && !Content) {
    return null;
  }
  return (
    <Box
      sx={{
        margin: "20px auto",
        borderRadius: 2,
        overflow: "hidden",
        background: "var(--white)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease-in-out",
      }}>
      <ButtonBase
        component={"div"}
        onClick={() => setisActive((prev)=>!prev)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          pb: isActive ? 8 : "20px",
          background: isActive ? "#eceff170" : "var(--white)",
          cursor: "pointer",
          borderBottom: isActive ? "2px solid var(--green)" : "1px solid #e5e7eb",
          transition: "0.3s, border-bottom 0.3s",
        }}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: isActive ? "var(--headerColor)" : "var(--lightGray)",
            letterSpacing: 1,
          }}>
          {Title}
        </Typography>
        <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ExpandMoreIcon sx={{ color: isActive ? "var(--headerColor)" : "var(--lightGray)", fontSize: "28px" }} />
        </motion.div>
      </ButtonBase>

      {/* Content Section */}
      <Box
        component={motion.div}
        initial={{ height: 0, opacity: 0, y: 50 }}
        animate={isActive ? { height: "auto", opacity: 1, y: -50 } : { height: 0, opacity: 0, y: 50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        sx={{
          overflow: "hidden",
          px: { xs: 3, sm: 4, md: 8 },
        }}>
        <Box
          sx={{
            padding: { xs: "20px 20px", md: "30px 40px" },
            background: "var(--white)",
            borderTop: "1px solid #e5e7eb",
            fontSize: "18px",
            color: "#475569",
            lineHeight: "1.8",
            border: "2px solid rgba(0,0,0,0.1)",
          }}>
          {Content}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQAccordion;
