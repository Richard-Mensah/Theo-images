import Link from "next/link"

const LINKS = [
  { label: "Research", href: "/research" },
  { label: "Expertise", href: "/expertise" },
  { label: "Experience", href: "/experience" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-900 to-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="block hover:opacity-90">
              <p className="text-base font-semibold tracking-[0.18em] text-white">THEODORE AWARE</p>
              <p className="mt-1 text-sm text-white/60">AI Research · Data Science · Public Impact</p>
            </Link>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Data scientist and AI researcher building reliable systems for navigation, public planning, and
              community-centred decision making.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Pages</p>
            <nav className="mt-4 grid grid-cols-2 gap-2">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Education & contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Education</p>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-sm font-medium text-white">Bangor University</p>
                <p className="text-xs text-white/55">MSc Artificial Intelligence &amp; Data Science, 2026</p>
              </div>
              <div>
                <p className="text-sm font-medium text-white">University of Ghana</p>
                <p className="text-xs text-white/55">BSc Statistics &amp; Psychology</p>
              </div>
            </div>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/30 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-500/50"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white">
          <p>© 2026 Theodore Aware · Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
