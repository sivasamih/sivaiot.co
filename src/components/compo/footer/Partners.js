'use client'
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import * as APIURLS from "@/apis/apiconstant";
import useMobileLandscape from "@/app/hooks/mobileLandscape";

const Partners = () => {
  const isMobileLandscape = useMobileLandscape()

  const PartnersLogo = [
    {
      logo: APIURLS.BASE_PATH.OthersImage + "IMPINJ.png",
      name: "IMPINJ",
    },
    {
      logo: APIURLS.BASE_PATH.OthersImage + "RAIN-RFID.png",
      name: "RAIN-RFID",
    },
    // {
    //   logo: APIURLS.BASE_PATH.OthersImage + "AIM.png",
    //   name: "AIM",
    // },
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
      <Container sx={{ bgcolor: "transparent", pt: 2, pb: 3 }}>
        <fieldset style={{ borderRadius: '10px', borderColor: "#edf0f57b ", paddingBottom: '10px' }}>
          <legend style={{ color: "var(--green)", padding: '0 10px', textAlign: "center", letterSpacing: 1, fontSize: '20px' }}>Our Technology Partners</legend>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 2,
              pb: 1,
              px: 2,
              pt: { xs: 2, md: 0 }
            }}
          >
            {PartnersLogo?.map((item, index) => (
              <Box
                key={index}
                component="img"
                title={item.name}
                src={item.logo}
                alt={item.name}
                sx={{
                  height: 60,
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                }}
              />
            ))}
          </Box>

        </fieldset>

      </Container>
    </Box>
  );
};
export default Partners;
