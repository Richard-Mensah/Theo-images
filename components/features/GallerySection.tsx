import Image from "next/image"
import { GALLERY_IMAGES } from "@/constants"
import { cn } from "@/lib/utils"

export default function GallerySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_IMAGES.map((image) => (
          <article
            key={image.src}
            className="group relative overflow-hidden rounded-sm shadow-soft"
          >
            <div
              className={cn(
                "relative overflow-hidden",
                image.orientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 31vw, 92vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-base font-semibold text-white">{image.title}</h2>
                <p className="mt-1 text-xs leading-5 text-white/80">{image.context}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
