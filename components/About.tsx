export default function About() {
  return (
    <section
      id="about"
      className="py-section-y px-section-x bg-C1 dark:bg-D5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text Content */}
          <div className="text-left">

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="text-C6 dark:text-C1">
                  Helping You Feel
                </span>

                <span className="block mt-2 text-C5 dark:text-D1">
                  Strong, Healthy & Confident
                </span>
              </h2>

            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
              <p>
                I'm <strong>Lucy Rowlands</strong>, a Level 3 Personal Trainer
                with a Level 2 Certificate in Understanding Nutrition and
                Health.
              </p>

              <p>
                I was never really into exercise growing up, but in my late 20s
                I discovered a genuine love for movement and training through
                regular gym sessions, running, and home HIIT workouts during
                COVID.
              </p>

              <p>
                Now I help others build confidence, improve fitness, and create
                healthier habits in a realistic and supportive way — without
                extremes or pressure.
              </p>
            </div>

            {/* Optional stats / highlights */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="rounded-2xl bg-white dark:bg-white/5 p-4 shadow-sm border border-slate-200/50 dark:border-white/10 text-center">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  L3
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Personal Trainer
                </p>
              </div>

              <div className="rounded-2xl bg-white dark:bg-white/5 p-4 shadow-sm border border-slate-200/50 dark:border-white/10 text-center">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  HIIT
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Training Focus
                </p>
              </div>

              <div className="rounded-2xl bg-white dark:bg-white/5 p-4 shadow-sm border border-slate-200/50 dark:border-white/10 text-center">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  3 Services
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Coaching Support
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-[3rem] bg-gradient-to-br from-pink-400/20 to-orange-300/20 blur-3xl" />
            </div>

            {/* Main image card */}
            <div className="relative rounded-[2rem] bg-white dark:bg-white/5 p-4 shadow-2xl border border-slate-200/50 dark:border-white/10 backdrop-blur-sm">
              <img
                src="/lrfitness.webp"
                alt="Lucy Rowlands Personal Trainer"
                className="
                  w-full
                  max-w-[320px]
                  sm:max-w-[360px]
                  lg:max-w-[420px]
                  h-auto
                  object-contain
                  rounded-[1.5rem]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}