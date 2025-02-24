"use client";
import { AppBar, Avatar, Box, IconButton, List, ListItemButton, Stack, Toolbar, Typography } from "@mui/material";
import * as Animation from "@/components/animation/animation";
import * as APIURLS from "@/apis/apiconstant";
import { PartnerSideBarButtonList, removeLocalStorage } from "@/helper/helper";
import { useEffect, useState } from "react";
import { useLoginData } from "@/contextapi/loginuserprovider";
import CustomAlertMessage from "@/components/customcompo/notify/customalert";
import { usePathname, useRouter } from "next/navigation";
import { Route_Path } from "@/apis/api";
import Link from "next/link";
import { Close, Menu } from "@mui/icons-material";
import CustomDrawer from "@/components/customcompo/drawer/drawer";
import { motion } from "framer-motion";

const PartnerNavBar = () => {
  const [userData, setUserData] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  let IOT_PU = useLoginData();
  const userName = IOT_PU?.UserName || "Guest";
  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  const pathname = usePathname();

  useEffect(() => {
    if (IOT_PU) {
      setUserData(IOT_PU);
    } else {
      setUserData(null);
    }
  }, [pathname, IOT_PU]);

  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          position: { xs: "sticky", md: "inherit" },
          top: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        id="NavBar">
        {!pathname.includes(Route_Path.PARTNER_LOGIN) && <CustomAlertMessage />}
        <Box height={10} sx={{ bgcolor: "#299E78" }}>
          &nbsp;
        </Box>
        <AppBar
          sx={{
            bgcolor: "white",
            position: "sticky",
            px: { xs: 0, md: 4 },
            py: 2,
            top: 0,
            zIndex: 1000,
          }}>
          <Toolbar>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                onClick={(e) => {
                  setOpenDrawer(!openDrawer);
                }}>
                {openDrawer ? <Close /> : <Menu />}
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Box component={Link} href={"/partners"}>
                <Box
                  component={"img"}
                  sx={{ width: { xs: "50%", sm: "30%", md: "10%" } }}
                  src={APIURLS.BASE_PATH.OthersImage + "logo-1.jpg"}
                  alt="SIVA's Partners"
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* <Typography
                sx={{
                  fontSize: {
                    xs: "calc(1.5rem + 1vw)",
                    md: "calc(0.8rem + 1vw)",
                  },
                  fontWeight: "bold",
                  letterSpacing: 2,
                  color: "black",
                }}>
                Partner
              </Typography> */}

              {userData ? (
                <>
                  {" "}
                  <Box sx={{ color: "var(--headerColor)" }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Avatar
                        sx={{
                          width: { xs: 30, md: 40 },
                          height: { xs: 30, md: 40 },
                          bgcolor: "var(--green)",
                          fontSize: { xs: 16, md: 20 },
                          fontWeight: "bold",
                          color: "white",
                          letterSpacing: 1,
                        }}>
                        {userInitials}
                      </Avatar>
                      <Box sx={{ textWrap: "nowrap", textAlign: "left" }}>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ letterSpacing: 1, fontSize: { xs: "calc(0.5rem + 0.5vw)", md: "calc(0.2rem + 0.5vw)" } }}>
                          Welcome !
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ letterSpacing: 1, fontSize: { xs: "calc(0.7rem + 0.5vw)", md: "calc(0.4rem + 0.5vw)" } }}>
                          {userName}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                  <Typography
                    sx={{
                      color: "var(--green)",
                      textTransform: "capitalize",
                      textDecoration: "none",
                      ":hover": {
                        textDecoration: "underline",
                      },
                    }}
                    component={Link}
                    onClick={() => {
                      removeLocalStorage();
                      // router.push(Route_Path.PARTNER_LOGIN);
                    }}
                    href={Route_Path.PARTNER_LOGIN}>
                    Logout
                  </Typography>
                </>
              ) : null}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

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
              }}>
              {PartnerSideBarButtonList?.map((item, index) => (
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
                  }}>
                  <ListItemButton
                    component={Link}
                    href={item?.url}
                    onClick={() => setOpenDrawer(false)}
                    title={item.name}
                    sx={
                      ({ height: "100%", pl: 4 },
                      pathname === item.url
                        ? {
                            bgcolor: "#39b54a",
                            "& span , svg": { color: "white" },
                          }
                        : null)
                    }>
                    <Typography>{item.title}</Typography>
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
export default PartnerNavBar;
