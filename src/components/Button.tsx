import { type ComponentProps } from "react"

export default function Button({
  children,
}: { children: React.ReactNode } & ComponentProps<"button">) {
  return (
    <button className="w-full rounded-xl bg-purple-600 p-4 text-sm leading-none text-white shadow-md hover:bg-purple-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:p-8 md:text-xl">
      {children}
    </button>
  )
}
