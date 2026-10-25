export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20 pt-28 relative"
    >
      {/* Eyebrow */}
      <p className="text-[0.75rem] font-normal tracking-[0.08em] uppercase text-[#888] mb-6">
        Frontend Developer
      </p>

      {/* Large name */}
      <h1 className="font-light leading-[0.9] text-[clamp(3rem,14vw,11rem)] tracking-[-0.04em] md:tracking-[-0.05em] text-[#1a1a1a] mb-10">
        Mudassir
        <br />
        Uddin
      </h1>

      {/* Divider */}
      <hr className="border-t border-[#d8d4cc] mb-8" />

      {/* Tagline row */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-12 sm:items-center">
        <span className="text-[0.8rem] tracking-[0.04em] text-[#888]">React · JavaScript · Tailwind CSS</span>
        <span className="text-[0.8rem] tracking-[0.04em] text-[#888]">Based in Lucknow, India</span>
        <span className="text-[0.8rem] tracking-[0.04em] text-[#888]">2+ Years Experience</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 flex flex-col items-center gap-2">
        <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[#888] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-px h-12 bg-[#d8d4cc]" />
      </div>
    </section>
  )
}
