# TechTribe Africa
# Narrative intelligence media platform for African tech

## 0. WHAT THIS PROJECT IS
TechTribe Africa publishes insight-driven analysis of African and global tech trends.
It translates tech signals into economic, product, and founder-level implications for Africa.
Primary audience: founders, builders, PMs, and early-stage investors on the continent.
PRD: docs/product/PRD-updated-2026-06-16.md (v1 archived at docs/product/TECHTRIBEAFRICA COM PRD.md)

## 1. CURRENT STATE
Sprint 0 complete. Sprint 1 (content expansion) starting.
31 articles live — all with hero images, all lint-pass, all deployed to techtribeafrica.com.
  12 Frontier Reports, 13 Market Signals, 6 Build Opportunities.
  All 31 are within the WhatsApp / micro-business / follow-up / mobile money / fintech / AI thesis threads.
  Full index in data/editorial-context.json (published_articles array).
Mobile nav with hamburger live. Sitemap at /sitemap.xml live (36 pages).
Beehiiv newsletter integration live — api:direct subscribers land in dashboard.
Social distribution pack in docs/social-distribution.md covers all 31 articles (3 formats each).
⚠ LinkedIn, Instagram, Threads accounts pending (Jay to confirm when live).
Active plan: .claude/plans/techtribeafrica-sprint1.md
PRD: docs/product/PRD-updated-2026-06-16.md

IA DECISION (confirmed 2026-06-18): Format-first navigation is correct per PRD.
  Frontier Reports / Market Signals / Build Opportunities — not topic verticals.
  Prototype mockup nav (Fintech / AI in Africa / Startups / Policy) is retired.
  Topic coverage expands within the three format pillars, not as separate nav sections.

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

## 5. EDITORIAL PLUGIN SYSTEM (added 2026-06-20)

Single source of truth: data/editorial-context.json
  - Voice spec, audience, pillars, distribution formats, lint rules
  - Thesis threads: 9 active threads, all published articles indexed
  - Read this file at the start of every content session

Reviewer agents (plugins/editorial/agents/):
  - reader-riara.md — Nairobi PM audience lens; invoke before Voice Keeper
  - voice-keeper.md — structure + synthesis gate; invoke on every article
  - distribution-auditor.md — LinkedIn/X/WhatsApp formatter; invoke before publish

Slash commands (.claude/commands/):
  - /techtribe:plan <topic> — per-article brief (pillar, thread, angle, slug)
  - /techtribe:review [file] — editorial gate (all 3 agents + distribution formats)
  - /techtribe:post [file] — LinkedIn text post generator (format-compliant)

Global skills (invoke from anywhere):
  - /techtribe-plan — full content architecture, 15-article calendar, link building
  - /techtribe-write — article writer with SEO, data-visual, lint, image prompts

CI: .github/workflows/content-lint.yml runs scripts/lint-content.sh on PR and push to src/content/ or data/
