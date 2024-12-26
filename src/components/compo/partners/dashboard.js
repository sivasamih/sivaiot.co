import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../../helper/helper";
import { Box, Container } from "@mui/system";
import moment from "moment/moment";
import { Typography } from "@mui/material";
import { Campaign } from "@mui/icons-material";

const Dashboard = () => {
  const [NDA_Notice, setNDA_Notice] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let IOT_PU = getLocalStorage();
    if (IOT_PU) {
      getNDAWillExpiring(IOT_PU);
    } else {
      navigate("/");
    }
  }, []);

  let getNDAWillExpiring = (IOT_PU) => {
    let NDAList = IOT_PU["NDAList"] ? IOT_PU["NDAList"] : [];
    let currentDate = new Date();

    try {
      let dateAfter30Days = new Date(currentDate);
      dateAfter30Days.setDate(currentDate.getDate() + 30);
      let formattedDateAfter30Days =
        moment(dateAfter30Days).format("YYYY-MM-DD");
      let formattedCurrentDate = moment(currentDate).format("YYYY-MM-DD");

      const calculateRemainingDays = (endDate) => {
        let expirationDate = moment(endDate);
        let currentDateMoment = moment(currentDate);
        return expirationDate.diff(currentDateMoment, "days");
      };

      let NDAWillExpiring = NDAList.some((item) => {
        let itemDate = moment(item.EndDate).format("YYYY-MM-DD");
        return (
          moment(itemDate).isBefore(formattedDateAfter30Days) &&
          moment(itemDate).isAfter(formattedCurrentDate) &&
          item.IsActive === true
        );
      });

      let nearestExpiringNDA = NDAList.find((item) => {
        let itemDate = moment(item.EndDate).format("YYYY-MM-DD");
        return (
          moment(itemDate).isBefore(formattedDateAfter30Days) &&
          moment(itemDate).isAfter(formattedCurrentDate) &&
          item.IsActive === true
        );
      });

      let NDAIsExpired = NDAList.some((item) => {
        let itemDate = moment(item.EndDate).format("YYYY-MM-DD");
        return (
          moment(itemDate).isBefore(formattedCurrentDate) &&
          item.IsActive === true
        );
      });

      let iSNDAsAssign = NDAList.some((item) => item.IsActive === true);

      if (NDAWillExpiring && nearestExpiringNDA) {
        let remainingDays = calculateRemainingDays(nearestExpiringNDA.EndDate);
        setNDA_Notice(
          remainingDays === 0
            ? `NDA will expire today`
            : `NDA will expire within ${remainingDays} days`
        );
        return false;
      }

      if (NDAIsExpired) {
        setNDA_Notice("NDA have already expired");
        return false;
      }
      if (NDAList.length > 0 && !iSNDAsAssign) {
        setNDA_Notice("NDA not yet signed");
        return false;
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <Box sx={{ bgcolor: "var(--borderColor)" }}>
        <Container sx={{ overflow: "hidden" }}>
          {NDA_Notice && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 1,
                animation: {
                  xs: "marquee1 5s linear infinite",
                  md: "marquee 15s linear infinite",
                },
                "@keyframes marquee": {
                  "0%": { transform: "translateX(0%)" },
                  "50%": { transform: "translateX(75%)" },
                  "100%": { transform: "translateX(0%)" },
                },
                "@keyframes marquee1": {
                  "0%": { transform: "translateX(0%)" },
                  "50%": { transform: "translateX(40%)" },
                  "100%": { transform: "translateX(0%)" },
                },
              }}>
              <Campaign
                sx={{
                  color: "red",
                  rotate: "-25deg",
                  fontSize: {
                    xs: "calc(1.2rem + 1vw)",
                    md: "calc(1rem + 1vw)",
                  },
                  animation: "blink 1s infinite ease-in-out",
                  "@keyframes blink": {
                    "0%": { opacity: 1 },
                    "100%": { opacity: 0 },
                  },
                }}
              />
              <Typography
                component={"span"}
                sx={{
                  fontSize: {
                    xs: "calc(0.8rem + 1vw)",
                    md: "calc(0.5rem + 1vw)",
                  },
                }}>
                {NDA_Notice}
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
      <Outlet />
    </>
  );
};
export default Dashboard;
