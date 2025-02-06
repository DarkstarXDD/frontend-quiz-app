import QuestionCategories from "@/app/components/QuestionCategories"

export default function HomePage() {
  return (
    <main className="grid w-full justify-items-center">
      <div className="flex w-full max-w-2xl flex-col gap-10 md:gap-16 lg:max-w-6xl lg:flex-row lg:items-start lg:justify-between">
        <div className="grid gap-4 lg:gap-12">
          <h1 className="text-3xl font-light leading-none md:text-4xl">
            Welcome to the <br />
            <span className="font-medium">Frontend Quiz!</span>
          </h1>
          <p className="text-xs italic text-grey-500 md:text-md">
            Pick a subject to get started.
          </p>
        </div>

        <QuestionCategories className="lg:max-w-xl" />
      </div>
    </main>
  )
}
