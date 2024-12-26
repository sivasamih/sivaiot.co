import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";

const Title5 = ({ title = "", Breadcrumb = [], currentPageName = "" }) => {
  return (
    <Box sx={{ bgcolor: "var(--green)", py: 4 }}>
      <Container>
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
        >
          {title}
        </Typography>
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
