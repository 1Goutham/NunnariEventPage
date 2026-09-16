import BreadcrumbLd from "./breadcrumbLd";

export default function Header({ eyebrow, title, tagline }) {
  return (
    <header className="border-b border-line bg-vvbg bg-cover bg-bottom" id="div1">
      <BreadcrumbLd />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20">
        {eyebrow ? <span className="pill">{eyebrow}</span> : null}
        <h1 className="headline mt-6 text-[40px] md:text-[56px] leading-[1.15] font-medium max-w-3xl">
          {title}
        </h1>
        {tagline ? (
          <p className="mt-6 text-[15px] leading-[27px] text-muted max-w-2xl">
            {tagline}
          </p>
        ) : null}
      </div>
    </header>
  );
}
