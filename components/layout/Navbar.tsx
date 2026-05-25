import Link from "next/link"
import { NAV_ITEMS } from "@/constants"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-brand-500 text-white shadow-soft">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <Link href="/" className="block text-white hover:text-white">
          <p className="text-base font-semibold tracking-[0.18em] text-white">THEODORE AWARE</p>
          <p className="text-sm text-white/78">AI Research | Data Science | Public Impact</p>
        </Link>
        <nav className="flex gap-4 overflow-x-auto pb-1 text-sm font-medium text-white md:gap-6 md:overflow-visible md:pb-0">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap border-b-2 border-transparent pb-1 text-white transition hover:border-coral hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
