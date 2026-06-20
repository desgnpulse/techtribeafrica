# Command: /techtribe:review

Editorial gate. Runs three reviewer agents against a written article.
Use after /techtribe-write and lint, before publishing.

## Usage

```
/techtribe:review [file-path]
/techtribe:review src/content/frontier-reports/my-article.mdx
/techtribe:review                                               # reviews the most recently written article
```

## Steps

### Step 1 - Load context

Always read `data/editorial-context.json` first. Never rely on memory.

Load: voice spec, audience definition, article structure, lint rules.

Then read the article file. Parse frontmatter and body separately.

### Step 2 - Run Reader Riara

Load persona from `plugins/editorial/agents/reader-riara.md`.

Riara reviews from the audience's perspective:
- Opener test: first sentence earns the second, or she leaves
- Prior knowledge test: does the opener assume she knows nothing?
- Density test: is every paragraph earning its place?
- Implication test: is she smarter after reading this?
- Credibility test: are claims specific and attributable?
- Position test: does the piece commit to a view?

### Step 3 - Run Voice Keeper

Load persona from `plugins/editorial/agents/voice-keeper.md`.

Voice Keeper reviews structure and synthesis:
- Four-beat structure (What happened / Why it matters / What changes / Opportunity layer)
- Section dividers (--- only, no ## headers)
- Opener format (scene or strong claim)
- Closer format (implication, not summary)
- Synthesis vs. news summary
- Third person, no contractions, no banned words
- Sentences under 20 words (if lint already passed, this is confirmed)

### Step 4 - Run Distribution Auditor

Load persona from `plugins/editorial/agents/distribution-auditor.md`.

Distribution Auditor generates all three distribution formats and checks compliance:
- LinkedIn text post (hook quality, format rules, 150-250 words)
- X thread (5 tweets, structure, under 280 chars each)
- WhatsApp version (2 sentences, no jargon, forwardable)

### Step 5 - Consolidated output

Aggregate the three reviews into a single report:

```
## /techtribe:review — [slug] — [date]

### Riara: [Will Read / Will Skim / Will Abandon]
[Her reaction in 1-2 sentences]

Key finding: [The specific line or section where she engages or drops off]

### Voice Keeper: [Pass / Needs Work / Fail]
Structure: [Pass / Fail]
Synthesis: [Pass / Fail]
Voice violations: [list or NONE]

### Distribution Auditor: [Ready / Needs Revision]
LinkedIn hook: [Pass / Fail] — [first 2 lines quoted]
X thread: [ready or issues]
WhatsApp: [ready or issues]

---

### Must Fix Before Publish
1. [Issue] — [which reviewer flagged it and why]
2. [Issue] — [which reviewer flagged it and why]

### Should Fix
1. [Improvement] — [what it unlocks]

### Ready to Publish: [YES / NO / CONDITIONAL]

---

### Distribution Formats (ready to use if Pass)

LINKEDIN
[Full post — copy-paste ready]

X THREAD
Tweet 1: [text]
Tweet 2: [text]
Tweet 3: [text]
Tweet 4: [text]
Tweet 5: [text]

WHATSAPP
[2-sentence version]
```

### Step 6 - Update social-distribution.md

If "Ready to Publish: YES", append the distribution formats to `docs/social-distribution.md`
under the article slug.

Format matches existing entries in that file.

## Reviewer Escalation Rules

Run all three reviewers on every article. Do not skip any.

If Riara flags "Will Abandon":
- Stop. Do not proceed to Voice Keeper or Distribution Auditor.
- The opener or density problem must be fixed first.
- Re-run /techtribe:review after the fix.

If Voice Keeper flags a structural failure:
- Note it in Must Fix. The Distribution Auditor can still run (it works from the argument, not the structure).
- But "Ready to Publish" cannot be YES until Voice Keeper passes.

If Distribution Auditor flags a hook failure:
- The LinkedIn post needs a rewrite. The article itself may not need to change.
- Rewrite the hook, rerun Distribution Auditor check only.
