import type { Metadata } from "next"
import { getArticlesByCategory } from "@/lib/content"
import { CATEGORIES } from "@/lib/categories"
import CategoryIndex from "@/components/CategoryIndex"

const cat = CATEGORIES["frontier-reports"]

export const metadata: Metadata = {
  title: cat.label,
  description: cat.metaDescription,
  openGraph: { title: `${cat.label} — TechTribe Africa`, description: cat.metaDescription, type: "website" },
  alternates: { canonical: "/frontier-reports" },
}

export default function FrontierReportsPage() {
  const articles = getArticlesByCategory("frontier-reports")
  return <CategoryIndex categorySlug="frontier-reports" articles={articles} />
}
