import LogoImg from "@/components/ui/logoImg";
// All logos are pre-normalised to white-on-transparent 600x200 canvases in
// public/client/logos so every cell renders at the same size.
const LOGOS = [
  { src: "/client/logos/landcom.webp", alt: "Landcom" },
  { src: "/client/logos/arb.webp", alt: "ARB Corporation" },
  { src: "/client/logos/scaler.webp", alt: "Scaler" },
  { src: "/client/logos/icliniq.webp", alt: "iCliniq" },
  { src: "/client/logos/forge.webp", alt: "Forge Innovation & Ventures" },
  { src: "/client/logos/saasant.webp", alt: "Saasant" },
  { src: "/client/logos/2bfound.webp", alt: "2B Found" },
  { src: "/client/logos/tristha.webp", alt: "Tristha Global" },
  { src: "/client/logos/martin-group.webp", alt: "Martin Group" },
  { src: "/client/logos/hearsight.webp", alt: "HearSight" },
];

export default function TrustBar() {
  return (
    <section aria-label="Trusted by" className="bg-[#010314] border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <p className="text-center text-[15px] leading-[27px] text-muted max-w-2xl mx-auto">
          Trusted by enterprise and government across India and Australia —
          listed manufacturers, state agencies, digital health and SaaS
          companies, industrial groups and research universities.
        </p>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 md:gap-y-16 items-center">
          {LOGOS.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center h-14 md:h-[72px] px-3 opacity-60 hover:opacity-100 transition-opacity"
            >
              <LogoImg
                src={logo.src}
                alt={logo.alt}
                width={600}
                height={200}
                className="h-12 md:h-16 w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
