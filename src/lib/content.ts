import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { CategorySlug, CATEGORIES } from "./categories"
import type { ArticleMeta } from "./types"

export type { ArticleMeta }

const CONTENT_DIR = path.join(process.cwd(), "src/content")

function parseArticleFile(category: CategorySlug, filename: string): ArticleMeta | null {
  const slug = filename.replace(/\.mdx$/, "")
  const filePath = path.join(CONTENT_DIR, category, filename)
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data } = matter(raw)

  if (!data.title || !data.date) return null

  return {
    title: data.title as string,
    slug: data.slug ?? slug,
    date: typeof data.date === "object" ? (data.date as Date).toISOString().split("T")[0] : String(data.date),
    category,
    categoryLabel: data.categoryLabel ?? CATEGORIES[category].label,
    tags: Array.isArray(data.tags) ? data.tags : [],
    summary: data.summary ?? "",
    readingTime: data.readingTime ?? 5,
    href: `/${category}/${slug}`,
    image: data.image as string | undefined,
  }
}

export function getArticlesByCategory(category: CategorySlug): ArticleMeta[] {
  const dir = path.join(CONTENT_DIR, category)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => parseArticleFile(category, f))
    .filter((a): a is ArticleMeta => a !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllArticles(): ArticleMeta[] {
  const categories = Object.keys(CATEGORIES) as CategorySlug[]
  return categories
    .flatMap((cat) => getArticlesByCategory(cat))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getArticleContent(
  category: CategorySlug,
  slug: string
): { meta: ArticleMeta; content: string } | null {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  const meta: ArticleMeta = {
    title: data.title as string,
    slug,
    date: typeof data.date === "object" ? (data.date as Date).toISOString().split("T")[0] : String(data.date),
    category,
    categoryLabel: data.categoryLabel ?? CATEGORIES[category].label,
    tags: Array.isArray(data.tags) ? data.tags : [],
    summary: data.summary ?? "",
    readingTime: data.readingTime ?? 5,
    href: `/${category}/${slug}`,
    image: data.image as string | undefined,
  }

  return { meta, content }
}

export function getAllSlugs(): { category: string; slug: string }[] {
  const categories = Object.keys(CATEGORIES) as CategorySlug[]
  return categories.flatMap((category) => {
    const dir = path.join(CONTENT_DIR, category)
    if (!fs.existsSync(dir)) return []
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => ({ category, slug: f.replace(/\.mdx$/, "") }))
  })
}

