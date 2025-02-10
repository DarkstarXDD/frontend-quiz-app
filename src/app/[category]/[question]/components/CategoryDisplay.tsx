import IconAccessibility from "@/icons/IconAccessibility"

export default function CategoryDisplay({ category }: { category: string }) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <IconAccessibility />
      <p className="text-sm leading-none md:text-xl">{category}</p>
    </div>
  )
}
