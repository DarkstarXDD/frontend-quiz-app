import CategoryCreateForm from "../components/CategoryCreateForm"
import { Toaster } from "sonner"

export default function CategoryPage() {
  return (
    <main className="grid justify-items-center">
      <div className="grid w-full max-w-96 gap-4">
        <CategoryCreateForm />
        <Toaster position="top-right" closeButton />
      </div>
    </main>
  )
}
