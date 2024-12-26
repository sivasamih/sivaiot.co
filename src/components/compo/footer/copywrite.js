import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";

const Copyright = () => {
  return (
    <Box sx={{ bgcolor: "var(--blue)" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          py: 1,
          textAlign: "center",
          "& p , a": {
            fontSize: 12,
          },
        }}
      >
        <Typography sx={{ color: "var(--white)" }}>
          Copyright © {moment().year()} by
          <Typography
            sx={{
              fontSize: 12,
              color: "var(--white)",
              textDecoration: "none",
              mx: 1,
              fontWeight: 700,
            }}
            component={"a"}
            href="http://sivagroup.co/"
            target="_blank"
            title="SIVA Group"
          >
            SIVA Group
          </Typography>
          - All Rights Reserved.
        </Typography>
        <Typography sx={{ color: "var(--white)" }}>
          Design by{" "}
          <Typography
            sx={{
              color: "var(--white)",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            component={"a"}
            href="http://sivagroup.co/"
            target="_blank"
            title="SIVA Group"
          >
            SIVA Group
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
};
export default Copyright;
