import Link from "next/link"
import { NAV_ITEMS } from "@/constants"
import SectionHeading from "@/components/ui/SectionHeading"

const HOME_LINKS = NAV_ITEMS.filter((item) => item.href !== "/")

export default function HomePortalSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="Explore the site"
        title="Home is the full overview. Each page gives the detail."
        description="The homepage keeps Theodore's complete story in one place, while the header pages let visitors move directly into the part of the profile they care about most."
        align="center"
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HOME_LINKS.map((item) => (
          <Link key={item.href} href={item.href} className="bg-white p-5 text-ink shadow-soft hover:text-coral">
            <p className="text-lg font-semibold">{item.label}</p>
            <p className="mt-2 text-sm leading-6 text-ink/62">Open the dedicated {item.label.toLowerCase()} page.</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
