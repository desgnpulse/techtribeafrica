import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"
import NewsletterBand from "@/components/NewsletterBand"
import { SchemaTag, aboutPageSchema, ORG_SCHEMA } from "@/lib/schema"

export const metadata: Metadata = {
  title: "About",
  description:
    "TechTribe Africa is a pattern recognition publication covering technology and business in Africa. Not news - intelligence.",
  openGraph: {
    title: "About - TechTribe Africa",
    description: "Not a tech news site. A pattern recognition publication.",
    type: "website",
    url: "/about",
    siteName: "TechTribe Africa",
    images: [{ url: "/tta-og.jpg", width: 1200, height: 630, alt: "TechTribe Africa" }],
  },
  alternates: { canonical: "/about" },
}

const PILLARS = [
  {
    label: "Frontier Reports",
    href: "/frontier-reports",
    color: "#0E4A32",
    desc: "Long-form original research on the patterns shaping African technology and markets. Written for people who want to understand a market, not just know what happened in it.",
  },
  {
    label: "Market Signals",
    href: "/market-signals",
    color: "#1C2B4A",
    desc: "Pattern reads from data, forums, developer conversations, and market moves. What the numbers actually say - and what they mean for founders and investors on the continent.",
  },
  {
    label: "Build Opportunities",
    href: "/build-opportunities",
    color: "#7A4A10",
    desc: "Specific market gaps worth building into, backed by research and sized by reality. For founders who want to know what is worth making next, before it becomes obvious.",
  },
]

export default function AboutPage() {
  return (
    <>
      <SchemaTag schema={aboutPageSchema()} />
      <SchemaTag schema={ORG_SCHEMA} />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      {/* Page header */}
      <div
        style={{
          background: "var(--color-white)",
          borderBottom: "1px solid var(--color-rule)",
          padding: "56px clamp(20px, 4vw, 52px) 48px",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-ink-4)",
              marginBottom: 20,
            }}
          >
            About
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              marginBottom: 24,
            }}
          >
            Not a tech news site. A pattern recognition publication.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 20,
              lineHeight: 1.65,
              color: "var(--color-ink-2)",
              fontStyle: "italic",
            }}
          >
            We do original research, synthesise what it means, and tell you where the opportunity is - before it is obvious.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="site-wrap" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "0 64px",
          }}
          className="about-grid"
        >
          {/* Main text */}
          <div>
            <Section title="What we do">
              <p>
                TechTribe Africa covers the patterns shaping technology and business in Africa. Not press releases, funding announcements, or startup profiles written for foreign VCs. We cover the structural shifts that matter: the infrastructure being quietly built, the market dynamics that do not make headlines, the tools that African businesses actually use versus the ones that Silicon Valley thinks they should.
              </p>
              <p>
                Every piece we publish starts with a question, not a story pitch. We ask: what is actually happening here, why is it happening, and what does it change? The analysis follows the evidence. The opportunity layer - what founders and builders should be paying attention to - comes last.
              </p>
            </Section>

            <Section title="Who we write for">
              <p>
                Our primary readers are founders, builders, product managers, and early-stage investors who operate in or think seriously about African markets. People who do not need the basics explained, who already understand that &quot;Africa&quot; is fifty-four countries with radically different market dynamics, and who want the synthesis layer - not the raw news.
              </p>
              <p>
                We also write for the growing number of global founders, operators, and investors who recognise that the most interesting technology problems of the next decade are being solved in Lagos, Nairobi, Accra, and Kigali - often in ways that will eventually spread outward.
              </p>
            </Section>

            <Section title="What we do not do">
              <p>
                No sponsored content. No press releases. No &quot;top 10 African startups to watch&quot; lists compiled from VC briefings.
              </p>
              <p>
                The banned words do not appear here: no &quot;transformative,&quot; no &quot;revolutionary,&quot; no &quot;cutting-edge.&quot; If the analysis is correct, the evidence speaks for itself.
              </p>
            </Section>

            <Section title="Editorial approach">
              <p>
                Every Frontier Report follows the same structure: what happened, why it matters, what changes, and where the opportunity is. The first three sections are analysis. The last one is our opinion - clearly marked as such.
              </p>
              <p>
                Market Signals are shorter pattern reads, usually triggered by a data point, forum thread, or market move that illuminates something broader. Build Opportunities are specific gap analyses: here is an underserved market, here is the evidence for it, here is what the right solution probably looks like.
              </p>
            </Section>
          </div>

          {/* Sidebar */}
          <aside>
            <div style={{ position: "sticky", top: 80 }}>
              {/* Three pillars */}
              <div style={{ borderTop: "2px solid var(--color-ink)", paddingTop: 24, marginBottom: 40 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-4)",
                    marginBottom: 20,
                  }}
                >
                  Our three pillars
                </div>
                {PILLARS.map((p) => (
                  <div
                    key={p.label}
                    style={{
                      paddingBottom: 24,
                      marginBottom: 24,
                      borderBottom: "1px solid var(--color-rule)",
                    }}
                  >
                    <Link
                      href={p.href}
                      style={{
                        display: "inline-block",
                        fontFamily: "var(--font-serif)",
                        fontSize: 17,
                        fontWeight: 500,
                        color: p.color,
                        marginBottom: 8,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.label} →
                    </Link>
                    <p style={{ fontSize: 13, color: "var(--color-ink-3)", lineHeight: 1.65 }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick facts */}
              <div style={{ borderTop: "2px solid var(--color-ink)", paddingTop: 24 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-4)",
                    marginBottom: 20,
                  }}
                >
                  Quick facts
                </div>
                {[
                  ["Founded", "2026"],
                  ["Focus", "African technology and markets"],
                  ["Format", "Long-form analysis, not daily news"],
                  ["Newsletter", "Weekly · Free"],
                  ["Frequency", "2–3 pieces per week"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid var(--color-rule-soft)",
                      fontSize: 13,
                    }}
                  >
                    <span style={{ color: "var(--color-ink-4)" }}>{k}</span>
                    <span style={{ color: "var(--color-ink-2)", fontWeight: 450 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <NewsletterBand
        headline="Stay ahead of African tech."
        copy="One email per week. Pattern reads, market signals, and build opportunities, synthesised, not summarised."
      />

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 26,
          fontWeight: 500,
          color: "var(--color-ink)",
          letterSpacing: "-0.02em",
          marginBottom: 20,
          paddingBottom: 16,
          borderBottom: "1px solid var(--color-rule)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          fontFamily: "var(--font-serif)",
          fontSize: 18,
          lineHeight: 1.72,
          color: "var(--color-ink)",
        }}
      >
        {children}
      </div>
    </div>
  )
}
