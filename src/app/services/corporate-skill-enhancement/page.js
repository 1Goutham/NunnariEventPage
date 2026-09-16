import Icon from "@/components/ui/icon";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "AIOps",
  description:
    "How value is sustained: AIOps, forward-deployed engineers, a Centre of Excellence and SLA operations — sustained adoption against an SLA, with capability held in-house.",
};

const DELIVER = [
  ["AIOps & SLA operations", "Monitoring, drift detection, incident response and continuous evaluation for every system we run — reported monthly against an SLA."],
  ["Forward-deployed engineers", "A retained engineer inside your organisation who keeps adoption moving: new use cases, integrations, prompt and skills engineering, knowledge management."],
  ["Centre of Excellence", "Standards, guidance and reusable assets so your own teams can deliver, with us setting the bar rather than holding the pen."],
  ["Enablement & onboarding", "Role-based AI literacy and hands-on training for the people who will use and govern the systems — measured by enablement, not attendance."],
  ["Managed governance", "Continuous monitoring, evidence on demand and a maintained risk register, so the audit pack is always current."],
  ["As a Service", "We own the infrastructure and the application, and run the whole thing against an SLA when you would rather not."],
];

const WHO = [
  ["Large enterprises", "Dozens of pilots, fragmented IT, no one owning outcomes."],
  ["Small and medium business", "No AI team to hire, and no case for building one yet — a fractional expert instead."],
  ["Public sector", "Systems that must keep running under security and procurement controls, with evidence for every change."],
];

const PROOF = [
  ["Landcom · NSW Government", "Finance workflows automated, then enterprise-wide adoption — a retained FDE, governance, and 200 staff at 100% enablement, freeing 5 FTE of capacity every week.", "/case-studies/public-sector-genai-enablement"],
  ["G6 AIOps & Managed Governance", "Annuity engagement, 12 months and beyond: monthly dashboards, incident register, evidence on demand.", "/ai-governance"],
];

export default function Page() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Service line 05"
        title="AIOps."
        tagline="How value is sustained. Hypercare through to managed operations, with a forward-deployed engineer, a Centre of Excellence and enablement for the people who run it — so adoption holds and capability stays in-house."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <section className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="pill">What it is</span>
            <p className="mt-6 text-[15px] leading-[27px] text-muted">
              Shipping is the middle of the story. Models drift, systems of record change, and the second use case needs the same care as the first. Most AI programmes lose value in the twelve months after go-live.
            </p>
            <p className="mt-4 text-[15px] leading-[27px] text-muted">
              This service line keeps the value: AIOps on every build, an engineer who stays, standards your teams can work to, and training that leaves capability behind rather than dependence.
            </p>
            <div className="mt-8 rounded-2xl border border-white/40 bg-glass p-6">
              <p className="text-xs text-dim uppercase tracking-[0.12em]">Outcome</p>
              <p className="mt-2 text-white font-medium">Sustained adoption against an SLA, capability held in-house.</p>
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
            <span className="pill">Who needs a forward-deployed engineer</span>
            <div className="mt-6 grid sm:grid-cols-3 gap-5">
              {WHO.map(([t, b]) => (
                <div key={t} className="border-t border-line pt-4">
                  <p className="text-white font-medium">{t}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 rounded-2xl border border-line p-6">
            <p className="text-xs text-dim uppercase tracking-[0.12em]">Delivery shape</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="border-t border-line pt-2">Onshore, offshore and blended — India and Australia, in your time zone</li>
              <li className="border-t border-line pt-2">Hypercare after every go-live, then a managed service or handover</li>
              <li className="border-t border-line pt-2">Structured AI skilling for wider teams runs on <a href="https://nunnari.academy" target="_blank" rel="noopener noreferrer" className="text-white border-b border-white/40 hover:border-white">Nunnari Academy ↗</a></li>
            </ul>
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">Proof</span>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {PROOF.map(([who, body, href]) => (
              <a key={who} href={href} className="group rounded-2xl border border-line p-6 hover:border-white/40 transition-colors flex flex-col">
                <p className="text-sm text-dim">{who}</p>
                <p className="mt-2 text-white leading-relaxed">{body}</p>
                <span className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">Read more <Icon name="arrow-right" className="transition-transform group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Cta title="Keep the value after go-live." subtitle="Tell us what is running today and who owns it. We will scope the SLA, the engineer, and the enablement plan around it." />
      <Footer />
      <FootNote />
    </div>
  );
}
