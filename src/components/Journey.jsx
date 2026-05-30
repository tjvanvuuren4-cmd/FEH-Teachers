const steps = [
  {
    number: "01",
    title: "Executive Assessment",
    text: "Discover your current communication strengths, confidence level and growth opportunities through a professional English evaluation designed for ambitious professionals.",
  },
  {
    number: "02",
    title: "Strategy Consultation",
    text: "Meet one-on-one with your coach to identify career goals, communication challenges and the exact outcomes you want to achieve in business and life.",
  },
  {
    number: "03",
    title: "Transformation Roadmap",
    text: "Receive a personalised coaching strategy focused on fluency, executive presence, leadership communication and long-term professional success.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#010913] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1350px] px-6 pb-28 pt-16 lg:px-10">
        <div className="mb-14 text-center">
          <div className="flex justify-center">
            <div
              className="inline-flex rounded-full border border-yellow-400/40 bg-[#06152d]/60 px-8 py-4 font-bold uppercase text-yellow-300 backdrop-blur-xl"
              style={{ letterSpacing: "0.20em", fontSize: "13px" }}
            >
              Client Journey
            </div>
          </div>

          <h2
            className="mt-8 text-5xl font-bold md:text-7xl"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            The FEH
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Executive Method
            </span>
          </h2>

          <div className="mx-auto mt-8 h-px w-56 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          <p
            className="mx-auto mt-8 max-w-4xl text-slate-200"
            style={{ fontSize: "22px", lineHeight: "1.9" }}
          >
            A proven executive coaching framework designed to help ambitious
            professionals communicate with confidence, influence and authority
            in business, interviews and leadership environments.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#041126]/75 p-12 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/20 hover:shadow-[0_0_50px_rgba(250,204,21,0.08)]"
            >
              <div
                className="absolute top-0 left-0 h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(250,204,21,0.6), transparent)",
                }}
              />

              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/20 bg-[#020b18]/80 text-xl font-bold text-yellow-300">
                  {step.number}
                </div>

                <h3
                  className="mt-8 text-3xl font-bold text-yellow-200"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  {step.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-300">{step.text}</p>

                <div className="mt-8 h-px w-20 bg-gradient-to-r from-yellow-500 to-transparent transition-all duration-500 group-hover:w-36" />
              </div>
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
            CLARITY • STRATEGY • TRANSFORMATION
          </p>
        </div>
      </div>
    </section>
  );
}