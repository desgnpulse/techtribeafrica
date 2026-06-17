export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z")
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z")
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}
