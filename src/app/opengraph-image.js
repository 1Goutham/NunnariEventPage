import { ImageResponse } from "next/og";

export const alt = "Nunnari Labs — Frontier and sovereign AI, across the physical and digital worlds";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(180deg, #010314 0%, #010314 45%, #2a1b8f 85%, #8f7cf0 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, letterSpacing: 6, fontWeight: 600 }}>
          NUNNARI LABS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 64, fontWeight: 500, lineHeight: 1.1, maxWidth: 980 }}>
            Frontier and sovereign AI, across the physical and digital worlds.
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 22, color: "rgba(255,255,255,0.85)" }}>
            <span>ISO/IEC 42001:2023 certified</span>
            <span>·</span>
            <span>Coimbatore · Sydney</span>
            <span>·</span>
            <span>nunnarilabs.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
