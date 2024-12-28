import { Box, Card, CardContent, Typography } from "@mui/material";
import LazyImage from "../customimage/customLazyImage";

const CardNine = ({
  title,
  desc,
  url,
  image,
  titleTextColor,
  titleAlign,
  IsExternalURL,
  Click,
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
      }}
    >
      <CardContent
        sx={{ p: 0, m: 0, display: "block", height: 180, cursor: "pointer" }}
        // onClick={()=>Click(url,title)}
      >
        <LazyImage
          src={image}
          width="100%"
          style={{ objectFit: "cover", transition: "transform 0.8s" }}
        />
      </CardContent>

      {/* </Box> */}
      <CardContent
        sx={{
          pt: 1,
          "&:hover": {
            bgcolor: "#91abed2f",
            transition: "background-color 0.5s linear",
          },
        }}
        className="details"
      >
        <Box sx={{ mb: 1 }}>
          <Typography
            sx={{
              color: titleTextColor || "var(--headerColor)",
              textAlign: titleAlign || "left",
              // fontWeight: "bold",
              WebkitTextStroke: "0.4px black",
              textDecoration: "none",
              position: "relative",
              cursor: "pointer",
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
            }}
            // onClick={()=>Click(url,title)}
          >
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
            }}
          >
            {desc}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CardNine;
