"use client"

import { useState, FormEvent } from "react"

type Props = {
  headline: string
  copy: string
}

export default function NewsletterBand({ headline, copy }: Props) {
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
        padding: "52px clamp(20px, 4vw, 52px)",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 500,
            color: "#fff",
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
          }}
        >
          {headline}
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
          {copy}
        </p>
        {status === "success" ? (
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
            You are on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: 8,
              width: "100%",
              maxWidth: 400,
              flexWrap: "wrap",
            }}
          >
            <input
              className="nl-input"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              aria-label="Email address"
              style={{ flex: 1, minWidth: 0 }}
            />
            <button
              className="nl-btn"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing…" : "Subscribe free"}
            </button>
            {status === "error" && (
              <p style={{ fontSize: 12, color: "rgba(255,100,100,0.9)", margin: 0, width: "100%" }}>
                Something went wrong. Try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
