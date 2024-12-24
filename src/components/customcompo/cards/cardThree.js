import { Card, CardContent,  Typography } from "@mui/material";
import { motion } from "framer-motion";
import * as APIURLS from "../../../apis/apiconstant";
import LazyImage from "../customimage/customLazyImage";
import { Route_Path } from "../../../apis/api";
import Link from "next/link";

const CardThree = (props) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5 }}>
      <CardContent
        component={Link}
        // to={
        //   props.IsExternalURL
        //     ? props.path
        //     : Route_Path.PRODUCT_FAMILY + "/" + props.path
        // }
        href={
          props.IsExternalURL
            ? props.path
            : Route_Path.PRODUCT_FAMILY + "/" + props.path
        }
        sx={{
          p: 0,
          m: 0,
          display: "block",
          height: { xs: 150, lg: "calc(1rem + 10vw)" },
          "&  img": {
            height: { xs: 150, lg: "calc(1rem + 10vw)" },
          },
        }}>
        {/* <CardMedia
          src={APIURLS.BASE_PATH.ProductFamily + props.Images}
          component="img"
          sx={{ height: 150, width: "100%", objectFit: "cover" }}
          alt={props.alt}
        /> */}
        <LazyImage
          src={APIURLS.BASE_PATH.ProductFamily + props.Images}
          alt={props.alt}
          style={{ objectFit: "cover" }}
        />
      </CardContent>

      <CardContent sx={{ py: 0 }}>
        <Typography component={"h5"} sx={{ py: 1 }}>
          <Typography
            component={Link}
            // to={Route_Path.PRODUCT_FAMILY + "/" + props.path}
            href={
              props.IsExternalURL
                ?  props.path
                : Route_Path.PRODUCT_FAMILY_DETAILS + "/" + props.path
            }
            sx={{
              textDecoration: "none",
              color: "black",
              fontSize: {
                xs: "calc(0.8em + 1vw)",
                md: "calc(0.5em + 1vw)",
              },

              position: "relative",
              WebkitTextStroke: "0.4px black",
              "&:after": {
                position: "absolute",
                bottom: 5,
                left: 0,
                content: "''",
                width: 0,
                height: "1px",
                bgcolor: "#000",
                transition: "0.5s ease-in-out",
              },
              "&:hover:after": {
                width: "100%",
              },

              "& span": {
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.4rem + 1vw)",
                },
              },
            }}>
            {props.Name.slice(props.Name.length - 1, props.Name.length) ===
            "TM" ? (
              <>
                {props.Name.slice(0, props.Name.length - 1)}
                <span>
                  {props.Name.slice(props.Name.length - 1, props.Name.length)}
                </span>
              </>
            ) : (
              <>{props.Name}</>
            )}
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xs: "calc(0.6rem + 1vw)",
              md: "calc(0.1rem + 1vw)",
            },
            color: "#455a64",
            lineHeight: 1.2,
          }}>
          {props.Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardThree;
