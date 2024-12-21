import { Box, Container, Grid } from "@mui/material";
import FooterLink from "./footerlink";
import Partners from "./Partners";
import Subscribe from "./subscribe";
import Copyright from "./copywrite";

const Footer = () => {
  return (
    <>
      <Box sx={{ color: "var(--white)", position: "relative" }}>
        <Grid container spacing={0} sx={{}}>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              bgcolor: "var(--blue)",
            }}>
            <Container sx={{ py: 2 }}>
              <FooterLink />
            </Container>
          </Grid>

          {/* partner */}
          <Grid item xs={12} sm={12}>
            <Partners />
          </Grid>

          {/* subscribe */}
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              bgcolor: "var(--darkGreen)",
            }}>
            <Subscribe />
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} sm={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Footer;
