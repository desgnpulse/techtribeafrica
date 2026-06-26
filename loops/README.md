# techtribeafrica - Loop Architecture

## Active Loops
| Loop name | Trigger | Schedule | Goal | Status |
|-----------|---------|----------|------|--------|
| content-production | manual / /schedule weekly | Fridays or on-demand | Draft 1 article per run: score 8+, lint pass, social cuts, Gmail draft | active |

### content-production
- **Trigger:** `/schedule weekly` (cloud) or manual `program.md` invocation at the desk
- **Goal:** One article drafted, linted, scored 8+, social cuts written, Gmail draft sent
- **Execution skills:** WebSearch (research), Write (MDX draft), Bash (lint), Gmail MCP (draft)
- **Verification:** scripts/lint-content.sh + internal 10-point scoring rubric in program.md
- **Memory file:** data/pipeline-log.md
- **Human checkpoint:** Image generation (before publish) + removing `status: draft` from frontmatter
- **Checker:** /techtribe:review (Riara + Voice Keeper + Distribution Auditor) on request

## Four-Condition Test
Run before building any loop. All four must be true:
1. Does the task repeat? (one-off jobs stay as prompts)
2. Is there a clear, checkable definition of done?
3. Can you afford the token cost per run?
4. Does the agent have tools to execute AND verify?

## Loop Spec Template

### [Loop Name]
- **Trigger:** /schedule (cloud cron) or /loop [interval] (local)
- **Goal:** [one sentence, checkable]
- **Execution skills:** [list /skills the loop calls]
- **Verification:** [returns approved / not-approved or a 1-10 score]
- **Memory file:** loops/[name]-log.md
- **Human checkpoint:** [which step needs human sign-off?]
- **Checker:** [separate agent or skill that grades output independently]
