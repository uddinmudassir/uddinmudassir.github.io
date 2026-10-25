const EDUCATION = [
  {
    degree: 'MCA',
    institution: 'IGNOU, Lucknow',
    year: '2017',
  },
  {
    degree: 'BCA',
    institution: 'IGNOU, Lucknow',
    year: '2015',
  },
   {
    degree: 'Intermediate (12th)',
    institution: 'Board of High School & Intermediate Education, UP',
    year: '2011',
  },
  {
    degree: 'High School (10th)',
    institution: 'Board of High School & Intermediate Education, UP',
    year: '2009',
  },
]

const TRAINING = {
  title: 'Internship — e.Soft Technologies Limited',
  period: 'Jan 2017 — Jul 2017',
  description:
    'Worked as an Intern Trainee Software Developer. Built projects using PHP 5.0 and MySQL Server 5.5, and gained exposure to Software Quality Testing (Manual).',
}

export function Education() {
  return (
    <section id="education" className="px-6 md:px-12 py-20 md:py-28">
      <hr className="border-t border-[#d8d4cc] mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3">
          <p className="text-[0.75rem] font-normal tracking-[0.08em] uppercase text-[#888]">
            Education
          </p>
        </div>
        <div className="md:col-span-9">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline py-5 border-b border-[#d8d4cc]"
            >
              <div>
                <p className="text-[0.95rem] text-[#1a1a1a]">{edu.degree}</p>
                <p className="text-[0.8rem] text-[#888] mt-1">{edu.institution}</p>
              </div>
              <span className="text-[0.78rem] text-[#888] tracking-[0.04em] mt-1 sm:mt-0 sm:ml-8 shrink-0">
                {edu.year}
              </span>
            </div>
          ))}

          {/* Training */}
          <div className="mt-16">
            <p className="text-[0.75rem] font-normal tracking-[0.08em] uppercase text-[#888] mb-8">
              Training
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="max-w-[520px]">
                <p className="text-[0.95rem] text-[#1a1a1a] mb-2">{TRAINING.title}</p>
                <p className="text-[0.88rem] text-[#888] leading-[1.8]">{TRAINING.description}</p>
              </div>
              <span className="text-[0.78rem] text-[#888] tracking-[0.04em] shrink-0">
                {TRAINING.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
