import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TrustBar from "../components/trustBar";
import Capabilities from "../components/capabilities";
import CaseStudies from "../components/caseStudies";
import Segments from "../components/segments";
import ServiceLines from "../components/serviceLines";
import WhyChooseUs from "../components/whychooseus";
import ResponsibleAi from "../components/responsibleAi";
import Partners from "../components/partners";
import About from "../components/about";
import CaseStudyHome from "@/components/casestudyHome";
import Cta from "../components/cta";
import Footer from "../components/footer";
import FootNote from "@/components/footNote";

export default function Home() {
  return (
    <div className="bg-[#010314]">
      <div className="mx-auto ">
        <Navbar />
        <Hero />
        <TrustBar />
        <Capabilities />
        <CaseStudies />
        <Segments />
        <ServiceLines />
        <WhyChooseUs />
        <ResponsibleAi />
        <Partners />
        <About />
        <CaseStudyHome />
        <Cta />
        <Footer />
        <FootNote />
      </div>
    </div>
  );
}
