"use client";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

import * as Animation from "@/components/animation/animation";
import Icons from "@/constants/icon";
import BtnName from "@/constants/buttonName";
import { useState } from "react";
import { Navlist, scrollByID } from "../../../helper/helper";

import { AnimatePresence, motion } from "framer-motion";
import CustomBox from "@/components/customcompo/box/CustomBox";
import CustomIconButton from "@/components/customcompo/button/CustomIconButton";
import CustomDrawer from "@/components/customcompo/drawer/drawer";
import NavLinkButtons from "@/components/customcompo/menubutton/navLinkButtons";
import MenuButton from "@/components/customcompo/menubutton/menubuttons";
import CustomAlertMessage from "@/components/customcompo/notify/customalert";
import * as APIURLS from "@/apis/apiconstant";
import { Route_Path } from "@/apis/api";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          position: { xs: "sticky", md: "inherit" },
          top: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        id="NavBar"
      >
        <CustomAlertMessage />
        <Box sx={{ bgcolor: "#299E78", height: 10 }}>&nbsp;</Box>

        <Box>
          <CustomBox className={"flex-between-item-center p1"}>
            <Box
              component={Link}
              href={"/"}
              sx={{
                ml: { xs: 2, sm: 4, md: 5, lg: 8 },
                "& img": { width: { xs: "80%", md: "100%" } },
              }}
              title="sivaiot.co"
            >
              <img
                src={APIURLS.BASE_PATH.OthersImage + "logo.png"}
                width={"100%"}
                alt="SIVA IoT"
              />
            </Box>

            <CustomBox sx={{ display: { xs: "block", md: "none" } }}>
              <AnimatePresence mode="wait">
                {openDrawer ? (
                  <motion.div
                    key="close"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={Animation.DrawerOpenCloseBtn}
                    transition={{ duration: 0.3 }}
                  >
                    <IconButton onClick={(e) => setOpenDrawer(false)}>
                      {Icons.Close}
                    </IconButton>
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={Animation.DrawerOpenCloseBtn}
                    transition={{ duration: 0.3 }}
                  >
                    <IconButton onClick={(e) => setOpenDrawer(true)}>
                      {Icons.Menu}
                    </IconButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </CustomBox>

            <CustomBox
              className={"text-center"}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                pr: 8,
              }}
            >
              <Button
                className={"btn-bg-green border-redius-none"}
                variant="contained"
                component={Link}
                sx={{ border: 0 }}
                // onClick={() => navigate("/partners")}
                href={Route_Path.PARTNER_LOGIN}
                target={"_blank"}
                title="partners"
              >
                {BtnName.PARTNER_LOGIN}
              </Button>
              <ButtonGroup
                size="small"
                sx={{ display: { xs: "none", md: "inline-flex" } }}
              >
                <CustomIconButton
                  sx={{
                    color: "var(--allBtnColor)",
                    "&:hover svg": { color: "var(--blue)" },
                  }}
                >
                  {" "}
                  <Link
                    href={"https://www.linkedin.com/company/sivagrp"}
                    target="_blank"
                    title="linkedin"
                    style={{
                      textDecoration: "none",
                      color: "var(--allBtnColor)",
                    }}
                  >
                    {Icons.LinkedIn}
                  </Link>
                </CustomIconButton>

                <CustomIconButton
                  sx={{
                    color: "var(--allBtnColor)",
                    "&:hover svg": { color: "var(--red)" },
                  }}
                >
                  {" "}
                  <Link
                    href={
                      "https://www.youtube.com/channel/UCVqeFovs3fAmcrIHLmcQnJw"
                    }
                    target="_blank"
                    title="youtube"
                    name={"youtube"}
                    style={{
                      textDecoration: "none",
                      color: "var(--allBtnColor)",
                    }}
                  >
                    {Icons.YouTube}
                  </Link>
                </CustomIconButton>
              </ButtonGroup>
            </CustomBox>
          </CustomBox>
        </Box>
      </Box>

      <AppBar sx={{ top: 0, position: { xs: "initial", md: "sticky" } }}>
        <Box
          sx={{
            bgcolor: "var(--blue)",
            display: { xs: "none", md: "block" },
          }}
        >
          <Container>
            <List
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "var(--white)",
                p: 0,
                "& .MuiButtonBase-root": {
                  py: 0.5,
                  whiteSpace: "nowrap",
                },
                "& .MuiButtonBase-root:hover": {
                  transition: "0.5s all",
                  bgcolor: "var(--green)",
                },
                "& span": {
                  fontFamily: "LucidaGrande",
                  fontSize: { xs: 10, sm: 10, md: 15, xl: 18 },
                  textAlign: "center",
                },
              }}
            >
              <NavLinkButtons
                name={Navlist[0].name}
                path={Navlist[0].path}
                type="link"
              />

              <NavLinkButtons
                name={Navlist[2].name}
                path={Navlist[2].path}
                type="link"
              />
              <NavLinkButtons
                name={Navlist[3].name}
                path={Navlist[3].path}
                type="link"
              />
              <NavLinkButtons
                name={Navlist[1].name}
                path={Navlist[1].path}
                type="link"
              />
              <NavLinkButtons
                name={Navlist[4].name}
                path={Navlist[4].path}
                type="button"
                onClick={(e) => {
                  router.replace("/");
                  setTimeout(() => {
                    scrollByID("news-section");
                  }, 800);
                }}
              />

              <MenuButton
                name={Navlist[5].name}
                menuList={[
                  { name: "About SIVA IoT", url: Route_Path.ABOUT },
                  { name: "Leardship", url: Route_Path.LEADERSHIP },
                  { name: "Blogs", url: Route_Path.BLOG },
                  { name: "Careers", url: Route_Path.CAREERS },
                ]}
                type="link"
              />

              <NavLinkButtons
                name={Navlist[8].name}
                path={Navlist[8].path}
                type="link"
              />
            </List>
          </Container>
        </Box>
      </AppBar>

      <CustomDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        position="top"
        Content={
          <>
            <List
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 0,
                m: 0,
                overflow: "hidden",
                zIndex: 99,
                "& .MuiButtonBase-root": {
                  // textTransform: "uppercase",
                  width: "100%",
                  fontWeight: "bold",
                  m: 0,
                  overflow: "hidden",
                  color: "var(--blue)",
                  "& span": {
                    fontFamily: "LibreBaskerville",
                    fontSize: { xs: 12, sm: 10, md: 11, xl: 14 },
                    textWrap: "wrap",
                    fontWeight: "bold",
                    letterSpacing: 1,
                  },
                  "&:hover": {
                    bgcolor: "var(--green)",
                    color: "var(--white)",
                  },
                  "&:hover svg": {
                    color: "var(--white)",
                  },
                },
              }}
            >
              {Navlist.map((item, index) => (
                <Box
                  component={motion.div}
                  key={index}
                  variants={Animation.ListItemVariants}
                  initial="hidden"
                  animate={openDrawer ? "visible" : "hidden"}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    damping: 10,
                    stiffness: 50,
                  }}
                  sx={{
                    width: "100%",
                    m: 0,
                    height: "100%",
                    p: 0,
                    display: item.path === "/media-room" ? "none" : "block",
                  }}
                >
                  <ListItemButton
                    component={Link}
                    href={item?.path}
                    target={item.path === "/partners" ? "_blank" : "_self"}
                    onClick={() => setOpenDrawer(false)}
                    title={item.name}
                    sx={
                      ({ height: "100%", pl: 4 },
                      pathname === "/" + item.path
                        ? {
                            bgcolor: "#39b54a",
                            "& span , svg": { color: "white" },
                          }
                        : null)
                    }
                  >
                    <ListItemIcon
                      sx={{
                        "& svg": { fontSize: 30 },
                        rotate: "0deg",
                        color: "#005aab",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <Typography>{item.name}</Typography>
                  </ListItemButton>
                </Box>
              ))}
            </List>
          </>
        }
      />
    </>
  );
};
export default NavBar;
