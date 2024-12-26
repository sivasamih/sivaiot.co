import { Box, Container } from "@mui/system";
import { List, ListItemText, Typography } from "@mui/material";
import Paragraph4 from "@/components/customcompo/Typo/paragraph4";
import LazyImage from "@/components/customcompo/customimage/customLazyImage";
import ChannelPartnerForm from "@/components/compo/channelpartner/channelparterform";

const ChannelPartner = () => {
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Container>
          {/* <PageHeading title={"FAQs"} /> */}
          <Box>
            <LazyImage
              src={"/img/other/Become-SIVA-RFID-Channel-Partner.jpg"}
              alt={"Become-SIVA-RFID-Channel-Partner"}
            />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              Here’s why you should consider becoming a SIVA IoT Channel Partner
            </Typography>
            <Paragraph4>
              As a family owned business, SIVA works at an arm’s length distance
              with its customers and understand that our success lies in the
              success of our channel partners. It’s with this thought we remain
              committed to our channel partners and work closely with them in
              achieving mutual success.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              Having a dedicated & strong technical team is not enough. Our
              passion and commitment to produce RFID labels & tags of the
              highest quality & performance standards is a very strong part of
              our ethos. We’re committed to producing nothing but the best
              quality & performing products.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              There’s a lot riding on us. Our channel partners’ reputation
              depends on how well our tags perform in the field and we want our
              partners to have complete confidence when they choose a RFID label
              & tag solution from SIVA.
            </Paragraph4>
          </Box>
          {/* ******* */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              That’s not all,
            </Typography>
            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                SIVA offers some of the fastest dispatch time scales in the
                industry
              </ListItemText>
              <ListItemText>
                Strong RF design team and a flexible production setup allow us
                to develop RFID label & tag solutions for custom applications in
                a speedy & cost effective manner.
              </ListItemText>
              <ListItemText>
                Channel partners get exclusive access to newly launched products
              </ListItemText>
              <ListItemText>
                Access to competitive & preferential pricing support, to enable
                winning of large projects.
              </ListItemText>
              <ListItemText>
                Highly technical & dedicated Sales team to help you every step
                of the way.
              </ListItemText>
            </List>
          </Box>
        </Container>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Container>
          <ChannelPartnerForm />
        </Container>
      </Box>
    </>
  );
};
export default ChannelPartner;
