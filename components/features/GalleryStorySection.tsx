import SectionHeading from "@/components/ui/SectionHeading"

const STORIES = [
  {
    title: "Academic presence",
    body: "The Bangor images anchor Theodore's current AI and Data Science journey in a real university environment.",
  },
  {
    title: "Public engagement",
    body: "The radio studio images show the community-facing side of the work: education, mobilisation, and citizen data communication.",
  },
  {
    title: "Personal credibility",
    body: "The portraits make the site feel human, approachable, and specific to Theodore rather than like a generic analytics portfolio.",
  },
]

export default function GalleryStorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
      <SectionHeading
        eyebrow="Visual story"
        title="The images support the same message as the document."
        description="They show Theodore as a researcher, student, public communicator, and practical field professional. The gallery keeps that story visible without overloading the homepage."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {STORIES.map((story) => (
          <article key={story.title} className="bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{story.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/68">{story.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
