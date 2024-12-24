import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import MetaConfig from "../components/compo/meta/metaconfig";

const Error404 = () => {
  return (
    <>
      <MetaConfig
        title={"Page Not Found"}
        description={"Page Not Found"}
        keywords={null}
      />
      <Box sx={{}}>
        <Container sx={{ bgcolor: "white", py: 4 }}>
          <Box sx={{ p: 2, bgcolor: "#F2F4F7", borderRadius: 5 }}>
            <Box
              sx={{
                height: { xs: 200, md: 400 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                bgcolor: "white",
                borderRadius: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "calc(2rem + 10vw)",
                  fontWeight: "bold",
                  lineHeight: 1,
                  color: "var(--darkGreen)",
                }}
              >
                4
                <Typography
                  sx={{
                    fontSize: "calc(2rem + 5vw)",
                    fontWeight: "100",
                    lineHeight: 1,
                    color: "black",
                  }}
                  component={"span"}
                >
                  ☹
                </Typography>
                4
              </Typography>
              <Typography sx={{ fontSize: "calc(1rem + 1vw)" }}>
                The page you requested is unavailable.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Error404;
