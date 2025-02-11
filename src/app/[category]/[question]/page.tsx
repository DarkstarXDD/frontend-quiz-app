import CategoryDisplay from "./components/CategoryDisplay"
import QuestionForm from "./components/QuestionForm"
import prisma from "@/lib/prisma"

type ParamsType = Promise<{ category: string; question: string }>

export default async function QuestionPage({ params }: { params: ParamsType }) {
  const { category: categorySlug, question: questionSlug } = await params

  const categoryData = await prisma.category.findUnique({
    where: { slug: categorySlug },
  })

  const questionData = await prisma.question.findUnique({
    where: {
      slug: questionSlug,
    },
    include: {
      answers: {
        omit: {
          isCorrect: true,
        },
      },
    },
  })

  if (!categoryData) {
    return <p>Category not found</p>
  }

  if (!questionData) {
    return <p>Question not found</p>
  }

  return (
    <>
      <header className="w-full">
        <CategoryDisplay category={categoryData.name} />
      </header>

      <main className="mt-12 lg:mt-20">
        <QuestionForm questionData={questionData} />
      </main>
    </>
  )
}
