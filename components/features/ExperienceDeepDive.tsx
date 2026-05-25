import { EXPERIENCE_THEMES } from "@/constants/pageDetails"
import SectionHeading from "@/components/ui/SectionHeading"

export default function ExperienceDeepDive() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
      <SectionHeading
        eyebrow="Career pattern"
        title="A track record of entering complex systems and making the evidence clearer."
        description="Theodore's career has moved through public institutions, financial services, supply-chain operations, and client care. The common thread is disciplined measurement tied to better decisions."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {EXPERIENCE_THEMES.map((theme) => (
          <article key={theme.title} className="bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{theme.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/68">{theme.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 bg-white p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-ink">What this experience signals</h2>
        <p className="mt-4 max-w-4xl text-base leading-8 text-ink/70">
          This is not a narrow technical profile. It is the profile of someone who understands models, people,
          reporting lines, field coordination, and institutional trust. That mix matters for AI and data work
          because useful systems must survive contact with real users, real constraints, and real accountability.
        </p>
      </div>
    </section>
  )
}
