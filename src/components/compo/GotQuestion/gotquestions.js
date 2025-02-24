"use client";
import { Card, Fab, Typography, Button, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import { Close, HeadsetMic } from "@mui/icons-material";
import CustomTextField from "@/components/customcompo/custominputfield/textfield";
import { validateEmail } from "@/helper/helper";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import SnackBar from "@/components/customcompo/snackbar/snackbar";
import * as FETCHAPI from "@/apis/fetchapi";
import * as APIURLS from "@/apis/apiconstant";
import { useLoginData } from "@/contextapi/loginuserprovider";
import useMobileLandscape from "@/app/hooks/mobileLandscape";

export default function GotQuestion(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [IsEmailValidate, setIsEmailValidate] = useState(false);
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("info");
  const IOT_PU = useLoginData();

  const isMobileLandscape = useMobileLandscape();

  const showSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    if (IOT_PU) {
      setName(IOT_PU.UserName);
      setEmail(IOT_PU.EmailID);
      setIsEmailValidate(true);
      setCompanyName("Email")
    } else {
      setName("");
      setEmail("");
      setIsEmailValidate(false);
      setCompanyName("")
    }
  }, [isOpen]);

  const handleEmailVerify = async () => {
    if (!name) {
      showSnackbar("Please enter your name", "error");
      return;
    }
    if (!email) {
      showSnackbar("Please enter your email", "error");
      return;
    }
    if (!validateEmail(email)) {
      showSnackbar("Please enter valid email", "error");
      return;
    }
    if (name && email) {
      let reqData = {
        EmailID: email,
        Name: "",
      };
      setIsLoading(true);
      let res = await FETCHAPI.Fetch(APIURLS.APIURL.Registration, reqData);
      if (res.status === 200) {
        setIsLoading(false);
        showSnackbar("One Time Password sent to your email.", "success");
        setIsOtpVisible(true);
      } else {
        showSnackbar("Something went wrong, please try again later.", "error");
        setIsLoading(false);
      }
    }
  };

  const handleOtpValidate = async () => {
    if (otp === "") {
      showSnackbar("Please enter your One Time Password.", "error");
      return;
    }
    let reqData = {
      EmailID: email,
      OTP: otp,
    };
    setIsLoading(true);
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.RegistrationValid, reqData);
    if (res.status === 200) {
      showSnackbar(
        "Email verified successfully.Please Fill below details.",
        "success"
      );
      setIsEmailValidate(true);
      setIsOtpVisible(false);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      showSnackbar("Invalid One Time Password", "error");
    }
  };

  const handleSubmit = async () => {
    if (!name || !companyName || !message) {
      showSnackbar("Please fill in all the required fields.", "error");
      return;
    }
    let reqData = {
      WebsiteData: {
        SourceID: 2,
        TypeID: 1,
        isChecked: false,
        JsonData: JSON.stringify({
          email: email,
          name: name,
          subject: "Contact us page",
          company: companyName,
          phone: "",
          message: message,
          company_website: "",
          visitingPage: window.location.href,
        }),
      },
    };
    setIsLoading(true);

    let res = await FETCHAPI.Fetch(
      APIURLS.APIURL.Add_Update_WebsiteData,
      reqData
    );
    if (res.status === 200) {
      setIsLoading(true);
      setTimeout(() => {
        showSnackbar("Your details has been submitted.", "success");
        setIsLoading(false);
        handleReset();
        setIsOpen(false);
      }, 1000);
    }
  };

  const handleReset = () => {
    try {
      if (IOT_PU) {
        setIsOtpVisible(false);
        setOtp("");
        setCompanyName("");
        setMessage("");
      } else {
        setIsEmailValidate(false);
        setIsOtpVisible(false);
        setEmail("");
        setOtp("");
        setName("");
        setCompanyName("");
        setMessage("");
      }
    } catch (ex) { }
  };
  const cardVariants = {
    open: {
      // clipPath: `circle(550px at 100% 100%)`,
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 30,
        restDelta: 2,
      },
    },
    closed: {
      // clipPath: "circle(0px at 100% 100%)",
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 30,
        restDelta: 2,
      },
    },
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
          position: "fixed",
          bottom: "4%",
          right: "2%",
          zIndex: 1100,
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {/* <ClickAwayListener onClickAway={() => setIsOpen(false)}> */}
        <motion.div
          initial={false}
          animate={isOpen ? { marginBottom: "20px" } : { marginBottom: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              display: "flex",
              mb: isOpen ? -4 : 0,
              mr: 0,
              gap: 1,
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            {!isOpen && (
              <Button
                onClick={() => setIsOpen((prev) => !prev)}
                variant="text"
                sx={{
                  p: 0.5,
                  px: 1,
                  border: "1px solid var(--blue)",
                  borderRadius: 10,
                  display: { xs: "none", md: "block" },

                  color: "var(--white)",
                  textTransform: 'inherit',
                }}
                style={{ backgroundColor: "var(--blue)" }}
              >
                Got a questions?
              </Button>
            )}
            <Fab
              color="primary"
              aria-label="notify"
              onClick={() => setIsOpen((prev) => !prev)}
              size={isMobileLandscape ? "small" : "large"}
            >
              {isOpen ? (
                <Close />
              ) : (
                <HeadsetMic sx={{ fontSize: "calc(1rem + 1vw)" }} />
              )}
            </Fab>
          </Box>
          <AnimatePresence>
            {isOpen && (
              <Card
                component={motion.div}
                variants={cardVariants}
                initial="closed"
                animate="open"
                exit="closed"
                sx={{
                  mr: 2,
                  ml: 2,
                  boxShadow: "0 0 5px 1px #9d9d9ed5",
                  p: 0,
                  maxWidth: { xs: isMobileLandscape ? '100%' : 280, md: 300 },
                  overflow: "hidden",
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography
                    sx={{
                      borderBottom: 1,
                      mb: 1,
                      fontSize: "calc(0.5rem + 1vw)",
                    }}
                  >
                    Got a question?
                  </Typography>
                  <Typography>
                    Ask your question and we will get back to you as soon as
                    possible.
                  </Typography>
                  <Box sx={{ display: isMobileLandscape ? "grid" : 'block', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 1 }}>
                    <CustomTextField
                      variant="outlined"
                      name="Name"
                      label="Name"
                      required
                      value={name}
                      disabled={IsEmailValidate || isOtpVisible}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {!isOtpVisible && (
                      <CustomTextField
                        variant="outlined"
                        name="Email"
                        label="Email"
                        required
                        value={email}
                        disabled={IsEmailValidate}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{ pr: 0, mr: -1 }}
                            >
                              {!IsEmailValidate && (
                                <Button
                                  size="small"
                                  variant="outlined"
                                  onClick={handleEmailVerify}
                                >
                                  Verify
                                </Button>
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    {isOtpVisible && (
                      <CustomTextField
                        variant="outlined"
                        name="OTP"
                        label="One Time Password"
                        required
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{ pr: 0, mr: -1 }}
                            >
                              <Button
                                size="small"
                                variant="outlined"
                                onClick={handleOtpValidate}
                              >
                                Validate
                              </Button>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    {!IOT_PU['UserName'] && <CustomTextField
                      required
                      variant="outlined"
                      label="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      disabled={!IsEmailValidate}
                    />}
                    <CustomTextField
                      required
                      variant="outlined"
                      multiline
                      rows={isMobileLandscape ? 1 : 3}
                      size="small"
                      label="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={!IsEmailValidate}
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      size="small"
                      sx={{ mt: 1 }}
                      onClick={handleSubmit}
                      disabled={!IsEmailValidate}
                    >
                      Submit
                    </Button>{" "}
                    <Button
                      variant="contained"
                      fullWidth
                      size="small"
                      sx={{ mt: 1 }}
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  </Box>
                </Box>
              </Card>
            )}
          </AnimatePresence>
        </motion.div>
        {/* </ClickAwayListener> */}
      </Box>
    </>
  );
}
