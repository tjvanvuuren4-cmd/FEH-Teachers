import {
  MessageCircle,
  Users,
  Target,
  BarChart3,
  Mail,
  Presentation,
  Headphones,
  Globe2,
  Handshake,
} from "lucide-react";

export default function Hero({ whatsappUrl }) {
  const benefits = [
    { icon: MessageCircle, title: "Better", text: "Communication" },
    { icon: Handshake, title: "Stronger", text: "Relationships" },
    { icon: Target, title: "Increased", text: "Confidence" },
    { icon: BarChart3, title: "Measurable", text: "Results" },
  ];

  const services = [
    {
      icon: Users,
      title: "Business Communication",
      text: "Communicate clearly and professionally in any business setting.",
    },
    {
      icon: Mail,
      title: "Professional Email Excellence",
      text: "Write emails that are clear, impactful, and results-driven.",
    },
    {
      icon: Handshake,
      title: "Meeting Confidence",
      text: "Lead and participate in meetings with clarity and confidence.",
    },
    {
      icon: Presentation,
      title: "Presentation Skills",
      text: "Deliver presentations that engage, influence, and inspire.",
    },
    {
      icon: Headphones,
      title: "Customer Communication",
      text: "Build stronger client relationships and improve satisfaction.",
    },
    {
      icon: Globe2,
      title: "International Workplace",
      text: "Communicate effectively across cultures and borders.",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeRight {
            from { opacity: 0; transform: translateX(35px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes goldGlow {
            0%, 100% { text-shadow: 0 0 12px rgba(217,154,43,0.25); }
            50% { text-shadow: 0 0 28px rgba(217,154,43,0.45); }
          }

          .fade-up-1 { animation: fadeUp 0.9s ease forwards; }
          .fade-up-2 { animation: fadeUp 0.9s ease 0.2s forwards; opacity: 0; }
          .fade-up-3 { animation: fadeUp 0.9s ease 0.4s forwards; opacity: 0; }
          .fade-up-4 { animation: fadeUp 0.9s ease 0.6s forwards; opacity: 0; }
          .fade-up-5 { animation: fadeUp 0.9s ease 0.8s forwards; opacity: 0; }
          .image-fade { animation: fadeRight 1.1s ease 0.3s forwards; opacity: 0; }
          .gold-glow { animation: goldGlow 3s ease-in-out infinite; }
        `}
      </style>

      <section
        id="home"
        className="relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,154,43,0.12),transparent_35%)]" />

        <div className="mx-auto flex max-w-[1500px] flex-col items-center lg:h-[680px] lg:flex-row">
          {/* LEFT */}
          <div className="relative z-10 flex w-full flex-col justify-center px-8 py-14 lg:w-[36%] lg:px-12 lg:pb-20">
            <div
              className="pointer-events-none absolute left-[-120px] top-1/2 -translate-y-1/2"
              style={{
                width: "500px",
                height: "500px",
                background:
                  "radial-gradient(circle, rgba(244,194,79,0.08) 0%, transparent 70%)",
              }}
            />

            <p
              className="fade-up-1 mb-4 uppercase"
              style={{
                color: "#f4c24f",
                letterSpacing: "0.25em",
                fontSize: "11px",
                fontWeight: 700,
              }}
            >
              Communication Excellence
            </p>

            <h1 className="fade-up-1 max-w-[620px] text-6xl font-bold tracking-tight md:text-[58px]">
              Communicate With
              <br />
              Confidence.
              <span
                className="gold-glow mt-4 block"
                style={{
                  color: "#f4c24f",
                  textShadow:
                    "0 0 10px rgba(244,194,79,0.35), 0 0 20px rgba(244,194,79,0.15)",
                }}
              >
                Make Your Mark.
              </span>
            </h1>

            <div
              className="fade-up-2 mt-6 mb-7"
              style={{
                width: "120px",
                height: "2px",
                background:
                  "linear-gradient(90deg,#f4c24f,#d99a2b,transparent)",
              }}
            />

            <p
              className="fade-up-3 text-sm uppercase tracking-[0.22em]"
              style={{ color: "#f4c24f" }}
            >
              Professional Communication. Measurable Results.
            </p>

            <p className="fade-up-3 mt-4 max-w-[520px] text-[22px] font-medium leading-8 text-slate-100">
              Building Enduring, Rewarding Relationships Through Communication
              Excellence.
            </p>

            <p className="fade-up-4 mt-5 max-w-[500px] text-[18px] leading-8 text-slate-300">
              Helping professionals and businesses improve communication,
              strengthen relationships, and achieve measurable results.
            </p>

            <div className="fade-up-5 mt-9 flex flex-wrap gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#020b18] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(135deg,#e0b44a 0%, #d99a2b 50%, #eac76b 100%)",
                  boxShadow:
                    "0 6px 14px rgba(0,0,0,0.24), 0 0 10px rgba(244,194,79,0.10)",
                }}
              >
                Book a Consultation
              </a>

              <a
                href="#services"
                className="rounded-xl px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                style={{
                  border: "1px solid rgba(244,194,79,0.35)",
                  background:
                    "linear-gradient(180deg, rgba(244,194,79,0.10), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    "0 0 12px rgba(244,194,79,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* IMAGE + BENEFITS */}
<div className="image-fade relative hidden h-[560px] overflow-hidden lg:block lg:w-[70%]">
  {/* curved dark-blue half moon */}
  <div className="absolute inset-y-0 left-0 z-20 w-28 rounded-r-[100%]" />

  <img
    src="/images/feh-boardroom.webp"
    alt="Business communication coaching session"
    className="h-full w-full object-cover object-center"
  />

  {/* right-side dark fade */}
  <div
    className="absolute inset-0 z-10"
    style={{
      background:
        "linear-gradient(to left, rgba(2,11,24,0.78), transparent 45%)",
    }}
  />

  {/* soft overall overlay */}
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#061423]/20 via-transparent to-transparent" />

  {/* RIGHT BENEFITS GLASS BOX */}
  <div
    className="absolute right-0 top-0 z-30 flex h-full w-[240px] flex-col justify-center px-7"
    style={{
      background: "rgba(3, 12, 24, 0.84)",
      backdropFilter: "blur(12px)",
      borderLeft: "2px solid rgba(244,194,79,0.18)",
    }}
  >
    {benefits.map(({ icon: Icon, title, text }, index) => (
      <div
        key={text}
        className="flex items-center gap-4 border-b border-[#d99a2b]/15 py-6 transition-all duration-300 last:border-b-0 hover:translate-x-2"
        style={{
          animation: `fadeUp 0.8s ease ${0.5 + index * 0.15}s forwards`,
          opacity: 0,
        }}
      >
        <Icon className="h-9 w-9 text-[#d99a2b]" strokeWidth={1.8} />

        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-sm text-slate-200">{text}</p>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* SERVICE STRIP */}
      <section
        id="services"
        className="bg-white px-6 py-12"
        style={{ color: "#07111f" }}
      >
        <div className="mx-auto max-w-[1450px]">
          <h2
            className="text-center text-2xl font-extrabold uppercase tracking-wide"
            style={{ color: "#07111f" }}
          >
            Communication Coaching That Drives Results
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-24 bg-[#d99a2b]" />

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-6">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="px-6 text-center lg:border-r lg:border-slate-300/60 last:border-r-0"
              >
                <Icon
                  className="mx-auto mb-5 h-14 w-14"
                  style={{ color: "#d99a2b" }}
                  strokeWidth={1.6}
                />

                <h3
                  className="text-lg font-bold leading-tight"
                  style={{ color: "#07111f" }}
                >
                  {title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "#334155" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}