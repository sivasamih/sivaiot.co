import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CustomBox = ({ children, className, ...rest }) => {
  const [ref, InView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate={InView ? "visible" : "hidden"}
      // variants={Animation.NavAnimation}
      ref={ref}
      className={className}
      {...rest}
    >
      {children}
    </Box>
  );
};
export default CustomBox;
