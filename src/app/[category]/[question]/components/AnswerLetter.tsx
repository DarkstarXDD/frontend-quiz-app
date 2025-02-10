import { twMerge } from "tailwind-merge"

export default function AnswerLetter({
  letter,
  className,
}: {
  letter: string
  className: string
}) {
  return (
    <div
      className={twMerge(
        "flex size-10 shrink-0 items-center justify-center rounded-md bg-grey-50 text-sm leading-none text-grey-500 md:size-14 md:rounded-xl md:text-xl",
        className
      )}
    >
      <p>{letter}</p>
    </div>
  )
}
