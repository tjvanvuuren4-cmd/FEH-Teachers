export default function FreeGuide({ formAction, pdfUrl }) {
  return (
    <section
      id="assessment"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/feh-hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#020b18]/88" />

      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
        style={{
          width: "850px",
          height: "420px",
          background: "rgba(250,204,21,0.05)",
          filter: "blur(140px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1350px] px-6 py-28 lg:px-10">
        <div className="grid gap-12 rounded-[2.5rem] border border-white/10 bg-[#041126]/75 p-10 backdrop-blur-xl lg:grid-cols-2 lg:p-14">
          <div
            className="absolute left-0 top-0 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(250,204,21,0.6), transparent)",
            }}
          />

          <div className="flex flex-col justify-center">
            <div>
              <div
                className="inline-flex rounded-full border border-yellow-400/20 bg-[#06152d]/60 px-8 py-4 font-bold uppercase text-yellow-300 backdrop-blur-xl"
                style={{
                  letterSpacing: "0.20em",
                  fontSize: "13px",
                }}
              >
                Free Resource
              </div>
            </div>

            <h2
              className="mt-8 text-5xl font-bold md:text-7xl"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Download Your
              <span className="block bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                Confidence Guide
              </span>
            </h2>

            <div className="mt-8 h-px w-56 bg-gradient-to-r from-yellow-500 via-yellow-300 to-transparent" />

            <p
              className="mt-8 max-w-2xl text-slate-200"
              style={{
                fontSize: "22px",
                lineHeight: "1.9",
              }}
            >
              Discover practical strategies to improve your fluency,
              confidence, pronunciation and professional communication in
              business and everyday situations.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Speak with more confidence",
                "Avoid common fluency mistakes",
                "Improve professional communication",
                "Build stronger speaking habits",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-[#06152d]/60 px-5 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-[#020b18]/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div
              className="absolute left-0 top-0 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(250,204,21,0.6), transparent)",
              }}
            />

            <h3
              className="mb-6 text-3xl font-bold text-yellow-200"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Get Your Free Guide
            </h3>

            <form action={formAction} method="POST" className="space-y-5">
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
                className="w-full rounded-xl border border-white/10 bg-[#031126]/90 px-5 py-4 text-white placeholder:text-slate-400 outline-none transition focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/30"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email Address"
                className="w-full rounded-xl border border-white/10 bg-[#031126]/90 px-5 py-4 text-white placeholder:text-slate-400 outline-none transition focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/30"
              />

              <button
                type="submit"
                className="w-full rounded-2xl border border-yellow-400/20 bg-[#06152d]/90 px-6 py-5 font-bold uppercase tracking-[0.16em] text-yellow-300 transition-all duration-300 hover:border-yellow-300 hover:bg-[#0b2148] hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]"
              >
                Download Free Guide
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-slate-400">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}