export default function manifest() {
    return {
        name: "RFID Beyond Boundaries - SIVA IoT",
        short_name: "Sivaiot",
        description: "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#289C76",
        orientation: "portrait",
        icons: [
            {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            }
        ],
    }
};

