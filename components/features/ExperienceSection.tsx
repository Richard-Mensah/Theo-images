import { EXPERIENCE_ROLES } from "@/constants"
import SectionHeading from "@/components/ui/SectionHeading"

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="Professional experience"
        title="A career built across public data systems, finance, operations, and client outcomes."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {EXPERIENCE_ROLES.map((role) => (
          <article key={role.title} className="bg-white p-6 shadow-soft">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-ink">{role.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand-700">{role.company}</p>
              </div>
              <p className="w-max rounded-full bg-coral px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                {role.period}
              </p>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/70">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="border-l-2 border-brand-300 pl-3">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
