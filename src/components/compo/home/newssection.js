import React from "react";
import { Box, Container } from "@mui/material";
import AnimatedPageWrapper from "@/components/animatedwrapper/animatepagewrapper";
import CardFour from "@/components/customcompo/cards/cardfour";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import SectionWrapper from "@/components/animatedwrapper/sectionWrapper";
export const dynamic = "force-dynamic";

// ****** ContentType****
// (name: "Blog", value: 1) ,(name: "Event", value: 2 ) ,(name: "News", value: 3)

// *******Source*********
// (name: "SivaIot" value: 1), (name: "SIVA Group", value: 2) , (name: "IdenPro", value: 3),( name: "Tourni-s", value: 4 )


async function getNews() {
  let reqData = {
    SourceID: 1,
    ContentType: 3
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

const NewsSection = async () => {
  let newsList = await getNews()
  if (!Array.isArray(newsList) || newsList.length < 1) return null;


  return (
    <>
      <SectionWrapper borderLeft={true} borderBottom={true}>
        <AnimatedPageWrapper>
          <Container>
            <PageHeading
              title={"Latest News"}
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
                p: 2,
                bgcolor: "white",
              }}
            >
              {newsList.map((item, index) => {
                return (
                  <div key={index}>
                    <CardFour
                      key={index}
                      Image={item.FeatureImage}
                      Title={item.BlogTitle}
                      url={item.PostUrl}
                      isExternal={item.IsExternalURL}
                    />
                  </div>
                );
              })}
            </Box>
          </Container>
        </AnimatedPageWrapper>
      </SectionWrapper>
    </>
  );
};

export default NewsSection;
