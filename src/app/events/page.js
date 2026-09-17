import { Suspense } from "react";

import Navbar from "@components/navbar";
import Footer from "@components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";
import BreadcrumbLd from "@/components/breadcrumbLd";
import Reveal from "@/components/motion/reveal";
import CountUp from "@/components/motion/count-up";
import SectionHeader from "@/components/ui/section-header";
import Icon from "@/components/ui/icon";
import { EventLeadCard, EventSplitCard } from "@/components/events/event-card";
import EventArchive from "@/components/events/event-archive";
import SpotlightCard from "@/components/motion/spotlight-card";
import {
  getAllEvents,
  getFeaturedEvents,
  getEventStats,
  countByType,
  countByCommunity,
  toListItem,
  ROLE_KINDS,
  TYPE_GROUPS,
  COMMUNITIES,
} from "@/lib/events";

export const metadata = {
  title: "Events",
  description:
    "Talks, panels, workshops and the community events Nunnari Labs organises, across Tamil Nadu and Australia, since 2021.",
  alternates: { canonical: "https://nunnarilabs.com/events" },
  openGraph: {
    title: "Events | Nunnari Labs",
    description: "On stage, in the room, and behind the community. Five years of Nunnari Labs in the AI ecosystem.",
    url: "https://nunnarilabs.com/events",
    siteName: "Nunnari Labs",
    type: "website",
  },
};

export default function EventsPage() {
  const events = getAllEvents();
  const items = events.map(toListItem);
  const featured = getFeaturedEvents(3).map(toListItem);
  const stats = getEventStats(events);
  const typeCounts = countByType(events);
  const communityCounts = countByCommunity(events);
  const types = TYPE_GROUPS.map((t) => ({ key: t.key, label: t.label, count: typeCounts[t.key] || 0 }))
    .filter((t) => t.count > 0)
    .sort((a, b) => b.count - a.count);
  const [lead, ...secondary] = featured;
  const today = new Date().toISOString().slice(0, 10);

  const STATS = [
    { value: stats.total, label: "Events since " + stats.since },
    { value: stats.spoke, label: "Talks, panels and workshops" },
    { value: stats.organised, label: "Organised, hosted or led" },
    { value: stats.locations, label: "Locations" },
  ];

  return (
    <div className="bg-[#010314]">
      <Navbar />
      <BreadcrumbLd />

      <header className="border-b border-line">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-16">
          <Reveal y={16}>
            <span className="pill">Events</span>
          </Reveal>
          <Reveal y={20} delay={0.05}>
            <h1 className="headline mt-6 text-[40px] md:text-[56px] leading-[1.12] font-medium max-w-3xl">
              On stage, in the room, and behind the community.
            </h1>
          </Reveal>
          <Reveal y={16} delay={0.1}>
            <p className="mt-6 text-[15px] leading-[27px] text-muted max-w-2xl">
              Talks, panels and workshops, and the community events we organise, across Tamil Nadu and Australia.
              Every entry below is drawn from the event record and the post that announced or reported it.
            </p>
          </Reveal>

          <Reveal y={12} delay={0.15}>
            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t border-line pt-8">
              {STATS.map((s, i) => (
                <div key={s.label} className={`px-1 md:px-6 ${i > 0 ? "md:border-l md:border-line" : "md:pl-0"}`}>
                  <dd className="text-[32px] md:text-[40px] leading-none text-white font-medium tabular-nums">
                    <CountUp to={s.value} duration={1.2} />
                  </dd>
                  <dt className="mt-3 text-sm text-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      {/* Featured */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-20 md:pt-24 pb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader eyebrow="Recent" title="The rooms we were in last." sub="Three recent events, and what we said in them." />
          <Reveal y={20} delay={0.1}>
            <a href="#archive" className="group inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-slate-200 transition-colors shrink-0">
              Browse the archive
              <Icon name="arrow-right" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
        {lead ? (
          <div className="mt-12 flex flex-col gap-6">
            <Reveal y={16}>
              <EventLeadCard item={lead} />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {secondary.map((item, i) => (
                <Reveal key={item.slug} y={16} delay={0.06 * (i + 1)} className="h-full">
                  <EventSplitCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      {/* Archive */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-20 md:pt-24 pb-20 md:pb-24">
        <SectionHeader eyebrow="Archive" title="Every event, in order." sub="Filter by our role or by the event type. Dates we could not confirm to the day are shown by month." />
        <div className="mt-12">
          <Suspense fallback={<div className="h-40" />}>
            <EventArchive items={items} roleKinds={ROLE_KINDS} types={types} today={today} />
          </Suspense>
        </div>
      </section>

      {/* Communities */}
      <section className="border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
          <SectionHeader
            eyebrow="Communities"
            title="The communities behind the events we organise."
            sub="Nunnari Labs leads AI Tamil Nadu, previously AI Coimbatore. These are the communities named as organisers in the archive."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {COMMUNITIES.map((c, i) => {
              const count = communityCounts[c.key] || 0;
              const span = "";
              const inner = (
                <>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-[18px] leading-7 font-medium text-white">
                      {c.key}
                      {c.href ? <span aria-hidden="true" className="ml-1.5 text-muted group-hover:text-white transition-colors">↗</span> : null}
                    </p>
                    {count ? <p className="text-xs uppercase tracking-[0.12em] text-dim whitespace-nowrap tabular-nums">{count} {count === 1 ? "event" : "events"}</p> : null}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{c.blurb}</p>
                </>
              );
              return (
                <Reveal key={c.key} y={14} delay={0.04 * i} className={`h-full ${span}`}>
                  {c.href ? (
                    <SpotlightCard href={c.href} target="_blank" rel="noopener noreferrer" className="block h-full rounded-2xl border border-line p-6 hover:border-white/40 transition-colors">
                      {inner}
                    </SpotlightCard>
                  ) : (
                    <SpotlightCard className="h-full rounded-2xl border border-line p-6 hover:border-white/40 transition-colors">{inner}</SpotlightCard>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Cta
        title="Invite Nunnari Labs to your stage."
        subtitle="Talks, panels and hands-on workshops on agentic AI, AI governance and physical AI, for industry bodies, enterprises and communities."
        location="events"
      />
      <Footer />
      <FootNote />
    </div>
  );
}
