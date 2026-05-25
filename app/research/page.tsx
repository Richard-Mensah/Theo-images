import ResearchDeepDive from "@/components/features/ResearchDeepDive"
import ResearchSection from "@/components/features/ResearchSection"
import PageFrame from "@/components/layout/PageFrame"
import PageIntro from "@/components/ui/PageIntro"

export const metadata = {
  title: "Research | Theodore Aware",
  description: "KALMNav AI research by Theodore Aware.",
}

export default function ResearchPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Research"
        title="Robust AI for navigation when systems are under pressure."
        description="A focused look at Theodore's KALMNav AI thesis and its contribution to GPS-denied emergency navigation, disaster response, autonomous systems, and adaptive AI."
      />
      <ResearchSection />
      <ResearchDeepDive />
    </PageFrame>
  )
}
