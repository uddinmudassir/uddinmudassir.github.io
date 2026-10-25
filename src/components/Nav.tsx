import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-400',
        scrolled
          ? 'bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-[#d8d4cc]'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="text-[0.8rem] font-normal tracking-[0.12em] uppercase text-[#1a1a1a] no-underline hover:text-[#888] transition-colors duration-200"
      >
        Mudassir Uddin
      </a>

      {/* Links */}
      <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
        {NAV_ITEMS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-[0.72rem] tracking-[0.1em] uppercase text-[#888] no-underline hover:text-[#1a1a1a] transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
