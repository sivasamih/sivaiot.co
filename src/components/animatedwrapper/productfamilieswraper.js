import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.5,when: "afterChildren" }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}>
      {children}
    </Box>
  );
};

export default ProductWrapper;
