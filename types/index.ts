export type NavItem = {
  label: string
  href: string
}

export type Metric = {
  value: string
  label: string
}

export type FeatureCard = {
  title: string
  description: string
}

export type ExperienceRole = {
  title: string
  company: string
  period: string
  bullets: string[]
}

export type ExpertiseGroup = {
  title: string
  items: string[]
}

export type GalleryImage = {
  src: string
  alt: string
  title: string
  context: string
  orientation: "portrait" | "landscape"
}

export type DetailCard = {
  title: string
  body: string
}

export type TimelineItem = {
  label: string
  title: string
  body: string
}
