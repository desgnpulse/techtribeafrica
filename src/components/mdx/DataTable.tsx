"use client"

export default function DataTable({
  title,
  headers,
  rows,
  note,
  asOf,
}: {
  title?: string
  headers: string
  rows: string
  note?: string
  asOf?: string
}) {
  // headers: pipe-separated string — "Col A|Col B|Col C"
  // rows: double-semicolon-separated rows, pipe-separated cells — "A|B|C;;D|E|F"
  const parsedHeaders = headers ? headers.split("|") : []
  const parsedRows = rows
    ? rows.split(";;").map((row) => row.split("|"))
    : []

  return (
    <div
      style={{
        margin: "40px 0",
        border: "1px solid var(--color-rule)",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      {(title || asOf) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: "14px 20px",
            borderBottom: "1px solid var(--color-rule)",
            background: "var(--color-rule-soft)",
            gap: 12,
          }}
        >
          {title && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-ink-4)",
              }}
            >
              {title}
            </span>
          )}
          {asOf && (
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.06em",
                color: "var(--color-ink-4)",
                whiteSpace: "nowrap",
              }}
            >
              As of {asOf}
            </span>
          )}
        </div>
      )}

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          <thead>
            <tr>
              {parsedHeaders.map((h, i) => (
                <th
                  key={i}
                  style={{
                    padding: "10px 20px",
                    textAlign: "left",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--category-color, var(--color-ink))",
                    borderBottom: "2px solid var(--category-color, var(--color-ink))",
                    whiteSpace: "nowrap",
                    background: "var(--color-rule-soft)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parsedRows.map((row, ri) => (
              <tr
                key={ri}
                style={{
                  background: ri % 2 === 0 ? "transparent" : "var(--color-rule-soft)",
                }}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    style={{
                      padding: "10px 20px",
                      color: ci === 0 ? "var(--color-ink)" : "var(--color-ink-2)",
                      fontWeight: ci === 0 ? 500 : 400,
                      borderBottom:
                        ri < parsedRows.length - 1
                          ? "1px solid var(--color-rule)"
                          : "none",
                      verticalAlign: "top",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && (
        <div
          style={{
            padding: "10px 20px",
            fontSize: 11,
            color: "var(--color-ink-4)",
            lineHeight: 1.55,
            borderTop: "1px solid var(--color-rule)",
            fontStyle: "italic",
          }}
        >
          {note}
        </div>
      )}
    </div>
  )
}
