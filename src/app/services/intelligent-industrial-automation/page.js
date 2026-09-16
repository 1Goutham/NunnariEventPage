import Icon from "@/components/ui/icon";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "Physical AI",
  description:
    "Physical AI: perception and autonomy on robots, drones, cameras and wearables. Computer vision, sensor fusion and on-device inference that runs in the field.",
};

const LAYER = [
  ["Platforms", ["Robotics & ROS", "Drones", "Wearables", "Smart devices"]],
  ["Perception", ["Computer vision", "LiDAR & sensor fusion", "SLAM & navigation", "Vision & video AI"]],
  ["Deployment", ["On-device inference", "Edge & docking hubs", "Digital twins", "Model compression"]],
  ["Safety & assurance", ["Geofencing", "Fail-safe behaviours", "Fleet monitoring", "Human approval gates"]],
];

const WHY = [
  ["Latency budgets", "Decisions made where the data is captured, with no cloud round trip on the critical path."],
  ["Thermal and power limits", "Models compressed and quantised to run on the silicon the device actually has."],
  ["Offline reliability", "No connectivity assumption. The system keeps working when the network does not."],
  ["Safety with no fallback", "Fail-safe behaviours, geofencing and fleet monitoring designed in, not added after an incident."],
];

const PROOF = [
  ["Steel plants · Manufacturing", "Helmet-mounted computer vision guiding weld direction, angle and velocity in real time.", "/case-studies/precision-welding-ai"],
  ["HearSight Audio Vision · Assistive technology", "Smart glasses that read the world aloud — every model on the device. Nunnari Labs is the AI and engineering partner.", "/case-studies/hearsight-assistive-wearable"],
  ["Go8 research university", "Geology microscopy annotated in seconds, not hours — vision models on specialist imagery.", "/case-studies/geology-microscopy-annotation"],
];

export default function Page() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Physical AI"
        title="Physical AI & Edge."
        tagline="Perception and autonomy on robots, drones, cameras and wearables — built to run on the factory floor and in the field, where there is no cloud to fall back on."
      />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <section className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="pill">What it is</span>
            <p className="mt-6 text-[15px] leading-[27px] text-muted">
              Most AI stops at the screen. Physical AI has to see, decide and act on hardware with real latency budgets, thermal limits and safety consequences. That discipline is rare, and it is where we started.
            </p>
            <p className="mt-4 text-[15px] leading-[27px] text-muted">
              We build the full stack: the perception models, the on-device inference that runs them, the docking hubs and digital twins that coordinate them, and the safety layer that keeps a human in control.
            </p>
            <div className="mt-8 rounded-2xl border border-white/40 bg-glass p-6">
              <p className="text-xs text-dim uppercase tracking-[0.12em]">Outcome</p>
              <p className="mt-2 text-white font-medium">Autonomous operations in the field, safety and quality lifted.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="pill">The Physical AI layer</span>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              {LAYER.map(([t, items]) => (
                <div key={t} className="rounded-2xl border border-line p-6">
                  <h3 className="text-[18px] leading-7 font-medium text-white">{t}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((i) => <span key={i} className="text-xs border border-line rounded-full px-2.5 py-1 text-white/85">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <span className="pill">Why shipping into hardware matters</span>
            <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-xl">
              Shipping AI into hardware forces discipline that cloud-only teams never build. That discipline is what we bring back into enterprise work.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              {WHY.map(([t, b]) => (
                <div key={t} className="border-t border-line pt-4">
                  <p className="text-white font-medium">{t}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <span className="pill">For manufacturers</span>
            <a href="/factory-brain" className="group mt-6 block rounded-2xl border border-line bg-hero-image bg-cover bg-bottom p-6 hover:border-white/40 transition-colors">
              <p className="text-white text-[22px] leading-8 font-medium">The Factory Brain</p>
              <p className="mt-2 text-sm leading-6 text-white/85">The orchestration layer between ERP and PLC. AI recommends, humans approve, the PLC executes — 10–20% less machine idle time.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">Explore <Icon name="arrow-right" className="transition-transform group-hover:translate-x-1" /></span>
            </a>
            <p className="mt-4 text-sm text-dim">Silicon partners: NVIDIA, AMD, Qualcomm.</p>
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

      <Cta title="Bring us the camera, the line, or the device." subtitle="We scope the perception, the hardware it has to run on, and the safety case — before a model is trained." />
      <Footer />
      <FootNote />
    </div>
  );
}
