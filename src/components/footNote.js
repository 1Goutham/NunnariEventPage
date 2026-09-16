"use client";

import { openConsent } from "@/components/consent";

export default function FootNote() {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto">
      <div className="py-5">
        <div className="max-w-[1200px] px-6 lg:px-10 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center order-2 md:order-1 text-muted text-sm">
              {`© ${year} Nunnari Labs Private Limited`}
            </p>

            <div className="order-1 md:order-2 flex justify-center gap-6">
              <a
                href="/privacy"
                className="text-muted hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-muted hover:text-white text-sm transition-colors"
              >
                Terms of Use
              </a>
              <button
                type="button"
                onClick={openConsent}
                className="text-muted hover:text-white text-sm transition-colors"
              >
                Cookie settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
