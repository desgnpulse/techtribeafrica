import type { Metadata } from "next"
import fs from "fs"
import path from "path"
import Link from "next/link"
import { getAllArticles, getArticlesByCategory } from "@/lib/content"
import { formatDate, formatDateShort } from "@/lib/utils"
import { CATEGORIES } from "@/lib/categories"
import ArticleCard from "@/components/ArticleCard"
import ListCard from "@/components/ListCard"
import CategoryBadge from "@/components/CategoryBadge"
import BeehiivForm from "@/components/BeehiivForm"
import { SchemaTag, ORG_SCHEMA, WEBSITE_SCHEMA, newsArticleSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "TechTribe Africa — Technology intelligence from the continent",
  description:
    "The shifts nobody told you about. The markets being quietly built. The ideas worth understanding before they are obvious.",
  openGraph: {
    title: "TechTribe Africa — Technology intelligence from the continent",
    description:
      "The shifts nobody told you about. The markets being quietly built. The ideas worth understanding before they are obvious.",
    type: "website",
    url: "/",
  },
}

export default function HomePage() {
  const frontierArticles = getArticlesByCategory("frontier-reports")
  const signalArticles = getArticlesByCategory("market-signals")
  const buildArticles = getArticlesByCategory("build-opportunities")
  const allArticles = getAllArticles()
  const featuredArticle = allArticles[0]

  return (
    <>
      {/* JSON-LD */}
      <SchemaTag schema={ORG_SCHEMA} />
      <SchemaTag schema={WEBSITE_SCHEMA} />
      {featuredArticle && <SchemaTag schema={newsArticleSchema(featuredArticle)} />}

      {/* Broadsheet masthead */}
      <div
        role="banner"
        aria-label="Publication masthead"
        style={{
          background: "var(--color-white)",
          borderBottom: "1px solid var(--color-rule)",
          padding: "48px clamp(20px, 4vw, 52px) 36px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 500,
            color: "var(--color-ink)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            display: "block",
          }}
        >
          TechTribe Africa
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            margin: "16px auto 14px",
            maxWidth: 480,
          }}
        >
          <div style={{ flex: 1, height: 1, background: "var(--color-rule)" }} />
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-ink-4)",
              whiteSpace: "nowrap",
            }}
          >
            Technology intelligence from the continent
          </span>
          <div style={{ flex: 1, height: 1, background: "var(--color-rule)" }} />
        </div>
        <time
          dateTime={new Date().toISOString().split("T")[0]}
          style={{ fontSize: 12, color: "var(--color-ink-4)", letterSpacing: "0.03em" }}
        >
          {formatDate(new Date().toISOString().split("T")[0])}
        </time>
      </div>

      <div className="site-wrap">
        {/* ── HERO ── */}
        {featuredArticle && (
          <section
            aria-label="Featured story"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderBottom: "1px solid var(--color-rule)",
            }}
            className="hero-grid"
          >
            <div
              style={{
                padding: "48px 48px 48px 0",
                borderRight: "1px solid var(--color-rule)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                justifyContent: "center",
              }}
              className="hero-text"
            >
              <div>
                <CategoryBadge
                  label={CATEGORIES[featuredArticle.category].label}
                  variant={CATEGORIES[featuredArticle.category].tagVariant}
                />
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(28px, 3.5vw, 46px)",
                  fontWeight: 500,
                  lineHeight: 1.14,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.025em",
                }}
              >
                <Link
                  href={featuredArticle.href}
                  className={`hover-${CATEGORIES[featuredArticle.category].tagVariant}`}
                >
                  {featuredArticle.title}
                </Link>
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-ink-2)", maxWidth: 480 }}>
                {featuredArticle.summary}
              </p>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--color-ink-4)",
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  paddingTop: 16,
                  borderTop: "1px solid var(--color-rule)",
                }}
              >
                <time dateTime={featuredArticle.date}>{formatDate(featuredArticle.date)}</time>
                <span style={{ color: "var(--color-rule)" }}>—</span>
                <span>{featuredArticle.readingTime} min read</span>
              </div>
            </div>
            <div
              style={{ padding: "48px 0 48px 48px", display: "flex", alignItems: "center" }}
              className="hero-img"
            >
              <HomepageHeroImage image={featuredArticle.image} title={featuredArticle.title} />
            </div>
          </section>
        )}

        {/* ── PAGE GRID ── */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 300px", paddingBottom: 80 }}
          className="page-grid"
        >
          {/* Main column */}
          <div style={{ borderRight: "1px solid var(--color-rule)", paddingRight: 48 }} className="col-main">

            {/* Frontier Reports */}
            {frontierArticles.length > 0 && (
              <section aria-label="Frontier Reports">
                <SectionHead title="Frontier Reports" href="/frontier-reports" />
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px 28px", marginBottom: 44 }}
                  className="card-grid"
                >
                  {frontierArticles.slice(0, 3).map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </section>
            )}

            <hr style={{ border: "none", borderTop: "1px solid var(--color-rule)" }} />

            {/* Market Signals */}
            {signalArticles.length > 0 && (
              <section aria-label="Market Signals">
                <SectionHead title="Market Signals" href="/market-signals" />
                <div>
                  {signalArticles.slice(0, 3).map((a) => (
                    <ListCard key={a.slug} article={a} />
                  ))}
                </div>
              </section>
            )}

            <hr style={{ border: "none", borderTop: "1px solid var(--color-rule)" }} />

            {/* Build Opportunities */}
            {buildArticles.length > 0 && (
              <section aria-label="Build Opportunities">
                <SectionHead title="Build Opportunities" href="/build-opportunities" />
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px 28px", marginBottom: 44 }}
                  className="card-grid"
                >
                  {buildArticles.slice(0, 3).map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </section>
            )}

            {/* Empty state */}
            {allArticles.length === 0 && (
              <div style={{ padding: "80px 0", textAlign: "center", color: "var(--color-ink-4)" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: 20 }}>
                  Intelligence incoming — first articles publishing soon.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside aria-label="Sidebar" style={{ paddingLeft: 40 }} className="col-side">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Newsletter block */}
              <div
                role="complementary"
                aria-label="Newsletter signup"
                style={{
                  background: "var(--color-ink)",
                  color: "rgba(255,255,255,0.85)",
                  padding: "28px 24px",
                  borderRadius: 4,
                  marginTop: 36,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 20,
                    fontWeight: 500,
                    color: "#fff",
                    lineHeight: 1.25,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Get the intelligence. Not the noise.
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
                  One email per week. Patterns shaping African tech, synthesised, not summarised.
                </p>
                <BeehiivForm />
              </div>

              {/* Most read */}
              {allArticles.length > 0 && (
                <div
                  style={{
                    paddingTop: 28,
                    marginTop: 32,
                    borderTop: "2px solid var(--color-ink)",
                  }}
                >
                  <h2
                    style={{
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-4)",
                      marginBottom: 16,
                    }}
                  >
                    Most read this week
                  </h2>
                  {allArticles.slice(0, 5).map((a, i) => (
                    <div
                      key={a.slug}
                      style={{
                        display: "flex",
                        gap: 12,
                        padding: "12px 0",
                        borderBottom: "1px solid var(--color-rule)",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 26,
                          fontWeight: 400,
                          color: "var(--color-rule)",
                          lineHeight: 1,
                          minWidth: 26,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 450, lineHeight: 1.45, color: "var(--color-ink)" }}>
                          <Link href={a.href}>{a.title}</Link>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <CategoryBadge label={CATEGORIES[a.category].shortLabel} variant={CATEGORIES[a.category].tagVariant} small />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* About blurb */}
              <div style={{ paddingTop: 28, marginTop: 32, borderTop: "2px solid var(--color-ink)" }}>
                <h2 style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-4)", marginBottom: 16 }}>
                  About TechTribe Africa
                </h2>
                <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.65 }}>
                  Not a tech news site. A pattern recognition publication. We do original research, synthesise what it means, and tell you where the opportunity is — before it&apos;s obvious.
                </p>
                <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.65, marginTop: 10 }}>
                  Three pillars: <strong>Frontier Reports</strong> for deep research, <strong>Market Signals</strong> for pattern reads, and <strong>Build Opportunities</strong> for what&apos;s worth making next.
                </p>
                <Link
                  href="/about"
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    fontSize: 12,
                    color: "var(--color-ink-3)",
                    borderBottom: "1px solid var(--color-rule)",
                    paddingBottom: 1,
                    transition: "color .12s, border-color .12s",
                  }}
                >
                  Our editorial approach →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-text { padding: 36px 0 !important; border-right: none !important; border-bottom: 1px solid var(--color-rule); }
          .hero-img { padding: 28px 0 !important; }
          .page-grid { grid-template-columns: 1fr !important; }
          .col-main { border-right: none !important; padding-right: 0 !important; }
          .col-side { padding-left: 0 !important; border-top: 1px solid var(--color-rule); }
          .card-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          .card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

function HomepageHeroImage({ image, title }: { image?: string; title: string }) {
  const fileExists = image ? fs.existsSync(path.join(process.cwd(), "public", image)) : false

  if (fileExists && image) {
    return (
      <img
        src={image}
        alt={title}
        width={800}
        height={600}
        style={{ width: "100%", height: "auto", borderRadius: 4, display: "block", objectFit: "cover", aspectRatio: "4/3" }}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        aspectRatio: "4/3",
        background: "var(--color-rule-soft)",
        border: "1px solid var(--color-rule)",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        color: "var(--color-ink-4)",
      }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="m8 21 4-4 4 4" />
        <path d="M2 10h20" />
      </svg>
      <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Hero image
      </span>
    </div>
  )
}

function SectionHead({ title, href }: { title: string; href: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "36px 0 0",
        marginBottom: 24,
        borderTop: "2px solid var(--color-ink)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 17,
          fontWeight: 500,
          letterSpacing: "-0.01em",
          color: "var(--color-ink)",
        }}
      >
        {title}
      </h2>
      <Link href={href} style={{ fontSize: 12, color: "var(--color-ink-3)", fontWeight: 450 }}>
        All {title.toLowerCase()} →
      </Link>
    </div>
  )
}
