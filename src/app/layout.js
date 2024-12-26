import "./globals.css";
import "./styles/color.css";
import "@/app/styles/fonts.css";
import NavBar from "@/components/compo/navbar/page";
import Footer from "@/components/compo/footer/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import CustomLayOut from "./customLayout";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "RFID Beyond Boundaries - SIVA IoT",
  description:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
  keywords:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.HOME,
    title: "RFID Beyond Boundaries - SIVA IoT",
    description:
      "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
    images: [
      {
        url: `https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`,
        width: 1200,
        height: 630,
        alt: "sivaiot.co",
      },
    ],
  },
  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    site: "@sivaiot.co",
    creator: "@sivaiot.co",
    title: "RFID Beyond Boundaries - SIVA IoT",
    description:
      "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
    images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.HOME,
  },
  // Additional Metadata
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <CustomLayOut>{children}</CustomLayOut>
      </body>
      <GoogleAnalytics gaId="G-V31SM2QBTW" />
    </html>
  );
}
