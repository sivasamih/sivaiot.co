import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import CardEight from "@/components/customcompo/cards/cardeight";

const RFIDAccessControl = () => {
  return (
    <>
      <Box>
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography
              sx={{
                bgcolor: "#F1F8E9",
                textAlign: "center",
                fontSize: {
                  xs: "calc(0.8rem + 1vw)",
                  md: "calc(1.3rem + 1vw)",
                },
                color: "var(--headerColor)",
                fontWeight: "bold",
                p: 1,
              }}
              component={"h1"}>
              Leisure & Entertainment
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "auto", md: "repeat(2,1fr)" },
              px: { xs: 2, md: 5 },
              gap: 5,
              my: 10,
            }}>
            {[
              {
                id: 1,
                name: "RFID Wristbands, Cards & Key Fobs",
                image: "images/RFID-Wristbands.jpg",
                url: "/wb",
                IsExternalURL: "false",
              },
              {
                id: 2,
                name: "Smart NFC Ticketing",
                image: "images/RFID-Event-ticketing.png",
                url: "/thermal-rfid-event-ticketing",
                IsExternalURL: "false",
              },
            ].map((item, index) => {
              return (
                <CardEight
                  key={index}
                  name={item.name}
                  url={item.url}
                  image={item.image}
                  IsExternalURL={item.IsExternalURL}
                />
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RFIDAccessControl;
