import { EXPERTISE_GROUPS } from "@/constants"
import SectionHeading from "@/components/ui/SectionHeading"

const ACCENTS = [
  { border: "border-t-4 border-brand-500", tag: "bg-brand-50 text-brand-900 border-brand-200" },
  { border: "border-t-4 border-coral", tag: "bg-red-50 text-red-900 border-red-200" },
  { border: "border-t-4 border-brand-300", tag: "bg-indigo-50 text-indigo-900 border-indigo-200" },
]

export default function SkillsSection() {
  return (
    <section id="expertise" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="Technical expertise"
        title="Practical AI and analytics capability across research and operations."
        description="Theodore's work sits at the point where modelling skill, domain fluency, and public service meet."
        align="center"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE_GROUPS.map((group, i) => (
          <article
            key={group.title}
            className={`overflow-hidden rounded-sm bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${ACCENTS[i].border}`}
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1 text-xs font-medium transition hover:opacity-80 ${ACCENTS[i].tag}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
