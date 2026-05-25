type Props = {
  eyebrow: string
  title: string
  description: string
}

export default function PageIntro({ eyebrow, title, description }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 text-base leading-8 text-ink/70">{description}</p>
      </div>
    </section>
  )
}
