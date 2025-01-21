"use client"
import { Box, ButtonGroup, Grid, List, Typography } from "@mui/material";
import CustomLink from "../../customcompo/footerLinkItem/Link";
import FooterTitle from "../../customcompo/Typo/footerTitle";
import CustomIconButton from "../../customcompo/button/CustomIconButton";
import Icons from "../../../constants/icon";
import { useEffect, useState } from "react";
import * as APIURLS from "../../../apis/apiconstant";
import * as FETCHAPI from "../../../apis/fetchapi";
import { scrollByID } from "../../../helper/helper";
import { Route_Path } from "../../../apis/api";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useMobileLandscape from "@/app/hooks/mobileLandscape";

const FooterContactInfo = (
  <Link
    href={`mailto: iotsales@sivagroup.co`}
    style={{ textDecoration: "none", color: "var(--green)", margin: "0 5px" }}
    title="mailto iotsales"
  >
    iotsales@sivagroup.co
  </Link>
);

const FooterContactInfoPolyInSheets = (
  <Typography
    variant="span"
    style={{ color: "var(--green)", margin: "0 5px" }}
  >
    rfidwb@sivagroup.co / +14077218489
  </Typography>
);

const updateContactInfoPage = [
  Route_Path.WB,
  Route_Path.RFID_ACCESS_CONTROL,
  Route_Path.THERMAL_RFID_EVENT_TICKETING,
  Route_Path.WB_WRISTBANDS,
  Route_Path.WB_CARD_KEYS_FOBS,
  Route_Path.WB_ULTIMOID_DIRECTTHERMAL,
  Route_Path.WB_ULTIMOID_ECODURA,
  Route_Path.WB_ULTIMOID_SILICON,
  Route_Path.WB_ULTIMOID_POLY,
  Route_Path.WB_ULTIMOID_FABRIC,
  Route_Path.WB_ULTIMOID_TYVEK,
  Route_Path.WB_POLY_IN_SHEETS,
];

const FooterLink = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [IsActive, setIsActive] = useState(false);
  const isMobileLandscape = useMobileLandscape()


  useEffect(() => {
    if (updateContactInfoPage.includes(pathname)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname]);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          xl={4}
        >
          <Box
            sx={{
              bgcolor: "var(--white)",
              height: "100%",
              p: { xs: 3, sm: 2 },
              borderTopLeftRadius: "5rem",
              borderBottomRightRadius: "5rem",
              position: "relative",
            }}
          >
            <FooterTitle
              sx={{
                borderBottom: "1px solid var(--blue)",
                pt: 2,
                color: "var(--blue)",
              }}
            >
              Need assistance in selecting the right tag ?
            </FooterTitle>
            <Box
              sx={{
                px: 1,
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                mt: { xs: 1, md: 2 },
              }}
            >
              <Typography
                sx={{
                  color: "var(--blue)",
                  fontSize: {
                    xs: "calc(0.6rem + 1vw)",
                    md: "calc(0.2rem + 1vw)",
                  },
                }}
              >
                SIVA strongly believes that its success lies in the success of
                its partners and offering a consultative approach to assist
                partners in selecting the right tag, is paramount to success.
                Please contact us at
                {/* <Link
                  href={`mailto:${email}`}
                  style={{ textDecoration: "none", color: "var(--green)" }}
                >
                   iotsales@sivagroup.co 
                  
                </Link> */}
                {IsActive ? FooterContactInfoPolyInSheets : FooterContactInfo}
                to schedule an in-depth discussion of your use case.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={isMobileLandscape?6:12}
          md={4}
          xl={4}
        >
          <Box>
            <FooterTitle sx={{ borderBottom: "1px solid var(--green)", pt: 2 }}>
              ABOUT SIVA
            </FooterTitle>
            <Box
              sx={{
                display: "grid",
                // pl: { xs: 4, md: 4 },
                gridTemplateColumns: {
                  xs: "auto",
                },
                "& li": {
                  my: 0,
                  p: 0.5,
                  textAlign: "center",
                },
              }}
            >
              <List sx={{ textAlign: "center", width: "100%" }}>
                <CustomLink
                  name={"About SIVA IoT"}
                  href={Route_Path.ABOUT}
                />
                <CustomLink
                  name={"Leadership"}
                  href={Route_Path.LEADERSHIP}
                />
                <CustomLink
                  name={"Careers at SIVA IoT"}
                  href={Route_Path.CAREERS}
                />
                <Typography
                  onClick={(e) => {
                    router.replace("/");
                    setTimeout(() => {
                      scrollByID("news-section");
                    }, 800);
                  }}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  News & Events
                </Typography>
                <CustomLink
                  name={"Blogs"}
                  href={Route_Path.BLOG}
                />

                <CustomLink
                  name={"Standard Terms & Conditions of Business"}
                  href={Route_Path.STANDER_TERMS_AND_CONDITIONS}
                />
                <CustomLink
                  name={"Terms of use"}
                  href={Route_Path.TERMS_OF_USE}
                />
                <CustomLink
                  name={"Privacy policy"}
                  href={Route_Path.PRIVACY_POLICY}
                />
                <CustomLink
                  name={"CSR policy"}
                  href={Route_Path.CSR_POLICY}
                />
                <CustomLink
                  name={"FAQs"}
                  href={Route_Path.FAQ}
                />
              </List>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={isMobileLandscape?6:12}
          md={4}
          xl={4}
        >
          <Box>
            <FooterTitle sx={{ borderBottom: "1px solid var(--green)", pt: 2 }}>
              CONTACT US
            </FooterTitle>

            <Box
              sx={{
                display: "grid",
                // pl: { xs: 4, md: 4 },
                gridTemplateColumns: {
                  xs: "auto",
                },
                "& li": {
                  my: 0,
                  p: 0.5,
                  textAlign: "center",
                },
              }}
            >
              <List sx={{}}>
                <CustomLink
                  name={"Contact Information"}
                  href={Route_Path.RFID_CONTACT}
                />
                <CustomLink
                  name={"Become a channel partner"}
                  href={Route_Path.BECOME_CHANNEL_PARTNER}
                />
              </List>
            </Box>
          </Box>
          <Box>
            <FooterTitle sx={{ borderBottom: "1px solid var(--green)", pt: 2 }}>
              FOLLOW US
            </FooterTitle>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ButtonGroup>
                <CustomIconButton
                  sx={{
                    color: "var(--white)",
                    "& svg": { fontSize: 35 },
                    // "&:hover svg": { color: "var(--blue)" },
                  }}
                >
                  <Link
                    href={"https://www.linkedin.com/company/sivagrp"}
                    target="_blank"
                    style={{ textDecoration: "none", color: "var(--white)" }}
                    title="linkedin"
                  >
                    {Icons.LinkedIn}
                  </Link>
                </CustomIconButton>

                <CustomIconButton
                  sx={{
                    color: "var(--red)",
                    "& svg": { fontSize: 35 },
                    "&:hover svg": { color: "var(--red)" },
                  }}
                >
                  <Link
                    href={
                      "https://www.youtube.com/channel/UCVqeFovs3fAmcrIHLmcQnJw"
                    }
                    target="_blank"
                    style={{ textDecoration: "none", color: "var(--red)" }}
                    title="youtube"
                  >
                    {Icons.YouTube}
                  </Link>
                </CustomIconButton>
              </ButtonGroup>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default FooterLink;
