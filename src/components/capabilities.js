"use client";
import Icon from "@/components/ui/icon";

import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";

const PILLARS = [
  {
    icon: "bi-layers",
    kicker: "Where the work happens",
    slug: "digital-ai",
    href: "/digital-ai",
    title: "Digital AI",
    desc: "Agents, documents and decisions inside the systems of record you already run.",
    items: [
      "Document intelligence",
      "Agentic AI",
      "Voice AI",
      "Workflow automation",
    ],
  },
  {
    icon: "bi-eye",
    kicker: "Out in the world",
    slug: "physical-ai",
    href: "/services/intelligent-industrial-automation",
    title: "Physical AI",
    desc: "Perception and autonomy on robots, drones, cameras and wearables.",
    items: [
      "Vision & video AI",
      "Sensor fusion & SLAM",
      "On-device inference",
      "Digital twins",
    ],
  },
  {
    icon: "bi-stars",
    kicker: "At the edge of capability",
    slug: "frontier-ai",
    href: "/frontier-ai",
    title: "Frontier AI",
    desc: "The strongest models available, applied to work that was out of reach.",
    items: [
      "Multimodal understanding",
      "Long-context reasoning",
      "Multi-agent orchestration",
      "Evaluation & assurance",
    ],
  },
  {
    icon: "bi-shield-lock",
    kicker: "Inside your perimeter",
    slug: "sovereign-ai",
    href: "/sovereign-ai",
    title: "Sovereign AI",
    desc: "Self-hosted and in-jurisdiction, for data that cannot leave.",
    items: [
      "Self-hosted LLM & SLM",
      "In-country hosting",
      "Air-gapped & on-device",
      "Audit evidence",
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="bg-[#010314]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <SectionHeader
          align="center"
          eyebrow="AI-native services"
          title="AI-native services for the physical and digital worlds."
          sub="Not a consultancy with an AI practice bolted on. Start with the work you need changed — we are measured on the outcome, not the effort."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.slug} y={16} delay={0.05 * i} className="h-full">
              <a
                href={p.href}
                className="group flex flex-col h-full rounded-3xl border border-line p-8 md:p-10 cursor-pointer transition-all duration-300 hover:border-white/60 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:border-white"
              >
                <p className="text-sm text-dim">{p.kicker}</p>
                <div className="mt-4 flex items-center gap-4">
                  <Icon name={p.icon} className="text-2xl text-white leading-none" />
                  <h3 className="text-[24px] leading-[33px] font-medium text-white">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 text-[15px] leading-[27px] text-muted">
                  {p.desc}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-white/85"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-white shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Explore
                  <Icon name="arrow-right" className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
