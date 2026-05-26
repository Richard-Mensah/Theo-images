import { EXPERIENCE_ROLES } from "@/constants"
import SectionHeading from "@/components/ui/SectionHeading"

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="Professional experience"
        title="A career built across public data systems, finance, operations, and client outcomes."
      />

      <div className="relative mt-12">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-brand-300 to-transparent sm:left-7" />

        <div className="space-y-8">
          {EXPERIENCE_ROLES.map((role, i) => (
            <div key={role.title} className="relative flex gap-6 sm:gap-8">
              {/* Timeline dot */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white shadow-glow sm:h-14 sm:w-14 sm:text-sm">
                {role.period.slice(0, 4)}
              </div>

              {/* Card */}
              <article className="flex-1 rounded-sm bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{role.title}</h3>
                    <p className="mt-0.5 text-sm font-medium text-brand-700">{role.company}</p>
                  </div>
                  <span className="w-max rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-900">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/68">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
