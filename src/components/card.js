import Image from "next/image";

export default function Card({ title, description, category, thumbnail, path, date }) {
  return (
    <a href={`/${path}`} className="group flex flex-col h-full">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <p className="mt-5 flex items-center gap-2 text-xs text-dim">
        <span className="text-white/80 font-medium">Nunnari Labs</span>
        {category ? (<><span aria-hidden="true">•</span><span>{category}</span></>) : null}
        {date ? (<><span aria-hidden="true">•</span><span>{date}</span></>) : null}
      </p>

      <h3 className="mt-2 text-[20px] md:text-[22px] leading-[1.4] font-medium text-white group-hover:text-slate-200 transition-colors">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted line-clamp-2">{description}</p>
    </a>
  );
}
