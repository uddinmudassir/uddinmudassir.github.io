const EXPERIENCES = [
  {
    company: 'Technosetup Pvt. Ltd.',
    role: 'Application Developer',
    period: 'Aug 2025 — Present',
    domain: 'Real Estate',
    tech: 'React · JavaScript · HTML5 · CSS3 · REST APIs · Tailwind CSS · Redux',
    bullets: [
      'Developed, enhanced, and maintained reusable React components and UI modules to support internal applications.',
      'Integrated REST APIs to fetch, process, and display data from backend microservices.',
      'Collaborated with backend developers to understand API contracts and ensure seamless frontend–backend communication.',
      'Participated in requirement analysis, design discussions, and development of new application features.',
      'Improved application performance, handled UI errors, and resolved functional issues to enhance stability.',
      'Conducted code reviews, dependency upgrades, and bug fixes following established coding standards.',
      'Mentored and onboarded new team members, explaining application structure and troubleshooting procedures.',
    ],
  },
  {
    company: 'Technosetup Pvt. Ltd.',
    role: 'Application Developer',
    period: 'Apr 2024 — Jul 2025',
    domain: 'E-commerce',
    tech: 'React · JavaScript · HTML5 · CSS3 · REST APIs · Tailwind CSS · Redux',
    bullets: [
      'Managed centralised state with Redux across complex multi-component workflows.',
      'Built e-commerce features including product listings, search, filtering, cart, and checkout flows.',
      'Optimised component rendering and application performance following React best practices.',
      'Performed code reviews, debugging, and testing to ensure code quality and functionality.',
      'Maintained existing modules and delivered enhancements based on business and user feedback.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-20 md:py-28">
      <hr className="border-t border-[#d8d4cc] mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3">
          <p className="text-[0.75rem] font-normal tracking-[0.08em] uppercase text-[#888]">
            Experience
          </p>
        </div>
        <div className="md:col-span-9">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={idx < EXPERIENCES.length - 1 ? 'mb-16' : ''}>
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <span className="text-[1.1rem] text-[#1a1a1a]">{exp.role}</span>
                <span className="text-[0.78rem] text-[#888] tracking-[0.04em]">{exp.period}</span>
              </div>

              <p className="text-[0.8rem] tracking-[0.06em] uppercase text-[#888] mb-1">
                {exp.company} — {exp.domain}
              </p>

              <p className="text-[0.75rem] text-[#888] italic mb-6">{exp.tech}</p>

              <ul className="list-disc pl-5 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-[0.9rem] text-[#1a1a1a] leading-[1.8]">
                    {b}
                  </li>
                ))}
              </ul>

              {idx < EXPERIENCES.length - 1 && (
                <hr className="border-t border-[#d8d4cc] mt-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
