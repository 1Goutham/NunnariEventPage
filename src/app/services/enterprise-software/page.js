import Icon from "@/components/ui/icon";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "Data for AI",
  description:
    "What makes AI deployable: data readiness, pipelines and lakehouse, data governance, and vector and retrieval — trusted, AI-ready data with decisions traceable to source.",
};

const DELIVER = [
  ["Data readiness", "Inventory of the sources a use case actually needs, their quality, ownership and access — and the gaps that would stall a model."],
  ["Pipelines & lakehouse", "Multimodal pipelines, feature pipelines and lakehouse patterns models can use, with lineage and versioning built in."],
  ["Data governance", "Classification, residency controls and access policy — regulated data stays where it must, with evidence by default."],
  ["Vector & retrieval", "Retrieval systems over documents and knowledge, so agents answer from your record rather than the model's memory."],
  ["Annotation & synthetic data", "Labelled and synthetic data produced to the spec a model needs, with quality and drift monitoring."],
  ["Decision reporting", "Every automated decision traceable to the data that produced it — the audit trail governance asks for."],
];

const STAGES = ["Multimodal pipelines", "Annotation", "Synthetic data", "Lineage & versioning", "Data quality & drift", "Model & data lineage"];

const PROOF = [
  ["ARB Corporation · ASX-listed manufacturer", "An intelligent processing pipeline integrated with JD Edwards — data validated and coded against the system of record before a person sees it.", "/case-studies/supplier-invoice-automation"],
  ["State pathology service", "Clinical document intelligence — extraction, structuring and coding of pathology reports.", "/case-studies"],
];

export default function Page() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Service line 04"
        title="Data for AI."
        tagline="What makes AI deployable. Readiness, pipelines, governance and retrieval — so the model has trusted data to work from, and every decision it makes can be traced back to source."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <section className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="pill">What it is</span>
            <p className="mt-6 text-[15px] leading-[27px] text-muted">
              The model is rarely the problem. The invoice that never reached the pipeline, the case file in a format nobody indexed, the sensor feed with no lineage — that is what stalls AI in production.
            </p>
            <p className="mt-4 text-[15px] leading-[27px] text-muted">
              This service line makes your data a standing asset for AI: ready, governed, retrievable, and traceable — on your cloud, in your jurisdiction, or fully on-premise.
            </p>
            <div className="mt-8 rounded-2xl border border-white/40 bg-glass p-6">
              <p className="text-xs text-dim uppercase tracking-[0.12em]">Outcome</p>
              <p className="mt-2 text-white font-medium">Trusted, AI-ready data and decisions traceable to source.</p>
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

        <section className="mt-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="pill">Stage one of the sovereign AI stack</span>
            <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-xl">
              Data for AI is the first stage of the same stack we run for self-hosted and in-jurisdiction deployments, so what we build here carries straight into training, fine-tuning and serving.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {STAGES.map((s) => <span key={s} className="text-xs border border-line rounded-full px-2.5 py-1 text-white/85">{s}</span>)}
            </div>
            <a href="/sovereign-ai" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-slate-200">The full sovereign AI stack <Icon name="arrow-right" /></a>
          </div>
          <div className="lg:col-span-5 rounded-2xl border border-line p-6">
            <p className="text-xs text-dim uppercase tracking-[0.12em]">Where it runs</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="border-t border-line pt-2">Your cloud — OCI, AWS, Azure or GCP landing zones</li>
              <li className="border-t border-line pt-2">Sovereign cloud with data-residency evidence by default</li>
              <li className="border-t border-line pt-2">On-premise and air-gapped, for data that cannot leave</li>
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

      <Cta title="Tell us which decision you cannot trace." subtitle="A data-readiness assessment shows what the model needs, what you have, and what it takes to close the gap." />
      <Footer />
      <FootNote />
    </div>
  );
}
