"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const KEY = "nl-consent";
const GA_ID = "G-1336CYSP4X";

// Reads the stored choice: "granted" | "denied" | null (not yet asked).
function readChoice() {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export default function Consent() {
  const [choice, setChoice] = useState("pending"); // pending until mounted
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = readChoice();
    setChoice(c);
    setOpen(c === null);
    function reopen() {
      setOpen(true);
    }
    window.addEventListener("nl-consent-open", reopen);
    return () => window.removeEventListener("nl-consent-open", reopen);
  }, []);

  function decide(value) {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {}
    setChoice(value);
    setOpen(false);
  }

  return (
    <>
      {choice === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      ) : null}

      {open ? (
        <div
          role="dialog"
          aria-labelledby="consent-title"
          className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:px-6 md:pb-6"
        >
          <div className="mx-auto max-w-[1200px] rounded-2xl border border-line bg-[#010314]/95 backdrop-blur-md p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
            <div className="flex-1">
              <p id="consent-title" className="text-white font-medium">
                Analytics cookies
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">
                We use Google Analytics to understand how this site is used. No
                advertising cookies, and the site works the same either way.{" "}
                <a href="/privacy" className="text-white border-b border-white/40 hover:border-white">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-line text-white text-sm font-semibold hover:border-white/40 transition-colors"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors"
              >
                Accept analytics
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function openConsent() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event("nl-consent-open"));
}
