import LogoImg from "@/components/ui/logoImg";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "Sovereign AI",
  description:
    "Sovereign AI: self-hosted, in-jurisdiction AI on infrastructure you control, in India and Australia, with ISO/IEC 42001 controls throughout.",
};

const STAGES = [
  { num: "1", title: "Data for AI", items: ["Multimodal pipelines", "Annotation", "Synthetic data", "Lineage & versioning", "Data quality & drift"] },
  { num: "2", title: "Model training", items: ["Distributed multi-node", "Mixed precision", "Experiment tracking", "Architecture selection", "Reproducible runs"] },
  { num: "3", title: "Fine-tuning", items: ["SFT & LoRA", "Domain adaptation", "Transfer learning", "Evaluation harness", "Guardrail tuning"] },
  { num: "4", title: "Inference & serving", items: ["Model router", "Model as a service", "Quantisation & pruning", "Autoscaling endpoints", "Latency engineering"] },
];

const ASSURANCE = ["Model registry", "Drift monitoring", "Automated retraining", "Explainability", "Audit trail", "ISO/IEC 42001 controls"];
const COMPUTE = ["Bare-metal GPU", "Kubernetes & GPU operator", "InfiniBand fabric", "Sovereign cloud", "On-premise", "Edge & on-device"];

const PLATFORM = [
  ["Sovereign cloud & data residency", "Regulated data stays in-country, with residency evidence by default.", ["Landing-zone design", "Residency controls", "Evidence & audit trail"]],
  ["AI supercomputing & GPU capacity", "Cluster build-out and distributed training, tuned for utilisation.", ["Cluster orchestration", "Distributed training", "Utilisation & cost tuning"]],
  ["Foundation models", "Domain adaptation of open models, gated by an evaluation harness.", ["Fine-tuning & SFT", "Evaluation harness", "Guardrails"]],
  ["Model router & model as a service", "One governed endpoint, routed on cost, latency and sensitivity.", ["Model router", "Model as a service", "Per-tenant quotas", "Unified API"]],
  ["Data & analytics platform", "Pipelines, vector retrieval and lakehouse patterns models can use.", ["Pipelines & lakehouse", "Vector & retrieval", "Data governance"]],
  ["Managed & secure operations", "Continuous monitoring of agents, with regulator-ready reporting.", ["AgentOps & AIOps", "Drift & incident management", "Governance reporting"]],
];

const AU = [
  ["Nunnari Labs", "Strategic innovation & compliance", "Built with the compliance discipline regulated industries require — ISO/IEC 42001, NAIC VAIS v1.0, model and agent engineering."],
  ["OrionVM", "Accelerated compute & lifecycle", "Single-tenant GPU platform with NVIDIA AI Enterprise as the lifecycle manager — L40S and above, Kubernetes GPU orchestration."],
  ["Equinix", "The trusted fabric", "Unified digital domain with low-latency interconnect between data and compute — colocation, proximity, network security."],
];

const HIGHLIGHTS = [
  ["Data as a strategic asset", "Proprietary enterprise data refined inside a secure enclave, producing models competitors cannot replicate."],
  ["Private LLM deployments", "Single-tenant stacks for enterprises that cannot use public inference, including micro-PoP deployments."],
  ["Edge inferencing", "Industrial and embedded workloads served close to the plant, with the same governance posture."],
  ["Compliance from the start", "ISO/IEC 42001 and NAIC voluntary AI safety standards applied to the pipeline, not bolted on after."],
];

function Chip({ children }) {
  return <span className="text-xs border border-line rounded-full px-2.5 py-1 text-white/85">{children}</span>;
}

export default function SovereignAi() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Sovereign AI"
        title="Sovereign capability inside national boundaries."
        tagline="Self-hosted and in-jurisdiction, for data that cannot leave — refined on infrastructure the customer controls, with ISO/IEC 42001 controls through every stage."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <section>
          <span className="pill">The sovereign AI stack, end to end</span>
          <div className="mt-8 rounded-2xl border border-white/40 bg-glass p-5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-dim uppercase tracking-[0.12em] mr-2">MLOps, guardrails & assurance</span>
            {ASSURANCE.map((a) => <Chip key={a}>{a}</Chip>)}
          </div>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STAGES.map((s) => (
              <div key={s.num} className="rounded-2xl border border-line p-6">
                <p className="flex items-center gap-3 text-white font-medium">
                  <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/50 text-xs">{s.num}</span>
                  {s.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="text-sm text-muted border-t border-line pt-2">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-white/40 bg-glass p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-1/3">
                <p className="text-xs text-dim uppercase tracking-[0.12em]">Infrastructure & silicon</p>
                <p className="mt-2 text-white text-[20px] leading-7 font-medium">The layer everything above runs on.</p>
                <div className="mt-3 flex flex-wrap gap-2">{COMPUTE.map((c) => <Chip key={c}>{c}</Chip>)}</div>
              </div>
              <div className="md:w-2/3 grid grid-cols-3 gap-4">
                <div className="h-20 rounded-xl bg-white flex items-center justify-center px-4"><LogoImg src="/partners/nvidia.webp" alt="NVIDIA" className="max-h-9 max-w-full object-contain" /></div>
                <div className="h-20 rounded-xl bg-white flex items-center justify-center px-4"><LogoImg src="/partners/amd.webp" alt="AMD" className="max-h-9 max-w-full object-contain" /></div>
                <div className="h-20 rounded-xl bg-white flex items-center justify-center px-4"><LogoImg src="/partners/qualcomm.webp" alt="Qualcomm" className="max-h-9 max-w-full object-contain" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">Where we sit on a sovereign platform</span>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            The platform supplies sovereign infrastructure. We are the delivery layer above it, turning capacity into governed production systems.
          </p>
          <div className="mt-8 border-b border-line">
            {PLATFORM.map(([cap, body, chips]) => (
              <div key={cap} className="grid md:grid-cols-12 gap-x-8 gap-y-3 border-t border-line py-6">
                <p className="md:col-span-4 text-white font-medium">{cap}</p>
                <div className="md:col-span-8">
                  <p className="text-sm leading-6 text-muted">{body}</p>
                  <div className="mt-3 flex flex-wrap gap-2">{chips.map((c) => <Chip key={c}>{c}</Chip>)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <span className="pill">Sovereign AI Neocloud Alliance</span>
          <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            Sovereign compute in both regions, one delivery layer.
          </h2>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            We deliver sovereign AI on infrastructure that stays in-country. The Sovereign AI Neocloud Alliance pairs Nunnari Labs with neocloud partners in each region, so regulated data never leaves its jurisdiction and frontier capability still arrives.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              ["Nunnari Labs", "Delivery layer", "Model engineering, governance and forward-deployed engineers across both regions."],
              ["OrionVM", "Australia", "Single-tenant GPU platform on NVIDIA AI Enterprise for Australian sovereign deployments."],
              ["E2E Networks", "India", "Indian GPU cloud for in-country training, fine-tuning and inference."],
            ].map(([who, where, body], i) => (
              <div key={who} className={`rounded-2xl border p-6 ${i === 0 ? "border-white/40 bg-glass" : "border-line"}`}>
                <p className="text-xs text-dim uppercase tracking-[0.12em]">{where}</p>
                <p className="mt-2 text-white font-medium">{who}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <span className="pill">Australian sovereign experience</span>
            <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-xl">
              Partnering with Equinix and OrionVM to build private AI capability for enterprises — three layers, three partners.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {AU.map(([who, role, body], i) => (
                <div
                  key={who}
                  className={`rounded-2xl border p-6 ${i === 0 ? "border-white/40 bg-glass" : "border-line"}`}
                >
                  <p className="text-xs text-dim uppercase tracking-[0.12em]">Layer {3 - i} · {who}</p>
                  <p className="mt-2 text-white font-medium">{role}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <span className="pill">Solution highlights</span>
            <div className="mt-8 flex flex-col gap-4">
              {HIGHLIGHTS.map(([t, b]) => (
                <div key={t} className="rounded-2xl border border-line p-6">
                  <p className="text-white font-medium">{t}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-20 rounded-3xl border border-line p-8 md:p-12">
          <span className="pill">Indian sovereign experience</span>
          <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            Built and trained on Indian GPU clouds.
          </h2>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            Our research and product work in India runs on Indian infrastructure. JarvisLabs GPU capacity carries our training and fine-tuning runs, and E2E Networks anchors in-country deployment through the alliance.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              ["Research training runs", "Vision and language model training and fine-tuning for our applied research programme, on JarvisLabs GPUs."],
              ["Physical AI product development", "Model development and compression for HearSight's on-device perception stack, trained in-country before deployment to the glasses."],
              ["Community and enablement", "Hands-on GPU capacity for AI Tamil Nadu workshops and enablement sessions, so practitioners train on real hardware."],
            ].map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-line p-6">
                <p className="text-white font-medium">{t}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{b}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Cta
        title="Regulated data stays in-country. Frontier capability doesn't have to."
        subtitle="Tell us what cannot leave your perimeter, and we will scope the stack that runs inside it."
      />
      <Footer />
      <FootNote />
    </div>
  );
}
