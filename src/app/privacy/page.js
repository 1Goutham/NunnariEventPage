import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Nunnari Labs collects, uses, shares and protects personal information across India, Australia and other markets we serve.",
};

const UPDATED = "7 September 2026";

const H2 = ({ children }) => (
  <h2 className="headline text-[24px] md:text-[28px] leading-[1.3] font-medium mt-14 first:mt-0">{children}</h2>
);
const P = ({ children }) => <p className="text-[15px] leading-[27px] text-muted mt-4">{children}</p>;
const UL = ({ items }) => (
  <ul className="mt-4 space-y-2">
    {items.map((it, i) => (
      <li key={i} className="flex items-start gap-2.5 text-[15px] leading-[27px] text-muted">
        <span aria-hidden="true" className="mt-[11px] h-1 w-1 rounded-full bg-white shrink-0" />
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const PROCESSORS = [
  ["Airtable", "Stores contact-form submissions (name, email, phone, message). United States."],
  ["Calendly", "Handles call bookings you make through our booking links (name, email, chosen time). United States."],
  ["Google Analytics", "Aggregate usage analytics for this website (pages viewed, device and browser type, approximate location from IP). United States."],
  ["Netlify", "Hosts this website and keeps standard server logs, including IP addresses. United States, with edge locations worldwide."],
  ["Cloudflare CDN (cdnjs)", "Serves one JavaScript library used by the hero animation. Your browser sends its IP address when it requests the file."],
  ["Google Workspace", "Our email provider, which handles messages you send to info@ and careers@ addresses."],
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Legal"
        title="Privacy Policy"
        tagline="How we collect, use, share and protect personal information — for visitors, clients, partners and candidates in India, Australia and the other markets we serve."
      />
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm text-dim">Last updated {UPDATED} · Version 2.1</p>

          <H2>Who we are</H2>
          <P>
            This policy is issued by Nunnari Labs Private Limited (&ldquo;Nunnari Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), an AI engineering company incorporated in India with its principal office in Coimbatore, Tamil Nadu. We deliver engagements in Australia and New Zealand with our exclusive partner DeepWeaver Technologies Pty Ltd, Sydney. Where DeepWeaver leads a client engagement, DeepWeaver may also be a controller of the personal information handled under that contract, under its own privacy policy.
          </P>
          <P>
            Nunnari Labs is the controller (in India, the &ldquo;data fiduciary&rdquo;) for personal information collected through this website and through our sales, delivery and recruitment activities.
          </P>

          <H2>What we collect, and where it comes from</H2>
          <UL
            items={[
              "Contact and enquiry details you give us through the contact form, by email, or when you book a call: name, organisation, role, email address, phone number, and the content of your message.",
              "Business relationship records for clients, partners and suppliers: contact details, contract and billing information, and correspondence.",
              "Candidate information when you apply for a role or write to careers@nunnarilabs.com: your CV, contact details, work history and anything else you choose to include.",
              "Website usage data collected automatically: pages viewed, referring site, device and browser type, and approximate location derived from your IP address.",
              "Technical data in server logs: IP address, request time and the resource requested.",
            ]}
          />
          <P>We do not collect payment card details through this website, and we do not knowingly collect personal information from children.</P>

          <H2>Why we use it, and on what basis</H2>
          <UL
            items={[
              "To respond to enquiries and arrange calls you request. Basis: your request, and our legitimate interest in responding to it.",
              "To scope, deliver, invoice and support client engagements. Basis: performance of a contract, and legal obligations such as accounting and tax.",
              "To assess job applications and contact candidates. Basis: your application, and steps taken at your request before entering a contract.",
              "To understand how the website is used and improve it. Basis: our legitimate interest in running a secure, useful website. Analytics runs only with your consent, given through the banner on your first visit and changeable at any time.",
              "To meet legal, regulatory and security obligations, including our ISO/IEC 42001 AI management system, which requires records of how systems are governed and operated.",
            ]}
          />
          <P>We do not sell personal information, and we do not use it for automated decisions that have legal or similarly significant effects on you.</P>

          <H2>Who we share it with</H2>
          <P>We use a small number of service providers who process personal information on our behalf under contract. As of the date above, these are:</P>
          <div className="mt-4 border-b border-line">
            {PROCESSORS.map(([who, what]) => (
              <div key={who} className="grid sm:grid-cols-[200px_1fr] gap-x-6 gap-y-1 border-t border-line py-4">
                <p className="text-white font-medium">{who}</p>
                <p className="text-sm leading-6 text-muted">{what}</p>
              </div>
            ))}
          </div>
          <P>
            We may also share personal information with DeepWeaver Technologies for engagements they lead; with professional advisers such as lawyers, accountants and auditors, including ISO/IEC 42001 certification auditors; and with regulators or law enforcement where the law requires it. We do not share client project data with any party other than the client and the processors named in that client&rsquo;s contract.
          </P>

          <H2>International transfers</H2>
          <P>
            We operate from India and Australia, so personal information may be accessed by our teams in either country. The providers listed above store data mainly in the United States. Where information leaves the country it was collected in, we rely on contractual protections with the recipient and, for client engagements, on the data residency terms agreed in the contract. Clients who require data to stay in-country can be served from in-jurisdiction infrastructure; ask us about our sovereign AI deployments.
          </P>

          <H2>How long we keep it</H2>
          <UL
            items={[
              "Enquiries and call bookings: up to 24 months after our last contact, unless a client relationship follows.",
              "Client, partner and supplier records: for the life of the relationship and then for as long as tax, accounting and contract law require, typically 7 years.",
              "Candidate information: 12 months after the recruitment decision, unless you ask us to keep it longer or to delete it sooner.",
              "Website analytics: Google Analytics retains event data for up to 14 months. Server logs are kept for up to 30 days.",
            ]}
          />

          <H2>Cookies and analytics</H2>
          <P>
            This website uses Google Analytics to measure how the site is used, and only after you accept analytics in the banner shown on your first visit. Until you accept, no analytics script loads and no analytics cookies are set. We use the aggregate reports with IP anonymisation; we do not use analytics to identify individuals, and we do not run advertising cookies. You can change your choice at any time through the &ldquo;Cookie settings&rdquo; link in the footer, or by clearing cookies in your browser. The site works the same either way.
          </P>

          <H2>How we protect it</H2>
          <P>
            We apply technical and organisational measures appropriate to the information we hold: access limited to people who need it, encryption in transit, provider-managed encryption at rest, and the controls of our ISO/IEC 42001-certified AI management system for any system that processes personal data. Client project data is handled under the security terms of each contract, including on-premise and air-gapped deployments where required. No method of transmission or storage is completely secure, and we will notify you and the relevant regulator of any breach where the law requires it.
          </P>

          <H2>Your rights</H2>
          <P>Depending on where you are, you have rights over your personal information. We honour these for everyone we can, regardless of location:</P>
          <UL
            items={[
              "Access: ask what personal information we hold about you and receive a copy.",
              "Correction: ask us to correct information that is inaccurate or incomplete.",
              "Erasure: ask us to delete information we no longer need to keep.",
              "Withdrawal of consent: where we rely on your consent, withdraw it at any time without affecting earlier processing.",
              "Objection and restriction: object to processing based on our legitimate interests, or ask us to restrict it while a dispute is resolved.",
              "Grievance redressal: raise a complaint with us and receive a response within the time the law sets.",
            ]}
          />
          <P>
            In Australia these rights arise under the Privacy Act 1988 and the Australian Privacy Principles. In India they arise under the Digital Personal Data Protection Act 2023. For individuals in the European Union or United Kingdom, they arise under the GDPR and UK GDPR. To exercise any of them, contact us as set out below. We will verify your identity before acting on a request.
          </P>

          <div id="grievance" className="scroll-mt-28">
            <H2>Grievance Officer</H2>
            <P>
              In line with the Information Technology Act, 2000 and the rules made under it, and the Digital Personal Data Protection Act, 2023, Nunnari Labs Private Limited has appointed a Grievance Officer. Any complaint, request or concern about this website, our services or the handling of your personal information may be addressed to:
            </P>
            <div className="mt-4 rounded-2xl border border-line p-6 text-[15px] leading-[27px] text-muted">
              <p className="text-white font-medium">Dr. Timothy D Paul</p>
              <p>Grievance Officer, Chief Operating Officer, Nunnari Labs Private Limited</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:timothy@nunnarilabs.com" className="text-white border-b border-white/40 hover:border-white">timothy@nunnarilabs.com</a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919791383414" className="text-white border-b border-white/40 hover:border-white">+91 97913 83414</a>
              </p>
              <p className="mt-3">Postal address:</p>
              <p className="text-white">Nunnari Labs Private Limited<br />B1 Floor, D Block, NGP Campus, No. 004, Kalapatti Main Road, Sharp Nagar, Nehru Nagar West,<br />Coimbatore, Tamil Nadu 641048, India</p>
            </div>
            <P>
              We acknowledge grievances within 7 days of receipt and aim to resolve them within 30 days. If you are not satisfied with our response: in India you may approach the Data Protection Board of India; in Australia you may complain to the Office of the Australian Information Commissioner (oaic.gov.au).
            </P>
          </div>

          <H2>Changes to this policy</H2>
          <P>
            We review this policy at least once a year and whenever our processing changes. The version and date at the top tell you which edition you are reading. Material changes will be announced on this page before they take effect.
          </P>
        </div>
      </section>
      <Footer />
      <FootNote />
    </div>
  );
}
