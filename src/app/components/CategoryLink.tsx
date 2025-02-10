import Link from "next/link"

export default function CategoryLink({
  categoryName,
  firstQuestionSlug,
  icon,
}: {
  categoryName: string
  firstQuestionSlug: string
  icon?: React.ReactNode
}) {
  return (
    <Link
      href={`/${categoryName.toLowerCase()}/${firstQuestionSlug}`}
      className="flex items-center gap-4 rounded-md bg-white p-4 shadow-sm hover:bg-blue-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-grey-500 md:gap-8 md:rounded-lg lg:p-6"
    >
      {icon}
      <span className="text-sm leading-none md:text-xl">{categoryName}</span>
    </Link>
  )
}
