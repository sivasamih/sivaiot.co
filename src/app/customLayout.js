"use client";
import NavBar from "@/components/compo/navbar/page";
import Footer from "@/components/compo/footer/footer";
import { usePathname } from "next/navigation";

export default function CustomLayOut({ children }) {
  const pathName = usePathname();
  return (
    <>
      {!pathName.includes("/datasheet") && <NavBar />}
      {children}
      {!pathName.includes("/datasheet") && <Footer />}
    </>
  );
}
