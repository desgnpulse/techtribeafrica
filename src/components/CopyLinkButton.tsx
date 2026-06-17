"use client"

export default function CopyLinkButton({ url }: { url: string }) {
  return (
    <button
      type="button"
      style={{
        fontSize: 12,
        fontWeight: 450,
        color: "var(--color-ink-3)",
        background: "none",
        border: "1px solid var(--color-rule)",
        borderRadius: 6,
        padding: "6px 12px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        transition: "color .12s, border-color .12s",
      }}
      onClick={() => navigator.clipboard?.writeText(url)}
    >
      🔗 Copy link
    </button>
  )
}
