import type { Metadata } from "next"
import { getArticlesByCategory } from "@/lib/content"
import { CATEGORIES } from "@/lib/categories"
import CategoryIndex from "@/components/CategoryIndex"

const cat = CATEGORIES["market-signals"]

export const metadata: Metadata = {
  title: cat.label,
  description: cat.metaDescription,
  openGraph: { title: `${cat.label} — TechTribe Africa`, description: cat.metaDescription, type: "website" },
  alternates: { canonical: "/market-signals" },
}

export default function MarketSignalsPage() {
  const articles = getArticlesByCategory("market-signals")
  return <CategoryIndex categorySlug="market-signals" articles={articles} />
}
