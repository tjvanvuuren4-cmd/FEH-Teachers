const packages = [
  {
    name: "Personal English Coaching",
    label: "For Individuals",
    ideal: "Students • Job Seekers • Professionals",
    desc: [
      "Personal English level assessment",
      "Speaking confidence and fluency practice",
      "Pronunciation and vocabulary development",
      "Everyday and professional conversation skills",
      "Personalised learning roadmap",
    ],
  },
  {
    name: "Career Communication",
    label: "Most Popular",
    ideal: "For Career Growth",
    featured: true,
    desc: [
      "Business English coaching",
      "Interview preparation",
      "Email and workplace communication",
      "Meeting and presentation confidence",
      "Monthly progress feedback",
    ],
  },
  {
    name: "Business Team Coaching",
    label: "For Businesses",
    ideal: "Teams • Client Service • Management",
    desc: [
      "Corporate communication assessment",
      "Team communication coaching",
      "Customer service communication skills",
      "Email, meeting and presentation training",
      "Progress feedback for business outcomes",
    ],
  },
];

export default function Programs({ whatsappUrl }) {
  return (
    <section
      id="programs"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,154,43,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-8 py-24">
        <div className="mx-auto mb-16 max-w-[900px] text-center">
          <p
            className="uppercase"
            style={{
              color: "#f4c24f",
              letterSpacing: "0.25em",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            Coaching Programmes
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
            Choose Your{" "}
            <span
              className="block"
              style={{
                color: "#f4c24f",
                textShadow: "0 0 12px rgba(244,194,79,0.22)",
              }}
            >
              Communication Path
            </span>
          </h2>

          <div
            className="mx-auto mt-6"
            style={{
              width: "120px",
              height: "2px",
              background:
                "linear-gradient(90deg,transparent,#f4c24f,#d99a2b,transparent)",
            }}
          />

          <p className="mx-auto mt-6 max-w-[780px] text-[18px] leading-8 text-slate-300">
            Flexible English communication coaching for individuals,
            professionals and business teams who want clearer communication,
            stronger confidence and measurable improvement.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`group relative overflow-hidden rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.featured
                  ? "border-[#f4c24f]/35 bg-[#061423]/90 shadow-[0_0_35px_rgba(244,194,79,0.10)]"
                  : "border-[#d99a2b]/15 bg-[#061423]/75 hover:border-[#f4c24f]/35 hover:shadow-[0_0_30px_rgba(244,194,79,0.08)]"
              }`}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at top, rgba(244,194,79,0.10), transparent 60%)",
                }}
              />

              {pkg.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-[#d99a2b] to-[#f2bd55] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#020b18]">
                  Popular
                </div>
              )}

              <div className="relative z-10">
                <p
                  className="text-sm font-bold uppercase"
                  style={{
                    color: "#f4c24f",
                    letterSpacing: "0.18em",
                  }}
                >
                  {pkg.label}
                </p>

                <h3
                  className="mt-5 text-3xl font-bold"
                  style={{
                    color: "#f4c24f",
                    fontFamily: "Cinzel, serif",
                  }}
                >
                  {pkg.name}
                </h3>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {pkg.ideal}
                </p>

                <div className="my-8 h-px w-full bg-gradient-to-r from-[#f4c24f]/60 to-transparent" />

                <p
                  className="uppercase"
                  style={{
                    color: "#f4c24f",
                    letterSpacing: "0.15em",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  Personalised Coaching Plan
                </p>

                <p className="mt-4 leading-8 text-slate-300">
                  Every programme is tailored to your level, goals, schedule
                  and real communication needs.
                </p>

                <ul className="mt-8 space-y-4">
                  {pkg.desc.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-slate-300">
                      <span style={{ color: "#f4c24f" }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-block w-full rounded-xl px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                  style={{
                    color: pkg.featured ? "#020b18" : "#ffffff",
                    background: pkg.featured
                      ? "linear-gradient(135deg,#e0b44a 0%, #d99a2b 50%, #eac76b 100%)"
                      : "linear-gradient(180deg, rgba(244,194,79,0.10), rgba(255,255,255,0.02))",
                    border: pkg.featured
                      ? "none"
                      : "1px solid rgba(244,194,79,0.35)",
                    boxShadow: pkg.featured
                      ? "0 6px 14px rgba(0,0,0,0.24), 0 0 10px rgba(244,194,79,0.10)"
                      : "0 0 12px rgba(244,194,79,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  Book Consultation
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p
            className="uppercase"
            style={{
              color: "#f4c24f",
              letterSpacing: "0.28em",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            Students • Professionals • Business Teams
          </p>
        </div>
      </div>
    </section>
  );
}