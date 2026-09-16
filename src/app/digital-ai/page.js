import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "Digital AI",
  description:
    "Digital AI: enterprise agents, document intelligence and voice AI inside the systems you already run, taken from pilot to production and operated after go-live.",
};

const PACKAGES = [
  { id: "P1", weeks: "6–8 weeks", title: "Enterprise A³ Adoption Framework", body: "Readiness, prioritisation and the operating model that makes agents adoptable.", items: ["AI readiness assessment", "Change management", "Governance model", "Centre of Excellence", "Success metrics & KPIs"], out: "Readiness scorecard, prioritised roadmap, governance charter" },
  { id: "P2", weeks: "8–12 weeks", title: "Enterprise Agents Foundation", body: "Production-ready agent infrastructure, with security and integration built in.", items: ["Agent platform setup", "Vector database integration", "Security & governance", "Multi-agent architecture", "Integration hub"], out: "Production environment, architecture blueprints, two live use cases" },
  { id: "P3", weeks: "12 weeks", title: "Enterprise AgentOps", body: "Complete lifecycle management for agents running in production.", items: ["Monitoring & observability", "CI/CD for agents", "Incident response", "Performance optimisation", "Compliance reporting"], out: "AgentOps platform, dashboards, runbooks, pipeline templates" },
  { id: "P4", weeks: "12–16 weeks", title: "Industry Agents Accelerator", body: "Pre-built vertical agents that shorten the path from pilot to production.", items: ["Domain agent library", "Reference data models", "Vertical guardrails", "Regulatory templates", "Deployment blueprints"], out: "Vertical agents deployed against the customer's own systems" },
];

const STACK = ["User interface", "Application integration", "Agent orchestration", "Tools & APIs", "Agent framework", "Foundation model", "AI infrastructure"];

const DOMAINS = [
  { name: "Financial services", cases: [["Conversational banking", "Servicing and advisory agents across retail channels"], ["Regulatory compliance agents", "Automated reporting, filing and evidence trails"], ["Risk assessment", "Credit and counterparty risk evaluated on the fly"], ["Claims & document processing", "Intelligent intake, validation and settlement routing"]] },
  { name: "Manufacturing", cases: [["Autonomous quality control", "Vision inspection with root-cause suggestions"], ["Digital twin orchestration", "Simulated changes tested before they hit the line"], ["Predictive maintenance", "Equipment health monitoring and window scheduling"], ["Supply chain optimisation", "Inventory, logistics and shortage anticipation"]] },
  { name: "Public sector", cases: [["Citizen service automation", "Enquiry handling, routing and live-agent handover"], ["Policy generation", "Drafting and consistency checking against precedent"], ["Case & evidence processing", "Summarisation, tagging and workflow routing"], ["Crisis management", "Situational synthesis across agencies and feeds"]] },
  { name: "Retail & consumer", cases: [["Hyper-personalisation", "Offers and journeys assembled per customer"], ["Visual commerce", "Search, merchandising and content from imagery"], ["Autonomous supply chain", "Replenishment and allocation without manual planning"], ["Trade document intelligence", "Multi-lingual extraction across trading partners"]] },
];

const CAPABILITIES = [
  ["AI Infrastructure", "GPU platform build, training, fine-tuning and inference management", "Model economics under control, capacity that scales with demand"],
  ["Agentic AI", "Enterprise agent platform, vertical agents, multi-agent orchestration", "Work completed autonomously, exceptions escalated to people"],
  ["Document Intelligence", "Extraction, classification, validation and approval routing", "Manual handling removed, straight-through processing at volume"],
  ["Voice AI", "Real-time voice agents, self-service and live handover", "Enquiries resolved without queues, service hours extended"],
  ["Vision & Video AI", "Event detection, safety and quality inspection, video summarisation", "Incidents caught in real time, defects and rework reduced"],
  ["Enterprise App Agents", "Agents embedded in the systems of record, MCP-based integration", "Adoption without retraining, no change to the system of record"],
  ["Data for AI", "Data readiness, lakehouse, feature pipelines and decision reporting", "Decisions traceable to source, AI-ready data as a standing asset"],
  ["AgentOps & Governance", "Monitoring, continuous evaluation, audit and compliance reporting", "Evidence on demand, drift and risk visible before they bite"],
];

export default function DigitalAi() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Digital AI"
        title="Agents, documents and decisions, inside the systems you already run."
        tagline="Digital AI is where the work happens: document intelligence, voice, workflow automation and enterprise agents, built into your systems of record and operated after go-live."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <section>
          <span className="pill">Enterprise Agents</span>
          <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            From the first agent to a fleet you can audit.
          </h2>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            Most enterprises have a pilot that works and no path to the fiftieth. We take agents through four stages: readiness, so the organisation can adopt them; a foundation, so they run on production infrastructure with security and integration built in; operations, so they stay accurate and observable; and vertical agents, so the next use case starts from something that already works in your industry.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGES.map((p) => (
              <div key={p.id} className="rounded-2xl border border-line p-6 flex flex-col">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-white font-semibold">{p.id}</p>
                  <p className="text-xs text-dim">{p.weeks}</p>
                </div>
                <h3 className="mt-3 text-[18px] leading-7 font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{p.body}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-white/85">
                      <span aria-hidden="true" className="mt-[9px] h-1 w-1 rounded-full bg-white shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 border-t border-line text-xs text-white/85">{p.out}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-xs text-dim uppercase tracking-[0.12em] mr-2">Delivered on the full agent stack</span>
            {STACK.map((s) => (
              <span key={s} className="text-xs border border-line rounded-full px-3 py-1.5 text-white/85">{s}</span>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">What we build, and what it delivers</span>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            Delivered on the customer's cloud and models of choice.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map(([t, b, o]) => (
              <div key={t} className="rounded-2xl border border-line p-6 flex flex-col">
                <h3 className="text-[18px] leading-7 font-medium text-white">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{b}</p>
                <div className="mt-auto pt-5 border-t border-line">
                  <p className="text-xs text-dim uppercase tracking-[0.12em]">Outcome</p>
                  <p className="mt-1 text-sm text-white/90">{o}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">Agentic use cases by domain</span>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DOMAINS.map((d) => (
              <div key={d.name}>
                <p className="rounded-xl border border-white/40 bg-glass px-4 py-2.5 text-white font-medium">{d.name}</p>
                <div className="mt-3 flex flex-col gap-3">
                  {d.cases.map(([t, b]) => (
                    <div key={t} className="rounded-xl border border-line p-4">
                      <p className="text-white font-medium text-sm">{t}</p>
                      <p className="mt-1 text-xs leading-5 text-muted">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Cta
        title="Two live agent use cases in weeks."
        subtitle="Start with the A³ readiness scorecard, or go straight to the Agents Foundation."
      />
      <Footer />
      <FootNote />
    </div>
  );
}
