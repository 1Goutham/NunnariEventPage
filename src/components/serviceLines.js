"use client";
import Icon from "@/components/ui/icon";

import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";

const LINES = [
  {
    num: "01",
    title: "AI Consulting & Governance",
    sub: "Where the programme starts",
    href: "/services/digital-technology-consulting",
    solutions: ["AI strategy & roadmap", "Policy & risk frameworks", "Audits & readiness", "Forward-deployed engineers"],
    outcome: "Sustainable AI adoption and a board-ready control framework.",
  },
  {
    num: "02",
    title: "Production AI Engineering",
    sub: "Where value gets built",
    href: "/services/ai-solutions",
    solutions: ["GenAI & agentic systems", "Document intelligence", "Voice AI", "Forward-deployed engineers"],
    outcome: "Pilots in production, cost per transaction down, cycle time cut.",
  },
  {
    num: "03",
    title: "Physical AI & Edge",
    sub: "Our differentiator",
    highlight: true,
    href: "/services/intelligent-industrial-automation",
    solutions: ["Robots & drones", "Smart devices", "Computer vision", "On-device inference"],
    outcome: "Autonomous operations in the field, safety and quality lifted.",
  },
  {
    num: "04",
    title: "Data for AI",
    sub: "What makes AI deployable",
    href: "/services/enterprise-software",
    solutions: ["Data readiness", "Pipelines & lakehouse", "Data governance", "Vector & retrieval"],
    outcome: "Trusted, AI-ready data and decisions traceable to source.",
  },
  {
    num: "05",
    title: "AIOps",
    sub: "How value is sustained",
    href: "/services/corporate-skill-enhancement",
    solutions: ["Monitoring & drift", "Continuous evaluation", "Centre of Excellence", "SLA operations"],
    outcome: "Sustained adoption against an SLA, capability held in-house.",
  },
];

export default function ServiceLines() {
  return (
    <section id="service-lines" className="bg-[#010314] border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <SectionHeader
          eyebrow="What we do"
          title="Five service lines, one owner for the outcome."
          sub="From the first governance conversation to the AIOps that keeps it running — each line has a named outcome you can hold us to."
        />

        <div className="mt-14 border-b border-line">
          {LINES.map((l, i) => (
            <Reveal key={l.num} y={12} delay={0.04 * i}>
              <a
                href={l.href}
                className={`group grid md:grid-cols-12 gap-x-8 gap-y-4 py-8 md:py-9 transition-all duration-300 ${
                  l.highlight
                    ? "my-3 rounded-2xl border border-white/40 bg-glass px-6 md:px-8 cursor-pointer hover:border-white/70 hover:-translate-y-0.5"
                    : "border-t border-line cursor-pointer hover:bg-white/[0.05] hover:pl-2"
                }`}
              >
                <div className="md:col-span-4 flex gap-5">
                  <span className="text-[26px] leading-none font-medium text-dim">
                    {l.num}
                  </span>
                  <div>
                    <h3 className="text-[20px] md:text-[22px] leading-[1.4] font-medium text-white">
                      {l.title}
                    </h3>
                    <p className="mt-1 text-sm text-dim">{l.sub}</p>
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-wrap gap-2 content-start">
                  {l.solutions.map((s) => (
                    <span
                      key={s}
                      className="text-xs border border-line rounded-full px-2.5 py-1 text-white/85"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="md:col-span-3 flex items-start justify-between gap-3">
                  <p className="text-sm leading-6 text-muted">{l.outcome}</p>
                  <Icon name="arrow-right" className="text-muted group-hover:text-white group-hover:translate-x-1.5 transition-all mt-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
