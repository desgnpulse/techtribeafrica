"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"

const NAV_LINKS = [
  { href: "/frontier-reports", label: "Frontier Reports" },
  { href: "/market-signals", label: "Market Signals" },
  { href: "/build-opportunities", label: "Build Opportunities" },
]

export default function Nav() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
      setQuery("")
    }
  }

  return (
    <>
      <a href="#main" className="skip">
        Skip to main content
      </a>
      <header
        role="banner"
        style={{
          background: "var(--color-white)",
          borderBottom: "1px solid var(--color-rule)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 clamp(20px, 4vw, 52px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
            gap: 24,
          }}
        >
          {/* Logo + Wordmark */}
          <Link
            href="/"
            aria-label="TechTribe Africa home"
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            <Image
              src="/images/logo_dark.png"
              alt=""
              width={100}
              height={47}
              priority
              style={{ height: 30, width: "auto", display: "block" }}
            />
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: 22,
              fontWeight: 500,
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
            }}>
              TechTribe<span style={{ color: "var(--color-frontier)" }}>&nbsp;Africa</span>
            </span>
          </Link>

          {/* Nav links — hidden on mobile */}
          <nav
            aria-label="Main navigation"
            style={{ display: "flex", alignItems: "center", gap: 2 }}
            className="hide-mobile"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontSize: 13,
                    fontWeight: active ? 500 : 450,
                    color: active ? "var(--color-ink)" : "var(--color-ink-3)",
                    padding: "6px 12px",
                    borderRadius: 6,
                    transition: "color .12s, background .12s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-ink)"
                    e.currentTarget.style.background = "var(--color-rule-soft)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = active ? "var(--color-ink)" : "var(--color-ink-3)"
                    e.currentTarget.style.background = "transparent"
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right: search + subscribe */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles…"
                  aria-label="Search"
                  style={{
                    fontSize: 13,
                    padding: "6px 10px",
                    borderRadius: 6,
                    border: "1px solid var(--color-rule)",
                    background: "var(--color-white)",
                    color: "var(--color-ink)",
                    outline: "none",
                    width: 200,
                  }}
                  onBlur={() => { if (!query) setSearchOpen(false) }}
                />
                <button
                  type="button"
                  onClick={() => { setSearchOpen(false); setQuery("") }}
                  aria-label="Close search"
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--color-ink-4)",
                    cursor: "pointer",
                    fontSize: 18,
                    lineHeight: 1,
                    padding: "0 2px",
                  }}
                >
                  ×
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                style={{
                  width: 34,
                  height: 34,
                  border: "1px solid var(--color-rule)",
                  borderRadius: 8,
                  background: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-ink-3)",
                  transition: "border-color .12s, color .12s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-ink-3)"
                  e.currentTarget.style.color = "var(--color-ink)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-rule)"
                  e.currentTarget.style.color = "var(--color-ink-3)"
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            )}
            <Link
              href="/newsletter"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                color: "#fff",
                background: "var(--color-ink)",
                border: "none",
                borderRadius: 8,
                padding: "7px 16px",
                cursor: "pointer",
                transition: "background .12s",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-ink-2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-ink)")}
            >
              Subscribe
            </Link>
          </div>
        </div>
      </header>

      {/* Inline style for mobile hide */}
      <style>{`
        @media (max-width: 768px) { .hide-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
