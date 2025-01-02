"use client";
import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import { useState } from "react";

const Title5 = ({
  title = "",
  Breadcrumb = [],
  currentPageName = "",
  IsShowIcon = false,
  Icon = "",
}) => {
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
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "calc(1rem + 1vw)",
                md: "calc(1.2rem + 1vw)",
              },
              fontWeight: "bold",
              color: "white",
            }}
            component={"h1"}
            ref={(el) => setTitleHight(el)}
          >
            {title}
          </Typography>
          {IsShowIcon && (
            <Box
              component="img"
              src={Icon}
              sx={{
                width: titleHeight?.offsetHeight || "30px",
                // maxWidth: "25px",
                // height: this.productNameElement?.offsetHeight + "10" || "auto",
                height: titleHeight?.offsetHeight || "30px",
                transition: "height 0.5s ease-in-out",
                display: Icon ? "block" : "none",

              }}
            />
          )}
        </Box>
        <Breadcrumbs aria-label="breadcrumb">
          {Breadcrumb?.map((item, index) => {
            return (
              <Link
                underline="hover"
                color="inherit"
                href={item.url}
                title={item.name}
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
          {currentPageName && (
            <Typography
              underline="hover"
              color="text.primary"
              aria-current="page"
              sx={{ cursor: "default" }}
            >
              {currentPageName}
            </Typography>
          )}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};
export default Title5;
