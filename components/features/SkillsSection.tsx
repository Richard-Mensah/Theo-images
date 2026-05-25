import { EXPERTISE_GROUPS } from "@/constants"
import SectionHeading from "@/components/ui/SectionHeading"

export default function SkillsSection() {
  return (
    <section id="expertise" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="Technical expertise"
        title="Practical AI and analytics capability across research and operations."
        description="Theodore's work sits at the point where modelling skill, domain fluency, and public service meet."
        align="center"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {EXPERTISE_GROUPS.map((group) => (
          <article key={group.title} className="bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-ink/10 px-3 py-2 text-sm text-ink/70">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
