export const StructureData = {
  FAQ: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do UHF RFID labels work on metal surfaces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RFID labels typically face challenges on metal surfaces due to interference. However, On-metal RFID tags and labels work effectively by incorporating features such as a spacer layer or foam material between the tag antenna and the metal surface, and a specially designed antenna tuned to perform optimally near metal."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between on-metal and regular RFID labels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On-metal RFID labels are designed to work on or near metal surfaces, including a spacer to isolate the antenna from metal. They are thicker, more expensive, and used in industries such as manufacturing, aerospace, logistics, and healthcare. Regular RFID labels are designed for non-metallic surfaces, are slimmer and cheaper, and used in inventory management, supply chain tracking, retail, and logistics."
      }
    },
    {
      "@type": "Question",
      "name": "How compatible are On-Metal UHF labels with different RFID readers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On-metal UHF labels are compatible with most RFID readers within the UHF frequency range (860–960 MHz), including ETSI (865–868 MHz) and FCC (902–928 MHz). Some labels cover the entire global UHF range. It is important to ensure the tag/label and reader operate in the same frequency band. Circularly polarized antennas are recommended for general use, regardless of tag orientation."
      }
    },
    {
      "@type": "Question",
      "name": "What are RFID Hard Tags?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RFID Hard Tags are durable, rugged, and long-lasting identification devices equipped with an RFID chip or antenna. They are designed to withstand harsh conditions, making them suitable for industries such as manufacturing, logistics, and supply chain management."
      }
    }
  ]
}


`,
  HOME: `{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "SIVA IoT",
  "url": "https://sivaiot.co/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://sivaiot.co/rfid-tags-and-labels{search_term_string}https://sivaiot.co/about-siva-iot",
    "query-input": "required name=search_term_string"
  }
}
`,
LEADERSHIP : `{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Rajiv Aggarwal",
  "url": "https://sivaiot.co/leadership",
  "image": "https://sivafiles.sivagroup.co/1/images/others/rajiv-aggarwal.jpg",
  "sameAs": "https://www.linkedin.com/in/rajiv-aggarwal-10112925/",
  "jobTitle": "CEO",
  "worksFor": {
    "@type": "Organization",
    "name": "SIVA Group"
  }  `
};
