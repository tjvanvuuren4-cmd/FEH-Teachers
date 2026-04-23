import teacherPhoto from './assets/tj-photo.png'

export default function TJLeadFunnelWebsite() {
  const whatsappUrl =
    'https://wa.me/27717926486?text=Hi%20TJ%2C%20I%20downloaded%20your%20guide%20and%20I%20want%20to%20improve%20my%20English.';
  const pdfUrl = '/TJ_English_Confidence_Guide.pdf';
  const formAction = 'https://formsubmit.co/tjvanvuuren4@gmail.com';

  const emailSequence = [
    '1: Conversational English-Practical support focused on real improvement and stronger speaking confidence.',
    '2: Business English-Practical support focused on real improvement and stronger speaking confidence.',
    '3: Interview Preparation-Practical support focused on real improvement and stronger speaking confidence.',
    '4: Pronunciation & Fluency-Practical support focused on real improvement and stronger speaking confidence.',
    '5: Personal Study Plans-Practical support focused on real improvement and stronger speaking confidence.',
  ];

  const benefits = [
    'Free level test',
    'Personal study plan',
    'Structured speaking practice',
    'Friendly support between lessons',
  ];

  const steps = [
    {
      title: 'Email a Coach',
      text: 'Free PDF guide.',
    },
    {
      title: 'Give us a call',
      text: '+27 71 792 6486.',
    },
    {
      title: 'WhatsApp',
      text: 'Click WhatsApp and find out more.',
    },
  ];

  const packages = [
    {
      name: 'Starter Foundation',
      price: '$80 / month',
      desc: '2 lessons per week (8 Total), 45 minutes each, Level check & learning plan, Basic speaking & grammar, WhatsApp support, Best for beginners (A1-A2).',
      featured: true,
    },
    {
      name: 'Confidence Boost',
      price: '$150 / month',
      desc: '3 lessons per week (12Total), 45-60 minutes each, Speaking-Focused training, Real-Life conversation practice, Personalized feedback, WhatsApp support, (Best for B1-B2 Students).',
      featured: true,
    },
    {
      name: 'Fluency Pro',
      price: '$250 / month',
      desc: '4-5 lessons per week, Business English focus, Interview preparation, Advance speaking & Correction, daily WhatsApp support, Custom lesson plan, (Best for B2-C1 Professionals).',
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#081b3a] via-[#0f2f6e] to-[#2741a8] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-[#081b3a]/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <div>
            <div className="text-2xl font-bold tracking-wide text-[#081b3a]">
              <span className="text-yellow-600">FLUENT ENGLISH HUB</span>
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-300">
              Confidence • Fluency • Success
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-100 md:flex">
            <a href="#guide" className="hover:text-yellow-300">Free Guide</a>
            <a href="#funnel" className="hover:text-yellow-300">Client Journey</a>
            <a href="#programs" className="hover:text-yellow-300">Programs</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-[#081b3a] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d2b5c]"
          >
            WhatsApp Now
          </a>
        </div>
      </header>

      <section id="guide" className="relative overflow-hidden bg-gradient-to-br from-[#081b3a] via-[#0b3965] to-[#0f4d7f] text-white shadow-[0_30px_80px_-40px_rgba(8,27,58,0.65)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
          <div className="mt-8 h-1 w-64 rounded-full bg-gradient-to-r from-yellow-400 via-white to-yellow-400 opacity-50 blur-sm" />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-24 top-8 h-[34rem] w-[34rem] rounded-full border border-yellow-400/30" />
          <div className="absolute right-14 top-20 h-[28rem] w-[28rem] rounded-full border border-yellow-400/20" />
          <div className="absolute left-[-100px] bottom-[-100px] h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-yellow-400/40 bg-white/5 px-4 py-2 text-sm tracking-wide text-yellow-600">
              Free PDF Guide + Client Journey
            </div>
            <h1 className="section-accent-line max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
              Get the free guide that helps adults speak English with <span className="text-yellow-400">confidence</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white md:text-xl">
              Download the guide, improve your speaking, and get a simple path into English Coaching programs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-royal-blue/10 text-yellow-600">Free PDF Guide</span>
              <span className="rounded-full bg-royal-blue/10 text-yellow-600">Confidence & Fluency</span>
              <span className="rounded-full bg-royal-blue/10 text-yellow-600">WhatsApp Follow-Up</span>
            </div>

            <div className="mt-6 max-w-xl rounded-[1.5rem] border border-white/10 bg-royal-blue/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-600">Client Journey</p>
              <h3 className="mt-2 text-2xl font-bold">Download: Speak English with Confidence</h3>
              <p className="mt-3 text-slate-900">
                A short guide packed with quick speaking fixes, common mistakes, and practical tips to help students improve fast.
              </p>

              <form action={formAction} method="POST" className="mt-5 space-y-3">
                <input type="hidden" name="_subject" value="New TJ English Coaching lead" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={pdfUrl} />
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-blue-700 bg-black px-4 py-3 text-slate-900 placeholder:text-slate-400 carter-slate-900 outline-none focus:ring-2 focus:ring-blue-700"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-blue-700 bg-black px-4 py-3 text-slate-900 placeholder:text-slate-400 carter-slate-900 outline-none focus:ring-2 focus:ring-blue-700"
                />
                <button className="w-full rounded-2xl bg-yellow-400 px-5 py-3 font-semibold text-[#081b3a] transition hover:bg-yellow-300">
                  Download Free Guide
                </button>
              </form>

              <p className="mt-3 text-xs text-slate-200">
                This form sends the lead to your email and then redirects the visitor to the PDF download.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={pdfUrl}
                className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-[#081b3a] shadow-lg transition hover:bg-yellow-300"
              >
                Preview PDF
              </a>
              <a
                href="#funnel"
                className="rounded-2xl border border-white/20 bg-royal-blue/5 px-6 py-3 font-semibold text-royal transition hover:bg-white/10"
              >
                See the Funnel
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
              <div className="grid gap-4 rounded-[1.6rem] bg-white p-5 text-[#102a7d] shadow-xl md:grid-cols-[1fr_1fr]">
                <div className="overflow-hidden rounded-[1.4rem] bg-[#102a7d]">
                  <img
                    src={teacherPhoto}
                    alt="TJ English Coaching teacher portrait"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-[1.4rem] bg-white p-6 text-[#102a7d]">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">What happens next</div>
                  <h2 className="mt-4 text-3xl font-bold text-blue-900">Download. Learn. Message.</h2>
                  <div className="mt-6 space-y-3 text-sm text-blue-900">
                    <div>• Free PDF guide download</div>
                    <div>• 5-email trust-building sequence</div>
                    <div>• WhatsApp conversation to qualify the lead</div>
                    <div>• Trial lesson offer</div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block rounded-2xl bg-yellow-400 px-5 py-3 font-semibold text-[#081b3a] transition hover:bg-yellow-300"
                  >
                    Connect with an English Coach
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="funnel" className="bg-[#eff4ff]/95">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">Client Journey</p>
            <h2 className="section-accent-line mt-3 text-3xl font-bold text-[#081b3a] md:text-5xl">Your path from learning to speaking confidently</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] bg-dark blue p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081b3a] text-lg text-yellow-600">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-yellow-600">{step.title}</h3>
                <p className="mt-4 leading-7 font-bold text-yellow-600">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-dark blue p-8 shadow-sm">
            <p className="text-3xl font-semibold uppercase tracking-[0.8em] font-bold text-yellow-600">English coaching that feels practical and personal</p>
            <h3 className="mt-3 text-3xl font-bold text-white">We helps adult learners improve their English for everyday speaking, professional communication, and confidence building. With a client-focused background and TEFL, lessons are designed to be supportive, clear, and results-driven. The goal is not only to learn English, but to use it naturally and confidently in real situations.</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {emailSequence.map((item) => (
                <div key={item} className="rounded-2xl border border-[#c9d1f0] bg-[#eef4ff] p-4 text-sm font-medium font-bold text-yellow-600 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-white/95 p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#75582b]">We offer our students.</p>
            <h2 className="section-accent-line mt-3 text-3xl font-bold text-[#102a7d] md:text-4xl">Start improving your English with real value.</h2>
            <p className="mt-5 leading-7 text-[#102a7d]">
              The guide helps you build confidence from the start. The emails guide you with simple, practical steps. And when you're ready, we’ll connect on WhatsApp to plan your learning journey together. No pressure — just a clear path to improving your English.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-[1.5rem] border border-[#d1d7f0] bg-white/95 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ring-1 ring-[#e6e9f8]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102a7d] font-bold text-white">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-[#102a7d]">{benefit}</h3>
                <p className="mt-2 text-sm leading-6 text-[#1f3d91]">
                  Every lesson is designed to help students make clear, practical progress.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="bg-[#eef4ff]/95">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">Pricing</p>
            <h2 className="section-accent-line mt-3 text-3xl font-bold text-[#081b3a] md:text-5xl">Choose the package that fits your goals Programs designed for beginners, developing speakers, and professionals who want advanced fluency.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-8 shadow-sm ${pkg.featured ? 'border-yellow-400 bg-[#081b3a] text-white' : 'border-[#c9d1f0] bg-[#f7f9ff] text-[#102a7d]'}`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${pkg.featured ? 'text-yellow-300' : 'text-yellow-600'}`}>
                  {pkg.featured ? 'Package' : 'Pricing'}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{pkg.name}</h3>
                <div className="mt-4 text-4xl font-bold">{pkg.price}</div>
                <p className={`mt-4 leading-7 ${pkg.featured ? 'text-slate-200' : 'text-[#1f3d91]'}`}>{pkg.desc}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-block w-full rounded-2xl px-5 py-3 text-center font-semibold transition ${pkg.featured ? 'bg-yellow-400 text-[#081b3a] hover:bg-yellow-300' : 'bg-[#081b3a] text-white hover:bg-[#0d2b5c]'}`}
                >
                  Ask About This Program
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="bg-[#081b3a] text-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-10">
      What students can expect
    </h2>

    <div className="grid gap-8 md:grid-cols-3">

      {/* Testimonial 1 */}
      <div className="bg-white/95 p-8 rounded-2xl text-[#102a7d] shadow-lg hover:shadow-2xl transition space-y-4">
        <div className="text-5xl text-yellow-500">“</div>
        <p className="text-lg leading-8 text-slate-700">
          Lessons are practical, friendly, and really helped me speak with more confidence at work.
        </p>
        <p className="text-base font-semibold text-[#081b3a]">
          — Monica
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white/95 p-8 rounded-2xl text-[#102a7d] shadow-lg hover:shadow-2xl transition space-y-4">
        <div className="text-5xl text-yellow-500">“</div>
        <p className="text-lg leading-8 text-slate-700">
          I improved my fluency quickly because the lessons focused on real conversations, not just grammar.
        </p>
        <p className="text-base font-semibold text-[#081b3a]">
          — Carlos
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white/95 p-8 rounded-2xl text-[#102a7d] shadow-lg hover:shadow-2xl transition space-y-4">
        <div className="text-5xl text-yellow-500">“</div>
        <p className="text-lg leading-8 text-slate-700">
          Very patient and supportive teacher. I felt comfortable speaking English from the first lesson.
        </p>
        <p className="text-base font-semibold text-[#081b3a]">
          — Mina
        </p>
      </div>

    </div>

  </div>
</section>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-white shadow-2xl transition hover:scale-105"
      >
        WhatsApp
      </a>

      <footer className="border-t border-[#c9d1f0] bg-[#eef4ff]/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-[#102a7d] md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <div>© 2026 fluentenglishhub.com</div>
          <div>Speak English. Confidence. Opportunities.</div>
        </div>
      </footer>
    </div>
  );
}
