import Link from "next/link"

export default function CategoryLink({
  category,
  icon,
}: {
  category: string
  icon: React.ReactNode
}) {
  return (
    <Link
      href={`/${category.toLowerCase()}`}
      className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:bg-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-500 md:gap-8 lg:p-6"
    >
      {icon}
      <span className="text-sm leading-none md:text-xl">{category}</span>
    </Link>
  )
}
