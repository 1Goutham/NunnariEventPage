"use client";
import Icon from "@/components/ui/icon";

import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";

const SEGMENTS = [
  {
    icon: "bi-building",
    title: "Enterprise",
    problem: "Dozens of pilots, fragmented IT, no one owning the outcome.",
    body: "Forward-deployed engineers take pilots into production inside the systems of record you already run — agents that need no retraining, then operated against an SLA.",
    proof: "−90% invoice processing cost for an ASX-listed manufacturer",
    href: "/digital-ai",
    cta: "Enterprise agents",
  },
  {
    icon: "bi-gear-wide-connected",
    title: "Manufacturing",
    problem: "No AI team to hire, and no case for building one yet.",
    body: "Fixed-scope packages led by a fractional expert who owns the result. For factories: the Factory Brain sits between ERP and PLC — cloud, hybrid or on-premise, 4 to 12+ weeks.",
    proof: "10–20% less machine idle time from better scheduling",
    href: "/factory-brain",
    cta: "The Factory Brain",
  },
  {
    icon: "bi-bank",
    title: "Public sector & regulated",
    problem: "Data that cannot leave, and decisions that must hold up in audit.",
    body: "Self-hosted, in-jurisdiction AI inside government security controls, with audit evidence produced as the system runs. ISO/IEC 42001 certified; fixed-scope packages procurement can sign.",
    proof: "200 staff enabled and 5 FTE freed weekly at a NSW Government agency",
    href: "/sovereign-ai",
    cta: "Sovereign AI",
  },
  {
    icon: "bi-rocket-takeoff",
    title: "Digital natives",
    problem: "A product to reimagine around AI, and a global market to reach.",
    body: "We work with ISVs and product companies to rebuild their products around AI and take them to global markets — an accounting platform for CPA firms with its intelligence layer on Claude, and a digital health report assistant integrated with EPIC.",
    proof: "Two product companies re-platformed on AI, US and Brazil markets",
    href: "/digital-ai",
    cta: "Digital AI for products",
  },
];

export default function Segments() {
  return (
    <section id="industries" className="bg-[#010314] border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <SectionHeader
          eyebrow="Industries"
          title="AI that scales across enterprise, manufacturing and government."
          sub="Whether you run a global AP function, a 200-person plant, or a state agency, the engagement is shaped to how you buy and how you are audited."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {SEGMENTS.map((s, i) => (
            <Reveal key={s.title} y={16} delay={0.05 * i} className="h-full">
              <a
                href={s.href}
                className="group flex flex-col h-full rounded-3xl border border-line p-8 md:p-10 cursor-pointer transition-all duration-300 hover:border-white/60 hover:bg-white/[0.04] hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <Icon name={s.icon} className="text-2xl text-white leading-none" />
                  <h3 className="text-[22px] leading-[33px] font-medium text-white">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-5 text-white/90 font-medium">{s.problem}</p>
                <p className="mt-3 text-[15px] leading-[27px] text-muted">{s.body}</p>
                <div className="mt-auto pt-7 flex flex-col gap-4">
                  <p className="flex items-start gap-2.5 text-sm text-white/85">
                    <Icon name="check-circle" className="text-dim mt-0.5" />
                    {s.proof}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    {s.cta}
                    <Icon name="arrow-right" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
