"use server"

import prisma from "@/lib/prisma"

export async function validateAnswer(questionId: string, answerId: string) {
  const correctAnswer = await prisma.answer.findFirst({
    where: {
      questionId: questionId,
      isCorrect: true,
    },
    select: {
      id: true,
    },
  })

  return correctAnswer?.id === answerId
}
