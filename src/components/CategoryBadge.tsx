import { TagVariant } from "@/lib/categories"

type Props = {
  label: string
  variant: TagVariant
  small?: boolean
}

export default function CategoryBadge({ label, variant, small }: Props) {
  return (
    <span
      className={`tta-tag tag-${variant}`}
      style={small ? { fontSize: "9px", padding: "2px 6px" } : undefined}
    >
      {label}
    </span>
  )
}
