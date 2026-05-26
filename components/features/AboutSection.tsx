import Image from "next/image"
import { PROFILE_PILLARS } from "@/constants"
import SectionHeading from "@/components/ui/SectionHeading"

const ICONS = ["🔬", "📊", "⚙️"]

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Portrait — face clearly at top */}
        <div className="group relative min-h-[480px] overflow-hidden rounded-sm shadow-soft">
          <Image
            src="/images/theodore-common-room.jpg"
            alt="Theodore Aware in a university common room"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* Bottom fade to blend */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/30 to-transparent" />
        </div>

        <div>
          <SectionHeading
            eyebrow="Profile"
            title="A rare blend of technical research, public-sector leadership, and field-tested analytics."
            description="Theodore brings a decade of cross-sector experience spanning banking, municipal governance, supply chain operations, and healthcare analytics. His current work connects robust AI with practical systems that people can trust in dynamic environments."
          />

          <div className="mt-8 grid gap-3">
            {PROFILE_PILLARS.map((pillar, i) => (
              <article
                key={pillar.title}
                className="group/card flex gap-4 rounded-sm border border-brand-100 bg-gradient-to-r from-brand-50/80 to-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-glow"
              >
                <span className="mt-0.5 text-2xl">{ICONS[i]}</span>
                <div>
                  <h3 className="font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-ink/65">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
