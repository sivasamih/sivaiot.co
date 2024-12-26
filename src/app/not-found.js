"use client";
import { Box, Button, Grid, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { Clear, Home } from "@mui/icons-material";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Grow
        in={true}
        style={{ transformOrigin: "center" }}
        timeout={1000}
      >
        <Grid
          container
          spacing={0}
          sx={{ maxHeight: "100vh", overflow: "hidden" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ bgcolor: "#9ca0db9a", color: "white" }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box sx={{ py: 12 }}>
                <Typography>
                  <Clear
                    color="error"
                    sx={{ fontSize: 150, pb: 5 }}
                  />
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    textTransform: "uppercase",
                    color: "#ED2027",
                    fontWeight: "bold",
                  }}
                >
                  Page not found !
                </Typography>
                <Typography sx={{ py: 2, color: "black" }}>
                  The page are you looking for was moved,removed,renamed or
                  might never existed
                </Typography>
                <Button
                  components={Link}
                  title="Home"
                  href="/"
                  startIcon={<Home />}
                  variant="contained"
                  sx={{
                    borderRadius: 20,
                    bgcolor: "#2F358F",
                    "&:hover": {
                      bgcolor: "#2F358F",
                    },
                  }}
                >
                  {" "}
                  Home
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ p: 10 }}>
              <Image
                alt="page_not_found"
                src={"/images/page-not-found.png"}
                layout="responsive"
                width={0}
                height={0}
                priorit={"true"}
                loading="eager"
                fetchPriority="high"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};
export default NotFound;
