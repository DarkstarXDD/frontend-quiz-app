import QuestionCategories from "@/app/components/QuestionCategories"

export default function HomePage() {
  return (
    <main>
      <div className="grid gap-4 lg:gap-12">
        <h1 className="text-3xl font-light leading-none md:text-4xl">
          Welcome to the <br />
          <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p className="text-xs italic text-grey-500 md:text-md">
          Pick a subject to get started.
        </p>

        <QuestionCategories />
      </div>
    </main>
  )
}
