const SKILLS = [
  { category: 'Languages', items: ['JavaScript', 'C++', 'PHP'] },
  { category: 'Frameworks', items: ['ReactJS', 'Redux'] },
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'] },
  { category: 'Backend / DB', items: ['REST APIs', 'MySQL'] },
  { category: 'Cloud & Tools', items: ['AWS EC2', 'Visual Studio Code'] },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.75rem] font-normal tracking-[0.08em] uppercase text-[#888] mb-8">
      {children}
    </p>
  )
}

export function About() {
  return (
    <>
      {/* About */}
      <section id="about" className="px-6 md:px-12 py-20 md:py-28">
        <hr className="border-t border-[#d8d4cc] mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <SectionLabel>About</SectionLabel>
          </div>
          <div className="md:col-span-9">
            <p className="text-[1.15rem] md:text-[1.35rem] font-light leading-[1.75] max-w-[680px] text-[#1a1a1a] mb-6">
              Frontend developer with 2+ years of hands-on experience crafting
              responsive, user-centred web applications. Currently at{' '}
              <em>Technosetup Pvt. Ltd.</em>, building real estate and e-commerce
              platforms with React and Tailwind CSS.
            </p>
            <p className="text-[#888] leading-[1.9] max-w-[580px]">
              I thrive in collaborative, fast-paced environments — working closely with
              backend engineers, designers, and cross-functional teams to turn business
              requirements into clean, maintainable UI code. My focus is always on
              performance, reusability, and a polished end-user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-12 pb-20 md:pb-28">
        <hr className="border-t border-[#d8d4cc] mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <SectionLabel>Skills</SectionLabel>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {SKILLS.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-[0.68rem] tracking-[0.1em] uppercase text-[#888] mb-3">
                    {category}
                  </p>
                  {items.map((item) => (
                    <p key={item} className="text-[0.95rem] text-[#1a1a1a] leading-[2]">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
