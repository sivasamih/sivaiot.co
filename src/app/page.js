import { Box, Container } from "@mui/material";
import * as FETCHAPI from "@/apis/fetchapi";
import * as APIURLS from "@/apis/apiconstant";
import CustomBox from "@/components/customcompo/box/CustomBox";
import ImageSlider from "@/components/compo/imageSlider/imageslider";
import TopContent from "@/components/compo/home/topContent";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import Families from "@/components/compo/home/families";
import NewsSection from "@/components/compo/home/newssection";
import Events from "@/components/compo/home/events";
import { StructureData } from "@/helper/structuredata";

async function getFamilyList() {
  let data = [];
  try {
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.GetProductFamily);
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {
    console.log("ex", ex);
  }
  return data;
}

const HomePage = async () => {
  const FamiliesList = await getFamilyList();
  const jsonLd = StructureData.HOME;
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ImageSlider />
      <Box sx={{ bgcolor: "var(--darkGreen)" }}>
        <Container>
          <CustomBox
            sx={{
              py: 3,
              textAlign: { xs: "justify", sm: "left" },
            }}
          >
            <TopContent />
          </CustomBox>
        </Container>
      </Box>
      {/* **********-********* */}
      <Box
        sx={{
          bgcolor: "#fff",
          border: "3rem solid var(--borderColor)",
          borderTopColor: "var(--borderColor)",
          borderRightColor: "var(--borderColor)",
          borderBottomColor: "var(--borderColor)",
          borderLeftColor: "white",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: "-3rem",
            left: "-3rem",
            width: "100%",
            height: "3rem",
            backgroundColor: "var(--borderColor)",
          },
        }}
      >
        <Container>
          <Box
            sx={{
              marginLeft: "-3rem",
              marginRight: "-3rem",
              bgcolor: "white",
              py: 2,
            }}
          >
            <PageHeading
              title={"Product Families"}
              component={"h2"}
            />
            <Box sx={{ p: 2 }}>
              <Families
                header={"Industries"}
                FamiliesList={FamiliesList}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* ************-********** */}
      <Box
        id={"news-section"}
        sx={{
          bgcolor: "white",
          borderLeft: "3rem solid var(--borderColor)",
          borderBottom: "3rem solid var(--borderColor)",
          borderRight: "3rem solid var(--white)",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: "-3rem",
            left: "-3rem",
            width: "3rem",
            height: "3rem",
            backgroundColor: "var(--borderColor)",
          },
        }}
      >
        <Container sx={{ pt: 2 }}>
          <Box
            sx={{
              marginLeft: "-3rem",
              marginRight: "-3rem",
              bgcolor: "white",
              py: 2,
            }}
          >
            <PageHeading
              title={"Latest News"}
              component={"h2"}
            />
            <Box
              sx={{
                p: 2,
                bgcolor: "white",
              }}
            >
              <NewsSection header={"News"} />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* ************-********** */}
      <Box
        sx={{
          borderRight: "3rem solid var(--borderColor)",
          borderLeft: "3rem solid transparent",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: "-3rem",
            right: "-3rem",
            width: "100%",
            height: "3rem",
            backgroundColor: "var(--borderColor)",
          },
          py: 2,
        }}
      >
        <Container>
          <Box
            sx={{
              marginLeft: "-3rem",
              marginRight: "-3rem",
              bgcolor: "white",
              py: 2,
            }}
          >
            <PageHeading
              title={"Upcoming Events"}
              component={"h2"}
            />
            <Box sx={{ p: 2 }}>
              <Events header={"Events"} />
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default HomePage;
