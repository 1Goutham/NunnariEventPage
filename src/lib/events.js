import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Server-only loader for src/_mdx_events. Mirrors the blog and case-study
// loaders: one MDX file per event, frontmatter is the record, body is prose.
// Title, role, type, organiser, venue and location in the frontmatter are
// copied verbatim from the events tracker.

const DIR = path.join(process.cwd(), "src/_mdx_events");

// Role filter groups. Each group's members are the tracker's own Role
// wordings; the group label is the tracker's word.
export const ROLE_KINDS = [
  { key: "spoke", label: "Spoke" },
  { key: "organised", label: "Organised" },
  { key: "mentored", label: "Mentored" },
  { key: "participated", label: "Participated" },
];

// Type filter groups, one per word the tracker's Type column uses. An event
// belongs to every group whose word appears in its Type, so "Conference
// workshop" is both a conference and a workshop.
export const TYPE_GROUPS = [
  { key: "conference", label: "Conference", match: /conference/i },
  { key: "panel", label: "Panel", match: /panel/i },
  { key: "workshop", label: "Workshop", match: /workshop/i },
  { key: "meetup", label: "Meetup", match: /meetup/i },
  { key: "webinar", label: "Webinar", match: /webinar/i },
  { key: "hackathon", label: "Hackathon", match: /hackathon/i },
  { key: "festival", label: "Festival", match: /festival/i },
  { key: "competition", label: "Competition", match: /competition/i },
  { key: "summit", label: "Summit", match: /summit/i },
  { key: "seminar", label: "Seminar", match: /seminar/i },
  { key: "lecture", label: "Lecture", match: /lecture/i },
  { key: "bootcamp", label: "Bootcamp", match: /bootcamp/i },
  { key: "retreat", label: "Retreat", match: /retreat/i },
  { key: "roundtable", label: "Roundtable", match: /roundtable/i },
  { key: "launch", label: "Launch", match: /launch/i },
  { key: "inauguration", label: "Inauguration", match: /inauguration/i },
  { key: "industry", label: "Industry", match: /industry/i },
  { key: "corporate", label: "Corporate", match: /corporate/i },
  { key: "standards-body", label: "Standards body", match: /standards body/i },
  { key: "devfest", label: "DevFest", match: /devfest/i },
  { key: "fireside", label: "Fireside", match: /fireside/i },
  { key: "talk", label: "Talk", match: /\btalk\b/i },
];

export function typeKeys(type) {
  return TYPE_GROUPS.filter((g) => g.match.test(type || "")).map((g) => g.key);
}

// Communities named as organisers in the tracker. The two facts quoted here
// come from the site's Team page (AI Tamil Nadu) and the Build With AI post
// (ML.Cbe).
export const COMMUNITIES = [
  { key: "AI Tamil Nadu", blurb: "Led by Nunnari Labs. Previously AI Coimbatore. A community of 10,000+ practitioners.", href: "https://www.youtube.com/@aitamilnadu" },
  { key: "ML.Cbe", blurb: "Previously TFUG Coimbatore. Eight years old at Build With AI 2025.", href: null },
];

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

// Related by shared tracker type words, then by shared organiser, newest first.
export function getRelated(event, limit = 3) {
  const all = getAllEvents().filter((e) => e.slug !== event.slug);
  const keys = new Set(typeKeys(event.meta.type));
  const orgs = new Set(event.meta.organisers || []);
  const scored = all
    .map((e) => ({
      e,
      score:
        typeKeys(e.meta.type).filter((k) => keys.has(k)).length +
        (e.meta.organisers || []).filter((o) => orgs.has(o)).length * 2 +
        (e.meta.cover ? 0.5 : 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.e.meta.date) - new Date(a.e.meta.date));
  return scored.slice(0, limit).map((x) => x.e);
}

export function getEventStats(events = getAllEvents()) {
  const locations = new Set(events.map((e) => e.meta.city).filter((c) => c && c !== "Online"));
  const years = events.map((e) => new Date(e.meta.date).getFullYear());
  return {
    total: events.length,
    spoke: events.filter((e) => e.meta.roleKind === "spoke").length,
    organised: events.filter((e) => ["organised", "mentored"].includes(e.meta.roleKind)).length,
    locations: locations.size,
    since: Math.min(...years),
  };
}

export function countByType(events = getAllEvents()) {
  const counts = {};
  events.forEach((e) => typeKeys(e.meta.type).forEach((k) => (counts[k] = (counts[k] || 0) + 1)));
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
    typeKeys: typeKeys(m.type),
    organisers: m.organisers || [],
    venue: m.venue || null,
    city: m.city,
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
