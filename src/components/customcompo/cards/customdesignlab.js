import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import LazyImage from "../customimage/customLazyImage";
import * as APIURLS from "@/apis/apiconstant";

const CustomDesignLab = (props) => {

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 250,
        p: 1,
        zIndex: 9,
      }}
      component={motion.div}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5 }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          textAlign: "center",
          fontSize: "calc(1rem + 1vw)",
          color: "var(--headerColor)",
        }}>
        {props.Title}
      </Typography>

      <CardContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            // "&:hover": { cursor: "pointer" },
          }}
          // component={NavLink} to={"/design-lab"}
          // onClick={() => navigate("/design-lab")}
        >
          <LazyImage
            src={APIURLS.BASE_PATH.OthersImage + "design_lab_160_160px.webp"}
            alt="customize-bg"
            width={"100%"}
          />
        </Box>
      </CardContent>
      <CardContent sx={{ py: 0, mt: -1, zIndex: 1 }}>
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xs: "calc(0.6rem + 1vw)",
              md: "calc(0.1rem + 1vw)",
            },

            lineHeight: 1.2,
            textAlign: "center",
            color: "var(--headerColor)",
          }}>
          {props.Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomDesignLab;
