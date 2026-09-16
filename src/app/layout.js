import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/motion/lenis-provider";
import Consent from "@/components/consent";

const geistFont = localFont({
  src: [
    {
      path: "../fonts/GeistVF.woff",
      weight: "100 900",
      variable: "--font-geist-sans",
    },
    {
      path: "../fonts/GeistMonoVF.woff",
      weight: "100 900",
      variable: "--font-geist-mono",
    },
  ],
});

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  metadataBase: new URL("https://nunnarilabs.com"),
  title: {
    default: "Nunnari Labs — Frontier and Sovereign AI, Physical and Digital",
    template: "%s | Nunnari Labs",
  },
  description:
    "ISO/IEC 42001 certified AI engineering company with teams in India and Australia. Digital, Physical, Frontier and Sovereign AI, delivered to production.",
  openGraph: {
    title: "Nunnari Labs — Enterprise AI Product Engineering",
    description:
      "ISO/IEC 42001:2023 certified AI R&D and product engineering studio building production AI systems for global enterprises.",
    url: "https://nunnarilabs.com",
    siteName: "Nunnari Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nunnarilabs",
    title: "Nunnari Labs — Enterprise AI Product Engineering",
    description:
      "ISO/IEC 42001:2023 certified AI R&D and product engineering studio building production AI systems for global enterprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link rel="preload" as="image" href="/gradientHero.webp" fetchPriority="high" />
      </head>
      <body
        className={`${jakarta.variable} ${jakarta.className} ${geistFont.variable} bg-[#010314]`}
      >
        <LenisProvider />
        <Consent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nunnari Labs",
              legalName: "Nunnari Labs Private Limited",
              url: "https://nunnarilabs.com",
              logo: "https://nunnarilabs.com/logo-dark.png",
              email: "info@nunnarilabs.com",
              telephone: "+91-90430-35584",
              foundingDate: "2020",
              description:
                "ISO/IEC 42001:2023 certified AI-native services across India and Australia — Digital, Physical, Frontier and Sovereign AI.",
              location: [
                { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Coimbatore", addressCountry: "IN" } },
                { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Sydney", addressCountry: "AU" } },
              ],
              sameAs: [
                "https://in.linkedin.com/company/nunnari-labs",
                "https://twitter.com/nunnarilabs",
                "https://www.facebook.com/nunnarilabs/",
                "https://www.youtube.com/@aitamilnadu",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Nunnari Labs",
              url: "https://nunnarilabs.com",
              publisher: { "@type": "Organization", name: "Nunnari Labs", url: "https://nunnarilabs.com" },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
