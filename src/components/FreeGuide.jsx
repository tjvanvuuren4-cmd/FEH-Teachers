export default function FreeGuide({ formAction, pdfUrl }) {
  const points = [
    "Identify your English level",
    "Discover your strengths",
    "Receive learning recommendations",
    "Build a personalised study plan",
  ];

  return (
    <section
      id="assessment"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,154,43,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-8 py-24">
        <div
  className="grid gap-12 rounded-[2rem] relative overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, rgba(6,20,35,0.95), rgba(3,15,28,0.92))",
    border: "2px solid rgba(217,154,43,0.15)",
    boxShadow:
      "0 30px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.03)",
  }}
>
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p
              className="uppercase"
              style={{
                color: "#f4c24f",
                letterSpacing: "0.25em",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              Free Assessment
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Take Your{" "}
              <span
                className="block"
                style={{
                  color: "#f4c24f",
                  textShadow: "0 0 12px rgba(244,194,79,0.22)",
                }}
              >
                English Placement Test
              </span>
            </h2>

            <div
              className="mt-6"
              style={{
                width: "120px",
                height: "2px",
                background:
                  "linear-gradient(90deg,#f4c24f,#d99a2b,transparent)",
              }}
            />

            <p className="mt-8 max-w-[720px] text-[18px] leading-8 text-slate-300">
              Complete the FEH English Placement Test and receive a clear view
              of your current level, strengths, development areas and
              recommended learning path.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {points.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#d99a2b]/15 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-slate-100"
                >
                  <span style={{ color: "#f4c24f" }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="relative rounded-[2rem] border border-[#d99a2b]/15 bg-[#020b18]/85 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(244,194,79,0.10), transparent 55%)",
              }}
            />

            <div className="relative z-10">
              <h3
                className="text-3xl font-bold"
                style={{
                  color: "#f4c24f",
                  fontFamily: "Cinzel, serif",
                }}
              >
                Get Your Free Assessment
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Enter your details below to download the placement test.
              </p>

              <form action={formAction} method="POST" className="mt-7 space-y-5">
                <input
                  type="hidden"
                  name="_subject"
                  value="New Fluent English Hub Lead"
                />

                <input type="hidden" name="_captcha" value="false" />

                <input type="hidden" name="_next" value={pdfUrl} />

                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-[#d99a2b]/15 bg-[#031126]/90 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-[#f4c24f]/50 focus:ring-2 focus:ring-[#f4c24f]/20"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email Address"
                  className="w-full rounded-xl border border-[#d99a2b]/15 bg-[#031126]/90 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-[#f4c24f]/50 focus:ring-2 focus:ring-[#f4c24f]/20"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                  style={{
                    color: "#020b18",
                    background:
                      "linear-gradient(135deg,#e0b44a 0%, #d99a2b 50%, #eac76b 100%)",
                    boxShadow:
                      "0 6px 14px rgba(0,0,0,0.24), 0 0 10px rgba(244,194,79,0.10)",
                  }}
                >
                  Download Placement Test
                </button>
              </form>

              <p className="mt-5 text-center text-xs text-slate-500">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}