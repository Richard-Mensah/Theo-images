import { IMPACT_STATS } from "@/constants"

export default function StatsSection() {
  return (
    <section id="impact" className="bg-brand-900 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        {IMPACT_STATS.map((item) => (
          <div key={item.label} className="border-t-4 border-brand-300 bg-white/10 p-6 backdrop-blur">
            <p className="text-4xl font-semibold">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-white/72">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
