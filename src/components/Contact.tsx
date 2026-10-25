const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "uddinmudassir10@gmail.com",
    href: "mailto:uddinmudassir10@gmail.com",
    newTab: false,
  },
  {
    label: "Linkedin",
    value: "mudassir-uddin-15177b446",
    href: "https://www.linkedin.com/in/mudassir-uddin-15177b446",
    newTab: true,
  },
  {
    label: "Github",
    value: "uddinmudassir.github.io",
    href: "https://uddinmudassir.github.io/",
    newTab: true,
  },
  { label: "Languages", value: "English · Hindi", href: null, newTab: false },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-20 md:py-28">
      <hr className="border-t border-[#d8d4cc] mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3">
          <p className="text-[0.75rem] font-normal tracking-[0.08em] uppercase text-[#888]">
            Contact
          </p>
        </div>
        <div className="md:col-span-9">
          <p className="text-[1.15rem] md:text-[1.35rem] font-light leading-[1.7] mb-12 max-w-[560px]">
            Open to new opportunities and collaborations. Feel free to reach
            out.
          </p>

          <div>
            {CONTACT_ITEMS.map(({ label, value, href }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:items-baseline py-5 border-b border-[#d8d4cc] gap-1 sm:gap-0"
              >
                <span className="text-[0.68rem] tracking-[0.1em] uppercase text-[#888] sm:w-40 shrink-0">
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-[0.95rem] text-[#1a1a1a] no-underline border-b border-transparent hover:border-[#1a1a1a] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-[0.95rem] text-[#1a1a1a]">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-6 border-t border-[#d8d4cc] flex flex-col sm:flex-row justify-between gap-2">
        <span className="text-[0.75rem] text-[#888]">
          © {new Date().getFullYear()} Mudassir Uddin
        </span>
        <span className="text-[0.75rem] text-[#888]">
          Frontend Developer · Lucknow, India
        </span>
      </div>
    </section>
  );
}
