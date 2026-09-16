import Link from "next/link";
import Icon from "@/components/ui/icon";
import Reveal from "./motion/reveal";
import SectionHeader from "./ui/section-header";
import { EventCompactCard } from "./events/event-card";
import { getFeaturedEvents, getEventStats, toListItem } from "@/lib/events";

// Home page section: three recent events and the route into the archive.
export default function EventsHome() {
  const items = getFeaturedEvents(3).map(toListItem);
  const stats = getEventStats();
  if (!items.length) return null;
  return (
    <section id="events" className="bg-[#010314] border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="In the ecosystem"
            title="On stage, in the room, and behind the community."
            sub={`${stats.total} talks, panels, workshops and community events across ${stats.cities} cities since ${stats.since}, from a standards body in Coimbatore to Australia's AI Month.`}
          />
          <Reveal y={20} delay={0.1}>
            <Link href="/events" className="group inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-slate-200 transition-colors shrink-0">
              View all events
              <Icon name="arrow-right" className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.slug} y={16} delay={0.05 * i} className="h-full">
              <EventCompactCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
