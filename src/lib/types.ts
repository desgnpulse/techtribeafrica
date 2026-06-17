import type { CategorySlug } from "./categories"

export type ArticleMeta = {
  title: string
  slug: string
  date: string
  category: CategorySlug
  categoryLabel: string
  tags: string[]
  summary: string
  readingTime: number
  href: string
  image?: string
}
