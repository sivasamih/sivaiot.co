"use client";
import { Route_Path } from "@/apis/api";
import ContactInfo from "@/components/compo/contactus/contactinfo";
import PartnerNavBar from "@/components/compo/partners/partnerNavbar";
import CustomModal2 from "@/components/customcompo/modal/modal2";
import { getLocalStorage } from "@/helper/helper";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CustomListButton = styled(ListItemButton)((props) => ({
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "2px",
    backgroundColor: "white",
    transition: "0.3s ease-in-out",
    width: props.currentpath === props.url ? "100%" : "0",
  },
  "&:hover": {
    "&:after": {
      width: "100%",
    },
  },
}));

const ParterLayout = ({ children }) => {
  const PathName = usePathname();
  const [boxHeight, setBoxHeight] = useState(160);
  const [openContatInfo, setOpenContactInfo] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();

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
          <Grid
            container
            spacing={0}
            justifyContent={"stretch"}
          >
            <Grid
              item
              xs={2}
              sm={3}
              md={2.5}
              lg={2}
              position={"relative"}
              sx={{
                overflow: "hidden",
                bgcolor: "#42a5f5",
                background:
                  "linear-gradient(185deg, rgba(28,115,188,1) 0%, rgba(41,129,203,1) 58%, rgba(57,181,74,1) 100%)",
                display: { xs: "none", md: "block" },
                height: "100%",
              }}
            >
              <Box height={`calc(100vh - ${boxHeight}px)`}>
                <Box sx={{ px: 2 }}>
                  <List sx={{ color: "white" }}>
                    <CustomListButton
                      currentpath={PathName}
                      url={"/partners"}
                      onClick={() => {
                        // router.push("/partners");
                        router.push("/partners");
                      }}
                    >
                      <ListItemText primary="Products" />
                    </CustomListButton>
                    <Divider />
                    <CustomListButton
                      currentpath={PathName}
                      url={"/partners/rfid-product-families"}
                      onClick={() => {
                        router.push("/partners/rfid-product-families");
                      }}
                    >
                      <ListItemText primary="Product Families" />
                    </CustomListButton>
                    <Divider />
                    <CustomListButton
                      currentpath={PathName}
                      url={"/partners/nda"}
                      onClick={() => {
                        router.push("/partners/nda");
                      }}
                    >
                      <ListItemText primary="NDA" />
                    </CustomListButton>
                    <Divider />
                    <CustomListButton
                      currentpath={PathName}
                      url={"/partners/price-list"}
                      onClick={() => {
                        router.push("/partners/price-list");
                      }}
                    >
                      <ListItemText primary="Price List" />
                    </CustomListButton>
                    <Divider />
                  </List>
                </Box>
              </Box>
              {/* ************------------**************** */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  bgcolor: "#37b056ca",
                  boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    px: 4,
                    gap: 2,
                  }}
                >
                  {/* SIVA Group Link */}
                  <ListItem
                    sx={{
                      "--size": "6px",
                      p: 0,
                      pl: 1,
                      textAlign: "center",
                      position: "relative",
                      textDecoration: "none",
                      color: "black",
                      fontSize: "calc(.5rem + 0.5vw)",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        display: "block",
                        width: "var(--size)",
                        height: "var(--size)",
                        borderRadius: "50%",
                        bgcolor: "black",
                        top: "50%",
                        left: -5,
                        transform: "translate(0, -50%)",
                      },
                    }}
                    component={Link}
                    href="https://sivagroup.co/"
                    title="SIVA Group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SIVA Group
                  </ListItem>

                  {/* Contact Item */}
                  <ListItem
                    sx={{
                      "--size": "6px",
                      p: 0,
                      pl: 1,
                      cursor: "pointer",
                      position: "relative",
                      textAlign: "center",
                      color: "black",
                      fontSize: "calc(.5rem + 0.5vw)",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        display: "block",
                        width: "var(--size)",
                        height: "var(--size)",
                        borderRadius: "50%",
                        bgcolor: "black",
                        top: "50%",
                        left: -5,
                        transform: "translate(0, -50%)",
                      },
                    }}
                    onClick={() => setOpenContactInfo(true)}
                    title="Contact"
                  >
                    Contact
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={9.5}
              lg={10}
              height={`calc(100vh - ${boxHeight}px)`}
              overflow={"auto"}
              sx={{
                transition: "0.3s linear",
              }}
            >
              <Box>{children}</Box>
            </Grid>
          </Grid>
        </div>
      </AnimatePresence>

      <CustomModal2
        open={openContatInfo}
        onClose={() => {
          setOpenContactInfo(false);
        }}
        Header={"Contact Info"}
        Content={
          <Box sx={{ p: 2 }}>
            <ContactInfo />
          </Box>
        }
      />
    </>
  );
};

export default ParterLayout;
