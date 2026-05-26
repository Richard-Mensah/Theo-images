import Image from "next/image"
import { HERO_METRICS } from "@/constants"
import Button from "@/components/ui/Button"

export default function HeroSection() {
  return (
    <section className="grid min-h-[calc(100svh-56px)] lg:grid-cols-[55%_45%]">
      {/* Left — text panel */}
      <div className="relative flex flex-col justify-between bg-gradient-to-br from-brand-900 via-ink to-brand-700 px-6 py-16 sm:px-10 lg:px-14">
        {/* Decorative blurred orbs */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 right-10 h-56 w-56 rounded-full bg-coral/10 blur-3xl" />

        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-brand-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
            AI Research · Statistics · Public Impact
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Theodore<br />Aware
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/75 sm:text-xl">
            Data scientist, AI researcher, and applied statistician building reliable systems for navigation,
            public planning, finance, and community-centred decision making.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/research">View research focus</Button>
            <Button href="/experience" variant="secondary">
              See experience
            </Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="relative z-10 mt-14 grid gap-3 sm:grid-cols-3">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-sm border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
            >
              <p className="text-3xl font-bold text-white">{metric.value}</p>
              <p className="mt-1.5 text-xs leading-5 text-white/55">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — portrait (person clearly visible) */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/theodore-portrait-blue.jpg"
          alt="Theodore Aware"
          fill
          priority
          sizes="45vw"
          className="object-cover object-[50%_15%]"
        />
        {/* Thin gradient only at bottom to blend into page */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/50 to-transparent" />
        {/* Left edge blend into left panel */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-brand-700 to-transparent" />
      </div>

      {/* Mobile portrait (below text on small screens) */}
      <div className="relative h-72 lg:hidden">
        <Image
          src="/images/theodore-portrait-blue.jpg"
          alt="Theodore Aware"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
      </div>
    </section>
  )
}
