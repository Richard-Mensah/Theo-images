import type { ExperienceRole, ExpertiseGroup, FeatureCard, Metric, NavItem } from "@/types"

export { GALLERY_IMAGES } from "@/constants/gallery"

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Expertise", href: "/expertise" },
  { label: "Experience", href: "/experience" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export const HERO_METRICS: Metric[] = [
  { value: "10+", label: "years across analytics, banking, governance, and operations" },
  { value: "50k+", label: "residents served through municipal data systems" },
  { value: "99%", label: "IBES survey completion through field coordination" },
]

export const PROFILE_PILLARS: FeatureCard[] = [
  {
    title: "AI research with field sense",
    description:
      "MSc Artificial Intelligence and Data Science candidate at Bangor University, developing KALMNav AI for navigation during GPS downtime.",
  },
  {
    title: "Statistics for public decisions",
    description:
      "Municipal statistician experienced in annual reports, budget evidence, citizen-generated data, and development planning.",
  },
  {
    title: "Risk and operations fluency",
    description:
      "Former credit risk analyst and operations manager with experience in financial modelling, portfolio oversight, and supply chain improvement.",
  },
]

export const EXPERTISE_GROUPS: ExpertiseGroup[] = [
  {
    title: "Programming and analytics",
    items: ["Python", "R", "SQL", "Power BI", "Excel", "Data preprocessing"],
  },
  {
    title: "Machine learning",
    items: ["Deep learning", "CNNs", "RNNs", "Sensor fusion", "Predictive modelling"],
  },
  {
    title: "Domain knowledge",
    items: ["Credit risk", "Public-sector statistics", "Supply chain logistics", "Healthcare analytics"],
  },
]

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    title: "Municipal Statistician",
    company: "Abuakwa North Municipal Assembly",
    period: "2022-2025",
    bullets: [
      "Led statistical operations for a municipality of more than 50,000 residents.",
      "Automated the revenue database and improved tracking efficiency by 15%.",
      "Supervised 10 field officers during the national IBES I survey.",
      "Authored the Annual Municipal Statistical Report for budgets and development plans.",
    ],
  },
  {
    title: "Operations Manager",
    company: "Shield Haven Company Ltd",
    period: "2020-2021",
    bullets: [
      "Optimized supply chain workflows and reduced operational delays by 20%.",
      "Managed the Shield Higher Education Loan product, including risk assessment and applicant pipelines.",
    ],
  },
  {
    title: "Occupational Therapist and Sales Manager",
    company: "Forever Living Products",
    period: "2019-2020",
    bullets: [
      "Designed data-driven therapeutic interventions for clients.",
      "Managed sales metrics and market performance analytics.",
    ],
  },
  {
    title: "Relationship Manager / Credit Risk Analyst",
    company: "uniCredit Ghana",
    period: "2014-2019",
    bullets: [
      "Managed a portfolio of more than 200 clients.",
      "Built predictive financial models that reduced non-performing loans by 8%.",
      "Served on Credit Risk and Loan Recovery Committees.",
    ],
  },
]

export const IMPACT_STATS: Metric[] = [
  { value: "15%", label: "revenue tracking efficiency improvement" },
  { value: "8%", label: "reduction in non-performing loans" },
  { value: "20%", label: "reduction in supply chain delays" },
  { value: "3", label: "major sectors impacted: public sector, finance, and supply chain" },
]

export const LEADERSHIP_ITEMS: FeatureCard[] = [
  {
    title: "IBES I municipal coordination",
    description:
      "Mobilised communities, supervised field officers, and achieved a 99% completion rate for the Integrated Business Establishment Survey.",
  },
  {
    title: "Citizen-generated data",
    description:
      "Served as secretary to the Municipal Technical Team and coordinated public education on gender-based violence and solid waste management.",
  },
  {
    title: "Committee leadership",
    description:
      "Contributed to EXECO, MPCU, Budget Committee, Revenue Mobilization Committee, and Social Services Sub-committee work.",
  },
]

export const CERTIFICATIONS = [
  "Administrative Data Quality",
  "Multidimensional Poverty Index",
  "Citizen Generated Data",
  "Project Management",
  "Credit Risk Appraisal",
  "District Development Data Platform",
  "NDPC Planning Guidelines 2026-2029",
]

export const AWARDS = [
  "Star of the Month for Teamwork, Abuakwa North Municipal Assembly, 2022",
  "Best Branch Worker, uniCredit Ghana Ridge Branch, 2016",
]
