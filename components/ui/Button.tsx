import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export default function Button({ children, href, onClick, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
  const styles =
    variant === "secondary"
      ? "border-2 border-brand-200 bg-white text-brand-900 hover:border-brand-500 hover:text-brand-500 hover:bg-brand-50 hover:-translate-y-px"
      : "bg-brand-500 text-white hover:bg-coral hover:shadow-[0_8px_24px_rgba(225,29,46,0.35)] hover:-translate-y-px"

  if (href) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cn(base, styles, className)}>
      {children}
    </button>
  )
}
