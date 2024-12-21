import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import LazyImage from "../customimage/customLazyImage";
import { Route_Path } from "../../../apis/api";

const CardTwo = ({
  title,
  desc,
  url,
  image,
  titleTextColor,
  titleAlign,
  IsExternalURL,
}) => {
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
  
      {/* <CardContent
        component={NavLink}
        // to={IsExternalURL ? url :"/"+ Route_Path.PRODUCT_FAMILY + "/" + url}
        to={IsExternalURL ? "/"+ url : "/" + Route_Path.PRODUCT_FAMILY_DETAILS + "?name=" + url}
        // target={IsExternalURL ? "_blank" : "_self"}
        sx={{ p: 0, m: 0, display: "block", height: 180 }}>
        <LazyImage
          src={image}
          width="100%"
          style={{ objectFit: "cover", transition: "transform 0.8s" }}
        />
      </CardContent> */}

      <NavLink
        to={IsExternalURL? "/" + url: "/" + Route_Path.PRODUCT_FAMILY_DETAILS + "?name=" + url}>
        <CardMedia
          component={'img'}
          image={image}
          height={150}
          alt={title}
          style={{ objectFit: "cover", transition: "transform 0.8s", }}
        />
      </NavLink>


      <CardContent
        sx={{
          pt: 1,
          "&:hover": {
            bgcolor: "#91abed2f",
            transition: "background-color 0.5s linear",
          },
        }}
        className="details">
        <Box sx={{ mb: 1 }}>
          <Typography
            component={NavLink}
            // to={IsExternalURL ?  url :"/"+ Route_Path.PRODUCT_FAMILY + "/" + url}
            to={IsExternalURL ? "/"+  url : "/" + Route_Path.PRODUCT_FAMILY_DETAILS + "?name=" + url}
            // target={IsExternalURL ? "_blank" : "_self"}
            sx={{
              color: titleTextColor || "var(--headerColor)",
              textAlign: titleAlign || "left",
              // fontWeight: "bold",
              WebkitTextStroke: "0.4px black",
              textDecoration: "none",
              position: "relative",

              fontSize: { xs: "calc(0.8em + 1vw)", md: "calc(0.5em + 1vw)" },
              // "&:hover": { textDecoration: "underline" },
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
              fontSize: { xs: "calc(0.5em + 1vw)", md: "calc(0.1em + 1vw)" },
            }}>
            {desc}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CardTwo;
