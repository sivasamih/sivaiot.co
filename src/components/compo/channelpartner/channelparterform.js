"use client";
import { Button, InputAdornment } from "@mui/material";
import Title4 from "../../customcompo/Typo/title4";
import { Box } from "@mui/system";
import CustomTextField from "../../customcompo/custominputfield/textfield";
import { useState } from "react";
import { Countries, validateEmail } from "../../../helper/helper";
import CustomAutoComplete from "../../customcompo/custominputfield/autocompleate";
import Loading from "../loading";
import SnackBar from "../../customcompo/snackbar/snackbar";
import * as APIURLS from "../../../apis/apiconstant";
import * as FETCHAPI from "../../../apis/fetchapi";

const ChannelPartnerForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    YourJob: "",
    CompanyName: "",
    CompanyWebsite: "",
    Country: null,
    Message: "",
    OTP: "",
  });

  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isOTPVisiable, setIsOTPvisiable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("info");

  const showSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handleChange formData", formData["Country"]);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
        setIsLoading(false);
        setIsOTPvisiable(false);
        setIsEmailValidate(true);
        showSnackbar(
          "One Time Password successfully validated. Please fill in the details below",
          "success"
        );
      } else {
        showSnackbar("OTP is not valid", "error");
        setIsLoading(false);
      }
    } catch (ex) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      let reqData = {
        WebsiteData: {
          SourceID: 2,
          TypeID: 1,
          isChecked: false,
          JsonData: JSON.stringify({
            email: formData["Email"],
            name: formData["Name"],
            subject: "Channel Partner registration",
            company: formData["CompanyName"],
            phone: formData["Phone"],
            message:
              "From " +
              formData["Country"]["value"] +
              "," +
              "Job" +
              "-" +
              formData.YourJob,
            company_website: formData["CompanyWebsite"],
          }),
        },
      };
      setIsLoading(true);

      let res = await FETCHAPI.Fetch(
        APIURLS.APIURL.Add_Update_WebsiteData,
        reqData
      );
      if (res.status === 200) {
        setTimeout(() => {
          setIsLoading(false);
          handleReset();
          setTimeout(() => {
            showSnackbar("Form successfully submitted", "success");
          }, 1000);
        }, 1000);
      } else {
        setIsLoading(false);
        showSnackbar("Somthing went wrong,Please Try again", "error");
      }
    }
  };

  const handleVarify = async () => {
    try {
      const { Name, Email } = formData;
      if (Name === "") {
        showSnackbar("Name is required", "error");
        return;
      }
      if (Email === "") {
        showSnackbar("Email is required", "error");
        return;
      }
      if (validateEmail(Email) === false) {
        showSnackbar("Email is not valid", "error");
        return;
      }
      if (Name && Email) {
        let reqData = {
          EmailID: Email,
          Name: "",
        };
        setIsLoading(true);
        let res = await FETCHAPI.Fetch(APIURLS.APIURL.Registration, reqData);
        if (res.status === 200) {
          setIsLoading(false);
          showSnackbar(
            "A One Time Password has been sent to your Email",
            "success"
          );
          setIsOTPvisiable(true);
        } else {
          setIsLoading(false);
        }
      }
    } catch (ex) {}
  };
  const handleReset = () => {
    setFormData({
      Name: "",
      Email: "",
      Subject: "",
      CompanyName: "",
      CompanyWebsite: "",
      Phone: "",
      Message: "",
      OTP: "",
      Country: null,
    });
    setIsEmailValidate(false);
    setIsOTPvisiable(false);
  };

  const validate = () => {
    let isValid = true;

    if (formData.Name === "") {
      showSnackbar("Name is required", "error");
      isValid = false;
      return false;
    }

    if (formData.Email === "") {
      showSnackbar("Email is required", "error");
      isValid = false;
      return false;
    } else if (!validateEmail(formData.Email)) {
      showSnackbar("Email is not valid");
      isValid = false;
      return false;
    }
    if (isEmailValidate === false) {
      showSnackbar("Please verify your email and proceed to the next", "error");
      isValid = false;
      return false;
    }

    if (formData.CompanyName === "") {
      showSnackbar("Company Name is required", "error");
      isValid = false;
      return false;
    } else if (formData.CompanyName.length < 3) {
      showSnackbar("Company Name must be at least 3 characters long", "error");
      isValid = false;
      return false;
    }

    return isValid;
  };

  return (
    <>
      <Loading open={isLoading} />
      <SnackBar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        type={snackbarType}
        message={snackbarMessage}
      />
      <Title4 text="Become A Siva IoT Channel Partner" />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(auto, 1fr)",
            md: "repeat(2, 1fr)",
          },
          columnGap: 2,
          mb: 2,
        }}
      >
        <CustomTextField
          disabled={isOTPVisiable || isEmailValidate}
          variant="outlined"
          size="large"
          name="Name"
          label="Name"
          required
          value={formData.Name}
          onChange={handleChange}
        />
        {!isOTPVisiable ? (
          <CustomTextField
            disabled={isEmailValidate}
            variant="outlined"
            size="large"
            name="Email"
            label="Email"
            required
            value={formData.Email}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    onClick={handleVarify}
                  >
                    Verify
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        ) : (
          <CustomTextField
            disabled={isEmailValidate}
            variant="outlined"
            size="large"
            name="OTP"
            label="One Time Password"
            required
            value={formData.OTP}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    onClick={handleValidate}
                  >
                    Validate
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        )}
        <CustomTextField
          disabled={!isEmailValidate}
          variant="outlined"
          size="large"
          name="YourJob"
          label="Your Job"
          required
          value={formData.YourJob}
          onChange={handleChange}
        />
        <CustomTextField
          disabled={!isEmailValidate}
          variant="outlined"
          size="large"
          name="CompanyName"
          required
          label="Company Name"
          value={formData.CompanyName}
          onChange={handleChange}
        />
        <CustomTextField
          disabled={!isEmailValidate}
          variant="outlined"
          size="large"
          name="CompanyWebsite"
          label="Company Website"
          value={formData.CompanyWebsite}
          onChange={handleChange}
        />
        <CustomAutoComplete
          value={formData.Country}
          disabled={!isEmailValidate}
          name={"Country"}
          onChange={(e) =>
            handleChange({
              target: {
                name: "Country",
                value: e,
              },
            })
          }
          label={"Country"}
          options={Countries}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 1, px: 5 }}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 1, px: 5 }}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ChannelPartnerForm;
