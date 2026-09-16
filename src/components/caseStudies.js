"use client";
import LogoImg from "@/components/ui/logoImg";
import Icon from "@/components/ui/icon";

import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";

const TOP = [
  {
    pillar: "Frontier AI",
    logo: "/client/logos/landcom.webp",
    client: "Landcom · NSW Government",
    slug: "public-sector-genai-enablement",
    headline: "Finance workflows automated, then enterprise-wide AI adoption.",
    detail: "A governance model, a retained forward-deployed engineer and training across every team — built on OCI, Oracle AI Services and Claude.",
    metric: "5 FTE",
    metricLabel: "capacity freed every week",
  },
  {
    pillar: "Digital AI",
    logo: "/client/logos/arb.webp",
    client: "ARB Corporation · ASX-listed manufacturer",
    slug: "supplier-invoice-automation",
    headline: "12,000+ supplier invoices a month, automated.",
    detail: "Invoices read, validated and coded against JD Edwards on Oracle Cloud — only the exceptions reach a person.",
    metric: "−90%",
    metricLabel: "invoice processing cost",
  },
  {
    pillar: "Physical AI",
    logo: "/client/logos/hearsight.webp",
    client: "HearSight Audio Vision · Assistive technology",
    slug: "hearsight-assistive-wearable",
    headline: "Smart glasses that read the world aloud, on-device.",
    detail: "Object detection, OCR, face recognition, navigation and offline payment assistance — every model running on the glasses.",
    metric: "On-device",
    metricLabel: "every model, no cloud round trip",
  },
  {
    pillar: "Sovereign AI",
    logo: null,
    client: "Financial services · On-premises",
    slug: "sovereign-ai-infrastructure-intelligent-routing",
    headline: "Sovereign AI infrastructure with intelligent model routing.",
    detail: "NVIDIA L40S GPUs validated for enterprise use, with an LLM router that sends each task to the right model — nothing leaves the premises.",
    metric: "4×",
    metricLabel: "document throughput on the same hardware",
  },
];

const OUTCOMES = [
  {
    value: "90%",
    label: "Invoice processing cost removed",
    who: "ASX-listed manufacturer, global AP teams",
  },
  {
    value: "A$2.9M",
    label: "Projected annual saving",
    who: "ARB Corporation, document intelligence",
  },
  {
    value: "5 FTE",
    label: "Capacity freed every week",
    who: "Landcom, NSW Government",
  },
  {
    value: "100%",
    label: "Enablement across 200 staff",
    who: "Public sector, GenAI rollout",
  },
];

function Tag({ children, strong }) { // kept for compatibility
  return (
    <span
      className={`text-xs border border-line rounded-full px-2.5 py-1 ${
        strong ? "text-white bg-white/5" : "text-dim"
      }`}
    >
      {children}
    </span>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="bg-[#010314] border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Customer outcomes"
            title="Solving the problems that move the business."
            sub="Regulated and public sector, manufacturing, healthcare, and retail — where AI has to hold up under audit and on the floor."
          />
          <Reveal y={20} delay={0.1}>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-slate-200 transition-colors shrink-0"
            >
              View all outcomes
              <Icon name="arrow-right" />
            </a>
          </Reveal>
        </div>

        {/* Top four outcomes, one per pillar */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {TOP.map((c, i) => (
            <Reveal key={c.slug} y={16} delay={0.05 * i} className="h-full">
              <a
                href={`/case-studies/${c.slug}`}
                className="group flex flex-col h-full border border-line rounded-3xl p-8 md:p-10 cursor-pointer transition-all duration-300 hover:border-white/60 hover:bg-white/[0.04] hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="pill">{c.pillar}</span>
                  {c.logo ? (
                    <LogoImg src={c.logo} alt={c.client} className="h-9 w-auto max-w-[150px] object-contain opacity-90" />
                  ) : null}
                </div>
                <p className="mt-6 text-sm text-dim">{c.client}</p>
                <h3 className="mt-3 text-[22px] md:text-[26px] leading-[1.3] font-medium text-white">
                  {c.headline}
                </h3>
                <p className="mt-3 text-[15px] leading-[27px] text-muted">{c.detail}</p>
                <div className="mt-auto pt-8 flex items-end justify-between gap-4 border-t border-line">
                  <div className="pt-5">
                    <p className="text-[34px] md:text-[40px] leading-none text-white font-medium">{c.metric}</p>
                    <p className="mt-2 text-sm text-muted">{c.metricLabel}</p>
                  </div>
                  <span aria-hidden="true" className="pt-5 text-muted group-hover:text-white group-hover:translate-x-1 transition-all text-sm">
                    Read case →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Outcomes strip */}
        <Reveal y={12} delay={0.1}>
          <div className="mt-16 rounded-3xl border border-line p-8 md:p-10">
            <div className="max-w-2xl">
              <h3 className="text-[22px] leading-[33px] font-medium text-white">
                We are paid for what changes, not for who we staff.
              </h3>
              <p className="mt-2 text-[15px] leading-[27px] text-muted">
                Every engagement is signed against a measure you already report
                on — baselined before we start, reported after we ship.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8">
              {OUTCOMES.map((o, i) => (
                <div
                  key={o.label}
                  className={`px-2 md:px-6 ${i > 0 ? "md:border-l md:border-line" : ""}`}
                >
                  <dd className="text-[32px] md:text-[36px] leading-none text-white font-medium">
                    {o.value}
                  </dd>
                  <dt className="mt-3 text-sm text-white/90">{o.label}</dt>
                  <dd className="mt-1 text-xs text-dim">{o.who}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
