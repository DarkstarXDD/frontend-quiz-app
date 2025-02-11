"use server"

import prisma from "@/lib/prisma"

export async function getCorrectAnswerId(questionId: string) {
  const correctAnswerData = await prisma.answer.findFirst({
    where: {
      questionId: questionId,
      isCorrect: true,
    },
    select: {
      id: true,
    },
  })

  return correctAnswerData?.id
}
