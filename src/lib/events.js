import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Server-only loader for src/_mdx_events. Mirrors the blog and case-study
// loaders: one MDX file per event, frontmatter is the record, body is prose.

const DIR = path.join(process.cwd(), "src/_mdx_events");

export const ROLE_KINDS = [
  { key: "spoke", label: "Spoke", verb: "Talks and panels" },
  { key: "organised", label: "Organised", verb: "Organised or hosted" },
  { key: "mentored", label: "Mentored", verb: "Mentored and led" },
  { key: "participated", label: "Took part", verb: "Took part" },
];

export const THEMES = [
  { key: "agentic-ai", label: "Agentic AI", blurb: "Reliable agents in production: human checkpoints, traceability, and knowing when to stay deterministic." },
  { key: "ai-governance", label: "AI governance", blurb: "ISO/IEC 42001 in practice, from a standards body in Coimbatore to Australia's AI Month." },
  { key: "physical-ai", label: "Physical AI", blurb: "Autonomous racing cars, software-defined vehicles and the discipline of AI on real hardware." },
  { key: "tamil-and-sovereign-ai", label: "Tamil and sovereign AI", blurb: "Language models that understand and reason in Tamil, and AI that belongs to the place it serves." },
  { key: "enterprise-adoption", label: "Enterprise adoption", blurb: "Where AI stalls inside organisations, and what moves a careful team from experiment to governed use." },
  { key: "open-source-and-community", label: "Open source and community", blurb: "Meetups, conferences and conclaves we organise or turn up for, so the ecosystem has more than one organiser." },
  { key: "education-and-talent", label: "Education and talent", blurb: "Students, early-career engineers and the regional talent pipeline that Nunnari Labs grew out of." },
];

export const COMMUNITIES = [
  { key: "AI Tamil Nadu", blurb: "The state's open AI community, led by Nunnari Labs. Previously AI Coimbatore. More than ten thousand practitioners.", href: "https://www.youtube.com/@aitamilnadu" },
  { key: "ML.Cbe", blurb: "Coimbatore's machine learning community, formerly TFUG Coimbatore. Eight years of monthly meetups and an annual Build With AI.", href: null },
  { key: "GDG Coimbatore", blurb: "Google Developer Group for the city. Tech for Good and Google I/O Extended.", href: null },
  { key: "FOSS United Coimbatore", blurb: "The open-source community's first Coimbatore chapter, where we spoke at the inaugural meetup.", href: null },
  { key: "Nunnari Academy", blurb: "AI skilling for practitioners and enterprise teams, run on its own platform with recurring cohorts and free sessions.", href: "https://nunnari.academy" },
];

export function themeKey(label) {
  return label.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function read(filename) {
  const raw = fs.readFileSync(path.join(DIR, filename), "utf-8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx$/, "");
  return { slug, meta: data, content };
}

export function getAllEvents({ includeDrafts = false } = {}) {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(read)
    .filter((e) => includeDrafts || !e.meta.draft)
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
}

export function getEventBySlug(slug) {
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const e = read(`${slug}.mdx`);
  return e.meta.draft ? null : e;
}

export function getFeaturedEvents(limit = 3) {
  const all = getAllEvents();
  const featured = all.filter((e) => e.meta.featured);
  const rest = all.filter((e) => !e.meta.featured && e.meta.cover);
  return [...featured, ...rest].slice(0, limit);
}

export function getNeighbours(slug) {
  const all = getAllEvents();
  const i = all.findIndex((e) => e.slug === slug);
  if (i < 0) return { newer: null, older: null };
  return { newer: all[i - 1] || null, older: all[i + 1] || null };
}

export function getRelated(event, limit = 3) {
  const all = getAllEvents().filter((e) => e.slug !== event.slug);
  const themes = new Set(event.meta.themes || []);
  const scored = all
    .map((e) => ({ e, score: (e.meta.themes || []).filter((t) => themes.has(t)).length + (e.meta.cover ? 0.5 : 0) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.e.meta.date) - new Date(a.e.meta.date));
  return scored.slice(0, limit).map((x) => x.e);
}

export function getEventStats(events = getAllEvents()) {
  const cities = new Set(events.map((e) => e.meta.city).filter((c) => c && c !== "Online"));
  const years = events.map((e) => new Date(e.meta.date).getFullYear());
  return {
    total: events.length,
    spoke: events.filter((e) => e.meta.roleKind === "spoke").length,
    organised: events.filter((e) => ["organised", "mentored"].includes(e.meta.roleKind)).length,
    cities: cities.size,
    since: Math.min(...years),
    countries: new Set(events.map((e) => e.meta.country).filter(Boolean)).size,
  };
}

export function countByTheme(events = getAllEvents()) {
  const counts = {};
  events.forEach((e) => (e.meta.themes || []).forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  return counts;
}

export function countByCommunity(events = getAllEvents()) {
  const counts = {};
  events.forEach((e) => (e.meta.communities || []).forEach((c) => (counts[c] = (counts[c] || 0) + 1)));
  return counts;
}

// Serialisable subset for client components (no MDX body).
export function toListItem(e) {
  const m = e.meta;
  return {
    slug: e.slug,
    title: m.title,
    short: m.short,
    date: m.date,
    datePrecision: m.datePrecision,
    endDate: m.endDate || null,
    role: m.role,
    roleKind: m.roleKind,
    type: m.type,
    organisers: m.organisers || [],
    venue: m.venue || null,
    city: m.city,
    country: m.country,
    format: m.format,
    themes: m.themes || [],
    themeKeys: (m.themes || []).map(themeKey),
    communities: m.communities || [],
    summary: m.summary,
    quote: m.quote || null,
    tier: m.tier || "standard",
    featured: !!m.featured,
    cover: m.cover || null,
    poster: m.poster || null,
    galleryCount: (m.gallery || []).length,
    hasVideo: !!m.video,
  };
}

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function parts(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d };
}

// Approximate dates are shown to the month; exact dates to the day.
export function formatEventDate(iso, precision = "exact", endIso = null, { long = false } = {}) {
  const { y, m, d } = parts(iso);
  const months = long ? MONTHS_LONG : MONTHS_SHORT;
  if (precision === "approx") return `${months[m - 1]} ${y}`;
  if (endIso) {
    const e = parts(endIso);
    if (e.m === m && e.y === y) return `${d} to ${e.d} ${months[m - 1]} ${y}`;
    return `${d} ${months[m - 1]} to ${e.d} ${months[e.m - 1]} ${y}`;
  }
  return `${d} ${months[m - 1]} ${y}`;
}

export function dateParts(iso, precision = "exact") {
  const { y, m, d } = parts(iso);
  return {
    day: precision === "approx" ? null : String(d).padStart(2, "0"),
    month: MONTHS_SHORT[m - 1],
    monthLong: MONTHS_LONG[m - 1],
    year: y,
  };
}
