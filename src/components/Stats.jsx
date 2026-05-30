export default function Stats() {
  const stats = [
    {
      number: "100+",
      label: "Coaching Sessions",
    },
    {
      number: "15+",
      label: "Global Learners",
    },
    {
      number: "TEFL",
      label: "Certified",
    },
    {
      number: "1-on-1",
      label: "Executive Coaching",
    },
  ];

  return (
        <section
  className="relative -mt-2 text-white"
  style={{
    backgroundImage: "url('/images/feh-hero-bg.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
      <div className="mx-auto max-w-[1350px] px-6 py-14 lg:px-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#06152d]/60
                px-6
                py-6
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-yellow-400/20
                hover:bg-[#06152d]/80
                hover:-translate-y-1
              "
            >
              <div
                className="font-bold text-yellow-300"
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "34px",
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>

              <div
                className="mt-3 uppercase text-slate-300"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  fontWeight: 700,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}