import CategoryDisplay from "./components/CategoryDisplay"
import QuestionForm from "./components/QuestionForm"

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  return (
    <div className="w-full max-w-2xl lg:max-w-6xl">
      <header className="w-full">
        <CategoryDisplay category={category} />
      </header>

      <main className="mt-12">
        <QuestionForm />
      </main>
    </div>
  )
}
