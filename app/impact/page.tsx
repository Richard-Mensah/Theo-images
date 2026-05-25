import ImpactDeepDive from "@/components/features/ImpactDeepDive"
import ImpactSection from "@/components/features/ImpactSection"
import LeadershipSection from "@/components/features/LeadershipSection"
import StatsSection from "@/components/features/StatsSection"
import PageFrame from "@/components/layout/PageFrame"
import PageIntro from "@/components/ui/PageIntro"

export const metadata = {
  title: "Impact | Theodore Aware",
  description: "Public impact, leadership, awards, and academic foundation for Theodore Aware.",
}

export default function ImpactPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Impact"
        title="Measured results in public service, finance, and community data."
        description="Key outcomes, leadership roles, awards, certifications, and academic foundations from Theodore's document."
      />
      <div className="space-y-20 pb-16 sm:pb-20">
        <StatsSection />
        <ImpactDeepDive />
        <LeadershipSection />
        <ImpactSection />
      </div>
    </PageFrame>
  )
}
