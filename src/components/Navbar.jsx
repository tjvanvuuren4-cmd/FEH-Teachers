export default function Navbar({ whatsappUrl }) {
return (
  <header className="absolute left-0 right-0 top-4 z-50">
    <div className="mx-auto flex max-w-[1450px] items-center justify-between rounded-2xl border border-yellow-400/10 bg-[#020b18]/40 px-8 py-3 backdrop-blur-xl">
    {/* LOGO + BRAND */}
    <a href="#guide" className="flex items-center gap-3">

      <img
        src="/images/feh-crest.png"
        alt="Fluent English Hub"
        style={{
          width: "68px",
          height: "68px",
          objectFit: "contain",
          filter: "drop-shadow(0 0 18px rgba(250,204,21,0.25))",
        }}
      />

      <div>
        <div
  className="font-bold text-yellow-400"
  style={{
    fontFamily: "Cinzel, serif",
    fontSize: "38px",
    letterSpacing: "0.04em",
    lineHeight: 1,
    textShadow: "0 0 20px rgba(250,204,21,0.15)",
  }}
>
  Fluent English Hub
</div>

        <div
  className="mt-2 uppercase text-yellow-200"
  style={{
    fontSize: "13px",
    letterSpacing: "0.22em",
    fontWeight: 700,
  }}
>
  Speak With Confidence
</div>
      </div>

    </a>

    {/* NAV LINKS */}
    <nav
      className="hidden items-center lg:flex"
      style={{
        gap: "42px",
        fontSize: "12px",
        fontWeight: "700",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      <a href="#guide" className="border-b border-yellow-400 pb-2 text-yellow-300">
        Explore
      </a>

      <a href="#journey" className="pb-2 text-white/90 transition hover:text-yellow-300">
        Journey
      </a>

      <a href="#programs" className="pb-2 text-white/90 transition hover:text-yellow-300">
        Programs
      </a>

      <a href="#resources" className="pb-2 text-white/90 transition hover:text-yellow-300">
        Success Stories
      </a>

      <a href="#assessment" className="pb-2 text-white/90 transition hover:text-yellow-300">
        Resources
      </a>
    </nav>

    {/* CTA BUTTONS */}
    <div className="hidden items-center gap-3 xl:flex">

      <a
        href="#assessment"
        className="rounded-xl border border-yellow-400/40 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-yellow-200 backdrop-blur-md transition-all duration-300 hover:border-yellow-300 hover:bg-yellow-400/10"
      >
        Free Assessment
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black shadow-[0_0_25px_rgba(250,204,21,0.30)] transition-all duration-300 hover:scale-105"
      >
        Book Trial Lesson
      </a>
    </div>
  </div>
</header>

);
}
