"use client"

import { useState } from "react"
import Link from "next/link"
import type { ArticleMeta } from "@/lib/types"
import { formatDate, formatDateShort } from "@/lib/utils"
import { CATEGORIES, CategorySlug } from "@/lib/categories"
import ArticleCard from "./ArticleCard"
import NewsletterBand from "./NewsletterBand"
import Breadcrumb from "./Breadcrumb"
import CategoryBadge from "./CategoryBadge"
import { SchemaTag, collectionPageSchema, breadcrumbSchema } from "@/lib/schema"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techtribeafrica.com"

type Props = {
  categorySlug: CategorySlug
  articles: ArticleMeta[]
}

export default function CategoryIndex({ categorySlug, articles }: Props) {
  const cat = CATEGORIES[categorySlug]
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <>
      <SchemaTag schema={collectionPageSchema(cat.label, cat.metaDescription, `/${categorySlug}`)} />
      <SchemaTag schema={breadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: cat.label, url: `${SITE_URL}/${categorySlug}` },
      ])} />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: cat.label }]} />

      {/* Pillar hero */}
      <div
        aria-label={`${cat.label} section`}
        style={{ background: cat.color, color: "#fff", padding: "56px clamp(20px, 4vw, 52px) 52px" }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "end",
          }}
          className="pillar-inner"
        >
          <div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              {cat.label.split(" ").join("\n")}
            </h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 24 }}>
              {articles.length} {articles.length === 1 ? "piece" : "pieces"} published
            </p>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 420, alignSelf: "end" }}>
            {cat.description}
          </p>
        </div>
      </div>

      <div className="site-wrap" style={{ paddingBottom: 0 }}>
        {/* Featured */}
        {featured && (
          <section aria-label={`Featured ${cat.label} piece`}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                padding: "48px 0",
                marginBottom: 0,
                borderBottom: "1px solid var(--color-rule)",
                alignItems: "start",
              }}
              className="featured-grid"
            >
              <FeaturedImage image={featured.image} />
              <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 4 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: cat.color,
                  }}
                >
                  Latest
                </div>
                <CategoryBadge label={cat.label} variant={cat.tagVariant} />
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(22px, 2.8vw, 34px)",
                    fontWeight: 500,
                    lineHeight: 1.18,
                    color: "var(--color-ink)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  <Link
                    href={featured.href}
                    style={{ transition: "color .12s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = cat.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--color-ink-2)" }}>
                  {featured.summary}
                </p>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--color-ink-4)",
                    display: "flex",
                    gap: 12,
                    paddingTop: 14,
                    borderTop: "1px solid var(--color-rule)",
                  }}
                >
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span>{featured.readingTime} min read</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <section aria-label={`All ${cat.label}`} style={{ paddingTop: 48 }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "40px 28px", marginBottom: 52 }}
              className="card-grid"
            >
              {rest.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}

        {articles.length === 0 && (
          <div style={{ padding: "80px 0", textAlign: "center", color: "var(--color-ink-4)" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: 20 }}>
              First {cat.label.toLowerCase()} publishing soon.
            </p>
          </div>
        )}
      </div>

      <NewsletterBand
        headline={`Get every ${cat.label} in your inbox.`}
        copy="One email per week. The patterns shaping African tech, synthesised, not summarised. No noise, no filler."
      />

      <style>{`
        @media (max-width: 960px) {
          .pillar-inner { grid-template-columns: 1fr !important; gap: 24px !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
          .card-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          .card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

function FeaturedImage({ image }: { image?: string }) {
  const [err, setErr] = useState(false)
  if (image && !err) {
    return (
      <img
        src={image}
        alt=""
        aria-hidden="true"
        onError={() => setErr(true)}
        style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 3, display: "block" }}
      />
    )
  }
  return (
    <div
      aria-hidden="true"
      style={{
        aspectRatio: "4/3",
        background: "var(--color-rule-soft)",
        border: "1px solid var(--color-rule)",
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-ink-4)",
      }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="m8 21 4-4 4 4" />
      </svg>
    </div>
  )
}
