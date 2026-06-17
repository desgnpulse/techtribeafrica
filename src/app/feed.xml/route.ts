import { getAllArticles } from "@/lib/content"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techtribeafrica.com"

export async function GET() {
  const articles = getAllArticles()

  const items = articles
    .map((article) => {
      const url = `${SITE_URL}${article.href}`
      const pubDate = new Date(`${article.date}T08:00:00+03:00`).toUTCString()
      return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${article.summary}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${article.categoryLabel}]]></category>
    </item>`
    })
    .join("")

  const lastBuildDate =
    articles.length > 0
      ? new Date(`${articles[0].date}T08:00:00+03:00`).toUTCString()
      : new Date().toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TechTribe Africa</title>
    <link>${SITE_URL}</link>
    <description>Technology intelligence from the continent — the shifts nobody told you about, synthesised for African founders, builders, and investors.</description>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <copyright>TechTribe Africa ${new Date().getFullYear()}</copyright>${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
