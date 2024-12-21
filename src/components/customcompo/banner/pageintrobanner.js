import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CustomImage from "../customimage/customimage";
import Paragraph1 from "../Typo/paragraph1";

const PageIntroBanner = (props) => {
  const navigate = useNavigate();

  return (
    <>
      {/*<Container> */}
      <Box
        sx={{
          position: "relative",
          p: 0,
          m: 0,
          height: { xs: 180, sm: 200, md: 250, lg: 300 },
          overflow: "hidden",
        }}
      >
        {props.ImageURL === "" ||
        props.ImageURL === null ||
        props.ImageURL === undefined ? null : (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: -1,
              backgroundAttachment: "fixed",
              filter: "brightness(0.4)",
              overflow: "hidden",
            }}
          >
            <CustomImage
              src={props.ImageURL}
              width={"100%"}
              height={"100%"}
              loading="lazy"
              alt={props.alt}
              style={{ objectFit: "fill" }}
            />
          </Box>
        )}

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {props.ActiveBackBtn === true ? (
            <Paragraph1
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                color: props.ImageURL ? "var(--white)" : "var(--black)",
                pr: 1,
                mb: { xs: 0, md: 1 },
                "&:hover": {
                  boxShadow: props.ImageURL
                    ? "0 4px 4px -4px var(--white)"
                    : "0 4px 4px -4px 'var(--black)'",
                  cursor: "pointer",
                },
              }}
            >
              <KeyboardDoubleArrowLeft
                sx={{
                  color: props.ImageURL ? "var(--white)" : "var(--black)",
                  fontSize: { xs: 10, sm: 12, md: 15, lg: 15 },
                }}
              />

              <Paragraph1
                component={"span"}
                sx={{
                  fontSize: { xs: 10, sm: 12, md: 15, lg: 15 },
                }}
                onClick={() => {}}
              >
                Back
              </Paragraph1>
            </Paragraph1>
          ) : null}

          {props.Title === "" ||
          props.Title === undefined ||
          props.Title === null ? null : (
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 25, md: 30, lg: 35 },
                fontWeight: 700,
                color: props.ImageURL ? "var(--white)" : "var(--black)",
                lineHeight: 1.1,
                mb: { xs: 1, md: 2 },
              }}
            >
              {props.Title && props.Title.slice(0, 100)}
              {props.Title && props.Title.length > 100 ? "..." : ""}
            </Typography>
          )}

          {props.SubTitle === "" ||
          props.SubTitle === undefined ||
          props.SubTitle === null ? null : (
            <Typography
              sx={{
                color: props.ImageURL ? "var(--white)" : "var(--black)",
                fontSize: { xs: 10, sm: 12, md: 15, lg: 15 },
                maxWidth: { xs: "100%", md: "80%" },
                lineHeight: 1.2,
                mt: { xs: 1, sm: 2 },
              }}
            >
              {props.SubTitle && props.SubTitle.slice(0, 250)}
              {props.SubTitle && props.SubTitle.length > 350 ? "..." : ""}
            </Typography>
          )}
        </Container>
      </Box>
    </>
  );
};

export default PageIntroBanner;
