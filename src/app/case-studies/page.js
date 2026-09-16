import LogoImg from "@/components/ui/logoImg";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Navbar from "@components/navbar";
import Footer from "@components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export function getAllCaseStudies() {
  const dir = path.join(process.cwd(), "src/_mdx_case_studies");
  const files = fs.readdirSync(dir);

  const caseStudies = files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data: frontMatter } = matter(fileContent);
      return {
        meta: frontMatter,
        slug: filename.replace(".mdx", ""),
      };
    })
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

  return caseStudies;
}

export const metadata = {
  title: "Outcomes",
  description:
    "Customer outcomes: production AI systems running in government, manufacturing, healthcare and financial services across India and Australia.",
};

const ENGAGEMENTS = [
  { client: "State pathology service", sector: "Health · clinical documents", body: "Clinical document intelligence — extraction, structuring and coding of pathology reports.", tags: ["Cycle time", "Accuracy"] },
  { client: "Metropolitan local council", sector: "Local government · citizen service", body: "GenAI citizen assistant over resident enquiries, with event booking and live-agent handover.", tags: ["Service quality", "Efficiency"] },
  { client: "Government land agency", sector: "Public sector · planning", body: "Agentic building-plan compliance with real-time scoring and approval workflow management.", tags: ["Cycle time", "Compliance"] },
  { client: "National aeromedical service", sector: "Health · operations", body: "Automated document classification on metadata and content across operational records.", tags: ["Productivity", "Efficiency"] },
  { client: "International hotel group", sector: "Hospitality · multi-property", body: "Guest experience platform spanning check-in, service requests and issue resolution.", tags: ["Service quality", "Efficiency"] },
  { client: "Hotel operations agent", sector: "Hospitality · property systems", body: "Real-time agent chaining through MCP into the property management system.", tags: ["Cycle time", "Service quality"] },
  { client: "Visitor economy platform", sector: "Travel · itinerary planning", body: "Travel assistant with real-time weather and calendar context, and human handover.", tags: ["Service quality", "Revenue"] },
  { client: "National fashion retail chain", sector: "Retail · analytics", body: "Retail analytics over purchasing patterns, inventory optimisation and marketing performance.", tags: ["Revenue", "Margin"] },
  { client: "Global consumer toy manufacturer", sector: "Consumer goods · trade documents", body: "Multi-lingual document intelligence with no-code schema changes across trading partners.", tags: ["Efficiency", "Accuracy"] },
  { client: "Sports technology and media platform", sector: "Media · live production", body: "Real-time transcription, event detection and automated highlight generation.", tags: ["Revenue", "Speed to market"] },
  { client: "Private property investment group", sector: "Financial services · legal", body: "Legal workflow processing with access control, document generation and a compliance engine.", tags: ["Cycle time", "Compliance"] },
  { client: "Private property investment group", sector: "Financial services · finance", body: "Finance agent across multiple systems of record, with real-time analytics and a personalised interface.", tags: ["Productivity", "Accuracy"] },
  { client: "Enterprise ERP estate", sector: "Cross-industry · procurement", body: "Procure-to-pay multi-agent system with intent classification and MCP-based integration.", tags: ["Efficiency", "Cycle time"] },
  { client: "Enterprise horizontal", sector: "Cross-industry · platform", body: "Private AI platform and multi-agent assistant spanning managed, hosted and third-party models.", tags: ["Speed to market", "Efficiency"] },
];

const FLAGSHIP = [
  {
    logo: "/client/logos/landcom.webp",
    client: "Landcom · NSW Government",
    pillar: "Frontier AI",
    problem: "Manual, repetitive finance workflows, and an organisation that wanted generative AI in everyday work only under governance it could stand behind.",
    solution: "Finance workflows automated end to end, then enterprise-wide adoption: a governance model, a retained forward-deployed engineer, and training across every team — built on OCI, Oracle AI Services and Claude.",
    outcome: "5 FTE of capacity freed every week; 200 staff onboarded at 100% enablement.",
    href: "/case-studies/public-sector-genai-enablement",
  },
  {
    logo: "/client/logos/arb.webp",
    client: "ARB Corporation · ASX-listed manufacturer",
    pillar: "Digital AI",
    problem: "More than 12,000 supplier invoices a month validated, coded and routed by hand across global accounts-payable teams.",
    solution: "An intelligent processing pipeline on Oracle Cloud integrated with JD Edwards: invoices read and validated, line items coded against the system of record, only exceptions routed to a person.",
    outcome: "90% reduction in invoice processing cost; A$2.9M projected annual saving.",
    href: "/case-studies/supplier-invoice-automation",
  },
  {
    logo: "/client/logos/hearsight.webp",
    client: "HearSight Audio Vision · Assistive technology",
    pillar: "Physical AI",
    problem: "People with low vision need the world read to them in real time, without a cloud round trip, a connectivity assumption, or their data leaving the device.",
    solution: "Smart glasses with every model running on the device: object and obstacle detection, OCR, face recognition, navigation and offline payment assistance.",
    outcome: "Frontier-grade perception running inside a pair of glasses. Nunnari Labs is HearSight's AI and engineering partner.",
    href: "/case-studies/hearsight-assistive-wearable",
  },
];

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  return (
    <div className="w-full bg-[#010314]">
      <Navbar />

      <header className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-16">
        <span className="pill">Outcomes</span>
        <h1 className="headline mt-6 text-[40px] md:text-[56px] leading-[1.15] font-medium max-w-3xl">
          Outcomes we delivered for enterprises and factories.
        </h1>
        <p className="mt-6 text-[15px] leading-[27px] text-muted max-w-2xl">
          Every entry here is in production or on real hardware — across
          regulated and public sector, manufacturing, healthcare, and retail,
          where AI has to hold up under audit and on the floor. Some clients
          are anonymized; details are available under NDA.
        </p>
      </header>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-8">
        <span className="pill">Flagship customer stories</span>
        <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
          Named clients, measured outcomes.
        </h2>
        <div className="mt-10 flex flex-col gap-6">
          {FLAGSHIP.map((f) => (
            <a key={f.client} href={f.href} className="group grid lg:grid-cols-12 gap-x-10 gap-y-6 rounded-3xl border border-line p-8 md:p-10 transition-all duration-300 hover:border-white/60 hover:bg-white/[0.04]">
              <div className="lg:col-span-3">
                <div className="h-14 rounded-xl bg-white flex items-center justify-center px-4 w-fit">
                  <LogoImg src={f.logo} alt={f.client} className="max-h-9 max-w-[170px] object-contain" style={{ filter: "invert(1)" }} />
                </div>
                <p className="mt-4 text-white font-medium">{f.client}</p>
                <p className="mt-1 text-sm text-dim">{f.pillar}</p>
              </div>
              <div className="lg:col-span-9 grid md:grid-cols-3 gap-6">
                {[["Problem", f.problem], ["Solution", f.solution], ["Outcome", f.outcome]].map(([t, b]) => (
                  <div key={t}>
                    <p className="text-xs text-dim uppercase tracking-[0.12em]">{t}</p>
                    <p className={`mt-2 text-sm leading-6 ${t === "Outcome" ? "text-white" : "text-muted"}`}>{b}</p>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies?.map((cs) => (
            <a
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col h-full border border-line rounded-3xl p-8 md:p-10 bg-transparent hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm text-dim">
                  {cs.meta.industry}
                </p>
                {cs.meta.metric ? (
                  <p className="text-sm text-ink/80 md:text-right md:max-w-[45%]">
                    {cs.meta.metric}
                  </p>
                ) : null}
              </div>

              <h2 className="headline mt-5 text-xl md:text-2xl font-semibold tracking-tight text-ink leading-snug">
                {cs.meta.title}
              </h2>
              <p className="mt-3 text-muted text-[15px] leading-relaxed">
                {cs.meta.description}
              </p>

              <div className="mt-auto pt-8 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-ink/80 border border-line rounded-full px-2.5 py-1 bg-white/5">
                    {cs.meta.system}
                  </span>
                  {cs.meta.tags?.map((t) => (
                    <span
                      key={t}
                      className="text-sm text-dim border border-line rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span
                  aria-hidden="true"
                  className="text-muted group-hover:text-ink group-hover:translate-x-1 transition-all text-sm"
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="pill">More engagements</span>
            <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
              Under government security and procurement controls.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENGAGEMENTS.map((e) => (
            <div key={e.client + e.body} className="rounded-2xl border border-line p-6 flex flex-col">
              <h3 className="text-[18px] leading-7 font-medium text-white">{e.client}</h3>
              <p className="mt-1 text-sm text-dim">{e.sector}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{e.body}</p>
              <div className="mt-auto pt-5 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="text-xs border border-line rounded-full px-2.5 py-1 text-white/85">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cta />
      <Footer />
      <FootNote />
    </div>
  );
}
