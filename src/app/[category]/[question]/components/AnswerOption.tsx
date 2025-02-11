import { Radio } from "react-aria-components"
import AnswerLetter from "./AnswerLetter"
import { twMerge } from "tailwind-merge"
import { FaRegCircleCheck } from "react-icons/fa6"
import { CgCloseO } from "react-icons/cg"

type AnswerOptionType = {
  labelLetter: string
  answer: { id: string; answer: string; questionId: string }
  isSelected: boolean
  isUserAnswerCorrect: boolean | undefined
  isCorrectAnswer: boolean
}

// Should only be used as a child for RAC RadioGroup
export default function AnswerOption({
  labelLetter,
  answer,
  isSelected,
  isUserAnswerCorrect,
  isCorrectAnswer,
}: AnswerOptionType) {
  return (
    <Radio
      value={answer.id}
      className={twMerge(
        "group flex w-full cursor-pointer items-center gap-4 rounded-md bg-white p-4 shadow-sm ring-purple-600 data-[disabled]:cursor-not-allowed data-[focus-visible]:ring data-[selected]:ring md:gap-8 md:rounded-lg lg:p-6",
        isSelected && isUserAnswerCorrect && "ring ring-green-500",
        isSelected && !isUserAnswerCorrect && "ring ring-red"
      )}
    >
      <AnswerLetter
        letter={labelLetter}
        className={twMerge(
          "group-data-[selected]:bg-purple-600 group-data-[selected]:text-white",
          isSelected && isUserAnswerCorrect && "bg-green-500 text-white",
          isSelected && !isUserAnswerCorrect && "bg-red text-white"
        )}
      />
      <p className="text-sm leading-none md:text-xl">{answer.answer}</p>
      <p className="flex-grow text-right">
        {isCorrectAnswer && isSelected && (
          <FaRegCircleCheck className="size-6 text-green-500 md:size-7" />
        )}
        {isCorrectAnswer && !isSelected && (
          <FaRegCircleCheck className="size-6 text-green-500 md:size-7" />
        )}
        {!isCorrectAnswer && isSelected && (
          <CgCloseO className="size-6 text-red md:size-7" />
        )}
      </p>
    </Radio>
  )
}
