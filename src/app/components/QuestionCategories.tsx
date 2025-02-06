import CategoryLink from "./CategoryLink"

import IconHTML from "@/icons/IconHTML"
import IconCSS from "@/icons/IconCSS"
import IconJS from "@/icons/IconJS"
import IconAccessibility from "@/icons/IconAccessibility"

export default function QuestionCategories() {
  return (
    <div className="grid gap-4 md:gap-6 lg:gap-4">
      <CategoryLink category="HTML" icon={<IconHTML />} />
      <CategoryLink category="CSS" icon={<IconCSS />} />
      <CategoryLink category="JavaScript" icon={<IconJS />} />
      <CategoryLink category="Accessibility" icon={<IconAccessibility />} />
    </div>
  )
}
