"use client"

import Link from "next/link"

const COL_STYLE = { fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--color-ink)", marginBottom: 16 }
const LINK_STYLE = { fontSize: 13, color: "var(--color-ink-3)", transition: "color .12s", display: "block" }

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: "1px solid var(--color-rule)", background: "var(--color-white)" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "56px clamp(20px, 4vw, 52px) 48px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 48,
        }}
      >
        {/* Brand */}
        <div style={{ gridColumn: "span 2 / auto" }}>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 22,
              fontWeight: 500,
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
              marginBottom: 14,
            }}
          >
            TechTribe Africa
          </div>
          <p style={{ fontSize: 13, color: "var(--color-ink-3)", lineHeight: 1.7, marginBottom: 20, maxWidth: 300 }}>
            Technology intelligence from the continent. The shifts nobody told you about, the markets being quietly built, and the ideas worth understanding before they&apos;re obvious.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { href: "https://twitter.com/TechTribeAfrica", label: "X / Twitter", text: "𝕏" },
              { href: "https://linkedin.com/company/techtribeafrica", label: "LinkedIn", text: "in" },
              { href: "https://instagram.com/techtribeafrica", label: "Instagram", text: "ig" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                aria-label={s.label}
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  width: 30, height: 30,
                  border: "1px solid var(--color-rule)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12,
                  color: "var(--color-ink-4)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 500,
                  transition: "border-color .12s, color .12s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-ink-3)"
                  e.currentTarget.style.color = "var(--color-ink)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-rule)"
                  e.currentTarget.style.color = "var(--color-ink-4)"
                }}
              >
                {s.text}
              </a>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          <div style={COL_STYLE}>Content</div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 10 }} aria-label="Footer content">
            {[
              ["/frontier-reports", "Frontier Reports"],
              ["/market-signals", "Market Signals"],
              ["/build-opportunities", "Build Opportunities"],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={LINK_STYLE}>{label}</Link>
            ))}
          </nav>
        </div>

        {/* Company */}
        <div>
          <div style={COL_STYLE}>Company</div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 10 }} aria-label="Footer company">
            {[
              ["/about", "About"],
              ["/advertise", "Advertise"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={LINK_STYLE}>{label}</Link>
            ))}
          </nav>
        </div>

        {/* Subscribe */}
        <div>
          <div style={COL_STYLE}>Subscribe</div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 10 }} aria-label="Footer subscribe">
            <Link href="/newsletter" style={LINK_STYLE}>Weekly newsletter</Link>
            <Link href="/feed.xml" style={LINK_STYLE}>RSS feed</Link>
          </nav>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--color-rule)",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "18px clamp(20px, 4vw, 52px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 12,
          color: "var(--color-ink-4)",
        }}
      >
        <span>© {year} TechTribe Africa. All rights reserved.</span>
        <nav style={{ display: "flex", gap: 20 }} aria-label="Legal">
          <Link href="/privacy" style={{ color: "var(--color-ink-4)" }}>Privacy</Link>
          <Link href="/terms" style={{ color: "var(--color-ink-4)" }}>Terms</Link>
        </nav>
      </div>
    </footer>
  )
}
