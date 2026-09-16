"use client";
import LogoImg from "@/components/ui/logoImg";

import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";

const REGIONS = [
  {
    name: "India",
    cities: "Coimbatore",
    points: [
      "Research-led engineering, ISO/IEC 42001 certified",
      "Digital, Physical and edge AI build",
      "AI Tamil Nadu community — deep talent pipeline",
    ],
  },
  {
    name: "Australia",
    cities: "Sydney",
    points: [
      "Enterprise and public-sector relationships",
      "Consulting, governance and risk frameworks",
      "Client engagement with DeepWeaver, Sydney",
    ],
  },
];

const BRANDS = [
  { kicker: "Education", name: "Nunnari Academy", blurb: "AI skilling for enterprise teams and practitioners, delivered on its own platform, separate from Nunnari Labs.", href: "https://nunnari.academy" },
];

function RegionCard({ r }) {
  return (
    <div className="h-full rounded-2xl border border-line p-6 md:p-7">
      <p className="text-[22px] leading-8 font-medium text-white">{r.name}</p>
      <p className="mt-1 text-sm text-dim">{r.cities}</p>
      <ul className="mt-4 space-y-2">
        {r.points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm leading-6 text-muted">
            <span aria-hidden="true" className="mt-[10px] h-1 w-1 rounded-full bg-white shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BrandCard({ b }) {
  const inner = (
    <>
      <p className="text-xs text-dim uppercase tracking-[0.12em]">{b.kicker}</p>
      <p className="mt-2 text-white font-medium">
        {b.name}
        {b.href ? (
          <span aria-hidden="true" className="ml-1.5 text-muted group-hover:text-white transition-colors">↗</span>
        ) : null}
      </p>
      <p className="mt-1 text-sm text-muted leading-6">{b.blurb}</p>
    </>
  );
  return b.href ? (
    <a href={b.href} target="_blank" rel="noopener noreferrer" className="group block h-full rounded-2xl border border-line p-5 hover:border-white/40 transition-colors">
      {inner}
    </a>
  ) : (
    <div className="h-full rounded-2xl border border-line p-5">{inner}</div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-[#010314] border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-stretch">
          {/* Who we are */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <SectionHeader
              eyebrow="The company"
              title="Two regions, one deep tech practice."
              sub="Teams in India and Australia; clients across India, Australia and the U.S. One aim: trustworthy, human-led AI that organisations actually operate."
            />

            <Reveal y={12} delay={0.15}>
              <p className="text-[15px] leading-[27px] text-muted">
                Founded in Coimbatore in 2020, we are among the first AI-native
                companies in India certified to ISO/IEC 42001:2023. We build
                AI-native products, embed with your teams, and operate what we
                ship.{" "}
                <a
                  href="https://youtu.be/0itVgeZhiPU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-b border-white/40 hover:border-white transition-colors"
                >
                  Watch our story →
                </a>
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4 flex-1">
              {REGIONS.map((r, i) => (
                <Reveal key={r.name} y={16} delay={0.1 + i * 0.05} className="h-full">
                  <RegionCard r={r} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Where we are */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <Reveal y={16} delay={0.2}>
              <div className="rounded-2xl border border-white/40 bg-glass p-6 md:p-7">
                <p className="text-xs text-dim uppercase tracking-[0.12em]">Exclusive partnership</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <LogoImg src="/logo-dark.png" alt="Nunnari Labs" className="h-16 w-auto" />
                  <span aria-hidden="true" className="text-dim text-xl">×</span>
                  <LogoImg src="/deepweaver-logo.png" alt="DeepWeaver" className="h-8 w-auto" />
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Nunnari Labs and DeepWeaver operate as one delivery team across
                  India and Australia. DeepWeaver leads client engagement in
                  Australia and New Zealand from Sydney; Nunnari leads engineering
                  from Coimbatore. One project history, one governance layer, no
                  hand-offs between companies.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              <Reveal y={16} delay={0.2} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-vvbg bg-cover bg-bottom p-6 md:p-7 flex items-start min-h-[120px]">
                  <div>
                    <p lang="ta" className="text-[32px] md:text-[38px] leading-none text-white font-medium">
                      நுண்ணறிவு
                    </p>
                    <p className="mt-3 text-sm text-white/80 max-w-md">
                      nuṇṇaṟivu — Tamil for “intelligence.” It’s where our name comes from.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal y={16} delay={0.25} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-vvbg bg-cover bg-bottom p-6 md:p-7 flex items-start min-h-[120px]">
                  <div>
                    <div className="h-[32px] md:h-[38px] flex items-center">
                      <LogoImg src="/deepweaver-logo.png" alt="DeepWeaver" className="h-8 w-auto" />
                    </div>
                    <p className="mt-3 text-sm text-white/80 max-w-md">
                      Weaving human-led AI into the enterprise fabric.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-4 flex-1">
              {BRANDS.map((b, i) => (
                <Reveal key={b.name} y={16} delay={0.25 + i * 0.05} className="h-full">
                  <BrandCard b={b} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
