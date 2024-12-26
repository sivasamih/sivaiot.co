"use client";
import NavBar from "@/components/compo/navbar/page";
import Footer from "@/components/compo/footer/footer";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function CustomLayOut({ children }) {
  const pathName = usePathname();
  return (
    <>
      {!pathName.includes("/datasheet") && <NavBar />}
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
      {!pathName.includes("/datasheet") && <Footer />}
    </>
  );
}
