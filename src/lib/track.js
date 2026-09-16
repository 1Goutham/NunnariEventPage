// Thin wrapper over gtag so components can record conversions without
// caring whether analytics loaded.
export function track(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export const CALENDLY = "https://calendly.com/navaneeth-nunnarilabs/30min";
export const EMAIL = "info@nunnarilabs.com";
