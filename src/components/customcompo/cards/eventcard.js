'use client'
import { motion } from "framer-motion";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import LazyImage from "../customimage/customLazyImage";
import useMobileLandscape from "@/app/hooks/mobileLandscape";
import Link from "next/link";

const EventCard = (props) => {
  const isMobileLandscape = useMobileLandscape();

  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5 }}>
      <CardMedia
        component={'img'}
        image={APIURLS.BASE_PATH.EventsImage + props.Image}
        sx={{
          height: { xs: 140, md: 250 },
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />


      <CardContent>
        <Typography
          component={props.url ? Link : "h5"}
          href={props.URL ? props.url : ""}
          title={props.Title}
          target={props.isExternal ? "_blank" : "_self"}
          sx={{
            fontWeight: "bold",
            color: "#455a64",
            fontSize: { xs: isMobileLandscape ? "calc(0.4rem + 1vw)" : "calc(1rem + 1vw)", md: "calc(0.1rem + 1vw)" }, textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}>
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
