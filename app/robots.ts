export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],  // block internal Next.js routes
      },
    ],
    sitemap: "https://clubhousevianey.com/sitemap.xml",
  };
}