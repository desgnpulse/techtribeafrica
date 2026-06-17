# TechTribe Africa
# Narrative intelligence media platform for African tech

## 0. WHAT THIS PROJECT IS
TechTribe Africa publishes insight-driven analysis of African and global tech trends.
It translates tech signals into economic, product, and founder-level implications for Africa.
Primary audience: founders, builders, PMs, and early-stage investors on the continent.
PRD: docs/product/PRD-updated-2026-06-16.md (v1 archived at docs/product/TECHTRIBEAFRICA COM PRD.md)

## 1. CURRENT STATE
Sprint 0 complete. Build passes. All pages and components built.
5 articles live: 3 frontier-reports, 1 market-signals, 1 build-opportunities — all lint-pass, all with hero images.
RSS feed live at /feed.xml. Homepage hero image wired. Newsletter sidebar: static form only (Beehiiv embed pending — need embed URL from dashboard).
⚠ Deploy pending: pnpm build passes locally, not yet pushed to Hetzner.
⚠ Beehiiv embed: need NEXT_PUBLIC_BEEHIIV_EMBED_URL from Beehiiv dashboard to wire the newsletter form.
Newsletter: Beehiiv (decided). X: @TechTribeHQ (live). Facebook: live.
Active plan: .claude/plans/techtribeafrica-init.md
Updated PRD: docs/product/PRD-updated-2026-06-16.md

## 2. STACK
- Next.js 16 (App Router) — site framework
- MDX — article format (content as .mdx files in src/content/)
- Tailwind CSS v4 — styling
- TypeScript — language
- pnpm — package manager
- Nginx + PM2 — production server (Hetzner VPS)
- Cloudflare — CDN and Full Strict SSL

## 3. KEY CONVENTIONS
- Articles live in src/content/{frontier-reports,market-signals,build-opportunities}/
- Each article is an .mdx file with frontmatter: title, date, category, tags, summary
- Article structure: "What happened" / "Why it matters" / "What changes" / "Opportunity layer"
- next.config.ts uses output: 'standalone' for PM2 deployment
- No auth, no DB in MVP — pure static content + email capture

## 4. DELIVERABLES / ENTRY POINTS
- techtribeafrica.com — public site
- src/app/ — Next.js App Router pages
- src/content/ — MDX article files (source of truth for content)
- RSS feed at /feed.xml
- Newsletter signup (Beehiiv embed)
