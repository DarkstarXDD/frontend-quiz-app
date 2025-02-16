import prisma from "@/lib/prisma"

import NextLink from "next/link"
import CategoryCreateForm from "../components/CategoryCreateForm"
import { Toaster } from "sonner"

export default async function CategoryPage() {
  const categories = await prisma.category.findMany()

  return (
    <main className="grid justify-items-center">
      <div className="grid w-full max-w-96 gap-12">
        <div className="grid gap-2">
          {categories.map((category) => (
            <NextLink
              key={category.id}
              href={`/admin/categories/${category.slug}`}
              className="rounded bg-blue-300 p-3"
            >
              {category.name}
            </NextLink>
          ))}
        </div>

        <div>
          <CategoryCreateForm />
          <Toaster position="top-right" closeButton />
        </div>
      </div>
    </main>
  )
}
