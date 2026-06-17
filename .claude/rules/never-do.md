# Never-Do Rules — TechTribe Africa
# Project-specific. Global rules live in /home/jay/dev/.claude/rules/never-do.md

# Content
Never use banned words in article content: delve, leverage, seamless, unlock, robust,
  streamline, harness, cutting-edge, transformative, game-changer, revolutionary
Never write press-release framing — TechTribe interprets, it does not announce
Never add exclamation marks to editorial content (the lint hook will catch this)
Never write articles in first person — brand voice is analytical, third-person
Never use contractions in article content — write "did not" not "didn't", "it is" not "it's" (lint hook catches this)

# Architecture
Never add a database in MVP — content is MDX files, not a CMS or DB-backed system
Never add auth or user accounts in MVP (PRD explicitly prohibits this)
Never put newsletter signup logic in a server action that leaks API keys client-side
Never hardcode the site URL — always use NEXT_PUBLIC_SITE_URL from env

# Next.js / MDX
Never import MDX components inside content files — keep content portable and dumb
Never use next/image with external domains without adding them to next.config.ts domains list
Never skip output: 'standalone' in next.config.ts — PM2 deployment requires it

# Deployment
Never commit .env or .env.production — only .env.example with placeholder values
Never deploy without running pnpm build locally first — catch build errors before ssh deploy
