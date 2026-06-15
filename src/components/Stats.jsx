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
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
      }}
    >
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d99a2b]/50 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`
                text-center
                px-8
                ${index !== stats.length - 1 ? "md:border-r md:border-[#d99a2b]/15" : ""}
              `}
            >
              <h3
                style={{
                  fontFamily: "Cinzel, serif",
                  color: "#f4c24f",
                  fontSize: "48px",
                  fontWeight: "700",
                  textShadow:
                    "0 0 12px rgba(244,194,79,0.15)",
                }}
              >
                {item.number}
              </h3>

              <p
                className="mt-3 uppercase"
                style={{
                  color: "#d6dde8",
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  fontWeight: "600",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d99a2b]/50 to-transparent" />
    </section>
  );
}