"use client";
import LogoImg from "@/components/ui/logoImg";
import Icon from "@/components/ui/icon";

import { track, CALENDLY, EMAIL } from "@/lib/track";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/nunnarilabs/", icon: "bi-facebook" },
  { label: "X", href: "https://twitter.com/nunnarilabs", icon: "bi-twitter-x" },
  { label: "YouTube", href: "https://www.youtube.com/@aitamilnadu", icon: "bi-youtube" },
  { label: "LinkedIn", href: "https://in.linkedin.com/company/nunnari-labs", icon: "bi-linkedin" },
];

const EXPLORE = [
  { label: "Home", href: "/" },
  { label: "Outcomes", href: "/case-studies" },
  { label: "AI governance", href: "/ai-governance" },
  { label: "Digital AI", href: "/digital-ai" },
  { label: "Frontier AI", href: "/frontier-ai" },
  { label: "Sovereign AI", href: "/sovereign-ai" },
  { label: "Factory Brain", href: "/factory-brain" },
  { label: "Research", href: "/blogs" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "AI Consulting & Governance", href: "/services/digital-technology-consulting" },
  { label: "Production AI Engineering", href: "/services/ai-solutions" },
  { label: "Physical AI & Edge", href: "/services/intelligent-industrial-automation" },
  { label: "Data for AI", href: "/services/enterprise-software" },
  { label: "AIOps", href: "/services/corporate-skill-enhancement" },
  { label: "Forward-deployed engineers", href: "/forward-deployed-engineers" },
];

const RESOURCES = [
  { label: "DeepWeaver", href: "https://deepweaver.ai", external: true },
  { label: "Nunnari Academy", href: "https://nunnari.academy", external: true },
  { label: "AI Tamil Nadu", href: "https://www.youtube.com/@aitamilnadu", external: true },
  { label: "Book a call", href: "https://calendly.com/navaneeth-nunnarilabs/30min", external: true },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Grievance Officer", href: "/privacy#grievance" },
];

const LINK = "text-muted hover:text-white transition-colors";

function LinkList({ title, items }) {
  return (
    <div>
      <p className="text-white text-lg font-medium">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={LINK}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GetInTouch() {
  return (
    <div className="mt-16 rounded-2xl border border-line p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <p className="text-white text-lg font-medium">Get in touch</p>
        <p className="mt-1 text-sm text-muted">
          Book a call, or email us and a regional lead will reply within a business day.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("book_call", { location: "footer" })}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-black text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
          <Icon name="calendar-check" />
          Book a call
        </a>
        <a
          href={`mailto:${EMAIL}`}
          onClick={() => track("email_click", { location: "footer" })}
          className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-slate-200"
        >
          <Icon name="envelope" />
          {EMAIL}
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mx-auto overflow-hidden">
      <div className="py-20 border-b border-line">
        <div className="max-w-[1200px] px-6 lg:px-10 mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <a href="/" aria-label="Nunnari Labs home">
                <LogoImg className="w-28" src="/logo-dark.png" alt="Nunnari Labs" />
              </a>
              <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-xs">
                ISO/IEC 42001:2023 certified AI-native services — frontier and
                sovereign AI across the physical and digital worlds.
                <br />
                <span className="text-dim">Coimbatore · Sydney</span>
              </p>
              <div className="mt-5 flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Nunnari Labs on ${s.label}`}
                    className="bg-white text-black hover:bg-slate-200 transition-colors rounded-full h-9 w-9 flex items-center justify-center"
                  >
                    <Icon name={s.icon} className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-10">
              <div className="col-span-2">
                <p className="text-white text-lg font-medium">Locations</p>
                <address className="mt-4 not-italic text-muted leading-[27px]">
                  Nunnari Labs Private Limited
                  <br />
                  Coimbatore, India
                  <br />
                  Sydney, Australia
                </address>
                <p className="mt-6 text-white text-lg font-medium">Contact</p>
                <p className="mt-4 flex flex-col gap-1">
                  <a href="tel:+919043035584" className={LINK}>
                    +91 90430 35584
                  </a>
                  <a href={`mailto:${EMAIL}`} className={LINK}>
                    {EMAIL}
                  </a>
                </p>
              </div>

              <LinkList title="Services" items={SERVICES} />
              <LinkList title="Explore" items={EXPLORE} />
              <LinkList title="Resources" items={RESOURCES} />
            </div>
          </div>

          <GetInTouch />
        </div>
      </div>
    </footer>
  );
}
