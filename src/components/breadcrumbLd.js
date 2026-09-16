"use client";
import { usePathname } from "next/navigation";

const BASE = "https://nunnarilabs.com";
const LABELS = {
  "digital-ai": "Digital AI",
  "frontier-ai": "Frontier AI",
  "sovereign-ai": "Sovereign AI",
  "forward-deployed-engineers": "Forward-deployed engineers",
  "ai-governance": "AI governance",
  "factory-brain": "The Factory Brain",
  "case-studies": "Outcomes",
  blogs: "Research articles",
  team: "Company",
  events: "Events",
  contact: "Contact",
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  services: "Services",
  "intelligent-industrial-automation": "Physical AI",
  "ai-solutions": "Production AI Engineering",
  "digital-technology-consulting": "AI Consulting & Governance",
  "enterprise-software": "Data for AI",
  "corporate-skill-enhancement": "AIOps",
};

// BreadcrumbList structured data for inner pages. `label` names the final
// crumb when it is not a fixed route (an article or case study title).
export default function BreadcrumbLd({ label }) {
  const path = usePathname() || "/";
  const segments = path.split("/").filter(Boolean);
  if (!segments.length) return null;
  const items = [{ name: "Home", url: BASE + "/" }];
  let acc = "";
  segments.forEach((seg, i) => {
    acc += "/" + seg;
    const last = i === segments.length - 1;
    const name = last && label ? label : LABELS[seg] || seg.replace(/-/g, " ");
    // "/services" has no index page, so its crumb points home.
    items.push({ name, url: BASE + (seg === "services" && !last ? "/#services" : acc) });
  });
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
