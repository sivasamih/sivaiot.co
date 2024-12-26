import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import * as APIURLS from "@/apis/apiconstant";

const Partners = () => {
  const PartnersLogo = [
    {
      logo: APIURLS.BASE_PATH.OthersImage + "IMPINJ.png",
      name: "IMPINJ",
    },
    {
      logo: APIURLS.BASE_PATH.OthersImage + "RAIN-RFID.png",
      name: "RAIN-RFID",
    },
    {
      logo: APIURLS.BASE_PATH.OthersImage + "AIM.png",
      name: "AIM",
    },
    {
      logo: APIURLS.BASE_PATH.OthersImage + "NXP.png",
      name: "NXP",
    },
    {
      logo: APIURLS.BASE_PATH.OthersImage + "AXZON.png",
      name: "AXZON",
    },
    {
      logo: APIURLS.BASE_PATH.OthersImage + "ST.png",
      name: "ST",
    },
  ];

  return (
    <Box sx={{ position: "relative", py: { xs: 2, md: 0 } }}>
      <Container sx={{ bgcolor: "transparent" }}>
        <Grid
          container
          spacing={0}
        >
          <Grid
            item
            xs={12}
            sm={12}
          >
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                gridTemplateColumns: {
                  xs: "auto",
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                  lg: "repeat(6,1fr)",
                },
                gap: 1,
                py: 1,
                "& img": {
                  minHeight: 50,
                  maxWidth: { xs: "50%", lg: "100%" },
                },
              }}
            >
              {PartnersLogo?.map((item, index) => {
                return (
                  <img
                    title={item.name}
                    key={index}
                    src={item.logo}
                    alt={item.name}
                    width={"100%"}
                    // height={"100%"}
                  />
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Partners;
