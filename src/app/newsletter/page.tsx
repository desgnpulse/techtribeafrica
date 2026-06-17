import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"
import BeehiivForm from "@/components/BeehiivForm"

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "One email per week. The patterns shaping African tech, synthesised, not summarised. No noise, no filler.",
  openGraph: {
    title: "TechTribe Africa Newsletter",
    description:
      "One email per week. The patterns shaping African tech, synthesised, not summarised. No noise, no filler.",
    type: "website",
    url: "/newsletter",
    siteName: "TechTribe Africa",
    images: [{ url: "/tta-og.jpg", width: 1200, height: 630, alt: "TechTribe Africa" }],
  },
  alternates: { canonical: "/newsletter" },
}

const WHAT_YOU_GET = [
  {
    label: "Frontier Reports",
    copy: "Deep analysis of the technology shifts reshaping African markets. One argument, fully made.",
  },
  {
    label: "Market Signals",
    copy: "Short pattern reads on data points, forum threads, and market moves worth understanding.",
  },
  {
    label: "Build Opportunities",
    copy: "Specific gap analyses. An underserved market, the evidence for it, and what the right solution looks like.",
  },
]

export default function NewsletterPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Newsletter" }]} />

      {/* Hero */}
      <div style={{ background: "var(--color-ink)", color: "#fff", padding: "72px clamp(20px, 4vw, 52px) 80px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 24,
            }}
          >
            Weekly intelligence
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(34px, 5vw, 56px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: 24,
            }}
          >
            The patterns shaping African tech.
            <br />
            In your inbox, once a week.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
            Not a news digest. Not a link dump. Synthesised intelligence from the continent - the kind of analysis that changes how you see a market.
          </p>
          <div style={{ maxWidth: 340, margin: "0 auto" }}>
            <BeehiivForm />
          </div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 16, letterSpacing: "0.04em" }}>
            Free. Unsubscribe any time.
          </p>
        </div>
      </div>

      {/* What you get */}
      <div className="site-wrap" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-ink-4)",
              marginBottom: 40,
            }}
          >
            What you get
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {WHAT_YOU_GET.map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: 32,
                  padding: "28px 0",
                  borderTop: i === 0 ? "2px solid var(--color-ink)" : "1px solid var(--color-rule)",
                  alignItems: "start",
                }}
                className="what-you-get-row"
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "var(--color-ink)",
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--color-ink-2)", margin: 0 }}>
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .what-you-get-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </>
  )
}
