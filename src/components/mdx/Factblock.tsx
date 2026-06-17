export default function Factblock({
  title = "Key figures",
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <div
      aria-label={title}
      style={{
        background: "var(--color-rule-soft)",
        border: "1px solid var(--color-rule)",
        borderRadius: 4,
        padding: "24px 28px",
        margin: "40px 0",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-ink-4)",
          marginBottom: 14,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 14,
          lineHeight: 1.65,
          color: "var(--color-ink-2)",
        }}
        className="factblock-body"
      >
        {children}
      </div>
    </div>
  )
}
