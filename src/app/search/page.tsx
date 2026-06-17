import type { Metadata } from "next"
import { Suspense } from "react"
import { getAllArticles } from "@/lib/content"
import SearchResults from "./SearchResults"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata: Metadata = {
  title: "Search",
  description: "Search TechTribe Africa articles, reports, and analysis.",
  robots: { index: false, follow: true },
}

export default function SearchPage() {
  const allArticles = getAllArticles()

  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <div className="site-wrap" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760 }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 500,
              color: "var(--color-ink)",
              letterSpacing: "-0.025em",
              marginBottom: 32,
            }}
          >
            Search
          </h1>
          <Suspense fallback={<SearchSkeleton />}>
            <SearchResults articles={allArticles} />
          </Suspense>
        </div>
      </div>
    </>
  )
}

function SearchSkeleton() {
  return (
    <div style={{ color: "var(--color-ink-4)", fontSize: 14 }}>Loading…</div>
  )
}
