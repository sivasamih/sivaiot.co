import { Card, CardContent, List, ListItem, Typography } from "@mui/material";
import * as APIURLS from "../../../apis/apiconstant";
import { NavLink } from "react-router-dom";
import LazyImage from "../customimage/customLazyImage";
import { Box } from "@mui/system";
const CardSeven = (props) => {
  return (
    <Card
      sx={{
        boxShadow: "0 0 10px -2px var(--lightGray)",
        overflow: "hidden",
        borderRadius: 0,
        position: "relative",
        "&:hover .details": {
          bgcolor: "#EBF0FC",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "2%",
          bgcolor: "var(--green)",
        },
      }}>
      <CardContent
        sx={{ p: 0, display: "block" }}
        component={NavLink}
        to={props.url}>
        <LazyImage src={APIURLS.BASE_PATH.WB + props.image} alt={props.alt} />
      </CardContent>
      <CardContent
        sx={{ px: 4, transition: "0.5s ease-in-out" }}
        className="details">
        <Box>
          <Typography
            variant="h6"
            sx={{
              p: 0,
              m: 0,
              color: "var(--green)",
              textDecoration: "none",
              fontSize: {
                xs: "calc(1rem + 1vw)",
                md: "calc(0.5rem + 1vw)",
              },
              position: "relative",
              "&:hover:after": {
                width: "100%",
              },
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
            }}
            component={NavLink}
            to={props.url}>
            {props.name}
          </Typography>{" "}
        </Box>
        <List>
          {props.detailsList.map((L, index) => {
            return (
              <ListItem sx={{ p: 0, m: 0,alignItems:"flex-start" }}>
                <Typography component={"span"}>✓</Typography>{" "}
                <Typography sx={{ pl: 1 }}>{L.name}</Typography>
              </ListItem>
            );
          })}
        </List>
        <Box sx={{ pt: 4, pb: 8 }}>
          <Typography
            component={NavLink}
            to={props.url}
            sx={{
              color: "var(--green)",
              fontSize: {
                xs: "calc(0.8rem + 1vw)",
                md: "calc(0.1rem + 1vw)",
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
                bgcolor: "var(--green)",
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
export default CardSeven;
