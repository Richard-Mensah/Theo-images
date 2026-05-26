import Link from "next/link"
import Image from "next/image"
import { NAV_ITEMS } from "@/constants"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-900/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 sm:px-8 sm:py-4 md:flex-row md:items-center md:justify-between lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/ta-logo.png"
            alt="Theodore Aware logo"
            width={48}
            height={48}
            className="h-9 w-9 rounded-sm transition-opacity duration-200 group-hover:opacity-80 sm:h-12 sm:w-12"
          />
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-white transition group-hover:text-brand-300">
              THEODORE AWARE
            </p>
            <p className="text-xs text-white/50">AI Research · Data Science · Public Impact</p>
          </div>
        </Link>

        <nav className="flex gap-1 overflow-x-auto pb-0.5 md:overflow-visible md:pb-0">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-white/75 transition-all duration-150 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
