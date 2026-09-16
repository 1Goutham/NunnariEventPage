"use client";
import Icon from "@/components/ui/icon";

import CountUp from "./motion/count-up";
import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";

const MODES = [
  { icon: "bi-people", title: "Co-Delivery", body: "We build alongside your delivery teams, sprint by sprint." },
  { icon: "bi-compass", title: "Centre of Excellence", body: "We set the standards and guidance; your teams deliver." },
  { icon: "bi-box-seam", title: "Project Delivery", body: "A specific AI system, end to end, against a fixed scope." },
  { icon: "bi-arrow-up-right-circle", title: "Uplift & Transition", body: "We lead the early work, then train your team to take it over." },
  { icon: "bi-hdd-network", title: "As a Service", body: "We own the infrastructure and the application, and run it against an SLA.", highlight: true },
];

const STATS = [
  { value: 30, suffix: "+", label: "AI-native engineers" },
  { value: 50, suffix: "+", label: "Systems in production" },
  { value: 2, suffix: "", label: "Regions · India and Australia" },
  { value: 10000, suffix: "+", label: "AI Tamil Nadu community" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#010314] border-t border-line" id="how-we-work">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <SectionHeader
          eyebrow="How we work"
          title="Five ways to engage, from co-delivery to as-a-service."
          sub="Accountable for results, not effort. Capability transferred, not retained. Every engagement is signed against a measure you already report on — baselined before we start, reported after we ship."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {MODES.map((m, i) => (
            <Reveal key={m.title} y={16} delay={0.05 * i} className="h-full">
              <div className={`h-full rounded-2xl border p-6 ${m.highlight ? "border-white/40 bg-glass" : "border-line"}`}>
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white">
                  <Icon name={m.icon} />
                </span>
                <h3 className="mt-5 text-[18px] leading-7 font-medium text-white">{m.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal y={12} delay={0.1}>
          <p className="mt-6 text-sm text-dim">
            Onshore, offshore and blended — senior teams across India and Australia, in your time zone. Hypercare through to AIOps, with monitoring on every build.
          </p>
        </Reveal>

        <Reveal y={12} delay={0.15}>
          <dl className="mt-14 rounded-3xl border border-line px-6 py-10 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-10">
            {STATS.map((m, i) => (
              <div key={m.label} className={`text-center ${i > 0 ? "md:border-l md:border-line" : ""}`}>
                <dd className="text-[34px] md:text-[40px] leading-none text-white font-medium">
                  <CountUp to={m.value} suffix={m.suffix} />
                </dd>
                <dt className="mt-3 text-sm text-muted">{m.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
