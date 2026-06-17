"use client"

import Link from "next/link"
import CategoryBadge from "./CategoryBadge"
import type { ArticleMeta } from "@/lib/types"
import { formatDateShort } from "@/lib/utils"
import { CATEGORIES } from "@/lib/categories"

export default function ListCard({ article }: { article: ArticleMeta }) {
  const cat = CATEGORIES[article.category]
  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 104px",
        gap: 20,
        padding: "20px 0",
        borderBottom: "1px solid var(--color-rule)",
        alignItems: "start",
      }}
      itemScope
      itemType="https://schema.org/NewsArticle"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <CategoryBadge label={cat.label} variant={cat.tagVariant} />
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 17,
            fontWeight: 500,
            lineHeight: 1.35,
            color: "var(--color-ink)",
            letterSpacing: "-0.01em",
          }}
          itemProp="headline"
        >
          <Link
            href={article.href}
            style={{ transition: "color .12s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = cat.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
          >
            {article.title}
          </Link>
        </h3>
        {article.summary && (
          <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55 }} itemProp="description">
            {article.summary}
          </p>
        )}
        <div style={{ fontSize: 11, color: "var(--color-ink-4)", marginTop: 4 }}>
          <time dateTime={article.date}>{formatDateShort(article.date)}</time>
          {" · "}
          {article.readingTime} min read
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          aspectRatio: "1",
          background: "var(--color-rule-soft)",
          border: "1px solid var(--color-rule)",
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-ink-4)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      </div>
    </article>
  )
}
