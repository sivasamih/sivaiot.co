import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomTextField from "../../customcompo/custominputfield/textfield";
import { useState, useEffect } from "react";
import LazyImage from "../../customcompo/customimage/customLazyImage";
import { validateEmail } from "../../../helper/helper";
import SnackBar from "../../customcompo/snackbar/snackbar";
import * as FETCHAPI from "../../../apis/fetchapi";
import * as APIURLS from "../../../apis/apiconstant";
import Loading from "../loading";

const DataSheetDwnldForm = (props) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [OTP, setOtp] = useState("");
  const [isOtpVisiable, setOtpIsVisiable] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("info");
  const [RunAfterSnackbar, setRunAfterSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const showSnackbar = (message, type, runAfterClose = false) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
    setRunAfterSnackbar(runAfterClose);
  };

  useEffect(() => {
    if (!snackbarOpen && RunAfterSnackbar) {
      props.SET_SUV_DATA({ name: Name, email: Email });
      props.openDatasheet();
      props.onClose();
      handleReset();
    }
  }, [snackbarOpen]);

  const handleVerify = async () => {
    let isValid = ValidateFormData();
    let reqData = {
      EmailID: Email,
      Name: Name,
    };
    try {
      if (isValid) {
        setLoading(true);
        let res = await FETCHAPI.Fetch(APIURLS.APIURL.Registration, reqData);
        if (res.status === 200) {
          setLoading(false);
          setOtpIsVisiable(true);
          showSnackbar(
            "A One Time Password has been sent to your email",
            "info"
          );
        } else {
          showSnackbar("Something went wrong", "error");
          setLoading(false);
        }
      }
    } catch (ex) {
      showSnackbar("An error occurred. Please try again.", "error");
    }
  };

  const handleValidate = async () => {
    let reqData = {
      EmailID: Email,
      OTP: OTP,
    };
    try {
      if (OTP === "") {
        showSnackbar("Please enter your One Time Password", "error");
        return false;
      }
      if (OTP.length !== 4) {
        showSnackbar("Incorrect One Time Password", "error");
        return false;
      }
      if (OTP) {
        setLoading(true);
        let res = await FETCHAPI.Fetch(
          APIURLS.APIURL.RegistrationValid,
          reqData
        );
        if (res.status === 200) {
          setLoading(false);
          showSnackbar(
            "Congratulations! Your datasheet is ready to view.",
            "success",
            true
          );
          // props.onClose();
        } else {
          showSnackbar("Something went wrong", "error");
          setLoading(false);
        }
      }
    } catch (ex) {
      showSnackbar("An error occurred. Please try again.", "error");
    }
  };

  let ValidateFormData = () => {
    let valid = true;
    if (Email === "") {
      showSnackbar("Please enter your email", "error");
      valid = false;
      return false;
    }
    if (!validateEmail(Email)) {
      showSnackbar("Please enter a valid email", "error");
      valid = false;
      return false;
    }
    if (Name === "") {
      showSnackbar("Please enter your name", "error");
      valid = false;
      return false;
    }
    return valid;
  };
  const handleReset = () => {
    setName("");
    setEmail("");
    setOtp("");
    setOtpIsVisiable(false);
  };

  const removeHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <>
      <SnackBar
        open={snackbarOpen}
        onClose={(e) => setSnackbarOpen(false)}
        type={snackbarType}
        message={snackbarMessage}
      />
      <Loading open={loading} />
      <Grid container spacing={{ xs: 0, md: 2 }}>
        <Grid item xs={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "0.5s ease-in-out",
              "&:hover img": {
                transform: "scale(1.1)",
              },
            }}>
            <Typography
              sx={{
                fontSize: { xs: "calc(1rem + 1vw)", md: "calc(0.5rem + 1vw)" },
                color: "var(--headerColor)",
                textAlign: "center",
                fontWeight: "bold",
                py: 1,
              }}>
              {removeHtmlTags(props.ProductName)}
            </Typography>
            <LazyImage
              src={props.ProductImage}
              alt={props.ProductImageAlt}
              placeholder={props.ProductImageAlt}
              style={{
                width: "100%",
                transition: "0.5s ease-in-out",
                height: "-webkit-fill-available",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(0.2rem + 1vw)",
                },
                my: 1,
              }}>
              To download the Datasheet, please Verify your Name & Email address
              below.
            </Typography>
            <Box>
              <CustomTextField
                type="email"
                variant="outlined"
                name="Email"
                label="Email"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isOtpVisiable ? (
                <CustomTextField
                  variant="outlined"
                  name="Name"
                  label="Name"
                  required
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <CustomTextField
                  variant="outlined"
                  name="OTP"
                  label="One Time Password"
                  required
                  value={OTP}
                  onChange={(e) => setOtp(e.target.value)}
                />
              )}
            </Box>
            <Box sx={{ my: 1 }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: {
                    xs: "calc(0.9rem + 1vw)",
                    md: "calc(0.5rem + 1vw)",
                  },
                  color: "var(--headerColor)",
                  textTransform: "uppercase",
                }}>
                DISCLAIMER
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                }}>
                Please ensure your browser pop-ups are enabled in order to
                download the datasheet.
              </Typography>
            </Box>
            <Box>
              {!isOtpVisiable && (
                <Button
                  fullWidth
                  style={{ backgroundColor: "var(--green)", color: "white" }}
                  sx={{
                    mt: 1,
                    fontSize: {
                      xs: "calc(0.6rem + 1vw)",
                      md: "calc(0.1rem + 1vw)",
                    },
                  }}
                  onClick={handleVerify}>
                  Verify
                </Button>
              )}
              {isOtpVisiable && (
                <Button
                  fullWidth
                  style={{ backgroundColor: "var(--green)", color: "white" }}
                  sx={{
                    mt: 1,
                    fontSize: {
                      xs: "calc(0.6rem + 1vw)",
                      md: "calc(0.1rem + 1vw)",
                    },
                  }}
                  onClick={handleValidate}>
                  Validate
                </Button>
              )}
              <Button
                fullWidth
                style={{ backgroundColor: "var(--green)", color: "white" }}
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "calc(0.6rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                  },
                }}
                type="reset"
                onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DataSheetDwnldForm;
