import { RESEARCH_CARDS, RESEARCH_STEPS } from "@/constants/pageDetails"
import SectionHeading from "@/components/ui/SectionHeading"

export default function ResearchDeepDive() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
      <SectionHeading
        eyebrow="Research intelligence"
        title="Designed for the moments where ordinary navigation becomes fragile."
        description="Theodore's research is not framed as a laboratory novelty. It is a response to a practical failure mode: systems that depend on GPS can become vulnerable indoors, in dense urban settings, during disasters, or when infrastructure is disrupted."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {RESEARCH_CARDS.map((card) => (
          <article key={card.title} className="bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/68">{card.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 bg-brand-900 p-6 text-white shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold">How the thinking develops</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {RESEARCH_STEPS.map((step) => (
            <article key={step.label} className="border-l-4 border-brand-300 bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">{step.label}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/72">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
