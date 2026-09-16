import Icon from "@/components/ui/icon";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "Production AI Engineering",
  description:
    "Where value gets built: GenAI and agentic systems, document intelligence, voice AI and full-stack delivery — pilots taken into production inside the systems of record you already run.",
};

const DELIVER = [
  ["GenAI & agentic systems", "Enterprise agent platform, vertical agents and multi-agent orchestration — work completed autonomously, exceptions escalated to people."],
  ["Document intelligence", "Extraction, classification, validation and approval routing — manual handling removed, straight-through processing at volume."],
  ["Voice AI", "Real-time voice agents, self-service and live handover — enquiries resolved without queues, service hours extended."],
  ["Enterprise app agents", "Agents embedded in the systems of record with MCP-based integration — adoption without retraining, no change to the system of record."],
  ["Full-stack delivery", "Interfaces, APIs and integration built and tested end to end, like a product team, not a model demo."],
  ["Evaluation & assurance", "Evaluation harnesses, guardrails and a measured baseline before anything goes live."],
];

const FDE = [
  ["Business analysis", "Turns business ideas into AI systems, agents and skills"],
  ["Data engineering", "Pulls in and transforms the data sources a model actually needs"],
  ["ML engineering", "Hosts models and runs post-training to fit the customer's domain"],
  ["Cloud & platform", "Deploys and integrates APIs as containers, production-grade"],
  ["Full-stack delivery", "Integrates with applications and tests end to end, like a dev"],
];

const PROOF = [
  ["ARB Corporation · ASX-listed manufacturer", "12,000+ supplier invoices a month automated on OCI, integrated with JD Edwards — 90% reduction in processing cost.", "/case-studies/supplier-invoice-automation"],
  ["Listed hotel and accommodation group", "Voice AI booking assistant handling availability, reservations and upsell inside the group's own systems.", "/case-studies/voice-ai-hotel-booking"],
  ["State prosecution authority", "Case files summarised, evidence tagged and work routed — inside government security controls.", "/case-studies/government-case-file-summarisation"],
];

export default function Page() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Service line 02"
        title="Production AI Engineering."
        tagline="Where value gets built. Blended consulting and AI engineering, working with business and IT stakeholders to take pilots into production — inside the systems of record you already run."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <section className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="pill">What it is</span>
            <p className="mt-6 text-[15px] leading-[27px] text-muted">
              A pilot proves a model can do the task. Production proves it does the task every day, inside your ERP, your case-management system or your call queue, with someone accountable when it drifts.
            </p>
            <p className="mt-4 text-[15px] leading-[27px] text-muted">
              Our forward-deployed engineers sit with your business and IT teams to close that gap: platform security and governance, observability and integration, connectors, prompt and skills engineering, knowledge management, and onboarding.
            </p>
            <div className="mt-8 rounded-2xl border border-white/40 bg-glass p-6">
              <p className="text-xs text-dim uppercase tracking-[0.12em]">Outcome</p>
              <p className="mt-2 text-white font-medium">Pilots in production, cost per transaction down, cycle time cut.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="pill">What we deliver</span>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              {DELIVER.map(([t, b]) => (
                <div key={t} className="rounded-2xl border border-line p-6">
                  <h3 className="text-[18px] leading-7 font-medium text-white">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <span className="pill">Forward-deployed engineering · five disciplines</span>
            <div className="mt-6 border-b border-line">
              {FDE.map(([t, b]) => (
                <div key={t} className="grid sm:grid-cols-[200px_1fr] gap-x-6 gap-y-1 border-t border-line py-4">
                  <p className="text-white font-medium">{t}</p>
                  <p className="text-sm leading-6 text-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <span className="pill">Packaged engagements</span>
            <div className="mt-6 flex flex-col gap-4">
              <a href="/digital-ai" className="group rounded-2xl border border-line p-6 hover:border-white/40 transition-colors">
                <p className="text-xs text-dim">8–12 weeks</p>
                <p className="mt-2 text-white font-medium">P2 Enterprise Agents Foundation</p>
                <p className="mt-1 text-sm leading-6 text-muted">Production environment, architecture blueprints, two live use cases.</p>
              </a>
              <a href="/digital-ai" className="group rounded-2xl border border-line p-6 hover:border-white/40 transition-colors">
                <p className="text-xs text-dim">12–16 weeks</p>
                <p className="mt-2 text-white font-medium">P4 Industry Agents Accelerator</p>
                <p className="mt-1 text-sm leading-6 text-muted">Vertical agents deployed against the customer's own systems.</p>
              </a>
              <a href="/digital-ai" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-slate-200">All agentic AI packages <Icon name="arrow-right" /></a>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">Proof</span>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {PROOF.map(([who, body, href]) => (
              <a key={who} href={href} className="group rounded-2xl border border-line p-6 hover:border-white/40 transition-colors flex flex-col">
                <p className="text-sm text-dim">{who}</p>
                <p className="mt-2 text-white leading-relaxed">{body}</p>
                <span className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">Read case <Icon name="arrow-right" className="transition-transform group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Cta title="Bring us the pilot that never made it to production." subtitle="We baseline cost per transaction and cycle time before we start, and report against them after we ship." />
      <Footer />
      <FootNote />
    </div>
  );
}
