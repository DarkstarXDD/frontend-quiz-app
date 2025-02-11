"use client"

import { useState } from "react"
import AnswerGroup from "./AnswerGroup"
import Button from "@/components/Button"
import { validateAnswer } from "@/actions/actions"

type QuestionDataType = {
  id: string
  question: string
  slug: string
  categoryId: string
  answers: {
    id: string
    answer: string
    questionId: string
  }[]
}

export default function QuestionForm({
  questionData,
}: {
  questionData: QuestionDataType
}) {
  const [userAnswerId, setUserAnswerId] = useState<string | null>(null)
  const [correctAnswerId, setCorrectAnswerId] = useState<string | null>(null)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)

  async function handleSubmit(formData: FormData) {
    const userAnswerId = formData.get("user-answer") as string
    const correctAnswerData = await validateAnswer(questionData.id)

    setUserAnswerId(userAnswerId)
    setCorrectAnswerId(correctAnswerData?.id ?? null)
    setIsAnswerCorrect(correctAnswerData?.id === userAnswerId)
  }

  return (
    <form
      action={handleSubmit}
      className="grid items-start gap-10 lg:justify-between lg:[grid-template-columns:minmax(0,30rem)_minmax(0,36rem)]"
    >
      <div className="grid gap-4 md:gap-6">
        <p className="text-xs font-normal italic text-grey-500 md:text-md">
          Question 6 of 10
        </p>
        <p className="text-md leading-tight md:text-2xl">
          {questionData.question}
        </p>
      </div>

      <div className="grid gap-4 md:gap-8">
        <AnswerGroup
          answers={questionData.answers}
          userAnswerId={userAnswerId}
          correctAnswerId={correctAnswerId}
          isAnswerCorrect={isAnswerCorrect}
        />
        <Button>Submit Answer</Button>
      </div>
    </form>
  )
}
