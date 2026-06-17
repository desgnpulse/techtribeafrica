"use client"

import { useState, FormEvent } from "react"

export default function BeehiivForm() {
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

  if (status === "success") {
    return (
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
        You are on the list.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        aria-label="Email address"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 3,
          padding: "9px 12px",
          fontSize: 13,
          color: "#fff",
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          border: "none",
          borderRadius: 3,
          padding: "9px 16px",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.04em",
          cursor: status === "loading" ? "wait" : "pointer",
          width: "100%",
        }}
      >
        {status === "loading" ? "Subscribing…" : "Subscribe free"}
      </button>
      {status === "error" && (
        <p style={{ fontSize: 11, color: "rgba(255,100,100,0.9)", margin: 0 }}>
          Something went wrong. Try again.
        </p>
      )}
    </form>
  )
}
