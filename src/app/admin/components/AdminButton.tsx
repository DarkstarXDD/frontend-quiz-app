import type { ReactNode, ComponentProps } from "react"

type AdminButtonProps = {
  children: ReactNode
} & ComponentProps<"button">

export const adminButtonStyles =
  "block w-full rounded-md bg-blue-500 p-4 text-center text-sm leading-none text-white shadow-md hover:bg-blue-500/90 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-900 disabled:opacity-60 disabled:pointer-events-none"

export default function AdminButton({ children, ...props }: AdminButtonProps) {
  return (
    <button {...props} className={adminButtonStyles}>
      {children}
    </button>
  )
}
