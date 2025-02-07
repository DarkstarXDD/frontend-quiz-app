import { Radio } from "react-aria-components"
import AnswerLetter from "./AnswerLetter"

// Should only be used as a child for AnswerGroup
export default function AnswerOption({ value }: { value: string }) {
  return (
    <Radio
      value={value}
      className="group flex w-full items-center gap-4 rounded-md bg-white p-4 shadow-sm ring-purple-600 hover:cursor-pointer data-[focus-visible]:ring data-[selected]:ring md:gap-8 md:rounded-lg lg:p-6"
    >
      <AnswerLetter
        letter={value.toUpperCase()}
        className="group-data-[selected]:bg-purple-600 group-data-[selected]:text-white"
      />
      <p className="text-sm leading-none md:text-xl">4.5 : 1</p>
    </Radio>
  )
}
