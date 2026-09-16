"use client";

import Reveal from "../motion/reveal";

// Single source of truth for section headers: eyebrow pill, two-tone
// headline, and paragraph, in the Cyrion register.

export function Eyebrow({ children }) {
  return <span className="pill">{children}</span>;
}

export default function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  className = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "flex flex-col items-center text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <Reveal y={16}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal y={20} delay={0.05}>
        <h2
          className={`headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium ${
            centered ? "max-w-3xl" : "max-w-2xl"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {sub ? (
        <Reveal y={16} delay={0.1}>
          <p
            className={`mt-5 text-[15px] leading-[27px] text-muted ${
              centered ? "max-w-2xl" : "max-w-xl"
            }`}
          >
            {sub}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
