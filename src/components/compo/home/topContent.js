import { Box, Grid, Typography } from "@mui/material";
import FullWidthGridItem from "../../customcompo/grid/FullWidthGridItem";
import GridContainer from "../../customcompo/grid/GridContainer";
import { motion } from "framer-motion";

const TopContent = (props) => {
  return (
    <GridContainer>
      <FullWidthGridItem>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7} sx={{ minHeight: 180 }}>
            <Box component={motion.div}>
              <Typography
                sx={{
                  fontSize: { xs: "calc(1em + 1vw)", md: "calc(1rem + 1vw)" },

                  color: "var(--white)",
                  lineHeight: 1.2,
                }}
                component={"h1"}
                id={"home-desc"}>
                SIVA is a Quality and R&D driven manufacturer of RFID labels and
                tags for a wide range of industries boasting a strong RF design
                team and competencies in product development and production.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box component={motion.div}>
              <Typography
                sx={{
                  fontSize: "clamp(0.8rem,10vw,1.2rem)",
                  fontFamily: "Spectral",
                  mb: 1,
                  color: "var(--white)",
                  fontWeight: 600,
                }}>
                OUR COMMITMENT
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                  fontFamily: "Spectral",
                  color: "var(--white)",
                }}>
                We deploy a QRFT (Quality Right First Time) approach to
                production and are constantly guided by our vision statement
                i.e. To achieve & sustain excellence across our activities and
                be recognised as a credible supplier in the markets we serve.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </FullWidthGridItem>
    </GridContainer>
  );
};
export default TopContent;
