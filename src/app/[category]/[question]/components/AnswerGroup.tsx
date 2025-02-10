"use client"
import { RadioGroup, FieldError } from "react-aria-components"
import AnswerOption from "./AnswerOption"

export default function AnswerGroup({
  answers,
}: {
  answers: {
    id: string
    answer: string
    isCorrect: boolean
    questionId: string
  }[]
}) {
  return (
    <RadioGroup
      name="user-answer"
      isRequired
      aria-label="answer options"
      className="grid w-full gap-4 md:gap-6 lg:gap-4"
    >
      {answers.map((answer, index) => (
        <AnswerOption
          key={answer.id}
          labelLetter={String.fromCharCode(65 + index)}
          answer={answer}
        />
      ))}

      <FieldError className="text-sm leading-none text-red md:text-lg">
        Please select an answer
      </FieldError>
    </RadioGroup>
  )
}
