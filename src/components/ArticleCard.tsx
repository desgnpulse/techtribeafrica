"use client"

import { useState } from "react"
import Link from "next/link"
import CategoryBadge from "./CategoryBadge"
import type { ArticleMeta } from "@/lib/types"
import { formatDateShort } from "@/lib/utils"
import { CATEGORIES } from "@/lib/categories"

type Props = {
  article: ArticleMeta
  headingLevel?: "h2" | "h3"
}

export default function ArticleCard({ article, headingLevel: H = "h3" }: Props) {
  const cat = CATEGORIES[article.category]
  const [imgError, setImgError] = useState(false)
  return (
    <article
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
      itemScope
      itemType="https://schema.org/NewsArticle"
    >
      <meta itemProp="datePublished" content={article.date} />
      <meta itemProp="author" content="TechTribe Africa" />
      {article.image && !imgError ? (
        <img
          src={article.image}
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            aspectRatio: "16/9",
            objectFit: "cover",
            borderRadius: 3,
            display: "block",
            marginBottom: 2,
          }}
          onError={() => setImgError(true)}
        />
      ) : (
      <div
        aria-hidden="true"
        style={{
          aspectRatio: "16/9",
          background: "var(--color-rule-soft)",
          border: "1px solid var(--color-rule)",
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-ink-4)",
          marginBottom: 2,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="m8 21 4-4 4 4" />
          <path d="M2 10h20" />
        </svg>
      </div>
      )}
      <CategoryBadge label={cat.label} variant={cat.tagVariant} />
      <H
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 19,
          fontWeight: 500,
          lineHeight: 1.28,
          color: "var(--color-ink)",
          letterSpacing: "-0.015em",
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
      </H>
      {article.summary && (
        <p
          style={{ fontSize: 13, lineHeight: 1.65, color: "var(--color-ink-2)" }}
          itemProp="description"
        >
          {article.summary}
        </p>
      )}
      <div
        style={{
          fontSize: 11,
          color: "var(--color-ink-4)",
          paddingTop: 10,
          borderTop: "1px solid var(--color-rule)",
          display: "flex",
          gap: 10,
        }}
      >
        <time dateTime={article.date}>{formatDateShort(article.date)}</time>
        <span>{article.readingTime} min</span>
      </div>
    </article>
  )
}
