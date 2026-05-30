const testimonials = [
  {
    name: "Monica",
    role: "Business Professional",
    quote:
      "Lessons are practical, professional and helped me communicate with greater confidence during executive meetings and presentations.",
  },
  {
    name: "Carlos",
    role: "International Student",
    quote:
      "My fluency improved rapidly because every lesson focused on real-world communication rather than memorisation.",
  },
  {
    name: "Mina",
    role: "Private Student",
    quote:
      "Professional, supportive and motivating. I felt comfortable speaking English from the very first session.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/feh-hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#010816]/92" />

      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
        style={{
          width: "900px",
          height: "500px",
          background: "rgba(250,204,21,0.04)",
          filter: "blur(150px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1350px] px-6 py-28 lg:px-10">

        <div className="text-center">
          <div
            className="inline-flex rounded-full border border-yellow-400/40 bg-[#06152d]/60 px-8 py-4 font-bold uppercase text-yellow-300 backdrop-blur-xl"
            style={{
              letterSpacing: "0.20em",
              fontSize: "13px",
            }}
          >
            Success Stories
          </div>

          <h2
            className="mt-8 text-5xl font-bold md:text-7xl"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Trusted By
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Ambitious Learners
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
            Professionals, executives and international learners choose
            Fluent English Hub to build confidence, fluency and executive-level
            communication skills.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-[#041126]/80
                p-10
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              <div
                className="absolute left-0 top-0 h-px w-full"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(250,204,21,0.6), transparent)',
                }}
              />

              <div className="text-7xl leading-none text-yellow-400/30">
                “
              </div>

              <p className="mt-4 text-lg leading-9 text-slate-200">
                {item.quote}
              </p>

              <div className="mt-8 h-px w-20 bg-gradient-to-r from-yellow-500 to-transparent" />

              <p
                className="mt-8 text-3xl font-bold text-yellow-200"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {item.name}
              </p>

              <p className="mt-2 uppercase tracking-[0.18em] text-slate-400">
                {item.role}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="uppercase tracking-[0.35em] text-slate-300">
            Confidence • Fluency • Leadership • Success
          </p>
        </div>
      </div>
    </section>
  );
}
