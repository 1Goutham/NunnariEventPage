import Footer from "@/components/footer";
import FootNote from "@/components/footNote";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Terms of Use",
  description: "The terms on which Nunnari Labs makes this website available.",
};

const UPDATED = "7 September 2026";

const H2 = ({ children }) => (
  <h2 className="headline text-[24px] md:text-[28px] leading-[1.3] font-medium mt-14 first:mt-0">{children}</h2>
);
const P = ({ children }) => <p className="text-[15px] leading-[27px] text-muted mt-4">{children}</p>;

export default function Terms() {
  return (
    <div className="bg-[#010314]">
      <Navbar />
      <Header
        eyebrow="Legal"
        title="Terms of Use"
        tagline="The terms on which Nunnari Labs Private Limited makes nunnarilabs.com available. Client engagements are governed by their own written agreements, not by this page."
      />
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm text-dim">Last updated {UPDATED} · Version 1.1</p>

          <H2>Using this site</H2>
          <P>
            By using this website you agree to these terms. The site describes our services and our work; it is provided for information and to let you contact us. You may not use it to send unsolicited communications, to probe or test its security without our written permission, or in any way that breaks the law or interferes with other visitors.
          </P>

          <H2>Content and intellectual property</H2>
          <P>
            The text, graphics, animations, code and design of this site belong to Nunnari Labs Private Limited or are used under licence. Client and partner names and logos belong to their owners and appear with their permission. You may view and link to the site, and quote short extracts with attribution, but you may not copy, republish or commercially exploit its content without our written consent.
          </P>

          <H2>Case studies and figures</H2>
          <P>
            Outcomes described on this site are drawn from real engagements and are accurate as of publication. Results depend on each client&rsquo;s data, systems and operating environment, and past outcomes are not a promise of future results. Some clients are anonymised at their request; details are available under a non-disclosure agreement.
          </P>

          <H2>No advice, no warranty</H2>
          <P>
            Nothing on this site is legal, regulatory, financial or professional advice, including our descriptions of ISO/IEC 42001, NIST AI RMF, the EU AI Act or other frameworks. The site is provided &ldquo;as is&rdquo;. To the extent the law allows, we exclude all warranties and are not liable for any loss arising from your use of the site or reliance on its content. Nothing in these terms limits liability that cannot be limited by law, including under the Australian Consumer Law.
          </P>

          <H2>Third-party services and links</H2>
          <P>
            The site uses third-party services for hosting, analytics and call booking, and links to sites we do not control, including nunnari.academy and deepweaver.ai. Those services and sites have their own terms and privacy policies. Our Privacy Policy explains what each service receives from you.
          </P>

          <H2>Privacy</H2>
          <P>
            How we handle personal information is set out in our{" "}
            <a href="/privacy" className="text-white border-b border-white/40 hover:border-white">Privacy Policy</a>, which forms part of these terms.
          </P>

          <H2>Governing law</H2>
          <P>
            These terms are governed by the laws of India. Disputes about this website are subject to the exclusive jurisdiction of the courts of Coimbatore, Tamil Nadu. This does not affect rights you have as a consumer under the law of the country you live in.
          </P>

          <H2>Changes and contact</H2>
          <P>
            We may update these terms; the date above tells you which version applies. Questions about them go to{" "}
            <a href="mailto:info@nunnarilabs.com" className="text-white border-b border-white/40 hover:border-white">info@nunnarilabs.com</a>.
          </P>
          <P>
            Complaints about this website or our services may also be raised with our Grievance Officer, Dr. Timothy D Paul, whose contact details and postal address are published in our{" "}
            <a href="/privacy#grievance" className="text-white border-b border-white/40 hover:border-white">Privacy Policy</a>.
          </P>
        </div>
      </section>
      <Footer />
      <FootNote />
    </div>
  );
}
