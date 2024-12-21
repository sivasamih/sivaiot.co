import { Card, CardContent, Typography } from "@mui/material";
import * as APIURLS from "../../../apis/apiconstant";
import LazyImage from "../customimage/customLazyImage";

const CardSix = (props) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: 0,
      }}>
      <CardContent sx={{ p: 0, minHeight: 100 }}>
        <LazyImage
          src={APIURLS.BASE_PATH.WB + props.image}
          alt={props.name}
          style={{ width: "50%" }}
        />
      </CardContent>

      <CardContent>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "calc(1rem + 1vw)",
              md: "calc(0.7rem + 1vw)",
            },
            color: "var(--green)",
          }}>
          {props.name}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "calc(0.8rem + 1vw)",
              md: "calc(0.1rem + 1vw)",
            },
            mt: { xs: 1, md: 3 },
          }}>
          {props.desc}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardSix