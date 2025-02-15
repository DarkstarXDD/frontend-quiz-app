import prisma from "@/lib/prisma"

import CategoryCreateForm from "../components/CategoryCreateForm"
import { Toaster } from "sonner"

export default async function CategoryPage() {
  const categories = await prisma.category.findMany()

  return (
    <main className="grid justify-items-center">
      <div className="grid w-full max-w-96 gap-12">
        <div className="grid w-full gap-2">
          {categories.map((category) => (
            <p key={category.id} className="rounded bg-blue-300 p-3">
              {category.name}
            </p>
          ))}
        </div>

        <div className="grid w-full gap-4">
          <CategoryCreateForm />
          <Toaster position="top-right" closeButton />
        </div>
      </div>
    </main>
  )
}
