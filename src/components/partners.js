"use client";
import LogoImg from "@/components/ui/logoImg";

import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";

const ALLIANCES = [
  { name: "Oracle", logo: "/partners/oracle.webp", area: "Cloud & enterprise AI", desc: "Exclusive AI/ML partner" },
  { name: "NVIDIA", logo: "/partners/nvidia.webp", area: "AI infrastructure", desc: "GPU platforms and inference at scale" },
  { name: "Anthropic", logo: "/partners/anthropic.webp", area: "Frontier AI", desc: "Channel and FDE partnership" },
  { name: "Qualcomm", logo: "/partners/qualcomm.webp", area: "Physical AI", desc: "On-device inference silicon" },
  { name: "IBM", logo: "/partners/ibm.webp", area: "AI governance", desc: "watsonx governance stack" },
  { name: "Credo AI", logo: "/partners/credo-ai.webp", area: "AI governance", desc: "Policy and assurance platform" },
  {
    name: "E2E Networks and JarvisLabs",
    logos: [
      { src: "/partners/e2e-cloud.webp", alt: "E2E Cloud", className: "h-10" },
      { src: "/partners/jarvislabs.webp", alt: "JarvisLabs", className: "h-[18px]" },
    ],
    area: "Sovereign AI · India",
    desc: "Indian GPU cloud for training, fine-tuning and inference",
  },
  { name: "OrionVM", logo: "/partners/orionvm.webp", area: "Sovereign AI · Australia", desc: "Sovereign cloud through the Neocloud Alliance" },
];

const BADGES = [
  ["ISO/IEC 42001 certified", "/partners/iso-42001.webp"],
  ["NIST AI RMF", "/partners/nist-ai-rmf.webp"],
  ["EU AI Act aligned", "/partners/eu-ai-act.webp"],
  ["National AI Centre listed", "/partners/national-ai-centre.webp"],
];

function Wordmark({ name, logo, logos }) {
  // `logos` renders two marks in one tile for partners that operate together;
  // `logo` is a single mark; with neither, the card shows a text wordmark.
  return (
    <div className="h-16 rounded-xl bg-white flex items-center justify-center px-3">
      {logos ? (
        <div className="flex items-center gap-2">
          {logos.map((l, i) => (
            <span key={l.alt} className="flex items-center gap-2">
              {i > 0 ? <span aria-hidden="true" className="shrink-0" style={{ width: 1, height: 36, backgroundColor: "rgba(0,0,0,0.3)" }} /> : null}
              <LogoImg src={l.src} alt={l.alt} className={`w-auto shrink-0 object-contain ${l.className}`} />
            </span>
          ))}
        </div>
      ) : logo ? (
        <LogoImg src={logo} alt={name} className="max-h-9 max-w-[176px] w-auto object-contain" />
      ) : (
        <span className="text-black text-xl font-semibold tracking-tight">
          {name}
        </span>
      )}
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="bg-[#010314] border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <SectionHeader
          eyebrow="Alliances"
          title="Partnerships built for enterprise AI."
          sub="Delivered on the customer's cloud and models of choice — with the partners whose platforms enterprise AI actually runs on."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALLIANCES.map((a, i) => (
            <Reveal key={a.name} y={16} delay={0.05 * i} className="h-full">
              <div className="h-full rounded-2xl border border-line p-5">
                <Wordmark name={a.name} logo={a.logo} logos={a.logos} />
                <p className="mt-5 text-xs text-dim uppercase tracking-[0.12em]">
                  {a.area}
                </p>
                <p className="mt-1 text-white font-medium">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal y={12} delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <p className="text-white font-medium mr-2">
              Responsible AI <span className="text-dim">by design</span>
            </p>
            {BADGES.map(([b, img]) => (
              <span
                key={b}
                className="inline-flex items-center gap-2.5 border border-line rounded-full pl-1.5 pr-4 py-1.5 text-sm text-white"
              >
                <span className="h-7 w-7 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <LogoImg src={img} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                </span>
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
