import { IMPACT_STATS } from "@/constants"

export default function StatsSection() {
  return (
    <section id="impact" className="relative overflow-hidden bg-gradient-to-r from-brand-900 via-brand-700 to-brand-500 py-14 text-white">
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        {IMPACT_STATS.map((item) => (
          <div
            key={item.label}
            className="group rounded-sm border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/30"
          >
            <div className="mb-3 h-0.5 w-10 bg-coral transition-all duration-300 group-hover:w-16" />
            <p className="text-5xl font-bold tracking-tight">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-white/75">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
