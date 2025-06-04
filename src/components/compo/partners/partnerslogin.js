"use client";
import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import CustomTextField from "@/components/customcompo/custominputfield/textfield";
import TopBgColor from "@/components/customcompo/svg/top-bg";
import BottomBgColor from "@/components/customcompo/svg/bottom-bg";
import SnackBar from "@/components/customcompo/snackbar/snackbar";
import Loading from "@/app/loading";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import {
  getLocalStorage,
  setLocalStorage,
  validateEmail,
} from "@/helper/helper";
import { redirect, useRouter } from "next/navigation";
import { Route_Path } from "@/apis/api";

const PartnersLogIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("info");
  // let IOT_PU = useLoginData();
  const router = useRouter();

  useEffect(() => {
    let IOT_PU = getLocalStorage();
    if (IOT_PU) {
      redirect(Route_Path.PARTNERS);
    }
  }, []);

  const showSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const valid = Validate();

    try {
      if (valid) {
        setIsLoading(true);
        const reqData = {
          emailid: Email,
          Password: Password,
        };
        let res = await FETCHAPI.Fetch(APIURLS.APIURL.PartnerLogin, reqData);
        if (res.status === 200) {
          let data = await res.json();
          setIsLoading(false);
          showSnackbar("Login Successfull", "success");
          console.log("res>>>>", data);
          setLocalStorage(data);
          setEmail("");
          setPassword("");
          router.push(Route_Path.PARTNERS_PRODUCT_FAMILY);
        } else {
          setIsLoading(false);
          showSnackbar("Invalid Email or Password", "error");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  const Validate = () => {
    let valid = true;
    if (Email === "") {
      showSnackbar("Please enter your email", "error");
      valid = false;
      return valid;
    }
    if (!validateEmail(Email)) {
      showSnackbar("Invalid email", "error");
      valid = false;
      return valid;
    }
    if (Password === "") {
      showSnackbar("Please enter your password", "error");
      return valid;
    }
    return valid;
  };
  return (
    <>
      <SnackBar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        type={snackbarType}
        message={snackbarMessage}
      />
      <Loading open={isLoading} />
      <Box
        sx={{
          "& #top-svg": {
            display: { xs: "block", md: "none" },
          },
          "& #bottom-svg": {
            display: { xs: "none", md: "block" },
          },
        }}
      >
        <Box>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "50vh",
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", sm: "80%", md: "60%", lg: "30%" },
              }}
              component={"form"}
              onSubmit={handleOnSubmit}
            >
              <Typography
                sx={{
                  fontSize: "calc(1rem + 1vw)",
                  fontFamily: "bold",
                }}
                style={{
                  textAlign: "left",
                }}
              >
                Channel Partner Login
              </Typography>
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <CustomTextField
                  variant="outlined"
                  size="small"
                  name="Email"
                  label="Email"
                  type="email"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CustomTextField
                  type="password"
                  variant="outlined"
                  size="small"
                  name="Password"
                  label="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{ mt: 1 }}
                >
                  {/* <Typography
                    sx={{
                      color: "var(--green)",
                      display: "block",
                      textDecoration: "none",
                      mt: 1,
                    }}
                    component={NavLink}
                    to={""}>
                    Forgot Password?
                  </Typography> */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    sx={{ px: 4, zIndex: 1 }}
                  >
                    LogIn
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Container>
        </Box>
        <BottomBgColor />
        <TopBgColor />
      </Box>
    </>
  );
};

export default PartnersLogIn;
