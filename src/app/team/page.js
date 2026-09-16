import Icon from "@/components/ui/icon";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

export const metadata = {
  title: "Company",
  description:
    "The Nunnari Labs team: leadership and senior engineers across Coimbatore and Sydney who build production AI with you, then hand it over.",
};

const LEADERSHIP = [
  {
    name: "Navaneeth Malingan",
    role: "Founder & CEO",
    bio: "Founded Nunnari Labs in Coimbatore in 2020 and leads the company across India and Australia. Also leads the AI Tamil Nadu community of 10,000+ practitioners.",
    img: "/team/navaneeth.png",
    linkedin: "https://www.linkedin.com/in/nivu/",
  },
  {
    name: "Timothy D Paul",
    role: "Chief Operating Officer",
    bio: "Runs delivery and operations across both regions.",
    img: "/team/timo.png",
    linkedin: "https://www.linkedin.com/in/dr-timothy-d-paul-81613481/",
  },
  {
    name: "Sathya Prabha",
    role: "Chief Program Management Officer",
    bio: "Owns programme governance, scope and the outcome each engagement is signed against.",
    img: "/team/sathya.png",
    linkedin: "https://www.linkedin.com/in/sathya-prabha-726029157/",
  },
];

const TEAM = [
  { name: "Sakthivel S", role: "AI/ML Lead", img: "/team/sakthi.png", linkedin: "https://www.linkedin.com/in/nameissakthi/" },
  { name: "Devansh Shukla", role: "Robotics Lead", img: "/team/devansh.png", linkedin: "https://www.linkedin.com/in/devansh-r/" },
  { name: "Ramesh Patel", role: "Robotics Engineer", img: "/team/ramesh.png", linkedin: null },
];

function LinkedIn({ href, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      className="group shrink-0"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors group-hover:border-white/40 text-white">
        <Icon name="linkedin" className="text-sm" />
      </span>
    </a>
  );
}

function Photo({ src, alt, sizes }) {
  const initials = alt.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line bg-glass">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "radial-gradient(70% 55% at 50% 100%, rgba(159,125,255,0.28), rgba(159,125,255,0) 100%)" }}
      />
      {src ? (
        <div className="absolute inset-0">
          <Image src={src} alt={alt} fill sizes={sizes} className="object-contain object-bottom" />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" aria-label={`${alt}, photo to follow`}>
          <span className="text-[44px] font-medium text-white/70">{initials}</span>
        </div>
      )}
    </div>
  );
}

export default function Team() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Company"
        title="The people who own the outcome."
        tagline="Senior engineers across Coimbatore and Sydney who build production AI with you, then hand it over and move to the next use case."
      />

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-[680px] mx-auto">
        <span className="pill">Leadership</span>
        <div className="mt-8 grid sm:grid-cols-3 gap-x-8 gap-y-12">
          {LEADERSHIP.map((m) => (
            <div key={m.name} className="flex flex-col">
              <Photo src={m.img} alt={m.name} sizes="(max-width: 640px) 100vw, 210px" />
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-white font-medium">{m.name}</p>
                  <p className="mt-0.5 text-sm text-dim">{m.role}</p>
                </div>
                <LinkedIn href={m.linkedin} name={m.name} />
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{m.bio}</p>
            </div>
          ))}
        </div>
        </div>

        <div className="mt-20 max-w-[680px] mx-auto">
          <span className="pill">Engineering</span>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10">
            {TEAM.map((m) => (
              <div key={m.name} className="flex flex-col">
                <Photo src={m.img} alt={m.name} sizes="(max-width: 640px) 50vw, 210px" />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white font-medium">{m.name}</p>
                    <p className="mt-0.5 text-sm text-dim">{m.role}</p>
                  </div>
                  <LinkedIn href={m.linkedin} name={m.name} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-line p-6 md:p-8 grid md:grid-cols-3 gap-6">
          {[
            ["30+", "Senior engineers across both regions"],
            ["5 disciplines", "Business analysis, data, ML, cloud & platform, full-stack"],
            ["ISO/IEC 42001", "Every engineer works inside a certified AI management system"],
          ].map(([v, l]) => (
            <div key={v}>
              <p className="text-[26px] leading-none text-white font-medium">{v}</p>
              <p className="mt-2 text-sm text-muted">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <Cta title="Work with the team, or join it." subtitle="We hire senior engineers in Coimbatore and Sydney. Client conversations start with an engineer, not a sales deck." location="team" />
      <Footer />
      <FootNote />
    </div>
  );
}
