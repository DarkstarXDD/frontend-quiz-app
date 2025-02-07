"use client"
import { RadioGroup, FieldError } from "react-aria-components"
import AnswerOption from "./AnswerOption"

export default function AnswerGroup() {
  return (
    <RadioGroup
      name="user-answer"
      isRequired
      aria-label="answer options"
      className="grid w-full gap-4 md:gap-6 lg:gap-4"
    >
      <AnswerOption value="a" />
      <AnswerOption value="b" />
      <AnswerOption value="c" />
      <AnswerOption value="d" />

      <FieldError className="text-sm leading-none text-red md:text-lg">
        Please select an answer
      </FieldError>
    </RadioGroup>
  )
}
