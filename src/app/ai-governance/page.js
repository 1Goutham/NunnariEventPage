import Icon from "@/components/ui/icon";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "AI governance",
  description:
    "AI governance run as a workflow: ISO/IEC 42001 certified, NIST AI RMF and EU AI Act aligned, delivered as fixed-scope engagements from assessment to audit.",
};

const STEPS = [
  { num: "01", title: "Discovery & scoping", body: "Use cases, stakeholders, regulatory exposure" },
  { num: "02", title: "Gap assessment", body: "Current state against a regulatory framework" },
  { num: "03", title: "Process governance", body: "Controls, roles and decision rights" },
  { num: "04", title: "Implementation", body: "Tooling, evidence and reporting live" },
];

const PILLARS = [
  ["Leadership", "Committee, sponsorship, decision rights", "Named owner for every AI decision"],
  ["Policies", "Principles, policy suite, procedures", "Ratified and version-controlled"],
  ["Risk", "Taxonomy, assessments, register", "Treatment plans with due dates"],
  ["Controls", "Gates, monitoring, human review", "Release blocked without evidence"],
  ["Training", "AI literacy, role-based enablement", "Certification pathway for key staff"],
  ["Reporting", "Evidence, lineage, external reporting", "Audit pack produced on demand"],
];

const LEVELS = [
  ["Organisational", "Oversight, structure, culture"],
  ["System", "Lifecycle, risk, incidents, gates"],
  ["Model", "Registry, drift, monitoring, evidence"],
];

const PACKAGES = [
  { id: "G1", weeks: "4–6 weeks", title: "Assessment & Risk Tiering", body: "Inventory and risk-tier the AI estate, score maturity, price the gap.", out: "Risk-tiered inventory, maturity scorecard" },
  { id: "G2", weeks: "6–8 weeks", title: "Policy, Framework & Literacy", body: "Policy suite, committee, decision rights, GRC literacy.", out: "Policy suite, committee charter, intake gate" },
  { id: "G3", weeks: "8–10 weeks", title: "Risk & Impact Assessment", body: "ISO 42005 impact assessments, FRIA, risk register, controls.", out: "Impact assessments, risk register" },
  { id: "G4", weeks: "8–12 weeks", title: "Testing, Evaluation & Red-Teaming", body: "Evals, red-teaming, bias and drift testing, evidence platform.", out: "Eval results, red-team findings" },
  { id: "G5", weeks: "10–14 weeks", title: "Audit, Certification & Assurance", body: "Internal audit, conformity audit, vendor audit, attestation.", out: "Audit report, control scores, attestation" },
  { id: "G6", weeks: "Annuity · 12 months+", title: "AIOps & Managed Governance", body: "Continuous monitoring, evidence on demand, retained expertise.", out: "Monthly dashboards, incident register" },
];

const ACCELERATORS = ["A1 Transparency", "A2 Vendor audit", "A3 Agent guardrails", "A4 Red-team sprint", "A5 GRC literacy", "A6 AIOps baseline"];

const BADGES = ["ISO/IEC 42001 certified", "NIST AI RMF", "EU AI Act aligned", "National AI Centre listed"];

export default function AiGovernance() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="AI governance"
        title="Governance, run as a workflow."
        tagline="ISO/IEC 42001 certified, NIST AI RMF and EU AI Act aligned — with audit evidence produced as a by-product of running the system, not bolted on afterwards."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="flex flex-wrap gap-3">
          {BADGES.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 border border-line rounded-full px-4 py-2 text-sm text-white">
              <Icon name="patch-check" className="text-dim" />
              {b}
            </span>
          ))}
        </div>

        <section className="mt-16 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="pill">Our story</span>
            <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium">
              We got certified first. Then we made it a service.
            </h2>
            <p className="mt-5 text-[15px] leading-[27px] text-muted">
              In January 2025 Nunnari Labs became one of the first AI-native companies in India certified to ISO/IEC 42001:2023, the international standard for AI management systems. The audit covered how we design, build, deploy and operate every AI system we ship — risk, data governance, human oversight, monitoring and improvement.
            </p>
            <p className="mt-4 text-[15px] leading-[27px] text-muted">
              Doing it for ourselves taught us what the standard actually asks of an engineering organisation, and what an auditor looks for. That is now what we deliver to clients: the same workflow, pillars and evidence, packaged so a public-sector agency or an enterprise can get from an unmanaged AI estate to an audit-ready one in months, not years.
            </p>
          </div>
          <div className="lg:col-span-5 rounded-2xl border border-white/40 bg-glass p-6 md:p-7">
            <p className="text-xs text-dim uppercase tracking-[0.12em]">Governance services</p>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              {["Assessment and risk tiering of your AI estate", "Policy suite, committee and decision rights", "Impact and risk assessments (ISO 42005, FRIA)", "Testing, evaluation and red-teaming", "Audit, certification readiness and assurance", "AIOps and managed governance against an SLA"].map((it) => (
                <li key={it} className="border-t border-line pt-2">{it}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">The workflow</span>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-2xl border border-line p-6">
                <p className="text-[26px] leading-none font-medium text-dim">{s.num}</p>
                <h3 className="mt-4 text-[18px] leading-7 font-medium text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-dim">Framework refreshed annually against regulatory change.</p>
        </section>

        <section className="mt-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <span className="pill">Six pillars hold it up</span>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PILLARS.map(([t, b, n]) => (
                <div key={t} className="rounded-2xl border border-line p-6">
                  <h3 className="text-[18px] leading-7 font-medium text-white">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{b}</p>
                  <p className="mt-3 text-xs text-dim">{n}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <span className="pill">Established at three levels</span>
            <div className="mt-8 flex flex-col gap-4">
              {LEVELS.map(([t, b]) => (
                <div key={t} className="rounded-2xl border border-line bg-glass p-6">
                  <p className="text-white font-medium">{t}</p>
                  <p className="mt-1 text-sm text-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">Modular governance solutions</span>
          <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            Packaged engagements with fixed scope, milestones and deliverables.
          </h2>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            Each mapped to ISO/IEC 42001, NIST AI RMF and the local regulator.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PACKAGES.map((p) => (
              <div key={p.id} className="rounded-2xl border border-line p-6 flex flex-col">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-white font-semibold">{p.id}</p>
                  <p className="text-xs text-dim">{p.weeks}</p>
                </div>
                <h3 className="mt-3 text-[18px] leading-7 font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{p.body}</p>
                <p className="mt-auto pt-5 border-t border-line text-xs text-white/85">{p.out}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-xs text-dim uppercase tracking-[0.12em] mr-2">Four-week accelerators</span>
            {ACCELERATORS.map((a) => (
              <span key={a} className="text-xs border border-line rounded-full px-3 py-1.5 text-white/85">{a}</span>
            ))}
          </div>
        </section>
      </main>

      <Cta
        title="Bring us your AI estate. We'll make it audit-ready."
        subtitle="Start with a four-week accelerator or a G1 assessment — fixed scope, fixed deliverables."
      />
      <Footer />
      <FootNote />
    </div>
  );
}
