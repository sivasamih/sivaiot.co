import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { NavLink } from "react-router-dom";
import LazyImage from "../customimage/customLazyImage";
import moment from "moment";
const BlogCard = (props) => {
  return (
    <>
      <Grid container spacing={0} sx={{ my: 4, boxShadow: 10 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{ minHeight: { xs: 200, md: 320 } }}>
          <Box component={NavLink} to={props.url} target="_blank">
            <LazyImage
              src={props.image}
              alt="image"
              style={{ height: "-webkit-fill-available" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{ p: 4, pb: { xs: 6, md: 4 }, pr: 2, position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              gap: 2,
            }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(1rem + 1vw)",
                  md: "calc(0.4rem + 1vw)",
                },
                color: "var(--blue)",
                fontWeight: "bold",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              component={NavLink}
              to={props.url} target="_blank">
              {props.Title}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.6rem + 1vw)",
                  md: "calc(0.1rem + 0.8vw)",
                },
                fontStyle: "italic",
                color: "var(--green)",
              }}>
              {moment(props.Time).format("DD/MM/YYYY") +
                " " +
                "|" +
                " " +
                props.Tags}
              {/* 14/06/2024 | IoT, RFID, inventory management, access control,
              technology in india, real-time tracking */}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.1rem + 1vw)",
                },
                color: "var(--lightGray)",
              }}>
              {props.Brief}
            </Typography>
          </Box>
          <Typography
            component={NavLink}
            to={props.url}
            sx={{
              position: "absolute",
              bottom: { xs: "5%", md: "8%" },
              right: "8%",
              color: "var(--green)",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}>
            Read more...
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 10,
              width: "100%",
              bgcolor: "var(--green)",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default BlogCard;
