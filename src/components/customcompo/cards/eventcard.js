import { motion } from "framer-motion";
import { Card, CardContent, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import * as APIURLS from "../../../apis/apiconstant";
import LazyImage from "../customimage/customLazyImage";

const EventCard = (props) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5 }}>
      <CardContent
        // component={NavLink}
        // to={props.url}
        // target="_blank"
        sx={{
          display: "block",
          p: 0,
          height: { xs: 250, lg: 250 },
          "&  img": {
            height: { xs: 250, lg: 250 },
          },
        }}>
        <LazyImage
          src={APIURLS.BASE_PATH.EventsImage + props.Image}
          component="img"
          style={{ width: "100%", objectFit: "cover" }}
          alt="green iguana"
        />
      </CardContent>

      <CardContent>
        <Typography
          component={"h5"}
          sx={{
            fontWeight: "bold",
            color: "#455a64",
            fontSize: { xs: "calc(1rem + 1vw)", md: "calc(0.1rem + 1vw)" },
          }}>
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
