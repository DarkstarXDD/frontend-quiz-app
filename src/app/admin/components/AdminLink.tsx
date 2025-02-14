import NextLink from "next/link"
import type { ReactNode, ComponentProps } from "react"
import { adminButtonStyles } from "./AdminButton"

type AdminLinkProps = {
  children: ReactNode
  href: string
} & ComponentProps<"a">

export default function AdminLink({
  children,
  href,
  ...props
}: AdminLinkProps) {
  return (
    <NextLink href={href} {...props} className={adminButtonStyles}>
      {children}
    </NextLink>
  )
}
