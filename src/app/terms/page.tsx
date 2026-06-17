import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for TechTribe Africa.",
  openGraph: {
    title: "Terms of Use - TechTribe Africa",
    description: "Terms of use for TechTribe Africa.",
    type: "website",
    url: "/terms",
    siteName: "TechTribe Africa",
    images: [{ url: "/tta-og.jpg", width: 1200, height: 630, alt: "TechTribe Africa" }],
  },
  alternates: { canonical: "/terms" },
}

const SECTIONS = [
  {
    title: "Content ownership",
    body: "All articles, analysis, and editorial content published on TechTribe Africa are the intellectual property of TechTribe Africa. You may quote short excerpts with attribution and a link to the original article. Reproduction of full articles, whether in print or digital form, requires written permission.",
  },
  {
    title: "Accuracy and editorial independence",
    body: "TechTribe Africa publishes original analysis and interpretation. We make every effort to ensure factual accuracy but do not guarantee the completeness or timeliness of any information published. Nothing on this site constitutes financial, investment, or legal advice. Sponsored content, when published, is clearly marked as such and does not influence editorial coverage.",
  },
  {
    title: "Links to third-party content",
    body: "Articles may reference or link to third-party sources. TechTribe Africa does not control those sites and is not responsible for their content, accuracy, or availability.",
  },
  {
    title: "Newsletter",
    body: "By subscribing to the TechTribe Africa newsletter, you consent to receive email communications from us. You may unsubscribe at any time using the link included in every email. We do not send unsolicited commercial email.",
  },
  {
    title: "Limitation of liability",
    body: "TechTribe Africa is provided as-is. We are not liable for any loss or damage arising from your use of the site or reliance on its content.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms from time to time. Continued use of the site after any update constitutes acceptance of the revised terms.",
  },
]

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} />

      <div className="site-wrap" style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: 680 }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              marginBottom: 16,
            }}
          >
            Terms of Use
          </h1>
          <p style={{ fontSize: 13, color: "var(--color-ink-4)", marginBottom: 48 }}>Last updated: June 2026</p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {SECTIONS.map((s, i) => (
              <div
                key={s.title}
                style={{
                  padding: "28px 0",
                  borderTop: i === 0 ? "2px solid var(--color-ink)" : "1px solid var(--color-rule)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 20,
                    fontWeight: 500,
                    color: "var(--color-ink)",
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--color-ink-2)", margin: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid var(--color-rule)", paddingTop: 28, marginTop: 8 }}>
            <p style={{ fontSize: 14, color: "var(--color-ink-3)", lineHeight: 1.6 }}>
              Questions? Email{" "}
              <a href="mailto:hello@techtribeafrica.com" style={{ color: "var(--color-ink-2)", textDecoration: "underline", textUnderlineOffset: 2 }}>
                hello@techtribeafrica.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
