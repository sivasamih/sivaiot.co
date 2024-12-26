import React from "react";
import { Box, Container } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import CustomTextField from "../../customcompo/custominputfield/textfield";
import FormStep from "../../customcompo/formstep/contactformstep";
import CustomButton from "../../customcompo/button/CustomButton";
import Loading from "../loading";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Isloading: false,
      Name: "",
      Email: "",
      Message: "",
      OTP: "",
      CompanyName: "",
      CompanyWebsite: "",
      Subject: "",
      Phone: "",
      DisabledEmail: false,
      IsVisibleOtp: false,
      IsFormFieldVisible: false,
      FormSubmitted: false,
      FormStepCount: null,
    };
  }

  handleOnChange = (value, key) => {
    this.setState((state) => ({ [key]: value }));
  };

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  handleValidate = () => {
    const { Email } = this.state;
    if (!this.validateEmail(Email)) {
      alert("Please enter a valid email address.");
      return;
    }

    this.setState({ Isloading: true });
    setTimeout(() => {
      this.setState({
        DisabledEmail: true,
        IsVisibleOtp: true,
        FormStepCount: 0,
        EmailSent: true,
        Isloading: false,
        OTP: "1234",
      });
    }, 1000);
  };

  handleVerify = () => {
    const { OTP } = this.state;
    this.setState({ Isloading: true });

    setTimeout(() => {
      if (OTP === "1234") {
        this.setState({
          EmailSent: false,
          IsVisibleOtp: false,
          FormStepCount: 1,
          IsFormFieldVisible: true,
          Isloading: false,

        });
      } else {
        this.setState({ Isloading: false });
        alert("Invalid OTP. Please try again.");
      }
    }, 1000);
  };

  handleFormSubmit = () => {
    const { Name, Email, Message, CompanyName, Subject } = this.state;

    if (!Name || !Email || !Message || !CompanyName || !Subject) {
      alert("Please fill in all required fields.");
      return;
    }

    this.setState({ Isloading: true });

    setTimeout(() => {
      this.setState({
        FormSubmitted: true,
        FormStepCount: 2,
        Isloading: false,
      });
      this.resetFormData();
    }, 1000);
  };

  resetFormData = () => {
    this.setState({
      Name: "",
      Email: "",
      Message: "",
      OTP: "",
      CompanyName: "",
      CompanyWebsite: "",
      Phone: "",
      Subject: "",
      DisabledEmail: false,
      FormStepCount: null,
      IsVisibleOtp: false,
      IsFormFieldVisible: false,
      FormSubmitted: false,
    });
  };

  render() {
    return (
      <Container
        sx={{
          bgcolor: "var(--darkGreen)",
        }}
      >
        <Loading open={this.state.Isloading} />
        <Box sx={{ py: 2 }}>
          <Box sx={{ mb: 1 }}>
            <Typography
              sx={{
                color: "white",
                fontFamily: "LibreBaskerville",
                fontSize: { xs: 18, sm: 20, md: 24, lg: 28, xl: 32 },
                letterSpacing: 2,
                textAlign: "center",
              }}
            >
              {this.props.title}
            </Typography>
          </Box>
          <Box>
            <FormStep activeStep={this.state.FormStepCount} />
          </Box>
          <Box>
            <CustomTextField
              id="email"
              label="Email"
              value={this.state.Email}
              multiline={false}
              rows={1}
              disabled={this.state.DisabledEmail}
              required={true}
              onChange={(e) => this.handleOnChange(e.target.value, "Email")}
            />

            {this.state.IsVisibleOtp && (
              <CustomTextField
                id="otp"
                label="OTP"
                value={this.state.OTP}
                multiline={false}
                rows={1}
                required={true}
                onChange={(e) => this.handleOnChange(e.target.value, "OTP")}
              />
            )}

            {this.state.IsFormFieldVisible && (
              <Box>
                <CustomTextField
                  id="name"
                  label="Name"
                  value={this.state.Name}
                  multiline={false}
                  rows={1}
                  required={true}
                  onChange={(e) => this.handleOnChange(e.target.value, "Name")}
                />
                <Grid container spacing={{ xs: 0, md: 2 }}>
                  <Grid item xs={12} md={6}>
                    <CustomTextField
                      id="subject"
                      label="Subject"
                      value={this.state.Subject}
                      multiline={false}
                      rows={1}
                      required={true}
                      onChange={(e) =>
                        this.handleOnChange(e.target.value, "Subject")
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomTextField
                      id="company-name"
                      label="Company Name"
                      value={this.state.CompanyName}
                      multiline={false}
                      rows={1}
                      required={true}
                      onChange={(e) =>
                        this.handleOnChange(e.target.value, "CompanyName")
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={{ xs: 0, md: 2 }}>
                  <Grid item xs={12} md={6}>
                    <CustomTextField
                      id="company-website"
                      label="Company Website"
                      value={this.state.CompanyWebsite}
                      multiline={false}
                      rows={1}
                      onChange={(e) =>
                        this.handleOnChange(e.target.value, "CompanyWebsite")
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomTextField
                      id="phone"
                      label="Phone"
                      value={this.state.Phone}
                      multiline={false}
                      rows={1}
                      onChange={(e) =>
                        this.handleOnChange(e.target.value, "Phone")
                      }
                    />
                  </Grid>
                </Grid>
                <CustomTextField
                  id="message"
                  label="Your Message"
                  value={this.state.Message}
                  multiline={true}
                  rows={3}
                  required={true}
                  onChange={(e) =>
                    this.handleOnChange(e.target.value, "Message")
                  }
                />
              </Box>
            )}

            <Box sx={{ display: "inline-flex", gap: 1, width: "100%" }}>
              {!this.state.IsVisibleOtp && !this.state.IsFormFieldVisible ? (
                <CustomButton
                  variant="contained"
                  className={"btn-bg-green"}
                  fullWidth={true}
                  onClick={this.handleValidate}
                >
                  Validate
                </CustomButton>
              ) : null}

              {this.state.IsVisibleOtp && (
                <CustomButton
                  variant="contained"
                  className={"btn-bg-green"}
                  fullWidth={true}
                  onClick={this.handleVerify}
                >
                  Verify
                </CustomButton>
              )}

              {this.state.IsFormFieldVisible && (
                <CustomButton
                  variant="contained"
                  className={"btn-bg-green"}
                  fullWidth={true}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </CustomButton>
              )}
              <CustomButton
                variant="contained"
                className={"btn-bg-green"}
                fullWidth={true}
                onClick={this.resetFormData}
              >
                Reset
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Container>
    );
  }
}

export default ContactForm;
