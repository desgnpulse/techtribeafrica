import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with TechTribe Africa.",
  openGraph: {
    title: "Contact - TechTribe Africa",
    description: "Get in touch with TechTribe Africa.",
    type: "website",
    url: "/contact",
    siteName: "TechTribe Africa",
    images: [{ url: "/tta-og.jpg", width: 1200, height: 630, alt: "TechTribe Africa" }],
  },
  alternates: { canonical: "/contact" },
}

const CONTACTS = [
  {
    label: "Editorial",
    description: "Tips, story ideas, or corrections.",
    email: "editorial@techtribeafrica.com",
  },
  {
    label: "Advertising",
    description: "Sponsorship, partnerships, and media inquiries.",
    email: "advertise@techtribeafrica.com",
  },
  {
    label: "General",
    description: "Everything else.",
    email: "hello@techtribeafrica.com",
  },
]

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <div className="site-wrap" style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: 680 }}>
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
            Get in touch.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-ink-2)", marginBottom: 56 }}>
            TechTribe Africa is a small, focused publication. Messages go to real people.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {CONTACTS.map((c, i) => (
              <div
                key={c.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: 32,
                  padding: "28px 0",
                  borderTop: i === 0 ? "2px solid var(--color-ink)" : "1px solid var(--color-rule)",
                  alignItems: "start",
                }}
                className="contact-row"
              >
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500, color: "var(--color-ink)", marginBottom: 4 }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-ink-4)", lineHeight: 1.5 }}>
                    {c.description}
                  </div>
                </div>
                <a
                  href={`mailto:${c.email}`}
                  style={{ fontSize: 15, color: "var(--color-ink-2)", textDecoration: "underline", textUnderlineOffset: 3, alignSelf: "center" }}
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .contact-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </>
  )
}
