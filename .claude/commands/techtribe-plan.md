# Command: /techtribe:plan

Per-article brief generator. Use before /techtribe-write to nail the angle,
pillar, and thread placement for a single article.

Different from /techtribe-plan (the global skill, which generates 15-article calendars
and full content architecture). This command is lighter: one topic, one brief.

## Usage

```
/techtribe:plan "<topic or working title>"
```

Examples:
```
/techtribe:plan "Stablecoin rails for African B2B trade finance"
/techtribe:plan "Why African founders are choosing open-source LLMs"
/techtribe:plan "The M-Pesa super-agent model"
```

## Steps

### Step 1 - Load context

Always read `data/editorial-context.json` first. Never rely on memory.

Key fields to load:
- `thesis_threads` - which threads exist and what angles are already covered
- `published_articles` - the complete index, to check for duplication
- `pillars` - definitions and tests for pillar fit
- `voice` and `audience` - to frame the angle correctly

### Step 2 - Duplication check

Search the `published_articles` array in the context JSON.

Is there an existing article that argues the same point from the same angle?
- If YES: flag it. Propose a differentiated angle before continuing.
- If NO: continue.

Check which `thesis_thread` the topic belongs to. If it extends an existing thread,
note which articles in that thread to cross-reference internally.

### Step 3 - Pillar assignment

Test the topic against each pillar's `test` field in the context JSON:

- **Frontier Report**: explains something structural most people have wrong
- **Market Signal**: names a signal most people are misreading
- **Build Opportunity**: derives a clear product opportunity from a signal

If it passes more than one test, pick the strongest fit and note the other as a potential satellite.

### Step 4 - Angle and argument

State the article argument in one sentence. Not a topic. Not a title. An argument.

Bad: "This article will cover M-Pesa super-agents."
Good: "M-Pesa's super-agent model is solving float scarcity at the edges of the network - and no one has built the software layer for it yet."

The argument must:
- Take a position
- Be specific to Africa
- Not repeat an argument already made in a published article

### Step 5 - SEO anchor

Identify the primary keyword (see /techtribe-write STEP 0.5 for full SEO framework).
This is a quick check only - the full SEO brief runs inside /techtribe-write.

What would an African founder, builder, or investor type into search to find this?

### Step 6 - Output brief

```
## Article Brief

Topic: [user's input]
Argument: [one-sentence argument — position, not topic]

Pillar: [frontier-reports | market-signals | build-opportunities]
Thread: [which thesis_thread this extends, or "new thread: [name]"]
Cross-references: [slugs of published articles to link internally]
Duplicate risk: [NONE / PARTIAL - [explain] / HIGH - [recommend differentiated angle]]

Primary keyword: [keyword]
Suggested slug: [kebab-case-slug, ≤60 chars]

Reviewer checklist:
  - Invoke Riara if: [condition that triggers audience risk]
  - Invoke Voice Keeper if: [structural risk to flag]
  - Invoke Distribution Auditor: always (for LinkedIn post after publish)

→ Ready for /techtribe-write. Pass this brief as the article slot.
⚠ [Any gaps: missing research, claim that needs a data source, etc.]
```

## What This Command Does NOT Do

- Generate a full 15-article content calendar (use /techtribe-plan for that)
- Write the article (use /techtribe-write after this brief)
- Review a written article (use /techtribe:review after writing)
- Update data/editorial-context.json (that is a manual step after publish)
