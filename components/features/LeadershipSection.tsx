import Image from "next/image"
import { AWARDS, CERTIFICATIONS, LEADERSHIP_ITEMS } from "@/constants"
import SectionHeading from "@/components/ui/SectionHeading"

export default function LeadershipSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Leadership and service"
            title="Community data work with visible public engagement."
            description="Theodore's leadership includes survey coordination, citizen data education, committee service, and public communication on local development issues."
          />

          <div className="mt-8 grid gap-4">
            {LEADERSHIP_ITEMS.map((item) => (
              <article key={item.title} className="border-l-4 border-brand-500 bg-white p-5 shadow-soft">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="relative min-h-[360px] overflow-hidden rounded-sm shadow-soft">
            <Image
              src="/images/theodore-ibes-radio.jpg"
              alt="Theodore Aware contributing to public education through local radio"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Training</p>
              <p className="mt-3 text-sm leading-6 text-ink/68">{CERTIFICATIONS.join(", ")}</p>
            </div>
            <div className="bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Recognition</p>
              <p className="mt-3 text-sm leading-6 text-ink/68">{AWARDS.join(". ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
