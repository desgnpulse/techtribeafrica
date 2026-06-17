import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import fs from "fs"
import path from "path"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getArticleContent, getAllSlugs } from "@/lib/content"
import type { ArticleMeta } from "@/lib/types"
import { formatDate } from "@/lib/utils"
import { CATEGORIES, isCategorySlug } from "@/lib/categories"
import CategoryBadge from "@/components/CategoryBadge"
import BeehiivForm from "@/components/BeehiivForm"
import Breadcrumb from "@/components/Breadcrumb"
import ShareStrip from "@/components/ShareStrip"
import { SchemaTag, newsArticleSchema, breadcrumbSchema } from "@/lib/schema"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techtribeafrica.com"

type Params = { category: string; slug: string }

export async function generateStaticParams() {
  return getAllSlugs()
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, slug } = await params
  if (!isCategorySlug(category)) return {}

  const result = getArticleContent(category, slug)
  if (!result) return {}

  const { meta } = result
  const url = `/${category}/${slug}`
  const isoDate = `${meta.date}T08:00:00+03:00`

  return {
    title: meta.title,
    description: meta.summary,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.summary,
      type: "article",
      url,
      publishedTime: isoDate,
      section: meta.categoryLabel,
      tags: meta.tags,
      ...(meta.image ? { images: [{ url: meta.image, width: 1200, height: 630, alt: meta.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.summary,
      ...(meta.image ? { images: [meta.image] } : {}),
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params
  if (!isCategorySlug(category)) notFound()

  const result = getArticleContent(category, slug)
  if (!result) notFound()

  const { meta, content } = result
  const cat = CATEGORIES[category]
  const isoDate = `${meta.date}T08:00:00+03:00`

  return (
    <>
      <SchemaTag schema={newsArticleSchema(meta)} />
      <SchemaTag schema={breadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: cat.label, url: `${SITE_URL}/${category}` },
        { name: meta.title, url: `${SITE_URL}/${category}/${slug}` },
      ])} />

      {/* Reading progress bar */}
      <ProgressBar color={cat.color} />

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: cat.label, href: `/${category}` },
        { label: meta.title.length > 50 ? meta.title.slice(0, 50) + "…" : meta.title },
      ]} />

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 52px) 80px",
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: 0,
        }}
        className="article-layout"
      >
        {/* Main column */}
        <article
          style={{ borderRight: "1px solid var(--color-rule)", paddingRight: 60, paddingBottom: 60 }}
          className="article-main"
          itemScope
          itemType="https://schema.org/NewsArticle"
        >
          <meta itemProp="datePublished" content={isoDate} />
          <meta itemProp="dateModified" content={isoDate} />

          {/* Article header */}
          <header
            style={{
              padding: "40px 0 36px",
              borderBottom: "1px solid var(--color-rule)",
              marginBottom: 40,
            }}
          >
            <div style={{ marginBottom: 18 }}>
              <CategoryBadge label={cat.label} variant={cat.tagVariant} />
            </div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.8vw, 48px)",
                fontWeight: 500,
                lineHeight: 1.12,
                color: "var(--color-ink)",
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
              itemProp="headline"
            >
              {meta.title}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 20,
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.55,
                color: "var(--color-ink-2)",
                marginBottom: 28,
              }}
              itemProp="description"
            >
              {meta.summary}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontSize: 12,
                color: "var(--color-ink-4)",
                flexWrap: "wrap",
              }}
            >
              <strong style={{ color: "var(--color-ink-2)", fontWeight: 500 }} itemProp="author">
                TechTribe Africa
              </strong>
              <span style={{ color: "var(--color-rule)" }}>—</span>
              <time itemProp="datePublished" dateTime={isoDate}>
                {formatDate(meta.date)}
              </time>
              <span style={{ color: "var(--color-rule)" }}>—</span>
              <span>{meta.readingTime} min read</span>
            </div>
          </header>

          {/* Share strip — client component */}
          <ShareStrip title={meta.title} url={`${SITE_URL}/${category}/${slug}`} />

          {/* Hero image */}
          <HeroImage image={meta.image} title={meta.title} />
          <p style={{ fontSize: 12, color: "var(--color-ink-4)", fontStyle: "italic", marginBottom: 40 }}>
            TechTribe Africa
          </p>

          {/* Body */}
          <div className="prose" id="article-body" style={{ maxWidth: 680 }} itemProp="articleBody">
            <MDXRemote source={content} />
          </div>

          {/* Tags */}
          {meta.tags.length > 0 && (
            <div
              aria-label="Article tags"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                margin: "48px 0 40px",
                paddingTop: 32,
                borderTop: "1px solid var(--color-rule)",
              }}
            >
              {meta.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/search?q=${encodeURIComponent(tag)}`}
                  className="hover-ink-border"
                  style={{
                    fontSize: 12,
                    color: "var(--color-ink-3)",
                    border: "1px solid var(--color-rule)",
                    borderRadius: 4,
                    padding: "5px 12px",
                  }}
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* Author block */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
              padding: "28px 0",
              borderTop: "1px solid var(--color-rule)",
              borderBottom: "2px solid var(--color-ink)",
              marginBottom: 52,
            }}
            itemScope
            itemType="https://schema.org/Person"
          >
            <div
              aria-hidden="true"
              style={{
                width: 48, height: 48,
                borderRadius: "50%",
                background: "var(--color-rule-soft)",
                border: "1px solid var(--color-rule)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-serif)",
                fontSize: 18,
                color: "var(--color-ink-3)",
                flexShrink: 0,
              }}
            >
              T
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-ink)", marginBottom: 4 }} itemProp="name">
                TechTribe Africa
              </div>
              <div style={{ fontSize: 13, color: "var(--color-ink-3)", lineHeight: 1.6 }} itemProp="description">
                Original research and synthesis on the patterns shaping technology and business in Africa. We connect the dots so you don&apos;t have to.
              </div>
            </div>
          </div>

          {/* Related — link back to category */}
          <section aria-label="Related reading">
            <div
              style={{
                fontSize: 10, fontWeight: 500, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "var(--color-ink)",
                marginBottom: 20, paddingBottom: 12,
                borderBottom: "2px solid var(--color-ink)",
              }}
            >
              Related reading
            </div>
            <p style={{ fontSize: 14, color: "var(--color-ink-3)", lineHeight: 1.6 }}>
              Explore more{" "}
              <Link href={`/${category}`} style={{ color: cat.color, textDecoration: "underline", textUnderlineOffset: 2 }}>
                {cat.label}
              </Link>{" "}
              or{" "}
              <Link href="/" style={{ color: "var(--color-ink-2)", textDecoration: "underline", textUnderlineOffset: 2 }}>
                browse all categories
              </Link>
              .
            </p>
          </section>
        </article>

        {/* Sidebar */}
        <aside
          aria-label="Article sidebar"
          style={{ paddingLeft: 40 }}
          className="article-side"
        >
          <div style={{ position: "sticky", top: 72, display: "flex", flexDirection: "column", gap: 32, paddingTop: 40 }}>
            {/* Sidebar newsletter */}
            <div
              aria-label="Newsletter"
              style={{
                background: "var(--color-ink)",
                color: "rgba(255,255,255,0.85)",
                padding: 24,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#fff",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                }}
              >
                Get the intelligence. Not the noise.
              </h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                One email per week. Synthesised, not summarised.
              </p>
              <BeehiivForm />
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .article-layout { grid-template-columns: 1fr !important; }
          .article-main { border-right: none !important; padding-right: 0 !important; }
          .article-side { display: none !important; }
        }
      `}</style>
    </>
  )
}

function HeroImage({ image, title }: { image?: string; title: string }) {
  const fileExists = image ? fs.existsSync(path.join(process.cwd(), "public", image)) : false

  if (fileExists && image) {
    return (
      <img
        src={image}
        alt={title}
        width={1200}
        height={630}
        style={{ width: "100%", height: "auto", borderRadius: 3, display: "block", marginBottom: 12 }}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        aspectRatio: "16/9",
        background: "var(--color-rule-soft)",
        border: "1px solid var(--color-rule)",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        color: "var(--color-ink-4)",
        marginBottom: 12,
      }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="m8 21 4-4 4 4" />
        <path d="M2 10h20" />
      </svg>
      <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Hero image — 1200 × 630
      </span>
    </div>
  )
}

function ProgressBar({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, background: "var(--color-rule-soft)", zIndex: 300 }}
    >
      <ProgressFill color={color} />
    </div>
  )
}

function ProgressFill({ color }: { color: string }) {
  return (
    <>
      <div id="progress-fill" style={{ height: "100%", width: "0%", background: color, transition: "width .1s linear" }} />
      <script dangerouslySetInnerHTML={{
        __html: `
(function(){
  var fill = document.getElementById('progress-fill');
  function update(){
    var body = document.getElementById('article-body');
    if(!body||!fill) return;
    var rect = body.getBoundingClientRect();
    var total = body.offsetHeight;
    var scrolled = Math.max(0, -rect.top);
    fill.style.width = Math.min(100,(scrolled/total)*100)+'%';
  }
  window.addEventListener('scroll', update, {passive:true});
  update();
})();
`
      }} />
    </>
  )
}


