"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import type { ArticleMeta } from "@/lib/types"
import { formatDateShort } from "@/lib/utils"
import { CATEGORIES } from "@/lib/categories"
import CategoryBadge from "@/components/CategoryBadge"

type Props = { articles: ArticleMeta[] }

function scoreArticle(article: ArticleMeta, q: string): number {
  const lower = q.toLowerCase()
  const terms = lower.split(/\s+/).filter(Boolean)
  let score = 0
  for (const term of terms) {
    if (article.title.toLowerCase().includes(term)) score += 3
    if (article.summary.toLowerCase().includes(term)) score += 2
    if (article.tags.some((t) => t.toLowerCase().includes(term))) score += 2
    if (article.categoryLabel.toLowerCase().includes(term)) score += 1
  }
  return score
}

export default function SearchResults({ articles }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQ = searchParams.get("q") ?? ""
  const [query, setQuery] = useState(initialQ)
  const [submitted, setSubmitted] = useState(initialQ)

  useEffect(() => {
    setQuery(initialQ)
    setSubmitted(initialQ)
  }, [initialQ])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const q = query.trim()
    setSubmitted(q)
    if (q) router.replace(`/search?q=${encodeURIComponent(q)}`, { scroll: false })
    else router.replace("/search", { scroll: false })
  }

  const results = submitted
    ? articles
        .map((a) => ({ article: a, score: scoreArticle(a, submitted) }))
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((r) => r.article)
    : []

  return (
    <div>
      {/* Search box */}
      <form onSubmit={handleSubmit} style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics, tags…"
            aria-label="Search"
            autoFocus
            style={{
              flex: 1,
              fontSize: 16,
              padding: "12px 16px",
              borderRadius: 8,
              border: "1px solid var(--color-rule)",
              background: "var(--color-white)",
              color: "var(--color-ink)",
              fontFamily: "var(--font-sans)",
              outline: "none",
              transition: "border-color .12s",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-ink-3)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-rule)")}
          />
          <button
            type="submit"
            style={{
              padding: "12px 20px",
              borderRadius: 8,
              border: "none",
              background: "var(--color-ink)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "var(--font-sans)",
              cursor: "pointer",
              transition: "background .12s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-ink-2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-ink)")}
          >
            Search
          </button>
        </div>
      </form>

      {/* Results */}
      {submitted ? (
        results.length > 0 ? (
          <div>
            <p style={{ fontSize: 13, color: "var(--color-ink-4)", marginBottom: 28 }}>
              {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{submitted}&rdquo;
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {results.map((article) => {
                const cat = CATEGORIES[article.category]
                return (
                  <article
                    key={article.href}
                    style={{
                      padding: "24px 0",
                      borderBottom: "1px solid var(--color-rule)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <CategoryBadge label={cat.label} variant={cat.tagVariant} />
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 22,
                        fontWeight: 500,
                        lineHeight: 1.25,
                        color: "var(--color-ink)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      <Link
                        href={article.href}
                        style={{ transition: "color .12s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = cat.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p style={{ fontSize: 14, color: "var(--color-ink-2)", lineHeight: 1.6 }}>
                      {article.summary}
                    </p>
                    <div style={{ fontSize: 12, color: "var(--color-ink-4)", display: "flex", gap: 12 }}>
                      <time dateTime={article.date}>{formatDateShort(article.date)}</time>
                      <span>{article.readingTime} min read</span>
                    </div>
                    {article.tags.length > 0 && (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: 11,
                              color: "var(--color-ink-4)",
                              border: "1px solid var(--color-rule)",
                              borderRadius: 4,
                              padding: "3px 8px",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        ) : (
          <div style={{ padding: "48px 0" }}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 22,
                color: "var(--color-ink)",
                marginBottom: 16,
              }}
            >
              No results for &ldquo;{submitted}&rdquo;
            </p>
            <p style={{ fontSize: 14, color: "var(--color-ink-3)", lineHeight: 1.65, marginBottom: 32 }}>
              Try a shorter search term, or browse by category below.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {Object.values(CATEGORIES).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#fff",
                    background: cat.color,
                    padding: "8px 16px",
                    borderRadius: 6,
                    display: "inline-block",
                  }}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        )
      ) : (
        <div style={{ padding: "24px 0" }}>
          <p style={{ fontSize: 14, color: "var(--color-ink-4)", marginBottom: 32 }}>
            Start typing to search all articles, reports, and signals.
          </p>
          <div style={{ borderTop: "2px solid var(--color-ink)", paddingTop: 24 }}>
            <div
              style={{
                fontSize: 10, fontWeight: 500, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "var(--color-ink-4)", marginBottom: 16,
              }}
            >
              Browse by category
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {Object.values(CATEGORIES).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid var(--color-rule)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 16,
                    fontFamily: "var(--font-serif)",
                    fontWeight: 500,
                    color: cat.color,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cat.label}
                  <span style={{ fontSize: 13, color: "var(--color-ink-4)", fontFamily: "var(--font-sans)", fontWeight: 400 }}>
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
