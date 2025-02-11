import { RadioGroup, FieldError } from "react-aria-components"
import AnswerOption from "./AnswerOption"

export default function AnswerGroup({
  answers,
  userAnswerId,
  correctAnswerId,
  isAnswerCorrect,
}: {
  answers: {
    id: string
    answer: string
    questionId: string
  }[]
  userAnswerId: string | null
  correctAnswerId: string | null
  isAnswerCorrect: boolean | null
}) {
  return (
    <RadioGroup
      name="user-answer"
      isRequired
      isDisabled={userAnswerId ? true : false}
      aria-label="answer options"
      className="grid w-full gap-4 md:gap-6 lg:gap-4"
    >
      {answers.map((answer, index) => (
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
  )
}
