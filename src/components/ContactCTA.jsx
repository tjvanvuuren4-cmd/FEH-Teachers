export default function ContactCTA({ whatsappUrl }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
      }}
    >
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,154,43,0.10),transparent_5%)]" />
      <div className="relative z-10 mx-auto max-w-[1450px] px-8 py-24">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-[#061423]/80
            p-10
            backdrop-blur-x1
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            md:p-14
          "
        >
          {/* Luxury Gold Top Line */}
          <div
            className="absolute top-0 left-0 h-[2px] w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #f4c24f, transparent)",
            }}
          />

          {/* Gold Glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at top center, rgba(244,194,79,0.12), transparent 60%)",
            }}
          />

          <div className="relative z-10 text-center">
            <p
              className="uppercase"
              style={{
                color: "#f4c24f",
                letterSpacing: "0.25em",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              Executive Consultation
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Communicate With Confidence.

              <span
                className="block mt-2"
                style={{
                  color: "#f4c24f",
                  textShadow: "0 0 12px rgba(244,194,79,0.22)",
                }}
              >
                Make Your Mark.
              </span>
            </h2>

            <div
              className="mx-auto mt-8"
              style={{
                width: "140px",
                height: "2px",
                background:
                  "linear-gradient(90deg,transparent,#f4c24f,#d99a2b,transparent)",
              }}
            />

            <p className="mx-auto mt-8 max-w-[850px] text-[18px] leading-8 text-slate-300">
              Book a professional consultation and discover how Fluent English
              Hub can help you improve communication, strengthen relationships
              and achieve measurable results in business, interviews, meetings
              and everyday professional interactions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  px-8
                  py-4
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#020b18]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:-translate-y-1
                "
                style={{
                  background:
                    "linear-gradient(135deg,#e0b44a 0%, #d99a2b 50%, #eac76b 100%)",
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.25), 0 0 10px rgba(244,194,79,0.10)",
                }}
              >
                Book Consultation
              </a>

              <a
                href="#assessment"
                className="
                  rounded-xl
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:-translate-y-1
                "
                style={{
                  border: "1px solid rgba(244,194,79,0.35)",
                  background:
                    "linear-gradient(180deg, rgba(244,194,79,0.10), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    "0 0 20px rgba(244,194,79,0.08), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                Free English Assessment
              </a>
            </div>

            <p
              className="mt-12 uppercase text-slate-400"
              style={{
                letterSpacing: "0.22em",
                fontSize: "11px",
                fontWeight: 700,
              }}
            >
              Communication • Confidence • Results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
