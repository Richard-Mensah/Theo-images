import Button from "@/components/ui/Button"

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-ink via-brand-900 to-brand-700 py-20 text-white">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-coral/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-brand-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
              Collaboration
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Research, data strategy, and public-interest AI with practical delivery behind it.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/70">
              Theodore is positioned for doctoral research, applied AI collaboration, and analytics projects that
              need technical depth, ethical judgement, and public-sector experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/research">Discuss research</Button>
              <a
                href="/experience"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-ink"
              >
                Review track record
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
