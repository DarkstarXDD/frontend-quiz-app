import CategoryLink from "./components/CategoryLink"

import prisma from "@/lib/prisma"

export default async function HomePage() {
  const questionCategories = await prisma.category.findMany({
    include: {
      questions: {
        take: 1,
      },
    },
  })

  return (
    <main className="grid w-full items-start gap-10 md:gap-16 lg:justify-between lg:[grid-template-columns:minmax(0,30rem)_minmax(0,36rem)]">
      <div className="grid gap-4 lg:gap-12">
        <h1 className="text-3xl font-light leading-none md:text-4xl">
          Welcome to the <br />
          <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p className="text-xs italic text-grey-500 md:text-md">
          Pick a subject to get started.
        </p>
      </div>

      <ul className="grid w-full gap-4 md:gap-6 lg:gap-4">
        {questionCategories.map((category) => (
          <li key={category.id}>
            <CategoryLink
              categoryName={category.name}
              firstQuestionSlug={category.questions[0].slug}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
