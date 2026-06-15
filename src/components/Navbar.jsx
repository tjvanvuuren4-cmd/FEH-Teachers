export default function Navbar({ whatsappUrl }) {
  return (
    <header className="relative z-50 px-4 pt-4">
      <div
        className="relative mx-auto max-w-[1500px] overflow-hidden rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,11,24,0.98) 0%, rgba(3,23,44,0.98) 50%, rgba(6,20,35,0.98) 100%)",
        }}
      >
        {/* luxury texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(244,194,79,0.22) 1px, transparent 1px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* gold glow */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-[420px]"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(217,154,43,0.18), transparent 70%)",
          }}
        />

        <div className="relative flex h-[72px] items-center justify-between px-8">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/images/feh-crest.png"
              alt="Fluent English Hub"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
                flexShrink: 0,
                filter: "drop-shadow(0 0 14px rgba(244,194,79,0.35))",
              }}
            />

            <div>
              <div
                className="font-bold uppercase"
                style={{
                  color: "#f4c24f",
                  fontFamily: "Cinzel, serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                  textShadow:
                    "0 0 8px rgba(244,194,79,0.4), 0 0 22px rgba(244,194,79,0.18)",
                }}
              >
                Fluent English Hub
              </div>

              <div
                className="mt-2 uppercase"
                style={{
                  color: "#f7d77a",
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  fontWeight: 800,
                }}
              >
                Communication Excellence
              </div>
            </div>
          </a>

          <nav
            className="hidden items-center lg:flex"
            style={{
              gap: "36px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <a
              href="#home"
              style={{
                color: "#f4c24f",
                borderBottom: "2px solid #f4c24f",
                paddingBottom: "8px",
              }}
            >
              Home
            </a>

            {[
              ["#about", "About"],
              ["#services", "Services"],
              ["#businesses", "For Businesses"],
              ["#process", "Our Process"],
              ["#testimonials", "Testimonials"],
              ["#resources", "Resources"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                style={{ color: "rgba(255,255,255,0.92)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f4c24f";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.92)";
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] transition hover:scale-[1.03] xl:inline-flex"
            style={{
              color: "#020b18",
              background:
                "linear-gradient(135deg, #c8841f 0%, #f2bd55 45%, #ffd978 100%)",
              boxShadow:
                "0 0 22px rgba(217,154,43,0.32), inset 0 1px 0 rgba(255,255,255,0.35)",
            }}
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </header>
  );
}