import { Route_Path } from "@/apis/api";
import DatasheetPage from "@/components/compo/datasheet/datasheetPage";

export async function generateMetadata({ params }) {
  const name = (await params).datasheet;
  return {
    title: `Datasheet | ${name}`,
    description:
      "Browse our collection of technical datasheets for SIVA IoT products. Access detailed specifications, features, and capabilities to find the right IoT solution for your needs.",
    keywords:
      "IoT datasheets, SIVA IoT, IoT solutions, IoT devices, smart technology, industrial IoT",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${Route_Path.DATASHEET}/${name}`,
      title: `Datasheet | ${name}`,
      description:
        "Browse our collection of technical datasheets for SIVA IoT products. Access detailed specifications, features, and capabilities to find the right IoT solution for your needs.",
      images: [
        {
          url: "https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg",
          width: 1200,
          height: 630,
          alt: "sivaIot",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@sivaiot.co",
      creator: "@sivaiot.co",
      title: `Datasheet | ${name}`,
      description:
        "Browse our collection of technical datasheets for SIVA IoT products. Access detailed specifications, features, and capabilities to find the right IoT solution for your needs.",
      images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
    },

    alternates: {
      // canonical: `${Route_Path.DATASHEET}/${name}`,
      canonical: `https://sivaiot.co`,
      
    },

    charset: "UTF-8",
  };
}

const DatasheetView = async ({ params }) => {
  const name = (await params).datasheet;
  return (
    <>
      <DatasheetPage name={name} />
    </>
  );
};

export default DatasheetView;
