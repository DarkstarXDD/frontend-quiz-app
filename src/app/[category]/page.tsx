import CategoryDisplay from "./components/CategoryDisplay"
import QuestionForm from "./components/QuestionForm"

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  return (
    <>
      <header className="w-full">
        <CategoryDisplay category={category} />
      </header>

      <main className="mt-12 lg:mt-20">
        <QuestionForm />
      </main>
    </>
  )
}
