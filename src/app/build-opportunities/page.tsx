import type { Metadata } from "next"
import { getArticlesByCategory } from "@/lib/content"
import { CATEGORIES } from "@/lib/categories"
import CategoryIndex from "@/components/CategoryIndex"

const cat = CATEGORIES["build-opportunities"]

export const metadata: Metadata = {
  title: cat.label,
  description: cat.metaDescription,
  openGraph: { title: `${cat.label} - TechTribe Africa`, description: cat.metaDescription, type: "website", siteName: "TechTribe Africa", images: [{ url: "/tta-og.jpg", width: 1200, height: 630, alt: "TechTribe Africa" }] },
  alternates: { canonical: "/build-opportunities" },
}

export default function BuildOpportunitiesPage() {
  const articles = getArticlesByCategory("build-opportunities")
  return <CategoryIndex categorySlug="build-opportunities" articles={articles} />
}
