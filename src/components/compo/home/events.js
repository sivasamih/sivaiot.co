import { Box } from "@mui/material";
import { EventListData } from "@/helper/helper";
import AnimatedPageWrapper from "@/components/animatedwrapper/animatepagewrapper";
import EventCard from "@/components/customcompo/cards/eventcard";

const Events = (props) => {
  if (EventListData.length === 0 || EventListData.length < 0) {
    return false;
  }

  let EventList = [
    // {
    //   id: 1,
    //   title: "Paris Hotel & Resort Las Vegas, U.S.A",
    //   description: "",
    //   image: "WWA-2024.png",
    //   URL: "",
    // },
    // {
    //   id: 2,
    //   title: "RheinMain CongressCenter Wiesbaden, Germany",
    //   description: "",
    //   image: "RFID-Tomorrow-Web-Banner.png",
    //   URL: "",
    // },
    // {
    //   id: 3,
    //   title: "Orange County Convention Center Florida, USA",
    //   description: "",
    //   image: "IAAPA-EXPO.png",
    //   URL: "",
    // },
    {
      id: 4,
      title: "Jio World Convention Centre Mumbai, India",
      description: "",
      image: "smarttech.png",
      URL: "",
    },
  ];
  return (
    <AnimatedPageWrapper AnimateDirrection={"left"}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(4,1fr)",
          },
          gap: 4,
          bgcolor: "transparent",
        }}
      >
        {EventList?.map((item, index) => {
          return (
            <div key={index}>
              <EventCard
                title={item.title}
                Desc={item.Desc}
                Image={item.image}
                URL={item.URL}
              />
            </div>
          );
        })}
      </Box>
    </AnimatedPageWrapper>
  );
};

export default Events;
