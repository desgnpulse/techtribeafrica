import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata: Metadata = {
  title: "Advertise",
  description: "Reach founders, builders, and operators across African tech with TechTribe Africa.",
  openGraph: {
    title: "Advertise - TechTribe Africa",
    description: "Reach founders, builders, and operators across African tech.",
    type: "website",
    url: "/advertise",
    siteName: "TechTribe Africa",
    images: [{ url: "/tta-og.jpg", width: 1200, height: 630, alt: "TechTribe Africa" }],
  },
  alternates: { canonical: "/advertise" },
}

const FORMATS = [
  {
    label: "Newsletter sponsorship",
    description:
      "A dedicated section in the weekly newsletter, read by founders, operators, and investors building in and for Africa. Includes headline, body copy, and a single call-to-action link.",
  },
  {
    label: "Article sponsorship",
    description:
      "A clearly marked sponsor note on a specific article or category. Suitable for tools, services, or events relevant to African tech builders.",
  },
  {
    label: "Custom research",
    description:
      "A co-produced deep-dive on a market, category, or trend your audience cares about. Full editorial control stays with TechTribe. Contact us to discuss scope.",
  },
]

const AUDIENCE = [
  { stat: "Primary audience", value: "Founders and builders, pre-seed to Series A" },
  { stat: "Coverage", value: "African tech markets - Nigeria, Kenya, Ghana, South Africa, and the continent broadly" },
  { stat: "Focus", value: "Product decisions, market analysis, and build opportunities" },
  { stat: "Format", value: "Long-form intelligence, not news" },
]

export default function AdvertisePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Advertise" }]} />

      <div className="site-wrap" style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: 760 }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              marginBottom: 20,
            }}
          >
            Reach the builders.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-ink-2)", marginBottom: 56, maxWidth: 600 }}>
            TechTribe Africa reaches founders, product managers, and early-stage investors making product and market decisions across the continent. Our readers do not want noise - they want signal.
          </p>

          {/* Audience */}
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-4)", marginBottom: 20 }}>
            The audience
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginBottom: 56 }}>
            {AUDIENCE.map((a, i) => (
              <div
                key={a.stat}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: 24,
                  padding: "18px 0",
                  borderTop: i === 0 ? "2px solid var(--color-ink)" : "1px solid var(--color-rule)",
                }}
                className="audience-row"
              >
                <div style={{ fontSize: 12, fontWeight: 500, color: "var(--color-ink-4)", textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 2 }}>
                  {a.stat}
                </div>
                <div style={{ fontSize: 15, color: "var(--color-ink-2)", lineHeight: 1.6 }}>
                  {a.value}
                </div>
              </div>
            ))}
          </div>

          {/* Formats */}
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-4)", marginBottom: 20 }}>
            Formats
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginBottom: 56 }}>
            {FORMATS.map((f, i) => (
              <div
                key={f.label}
                style={{
                  padding: "28px 0",
                  borderTop: i === 0 ? "2px solid var(--color-ink)" : "1px solid var(--color-rule)",
                }}
              >
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 500, color: "var(--color-ink)", marginBottom: 10 }}>
                  {f.label}
                </div>
                <p style={{ fontSize: 15, color: "var(--color-ink-2)", lineHeight: 1.65, margin: 0 }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ borderTop: "2px solid var(--color-ink)", paddingTop: 32 }}>
            <p style={{ fontSize: 16, color: "var(--color-ink-2)", lineHeight: 1.7, marginBottom: 16 }}>
              To discuss rates, availability, and fit, email us directly.
            </p>
            <a
              href="mailto:advertise@techtribeafrica.com"
              style={{ fontSize: 15, color: "var(--color-ink)", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              advertise@techtribeafrica.com
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .audience-row { grid-template-columns: 1fr !important; gap: 4px !important; }
        }
      `}</style>
    </>
  )
}
