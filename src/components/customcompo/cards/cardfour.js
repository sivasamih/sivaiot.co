import { Card, CardContent, Typography } from "@mui/material";
import LazyImage from "../customimage/customLazyImage";
import { motion } from "framer-motion";
import Link from "next/link";

const CardFour = (props) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5 }}
    >
      <CardContent
        component={Link}
        href={props.url}
        target="_blank"
        title={props.Title}
        sx={{
          display: "block",
          p: 0,
          height: { xs: 250, lg: 250 },
          "&  img": {
            height: { xs: 250, lg: 250 },
          },
        }}
      >
        <LazyImage
          src={props.Image}
          component="img"
          style={{ width: "100%", objectFit: "cover" }}
          alt="green iguana"
        />
      </CardContent>
      <CardContent>
        <Typography
          sx={{
            fontWeight: "bold",
            textDecoration: "none",
            color: "#455a64",
            "&:hover": { textDecoration: "underline" },
            fontSize: { xs: "calc(1rem + 1vw)", md: "calc(0.1rem + 1vw)" },
          }}
          component={Link}
          href={props.url}
          target="_blank"
          title={props.Title}
        >
          {props.Title}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardFour;
