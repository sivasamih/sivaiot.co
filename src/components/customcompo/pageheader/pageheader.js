import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const PageHeader = (props) => {
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
          component={"h1"}>
          {props.title}
        </Typography>
      </Container>
    </Box>
  );
};
export default PageHeader;
