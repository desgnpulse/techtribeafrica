"use client"

import CopyLinkButton from "./CopyLinkButton"

type Props = { title: string; url: string }

const BTN: React.CSSProperties = {
  fontSize: 12, fontWeight: 450, color: "var(--color-ink-3)",
  background: "none", border: "1px solid var(--color-rule)", borderRadius: 6,
  padding: "6px 12px", cursor: "pointer", fontFamily: "var(--font-sans)",
  textDecoration: "none", display: "inline-block",
}

export default function ShareStrip({ title, url }: Props) {
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  return (
    <div
      aria-label="Share this article"
      style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "14px 0",
        borderTop: "1px solid var(--color-rule)",
        borderBottom: "1px solid var(--color-rule)",
        marginBottom: 40, flexWrap: "wrap",
      }}
    >
      <span style={{ fontSize: 11, color: "var(--color-ink-4)", letterSpacing: "0.06em", textTransform: "uppercase", marginRight: 4 }}>
        Share
      </span>
      <a href={xUrl} target="_blank" rel="noopener noreferrer" style={BTN} className="hover-ink-border">𝕏 Twitter</a>
      <a href={liUrl} target="_blank" rel="noopener noreferrer" style={BTN} className="hover-ink-border">in LinkedIn</a>
      <CopyLinkButton url={url} />
    </div>
  )
}
