import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TechTribe Africa collects, uses, and protects your information.",
  openGraph: {
    title: "Privacy Policy - TechTribe Africa",
    description: "How TechTribe Africa collects, uses, and protects your information.",
    type: "website",
    url: "/privacy",
    siteName: "TechTribe Africa",
    images: [{ url: "/tta-og.jpg", width: 1200, height: 630, alt: "TechTribe Africa" }],
  },
  alternates: { canonical: "/privacy" },
}

const SECTIONS = [
  {
    title: "What we collect",
    body: "When you subscribe to the newsletter, we collect your email address. When you visit the site, we collect anonymised traffic data through Plausible Analytics - a privacy-focused analytics tool that does not use cookies and does not track you across sites. We do not collect names, locations, or any personal data beyond what you voluntarily provide.",
  },
  {
    title: "How we use it",
    body: "Your email address is used solely to send the TechTribe Africa newsletter. We do not sell, rent, or share your email with third parties. Traffic data is used to understand which content is most useful to our readers.",
  },
  {
    title: "Newsletter provider",
    body: "The newsletter is managed through Beehiiv. When you subscribe, your email address is stored in Beehiiv's systems. Their privacy policy governs how they handle that data. You can unsubscribe at any time using the link in any newsletter email.",
  },
  {
    title: "Cookies",
    body: "TechTribe Africa does not use tracking cookies. Plausible Analytics operates without cookies. No third-party advertising networks are present on this site.",
  },
  {
    title: "Data retention",
    body: "Your email address remains in our newsletter system for as long as you are subscribed. You may request deletion at any time by emailing hello@techtribeafrica.com.",
  },
  {
    title: "Changes to this policy",
    body: "If this policy changes materially, we will note it in the newsletter. The date at the bottom of this page reflects the last update.",
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

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
            Privacy Policy
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
