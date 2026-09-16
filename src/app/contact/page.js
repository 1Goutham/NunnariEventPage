import Navbar from "@/components/navbar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FootNote from "@/components/footNote"
import ContactForm from "@/components/contactForm"
import Maps from "@/components/maps"

export const metadata = {
  title: "Contact",
  description:
    "Contact Nunnari Labs: book a call or email info@nunnarilabs.com. Regional leads in Coimbatore and Sydney reply within a business day.",
};

export default function Contact(){
    return(
        <>
        <Navbar/>
        <Header
            eyebrow="Contact"
            title="Contact"
            tagline="Drop us a line — tell us what you're working on and we'll take it from there."
        />
      <ContactForm/>
      <Maps/>
       <Footer/>
       <FootNote/>
        </>
    )
}
