import Image from "next/image";
import EventDate from "./event-date";
import { formatEventDate } from "@/lib/events";

// Poster-only events render the poster inside a contained frame rather than
// cropped as photography; the source posters are portrait or square.
function Visual({ item, sizes, aspect = "aspect-[16/10]", priority = false }) {
  const img = item.cover || item.poster;
  if (!img) {
    return (
      <div className={`${aspect} w-full rounded-2xl border border-line bg-white/[0.03] flex items-end p-5`}>
        <span className="text-xs uppercase tracking-[0.12em] text-dim">{item.type}</span>
      </div>
    );
  }
  const isPoster = !item.cover;
  return (
    <div className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-line ${isPoster ? "bg-white/[0.03]" : ""}`}>
      {isPoster ? (
        <Image src={img.src} alt="" fill sizes="32px" aria-hidden="true" className="object-cover opacity-25 blur-2xl scale-125" />
      ) : null}
      <Image
        src={img.src}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={img.blur}
        className={`transition-transform duration-500 ease-out group-hover:scale-[1.03] ${isPoster ? "object-contain p-4" : "object-cover"}`}
      />
    </div>
  );
}

function Meta({ item, className = "" }) {
  const org = item.organisers?.[0];
  return (
    <p className={`text-sm text-dim ${className}`}>
      {[org, item.city].filter(Boolean).join(" · ")}
    </p>
  );
}

// Lead card: image beside text, date set large, with the pull quote.
export function EventLeadCard({ item }) {
  return (
    <a
      href={`/events/${item.slug}`}
      className="group grid lg:grid-cols-12 gap-x-10 gap-y-6 rounded-3xl border border-line p-6 md:p-8 transition-all duration-300 hover:border-white/60 hover:bg-white/[0.04]"
    >
      <div className="lg:col-span-5">
        <Visual item={item} sizes="(max-width: 1024px) 100vw, 480px" priority />
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
        <span className="mt-auto pt-8 inline-flex items-center gap-2 text-sm text-muted group-hover:text-white transition-colors">
          Read the story
          <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}

// Secondary featured card: smaller image beside a tight text column.
export function EventSplitCard({ item }) {
  return (
    <a
      href={`/events/${item.slug}`}
      className="group grid sm:grid-cols-12 gap-x-6 gap-y-5 rounded-3xl border border-line p-6 transition-all duration-300 hover:border-white/60 hover:bg-white/[0.04] h-full"
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
    </a>
  );
}

// Compact card: image on top. Used on the home page and for related events.
export function EventCompactCard({ item, sizes = "(max-width: 768px) 100vw, 380px" }) {
  return (
    <a href={`/events/${item.slug}`} className="group flex flex-col h-full">
      <Visual item={item} sizes={sizes} />
      <p className="mt-5 flex items-center gap-2 text-xs text-dim">
        <span className="text-white/80 font-medium">{formatEventDate(item.date, item.datePrecision)}</span>
        <span aria-hidden="true">•</span>
        <span>{item.city}</span>
      </p>
      <h3 className="mt-2 text-[18px] md:text-[20px] leading-[1.4] font-medium text-white group-hover:text-slate-200 transition-colors">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted line-clamp-2">{item.summary}</p>
      <p className="mt-3 text-xs uppercase tracking-[0.12em] text-dim">{item.role}</p>
    </a>
  );
}
