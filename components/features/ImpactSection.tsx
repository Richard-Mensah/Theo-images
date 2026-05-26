import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"

const EDUCATION = [
  {
    institution: "Bangor University",
    degree: "MSc Artificial Intelligence and Data Science",
    year: "2026",
    flag: "🇬🇧",
  },
  {
    institution: "University of Ghana",
    degree: "BSc Statistics and Psychology",
    note: "Econometric modelling and survey analytics",
    flag: "🇬🇭",
  },
]

export default function ImpactSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        {/* Image — face clearly at top */}
        <div className="group relative min-h-[420px] overflow-hidden rounded-sm shadow-soft">
          <Image
            src="/images/theodore-bangor-room.jpg"
            alt="Theodore Aware at Bangor University"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover object-[48%_12%] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/30 to-transparent" />
        </div>

        <div className="self-center">
          <SectionHeading
            eyebrow="Academic foundation"
            title="From statistical modelling to lifelong learning and robust AI."
            description="Theodore's BSc in Statistics and Psychology at the University of Ghana included discrete choice analysis of job preferences among statistics students. His planned PhD direction focuses on lifelong learning and robust AI systems that remain adaptive and safe in dynamic settings."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {EDUCATION.map((edu) => (
              <article
                key={edu.institution}
                className="relative overflow-hidden rounded-sm border border-brand-100 bg-paper p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-300"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-brand-300" />
                <p className="text-2xl">{edu.flag}</p>
                <h3 className="mt-2 font-semibold text-ink">{edu.institution}</h3>
                <p className="mt-1 text-sm font-medium text-brand-700">{edu.degree}</p>
                {edu.year && (
                  <p className="mt-1 text-xs text-ink/50">Graduating {edu.year}</p>
                )}
                {edu.note && (
                  <p className="mt-1 text-xs text-ink/50">{edu.note}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
