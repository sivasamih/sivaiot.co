import * as React from "react";

import { Card, Fab } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import Icon from "../../../constants/icon";

export default function CustomFloatingBox(props) {
  const [isOpen, setIsOpen] = React.useState(true);
  const variants = {
    open: () => ({
      clipPath: `circle(550px at 100% 100%)`,
      display: "block",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 30,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 100% 100% )",
      display: "none",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 30,
        restDelta: 2,
      },
    },
  };
  return (
    <>
      {props.Content && (
        <Box
          sx={{
            position: "fixed",
            bottom: "5%",
            right: "1%",
            zIndex: 999,
          }}
        >
          {/* {isOpen && ( */}
          <Card
            component={motion.div}
            variants={variants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            sx={{
              m: 0,
              mb: -7,
              borderBottomRightRadius: "30px",
              boxShadow: "0 0 5px 1px #9d9d9ed5",
              p: 0,
              width: "100%",
            }}
          >
            <Box sx={{ p: 1 }}>{props.Content}</Box>
          </Card>
          {/* )} */}
          {props.Content && (
            <Fab
              color="primary"
              aria-label="notify"
              sx={{ float: "right" }}
              onClick={(e) => setIsOpen(!isOpen)}
            >
              {isOpen ? Icon.Close : Icon.CardGiftcard}
            </Fab>
          )}
        </Box>
      )}
    </>
  );
}
