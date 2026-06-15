import {
  BarChart3,
  Mail,
  Users,
  MessageCircle,
  Target,
  Star,
} from "lucide-react";

export default function TestimonialsImpact() {
  const stats = [
    { icon: BarChart3, number: "87%", label: "Improvement in Communication Confidence" },
    { icon: Mail, number: "82%", label: "Better Email Clarity & Professionalism" },
    { icon: Target, number: "75%", label: "More Effective Meetings & Presentations" },
    { icon: Users, number: "76%", label: "Increase in Customer Satisfaction" },
    { icon: MessageCircle, number: "70%", label: "Fewer Communication Misunderstandings" },
    { icon: Star, number: "90%", label: "Clients Recommend Our Coaching" },
  ];

  const testimonials = [
    {
      quote:
        "TJ helped me transform the way I communicate in meetings. I now speak with confidence and my ideas are heard.",
      name: "Liam O.",
      role: "Project Manager",
      location: "UAE",
    },
    {
      quote:
        "My emails are clearer, more professional, and I get faster responses. This has improved my productivity so much.",
      name: "Mayumi S.",
      role: "Marketing Specialist",
      location: "Japan",
    },
    {
      quote:
        "Our team communication has improved significantly. FEH's coaching made a real difference.",
      name: "Ahmed R.",
      role: "Operations Manager",
      location: "Dubai",
    },
  ];

  return (
    <section
      id="testimonials"
        className="relative overflow-hidden px-8 py-20 text-[#07111f]"
        style={{
        backgroundColor: "#f3f4f6",
       }}
       >
      <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT STATS */}
        <div>
          <h2 className="text-3xl font-extrabold uppercase tracking-wide">
            Measurable Impact
          </h2>

          <div className="mt-3 h-[2px] w-24 bg-[#d99a2b]" />

          <p className="mt-4 text-lg text-slate-700">
            Real improvements. Real results.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(({ icon: Icon, number, label }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d99a2b]/40 text-[#d99a2b]">
                  <Icon className="h-6 w-6"
                   style={{ color: "#d99a2b" }}
                  />
                </div>

                <div>
                  <div className="text-4xl font-extrabold"
                  style={{
                  color: "#d99a2b",
                  textShadow: "0 0 8px rgba(217,154,43,0.15)",
                   }}
                >
                 {number}
                 </div>
                  <p className="mt-1 text-sm leading-snug text-slate-700">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-slate-500">
            * Results based on average improvements reported by coaching clients.
          </p>
        </div>

        {/* RIGHT TESTIMONIALS */}
        <div className="border-l border-slate-300/70 pl-0 lg:pl-14">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide">
            What Our Clients Say
          </h2>

          <div className="mt-3 h-[2px] w-24 bg-[#d99a2b]" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="text-5xl leading-none text-slate-300">“</div>

                <p className="mt-2 min-h-[140px] text-sm leading-7 text-slate-800">
                  {item.quote}
                </p>

                <div className="mt-5 flex gap-1">
                {[...Array(5)].map((_, index) => (
                <Star
                 key={index}
                 size={16}
                  fill="#f4c24f"
                  color="#f4c24f"
                />
                ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-lg font-bold text-slate-600">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-bold text-[#07111f]">{item.name}</p>
                    <p className="text-xs text-slate-600">{item.role}</p>
                    <p className="text-xs text-slate-600">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#d99a2b]" />
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            <span className="h-3 w-3 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </section>
  );
}