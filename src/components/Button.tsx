import type { ReactNode, ComponentProps } from "react"

export const buttonStyles =
  "w-full rounded-md bg-purple-600 text-center p-4 text-sm leading-none text-white shadow-md hover:bg-purple-600/90 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-500 md:rounded-lg md:p-8 md:text-xl"

type ButtonProps = { children: ReactNode } & ComponentProps<"button">

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonStyles}>
      {children}
    </button>
  )
}
