      <section className="border-b border-yellow-400/20 bg-[#06152d]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-yellow-100 md:grid-cols-4 lg:px-12">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-xl border border-yellow-400/20 bg-white/5 px-4 py-4">
              {benefit}
            </div>
          ))}
        </div>
      </section>