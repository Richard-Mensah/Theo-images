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

          <div className="mt-8 grid gap-3">
            {LEADERSHIP_ITEMS.map((item) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-sm border-l-4 border-brand-500 bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-coral"
              >
                <div>
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {/* Radio image */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-soft">
            <Image
              src="/images/theodore-ibes-radio.jpg"
              alt="Theodore Aware contributing to public education through local radio"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          {/* Certifications */}
          <div className="rounded-sm bg-white p-4 shadow-soft sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Training &amp; Certifications</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-900"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="rounded-sm bg-white p-4 shadow-soft sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Recognition</p>
            <div className="mt-3 space-y-2">
              {AWARDS.map((award) => (
                <div key={award} className="flex items-start gap-2">
                  <span className="mt-1 text-coral">★</span>
                  <p className="text-sm leading-6 text-ink/70">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
