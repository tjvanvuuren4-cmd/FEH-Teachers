export default function CoachingTeam() {
  const badges = [
    "TEFL Certified",
    "Business Professional",
    "Financial Services Background",
    "Executive Communication",
  ];

  const team = [
    {
      name: "Michaela",
      role: "Professional English Coach",
      image: "/images/michaela.webp",
    },
    {
      name: "Simran",
      role: "Professional English Coach",
      image: "/images/simran.webp",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,154,43,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-8 py-24">
        {/* HEADER */}
        <div className="mx-auto max-w-[900px] text-center">
          <p
            className="uppercase"
            style={{
              color: "#f4c24f",
              letterSpacing: "0.25em",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            Executive Coaching Team
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
            Learn From{" "}
            <span
              className="block"
              style={{
                color: "#f4c24f",
                textShadow: "0 0 12px rgba(244,194,79,0.22)",
              }}
            >
              Real Professionals
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

          <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-8 text-slate-300">
            FEH is built around practical business communication, confidence
            development and real-world professional outcomes.
          </p>
        </div>
        {/* TJ FEATURED */}
<div className="mx-auto mt-16 max-w-[900px] text-center">

  <p
    className="uppercase"
    style={{
      color: "#f4c24f",
      letterSpacing: "0.25em",
      fontSize: "12px",
      fontWeight: 700,
    }}
  >
    Founder & Lead Coach
  </p>

  <img
    src="/images/tj-coach.webp"
    alt="TJ Van Vuuren"
    className="
      mx-auto
      mt-8
      h-64
      w-64
      rounded-full
      object-cover
      border
      border-[#d99a2b]/30
      shadow-[0_0_30px_rgba(244,194,79,0.12)]
    "
  />

  <h3
    className="mt-8 text-5xl font-bold"
    style={{
      color: "#f4c24f",
      fontFamily: "Cinzel, serif",
    }}
  >
    TJ Van Vuuren
  </h3>

  <p className="mt-3 uppercase tracking-[0.18em] text-slate-300">
    Founder & Communication Coach
  </p>

  <div
    className="mx-auto mt-6"
    style={{
      width: "100px",
      height: "2px",
      background:
        "linear-gradient(90deg,transparent,#f4c24f,#d99a2b,transparent)",
    }}
  />

  <p className="mt-8 text-[18px] leading-8 text-slate-300">
    TJ combines real business, client relationship and communication
    experience to help professionals develop the clarity, confidence and
    communication skills needed for meetings, presentations, interviews and
    international business environments.
  </p>

  <div className="mt-10 flex flex-wrap justify-center gap-3">
    {badges.map((badge) => (
      <span
        key={badge}
        className="rounded-full border border-[#d99a2b]/20 bg-white/[0.03] px-4 py-2 text-sm text-slate-200"
      >
        {badge}
      </span>
    ))}
  </div>

</div>
        {/* TEAM */}
        <div className="mt-24">
          <h3
            className="text-center text-4xl font-bold"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Meet The{" "}
            <span style={{ color: "#f4c24f" }}>Coaching Team</span>
          </h3>
          <div className="mx-auto mt-16 grid max-w-[1100px] items-center gap-12 md:grid-cols-3">

  {/* MICHAELA */}
  <div className="text-center">
    <img
      src="/images/michaela.webp"
      alt="Michaela"
      className="mx-auto h-56 w-56 rounded-full border border-[#d99a2b]/30 object-cover"
    />

    <h4
      className="mt-8 text-3xl font-bold"
      style={{
        color: "#f4c24f",
        fontFamily: "Cinzel, serif",
      }}
    >
      Michaela
    </h4>

    <p className="mt-3 uppercase tracking-[0.15em] text-slate-400">
      Professional English Coach
    </p>
  </div>

  {/* FEH LOGO */}
  <div className="text-center">
    <img
      src="/images/feh-crest.png"
      alt="FEH"
      className="mx-auto h-60 w-60"
      style={{
        filter: "drop-shadow(0 0 20px rgba(244,194,79,0.20))",
      }}
    />

    <p
      className="mt-2 uppercase"
      style={{
        color: "#f4c24f",
        letterSpacing: "0.25em",
        fontSize: "14px",
        fontWeight: 700,
      }}
    >
      Communication Excellence
    </p>
  </div>

  {/* SIMRAN */}
  <div className="text-center">
    <img
      src="/images/simran.webp"
      alt="Simran"
      className="mx-auto h-56 w-56 rounded-full border border-[#d99a2b]/30 object-cover"
    />

    <h4
      className="mt-8 text-3xl font-bold"
      style={{
        color: "#f4c24f",
        fontFamily: "Cinzel, serif",
      }}
    >
      Simran
    </h4>

    <p className="mt-3 uppercase tracking-[0.15em] text-slate-400">
      Professional English Coach
    </p>
  </div>

</div>
</div>
</div>
    </section>
  );
}