export const CATEGORIES = {
  "frontier-reports": {
    slug: "frontier-reports",
    label: "Frontier Reports",
    shortLabel: "Frontier",
    tagVariant: "f" as const,
    color: "#0E4A32",
    description:
      "Deep research and original synthesis on the patterns shaping technology and business in Africa. Not news - intelligence. The kind of analysis that takes weeks to do and minutes to change how you see a market.",
    metaDescription:
      "Deep research and original synthesis on the patterns shaping technology and business in Africa. Not news - intelligence.",
  },
  "market-signals": {
    slug: "market-signals",
    label: "Market Signals",
    shortLabel: "Signal",
    tagVariant: "s" as const,
    color: "#1C2B4A",
    description:
      "Pattern reads from data, developer forums, social signals, and market moves. What the numbers actually say - and what they mean for founders and builders in Africa.",
    metaDescription:
      "Pattern reads from data, developer forums, social signals, and market moves across African tech.",
  },
  "build-opportunities": {
    slug: "build-opportunities",
    label: "Build Opportunities",
    shortLabel: "Build",
    tagVariant: "b" as const,
    color: "#7A4A10",
    description:
      "Specific market gaps worth building into. Backed by research, sized by reality. For founders and builders who want to know what is worth making before it is obvious.",
    metaDescription:
      "Specific market gaps worth building into, backed by research and sized by reality for African founders.",
  },
} as const

export type CategorySlug = keyof typeof CATEGORIES
export type TagVariant = "f" | "s" | "b"

export function isCategorySlug(s: string): s is CategorySlug {
  return s in CATEGORIES
}
