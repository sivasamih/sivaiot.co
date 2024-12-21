import { Info } from "@mui/icons-material";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import CustomButton from "../button/CustomButton";
import buttonName from "../../../constants/buttonName";
import Icons from "../../../constants/icon";
import { useCallback, useEffect, useRef, useState } from "react";

const MoreInformation = (props) => {
  const [height, setHeight] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      let height = ref.current.offsetHeight;
      console.log("height",height)
      setHeight(height);
    }
  }, [ref]);

  return (
    <Card
      sx={{
        borderRadius: 0,
        position: "relative",
        boxShadow: "none",
        maxWidth: "100%",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 5,
          py: 5,
        }}
      >
        <Box
          id={"inform-title"}
          ref={ref}
          sx={{
            height: "100%",
            border: "2px solid var(--white)",
            borderRadius: "50px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            pl: { xs: 10, md: `calc(${height}px + 20px)` },
            bgcolor: props.backgroundColor
              ? props.backgroundColor
              : "var(--green)",
            boxShadow: `0 0 2px 4px ${
              props.backgroundColor ? props.backgroundColor : "var(--green)"
            }`,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "var(--white)",
              letterSpacing: 1.2,
              fontSize: { xs: "calc(0.5em + 1vw)", md: "calc(0.4em + 0.7vw)" },
            }}
          >
            {props.header ? props.header : "More Information"}
          </Typography>
          <Avatar
            sx={{
              width: `calc(${height}px + 20px)`,
              height: `calc(${height}px + 20px)`,
              position: "absolute",
              left: 0,
              top: "50%",
              bottom: 0,
              transform: "translate(-3%,-50%)",
              border: "2px solid var(--white)",
              bgcolor: props.backgroundColor
                ? props.backgroundColor
                : "var(--green)",
              boxShadow: `0 0 2px 4px ${
                props.backgroundColor ? props.backgroundColor : "var(--green)"
              }`,
              "& svg": {
                fontSize: {
                  xs: 60,
                  sm: "calc(3rem + 1vw)",
                  md: "calc(2em + 1vw)",
                },
              },
            }}
          >
            {props.headerIcon ? props.headerIcon : Icons.Info}
          </Avatar>
        </Box>

        <CustomButton
          variant="contained"
          size="small"
          sx={{ borderRadius: "30px", px: 4 }}
          onClick={props.onClick}
          // fullWidth={"false"}
        >
          {props.BtnName ? props.BtnName : "Know More"}
        </CustomButton>
      </CardContent>
    </Card>
  );
};
export default MoreInformation;
