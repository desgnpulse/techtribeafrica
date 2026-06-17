"use client"

import Link from "next/link"

type Item = { label: string; href?: string }

export default function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "14px clamp(20px, 4vw, 52px)",
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 12,
        color: "var(--color-ink-4)",
      }}
    >
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {i > 0 && (
            <span aria-hidden="true" style={{ color: "var(--color-rule)" }}>
              ›
            </span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              style={{ color: "var(--color-ink-4)", transition: "color .12s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-4)")}
            >
              {item.label}
            </Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
