import Image from "next/image"
import { PROFILE_PILLARS } from "@/constants"
import SectionHeading from "@/components/ui/SectionHeading"

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-sm shadow-soft">
          <Image
            src="/images/theodore-common-room.jpg"
            alt="Theodore Aware in a university common room"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-[52%_36%]"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Profile"
            title="A rare blend of technical research, public-sector leadership, and field-tested analytics."
            description="Theodore brings a decade of cross-sector experience spanning banking, municipal governance, supply chain operations, and healthcare analytics. His current work connects robust AI with practical systems that people can trust in dynamic environments."
          />

          <div className="mt-8 grid gap-4">
            {PROFILE_PILLARS.map((pillar) => (
              <article key={pillar.title} className="border-l-4 border-coral bg-white p-5 shadow-soft">
                <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
