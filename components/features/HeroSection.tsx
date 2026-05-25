import Image from "next/image"
import { HERO_METRICS } from "@/constants"
import Button from "@/components/ui/Button"

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/theodore-campus.jpg"
          alt="Theodore Aware on a university campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_34%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/20" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-paper to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-end px-6 pb-12 pt-28 sm:px-8 lg:px-10">
        <div className="max-w-3xl pb-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-100">
            AI Research | Statistics | Public Impact
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Theodore Aware</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            Data scientist, AI researcher, and applied statistician building reliable systems for navigation,
            public planning, finance, and community-centred decision making.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/research">View research focus</Button>
            <Button href="/experience" variant="secondary">
              See experience
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="border-l-4 border-brand-300 bg-white/92 p-5 shadow-soft backdrop-blur">
              <p className="text-3xl font-semibold text-ink">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-ink/65">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
