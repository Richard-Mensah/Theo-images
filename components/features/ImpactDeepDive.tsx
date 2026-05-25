import { IMPACT_CARDS } from "@/constants/pageDetails"
import SectionHeading from "@/components/ui/SectionHeading"

export default function ImpactDeepDive() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
      <SectionHeading
        eyebrow="Human impact"
        title="The strongest data work leaves people with better choices."
        description="Theodore's impact is visible in public planning, community mobilisation, risk reduction, and operational improvement. The numbers matter because they point to systems that became easier to manage and easier to trust."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {IMPACT_CARDS.map((card) => (
          <article key={card.title} className="border-l-4 border-brand-500 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/68">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
