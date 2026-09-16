"use client";
import LogoImg from "@/components/ui/logoImg";
import Icon from "@/components/ui/icon";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { track, CALENDLY } from "@/lib/track";

const SERVICES = [
  { label: "Digital AI", href: "/digital-ai" },
  { label: "Physical AI", href: "/services/intelligent-industrial-automation" },
  { label: "Frontier AI", href: "/frontier-ai" },
  { label: "Sovereign AI", href: "/sovereign-ai" },
  { label: "Forward-deployed engineers", href: "/forward-deployed-engineers" },
];

const NAV_ITEMS = [
  { label: "Home", href: "/", path: "/" },
  { label: "Services", href: "/#services", scroll: "services", children: SERVICES },
  { label: "AI governance", href: "/ai-governance", path: "/ai-governance" },
  { label: "Outcomes", href: "/case-studies", path: "/case-studies" },
  { label: "Research", href: "/blogs", path: "/blogs" },
  { label: "Company", href: "/team", path: "/team" },
  { label: "Contact", href: "/contact", path: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNav(item, e) {
    if (item.scroll) {
      e.preventDefault();
      setOpen(false);
      const target = document.querySelector(`#${item.scroll}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${item.scroll}`);
      }
      return;
    }
    e.preventDefault();
    setOpen(false);
    router.push(item.href);
  }

  function linkClass(item, mobile) {
    const isActive = item.path && path === item.path;
    if (mobile) {
      return `block px-3 py-2 rounded-xl text-[15px] cursor-pointer ${
        isActive
          ? "text-white bg-white/5"
          : "text-muted hover:text-white hover:bg-white/5"
      }`;
    }
    return `text-[15px] cursor-pointer transition-colors ${
      isActive ? "text-white" : "text-muted hover:text-white"
    }`;
  }

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#010314]/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] px-6 lg:px-10 mx-auto">
        <div className="flex items-center justify-between py-4 md:grid md:grid-cols-[1fr_auto_1fr]">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
            className="flex items-center"
            aria-label="Nunnari Labs home"
          >
            <LogoImg
              src="/logo-dark.png"
              className="w-14 md:w-20 cursor-pointer"
              alt="Nunnari Labs"
            />
          </a>

          <ul className="hidden md:flex items-center justify-center gap-x-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className={item.children ? "relative group" : undefined}>
                <a
                  href={item.href}
                  onClick={(e) => handleNav(item, e)}
                  className={`${linkClass(item, false)} ${item.children ? "inline-flex items-center gap-1.5" : ""}`}
                  aria-haspopup={item.children ? "menu" : undefined}
                >
                  {item.label}
                  {item.children ? (
                    <Icon name="chevron-down" className="text-[10px] transition-transform group-hover:rotate-180" />
                  ) : null}
                </a>
                {item.children ? (
                  <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
                    <ul
                      role="menu"
                      className="min-w-[260px] rounded-2xl border border-line bg-[#010314]/95 backdrop-blur-md p-2 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
                    >
                      {item.children.map((c) => (
                        <li key={c.href} role="none">
                          <a
                            role="menuitem"
                            href={c.href}
                            onClick={(e) => handleNav(c, e)}
                            className={`block whitespace-nowrap rounded-xl px-4 py-2.5 text-[15px] transition-colors ${
                              path === c.href ? "text-white bg-white/5" : "text-muted hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex justify-end">
            <a
              href={CALENDLY}
              onClick={() => track("book_call", { location: "nav" })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors"
            >
              Book a call
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white/80 hover:text-white"
          >
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d={open ? "M2 2L18 12M18 2L2 12" : "M1 1h18M1 7h18M1 13h18"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-[640px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 pb-4 border-t border-line mt-2 pt-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNav(item, e)}
                  className={linkClass(item, true)}
                >
                  {item.label}
                </a>
                {item.children ? (
                  <ul className="ml-3 mb-1 border-l border-line pl-3 flex flex-col gap-0.5">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <a href={c.href} onClick={(e) => handleNav(c, e)} className="block px-3 py-1.5 rounded-lg text-sm text-muted hover:text-white hover:bg-white/5">
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="px-3 pt-2">
              <a
                href={CALENDLY}
              onClick={() => track("book_call", { location: "nav" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black text-sm font-semibold"
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
