import { EXPERTISE_CARDS, EXPERTISE_WORKFLOW } from "@/constants/pageDetails"
import SectionHeading from "@/components/ui/SectionHeading"

export default function ExpertiseDeepDive() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
      <SectionHeading
        eyebrow="Applied capability"
        title="Technical depth is strongest when it is connected to a real decision."
        description="Theodore's expertise is deliberately practical: he can build models, but he also understands committee reports, survey fieldwork, credit-risk conversations, and the pressure to make data useful."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {EXPERTISE_CARDS.map((card) => (
          <article key={card.title} className="border-t-4 border-coral bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/68">{card.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {EXPERTISE_WORKFLOW.map((step) => (
          <article key={step.label} className="bg-ink p-6 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">{step.label}</p>
            <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/72">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
