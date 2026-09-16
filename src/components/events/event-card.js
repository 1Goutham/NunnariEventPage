import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/icon";
import EventDate from "./event-date";
import SpotlightCard from "@/components/motion/spotlight-card";
import Parallax from "@/components/motion/parallax";
import { formatEventDate } from "@/lib/events";

// Poster-only events render the poster inside a contained frame rather than
// cropped as photography; the source posters are portrait or square.
function Visual({ item, sizes, aspect = "aspect-[16/10]", priority = false, parallax = false }) {
  const img = item.cover || item.poster;
  if (!img) {
    return (
      <div className={`${aspect} w-full rounded-2xl border border-line bg-white/[0.03] flex items-end p-5`}>
        <span className="text-xs uppercase tracking-[0.12em] text-dim">{item.type}</span>
      </div>
    );
  }
  const isPoster = !item.cover;
  const picture = (
    <Image
      src={img.src}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={img.blur}
      className={`transition-transform duration-700 ease-out group-hover:scale-[1.04] ${isPoster ? "object-contain p-4" : "object-cover"}`}
    />
  );
  const frame = `relative ${aspect} w-full overflow-hidden rounded-2xl border border-line ${isPoster ? "bg-white/[0.03]" : ""}`;
  if (parallax && !isPoster) {
    return (
      <Parallax className={frame} amount={10}>
        {picture}
      </Parallax>
    );
  }
  return (
    <div className={frame}>
      {isPoster ? <Image src={img.src} alt="" fill sizes="32px" aria-hidden="true" className="object-cover opacity-25 blur-2xl scale-125" /> : null}
      {picture}
    </div>
  );
}

function Meta({ item, className = "" }) {
  const org = item.organisers?.[0];
  return <p className={`text-sm text-dim ${className}`}>{[org, item.city].filter(Boolean).join(" · ")}</p>;
}

function ReadMore({ label = "Read the story" }) {
  // Two stacked arrows in a clipped box: the visible one slides out to the
  // right as its twin slides in from the left.
  return (
    <span className="inline-flex items-center gap-2 text-sm text-muted group-hover:text-white transition-colors">
      {label}
      <span aria-hidden="true" className="relative inline-block h-4 w-4 overflow-hidden">
        <Icon name="arrow-right" className="absolute inset-0 !h-4 !w-4 transition-transform duration-300 ease-out group-hover:translate-x-full" />
        <Icon name="arrow-right" className="absolute inset-0 !h-4 !w-4 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
      </span>
    </span>
  );
}

// Lead card: image beside text, date set large, with the pull quote.
export function EventLeadCard({ item }) {
  return (
    <SpotlightCard
      href={`/events/${item.slug}`}
      radius={420}
      className="grid lg:grid-cols-12 gap-x-10 gap-y-6 rounded-3xl border border-line p-6 md:p-8 transition-colors duration-300 hover:border-white/40"
    >
      <div className="lg:col-span-5">
        <Visual item={item} sizes="(max-width: 1024px) 100vw, 480px" priority parallax />
      </div>
      <div className="lg:col-span-7 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <EventDate date={item.date} precision={item.datePrecision} size="lg" />
          <span className="pill">{item.role}</span>
        </div>
        <h3 className="mt-6 text-[24px] md:text-[30px] leading-[1.25] font-medium text-white">{item.title}</h3>
        <Meta item={item} className="mt-3" />
        {item.quote ? (
          <p className="mt-6 text-[18px] md:text-[20px] leading-[1.5] text-white/90">
            <span aria-hidden="true" className="text-dim">&ldquo;</span>
            {item.quote}
            <span aria-hidden="true" className="text-dim">&rdquo;</span>
          </p>
        ) : (
          <p className="mt-6 text-[15px] leading-[27px] text-muted">{item.summary}</p>
        )}
        <div className="mt-auto pt-8">
          <ReadMore />
        </div>
      </div>
    </SpotlightCard>
  );
}

// Secondary featured card: smaller image beside a tight text column.
export function EventSplitCard({ item }) {
  return (
    <SpotlightCard
      href={`/events/${item.slug}`}
      className="grid sm:grid-cols-12 gap-x-6 gap-y-5 rounded-3xl border border-line p-6 transition-colors duration-300 hover:border-white/40 h-full"
    >
      <div className="sm:col-span-5">
        <Visual item={item} sizes="(max-width: 640px) 100vw, 240px" aspect="aspect-[4/3]" />
      </div>
      <div className="sm:col-span-7 flex flex-col">
        <EventDate date={item.date} precision={item.datePrecision} size="sm" />
        <h3 className="mt-4 text-[18px] md:text-[20px] leading-[1.35] font-medium text-white">{item.title}</h3>
        <Meta item={item} className="mt-2" />
        <p className="mt-auto pt-5 text-xs uppercase tracking-[0.12em] text-dim group-hover:text-white transition-colors">{item.role}</p>
      </div>
    </SpotlightCard>
  );
}

// Compact card: image on top. Used on the home page and for related events.
export function EventCompactCard({ item, sizes = "(max-width: 768px) 100vw, 380px" }) {
  return (
    <Link href={`/events/${item.slug}`} className="group flex flex-col h-full">
      <Visual item={item} sizes={sizes} />
      <p className="mt-5 flex items-center gap-2 text-xs text-dim">
        <span className="text-white/80 font-medium">{formatEventDate(item.date, item.datePrecision)}</span>
        <span aria-hidden="true">•</span>
        <span>{item.city}</span>
      </p>
      <h3 className="mt-2 text-[18px] md:text-[20px] leading-[1.4] font-medium text-white group-hover:text-slate-200 transition-colors">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted line-clamp-2">{item.summary}</p>
      <p className="mt-3 text-xs uppercase tracking-[0.12em] text-dim">{item.role}</p>
    </Link>
  );
}
