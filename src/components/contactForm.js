'use client';
import Icon from "@/components/ui/icon";
import { useState } from 'react';
import { track, CALENDLY } from '@/lib/track';

const INPUT_CLASSES =
    "mt-1 block w-full rounded-xl border border-line bg-transparent text-ink placeholder-[#9B9CA3] focus:border-white/40 focus:outline-none px-4 py-3 sm:text-sm";

export default function ContactForm(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit form');
            }

            track('contact_form_submit', { location: 'contact' });
            setShowSuccess(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });

            // Show success message
            const dialogContainer = document.getElementById('dialogContainer');
            if (dialogContainer) {
                dialogContainer.classList.remove('hidden');
                setTimeout(() => {
                    dialogContainer.classList.add('hidden');
                }, 3000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10" id="div2">
    <div className="py-20 md:py-24">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 w-full">
        <div>
          <span className="pill">Our Contact</span>
          <h2 className="headline mt-6 text-4xl md:text-5xl tracking-tight leading-[1.1] text-ink">
            Get in touch.
          </h2>
          <p className="mt-4 pb-6 text-muted leading-relaxed">
            Tell us what you are working on. A regional lead in Coimbatore or Sydney will reply within a business day.
          </p>
          <div className="flex items-center gap-4 pb-6">
            <div
              className="text-muted text-xl border rounded-full w-11 h-11 flex justify-center items-center border-line"
            >
              <Icon name="telephone-fill" />
            </div>
            <div className="grid gap-1">
              <p className="text-muted text-sm">Phone Number</p>
              <p className="text-ink">+91 90430 35584</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="text-muted text-xl border rounded-full w-11 h-11 flex justify-center items-center border-line"
            >
              <Icon name="envelope-fill" />
            </div>
            <div className="grid gap-1">
              <p className="text-muted text-sm">Email Address</p>
              <p className="text-ink">info@nunnarilabs.com</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("book_call", { location: "contact" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors"
            >
              <Icon name="calendar-check" />
              Book a 30-minute call
            </a>
            <span className="text-sm text-dim">Pick a slot with Navaneeth, or use the form.</span>
          </div>
          <hr className="border-line mt-10" />
          <p className="text-2xl tracking-tight text-ink mt-5">Grievance Officer</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Dr. Timothy D Paul, Chief Operating Officer. Email{" "}
            <a href="mailto:timothy@nunnarilabs.com" className="text-white hover:underline">timothy@nunnarilabs.com</a>, phone{" "}
            <a href="tel:+919791383414" className="text-white hover:underline">+91 97913 83414</a>, or by post to Nunnari Labs Private Limited, B1 Floor, D Block, NGP Campus, No. 004, Kalapatti Main Road, Sharp Nagar, Nehru Nagar West, Coimbatore, Tamil Nadu 641048, India.{" "}
            <a href="/privacy#grievance" className="text-white hover:underline">Full details</a>
          </p>
          <hr className="border-line mt-10" />
          <p className="text-2xl tracking-tight text-ink mt-5">Follow Us</p>
          <div className="mt-5 flex gap-4">
            <a href="https://www.facebook.com/nunnarilabs/">
            <div className="group border border-line hover:border-white/40 transition-colors rounded-full p-3 h-10 w-10 flex items-center justify-center">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#FCFCFA" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                    </div>
            </a>

            <a href="https://twitter.com/nunnarilabs">
            <div className="group border border-line hover:border-white/40 transition-colors rounded-full p-2 h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FCFCFA" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                    </div>
            </a>

            <div className="group border border-line hover:border-white/40 transition-colors rounded-full p-2 h-10 w-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FCFCFA" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                  </div>

            <a href="https://in.linkedin.com/company/nunnari-labs">
            <div className="group border border-line hover:border-white/40 transition-colors rounded-full p-2 h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FCFCFA" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                    </div>
            </a>
          </div>
        </div>

        <div
          className="rounded-2xl border border-line bg-transparent p-7 w-full md:p-14"
        >
          <form method="post" id="Formdata" onSubmit={handleSubmit}>
            <div
              id="dialogContainer"
              className="rounded-xl border border-line bg-transparent p-8 text-center hidden mb-4"
            >
              <Icon name="check-circle" className="text-3xl text-ink" />
              <p className="text-muted leading-relaxed">Thank you! Form submitted successfully.</p>
            </div>
            <div className="grid gap-x-6 gap-y-6 grid-cols-2">
              <div className="form-group col-span-full md:col-span-1">
                <input
                required
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={INPUT_CLASSES}
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-span-full md:col-span-1">
                <input
                required
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={INPUT_CLASSES}
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>

              <div className="form-group col-span-full md:col-span-1">
                <input
                required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={INPUT_CLASSES}
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-span-full md:col-span-1">
                <input
                required
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className={INPUT_CLASSES}
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group col-span-full">
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  className={INPUT_CLASSES}
                  id="message"
                  cols="30"
                  rows="8"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-group col-span-full ">
                <button
                    className="bg-white text-black w-full rounded-full px-6 py-3 text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center disabled:opacity-60"
                    id="submit-mail"
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Submit Form'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}
