export default function Hero({ whatsappUrl }) {
  return (
    <section
      id="guide"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/feh-hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#020b18]/55" />

      {/* Luxury light accents */}
      <div className="absolute left-[38%] top-[22%] h-[420px] w-px rotate-[28deg] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute left-[48%] top-[38%] h-[320px] w-px rotate-[18deg] bg-gradient-to-b from-transparent via-yellow-400/15 to-transparent" />
      <div className="absolute left-[56%] top-[45%] h-[260px] w-px rotate-[55deg] bg-gradient-to-b from-transparent via-yellow-400/15 to-transparent" />
      <div className="absolute left-[43%] top-[28%] h-40 w-40 rounded-full bg-yellow-400/5 blur-[110px]" />

      <div className="relative z-10 mx-auto grid min-h-[760px] max-w-[1350px] items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-2 lg:px-10">
        {/* LEFT SIDE */}
        <div className="max-w-[700px]">
          <div className="mt-8 mb-8 flex justify-left lg:justify-left lg:pl-0">
            <p
              className="inline-flex rounded-full border border-yellow-400/40 bg-[#06152d]/60 px-6 py-4 font-bold uppercase text-yellow-300 backdrop-blur-xl"
              style={{
                fontSize: "14px",
                letterSpacing: "0.18em",
              }}
            >
              Executive English Coaching
            </p>
          </div>

          <h1
            className="text-6xl font-bold uppercase leading-[0.92] tracking-wide md:text-8xl"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Speak English.
            <br />
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Lead The World.
            </span>
          </h1>

          <div className="my-12 h-px -5 bg-gradient-to-r from-yellow-500 via-yellow-200 to-transparent" />
          <div
  className="mt-6 uppercase text-yellow-300/80"
  style={{
    letterSpacing: "0.22em",
    fontSize: "13px",
    fontWeight: 700,
  }}
>
  For Professionals • Executives • Global Communicators
</div>

<p
  className="mt-8 max-w-[520px] font-medium text-slate-100"
  style={{
    fontSize: "22px",
    lineHeight: "2",
    fontWeight: "500",
  }}
>
  Master executive-level English communication for international business,
leadership presentations, high-stakes interviews and career advancement.
</p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="
rounded-2xl
border
border-yellow-400/30
bg-gradient-to-r
from-[#0b2148]
to-[#102f63]
px-10
py-5
font-bold
uppercase
tracking-[0.12em]
text-yellow-300
shadow-[0_0_25px_rgba(250,204,21,0.15)]
hover:border-yellow-300
hover:shadow-[0_0_40px_rgba(250,204,21,0.25)]
transition-all
duration-300
"
            >
              SCHEDULE A CONSULTATION
            </a>

            <a
              href="#assessment"
              className="
rounded-2xl
border
border-yellow-400/30
bg-gradient-to-r
from-[#0b2148]
to-[#102f63]
px-10
py-5
font-bold
uppercase
tracking-[0.12em]
text-yellow-300
shadow-[0_0_25px_rgba(250,204,21,0.15)]
hover:border-yellow-300
hover:shadow-[0_0_40px_rgba(250,204,21,0.25)]
transition-all
duration-300
"
            >
              Free English Assessment
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
  {[
      "Executive English",
  "Leadership Skills",
  "Interview Mastery",
  "Career Growth",
  ].map((item) => (
    <div
      key={item}
      className="
flex
items-center
justify-center
rounded-full
border
border-white/10
bg-[#06152d]/50
px-4
py-4
text-xs
font-semibold
uppercase
tracking-[0.12em]
backdrop-blur-md
"
    >
      ✓ {item}
    </div>
  ))}
</div>      
            {/* RIGHT SIDE - TJ PORTRAIT */}
<div className="relative hidden items-center justify-end lg:flex">
  <img
    src="/images/tj-coach.webp"
    alt="TJ Van Vuuren"
    className="relative z-10 h-[620px] w-auto object-cover translate-x-24"
    style={{
      filter: "drop-shadow(0 0 25px rgba(0,0,0,0.35))",
    }}
  />

  <div
    className="absolute inset-0 z-20 pointer-events-none"
    style={{
      background:
        "linear-gradient(to right, #031126 0%, rgba(3,17,38,0.45) 25%, transparent 55%)",
    }}
  />
</div>
        </div>
      </div>
    </section>
  );
}