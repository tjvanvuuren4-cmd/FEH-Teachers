export default function Resources() {
  const docs = [
    {
      title: "English Placement Test",
      file: "/documents/FEH-English-Placement-Test.pdf",
    },
    {
      title: "Assessment Report Sample",
      file: "/documents/FEH-Assessment-Report.pdf",
    },
    {
      title: "Student Welcome Guide",
      file: "/documents/FEH-Student-Welcome-Guide.pdf",
    },
    {
      title: "Certificate Template",
      file: "/documents/FEH-Certificate-Template.pdf",
    },
    {
      title: "Terms & Conditions",
      file: "/documents/FEH-Terms-and-Conditions.pdf",
    },
    {
      title: "Refund Policy",
      file: "/documents/FEH-Refund-Policy.pdf",
    },
  ];

  return (
    <section
      id="resources"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,154,43,0.10),transparent_35%)]" />

      <div className="mx-auto max-w-[1450px] px-8 py-24">
        <div className="mb-16 text-center">
          <p
            className="uppercase"
            style={{
              color: "#f4c24f",
              letterSpacing: "0.25em",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            Premium Learning Materials
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
            Executive Learning{" "}
            <span
              className="block"
              style={{
                color: "#f4c24f",
                textShadow: "0 0 12px rgba(244,194,79,0.22)",
              }}
            >
              Resources
            </span>
          </h2>

          <div
            className="mx-auto mt-6"
            style={{
              width: "120px",
              height: "2px",
              background:
                "linear-gradient(90deg,transparent,#f4c24f,#d99a2b,transparent)",
            }}
          />

          <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-8 text-slate-300">
            Access professional FEH documents, placement assessments, student
            guides and learning materials designed to support clear progress
            and measurable communication improvement.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => (
            <a
              key={doc.title}
              href={doc.file}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-[#d99a2b]/15 bg-[#061423]/80 p-7 text-white no-underline backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#f4c24f]/40 hover:shadow-[0_0_30px_rgba(244,194,79,0.08)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at top, rgba(244,194,79,0.10), transparent 60%)",
                }}
              />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#d99a2b] to-[#f2bd55] text-sm font-extrabold text-[#020b18] shadow-[0_0_18px_rgba(244,194,79,0.18)]">
                  PDF
                </div>

                <h3
                  className="text-xl font-bold"
                  style={{ color: "#f4c24f" }}
                >
                  {doc.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  View or download this professional FEH resource.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    Open Document
                  </span>

                  <span
                    className="transition duration-300 group-hover:translate-x-2"
                    style={{ color: "#f4c24f" }}
                  >
                    →
                  </span>
                </div>

                <div className="mt-6 h-px w-20 bg-gradient-to-r from-[#f4c24f] to-transparent transition-all duration-300 group-hover:w-32" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}