"use client"

import { useState, FormEvent } from "react"

export default function InlineNewsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div
      aria-label="Newsletter signup"
      style={{
        background: "var(--color-ink)",
        color: "rgba(255,255,255,0.85)",
        borderRadius: 4,
        padding: "32px 36px",
        margin: "52px 0",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 24,
          fontWeight: 500,
          color: "#fff",
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        More like this, every week.
      </h3>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
        One email. The patterns shaping African tech - synthesised, not summarised. No noise.
      </p>
      {status === "success" ? (
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>You are on the list.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }} className="inline-nl-form">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            aria-label="Email address"
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: 13,
              fontFamily: "var(--font-sans)",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: 6,
              background: "#fff",
              color: "var(--color-ink)",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "var(--font-sans)",
              cursor: status === "loading" ? "wait" : "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe free"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p style={{ fontSize: 11, color: "rgba(255,100,100,0.9)", margin: 0 }}>
          Something went wrong. Try again.
        </p>
      )}
      <style>{`@media(max-width:520px){.inline-nl-form{flex-direction:column}}`}</style>
    </div>
  )
}
