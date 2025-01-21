'use client'
import { motion } from "framer-motion";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import LazyImage from "../customimage/customLazyImage";
import useMobileLandscape from "@/app/hooks/mobileLandscape";

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
          component={"h5"}
          sx={{
            fontWeight: "bold",
            color: "#455a64",
            fontSize: { xs: isMobileLandscape ? "calc(0.4rem + 1vw)" : "calc(1rem + 1vw)", md: "calc(0.1rem + 1vw)" },
          }}>
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
