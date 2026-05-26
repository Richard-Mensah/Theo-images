import Image from "next/image"
import { HERO_METRICS } from "@/constants"
import Button from "@/components/ui/Button"

const METRIC_ACCENTS = ["bg-brand-400", "bg-coral", "bg-brand-300"] as const

export default function HeroSection() {
  return (
    <section className="relative grid min-h-[calc(100svh-56px)] overflow-hidden lg:grid-cols-[55%_45%]">
      {/* Left — text panel */}
      <div className="relative flex flex-col justify-between bg-gradient-to-br from-brand-900 via-ink to-brand-800 px-6 py-16 sm:px-10 lg:px-16">
        {/* Dot-grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-16 right-0 h-64 w-64 rounded-full bg-coral/10 blur-3xl" />

        <div className="relative z-10 max-w-xl">
          {/* Eyebrow with pulsing live-dot */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-300/30 bg-brand-500/20 px-4 py-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
              AI Research · Statistics · Public Impact
            </span>
          </div>

          <h1 className="mt-7 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[1.06]">
            Theodore<br />
            <span className="bg-gradient-to-r from-white to-brand-300 bg-clip-text text-transparent">
              Aware
            </span>
          </h1>

          {/* Accent rule */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-0.5 w-12 rounded-full bg-coral" />
            <span className="h-0.5 w-5 rounded-full bg-brand-400/50" />
          </div>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Data scientist, AI researcher, and applied statistician building reliable
            systems for navigation, public planning, finance, and community-centred
            decision making.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/research">View research focus</Button>
            <Button href="/experience" variant="secondary">See experience</Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="relative z-10 mt-12 grid gap-3 sm:grid-cols-3">
          {HERO_METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className={`mb-3 h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-14 ${METRIC_ACCENTS[i]}`} />
              <p className="text-3xl font-bold text-white">{metric.value}</p>
              <p className="mt-1.5 text-xs leading-5 text-white/55">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — portrait (desktop) */}
      <div className="relative hidden bg-gradient-to-bl from-brand-800 via-brand-900 to-ink lg:block">
        {/* Framed inset — brand bg visible as border */}
        <div className="absolute inset-5 overflow-hidden rounded-2xl shadow-[0_32px_80px_rgba(16,25,70,0.6)] ring-1 ring-white/10">
          <Image
            src="/images/theodore-portrait-blue.jpg"
            alt="Theodore Aware"
            fill
            priority
            sizes="45vw"
            className="object-cover object-[50%_15%]"
          />
          {/* Bottom fade into credential card */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent" />

          {/* Floating credential card */}
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-ink/65 px-5 py-4 backdrop-blur-md">
            <p className="text-sm font-semibold text-white">MSc Artificial Intelligence &amp; Data Science</p>
            <p className="mt-0.5 text-xs text-white/55">Bangor University · Graduating 2026</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-brand-500/40 px-2.5 py-0.5 text-[11px] font-medium text-brand-300 ring-1 ring-brand-400/30">KALMNav AI</span>
              <span className="rounded-full bg-coral/20 px-2.5 py-0.5 text-[11px] font-medium text-coral/90 ring-1 ring-coral/20">Public Data</span>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/70 ring-1 ring-white/15">Lifelong ML</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile portrait */}
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
