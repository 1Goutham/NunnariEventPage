export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://nunnarilabs.com/sitemap.xml",
  };
}
