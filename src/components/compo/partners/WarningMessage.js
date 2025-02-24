"use client";
import { Route_Path } from "@/apis/api";
import { getLocalStorage } from "@/helper/helper";
import { Campaign } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import moment from "moment";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const WarningMessage = () => {
  const [NDA_Notice, setNDA_Notice] = useState("");
  const PathName = usePathname();

  useEffect(() => {
    const IOT_PU = getLocalStorage();
    if (!IOT_PU) {
      redirect(Route_Path.PARTNER_LOGIN);
    } else {
      getNDAWillExpiring(IOT_PU);
    }
  }, [PathName]);

  let getNDAWillExpiring = (IOT_PU) => {
    let NDAList = IOT_PU["NDAList"] ? IOT_PU["NDAList"] : [];
    let currentDate = new Date();

    try {
      let dateAfter30Days = new Date(currentDate);
      dateAfter30Days.setDate(currentDate.getDate() + 30);
      let formattedDateAfter30Days = moment(dateAfter30Days).format("YYYY-MM-DD");
      let formattedCurrentDate = moment(currentDate).format("YYYY-MM-DD");

      const calculateRemainingDays = (endDate) => {
        let expirationDate = moment(endDate);
        let currentDateMoment = moment(currentDate);
        return expirationDate.diff(currentDateMoment, "days");
      };

      let NDAWillExpiring = NDAList.some((item) => {
        let itemDate = moment(item.EndDate).format("YYYY-MM-DD");
        return moment(itemDate).isBefore(formattedDateAfter30Days) && moment(itemDate).isAfter(formattedCurrentDate) && item.IsActive === true;
      });

      let nearestExpiringNDA = NDAList.find((item) => {
        let itemDate = moment(item.EndDate).format("YYYY-MM-DD");
        return moment(itemDate).isBefore(formattedDateAfter30Days) && moment(itemDate).isAfter(formattedCurrentDate) && item.IsActive === true;
      });

      let NDAIsExpired = NDAList.some((item) => {
        let itemDate = moment(item.EndDate).format("YYYY-MM-DD");
        return moment(itemDate).isBefore(formattedCurrentDate) && item.IsActive === true;
      });

      let iSNDAsAssign = NDAList.some((item) => item.IsActive === true);

      if (NDAWillExpiring && nearestExpiringNDA) {
        let remainingDays = calculateRemainingDays(nearestExpiringNDA.EndDate);
        setNDA_Notice(remainingDays === 0 ? `Non-Disclosure Agreement will expire today` : `Non-Disclosure Agreement will expire within ${remainingDays} days`);
        return false;
      }

      if (NDAIsExpired) {
        setNDA_Notice("Non-Disclosure Agreement expired");
        return false;
      }
      if (NDAList.length > 0 && !iSNDAsAssign) {
        setNDA_Notice("Non-Disclosure Agreement not yet signed");
        return false;
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  if (!NDA_Notice) return null;

  return (
    <>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 1,
            overflow: "hidden",
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
      </Box>
    </>
  );
};
export default WarningMessage;
