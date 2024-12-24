"use client";
import { Box, Button, Grid, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { Refresh, WarningAmber } from "@mui/icons-material";
import { useEffect } from "react";

const ErrorPage = ({ error, reset }) => {
  const index = error.stack.indexOf("(");

  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error);
    try {
      if (!error) {
      }
    } catch (ex) {}
  }, [error]);
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
          sx={{ height: "100vh", overflow: "hidden" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ bgcolor: "#2f358f9a", color: "white" }}
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
                  <WarningAmber
                    color="error"
                    sx={{ fontSize: 150, pb: 5 }}
                  />
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ textTransform: "uppercase" }}
                >
                  {error.message}
                </Typography>
                <Typography sx={{ py: 2 }}>
                  {error.stack.slice(0, index - 1)}
                </Typography>
                <Button
                  startIcon={<Refresh />}
                  variant="contained"
                  sx={{
                    borderRadius: 20,
                    bgcolor: "#2F358F",
                    "&:hover": {
                      bgcolor: "#2F358F",
                    },
                  }}
                  onClick={reset}
                >
                  Try again
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "Center",
              alignItems: "center",
              bgcolor: "#ed202770",
            }}
          >
            <Box sx={{ p: 10 }}>
              <Image
                alt="ErrorImage"
                src={"/images/error-screen.png"}
                layout="responsive"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};

export default ErrorPage;
