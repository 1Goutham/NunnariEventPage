import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "Forward-deployed engineers",
  description:
    "Forward-deployed engineers (FDEs) who sit inside your team, take frontier AI from pilot to production and leave behind people who can run it. Drawn from our FDE engagements across India and Australia.",
};

const WHAT_WE_DO = [
  ["Deploy and manage frontier AI platforms", "Stand up Claude and the surrounding platform inside your environment, then run it as a production system rather than a pilot."],
  ["Drive user adoption and productivity gains", "Work with the business users who will live with the system, so the deployment is used, measured and improved."],
  ["Own reliability, scale and performance", "Evaluation, monitoring and guardrails from day one, with the same engineer accountable when something drifts."],
  ["Stay embedded as a long-term partner", "Remain with the team through rollout and iteration, and hand over people who can carry it forward."],
];

const AREAS = [
  ["Platform security & governance", "Identity, data boundaries, audit trails and policy enforcement, so the platform passes the reviews it will face."],
  ["Observability & platform integration", "Tracing, evaluation and cost telemetry wired into the tools your operations team already watches."],
  ["Connectors & vendor integration", "Enterprise systems connected through APIs, retrieval, tool use and MCP-style architecture."],
  ["Skills & prompt engineering", "Reusable agent skills, prompts and orchestration patterns built for the customer's own workflows."],
  ["Knowledge management", "The document and data sources a model actually needs, curated, permissioned and kept current."],
  ["Enablement & onboarding", "Business and IT teams trained on the system, with playbooks that outlast the engagement."],
];

const WHO = [
  ["01", "Large enterprises and corporates", "Dozens of AI pilots, fragmented IT teams and no one owning outcomes. An FDE turns scattered experiments into governed, production-grade deployments."],
  ["02", "Small and medium businesses", "No AI team to hire and no budget for one. An FDE shows up as a fractional expert and leaves something that keeps working."],
  ["03", "ISVs and software vendors", "Racing to ship AI features before the roadmap goes stale. An FDE gets the first agentic feature into a customer's hands fast."],
];

const DISCIPLINES = [
  ["Business analysis", "Works with business users to turn ideas into AI systems, agents or skills."],
  ["Data engineering", "Pulls in and transforms the data sources a model actually needs."],
  ["ML engineering", "Hosts models and runs post-training to fit the customer's domain."],
  ["Cloud & platform", "Deploys and integrates APIs as containers, production-grade."],
  ["Full-stack delivery", "Integrates with applications and tests it end to end, like a developer."],
];

const CORE_SKILLS = ["Model training & fine-tuning", "ML systems architecture", "Deep learning research", "Applied deeptech AI", "Production ML infra", "Data & evaluation pipelines"];

const ENGAGEMENT = [
  ["Find the use case", "Work with the business to identify high-value use cases aligned with real goals, not the loudest demo."],
  ["Design for the environment", "Production AI designed around your workflows, systems and constraints, including regulated ones."],
  ["Build the integration", "APIs, retrieval, tool use, orchestration and MCP-style connectors, shipped as reusable components."],
  ["Prove it safe", "Evaluation, monitoring and guardrail mechanisms established before the first user, not after the first incident."],
  ["Take it to production", "Pilot-to-production rollout, adoption support and ongoing iteration with the people who own the process."],
  ["Leave a playbook", "Deployment patterns standardised so the next use case, team or region starts from a working reference."],
];

const OUTCOMES = [
  ["Pilot to production, quickly", "Robust, production-ready deployments rather than another proof of concept."],
  ["Measurable business value", "Productivity, faster decisions or operational automation that the business can put a number on."],
  ["Stable, secure, maintainable", "Solutions that operate reliably in the customer's environment after the engineer steps back."],
  ["Reusable patterns", "Every deployment shortens time-to-value for the next one."],
];

export default function ForwardDeployedEngineers() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Forward-deployed engineers"
        title="The engineers who turn frontier AI into business outcomes."
        tagline="An FDE is not another vendor call. They sit inside your team, ship the first real deployment and leave behind people who can run it. Everything on this page comes from FDE engagements we have delivered across India and Australia."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <section className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="pill">What our FDEs do</span>
            <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium">
              Blended consulting and AI engineering, inside your teams.
            </h2>
            <p className="mt-5 text-[15px] leading-[27px] text-muted">
              Moving from a promising demo to a production-grade AI system takes more than API access. It takes engineers who can build, advise and adapt quickly while keeping the customer outcome and product quality in view.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CORE_SKILLS.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-glass px-3 py-1 text-xs text-white/90">{s}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {WHAT_WE_DO.map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-line p-6">
                <h3 className="text-[18px] leading-6 font-medium text-white">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">Six areas of work</span>
          <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            What does our FDE do?
          </h2>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            A snapshot from our FDE services to customers.
          </p>
          <ol className="mt-10 grid md:grid-cols-2 gap-x-8 gap-y-0">
            {AREAS.map(([t, b], i) => (
              <li key={t} className="flex gap-5 border-t border-line py-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-glass border border-white/10 text-xs text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-white font-medium">{t}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20">
          <span className="pill">Who needs one</span>
          <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            Who actually needs an AI FDE?
          </h2>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            The need looks different depending on the size of the organisation. Three segments, three very different reasons.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {WHO.map(([n, t, b]) => (
              <div key={t} className="rounded-2xl border border-line p-6 md:p-7">
                <p className="text-xs text-dim uppercase tracking-[0.12em]">{n}</p>
                <h3 className="mt-3 text-[20px] leading-7 font-medium text-white">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-white/40 bg-glass p-6 md:p-7">
            <p className="text-xs text-dim uppercase tracking-[0.12em]">The common thread</p>
            <p className="mt-3 text-[15px] leading-[27px] text-white/90 max-w-3xl">
              Capability without an owner. An FDE sits inside the team, ships the first real deployment and leaves behind people who can run it. AI is evolving by the week. The question is whether your team is built to keep up.
            </p>
          </div>
        </section>

        <section className="mt-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="pill">One engineer, five disciplines</span>
            <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium">
              Not every AI FDE is built for the job.
            </h2>
            <p className="mt-5 text-[15px] leading-[27px] text-muted">
              Staff-augmentation agencies are supplying cloud engineers, DevOps engineers and software developers as &ldquo;FDEs&rdquo;. A real AI FDE is a different breed.
            </p>
            <div className="mt-6 rounded-2xl border border-line p-6">
              <p className="text-xs text-dim uppercase tracking-[0.12em]">The cost of getting this wrong</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                The wrong FDE means failed pilots, lower adoption and no ROI, the exact outcomes the role was created to prevent. Customers do not need more FDEs. They need the right one, embedded with their business and IT teams.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/40 bg-glass p-6 md:p-8">
              <ol className="divide-y divide-line">
                {DISCIPLINES.map(([t, b], i) => (
                  <li key={t} className="flex gap-5 py-4 first:pt-0 last:pb-0">
                    <span className="text-dim text-xs w-6 pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-white font-medium">{t}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">How an engagement runs</span>
          <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            From the first use case to a playbook your team owns.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ENGAGEMENT.map(([t, b], i) => (
              <div key={t} className="rounded-2xl border border-line p-6">
                <p className="text-xs text-dim uppercase tracking-[0.12em]">Step {i + 1}</p>
                <h3 className="mt-3 text-[18px] leading-6 font-medium text-white">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-line p-8 md:p-12">
          <span className="pill">What you get</span>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OUTCOMES.map(([t, b]) => (
              <div key={t} className="border-t border-line pt-4">
                <p className="text-white font-medium">{t}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-dim tracking-[0.12em] uppercase">Enablement · Adoption · ROI</p>
        </section>
      </main>

      <Cta title="Put an engineer inside your team." subtitle="Tell us where the programme is stuck. We will scope the first use case and the FDE who should own it." location="fde" />
      <Footer />
      <FootNote />
    </div>
  );
}
