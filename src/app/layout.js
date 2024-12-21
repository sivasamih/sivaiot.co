import "./globals.css";
import "./styles/color.css";
import "@/app/styles/fonts.css";
import NavBar from "@/components/compo/navbar/page";
import Footer from "@/components/compo/footer/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "RFID Beyond Boundaries - SIVA IoT",
  description:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-V31SM2QBTW" />
    </html>
  );
}
