import { Card, CardContent, Typography } from "@mui/material";
import * as APIURLS from "../../../apis/apiconstant";
import LazyImage from "../customimage/customLazyImage";
import { Box } from "@mui/system";
import Link from "next/link";

const CardFive = (props) => {
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
      }}
    >
      <CardContent
        component={Link}
        href={props.url}
        sx={{ display: "block", p: 0, m: 0 }}
      >
        <LazyImage
          src={APIURLS.BASE_PATH.WB + props.image}
          alt={props.alt}
        />
      </CardContent>
      <CardContent
        sx={{ textAlign: "center", transition: "0.5s ease-in-out" }}
        className="details"
      >
        <Typography
          component={Link}
          href={props.url}
          title={props.name}
          target={props.IsExternal ? "_blank" : "_self"}
          sx={{
            textAlign: "center",
            color: "var(--green)",
            fontSize: {
              xs: "calc(1rem + 1vw)",
              md: "calc(1rem + 1vw)",
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
          }}
        >
          {props.name}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography
            component={Link}
            href={props.url}
            title="Know more..."
            target={props.IsExternal ? "_blank" : "_self"}
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
            }}
          >
            Know more
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardFive;
