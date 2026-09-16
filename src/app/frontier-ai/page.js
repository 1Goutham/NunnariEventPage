import LogoImg from "@/components/ui/logoImg";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "Frontier AI",
  description:
    "Frontier AI: the strongest models applied to enterprise and employee productivity, with forward-deployed engineers beside your teams to take it into production.",
};

const LANDS = [
  ["Enterprise productivity", "Frontier models on the work that runs the business: procurement, finance, legal, operations. Long-context reasoning over the documents and decisions a department actually handles."],
  ["Employee productivity", "Every knowledge worker with a governed assistant that knows the company's own systems, policies and data — adopted, not just licensed."],
  ["Frontier intelligence systems", "New capability the organisation could not buy before: multimodal understanding, multi-agent orchestration, and evaluation and assurance around all of it."],
];

const FDE_FOCUS = ["Platform security & governance", "Observability & platform integration", "Connectors & vendor integration", "Skills & prompt engineering", "Knowledge management", "Enablement & onboarding"];
const FDE_WHO = [
  ["Large enterprises", "Dozens of pilots, fragmented IT, no one owning outcomes."],
  ["Small and medium business", "No AI team to hire, and no case for building one yet — a fractional expert instead."],
  ["ISVs and software vendors", "Racing to ship AI features before the roadmap goes stale."],
];
const FDE_SKILLS = [
  ["Business analysis", "Turns business ideas into AI systems, agents and skills"],
  ["Data engineering", "Pulls in and transforms the data sources a model actually needs"],
  ["ML engineering", "Hosts models and runs post-training to fit the customer's domain"],
  ["Cloud & platform", "Deploys and integrates APIs as containers, production-grade"],
  ["Full-stack delivery", "Integrates with applications and tests end to end, like a dev"],
];

export default function FrontierAi() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Frontier AI"
        title="The strongest models, applied to work that was out of reach."
        tagline="Where Digital AI puts agents inside the systems you run, Frontier AI raises what the model itself can do for the enterprise — and puts engineers beside your teams to make it stick."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <section>
          <span className="pill">Where it lands</span>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {LANDS.map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-line p-6 md:p-7">
                <h3 className="text-[20px] leading-7 font-medium text-white">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="pill">The Frontier platform · with Anthropic</span>
            <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium">
              Claude, delivered as a platform your enterprise can run.
            </h2>
            <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-xl">
              Nunnari Labs is an Anthropic channel and forward-deployed engineering partner. The Frontier platform is how we bring Claude into enterprise and government work in India and Australia: five layers that take an organisation from first access to frontier models running in production, under its own governance.
            </p>
            <ul className="mt-5 space-y-2 max-w-xl">
              {[
                ["Enablement", "role-based skills, sandboxes and guardrails so people use Claude well and safely"],
                ["Adoption", "use cases ranked, piloted and rolled out with measured uptake"],
                ["Governance", "Claude inside your ISO/IEC 42001, NIST AI RMF and EU AI Act posture"],
                ["Forward-deployed engineering", "engineers inside your teams taking frontier capability into production systems"],
                ["FrontierOps", "model routing, cost and latency, evaluation, drift and upgrades handled"],
              ].map(([t, b]) => (
                <li key={t} className="flex items-start gap-2.5 text-sm leading-6 text-muted border-t border-line pt-2">
                  <span className="text-white font-medium shrink-0">{t}</span>
                  <span>— {b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 rounded-2xl border border-white/40 bg-glass p-6 md:p-7">
            <LogoImg src="/partners/anthropic.webp" alt="Anthropic" className="h-7 w-auto bg-white rounded-md px-3 py-1.5" />
            <p className="mt-5 text-xs text-dim uppercase tracking-[0.12em]">What the partnership covers</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="border-t border-line pt-2">Channel access to Claude models for enterprise and government</li>
              <li className="border-t border-line pt-2">Forward-deployed engineers embedded with client teams</li>
              <li className="border-t border-line pt-2">Governed deployments: evaluation, guardrails, audit evidence</li>
            </ul>
          </div>
        </section>


        <section className="mt-20 rounded-3xl border border-line p-8 md:p-12">
          <span className="pill">Forward-deployed engineering</span>
          <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            Blended consulting and AI engineering, inside your teams.
          </h2>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            A forward-deployed engineer works with business and IT stakeholders to take AI pilots into production — and stays until the organisation can carry it. Enablement, adoption, ROI.
          </p>
          <a href="/forward-deployed-engineers" className="mt-4 inline-flex items-center gap-2 text-sm text-white hover:underline">
            How our FDE engagements run <span aria-hidden="true">→</span>
          </a>
          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-xs text-dim uppercase tracking-[0.12em]">Areas of focus</p>
              <ol className="mt-4 space-y-2">
                {FDE_FOCUS.map((f, i) => (
                  <li key={f} className="flex items-baseline gap-3 text-sm text-white/90 border-t border-line pt-2">
                    <span className="text-dim text-xs w-6">{String(i + 1).padStart(2, "0")}</span>{f}
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs text-dim uppercase tracking-[0.12em]">Who needs an FDE</p>
              <div className="mt-4 space-y-4">
                {FDE_WHO.map(([t, b]) => (
                  <div key={t} className="border-t border-line pt-3">
                    <p className="text-white font-medium">{t}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 rounded-2xl border border-white/40 bg-glass p-6">
              <p className="text-xs text-dim uppercase tracking-[0.12em]">Five disciplines</p>
              <div className="mt-4 space-y-3">
                {FDE_SKILLS.map(([t, b]) => (
                  <div key={t}>
                    <p className="text-white font-medium text-sm">{t}</p>
                    <p className="text-xs leading-5 text-muted">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Cta title="Bring us the work that was out of reach." subtitle="We start with a readiness scorecard and one use case in production, then put an engineer beside your team to carry the rest." />
      <Footer />
      <FootNote />
    </div>
  );
}
