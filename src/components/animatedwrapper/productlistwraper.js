import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductlistWraper = ({ children,...props}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      id={props.id}
      component={motion.div}
      initial={{x:20 }}
      transition={{ duration: 1,damping:0.5 }}
      animate={inView ? { x: 0,opacity:1 } : { x:20  }}
      whileHover={{scale:1.03}} {...props}>
      {children}
    </Box>
  );
};

export default ProductlistWraper;
