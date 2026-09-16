import fs from "fs";
import path from "path";

const BASE = "https://nunnarilabs.com";

function slugs(dir) {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), dir))
      .filter((f) => f.endsWith(".mdx"))
      .filter((f) => !/^draft:\s*true/m.test(fs.readFileSync(path.join(process.cwd(), dir, f), "utf8")))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export default function sitemap() {
  const now = new Date();
  const routes = [
    "", "/case-studies", "/blogs", "/team", "/contact", "/privacy", "/terms",
    "/ai-governance", "/digital-ai", "/frontier-ai", "/sovereign-ai", "/factory-brain", "/forward-deployed-engineers",
    "/services/digital-technology-consulting", "/services/ai-solutions",
    "/services/intelligent-industrial-automation", "/services/enterprise-software",
    "/services/corporate-skill-enhancement",
  ].map((r) => ({ url: `${BASE}${r}`, lastModified: now, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));

  const cases = slugs("src/_mdx_case_studies").map((s) => ({ url: `${BASE}/case-studies/${s}`, lastModified: now, changeFrequency: "yearly", priority: 0.6 }));
  const posts = slugs("src/_mdx_blog").map((s) => ({ url: `${BASE}/blogs/${s}`, lastModified: now, changeFrequency: "yearly", priority: 0.5 }));
  return [...routes, ...cases, ...posts];
}
