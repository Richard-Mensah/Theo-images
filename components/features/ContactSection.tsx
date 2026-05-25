import Button from "@/components/ui/Button"

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="bg-ink px-6 py-12 text-white shadow-soft sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Collaboration</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Research, data strategy, and public-interest AI with practical delivery behind it.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-white/72">
              Theodore is positioned for doctoral research, applied AI collaboration, and analytics projects that
              need technical depth, ethical judgement, and public-sector experience.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/research">Discuss research</Button>
              <Button href="/experience" variant="secondary">
                Review track record
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
