export default function Maps() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">
      <div className="rounded-2xl border border-line overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15662.801057576145!2d77.0345905!3d11.0610842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7db6111597f%3A0xe353454ea10b5d25!2sNunnari%20Labs!5e0!3m2!1sen!2sin!4v1733123897176!5m2!1sen!2sin"
          title="Nunnari Labs office location on Google Maps"
          height="480"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full grayscale hover:grayscale-0 transition-all duration-500"
          id="div3"
        ></iframe>
      </div>
    </div>
  );
}
