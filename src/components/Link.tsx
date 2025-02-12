import NextLink from "next/link"
import type { ReactNode, ComponentProps } from "react"
import { buttonStyles } from "./Button"

type LinkProps = {
  children: ReactNode
  href: string
} & ComponentProps<"a">

export default function Link({ children, href, ...props }: LinkProps) {
  return (
    <NextLink {...props} href={href} className={buttonStyles}>
      {children}
    </NextLink>
  )
}
