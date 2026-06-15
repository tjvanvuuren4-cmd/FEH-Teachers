export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
      }}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,154,43,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-8 py-20">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-[#d99a2b]/15
            bg-[#061423]/80
            p-10
            backdrop-blur-xl
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            lg:p-12
          "
        >
          {/* Luxury Top Line */}
          <div
            className="absolute top-0 left-0 h-[2px] w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #f4c24f, transparent)",
            }}
          />

          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(circle at top center, rgba(244,194,79,0.10), transparent 60%)",
            }}
          />

          <div className="relative z-10 grid gap-12 md:grid-cols-4">
            {/* BRAND */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <img
                  src="/images/feh-crest.png"
                  alt="Fluent English Hub"
                  style={{
                    width: "85px",
                    height: "85px",
                    objectFit: "contain",
                    filter:
                      "drop-shadow(0 0 18px rgba(244,194,79,0.25))",
                  }}
                />

                <div>
                  <h3
                    style={{
                      fontFamily: "Cinzel, serif",
                      fontSize: "34px",
                      lineHeight: 1,
                      color: "#f4c24f",
                    }}
                  >
                    Fluent English Hub
                  </h3>

                  <p
                    className="mt-2 uppercase"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.22em",
                      fontWeight: 700,
                      color: "#f4c24f",
                    }}
                  >
                    Communication Excellence
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-300">
                Helping professionals, business teams and ambitious
                learners improve communication, strengthen relationships
                and achieve measurable results through personalised
                English coaching.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4
                className="mb-6 uppercase"
                style={{
                  color: "#f4c24f",
                  letterSpacing: "0.22em",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Quick Links
              </h4>

              <div className="space-y-4 text-slate-300">
                <a
                  href="#home"
                  className="block transition hover:text-[#f4c24f]"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="block transition hover:text-[#f4c24f]"
                >
                  About
                </a>

                <a
                  href="#services"
                  className="block transition hover:text-[#f4c24f]"
                >
                  Services
                </a>

                <a
                  href="#resources"
                  className="block transition hover:text-[#f4c24f]"
                >
                  Resources
                </a>

                <a
                  href="#contact"
                  className="block transition hover:text-[#f4c24f]"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4
                className="mb-6 uppercase"
                style={{
                  color: "#f4c24f",
                  letterSpacing: "0.22em",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Contact
              </h4>

              <div className="space-y-4 text-slate-300">
                <p>Business & Executive English Coaching</p>
                <p>Online Worldwide</p>
                <p>info@fluentenglishhub.com</p>
                <p>+27 71 792 6489</p>
              </div>
            </div>
          </div>

          <div
            className="mt-12"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(244,194,79,0.4), transparent)",
            }}
          />

          <div className="mt-8 flex flex-col gap-4 text-center text-sm md:flex-row md:items-center md:justify-between">
            <p className="text-slate-400">
              © 2026 Fluent English Hub. All Rights Reserved.
            </p>

            <p
              style={{
                color: "#f4c24f",
                fontWeight: 600,
              }}
            >
              Communicate With Confidence. Make Your Mark.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}