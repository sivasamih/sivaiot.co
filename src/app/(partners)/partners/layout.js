"use client";
import { Route_Path } from "@/apis/api";
import PartnerNavBar from "@/components/compo/partners/partnerNavbar";
import PartnerSideBar from "@/components/compo/partners/sidebar";
import WarningMessage from "@/components/compo/partners/WarningMessage";
import NavLinkButtons from "@/components/customcompo/menubutton/navLinkButtons";
import { getLocalStorage, Navlist } from "@/helper/helper";
import { AppBar, Box, Grid, List, Toolbar, } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";



const ParterLayout = ({ children }) => {
  const PathName = usePathname();
  const [boxHeight, setBoxHeight] = useState(160);
  const navRef = useRef(null);

  useEffect(() => {
    const IOT_PU = getLocalStorage();
    if (!IOT_PU) {
      redirect(Route_Path.PARTNER_LOGIN);
    }
  }, [PathName]);

  const updateBoxHeight = () => {
    setTimeout(() => {
      if (navRef.current) {
        setBoxHeight(navRef.current?.offsetHeight);
      }
    }, 150);
  };

  useEffect(() => {
    updateBoxHeight();
    document.addEventListener("click", updateBoxHeight);
    document.addEventListener("keydown", updateBoxHeight);

    return () => {
      document.addEventListener("click", updateBoxHeight);
      document.addEventListener("keydown", updateBoxHeight);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        <div>
          <div ref={navRef}>
            <PartnerNavBar />
          </div>
          <Grid container spacing={0} justifyContent={"stretch"}>
            <Grid item xs={2} sm={3} md={2.5} lg={2} position={"relative"}
              sx={{
                overflow: "hidden",
                bgcolor: "#42a5f5",
                background: "linear-gradient(185deg, rgba(28,115,188,1) 0%, rgba(41,129,203,1) 58%, rgba(57,181,74,1) 100%)",
                display: { xs: "none", md: "block" },
                height: "100%",
              }}>
              <Box height={`calc(100vh - ${boxHeight}px)`}>
                <PartnerSideBar />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9.5} lg={10} height={`calc(100vh - ${boxHeight}px)`} overflow={"auto"}
              sx={{
                transition: "0.3s linear",
              }}>
              {/* <Box>
                <AppBar position="static" sx={{ p: 0 }} >
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
                      name={"Home"}
                      path={"/partners"}
                      type="link"
                    />
                    <NavLinkButtons
                      name={"News & Event"}
                      path={"/partners"}
                      type="link"
                    />
                     <NavLinkButtons
                      name={"Contact"}
                      path={"/partners"}
                      type="link"
                    />
                  </List>
                </AppBar>
              </Box> */}
              <WarningMessage />
              <Box>{children}</Box>
            </Grid>
          </Grid>
        </div>
      </AnimatePresence>

    </>
  );
};

export default ParterLayout;
