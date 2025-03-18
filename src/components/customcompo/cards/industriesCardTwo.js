"use client";
import { Box, Card, CardContent, CardMedia, Chip, Paper, Typography } from "@mui/material";
import { Route_Path } from "@/apis/api";
import Link from "next/link";
import useMobileLandscape from "@/app/hooks/mobileLandscape";
import LazyImage from "../customimage/customLazyImage";

const IndustriesCardTwo = ({ title, desc, url, image, titleTextColor, titleAlign, IsExternalURL, ProductFamilyName, ProductFamilyUrl }) => {
  const isMobileLandscape = useMobileLandscape();

  return (
    <Card
      sx={{
        borderRadius: 1,
        position: "relative",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        height: "100%",
        "&:hover img": {
          transform: "scale(1.01)",
          transition: "transform 0.8s",
        },
        "&:hover .details": {
          bgcolor: "#91abed2f",
          transition: "background-color 0.5s linear",
        },
      }}
    >
      <Link href={url} title={title} target={IsExternalURL ? "_blank" : "_self"} style={{ display: "block" }}>
        <LazyImage src={image} width={"100%"} alt={title} height={200} style={{ justifuContent: "start" }} />
      </Link>

      <CardContent
        sx={{
          pt: 2,
          height: "100%",
          "&:hover": {
            bgcolor: "#91abed2f",
            transition: "background-color 0.5s linear",
          },
        }}
        className="details">

        {ProductFamilyName && (
          <Chip
            sx={{
              bgcolor: "var(--darkGreen)",
              color: "white",
              fontSize: {
                xs: "calc(0.5rem + 1vw)",
                md: "calc(0.5rem + 0.5vw)",
              },
              mb: 1,
            }}
            size="small"
            label={ProductFamilyName}
            component={ProductFamilyUrl ? Link : "div"}
            href={ProductFamilyUrl ? Route_Path.PRODUCT_FAMILY + "/" + ProductFamilyUrl : null}
          />
        )}
        <Box>
          <Typography
            component={Link}
            href={url}
            target={IsExternalURL ? "_blank" : "_self"}
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
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
              fontSize: { xs: isMobileLandscape ? "calc(0.4em + 1vw)" : "calc(0.5em + 1vw)", md: "calc(0.1em + 1vw)" },
              mt: 1,
            }}>
            {desc}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};


export default IndustriesCardTwo;
