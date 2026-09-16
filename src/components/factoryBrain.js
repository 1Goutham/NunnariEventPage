"use client";

import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";

const LAYERS = [
  { label: "Human", body: "Approves, overrides, sets priorities" },
  { label: "Factory Brain · AI", body: "AI planning · scheduling · optimisation · recommendations", highlight: true },
  { label: "Business & operations", body: "ERP · MES · Inventory · CRM · Purchase · Maintenance · Quality · Dispatch" },
  { label: "Deterministic control", body: "SCADA · PLC · CNC · Sensors · Vision systems" },
  { label: "Machines", body: "Lines, cells, tooling, plant" },
];

const OUTCOMES = [
  { value: "10–20%", label: "less machine idle time", how: "Better scheduling" },
  { value: "15–30%", label: "less scheduling effort", how: "AI-assisted planning" },
  { value: "Lower", label: "inventory carrying cost", how: "Demand prediction" },
  { value: "Improved", label: "on-time delivery", how: "Dynamic dispatch" },
];

const DOMAINS = [
  ["Sales", "Demand prediction, order prioritisation, delivery prediction"],
  ["Inventory", "Stock optimisation, raw material alerts, reorder points"],
  ["Production", "Finite capacity scheduling, line balancing, shift planning"],
  ["Maintenance", "Predictive maintenance, planned downtime, spare-parts prediction"],
  ["Quality", "Vision inspection, root-cause suggestions, rework prediction"],
  ["Dispatch", "Truck planning, delivery ETA, route consolidation"],
];

export default function FactoryBrain({ showHeader = true }) {
  return (
    <section id="factory-brain" className="bg-[#010314]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start [&>*]:min-w-0">
          <div>
            {showHeader ? (
              <SectionHeader
                eyebrow="Manufacturing"
                title="The Factory Brain."
                sub="The orchestration layer between ERP and PLC — the one neither system covers. AI recommends. Humans approve. The PLC executes."
              />
            ) : (
              <SectionHeader
                eyebrow="What it does"
                title="Seven domains, one planning layer."
                sub="Every recommendation is explainable and reversible — planners approve, override, and set priorities."
              />
            )}

            <Reveal y={12} delay={0.15}>
              <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {DOMAINS.map(([name, body]) => (
                  <li key={name}>
                    <p className="text-white font-medium">{name}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal y={12} delay={0.2}>
              <p className="mt-8 text-sm text-dim">
                AI never replaces the PLC. It makes PLC-driven factories smarter.
                Cloud, hybrid, or fully on-premise — 4 to 12+ weeks to deploy.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal y={16} delay={0.1}>
              <div className="rounded-3xl border border-line p-6 md:p-8 flex flex-col gap-3">
                {LAYERS.map((l, i) => (
                  <div key={l.label}>
                    <div
                      className={`grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-4 rounded-xl px-4 py-3 border ${
                        l.highlight
                          ? "border-white/40 bg-glass"
                          : "border-line"
                      }`}
                    >
                      <p className="text-sm font-medium text-white">{l.label}</p>
                      <p className="text-sm text-muted">{l.body}</p>
                    </div>
                    {i < LAYERS.length - 1 ? (
                      <p aria-hidden="true" className="text-center text-dim text-xs leading-none pt-3">
                        ▲
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal y={16} delay={0.15}>
              <dl className="grid grid-cols-2 gap-4">
                {OUTCOMES.map((o) => (
                  <div key={o.label} className="rounded-2xl border border-line p-5">
                    <dd className="text-[28px] leading-none text-white font-medium">
                      {o.value}
                    </dd>
                    <dt className="mt-2 text-sm text-white/90">{o.label}</dt>
                    <dd className="mt-1 text-xs text-dim">{o.how}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
