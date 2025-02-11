"use client"

import { useState } from "react"
import { RadioGroup, FieldError } from "react-aria-components"

import Button from "@/components/Button"
import AnswerOption from "./AnswerOption"

import { getCorrectAnswerId } from "@/actions/actions"

type QuestionFormProps = {
  questionData: {
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
}

export default function QuestionForm({ questionData }: QuestionFormProps) {
  const [userAnswerId, setUserAnswerId] = useState<string | null>(null)
  const [correctAnswerId, setCorrectAnswerId] = useState<string | null>(null)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)

  async function handleSubmit(formData: FormData) {
    const userAnswerId = formData.get("user-answer") as string
    const correctAnswerId = await getCorrectAnswerId(questionData.id)

    setUserAnswerId(userAnswerId)
    setCorrectAnswerId(correctAnswerId ?? null)
    setIsAnswerCorrect(correctAnswerId === userAnswerId)
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
        <RadioGroup
          name="user-answer"
          isRequired
          isDisabled={userAnswerId ? true : false}
          aria-label="answer options"
          className="grid w-full gap-4 md:gap-6 lg:gap-4"
        >
          {questionData.answers.map((answer, index) => (
            <AnswerOption
              key={answer.id}
              labelLetter={String.fromCharCode(65 + index)}
              answer={answer}
              isSelected={userAnswerId === answer.id}
              isAnswerCorrect={isAnswerCorrect}
              isCorrectAnswer={correctAnswerId === answer.id}
            />
          ))}

          <FieldError className="text-sm leading-none text-red md:text-lg">
            Please select an answer
          </FieldError>
        </RadioGroup>
        <Button>Submit Answer</Button>
      </div>
    </form>
  )
}
