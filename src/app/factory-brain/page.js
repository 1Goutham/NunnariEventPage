import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";
import FactoryBrain from "@/components/factoryBrain";

export const metadata = {
  title: "The Factory Brain",
  description:
    "The orchestration layer between ERP and PLC for manufacturers — AI planning, scheduling and optimisation that recommends, while humans approve and the PLC executes.",
};

const NEEDS = [
  ["Schedules built in spreadsheets", "Planners re-plan by hand whenever an order or machine changes"],
  ["Unplanned downtime", "Breakdowns found after the line stops, not before"],
  ["ERP says one thing, the floor another", "No layer reconciling plan against actual production"],
  ["Quality caught late", "Defects found at final inspection rather than at the cell"],
  ["Inventory buffered on instinct", "Safety stock covering for forecasts nobody trusts"],
  ["Expertise walking out the door", "Scheduling knowledge held by a handful of people"],
];

const POSTURE = [
  ["Cloud", "Fastest, usage-based"],
  ["Hybrid", "On-premise data, 4–8 weeks"],
  ["On-premise", "Fully in-house, 8–12+ weeks"],
];

export default function FactoryBrainPage() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Manufacturing"
        title="The Factory Brain."
        tagline="The orchestration layer between ERP and PLC — the one neither system covers. AI recommends. Humans approve. The PLC executes."
      />

      <FactoryBrain showHeader={false} />

      <section className="border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <span className="pill">Who needs a Factory Brain</span>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {NEEDS.map(([t, b]) => (
                <li key={t} className="border-t border-line pt-4">
                  <p className="text-white font-medium">{t}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{b}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-6 text-dim max-w-xl">
              Industry validation: Siemens, ABB and Hitachi all orchestrate above the PLC rather than replacing it — AI predicts and recommends, automation executes, humans approve.
            </p>
          </div>
          <div className="lg:col-span-5">
            <span className="pill">Deployment posture</span>
            <div className="mt-8 flex flex-col gap-4">
              {POSTURE.map(([t, b]) => (
                <div key={t} className="rounded-2xl border border-line p-6">
                  <p className="text-white font-medium">{t}</p>
                  <p className="mt-1 text-sm text-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta
        title="Bring us one line, one plant, one planning problem."
        subtitle="We baseline idle time and scheduling effort before we start, and report against them after we ship."
      />
      <Footer />
      <FootNote />
    </div>
  );
}
