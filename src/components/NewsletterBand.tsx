type Props = {
  headline: string
  copy: string
}

export default function NewsletterBand({ headline, copy }: Props) {
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
        <div
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
            placeholder="your@email.com"
            aria-label="Email address"
            style={{ flex: 1, minWidth: 0 }}
          />
          <button className="nl-btn" type="button">
            Subscribe free
          </button>
        </div>
      </div>
    </div>
  )
}
