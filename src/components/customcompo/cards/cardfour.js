'use client'
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import LazyImage from "../customimage/customLazyImage";
import { motion } from "framer-motion";
import Link from "next/link";
import useMobileLandscape from "@/app/hooks/mobileLandscape";

const CardFour = (props) => {
  const isMobileLandscape = useMobileLandscape();

  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5 }}
      sx={{ height: '100%' }}
    >
      <Link
        href={props.url}
        target="_blank">
        <CardMedia
          component={'img'}
          image={props.Image}
          sx={{
            height: { xs: 140, md: 230 },
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Link>

      {/* <CardContent
        component={Link}
        href={props.url}
        target="_blank"
        title={props.Title}
        // sx={{
        //   display: "block",
        //   p: 0,
        //   height: { xs: isMobileLandscape ? 150 : 250, lg: 250 },
        //   "&  img": {
        //     height: { xs: isMobileLandscape ? 150 : 250, lg: 250 },
        //   },
        // }}
      >
        <LazyImage
          src={props.Image}
          component="img"
          style={{ width: "100%", objectFit: "cover" }}
          alt="green iguana"
        />
      </CardContent> */}
      <CardContent sx={{ height: '100%' }}>
        <Typography
          sx={{
            fontWeight: "bold",
            textDecoration: "none",
            color: "#455a64",
            "&:hover": { textDecoration: "underline" },
            fontSize: { xs: isMobileLandscape ? "calc(0.4rem + 1vw)" : "calc(1rem + 1vw)", md: "calc(0.1rem + 1vw)" },
          }}
          component={Link}
          href={props.url}
          title={props.Title}
          target={props.isExternal ? "_blank" : "_self"}
        >
          {props.Title}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardFour;
