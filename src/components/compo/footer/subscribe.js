import { Box, Container } from "@mui/material";
import FooterTitle from "../../customcompo/Typo/footerTitle";
import CustomButton from "../../customcompo/button/CustomButton";
import CustomTextField from "../../customcompo/custominputfield/textfield";
import { textAlign } from "@mui/system";

const Subscribe = () => {
  return (
    <>
      <Container sx={{ py: 3 }}>
        <FooterTitle color={"white"} sx={{textAlign:"left"}}>Subscribe to our newsletter </FooterTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 1, md: 4 },
          }}
        >
          <CustomTextField
            id="name"
            label="Name"
            // value={this.state.Name}
            multiline={false}
            rows={1}
            required={true}
            // onChange={(e) => this.handleOnChange(e.target.value, "Name")}
          />
          <CustomTextField
            id="email"
            label="Email"
            // value={this.state.Email}
            multiline={false}
            rows={1}
            required={true}
            // onChange={(e) => this.handleOnChange(e.target.value, "Email")}
          />
          <CustomButton
            variant="contained"
            fullWidth
            className={"btn-bg-green"}
            size="large"
            margin="dense"
          >
            Subscribe
          </CustomButton>
        </Box>
      </Container>
    </>
  );
};
export default Subscribe;
