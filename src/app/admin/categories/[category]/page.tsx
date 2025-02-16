import prisma from "@/lib/prisma"

type ParamsType = Promise<{ category: string }>

export default async function AdminQuestionsPage({
  params,
}: {
  params: ParamsType
}) {
  const { category } = await params
  console.log(category)

  const categoryData = await prisma.category.findUnique({
    where: {
      slug: category,
    },
  })

  console.log(categoryData?.id)

  const questions = await prisma.question.findMany({
    where: {
      categoryId: categoryData?.id,
    },
  })

  console.log(questions)

  return (
    <main>
      <div className="grid gap-2">
        {questions.map((question) => (
          <p key={question.id} className="rounded bg-green-500 p-4">
            {question.question}
          </p>
        ))}
      </div>
    </main>
  )
}
