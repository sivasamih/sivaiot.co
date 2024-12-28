"use client";
import NavBar from "@/components/compo/navbar/page";
import Footer from "@/components/compo/footer/footer";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Route_Path } from "@/apis/api";
import { useEffect } from "react";
import LoginProvider from "@/contextapi/loginuserprovider";
import GotQuestion from "@/components/compo/GotQuestion/gotquestions";

export default function CustomLayOut({ children }) {
  const pathName = usePathname();
  const hideNavBar = [
    Route_Path.PARTNERS,
    Route_Path.PARTNER_LOGIN,
    Route_Path.DATASHEET,
  ];
  const hideFooter = [
    Route_Path.PARTNERS,
    Route_Path.PARTNER_LOGIN,
    Route_Path.DATASHEET,
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathName]);

  return (
    <>
      <LoginProvider>
        {!hideNavBar.some((path) => pathName.includes(path)) && <NavBar />}
        <GotQuestion/>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          viewport={{
            once: true,
          }}
        >
          {children}
        </Box>
        {!hideFooter.some((path) => pathName.includes(path)) && <Footer />}
      </LoginProvider>
    </>
  );
}
