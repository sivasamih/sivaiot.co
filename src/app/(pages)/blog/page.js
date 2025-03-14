import BlogPage from "@/components/compo/blog/blog";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import { Route_Path } from "@/apis/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Blogs | SIVA IoT",
  description:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
  keywords:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
  robots: "index, follow",
  metadataBase: new URL('https://sivaiot.co'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.BLOG,
    title: "Blogs | SIVA IoT",
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
    title: "Blogs | SIVA IoT",
    description:
      "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
    images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: 'https://sivaiot.co',

  },
  // Additional Metadata
  charset: "UTF-8",
};


// ****** ContentType****
// name: "Blog", value: 1 name: "Event", value: 2  name: "News", value: 2

// *******Source*********
// name: "SivaIot", value: 1 name: "SIVA Group", value: 2  name: "IdenPro", value: 3 name: "Tourni-s", value: 4 


async function getBlog() {
  let reqData = {
    SourceID: 1,
    ContentType: 1
  };

  let data;
  try {
    let res = await FETCHAPI.Fetch(
      APIURLS.APIURL.GetPulsePosts,
      reqData
    );
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {
    console.log("ex", ex);
  }
  return data;
}

const Blog = async () => {
  const BlogData = await getBlog();
  if (!BlogData) return notFound();

  return <BlogPage Data={BlogData} />;
};

export default Blog;
