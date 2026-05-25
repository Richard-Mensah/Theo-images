import type { DetailCard, TimelineItem } from "@/types"

export const RESEARCH_CARDS: DetailCard[] = [
  {
    title: "The problem",
    body: "Emergency teams, autonomous systems, and field operations can lose reliable satellite positioning exactly when conditions become most demanding.",
  },
  {
    title: "The research direction",
    body: "KALMNav AI combines IMU, WiFi, and LiDAR signals with deep learning so navigation estimates can remain useful during GPS downtime.",
  },
  {
    title: "The larger ambition",
    body: "Theodore's planned PhD direction extends this work toward lifelong learning and robust AI systems that adapt without becoming unsafe.",
  },
]

export const RESEARCH_STEPS: TimelineItem[] = [
  {
    label: "01",
    title: "Gather imperfect signals",
    body: "Treat each sensor as a partial witness rather than a perfect source, then design the system around uncertainty from the beginning.",
  },
  {
    label: "02",
    title: "Fuse and learn",
    body: "Use statistical reasoning and deep learning to combine signal streams, identify useful patterns, and reduce drift in positioning.",
  },
  {
    label: "03",
    title: "Validate for pressure",
    body: "Measure the system against the real question: can it support decisions when infrastructure, weather, buildings, or emergencies reduce GPS reliability?",
  },
]

export const EXPERTISE_CARDS: DetailCard[] = [
  {
    title: "Model builder",
    body: "Comfortable moving from exploratory analysis to predictive modelling, including credit-risk models, deep learning, and sensor-fusion experimentation.",
  },
  {
    title: "Public-data translator",
    body: "Experienced turning administrative data, survey results, and community evidence into reports that committees and budget teams can use.",
  },
  {
    title: "Operational analyst",
    body: "Uses dashboards, workflow analysis, and performance metrics to reduce delays, improve tracking, and make progress visible to decision makers.",
  },
]

export const EXPERTISE_WORKFLOW: TimelineItem[] = [
  {
    label: "Map",
    title: "Understand the decision",
    body: "Start with the people who will use the evidence, the operational pressure they face, and the decision that must improve.",
  },
  {
    label: "Model",
    title: "Build the analytical system",
    body: "Choose the simplest reliable statistical or AI method, document the assumptions, and keep the model explainable enough for its context.",
  },
  {
    label: "Move",
    title: "Turn analysis into action",
    body: "Package insights through reports, dashboards, field coordination, or committee briefings so the work changes what happens next.",
  },
]

export const EXPERIENCE_THEMES: DetailCard[] = [
  {
    title: "Municipal governance",
    body: "Led statistics for Abuakwa North Municipal Assembly, supporting planning, budgets, reporting, field supervision, and evidence-led development.",
  },
  {
    title: "Finance and risk",
    body: "Managed client portfolios at uniCredit Ghana and built predictive models that helped reduce non-performing loans by 8%.",
  },
  {
    title: "Operations and service",
    body: "Improved supply-chain workflows, assessed education-loan risk, and used data to guide client interventions and sales performance.",
  },
]

export const IMPACT_CARDS: DetailCard[] = [
  {
    title: "Trust in public numbers",
    body: "Theodore's municipal work strengthened the evidence base for local budgets, development plans, and public communication.",
  },
  {
    title: "Community participation",
    body: "His IBES coordination and radio engagement show an ability to bring people into data work rather than treating analytics as an office exercise.",
  },
  {
    title: "Measurable improvement",
    body: "The record includes 99% survey completion, 15% better revenue tracking, 20% fewer operational delays, and improved credit-risk outcomes.",
  },
]

export const CONTACT_REASONS: DetailCard[] = [
  {
    title: "Research collaboration",
    body: "For robust AI, emergency navigation, sensor fusion, lifelong learning systems, or PhD-aligned research conversations.",
  },
  {
    title: "Analytics leadership",
    body: "For projects that need data strategy, modelling, dashboards, public-sector reporting, or operational performance improvement.",
  },
  {
    title: "Public-interest technology",
    body: "For work where ethical AI, community impact, and practical governance matter as much as technical performance.",
  },
]
