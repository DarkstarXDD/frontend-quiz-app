"use server"

import prisma from "@/lib/prisma"

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
