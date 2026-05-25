import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
  const styles =
    variant === "secondary"
      ? "border border-brand-100 bg-white/95 text-brand-900 hover:border-coral/60 hover:text-coral"
      : "bg-brand-500 text-white hover:bg-coral"

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
