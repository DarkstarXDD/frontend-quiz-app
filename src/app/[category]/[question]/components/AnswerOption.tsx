import { Radio } from "react-aria-components"
import AnswerLetter from "./AnswerLetter"

type AnswerOptionType = {
  labelLetter: string
  answer: { id: string; answer: string; isCorrect: boolean; questionId: string }
}

// Should only be used as a child for AnswerGroup
export default function AnswerOption({
  labelLetter,
  answer,
}: AnswerOptionType) {
  return (
    <Radio
      value={answer.id}
      className="group flex w-full items-center gap-4 rounded-md bg-white p-4 shadow-sm ring-purple-600 hover:cursor-pointer data-[focus-visible]:ring data-[selected]:ring md:gap-8 md:rounded-lg lg:p-6"
    >
      <AnswerLetter
        letter={labelLetter}
        className="group-data-[selected]:bg-purple-600 group-data-[selected]:text-white"
      />
      <p className="text-sm leading-none md:text-xl">{answer.answer}</p>
    </Radio>
  )
}
