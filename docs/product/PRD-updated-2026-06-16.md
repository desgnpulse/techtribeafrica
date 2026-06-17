# TechTribe Africa — Product Requirements Document
**PRD v2 | Updated: 2026-06-16**
Supersedes: `docs/product/TECHTRIBEAFRICA COM PRD.md`

---

## 1. Project Overview

TechTribe Africa is a technology intelligence publication covering the patterns shaping business and technology in Africa. It takes fragmented signals — pricing shifts, platform changes, behavioral patterns, startup activity — and converts them into structured interpretation and opportunity maps for founders, operators, and builders on the continent.

This is not breaking news. Not a blog. Not a press release aggregator. It is the interpretation layer between what happened and what it means — with a specific mandate to answer: what can be built because of it?

The publication operates across three content pillars: Frontier Reports (long-form research), Market Signals (short analytical reads), and Build Opportunities (opportunity mapping for builders).

---

## 2. Problem Statement

African tech media produces two things well: news (what happened) and noise (shallow commentary, imported Silicon Valley frameworks, press-release amplification). What it does not produce is structured interpretation — a reliable, analytical layer that converts market signals into actionable insight for people making product and business decisions on the continent.

The specific pain for the target user: "I can see what is happening, but I do not know what it means for Africa, and I do not know what to build because of it."

Existing solutions fail this user in specific ways:

- **TechCabal / Disrupt Africa:** Report events well but do not interpret implications or map opportunities.
- **Partech / Frontier Brief research reports:** Analytical but slow (quarterly), expensive (institutional pricing), and written for investor audiences, not builders.
- **Hacker News / Reddit / Twitter discourse:** Globally framed, requires significant filtering, has no Africa-specific analytical layer.
- **Imported tech newsletters (Stratechery, Morning Brew):** Excellent frameworks but built on Silicon Valley assumptions that do not apply to African market conditions — pricing reality, phone-native infrastructure, SME workflow patterns, BSP markup distortions.

The gap is not information volume. It is interpretation quality.

---

## 3. Audience

### 3.1 Primary ICP

Founders (pre-seed to Series A) building companies and products in Africa.

Defining behavior: they are making decisions about what to build, for whom, and at what price. They need to understand market conditions, not just market events.

Specific profiles:
- Technical founders at early-stage startups evaluating product-market fit
- Indie hackers building Africa-market tools
- First-time founders making market selection decisions
- Operators deciding whether to rebuild or adapt foreign products for African contexts

### 3.2 Secondary ICP

- Product managers and technical operators at African startups and SMEs
- Diaspora tech professionals evaluating re-entry or building remotely for African markets
- Early-stage investors seeking ground-level analytical context they cannot get from deal flow or LP reports

### 3.3 Tertiary ICP (Phase 2 revenue target)

Venture funds, accelerators, incubators, development organizations, and innovation hubs that pay for ecosystem intelligence rather than consuming free editorial content.

This audience is not the primary editorial target — content must not be written for institutional readers — but they represent the highest willingness-to-pay segment for premium research products (Phase 2+). The distinction: founders consume intelligence for building decisions; institutions pay for intelligence for portfolio, strategy, and investment decisions.

### 3.4 Who This Is NOT For

- Enterprise executives
- Casual tech-curious readers
- Journalists seeking sources or quotes
- Academics and development economists
- Anyone whose primary need is knowing what happened (they should read TechCabal)

---

## 4. Positioning

**One-line position:**
TechTribe Africa is where African tech signals become actionable insight for builders.

**Category claim:**
Narrative intelligence media for African tech. Not news. Not research reports. The interpretation layer in between.

**Competitive positioning:**

The natural comparisons — TechCabal, Disrupt Africa, TechCrunch — are wrong. Those are news properties. As TechTribe matures, the actual competitive frame shifts to intelligence and research businesses:

| Peer | What they do | Relevant because |
|------|-------------|-----------------|
| TechCabal / Disrupt Africa | Covers events | The comparison most people make; the category to explicitly not be |
| CB Insights | Emerging technology intelligence, proprietary data, institutional pricing | The structural model TechTribe should eventually approach |
| Gartner / McKinsey Insights | Market analysis for enterprise decision-makers | The revenue model (not the audience) to study |
| Stratechery | Deep strategic analysis of tech, paid newsletter | The quality bar and editorial independence model |
| PitchBook / Crunchbase | Deal data and market maps | Competes for institutional wallet share in Phase 3 |
| Future Today Institute | Annual tech trend analysis for strategic planning | Research report model, sold to institutional buyers |

**Near-term (Phase 1):** Position against TechCabal (interpretation vs. news). **Long-term (Phase 2–3):** Position against intelligence products, not media properties. The business model, pricing, and audience of the long-term product is closer to CB Insights than to TechCabal.

**What TechTribe is:**
- Interpretation layer for African tech signals
- Pattern recognition published as editorial content
- Opportunity mapping for founders and builders
- An intelligence publication that happens to look like a media product

**What TechTribe is not:**
- Breaking news
- Press release aggregator or startup tracker
- Personal blog or opinion column
- VC propaganda or ecosystem cheerleading
- AI-generated content (editorial quality requires human judgment about African market context)

---

## 5. Content Pillars

The three pillars are not interchangeable formats. Each serves a distinct editorial function and a distinct reader intent.

### 5.1 Frontier Reports

*Long-form research and analysis*

Format: 800–2,000 words
Color: Forest green (#0E4A32) — used for category tags and pillar hero backgrounds
Route: `/frontier-reports/`

**Purpose:** Establish intellectual authority. Generate evergreen search traffic. Serve as the anchor content that newsletters and social posts reference back to.

**Structure (non-negotiable for all Frontier Reports):**
1. **What happened** — the specific market event, shift, or pattern being analyzed
2. **Why it matters** — second and third-order implications, specifically for African market conditions
3. **What changes next** — what this shift makes possible, necessary, or obsolete
4. **Opportunity layer** — what can be built, sold, or invested in because of it

**Editorial bar:** Specific data and named examples are required. A Frontier Report without at least one specific company, pricing data point, or African market statistic is not ready to publish. The WhatsApp article (July 2025 Meta pricing shift, DuceCRM, Lagos fashion startup cost reduction) sets the standard for what specificity means.

**Approved examples:**
- "Africa didn't adapt WhatsApp for business. Business adapted to WhatsApp."
- "The Missing Middle of African Software"
- "Why Micro-Business Software Wins Before Enterprise Software in Africa"

### 5.2 Market Signals

*Short analytical reads*

Format: 200–600 words
Color: Deep slate (#1C2B4A)
Route: `/market-signals/`

**Purpose:** High frequency, high shareability, social-native distribution. Shows readers the patterns TechTribe is tracking in real time. The cadence signal — readers learn to check back.

**Structure:** Lead with a specific observation (not a general claim). Apply the four-question framework in compressed form. End with one sharp implication.

**What distinguishes a Market Signal from a Frontier Report:** Depth and evidence base. A Market Signal can name one signal and draw one conclusion. A Frontier Report requires multiple signals, more evidence, and a deeper argument.

**Approved examples:**
- "What Meta's per-message pricing change actually breaks for African SMEs"
- "Why everyone is suddenly building AI agents in Africa"
- "12 funding rounds and what they signal about the infrastructure gap"

### 5.3 Build Opportunities

*Opportunity mapping for builders*

Format: 400–1,000 words
Color: Dark amber (#7A4A10)
Route: `/build-opportunities/`

**Purpose:** This is the moat. The thing TechCabal will not publish because it requires analytical synthesis to see what is not there yet. Every Build Opportunity should be slightly uncomfortable — it should name a gap that is genuinely underserved, not an obvious idea dressed up.

**Required elements per Build Opportunity:**
- Clear problem definition (not "a gap exists" — who suffers, how, with what frequency)
- ICP (specific profile, not a category)
- Why now (what changed recently to make the timing viable)
- Entry angle (the wedge a small team with limited capital could attack first)
- Market friction (the real barrier — almost never technical, usually distribution, trust, or pricing)

**Approved examples:**
- "The Follow-Up OS opportunity in African micro-business"
- "Why appointment-based businesses are the first WhatsApp-native SaaS market"
- "The $50/month software gap nobody is solving in African SMEs"

---

## 6. Editorial Principles

These are the standards every piece of content is held to.

1. **Interpret, do not report.** If the content could be written from a press release, it should not be published. TechTribe adds the analytical layer that no other source provides.

2. **Africa-grounded, not Africa-exceptional.** African tech follows global patterns — but with specific market conditions that change the implications. Those conditions are always named: pricing reality, infrastructure constraints, phone-native behavior, SME workflow patterns.

3. **Specific over general.** Named companies, specific pricing data points, real market examples. Abstractions without evidence are opinion, not intelligence.

4. **Founder-first, not investor-first.** The primary reader is making a product or business decision. Content is held to a standard of usefulness to a builder, not impressiveness to an institutional audience.

5. **Analytical tone, never hype.** Skeptical is fine. Excited is fine. Promotional is not. Exclamation marks are not permitted in editorial content. Contractions are not permitted in editorial content.

6. **No paid placements.** No "analysis partnerships" that compromise editorial independence. Monetization comes from subscriptions and research products, not advertising.

7. **Four questions or nothing.** If an article cannot answer all four (what happened / why it matters / what changes / what opportunity exists), it is not ready to publish.

---

## 7. Newsletter: TechTribe Signals

**Name:** TechTribe Signals

**Cadence:** Weekly

**Format per issue:**
- 3 market signals (brief pattern reads, 2–3 sentences each)
- 1 Frontier Report highlight (key insight pulled, links to full piece)
- 1 Build Opportunity (the highest-signal item from the week's intelligence)

**Provider:** To be decided before launch. Recommended: Buttondown (clean API, no lock-in, $0 for first 100 subscribers, respected sender reputation) or ConvertKit (better segmentation if institutional audience needs separate flows). This decision gates the newsletter CTA functionality across the site.

**Integration approach (Phase 1):** External provider embed form. No server-side API calls. The provider handles submission, confirmation, and delivery. No custom newsletter infrastructure.

**Positioning:** "Not the news. The meaning." One email per week. No summaries. No aggregation. Synthesised intelligence for builders.

---

## 8. Design System

The design system is finalized in the HTML prototypes (`docs/`). All Next.js implementation must match these specifications exactly. Do not deviate without deliberate decision.

**Typography:**
- Headlines and article body: EB Garamond (serif), weights 400/500/600, italic for pull quotes
- UI, labels, metadata: Inter (sans), weights 400/450/500
- Font loading: Google Fonts with preconnect optimization

**Colour palette:**
```
--ink:        #111110   primary text
--ink-2:      #3A3A38   secondary text
--ink-3:      #6B6B67   tertiary / UI chrome
--ink-4:      #9A9A95   muted / timestamps / placeholder
--rule:       #E4E2DC   borders and dividers
--rule-soft:  #EFEDE8   soft surface / card backgrounds
--bg:         #FAFAF8   page background
--white:      #FFFFFF   component backgrounds
```

**Pillar accent colours (used for categorisation only, never decoration):**
```
--frontier:   #0E4A32   deep forest green — Frontier Reports
--signal:     #1C2B4A   deep slate — Market Signals
--build:      #7A4A10   dark amber — Build Opportunities
```

**Layout:**
- Maximum content width: 1180px
- Article reading column: 680–720px maximum
- Mobile breakpoints: 600px (single column), 960px (sidebar collapses, hero stacks)
- Gap scale: `clamp(20px, 4vw, 52px)`

**Design principles:**
- Text-first. No unnecessary decoration.
- Cards use borders, not shadows.
- No autoplay media, no advertising units.
- Reading progress bar on article pages (2px, pillar-color, tracks scroll through article body only).
- Broadsheet masthead treatment on homepage.

**Reference implementation:** All HTML prototypes in `docs/` are the design authority. `docs/index.html` for homepage, `docs/article.html` for article page, `docs/frontier-reports.html` for pillar index, `docs/market-signals.html` for date-first list layout, `docs/build-opportunities.html` for opportunity card grid.

---

## 9. Technical Requirements

### 9.1 Phase 1 — MVP (current scope)

**Stack:**
- Next.js 16 (App Router), TypeScript
- MDX for article content — no CMS, no database, no authentication
- Tailwind CSS v4
- pnpm package manager
- PM2 + Nginx on Hetzner VPS

**Content structure:**
```
src/content/
  frontier-reports/*.mdx
  market-signals/*.mdx
  build-opportunities/*.mdx
```

**Frontmatter schema (all fields required):**
```
title:         string
slug:          string (URL-safe, kebab-case)
date:          YYYY-MM-DD
category:      "frontier-reports" | "market-signals" | "build-opportunities"
categoryLabel: string
tags:          string[]
summary:       string (150–200 chars, used for og:description)
readingTime:   number (minutes, honest estimate)
```

**Required pages and their function:**

| Route | Page | Notes |
|-------|------|-------|
| `/` | Homepage | Broadsheet masthead, featured article hero, three-category sections, sidebar (newsletter + most-read) |
| `/frontier-reports` | Pillar index | Featured card + 3-column grid, forest green pillar hero |
| `/market-signals` | Pillar index | Date-first list layout (large grey day number, broadsheet feel), slate pillar hero |
| `/build-opportunities` | Pillar index | Opportunity grid with wedge callout per card, amber pillar hero |
| `/[category]/[slug]` | Article | Reading progress bar, breadcrumb, author block, related articles, full signature structure visible |
| `/about` | About | Editorial principles stated explicitly, stat grid, Organization + AboutPage schema |
| `/search` | Search | Client-side filter by pillar + keyword, URL param sync (`?q=`), popular searches grid |
| `/feed.xml` | RSS feed | RSS 2.0 with atom, content, dc, media namespace extensions; content:encoded with real excerpts |

**SEO requirements:**
- JSON-LD schemas: Organization, WebSite (homepage), NewsArticle (per article), BreadcrumbList (per article + index), CollectionPage (per category index), AboutPage (about page)
- `og:title`, `og:description`, `og:image` (1200×630px) per page
- Canonical URLs from `NEXT_PUBLIC_SITE_URL`
- `wordCount` and `timeRequired` in article schema
- `datePublished` and `dateModified` in article schema

**Newsletter signup:**
- Provider embed form (Phase 1 — no server-side integration)
- Appears in: sidebar (homepage), NewsletterBand component (article pages, category indexes), footer
- Form fields: email only (Phase 1 — no segmentation form)

**Analytics:**
- Lightweight, privacy-first provider required before launch
- Recommended: Plausible Analytics ($9/month, no cookie banner, GDPR-compliant, no personal data)
- Script in `src/app/layout.tsx`
- Track: pageviews, unique visitors, article reads, newsletter form submissions (conversion event)

**Brand assets required before launch:**
- `public/logo.svg` — wordmark in EB Garamond, horizontal layout
- `public/logo.png` — same, rasterized at 800×200px for schema markup
- `public/og-default.png` — 1200×630px, ink background (#111110), white wordmark, tagline below
- `public/favicon.ico` — minimal wordmark or lettermark

**Environment variables:**
```
NEXT_PUBLIC_SITE_URL=https://techtribeafrica.com
NEWSLETTER_API_KEY=[provider key — set after provider decision]
NEWSLETTER_LIST_ID=[provider list ID — set after provider decision]
```

**Deployment:**
- `output: 'standalone'` in next.config.ts (required for PM2)
- SSH target: elymica-ts
- Web root: `/var/www/techtribeafrica.com`
- PM2 app name: `techtribeafrica`
- Local dev port: 3000
- Production Nginx proxy port: 3016 (Nginx → 80/443)
- Cloudflare Full Strict SSL (origin certs at `/etc/nginx/ssl/techtribeafrica.com.{pem,key}`)
- Deploy sequence: `git pull → pnpm install --frozen-lockfile → pnpm build → pm2 reload techtribeafrica`

### 9.2 Phase 2 — Intelligence Pipeline (not in MVP scope)

The following are planned for Phase 2 but are explicitly out of scope for the current build:

- Signal ingestion database (Supabase schema designed in `docs/product/Planning.md`)
- n8n automation for signal classification and clustering
- AI-assisted article generation from signal clusters (see open questions on editorial policy)
- Distribution asset auto-generation (LinkedIn, Twitter/X threads, newsletter excerpts)
- FlowStacks opportunity pipeline integration
- Analytics feedback loop for signal weighting

**Architecture constraint for Phase 1:** Even though Phase 2 will add a database layer, article URLs must remain stable. The MDX-based URL scheme (`/[category]/[slug]`) should be preserved when the database is added. Design content structure now to be queryable later without breaking inbound links.

---

## 10. Content Requirements for Launch

**Minimum viable content at launch:**
- 3 Frontier Reports
- 2 Market Signals
- 1 Build Opportunity

This minimum ensures all three pillar sections on the homepage render content, the RSS feed has meaningful entries, the newsletter has a basis for issue one, and the editorial voice is demonstrated across all three formats.

**Current state:** 1 of 6 articles exists.

**Recommended first-wave articles (from Planning.md calendar):**

| # | Title | Type | Status |
|---|-------|------|--------|
| 1 | "Africa didn't adapt WhatsApp for business. Business adapted to WhatsApp." | Frontier Report | ✅ Published |
| 2 | "The Missing Middle of African Software" | Frontier Report | Not started |
| 3 | "Why African Businesses Don't Use CRMs — They Use Memory Instead" | Frontier Report | Not started |
| 4 | "The $50/month Software Gap in African SMEs" | Market Signal | Not started |
| 5 | "WhatsApp Is Already Africa's Operating System" | Market Signal | Not started |
| 6 | "The Follow-Up OS Opportunity in African Micro-Business" | Build Opportunity | Not started |

**Editorial note:** Articles 2 and 3 continue the conceptual thread of article 1 — they are not standalone pieces but the next layer of the WhatsApp/CRM thesis. Article 4 and 5 should be shorter (300–500 words), specific, data-grounded. Article 6 is the first Build Opportunity and should name a specific wedge, specific ICP, and specific entry angle — not a general observation.

---

## 11. Success Metrics

**Phase 1 — First 90 days post-launch:**
- Newsletter subscribers: 500 (primary early traction signal)
- Monthly unique readers: 2,000+
- 30-day reader return rate: >20%
- Articles published per month: minimum 6 (2 Frontier Reports, 3 Market Signals, 1 Build Opportunity)
- Social shares per Frontier Report: >50 combined (LinkedIn + Twitter/X)

**Phase 2 — Months 4–12:**
- Newsletter subscribers: 5,000
- First paid product revenue (premium report or membership tier)
- Cited or referenced by at least two named accelerators, VC newsletters, or development organizations

**North star metric:** "The place African founders check before deciding what to build."
Measurable when: readers cite TechTribe in pitch decks, funding applications, or product strategy documents. This requires qualitative signals (DM conversations, Twitter mentions, newsletter reply content) before the audience is large enough for quantitative measurement.

---

## 12. Growth Strategy

**Phase 1 — Organic authority:**
- LinkedIn long-form posts for each Frontier Report (thought leadership format from Planning.md templates)
- Twitter/X threads for Market Signals (5–7 tweet structure)
- WhatsApp group seeding in founder communities and accelerator groups
- Submission to relevant ecosystem newsletters (This Week in Africa, Founders Factory Africa newsletter, etc.)

**Distribution rule:** Every article published generates three distribution artifacts before it is considered complete: a LinkedIn post, a Twitter/X thread, and a two-sentence WhatsApp version.

**Phase 2 — Newsletter compounding:**
- Weekly TechTribe Signals becomes habitual reading for the ICP
- Each issue links to new content and surfaces one prior Frontier Report (evergreen loop)
- The reputation goal: "must-read before your Monday planning session"

**Phase 3 — Distribution partnerships:**
- Accelerator newsletters (Founders Factory Africa, Lagos Techies, Antler, etc.)
- African VC firm newsletters
- Development organization content partnerships (IFC, GSMA Intelligence, Omidyar Network)

**Critical constraint:** No content partnership that gives a partner influence over editorial direction. Distribution relationships are one-way — they carry TechTribe content to their audience. They do not shape what TechTribe publishes.

---

## 13. Monetization

Not in MVP. No monetization features should be built in Phase 1.

**Revenue model in sequence (Phase 2+):**

1. **Free content layer** — Builds audience and authority. No revenue. This phase cannot be skipped.

2. **TechTribe Signals Premium** — Paid newsletter tier with full opportunity breakdowns, early signals, and depth not in the free version. Target: $5–$15/month. Requires 2,000+ free subscribers before conversion rate makes this viable.

3. **Intelligence reports** — Standalone research documents, high-margin, one-time purchase.
   - "State of WhatsApp Commerce in Africa" ($49–$99)
   - "African SaaS Opportunity Map" ($99–$199)
   - "Micro-Business Software Gap Analysis" ($29–$79)
   Primary audience for these: tertiary ICP (institutional buyers).

4. **Founder research membership** — Monthly subscription, opportunity database access, market maps, build theses. Target: $15–$49/month. Phase 3.

5. **Private intelligence layer** — Not everything discovered through signal analysis becomes a published article. The deeper market maps, validated opportunity scores, and pattern databases are the highest-margin products. Public articles attract audience. Private analysis generates revenue. This two-tier model (public surface / private depth) is how most real intelligence businesses operate.

6. **FlowStacks pipeline** — TechTribe-validated opportunities move into product development under a separate product studio. This is the long-term leverage: TechTribe as customer discovery at scale. Not monetized through TechTribe directly.

**What monetization must never include:**
- Display advertising
- Native content or paid placement masquerading as editorial
- Selling subscriber data
- Sponsorships that require editorial mentions or positive coverage

---

## 14. Strategic Context: OutlierOS

This section is context, not MVP scope. It explains why certain structural decisions in Phase 1 matter beyond what is visible in the current build.

TechTribe Africa is not a standalone product. It is the intelligence layer of a larger system — currently named OutlierOS — with the following structure:

```
OutlierOS
│
├── TechTribe Africa    — Intelligence layer (what this document covers)
├── FlowStacks          — Execution layer (product validation and building)
├── Venture Studio      — Product creation (from validated opportunities)
└── Research Layer      — Opportunity database (the compounding asset)
```

The operational loop:

```
Raw signals (market activity, pricing shifts, founder behavior)
            ↓
TechTribe: Signal → Pattern → Article → Audience → Community → New Signals
            ↓
  Validated opportunities (what the data returns to repeatedly)
            ↓
FlowStacks: Opportunity → Product → Revenue → Usage data
            ↓
    Real usage data feeds back into signal weighting
```

**What this implies:**

1. **The article is the public version of the insight. The database is the real company.** Signal databases, opportunity maps, and validated patterns accumulate into a proprietary asset that is defensible in ways that articles are not.

2. **The community is not engagement — it is data collection.** When a founder in Nairobi comments "we are seeing the same thing," that is a new signal. Community discussion is a signal ingestion mechanism that articles alone cannot create.

3. **Africa is the beachhead, not the boundary.** The underlying patterns — WhatsApp commerce, informal business workflows, mobile-first operations, low-trust environments — apply to Latin America, India, and Southeast Asia. Africa-first is the correct starting point. Emerging Market Intelligence is the long-term category.

4. **The long-term product form is a dashboard, not a newsletter.** Founders logging in to see rising and declining opportunities, emerging risks, and validated gaps in real time. That is decision infrastructure, not publishing. That is where the valuation conversation changes.

5. **Future team hires are analysts before journalists.** Researchers, former founders, operators. Writing is the packaging; interpretation is the product.

**Practical implication for Phase 1:** Article frontmatter, category taxonomy, and tag schema should be designed so they can be queried by a Phase 2 database layer without breaking existing article URLs. The content structure decisions made now are the architecture decisions for Phase 2.

---

## 15. Open Questions

The following decisions are not yet made and cannot be papered over.

1. **Newsletter provider** — Buttondown, ConvertKit, or other? This decision gates the newsletter CTA across the site. Inputs to evaluate: pricing at scale, API simplicity for Phase 2 automation, segmentation capabilities, sender reputation with Africa-based IP addresses, export portability.

2. **Analytics provider** — Plausible, Fathom, or GA4? Recommendation is Plausible (privacy-first, no cookie banner, GDPR-compliant, script under 1kb). Evaluate cost at scale before committing.

3. **Social account status** — Are @TechTribeAfrica (Twitter/X) and linkedin.com/company/techtribeafrica created, accessible, and under editorial control? If not, this gates launch. The Twitter handle may already be claimed.

4. **Logo and brand assets** — No production logo exists. Minimum needed: wordmark SVG and og:image PNG. This is a launch-blocking gap because the Organization schema references logo.png in all pages.

5. **Publishing cadence** — What is the sustainable cadence for the editorial operation in its current form? The 30-day calendar in Planning.md implies 4 pieces per week at quality, which is not realistic for a one-person editorial operation. Recommendation: 2 per week (1 Frontier Report or Market Signal per week, 1 shorter piece per week). Cadence must be set at what can be sustained for 6 months, not what would be impressive for 2 weeks.

6. **AI writing role** — The Planning.md automation pipeline suggests AI-generated articles from signal clusters. The existing WhatsApp article demonstrates the quality level the brand requires: specific pricing data, named companies, specific geographic detail. These are incompatible approaches at Phase 1. The editorial policy on AI assistance must be explicit: AI for signal collection, classification, and research assistance is acceptable. AI for first-draft article generation will not meet the editorial standard at this stage without human rewriting that negates the efficiency gain.

---

## 16. Out of Scope

The following will not be built in Phase 1. These are not ideas for later — they are active exclusions that prevent scope creep.

- Job board
- Startup directory or database
- Community forum or discussion layer
- User accounts or authentication
- CMS or database-backed content (MDX only in Phase 1)
- n8n or other automation workflows
- AI article generation pipeline
- Signal database or clustering engine
- FlowStacks integration
- Any monetization features (no paywall, no Stripe, no subscription management)
- Podcast or video content
- Events or community products
- Mobile app

---

*This document supersedes PRD v1 (`docs/product/TECHTRIBEAFRICA COM PRD.md`). That file is archived, not deleted.*
