'use client'
import { Box, Button } from "@mui/material";
import AnimatedPageWrapper from "@/components/animatedwrapper/animatepagewrapper";
import React from "react";
import FamiliesCardSkeleton from "@/components/customcompo/skeleton/familiescardskelton";
import CardThree from "@/components/customcompo/cards/cardThree";
import CustomDesignLab from "@/components/customcompo/cards/customdesignlab";
import { NavigateNext } from "@mui/icons-material";
import MoreFamiliesButton from "@/components/customcompo/button/morefamiliesbutton";
import { Route_Path } from "@/apis/api";

const Families = (props) => {
  return (
    <>
      <AnimatedPageWrapper AnimateDirrection={"left"}>
        <Box
          sx={{
            "&:hover .more-families": {
              // visibility: "visible",
              opacity: 1,
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
                lg: "repeat(4,1fr)",
                xl: "repeat(4,1fr)",
              },
              gap: 4,
            }}
          >
            {props.FamiliesList.length > 0 ? (
              <>
                {props.FamiliesList.slice(0, 7).map((item, index) => {
                  return (
                    <CardThree
                      key={index}
                      path={item.UrlName}
                      IsExternalURL={item.IsExternalURL}
                      Images={item.Images}
                      Name={item.Name}
                      Description={item.Description}
                      alt={item.ImageAlt}
                    />
                  );
                })}
              </>
            ) : (
              <>
                {Array.from(new Array(7)).map((_, i) => {
                  return <FamiliesCardSkeleton key={i} />;
                })}
              </>
            )}

            <CustomDesignLab
              Title={"SIVA Design Lab"}
              Description={"RFID tags tailored for your specific project needs"}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              display: { xs: "none", xl: "block" },
              bottom: { xl: "22%" },
              right: { xl: "3.5%" },
              // opacity: 0,
              transition: "0.5s ease-in-out",
              transform: "scale(1.2)",
            }}
            className="more-families"
          >
            <MoreFamiliesButton />
          </Box>

          <Box
            sx={{
              display: { xs: "block", xl: "none" },
              textAlign: "center",
              mt: 5,
            }}
          >
            <Button
              variant="contained"
              endIcon={<NavigateNext />}
              href={Route_Path.PRODUCT_FAMILY}
            >
              View More Families
            </Button>
          </Box>
        </Box>
      </AnimatedPageWrapper>
    </>
  );
};
export default Families;
