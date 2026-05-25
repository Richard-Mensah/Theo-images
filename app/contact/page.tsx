import ContactDeepDive from "@/components/features/ContactDeepDive"
import ContactSection from "@/components/features/ContactSection"
import PageFrame from "@/components/layout/PageFrame"
import PageIntro from "@/components/ui/PageIntro"

export const metadata = {
  title: "Contact | Theodore Aware",
  description: "Contact and collaboration page for Theodore Aware.",
}

export default function ContactPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Contact"
        title="Connect around research, data strategy, and public-interest AI."
        description="A collaboration page for applied AI, robust analytics, doctoral research, and evidence-led public systems."
      />
      <div className="pb-16 sm:pb-20">
        <ContactSection />
      </div>
      <ContactDeepDive />
    </PageFrame>
  )
}
