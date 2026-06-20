# Command: /techtribe:post

Generates a LinkedIn text post from a published or drafted article.
Enforces format rules. Output is copy-paste ready.

Use this when:
- An article has been written and you need the LinkedIn post now
- You want to generate the post without running a full /techtribe:review
- You are retrofitting distribution for older articles

## Usage

```
/techtribe:post [file-path]
/techtribe:post src/content/frontier-reports/my-article.mdx
/techtribe:post                                               # generates post for most recently written article
```

## Steps

### Step 1 - Load context

Always read `data/editorial-context.json` first.

Load the `distribution_formats.linkedin` spec:
- Format: text post, not LinkedIn Article
- Length: 150-250 words
- Hook: first 2 lines must work standalone before "see more"
- Rules: no external links, no section headers, no bullet lists, 1-2 hashtags at end
- Closer: question or observation that invites a response

### Step 2 - Read the article

Read the full article file. Identify:
- The opening hook (first scene or claim)
- The core argument (the "Why it matters" beat)
- The closing line (the reframe)
- 1-2 specific data points or named companies that make it credible

### Step 3 - Write the LinkedIn post

Structure:

**Lines 1-2 (the hook):** The most striking claim or scene from the article.
This is what shows before "see more." If this does not stop the scroll, the post fails.
Must work as a standalone thought — not a teaser, not "I just published..."

**Body (3-6 short paragraphs):** Compress the article's argument.
- Follow the same four-beat logic as the article
- No section headers. No bullet lists. Short paragraphs separated by line breaks.
- 1-3 sentences per paragraph
- Keep the same voice: third person, no contractions, specific evidence

**Closer (last 1-2 lines):** A question or observation that invites response.
Not "read the full article at..." - no external links in the post body.
Not a summary of what you just said.

**Hashtags:** 1-2 at the very end, on their own line.
Derive from the pillar and primary keyword.

### Step 4 - Hook quality check

Read the first 2 lines aloud. Answer:
1. Does this work as a standalone thought?
2. Does it make someone want to tap "see more"?
3. Does it avoid "I published", "here are", "in this article"?

If any answer is NO: rewrite the hook before outputting.

### Step 5 - Format compliance check

Confirm before outputting:
- [ ] Under 250 words
- [ ] Over 150 words
- [ ] No external links
- [ ] No ## headers or bold headers
- [ ] No bullet or numbered lists
- [ ] 1-2 hashtags at end only
- [ ] No exclamation marks
- [ ] No em dashes (use " - ")
- [ ] No contractions
- [ ] Third person only

### Step 6 - Output

```
## LinkedIn Post — [slug]

Hook test: [Pass / Fail] — [reason if Fail]
Format compliance: [Pass / Fail] — [violations if any]
Word count: [n]

---

[FULL POST — copy-paste ready]

---

→ To post: copy above, paste as LinkedIn text post (not Article).
→ Link to article: add in first comment, not post body.
→ Add to docs/social-distribution.md: [YES — append under [slug] / MANUAL]
```

If format compliance fails: fix the violations and re-output. Do not hand the user a non-compliant post.

## LinkedIn Algorithm Note

LinkedIn suppresses Articles and posts with external links in the body.
A text post with no link outperforms an Article or a link-share post by 3-5x.
The article URL goes in the first comment, posted immediately after the main post.
This is not optional — it is the distribution strategy.
