import CategoryDisplay from "./components/CategoryDisplay"
import Question from "./components/Question"

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  return (
    <>
      <header>
        <CategoryDisplay category={category} />
      </header>

      <main>
        <Question />
      </main>
    </>
  )
}
