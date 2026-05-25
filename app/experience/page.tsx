import ExperienceDeepDive from "@/components/features/ExperienceDeepDive"
import ExperienceSection from "@/components/features/ExperienceSection"
import PageFrame from "@/components/layout/PageFrame"
import PageIntro from "@/components/ui/PageIntro"

export const metadata = {
  title: "Experience | Theodore Aware",
  description: "Professional experience for Theodore Aware.",
}

export default function ExperiencePage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Experience"
        title="Cross-sector leadership across governance, finance, operations, and analytics."
        description="A static career page covering Theodore's municipal, banking, operations, and client-facing work."
      />
      <div className="pb-16 sm:pb-20">
        <ExperienceSection />
      </div>
      <ExperienceDeepDive />
    </PageFrame>
  )
}
