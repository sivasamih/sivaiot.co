import { Box, Container } from "@mui/material";
import { EventListData } from "@/helper/helper";
import AnimatedPageWrapper from "@/components/animatedwrapper/animatepagewrapper";
import EventCard from "@/components/customcompo/cards/eventcard";
import SectionWrapper from "@/components/animatedwrapper/sectionWrapper";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
export const dynamic = "force-dynamic";

// ****** ContentType****
// (name: "Blog", value: 1) ,(name: "Event", value: 2 ) ,(name: "News", value: 3)

// *******Source*********
// (name: "SivaIot" value: 1), (name: "SIVA Group", value: 2) , (name: "IdenPro", value: 3),( name: "Tourni-s", value: 4 )


async function getEvents() {
  let reqData = {
    SourceID: 1,
    ContentType: 2
  };

  let data;
  try {
    let res = await FETCHAPI.Fetch(
      APIURLS.APIURL.GetPulsePosts,
      reqData
    );
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {
    console.log("ex", ex);
  }
  return data;
}

const Events = async () => {
  const EventList = await getEvents()
  if (!Array.isArray(EventList) || EventList.length <= 0) return false;

  // let EventList = [
  //   // {
  //   //   id: 1,
  //   //   title: "Paris Hotel & Resort Las Vegas, U.S.A",
  //   //   description: "",
  //   //   image: "WWA-2024.png",
  //   //   URL: "",
  //   // },
  //   // {
  //   //   id: 2,
  //   //   title: "RheinMain CongressCenter Wiesbaden, Germany",
  //   //   description: "",
  //   //   image: "RFID-Tomorrow-Web-Banner.png",
  //   //   URL: "",
  //   // },
  //   // {
  //   //   id: 3,
  //   //   title: "Orange County Convention Center Florida, USA",
  //   //   description: "",
  //   //   image: "IAAPA-EXPO.png",
  //   //   URL: "",
  //   // },
  //   {
  //     id: 4,
  //     title: "Jio World Convention Centre Mumbai, India",
  //     description: "",
  //     image: "smarttech.png",
  //     URL: "",
  //   },
  // ];
  return (
    <SectionWrapper borderRight={true} borderBottom={true}>
      <AnimatedPageWrapper AnimateDirrection={"left"}>
        <Container>
          <PageHeading
            title={"Upcoming Events"}
            component={"h2"}
          />
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
              p: 2
            }}
          >
            {EventList?.map((item, index) => {
              return (
                <div key={index}>
                  <EventCard
                    title={item.BlogTitle}
                    Desc={item.Brief}
                    Image={item.FeatureImage}
                    URL={item.PostUrl}
                    isExternal={item.IsExternalURL}
                  />
                </div>
              );
            })}
          </Box>
        </Container>
      </AnimatedPageWrapper>
    </SectionWrapper>

  );
};

export default Events;
