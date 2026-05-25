import GallerySection from "@/components/features/GallerySection"
import GalleryStorySection from "@/components/features/GalleryStorySection"
import PageFrame from "@/components/layout/PageFrame"
import PageIntro from "@/components/ui/PageIntro"

export const metadata = {
  title: "Gallery | Theodore Aware",
  description: "Photo gallery for Theodore Aware.",
}

export default function GalleryPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Gallery"
        title="Photos from academic, public-service, and personal moments."
        description="All local images supplied for the Theodore Aware website are gathered here as a static gallery."
      />
      <GalleryStorySection />
      <GallerySection />
    </PageFrame>
  )
}
