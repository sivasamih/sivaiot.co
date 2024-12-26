import { Grid } from "@mui/material";
import AnimatedPageWrapper from "../animatepagewrapper";
import ContactForm from "./contactform-old";

const ContactusGridTemplate = (props) => {
  return (
    <AnimatedPageWrapper>
      <Grid
        container
        spacing={0}
        justifyContent={"center"}
        alignContent={"center"}
        sx={{}}
      >
        

        <Grid
          item
          xs={12}
          md={6}
          className="flex-center-item-center"
          sx={{ bgcolor: "var(--darkGreen)" }}
        >
          <ContactForm title={props.title} />
        </Grid>
      </Grid>
    </AnimatedPageWrapper>
  );
};

export default ContactusGridTemplate;
