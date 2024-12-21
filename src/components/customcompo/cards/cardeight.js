import { Card, CardContent, Typography } from "@mui/material";
import * as APIURLS from "../../../apis/apiconstant";
import LazyImage from "../customimage/customLazyImage";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";

const CardEight = (props) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: "0 0 2px var(--lightGray)",
        "&:hover .details": {
          bgcolor: "#EBF0FC",
        },
        position: "relative",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "3%",
          bgcolor: "var(--green)",
        },
      }}>
      <CardContent
        component={NavLink}
        to={props.url}
        sx={{ display: "block", p: 0, m: 0, minHeight: 230 }}>
        <LazyImage src={APIURLS.BASE_PATH.WB + props.image} alt={props.name} />
      </CardContent>
      <CardContent
        sx={{ textAlign: "center", transition: "0.5s ease-in-out" }}
        className="details">
        <Typography
          component={NavLink}
          to={props.url}
          // target={props.IsExternalURL ? "_blank" : "_self"}
          sx={{
            textAlign: "center",
            color: "var(--green)",
            fontSize: {
              xs: "calc(1rem + 1vw)",
              md: "calc(0.8rem + 1vw)",
            },
            textDecoration: "none",
            "&:hover:after": {
              width: "100%",
            },
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: 5,
              left: 0,
              bgcolor: "var(--green)",
              height: "1px",
              transition: "0.5s ease-in-out",
              width: 0,
            },
          }}>
          {props.name}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography
            component={NavLink}
            to={props.url}
            // target={props.IsExternalURL ? "_blank" : "_self"}
            sx={{
              textAlign: "center",
              color: "var(--blue)",
              fontSize: {
                xs: "calc(0.8rem + 1vw)",
                md: "calc(0.2rem + 1vw)",
              },
              textDecoration: "none",
              "&:hover:after": {
                width: "100%",
              },
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: 2,
                left: 0,
                bgcolor: "var(--blue)",
                height: "1px",
                transition: "0.5s ease-in-out",
                width: 0,
              },
            }}>
            Know more
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardEight;
