export default function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      style={{
        borderLeft: "3px solid var(--category-color, var(--color-ink))",
        padding: "4px 0 4px 28px",
        margin: "44px 0",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 26,
          fontStyle: "italic",
          lineHeight: 1.4,
          color: "var(--color-ink)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </blockquote>
  )
}
