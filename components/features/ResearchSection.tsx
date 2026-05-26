import SectionHeading from "@/components/ui/SectionHeading"

const SIGNALS = ["IMU", "WiFi", "LiDAR", "Deep learning", "GPS-denied navigation"]

export default function ResearchSection() {
  return (
    <section id="research" className="relative overflow-hidden bg-gradient-to-br from-ink via-brand-900 to-brand-700 py-16 text-white sm:py-20">
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-60 w-60 rounded-full bg-coral/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-brand-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
            Research thesis
          </span>
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl sm:text-4xl">
            KALMNav AI: emergency navigation when GPS goes down.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70 sm:leading-8">
            Theodore is developing an AI-enhanced emergency navigation system designed to maintain positioning
            accuracy during GPS downtime. The work contributes to disaster response, autonomous systems, and
            robust AI models that remain reliable in changing environments.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-sm bg-white p-6 text-ink shadow-soft">
          {/* Gradient top strip */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-coral" />
          <SectionHeading
            eyebrow="Signal stack"
            title="Sensor fusion for resilient positioning."
            description="The framework integrates multiple signal sources, then uses deep learning to preserve useful navigation estimates when satellite positioning is unavailable."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {SIGNALS.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-100"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
