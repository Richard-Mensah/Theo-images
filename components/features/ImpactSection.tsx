import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"

export default function ImpactSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div className="relative min-h-[420px] overflow-hidden rounded-sm shadow-soft">
          <Image
            src="/images/theodore-bangor-room.jpg"
            alt="Theodore Aware at Bangor University"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover object-[48%_35%]"
          />
        </div>

        <div className="self-center">
          <SectionHeading
            eyebrow="Academic foundation"
            title="From statistical modelling to lifelong learning and robust AI."
            description="Theodore's BSc in Statistics and Psychology at the University of Ghana included discrete choice analysis of job preferences among statistics students. His planned PhD direction focuses on lifelong learning and robust AI systems that remain adaptive and safe in dynamic settings."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="bg-paper p-5">
              <h3 className="font-semibold text-ink">Bangor University</h3>
              <p className="mt-2 text-sm leading-6 text-ink/68">MSc Artificial Intelligence and Data Science, 2026.</p>
            </article>
            <article className="bg-paper p-5">
              <h3 className="font-semibold text-ink">University of Ghana</h3>
              <p className="mt-2 text-sm leading-6 text-ink/68">
                BSc Statistics and Psychology, with econometric modelling and survey analytics.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
