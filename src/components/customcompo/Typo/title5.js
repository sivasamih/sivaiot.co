"use client";
import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import { useState } from "react";
import NewIcon from "../images/newicon";
import TitleIcons from "../images/titleicons";

const Title5 = ({ title = "", Breadcrumb = [], currentPageName = "", IsShowIcon = false, Icon = "", IsNew = false }) => {
  const [titleHeight, setTitleHight] = useState(null);
  return (
    <Box sx={{ bgcolor: "var(--green)", py: 4 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
          }}>
          <Box
            sx={{
              fontSize: {
                xs: "calc(1rem + 1vw)",
                md: "calc(1.2rem + 1vw)",
              },
              fontWeight: "bold",
              color: "white",
              display: { xs: "initial", md: "flex" },
              justifyContent: "start",
              alignItems: "center",
            }}
            component={"h1"}
            ref={(el) => setTitleHight(el)}>
            {title}
            {IsShowIcon && <TitleIcons Icon={Icon} />}
            {IsNew === true ? <NewIcon /> : null}
          </Box>
        </Box>
        <Breadcrumbs aria-label="breadcrumb">
          {Breadcrumb?.map((item, index) => {
            return (
              <Link
                underline="hover"
                color="inherit"
                href={item.url}
                title={item.name}
                key={index}>
                {item.name}
              </Link>
            );
          })}
          {currentPageName && (
            <Typography
              underline="hover"
              color="text.primary"
              aria-current="page"
              sx={{ cursor: "default" }}>
              {currentPageName}
            </Typography>
          )}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};
export default Title5;
