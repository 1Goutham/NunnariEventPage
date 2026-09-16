"use client";
import Icon from "@/components/ui/icon";

import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";

const REASONS = [
  {
    icon: "bi-patch-check",
    title: "Strong AI governance",
    body: "We are ISO/IEC 42001 certified and audited on it. The same discipline is a service we deliver to clients — assessment, policy, testing, audit and managed governance — so your AI estate stands up in front of a regulator.",
  },
  {
    icon: "bi-robot",
    title: "AI as the workforce",
    body: "We run the company the way we advise clients to run theirs. Agents work inside our sales, hiring and software delivery practices on an AI-native SDLC, so what we recommend is what we use every day.",
  },
  {
    icon: "bi-cpu",
    title: "Research-led",
    body: "An applied research team across digital and physical AI: on-device work with Qualcomm, a channel and forward-deployed engineering partnership with Anthropic, and a convergence layer that lets agents, perception and people share one event mesh.",
  },
  {
    icon: "bi-bullseye",
    title: "Outcome-focused",
    body: "Every engagement is signed against a measure you already report on — baselined before we start, reported after we ship. You pay for what changes, not for who we staff.",
  },
];

export default function ResponsibleAi() {
  return (
    <section
      aria-label="Our unique advantage"
      className="relative bg-[#010314] bg-vbg bg-cover bg-bottom"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <SectionHeader
          eyebrow="Our unique advantage"
          title="Governed, AI-native, research-led, and paid on outcomes."
          sub="Four things that are true of every engagement, whether it is a four-week accelerator or a multi-year managed service."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} y={16} delay={0.05 * i} className="h-full">
              <div className="flex flex-col h-full rounded-3xl border border-line bg-[#010314]/40 p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 text-white"
                  >
                    <Icon name={r.icon} className="text-lg" />
                  </span>
                  <h3 className="text-[22px] leading-[33px] font-medium text-white">
                    {r.title}
                  </h3>
                </div>
                <p className="mt-5 text-[15px] leading-[27px] text-muted">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal y={12} delay={0.2}>
          <p className="mt-8 text-sm text-dim">
            ISO/IEC 42001 certified · National AI Centre listed · NIST AI RMF, EU AI Act &amp; OECD: aligned with, not separately certified.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
