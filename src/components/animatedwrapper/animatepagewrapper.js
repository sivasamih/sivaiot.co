'use client'
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedPageWrapper = ({ children, AnimateDirrection }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  let Dirr = AnimateDirrection === "left" ? { x: 50 } : { x: -50 };

  return (
    <AnimatePresence>
      <Box
        ref={ref}
        component={motion.div}
        initial={Dirr}
        animate={inView ? { x: 0 } : Dirr}
        transition={{ duration: 1.5 }}>
        {children}
      </Box>
    </AnimatePresence>
  );
};
export default AnimatedPageWrapper;
