"use client";
import Icon from "@/components/ui/icon";

import { track, CALENDLY, EMAIL } from "@/lib/track";

export default function Cta({ title, subtitle, location = "cta" }) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-0 pb-4">
      <div id="div7">
        <div className="py-24 px-6 flex flex-col items-center justify-center rounded-3xl border border-[#4C4558] bg-hero-image bg-cover bg-bottom">
          <span className="pill">Get in touch</span>

          <h2 className="headline mt-6 text-center text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            {title ||
              "Extending AI's reach from the screen to the floor and everything in between. Field and office as one."}
          </h2>

          <p className="text-center mt-5 text-[15px] leading-[27px] text-white/90 max-w-xl">
            {subtitle ||
              "Tell us where the programme is stuck and we will bring the right shape of engagement."}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("book_call", { location })}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white rounded-full text-black text-sm font-semibold hover:bg-slate-200 transition-colors"
            >
              <Icon name="calendar-check" />
              Book a call
            </a>
            <a
              href={`mailto:${EMAIL}`}
              onClick={() => track("email_click", { location })}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-slate-200 transition-colors"
            >
              <Icon name="envelope" />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
