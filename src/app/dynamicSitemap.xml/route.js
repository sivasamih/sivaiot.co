import { Route_Path } from "@/apis/api";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import moment from "moment";
import { NextResponse } from "next/server";

const BASE_URL = "https://sivaiot.co";

const pageUrls = [
    Route_Path.PRODUCTS,
    Route_Path.PRODUCT_FAMILY,
    Route_Path.ABOUT,
    Route_Path.LEADERSHIP,
    Route_Path.BLOG,
    Route_Path.Application,
    Route_Path.BECOME_CHANNEL_PARTNER,
    Route_Path.CAREERS,
    Route_Path.CSR_POLICY,
    Route_Path.DESIGN_LAB,
    Route_Path.FAQ,
    Route_Path.PRIVACY_POLICY,
    // Route_Path.RFID_ACCESS_CONTROL,
    Route_Path.RFID_CONTACT,
    Route_Path.TERMS_OF_USE,
    Route_Path.WB,
    Route_Path.WB_CARD_KEYS_FOBS,
    Route_Path.WB_POLY_IN_SHEETS,
    Route_Path.WB_ULTIMOID_DIRECTTHERMAL,
    Route_Path.WB_ULTIMOID_ECODURA,
    Route_Path.WB_ULTIMOID_FABRIC,
    Route_Path.WB_ULTIMOID_POLY,
    Route_Path.WB_ULTIMOID_SILICON,
    Route_Path.WB_ULTIMOID_TYVEK,
    Route_Path.WB_WRISTBANDS,
];

function normalizeUrl(url, pageUrl) {
    const formatedURL = url?.replace(/^\/+/, "") || "";
    if (!formatedURL) return "";

    return url.startsWith("/") ? `${BASE_URL}/${formatedURL}` : `${BASE_URL}${pageUrl}/${formatedURL}`;
}

async function fetchDynamicUrls() {
    let familyList,
        productList,
        BlogList, applicationList = [];

    let blogReqData = {
        SourceID: 1,
        ContentType: 1,
    };
    try {
        const [productsRes, familyRes, blogRes, applicationRes] = await Promise.all([
            FETCHAPI.Fetch(APIURLS.APIURL.WebCategoryWiseProducts),
            FETCHAPI.Fetch(APIURLS.APIURL.GetProductFamily),
            FETCHAPI.Fetch(APIURLS.APIURL.GetPulsePosts, blogReqData),
            FETCHAPI.Fetch(APIURLS.APIURL.GetProductIndustriesDetails)
        ]);

        // ****************productsData********************
        try {
            if (productsRes.status === 200) {
                const productsData = await productsRes.json();

                productList = productsData.flatMap((item) => {
                    if (Array.isArray(item?.productList) && item.productList.length > 0) {
                        return item.productList.map((product) => ({
                            url: normalizeUrl(product?.link, Route_Path.PRODUCTS),
                            date: new Date(),
                            priority: 1.0,
                            freq: "daily",
                        }));
                    }
                    return [];
                });
            }
        } catch (ex) { }

        // ****************product families Data********************
        try {
            if (familyRes.status === 200) {
                const familyData = await familyRes.json();

                familyList = familyData.map((item) => ({
                    url: normalizeUrl(item?.UrlName, Route_Path.PRODUCT_FAMILY),
                    date: new Date(),
                    priority: 1.0,
                    freq: "daily",
                }));
            }
        } catch (ex) { }

        // ****************Blogs Data********************
        try {
            if (blogRes.status === 200) {
                const blogData = await blogRes.json();

                BlogList = blogData.map((item) => ({
                    url: normalizeUrl(item?.PostUrl, Route_Path.BLOG),
                    date: item?.CreatedDate,
                    priority: 1.0,
                    freq: "daily",
                }));
            }
        } catch (ex) { }


        // ****************Applications Data********************
        try {
            if (applicationRes.status === 200) {
                const applicationData = await applicationRes.json();
                applicationList = applicationData.map((item) => ({
                    url: normalizeUrl(item?.UrlName, Route_Path.Application),
                    date: new Date(),
                    priority: 1.0,
                    freq: "daily",
                }));
            }
        } catch (ex) { }

        return [...productList, ...familyList, ...BlogList, ...applicationList];
    } catch (error) {
        console.log("Error fetching sitemap:", error);
        return null;
    }
}

function generateSitemap(routes) {
    const xmlUrls = routes
        .map((route) => {
            const lastmod = route.date ? `<lastmod>${moment(route.date).toISOString()}</lastmod>` : "";
            const changefreq = route.freq ? `<changefreq>${route.freq}</changefreq>` : "";
            const priority = route.priority ? `<priority>${route.priority.toFixed(1)}</priority>` : "";
            return `
            <url>
              <loc>${route?.url}</loc>
              ${lastmod}
                ${changefreq}
                ${priority}
            </url>`;
        })
        .join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${xmlUrls}
          </urlset>`.trim();
}

const GetAllRoutes = async () => {
    const DynamicRoute = await fetchDynamicUrls();
    const PAGES = pageUrls?.map((pageUrl) => {
        return {
            url: normalizeUrl(pageUrl),
            date: new Date(),
            priority: 1.0,
            freq: "daily",
        };
    });
    return [{ url: BASE_URL }, ...PAGES, ...DynamicRoute];
};

export async function GET() {
    const data = await GetAllRoutes();
    const sitemap = generateSitemap(data);

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
