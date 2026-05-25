type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export default function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-ink/70">{description}</p> : null}
    </div>
  )
}
