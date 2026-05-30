export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/feh-hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#010816]/94" />

      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
        style={{
          width: "900px",
          height: "380px",
          background: "rgba(250,204,21,0.05)",
          filter: "blur(150px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1350px] px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[#041126]/75 p-10 backdrop-blur-xl lg:p-12">
          <div
            className="absolute left-0 top-0 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(250,204,21,0.6), transparent)",
            }}
          />

          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <img
                  src="/images/feh-crest.png"
                  alt="Fluent English Hub"
                  style={{
                    width: "82px",
                    height: "82px",
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 18px rgba(250,204,21,0.25))",
                  }}
                />

                <div>
                  <h3
                    className="font-bold text-yellow-400"
                    style={{
                      fontFamily: "Cinzel, serif",
                      fontSize: "34px",
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                    }}
                  >
                    Fluent English Hub
                  </h3>

                  <p
                    className="mt-2 uppercase text-yellow-200"
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.22em",
                      fontWeight: 700,
                    }}
                  >
                    Speak With Confidence
                  </p>
                </div>
              </div>

              <p
                className="mt-8 max-w-2xl text-slate-300"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.9",
                }}
              >
                Premium English coaching for professionals, executives,
                students and ambitious learners who want confidence, fluency
                and international communication success.
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
                Quick Links
              </h4>

              <div className="space-y-4 text-slate-300">
                <a href="#guide" className="block transition hover:text-yellow-300">
                  Home
                </a>

                <a href="#journey" className="block transition hover:text-yellow-300">
                  Journey
                </a>

                <a href="#programs" className="block transition hover:text-yellow-300">
                  Programs
                </a>

                <a href="#assessment" className="block transition hover:text-yellow-300">
                  Free Guide
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
                Contact
              </h4>

              <div className="space-y-4 text-slate-300">
                <p>info@fluentenglishhub.com</p>
                <p>+27 71 792 6489</p>
                <p>Online Worldwide</p>
              </div>
            </div>
          </div>

          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

          <div className="mt-8 flex flex-col gap-4 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Fluent English Hub. All Rights Reserved.</p>

            <p className="font-semibold text-yellow-300">
              Speak English. Lead The World.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}