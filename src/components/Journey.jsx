const steps = [
  {
    number: "01",
    title: "Assess",
    text: "We evaluate your current communication skills, confidence level, strengths and development areas through a professional English assessment.",
  },
  {
    number: "02",
    title: "Measure",
    text: "We identify your goals, communication challenges and the practical business outcomes you want to improve.",
  },
  {
    number: "03",
    title: "Coach",
    text: "You receive targeted coaching focused on clarity, confidence, meetings, emails, presentations and professional communication.",
  },
  {
    number: "04",
    title: "Improve",
    text: "You apply new communication skills in real situations and build measurable confidence over time.",
  },
  {
    number: "05",
    title: "Report",
    text: "We provide feedback and progress insights so you can clearly see your development and next steps.",
  },
];

export default function Journey() {
  return (
    <section
      id="process"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
      }}
    >
      {/* soft gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,154,43,0.10),transparent_35%)]" />

      <div className="mx-auto max-w-[1450px] px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_1fr] lg:items-center">
          {/* LEFT INTRO */}
          <div>
            <p
              className="uppercase"
              style={{
                color: "#f4c24f",
                letterSpacing: "0.25em",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              Our Proven
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              5-Step{" "}
              <span
                style={{
                  color: "#f4c24f",
                  textShadow:
                    "0 0 12px rgba(244,194,79,0.22)",
                }}
              >
                Process
              </span>
            </h2>

            <div
              className="mt-6"
              style={{
                width: "100px",
                height: "2px",
                background:
                  "linear-gradient(90deg,#f4c24f,#d99a2b,transparent)",
              }}
            />

            <p className="mt-6 max-w-[360px] text-[18px] leading-8 text-slate-300">
              We measure, coach and report to ensure real communication
              improvement for professionals and businesses.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-[#d99a2b]/15 bg-[#061423]/80 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#f4c24f]/40 hover:shadow-[0_0_28px_rgba(244,194,79,0.10)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(244,194,79,0.10), transparent 60%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#d99a2b] to-[#f2bd55] text-lg font-extrabold text-[#020b18]">
                    {step.number}
                  </div>

                  <h3
                    className="mt-6 text-lg font-extrabold uppercase"
                    style={{ color: "#f4c24f" }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {step.text}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute right-[-18px] top-1/2 hidden h-px w-9 bg-[#d99a2b]/40 md:block" />
                )}
              </div>
            ))}
          </div>
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
            Assess • Measure • Coach • Improve • Report
          </p>
        </div>
      </div>
    </section>
  );
}