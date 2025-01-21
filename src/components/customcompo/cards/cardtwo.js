"use client";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Route_Path } from "@/apis/api";
import Link from "next/link";
import useMobileLandscape from "@/app/hooks/mobileLandscape";
import LazyImage from "../customimage/customLazyImage";

const CardTwo = ({ title, desc, url, image, titleTextColor, titleAlign, IsExternalURL }) => {
  const isMobileLandscape = useMobileLandscape();

  return (
    <Card
      sx={{
        borderRadius: 0,
        position: "relative",
        boxShadow: "0 0 1px #797a7d7b",
        "&:hover img": {
          transform: "scale(1.01)",
          transition: "transform 0.8s",
        },
        "&:hover .details": {
          bgcolor: "#91abed2f",
          transition: "background-color 0.5s linear",
        },
      }}>
      <Link href={IsExternalURL ? url : Route_Path.PRODUCT_FAMILY + "/" + url} title="RFID_PRODUCT_FAMILY" style={{ display: "block" }}>
        {/* <CardMedia
          component={"img"}
          image={image}
          height={150}
          alt={title}
          style={{ objectFit: "cover", transition: "transform 0.8s" }}
        /> */}
        <LazyImage src={image} width={"100%"} alt={title} height={150} style={{ justifuContent: "start" }} />
      </Link>

      <CardContent
        sx={{
          pt: 1,
          height: "100%",
          "&:hover": {
            bgcolor: "#91abed2f",
            transition: "background-color 0.5s linear",
          },
        }}
        className="details">
        <Box sx={{ mb: 1 }}>
          <Typography
            component={Link}
            href={IsExternalURL ? url : Route_Path.PRODUCT_FAMILY + "/" + url}
            title={title}
            sx={{
              color: titleTextColor || "var(--headerColor)",
              textAlign: titleAlign || "left",
              WebkitTextStroke: "0.4px black",
              textDecoration: "none",
              position: "relative",

              fontSize: { xs: isMobileLandscape ? "calc(0.5em + 1vw)" : "calc(0.8em + 1vw)", md: "calc(0.5em + 1vw)" },
              "&:after": {
                position: "absolute",
                bottom: 2,
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
            {/* {title} */}
            {title.slice(title.length - 1, title.length) === "TM" ? (
              <>
                {title.slice(0, title.length - 1)}
                <span>{title.slice(title.length - 1, title.length)}</span>
              </>
            ) : (
              <>{title}</>
            )}
          </Typography>
        </Box>
        {desc && (
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.4,
              color: "#455a64",
              fontSize: { xs: isMobileLandscape ? "calc(0.4em + 1vw)" : "calc(0.5em + 1vw)", md: "calc(0.1em + 1vw)" },
            }}>
            {desc}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CardTwo;
