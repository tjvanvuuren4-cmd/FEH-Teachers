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
      style={{
        padding: "100px 20px",
        background: "#06132d",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: 20,
          }}
        >
          Student Resources
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 50px",
            color: "#b8c0d0",
          }}
        >
          Download our professional learning resources,
          placement assessments and student documents.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 20,
          }}
        >
          {docs.map((doc) => (
            <a
              key={doc.title}
              href={doc.file}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                background: "#0d1b3e",
                border: "1px solid rgba(255,215,0,0.2)",
                borderRadius: 16,
                padding: 24,
                color: "#fff",
              }}
            >
              <h3>{doc.title}</h3>

              <p style={{ color: "#b8c0d0" }}>
                View or download PDF
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}