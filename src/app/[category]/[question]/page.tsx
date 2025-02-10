import CategoryDisplay from "./components/CategoryDisplay"
import QuestionForm from "./components/QuestionForm"
import prisma from "@/lib/prisma"

type ParamsType = Promise<{ category: string; question: string }>

export default async function QuestionPage({ params }: { params: ParamsType }) {
  const { category, question: questionSlug } = await params

  const questionData = await prisma.question.findUnique({
    where: {
      slug: questionSlug,
    },
    include: { answers: true },
  })

  console.log(questionData)

  if (!questionData) {
    return <p>Question not found</p>
  }

  return (
    <>
      <header className="w-full">
        <CategoryDisplay category={category} />
      </header>

      <main className="mt-12 lg:mt-20">
        <QuestionForm questionData={questionData} />
      </main>
    </>
  )
}
