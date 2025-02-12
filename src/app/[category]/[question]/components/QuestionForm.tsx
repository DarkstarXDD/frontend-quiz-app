"use client"

import { useState } from "react"
import { RadioGroup, FieldError } from "react-aria-components"

import Button from "@/components/Button"
import Link from "@/components/Link"
import AnswerOption from "./AnswerOption"

import { getCorrectAnswerIdAndNextQuestionSlug } from "@/actions/actions"

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

let correctAnswerId: string | undefined
let isUserAnswerCorrect: boolean | undefined
let nextQuestionSlug: string = "/"

export default function QuestionForm({ questionData }: QuestionFormProps) {
  const [userAnswerId, setUserAnswerId] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    const userAnswerId = formData.get("user-answer") as string
    setUserAnswerId(userAnswerId)

    const response = await getCorrectAnswerIdAndNextQuestionSlug(
      questionData.id,
      questionData.categoryId
    )

    correctAnswerId = response.correctAnswerId
    nextQuestionSlug = response.nextQuestionSlug

    isUserAnswerCorrect = correctAnswerId === userAnswerId
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
              isUserAnswerCorrect={isUserAnswerCorrect}
              isCorrectAnswer={correctAnswerId === answer.id}
            />
          ))}

          <FieldError className="text-sm leading-none text-red md:text-lg">
            Please select an answer
          </FieldError>
        </RadioGroup>

        {userAnswerId === null ? (
          <Button>Submit Answer</Button>
        ) : (
          <Link href={nextQuestionSlug}>Next Question</Link>
        )}
      </div>
    </form>
  )
}
