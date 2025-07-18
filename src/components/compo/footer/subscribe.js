"use client";
import { Box, CircularProgress, Container } from "@mui/material";
import * as FETCHAPI from "@/apis/fetchapi";
import * as APIURLS from "@/apis/apiconstant";
import FooterTitle from "../../customcompo/Typo/footerTitle";
import CustomButton from "../../customcompo/button/CustomButton";
import CustomTextField from "../../customcompo/custominputfield/textfield";
import { textAlign } from "@mui/system";
import useMobileLandscape from "@/app/hooks/mobileLandscape";
import { useState } from "react";
import SnackBar from "@/components/customcompo/snackbar/snackbar";
import { validateEmail } from "@/helper/helper";

const Subscribe = () => {
  const isMobileLandscape = useMobileLandscape();
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("info");
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isOTPVisiable, setIsOTPvisiable] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    OTP: "",
  });

  const handleOnChange = (value, name) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const showSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };

  const handleVerify = async () => {
    const valid = ValidateForm();
    if (!valid) return;
    try {
      let reqData = {
        EmailID: formData.Email,
        Name: formData.Name,
      };
      setIsLoading(true);
      let res = await FETCHAPI.Fetch(APIURLS.APIURL.Registration, reqData);
      if (res.status === 200) {
        showSnackbar("A One Time Password has been sent to your Email", "success");
        setIsOTPvisiable(true);
      }
    } catch (ex) {
    } finally {
      setIsLoading(false);
    }
  };

  const ValidateForm = () => {
    if (!formData.Name) {
      showSnackbar("Enter valid Name", "error");
      return false;
    }
    if (!formData.Email || !validateEmail(formData.Email)) {
      showSnackbar("Enter valid email", "error");
      return false;
    }
    return true;
  };
  const ClearFormData = () => {
    setFormData({
      Name: "",
      Email: "",
      OTP: "",
    })
    setIsOTPvisiable(false)
  }
  const handleValidate = async () => {
    try {
      const { OTP, Email } = formData;
      if (OTP === "" && Email === "") {
        showSnackbar("OTP is required", "error");
        return;
      }

      let reqData = {
        EmailID: Email,
        OTP: OTP,
      };
      setIsLoading(true);
      let res = await FETCHAPI.Fetch(APIURLS.APIURL.RegistrationValid, reqData);
      if (res.status === 200) {
        await handleSubscribe();
        ClearFormData();
        showSnackbar("Thank you for subscribing!", "success");
      } else {
        showSnackbar("OTP is not valid", "error");
      }
    } catch (ex) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscribe = async () => {
    try {
      if (formData["Email"]) {
        let reqData = {
          WebsiteData: {
            SourceID: 2,
            TypeID: 5,
            isChecked: false,
            JsonData: JSON.stringify({
              email: formData["Email"],
              name: formData["Name"],
              subject: "Newsletter Subscription",
              company: "",
              phone: "",
              message: "",
              company_website: "",
              visitingPage: window.location.href,
            }),
          },
        };
        await FETCHAPI.Fetch(APIURLS.APIURL.Add_Update_WebsiteData, reqData);
      }
    } catch (ex) {
      console.log("ex", ex);
    }
  };

  return (
    <>
      <SnackBar open={snackbarOpen} onClose={() => setSnackbarOpen(false)} type={snackbarType} message={snackbarMessage} />
      <Container sx={{ py: 3 }}>
        <FooterTitle color={"white"} sx={{ textAlign: "left" }}>
          Subscribe to our newsletter{" "}
        </FooterTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: isMobileLandscape ? "row" : "column", md: "row" },
            gap: { xs: 1, md: 4 },
          }}>
          <CustomTextField
            id="name"
            label="Name"
            disabled={isOTPVisiable}
            value={formData.Name}
            multiline={false}
            rows={1}
            required={true}
            onChange={(e) => handleOnChange(e.target.value, "Name")}
          />
          <CustomTextField
            id="email"
            label="Email"
            disabled={isOTPVisiable}
            value={formData.Email}
            multiline={false}
            rows={1}
            required={true}
            onChange={(e) => handleOnChange(e.target.value, "Email")}
          />
          {isOTPVisiable && (
            <CustomTextField
              id="otp"
              label="OTP"
              value={formData.OTP}
              multiline={false}
              rows={1}
              required={true}
              onChange={(e) => handleOnChange(e.target.value, "OTP")}
            />
          )}
          <CustomButton
            variant="contained"
            fullWidth
            className={"btn-bg-green"}
            size="large"
            disabled={isLoading}
            startIcon={isLoading && <CircularProgress />}
            // margin="dense"

            onClick={isOTPVisiable ? handleValidate : handleVerify}>
            {isOTPVisiable ? "Subscribe" : "Verify"}
          </CustomButton>
        </Box>
      </Container>
    </>
  );
};
export default Subscribe;
