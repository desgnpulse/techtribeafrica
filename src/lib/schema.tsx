import { ArticleMeta } from "./content"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techtribeafrica.com"

export const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechTribe Africa",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "Technology intelligence from the African continent.",
  sameAs: [
    "https://twitter.com/TechTribeAfrica",
    "https://linkedin.com/company/techtribeafrica",
  ],
  foundingDate: "2026",
  areaServed: "Africa",
}

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TechTribe Africa",
  url: SITE_URL,
  description:
    "The shifts nobody told you about. The markets being quietly built. The ideas worth understanding before they are obvious.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
}

export function newsArticleSchema(article: ArticleMeta) {
  const articleUrl = `${SITE_URL}${article.href}`
  const isoDate = `${article.date}T08:00:00+03:00`
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    url: articleUrl,
    datePublished: isoDate,
    dateModified: isoDate,
    author: { "@type": "Organization", name: "TechTribe Africa", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "TechTribe Africa",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    articleSection: article.categoryLabel,
    keywords: article.tags,
    timeRequired: `PT${article.readingTime}M`,
    inLanguage: "en",
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function collectionPageSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}${url}`,
    publisher: { "@type": "Organization", name: "TechTribe Africa", url: SITE_URL },
  }
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About TechTribe Africa",
    url: `${SITE_URL}/about`,
    description:
      "TechTribe Africa is a pattern recognition publication covering technology and business in Africa.",
    publisher: { "@type": "Organization", name: "TechTribe Africa", url: SITE_URL },
  }
}

export function SchemaTag({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
