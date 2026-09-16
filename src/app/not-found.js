import Icon from "@/components/ui/icon";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import { CALENDLY } from "@/lib/track";

export const metadata = {
  title: "Page not found",
  description: "The page you were looking for does not exist or has moved.",
};

const LINKS = [
  ["Outcomes", "/case-studies"],
  ["Services", "/#services"],
  ["Research articles", "/blogs"],
  ["AI governance", "/ai-governance"],
  ["Company", "/team"],
];

export default function NotFound() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <header className="border-b border-line bg-vvbg bg-cover bg-bottom">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20">
          <span className="pill">404</span>
          <h1 className="headline mt-6 text-[40px] md:text-[56px] leading-[1.15] font-medium max-w-3xl">
            That page does not exist, or has moved.
          </h1>
          <p className="mt-6 text-[15px] leading-[27px] text-muted max-w-2xl">
            The address may be out of date. The links below cover most of the site, or go back to the home page.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="/" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors">
              Back to home
            </a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-slate-200 transition-colors">
              <Icon name="calendar-check" />
              Book a call
            </a>
          </div>
        </div>
      </header>
      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="block rounded-2xl border border-line p-5 text-white hover:border-white/40 transition-colors">
                {label} <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
      <FootNote />
    </div>
  );
}
