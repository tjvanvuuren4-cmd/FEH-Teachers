import {
  Users,
  Mail,
  Presentation,
  Handshake,
} from "lucide-react";

export default function Businesses({ whatsappUrl }) {
  const services = [
    {
      icon: Mail,
      title: "Professional Email Excellence",
      text: "Help employees write clearer, more professional emails that improve communication and reduce misunderstandings.",
    },
    {
      icon: Users,
      title: "Customer Communication",
      text: "Develop stronger customer interactions that build trust, improve satisfaction and strengthen relationships.",
    },
    {
      icon: Handshake,
      title: "Meeting Confidence",
      text: "Equip teams to participate confidently in meetings, discussions and client conversations.",
    },
    {
      icon: Presentation,
      title: "Presentation Skills",
      text: "Improve presentation delivery, executive presence and communication impact across the organisation.",
    },
  ];

  return (
    <section
      id="businesses"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(90deg, #020b18 0%, #041a30 45%, #061423 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,154,43,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-8 py-24">
        {/* HEADER */}
        <div className="mx-auto max-w-[900px] text-center">
          <p
            className="uppercase"
            style={{
              color: "#f4c24f",
              letterSpacing: "0.25em",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            For Businesses
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
            Helping Teams
            <span
              className="block"
              style={{
                color: "#f4c24f",
                textShadow:
                  "0 0 12px rgba(244,194,79,0.22)",
              }}
            >
              Communicate With Confidence
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

          <p className="mx-auto mt-8 max-w-[800px] text-[18px] leading-8 text-slate-300">
            Fluent English Hub partners with businesses to improve
            communication, strengthen client relationships and
            develop confident teams capable of delivering
            exceptional results.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="
                group
                rounded-[2rem]
                border
                border-[#d99a2b]/15
                bg-[#061423]/75
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#f4c24f]/35
                hover:shadow-[0_0_30px_rgba(244,194,79,0.08)]
              "
            >
              <Icon
                className="h-12 w-12"
                style={{ color: "#f4c24f" }}
                strokeWidth={1.6}
              />

              <h3
                className="mt-6 text-2xl font-bold"
                style={{
                  color: "#f4c24f",
                  fontFamily: "Cinzel, serif",
                }}
              >
                {title}
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            mt-16
            rounded-[2rem]
            border
            border-[#d99a2b]/15
            bg-[#061423]/80
            p-10
            text-center
            backdrop-blur-xl
          "
        >
          <h3
            className="text-3xl font-bold"
            style={{
              color: "#f4c24f",
              fontFamily: "Cinzel, serif",
            }}
          >
            Looking For Team Communication Training?
          </h3>

          <p className="mx-auto mt-5 max-w-[750px] text-slate-300 leading-8">
            Whether you need support for customer-facing staff,
            management teams or international communication,
            Fluent English Hub can create a customised coaching
            programme tailored to your business goals.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="
              mt-8
              inline-block
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
                "0 6px 14px rgba(0,0,0,0.24), 0 0 10px rgba(244,194,79,0.10)",
            }}
          >
            Discuss Business Training
          </a>
        </div>
      </div>
    </section>
  );
}