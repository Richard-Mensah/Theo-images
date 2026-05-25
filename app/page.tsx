import AboutSection from "@/components/features/AboutSection"
import ContactSection from "@/components/features/ContactSection"
import ExperienceSection from "@/components/features/ExperienceSection"
import HeroSection from "@/components/features/HeroSection"
import HomePortalSection from "@/components/features/HomePortalSection"
import ImpactSection from "@/components/features/ImpactSection"
import LeadershipSection from "@/components/features/LeadershipSection"
import ResearchSection from "@/components/features/ResearchSection"
import StatsSection from "@/components/features/StatsSection"
import SkillsSection from "@/components/features/SkillsSection"
import PageFrame from "@/components/layout/PageFrame"

export default function HomePage() {
  return (
    <PageFrame>
      <HeroSection />
      <div className="space-y-20 py-16 sm:py-20">
        <HomePortalSection />
        <AboutSection />
        <ResearchSection />
        <SkillsSection />
        <ExperienceSection />
        <StatsSection />
        <LeadershipSection />
        <ImpactSection />
        <ContactSection />
      </div>
    </PageFrame>
  )
}
