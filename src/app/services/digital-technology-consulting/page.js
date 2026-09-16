import Icon from "@/components/ui/icon";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "AI Consulting & Governance",
  description:
    "Where the programme starts: AI strategy and roadmap, policy and risk frameworks, audits and readiness, and the operating model — ending in sustainable adoption and a board-ready control framework.",
};

const DELIVER = [
  ["AI strategy & roadmap", "Use cases ranked by value and risk, sequenced against the data and systems you already have."],
  ["Policy & risk frameworks", "A policy suite, risk taxonomy and register mapped to ISO/IEC 42001, NIST AI RMF and your local regulator."],
  ["Audits & readiness", "Gap assessment of the current AI estate — inventory, risk tiering, maturity scorecard — and the price of closing the gap."],
  ["Operating model", "Committee, decision rights, intake gates and a Centre of Excellence, so every AI decision has a named owner."],
];

const PACKAGES = [
  ["A³ Adoption Framework", "6–8 weeks", "Readiness scorecard, prioritised roadmap, governance charter."],
  ["G1 Assessment & Risk Tiering", "4–6 weeks", "Risk-tiered inventory and maturity scorecard."],
  ["G2 Policy, Framework & Literacy", "6–8 weeks", "Policy suite, committee charter, intake gate."],
  ["G5 Audit, Certification & Assurance", "10–14 weeks", "Audit report, control scores, attestation."],
];

const PROOF = [
  ["Landcom · NSW Government", "Governance model, a retained forward-deployed engineer and enablement across 200 staff — 100% enablement.", "/case-studies/public-sector-genai-enablement"],
  ["Nunnari Labs", "Among the first AI-native companies in India certified to ISO/IEC 42001:2023 — the same discipline we bring to your estate.", "/ai-governance"],
];

export default function Page() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Service line 01"
        title="AI Consulting & Governance."
        tagline="Where the programme starts. Strategy, policy, readiness and the operating model — so adoption is sustainable and the control framework is board-ready before the first system ships."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <section className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="pill">What it is</span>
            <p className="mt-6 text-[15px] leading-[27px] text-muted">
              Most AI programmes stall between the pilot and the board. The use case works, but nobody can say who owns the risk, what evidence an auditor would see, or how the second and tenth use cases get approved.
            </p>
            <p className="mt-4 text-[15px] leading-[27px] text-muted">
              This service line puts that in place first: a roadmap the business signs, a control framework the board can read, and an operating model that lets your own teams keep approving use cases without us.
            </p>
            <div className="mt-8 rounded-2xl border border-white/40 bg-glass p-6">
              <p className="text-xs text-dim uppercase tracking-[0.12em]">Outcome</p>
              <p className="mt-2 text-white font-medium">Sustainable AI adoption and a board-ready control framework.</p>
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

        <section className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <span className="pill">Packaged engagements</span>
            <a href="/ai-governance" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-slate-200">
              All six governance packages and the four-week accelerators
              <Icon name="arrow-right" />
            </a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGES.map(([t, w, o]) => (
              <div key={t} className="rounded-2xl border border-line p-6 flex flex-col">
                <p className="text-xs text-dim">{w}</p>
                <h3 className="mt-2 text-[18px] leading-7 font-medium text-white">{t}</h3>
                <p className="mt-auto pt-4 text-sm leading-6 text-muted">{o}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-dim">Fixed scope, fixed milestones, fixed deliverables — each mapped to ISO/IEC 42001, NIST AI RMF and the local regulator.</p>
        </section>

        <section className="mt-20">
          <span className="pill">Proof</span>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {PROOF.map(([who, body, href]) => (
              <a key={who} href={href} className="group rounded-2xl border border-line p-6 hover:border-white/40 transition-colors">
                <p className="text-sm text-dim">{who}</p>
                <p className="mt-2 text-white leading-relaxed">{body}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">Read more <Icon name="arrow-right" className="transition-transform group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Cta title="Start with the estate you already have." subtitle="A four-week accelerator or a G1 assessment tells you what you are running, what it risks, and what it would take to make it audit-ready." />
      <Footer />
      <FootNote />
    </div>
  );
}
