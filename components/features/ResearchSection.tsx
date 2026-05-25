import SectionHeading from "@/components/ui/SectionHeading"

const SIGNALS = ["IMU", "WiFi", "LiDAR", "Deep learning", "GPS-denied navigation"]

export default function ResearchSection() {
  return (
    <section id="research" className="bg-ink py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Research thesis</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            KALMNav AI: emergency navigation when GPS goes down.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/72">
            Theodore is developing an AI-enhanced emergency navigation system designed to maintain positioning
            accuracy during GPS downtime. The work contributes to disaster response, autonomous systems, and
            robust AI models that remain reliable in changing environments.
          </p>
        </div>

        <div className="bg-white p-6 text-ink shadow-soft">
          <SectionHeading
            eyebrow="Signal stack"
            title="Sensor fusion for resilient positioning."
            description="The framework integrates multiple signal sources, then uses deep learning to preserve useful navigation estimates when satellite positioning is unavailable."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {SIGNALS.map((signal) => (
              <span key={signal} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-900">
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
