import ExpertiseDeepDive from "@/components/features/ExpertiseDeepDive"
import SkillsSection from "@/components/features/SkillsSection"
import PageFrame from "@/components/layout/PageFrame"
import PageIntro from "@/components/ui/PageIntro"

export const metadata = {
  title: "Expertise | Theodore Aware",
  description: "Technical expertise, tools, and domain knowledge for Theodore Aware.",
}

export default function ExpertisePage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Expertise"
        title="AI, statistics, and operational analytics in one practical toolkit."
        description="Theodore combines programming, machine learning, public-sector statistics, credit risk, and operational analysis."
      />
      <div className="pb-16 sm:pb-20">
        <SkillsSection />
      </div>
      <ExpertiseDeepDive />
    </PageFrame>
  )
}
