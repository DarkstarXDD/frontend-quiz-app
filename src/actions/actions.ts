"use server"

import prisma from "@/lib/prisma"
import { CategorySchema } from "@/lib/types"
import type { CategoryFormState } from "@/lib/types"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

export async function getCorrectAnswerIdAndNextQuestionSlug(
  questionId: string,
  categoryId: string
) {
  const correctAnswerData = await prisma.answer.findFirst({
    where: {
      questionId: questionId,
      isCorrect: true,
    },
    select: {
      id: true,
    },
  })

  const nextQuestionSlug = await prisma.question.findMany({
    where: {
      categoryId: categoryId,
    },
    skip: 1,
    select: {
      slug: true,
    },
  })

  return {
    correctAnswerId: correctAnswerData?.id,
    nextQuestionSlug: nextQuestionSlug[0].slug,
  }
}

export async function createNewCategory(
  state: CategoryFormState,
  formData: FormData
) {
  function createSlug(name: string) {
    return name.toLowerCase().replace(/\s+/g, "-")
  }

  const validatedData = CategorySchema.safeParse({
    name: formData.get("name"),
  })

  if (!validatedData.success) {
    console.log(validatedData.error.flatten().fieldErrors)
    return {
      errors: validatedData.error.flatten().fieldErrors,
    }
  }

  try {
    const category = await prisma.category.create({
      data: {
        name: validatedData.data.name,
        slug: createSlug(validatedData.data.name),
      },
    })
    return { message: `New category added: ${category.name}` }
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return { errors: { name: ["A category with that name already exists"] } }
    }
    return { errors: { name: ["Failed to create category"] } }
  }
}
