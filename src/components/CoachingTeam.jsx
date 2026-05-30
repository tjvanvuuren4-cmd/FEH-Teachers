export default function CoachingTeam() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/feh-hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#020b18]/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12">

        {/* SECTION HEADER */}
        <div className="text-center">
          <div className="inline-flex rounded-full border border-yellow-400/30 bg-[#06152d]/60 px-8 py-4 font-bold uppercase text-yellow-300 backdrop-blur-xl">
            Executive Coaching Team
          </div>

          <h2
            className="mt-8 text-5xl font-bold md:text-7xl"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Learn From
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Real Professionals
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Dedicated coaches focused on confidence, fluency, executive
            communication and professional English development.
          </p>
        </div>

        {/* TJ FEATURED */}
        <div className="mx-auto mt-20 max-w-5xl">

          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Founder & Lead Coach
          </p>

          <div className="overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-[#041126]/80 backdrop-blur-xl">
            <div className="grid items-center lg:grid-cols-2">

              {/* IMAGE */}
              <div>
                <img
                  src="/images/tj-coach.webp"
                  alt="TJ Van Vuuren"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-10 lg:p-14">

                <h3
                  className="text-4xl font-bold text-yellow-300"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  TJ Van Vuuren
                </h3>

                <p className="mt-2 uppercase tracking-[0.18em] text-slate-300">
                  Founder & Executive English Coach
                </p>

                <div className="mt-6 h-px w-24 bg-gradient-to-r from-yellow-500 to-transparent" />

                <p className="mt-8 text-lg leading-8 text-slate-300">
                  Combining experience in education, business and engineering, TJ helps professionals develop the confidence, fluency and executive communication skills required to succeed in meetings, presentations, interviews and international business environments.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">

                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
                    TEFL Certified
                  </span>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
                    Business Professional
                  </span>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
                    Engineering Background
                  </span>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
                    Executive Coaching
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM */}
        <div className="mt-20">

          <h3
            className="text-center text-4xl font-bold"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Meet The Coaching Team
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* MICHAELA */}
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#041126]/80 backdrop-blur-xl">
              <img
                src="/images/michaela.webp"
                alt="Michaela"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h4 className="text-2xl font-bold text-yellow-300">
                  Michaela
                </h4>

                <p className="mt-2 uppercase tracking-[0.15em] text-slate-400">
                  Executive English Coach
                </p>
              </div>
            </div>

            {/* SIMRAN */}
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#041126]/80 backdrop-blur-xl">
              <img
                src="/images/simran.webp"
                alt="Simran"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h4 className="text-2xl font-bold text-yellow-300">
                  Simran
                </h4>

                <p className="mt-2 uppercase tracking-[0.15em] text-slate-400">
                  Executive English Coach
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}