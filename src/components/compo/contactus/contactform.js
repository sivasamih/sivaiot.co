"use client";
import { useCallback, useState } from "react";
import { Box } from "@mui/system";
import CustomTextField from "@/components/customcompo/custominputfield/textfield";
import { Button, InputAdornment } from "@mui/material";
import { validateEmail } from "@/helper/helper";
import Title4 from "@/components/customcompo/Typo/title4";
import Loading from "@/app/loading";
import SnackBar from "@/components/customcompo/snackbar/snackbar";
import * as FETCHAPI from "@/apis/fetchapi";
import * as APIURLS from "@/apis/apiconstant";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    CompanyName: "",
    CompanyWebsite: "",
    Phone: "",
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
    console.log(" name, value ", name, value);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
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
    if (formData.Subject === "") {
      showSnackbar("Subject is required", "error");
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

    if (formData.Message === "") {
      showSnackbar("Message is required", "error");
      isValid = false;
      return false;
    }
    return isValid;
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
            name: formData["Name"].slice(0, 50),
            subject: formData["Subject"].slice(0, 220),
            company: formData["CompanyName"].slice(0, 50),
            phone: formData["Phone"].slice(0, 20),
            message: formData["Message"],
            company_website: formData["CompanyWebsite"].slice(0, 50),
          }),
        },
      };
      setIsLoading(true);

      let res = await FETCHAPI.Fetch(APIURLS.APIURL.Add_Update_WebsiteData, reqData);
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
          Name: Name,
        };
        setIsLoading(true);
        let res = await FETCHAPI.Fetch(APIURLS.APIURL.Registration, reqData);
        if (res.status === 200) {
          setIsLoading(false);
          showSnackbar("A One Time Password has been sent to your Email", "success");
          setIsOTPvisiable(true);
        } else {
          setIsLoading(false);
        }
      }
    } catch (ex) { }
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
        showSnackbar("One Time Password successfully validated. Please fill in the details below", "success");
      } else {
        showSnackbar("OTP is not valid", "error");
        setIsLoading(false);
      }
    } catch (ex) { }
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
    });
    setIsOTPvisiable(false);
    setIsEmailValidate(false);
  };

  const ValideNameEmail = useCallback(() => {
    const name = formData.Name?.trim();
    const email = formData.Email?.trim();

    if (!name || !email) return false;
    if (!validateEmail(email)) return false;

    return true;
  }, [formData.Name, formData.Email]);

  const isValidNameEmail = ValideNameEmail()
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
        component="form"
        sx={{ width: "100%" }}
        onSubmit={handleSubmit}>
        <Title4 text={"Write to us"} />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto, 1fr)",
              md: "repeat(2, 1fr)",
            },
            columnGap: 2,
          }}>
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CustomTextField
                disabled={isEmailValidate}
                variant="outlined"
                size="large"
                name="Email"
                label="Email"
                required
                value={formData.Email}
                onChange={handleChange}
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position="end">
              //       <Button
              //         variant="contained"
              //         onClick={handleVarify}>
              //         Verify
              //       </Button>
              //     </InputAdornment>
              //   ),
              // }}
              />
              <Button
                variant="contained"
                onClick={handleVarify} disabled={!isValidNameEmail}>
                Verify
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CustomTextField
                disabled={isEmailValidate}
                variant="outlined"
                size="large"
                // focused={true}
                name="OTP"
                label="One Time Password"
                required
                value={formData.OTP}
                onChange={handleChange}
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position="end">
              //       <Button
              //         variant="contained"
              //         onClick={handleValidate}>
              //         Validate
              //       </Button>
              //     </InputAdornment>
              //   ),
              // }}
              />
              <Button
                variant="contained"
                onClick={handleValidate} disabled={!formData.OTP}>
                Validate
              </Button>
            </Box>
          )}
          <CustomTextField
            disabled={!isEmailValidate}
            variant="outlined"
            size="large"
            name="Subject"
            label="Subject"
            required
            value={formData.Subject}
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
          <CustomTextField
            disabled={!isEmailValidate}
            variant="outlined"
            size="large"
            name="Phone"
            label="Phone"
            type="tel"
            value={formData.Phone}
            onChange={handleChange}
          />
        </Box>
        <CustomTextField
          disabled={!isEmailValidate}
          variant="outlined"
          size="large"
          name="Message"
          label="Your Message"
          multiline
          required
          rows={4}
          value={formData.Message}
          onChange={handleChange}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* {!isOTPVisiable && (
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 1, px: 5 }}
            onClick={handleVarify}>
            Verify
          </Button>
        )} */}
          {/* {isOTPVisiable && (
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 1, px: 5 }}
            onClick={handleValidate}>
            Validate
          </Button>
        )} */}
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 1, px: 5 }}
            onClick={handleSubmit}>
            Submit
          </Button>

          <Button
            type="button"
            variant="contained"
            sx={{ mt: 1, px: 5 }}
            onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
