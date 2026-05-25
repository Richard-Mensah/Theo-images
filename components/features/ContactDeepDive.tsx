import { CONTACT_REASONS } from "@/constants/pageDetails"
import SectionHeading from "@/components/ui/SectionHeading"

export default function ContactDeepDive() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
      <SectionHeading
        eyebrow="Best-fit conversations"
        title="The right conversation is specific, useful, and grounded in what can be built."
        description="Theodore's profile is best suited to collaborations where technical intelligence and public responsibility need to sit together."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {CONTACT_REASONS.map((reason) => (
          <article key={reason.title} className="bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{reason.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/68">{reason.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
