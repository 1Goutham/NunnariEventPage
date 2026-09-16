import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import Navbar from "@components/navbar";
import Footer from "@components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";
import BreadcrumbLd from "@/components/breadcrumbLd";
import Reveal from "@/components/motion/reveal";
import Icon from "@/components/ui/icon";
import Link from "next/link";
import EventDate from "@/components/events/event-date";
import EventGallery from "@/components/events/event-gallery";
import CopyLink from "@/components/events/copy-link";
import { EventCompactCard } from "@/components/events/event-card";
import SpotlightCard from "@/components/motion/spotlight-card";
import ReadingProgress from "@/components/motion/reading-progress";
import QuoteReveal from "@/components/motion/quote-reveal";
import {
  getAllEvents,
  getEventBySlug,
  getNeighbours,
  getRelated,
  toListItem,
  formatEventDate,
  themeKey,
} from "@/lib/events";

const BASE = "https://nunnarilabs.com";
const options = { mdxOptions: { remarkPlugins: [remarkGfm] } };

export async function generateStaticParams() {
  return getAllEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const e = getEventBySlug(slug);
  if (!e) return {};
  const m = e.meta;
  const img = m.cover || m.poster;
  return {
    title: m.title,
    description: m.summary,
    alternates: { canonical: `${BASE}/events/${slug}` },
    openGraph: {
      title: m.title,
      description: m.summary,
      url: `${BASE}/events/${slug}`,
      siteName: "Nunnari Labs",
      type: "article",
      images: img ? [{ url: `${BASE}${img.src}`, width: img.width, height: img.height }] : undefined,
    },
  };
}

function Fact({ label, children }) {
  if (!children) return null;
  return (
    <div className="py-4 border-t border-line first:border-t-0 first:pt-0">
      <dt className="text-xs uppercase tracking-[0.12em] text-dim">{label}</dt>
      <dd className="mt-1.5 text-sm leading-6 text-white/90">{children}</dd>
    </div>
  );
}

function NeighbourLink({ e, dir }) {
  if (!e) return <div className="hidden md:block" />;
  const older = dir === "older";
  return (
    <SpotlightCard
      href={`/events/${e.slug}`}
      className={`flex flex-col rounded-2xl border border-line p-6 transition-colors duration-300 hover:border-white/40 ${older ? "md:text-right md:items-end" : ""}`}
    >
      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-dim">
        {older ? (
          <>
            Earlier
            <Icon name="arrow-right" className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
          </>
        ) : (
          <>
            <Icon name="arrow-left" className="text-[10px] transition-transform duration-300 group-hover:-translate-x-1" />
            Later
          </>
        )}
      </span>
      <span className="mt-2 text-[17px] leading-[1.4] font-medium text-white group-hover:text-slate-200 transition-colors">{e.meta.short}</span>
      <span className="mt-1 text-sm text-dim">{formatEventDate(e.meta.date, e.meta.datePrecision)}</span>
    </SpotlightCard>
  );
}

export default function EventPage({ params }) {
  const e = getEventBySlug(params.slug);
  if (!e) notFound();
  const m = e.meta;
  const { newer, older } = getNeighbours(e.slug);
  const related = getRelated(e, 3).map(toListItem);
  const visual = m.cover || m.poster;
  const isPoster = !m.cover && !!m.poster;
  const gallery = m.gallery || [];
  const dateText = formatEventDate(m.date, m.datePrecision, m.endDate, { long: true });

  const ld = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: m.title,
    description: m.summary,
    startDate: m.date,
    endDate: m.endDate || m.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: m.format === "Online" ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
    url: `${BASE}/events/${e.slug}`,
    image: visual ? [`${BASE}${visual.src}`] : undefined,
    location:
      m.format === "Online"
        ? { "@type": "VirtualLocation", url: `${BASE}/events/${e.slug}` }
        : { "@type": "Place", name: m.venue || m.city, address: { "@type": "PostalAddress", addressLocality: m.city, addressCountry: m.country || undefined } },
    organizer: (m.organisers || []).map((o) => ({ "@type": "Organization", name: o })),
    performer: (m.speakers || []).map((s) => ({ "@type": "Person", name: s.split(",")[0] })),
  };

  return (
    <div className="bg-[#010314]">
      <ReadingProgress />
      <Navbar />
      <BreadcrumbLd label={m.short} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <header className="border-b border-line">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-14">
          <Link href="/events" className="group inline-flex items-center gap-1.5 text-muted hover:text-ink text-sm transition-colors">
            <Icon name="arrow-left" className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
            All events
          </Link>

          <p className="mt-8 text-sm text-dim">
            {[dateText, m.city, m.role].filter(Boolean).join(" · ")}
          </p>

          <h1 className="headline mt-6 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.15] font-medium max-w-4xl">{m.title}</h1>

          <p className="mt-6 text-[15px] leading-[27px] text-muted max-w-2xl">{m.summary}</p>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-sm text-ink/80 border border-line rounded-full px-2.5 py-1 bg-white/5">{m.type}</span>
            {(m.themes || []).map((t) => (
              <a key={t} href={`/events?theme=${themeKey(t)}`} className="text-sm text-dim border border-line rounded-full px-2.5 py-1 hover:text-white hover:border-white/40 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Cover and quote */}
      {visual || m.quote ? (
        <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-14 md:pt-16">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8 items-center">
            {visual ? (
              <Reveal y={16} className={isPoster ? "lg:col-span-4" : "lg:col-span-6"}>
                <div className={`relative overflow-hidden rounded-2xl border border-line ${isPoster ? "bg-white/[0.03]" : ""}`} style={{ aspectRatio: isPoster ? `${visual.width} / ${visual.height}` : "16 / 10" }}>
                  <Image
                    src={visual.src}
                    alt={isPoster ? `${m.title} poster` : `${m.title}`}
                    fill
                    priority
                    sizes={isPoster ? "(max-width: 1024px) 100vw, 380px" : "(max-width: 1024px) 100vw, 580px"}
                    placeholder="blur"
                    blurDataURL={visual.blur}
                    className={isPoster ? "object-contain" : "object-cover"}
                  />
                </div>
              </Reveal>
            ) : null}
            {m.quote ? (
              <Reveal y={16} delay={0.08} className={visual ? (isPoster ? "lg:col-span-8" : "lg:col-span-6") : "lg:col-span-8"}>
                <blockquote className="lg:pl-4">
                  <QuoteReveal text={m.quote} className="headline text-[26px] md:text-[34px] leading-[1.3] font-medium" />
                  {m.speakers?.length ? <footer className="mt-5 text-sm text-dim">{m.speakers[0]}</footer> : null}
                </blockquote>
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Facts and story */}
      <article className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 rounded-2xl border border-line p-6">
              <EventDate date={m.date} precision={m.datePrecision} />
              <dl className="mt-6">
                <Fact label="When">{dateText}</Fact>
                <Fact label="Where">{[m.venue, m.city, m.country].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).join(", ")}</Fact>
                <Fact label="Format">{m.format}</Fact>
                <Fact label="Organised by">{(m.organisers || []).join(", ")}</Fact>
                <Fact label="Our role">{m.role}</Fact>
                {m.speakers?.length ? (
                  <Fact label="On stage">
                    <ul className="space-y-1">
                      {m.speakers.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </Fact>
                ) : null}
                {m.communities?.length ? <Fact label="Community">{m.communities.join(", ")}</Fact> : null}
                {m.links?.length ? (
                  <Fact label="Source">
                    <ul className="space-y-1">
                      {m.links.map((l) => (
                        <li key={l.href}>
                          <a href={l.href} target="_blank" rel="noopener noreferrer" className="group/src inline-flex items-center gap-1.5 text-white hover:text-slate-200 transition-colors">
                            <Icon name="linkedin" className="text-xs" />
                            {l.label}
                            <span aria-hidden="true" className="inline-block text-dim transition-transform duration-300 group-hover/src:-translate-y-0.5 group-hover/src:translate-x-0.5">↗</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Fact>
                ) : null}
              </dl>
              <div className="mt-5 pt-5 border-t border-line flex flex-wrap items-center gap-x-5 gap-y-2">
                <CopyLink />
                {gallery.length > 1 ? (
                  <a href="#photos" className="group/jump inline-flex items-center gap-1.5 text-sm text-white hover:text-slate-200 transition-colors">
                    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover/jump:translate-y-0.5">↓</span>
                    {gallery.length} photos
                  </a>
                ) : null}
              </div>
              {m.context ? <p className="mt-4 text-xs leading-5 text-dim">{m.context}</p> : null}
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="prose prose-base md:prose-lg !prose-invert max-w-2xl prose-headings:tracking-tight prose-headings:font-medium prose-h2:text-[22px] md:prose-h2:text-[26px] prose-p:text-muted prose-li:text-muted prose-strong:text-[#FCFCFA] prose-a:text-[#FCFCFA] prose-em:text-white/90">
              <MDXRemote source={e.content} options={options} />
            </div>

            {m.video ? (
              <div className="mt-12 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.12em] text-dim">Video</p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-black">
                  <video controls playsInline preload="metadata" poster={m.video.poster || undefined} className="w-full">
                    <source src={m.video.src} type="video/mp4" />
                  </video>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </article>

      {gallery.length > 1 ? (
        <section id="photos" className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16 md:pb-20 scroll-mt-28">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.12em] text-dim">Photos</p>
            <p className="text-xs text-dim tabular-nums">{gallery.length}</p>
          </div>
          <EventGallery images={gallery} title={m.short} />
        </section>
      ) : null}

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-5">
          <NeighbourLink e={newer} dir="newer" />
          <NeighbourLink e={older} dir="older" />
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-line">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="pill">Related</span>
                <h2 className="headline mt-6 text-[28px] md:text-[34px] leading-[1.3] font-medium max-w-2xl">More on the same threads.</h2>
              </div>
              <Link href="/events" className="group hidden sm:inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-slate-200 transition-colors shrink-0">
                All events
                <Icon name="arrow-right" className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {related.map((item, i) => (
                <Reveal key={item.slug} y={16} delay={0.05 * i} className="h-full">
                  <EventCompactCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Cta title="Invite Nunnari Labs to your stage." subtitle="Talks, panels and hands-on workshops on agentic AI, AI governance and physical AI." location="event" />
      <Footer />
      <FootNote />
    </div>
  );
}
