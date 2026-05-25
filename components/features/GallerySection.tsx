import Image from "next/image"
import { GALLERY_IMAGES } from "@/constants"
import { cn } from "@/lib/utils"

export default function GallerySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_IMAGES.map((image) => (
          <article key={image.src} className="bg-white shadow-soft">
            <div
              className={cn(
                "relative overflow-hidden",
                image.orientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]",
              )}
            >
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover" />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-ink">{image.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/65">{image.context}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
