const packages = [
  {
    name: "Executive Essentials",
    label: "Foundation Program",
    ideal: "For Emerging Professionals",
    desc: [
      "Personalised English assessment",
      "Confidence-building coaching",
      "Professional communication skills",
      "Fluency and pronunciation development",
      "Tailored learning roadmap",
    ],
  },

  {
    name: "Professional Growth",
    label: "Most Popular",
    ideal: "For Career Advancement",
    featured: true,
    desc: [
      "Business English coaching",
      "Interview preparation",
      "Presentation and meeting confidence",
      "Real-world communication practice",
      "Monthly progress reviews",
    ],
  },

  {
    name: "Executive Mastery",
    label: "Executive Programme",
    ideal: "For Leaders & Global Communicators",
    desc: [
      "Executive communication coaching",
      "Leadership presentation skills",
      "Advanced fluency development",
      "Strategic communication training",
      "Fully personalised coaching plan",
    ],
  },
];

export default function Programs({ whatsappUrl }) {
  return (
    <section
      id="programs"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/feh-hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#020b18]/82" />

      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
        style={{
          width: "800px",
          height: "360px",
          background: "rgba(250,204,21,0.05)",
          filter: "blur(600px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1350px] px-6 py-28 lg:px-10">
        <div className="mb-20 text-center">
          <div className="flex justify-center">
            <div
              className="inline-flex rounded-full border border-yellow-400/40 bg-[#06152d]/60 px-8 py-4 font-bold uppercase text-yellow-300 backdrop-blur-xl"
              style={{
                letterSpacing: "0.20em",
                fontSize: "13px",
              }}
            >
              Executive Programs
            </div>
          </div>

          <h2
            className="mt-8 text-5xl font-bold md:text-7xl"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Choose Your
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Executive Path
            </span>
          </h2>

          <div className="mx-auto mt-8 h-px w-56 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          <p
            className="mx-auto mt-8 max-w-4xl text-slate-200"
            style={{
              fontSize: "22px",
              lineHeight: "1.9",
            }}
          >
            Premium one-on-one English coaching designed for ambitious
            professionals, executives and global communicators who want
            confidence, fluency and career growth.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`group relative overflow-hidden rounded-[2rem] border p-12 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                pkg.featured
                  ? "border-yellow-400/25 bg-[#06152d]/90 shadow-[0_0_60px_rgba(250,204,21,0.12)] hover:border-yellow-400/40 hover:shadow-[0_0_70px_rgba(250,204,21,0.18)]"
                  : "border-white/10 bg-[#041126]/75 hover:border-yellow-400/20 hover:shadow-[0_0_50px_rgba(250,204,21,0.08)]"
              }`}
            >
              <div
                className="absolute left-0 top-0 h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(250,204,21,0.6), transparent)",
                }}
              />

              {pkg.featured && (
                <div className="absolute right-6 top-6 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-yellow-200">
                  Popular
                </div>
              )}

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
                {pkg.label}
              </p>

              <h3
                className="mt-5 text-3xl font-bold text-yellow-200"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {pkg.name}
              </h3>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                {pkg.ideal}
              </p>

              <div className="mt-8">
  <p
    className="uppercase text-yellow-300"
    style={{
      letterSpacing: "0.15em",
      fontSize: "12px",
      fontWeight: 700,
    }}
  >
    Personalised Coaching Programme
  </p>

  <p className="mt-4 leading-8 text-slate-300">
    Every coaching journey is tailored to your goals,
    communication needs, schedule and desired outcomes.
  </p>
</div>

              <div className="my-8 h-px w-full bg-gradient-to-r from-yellow-500/70 to-transparent" />

              <ul className="space-y-4">
                {pkg.desc.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-300">
                    <span className="text-yellow-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-block w-full rounded-2xl border border-yellow-400/30 bg-[#06152d]/90 px-6 py-5 text-center font-bold uppercase tracking-[0.16em] text-yellow-300 transition-all duration-300 hover:border-yellow-300 hover:bg-[#0b2148] hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]"
              >
                Book Strategy Session
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p
            className="uppercase text-yellow-300/80"
            style={{
              letterSpacing: "0.30em",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            Foundation • Confidence • Executive Fluency
          </p>
        </div>
      </div>
    </section>
  );
}