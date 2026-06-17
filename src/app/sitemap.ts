import { MetadataRoute } from "next"
import { getAllArticles } from "@/lib/content"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://techtribeafrica.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/frontier-reports`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/market-signals`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/build-opportunities`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/newsletter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ]

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}${article.href}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: article.category === "frontier-reports" ? 0.85 : 0.8,
  }))

  return [...staticPages, ...articlePages]
}
