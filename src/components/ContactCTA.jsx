export default function ContactCTA({ whatsappUrl }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 text-center text-white"
      style={{
        backgroundImage: "url('/images/feh-hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#020b18]/70" />

      <div className="relative mx-auto max-w-5xl rounded-[2.5rem] border border-yellow-400/25 bg-[#031126]/80 p-10 shadow-[0_0_70px_rgba(250,204,21,0.12)] backdrop-blur-xl md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
          Start Your Journey
        </p>

        <h2
          className="mt-5 text-4xl font-bold leading-tight md:text-6xl"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Your English Confidence
          <span className="block bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Starts With One Conversation.
          </span>
        </h2>

        <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-200">
          Book a private consultation and receive a clear path to improve your
          speaking, fluency, confidence, and real-world communication.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-gradient-to-r from-yellow-500 to-yellow-300 px-8 py-4 font-bold uppercase tracking-wide text-[#06152d] shadow-[0_0_35px_rgba(250,204,21,0.35)] transition hover:scale-105"
          >
            Book Private Consultation
          </a>

          <a
            href="#assessment"
            className="rounded border border-yellow-400/50 bg-white/5 px-8 py-4 font-bold uppercase tracking-wide text-yellow-100 backdrop-blur-md transition hover:bg-yellow-400/10"
          >
            Download Free Guide
          </a>
        </div>
      </div>
    </section>
  );
}