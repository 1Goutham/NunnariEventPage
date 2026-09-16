import { dateParts } from "@/lib/events";

// Date as typography. Exact dates show the day large with month and year
// stacked beside it; approximate dates show the month large with the year,
// so an unconfirmed day is never printed.
export default function EventDate({ date, precision = "exact", size = "md", className = "" }) {
  const p = dateParts(date, precision);
  const big = p.day || p.month;
  const small = p.day ? [p.month, String(p.year)] : [String(p.year)];
  const bigCls = size === "lg" ? "text-[56px] md:text-[72px]" : size === "sm" ? "text-[28px]" : "text-[40px] md:text-[48px]";
  const smallCls = size === "lg" ? "text-sm" : "text-xs";
  return (
    <div className={`flex items-start gap-2 ${className}`} aria-hidden="true">
      <span className={`${bigCls} leading-[0.9] font-medium text-white tracking-[-0.02em] tabular-nums`}>{big}</span>
      <span className={`flex flex-col ${smallCls} leading-[1.15] text-dim pt-[3px] uppercase tracking-[0.12em]`}>
        {small.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </span>
    </div>
  );
}
