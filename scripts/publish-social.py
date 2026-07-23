#!/usr/bin/env python3
"""
Publish a slug's social cuts through SocialClaw.
Usage: python3 scripts/publish-social.py <slug> [--apply]

Without --apply: builds the schedule and runs `socialclaw validate` only (no post goes out).
With --apply: validates, then calls `socialclaw apply` for real.

Runs the content lint gate against each social file first. Any lint failure aborts
before SocialClaw is ever called - a bad post does not go out because a schedule was valid.

LinkedIn is intentionally not wired here yet: the only connected LinkedIn account is
Job's personal profile, not the TechTribe Africa Page. Auto-posting TechTribe content
to a personal profile would be wrong. Add a `linkedin_page` target once that account
is connected (see ACCOUNTS below).
"""
import json
import re
import subprocess
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SOCIAL_DIR = REPO_ROOT / "data" / "social"
LINT_SCRIPT = REPO_ROOT / "scripts" / "lint-content.sh"

# provider:type:handle strings SocialClaw expects, per venture/account.
ACCOUNTS = {
    "x": "x:@techtribehq",
}


def lint_or_abort(path: Path) -> None:
    result = subprocess.run(["bash", str(LINT_SCRIPT), str(path)], cwd=REPO_ROOT)
    if result.returncode != 0:
        print(f"\nABORT: lint failed on {path} - not publishing.", file=sys.stderr)
        sys.exit(1)


def parse_x_thread(path: Path) -> list[str]:
    text = path.read_text()
    tweets = re.findall(
        r"Tweet \d+ \([^)]*\):\s*\n(.+?)(?=\n---|\Z)", text, re.DOTALL
    )
    tweets = [t.strip() for t in tweets]
    if len(tweets) != 5:
        print(f"ABORT: expected 5 tweets in {path}, found {len(tweets)}.", file=sys.stderr)
        sys.exit(1)
    for i, t in enumerate(tweets, 1):
        if len(t) > 280:
            print(f"ABORT: tweet {i} is {len(t)} chars (max 280).", file=sys.stderr)
            sys.exit(1)
    return tweets


def build_x_campaign(slug: str, tweets: list[str], minutes_out: int = 5) -> dict:
    publish_at = (
        datetime.now(timezone.utc) + timedelta(minutes=minutes_out)
    ).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    steps = [{"description": tweets[0], "publishAt": publish_at}]
    for t in tweets[1:]:
        steps.append({"description": t, "interactionType": "reply"})
    return {
        "campaigns": [
            {
                "name": f"{slug} X thread",
                "mode": "scheduled",
                "targets": [{"account": ACCOUNTS["x"], "steps": steps}],
            }
        ]
    }


def run_socialclaw(args: list[str]) -> dict:
    result = subprocess.run(
        ["socialclaw", *args, "--json"], capture_output=True, text=True
    )
    try:
        payload = json.loads(result.stdout)
    except json.JSONDecodeError:
        print(result.stdout, file=sys.stderr)
        print(result.stderr, file=sys.stderr)
        sys.exit(1)
    return payload


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: publish-social.py <slug> [--apply]", file=sys.stderr)
        sys.exit(1)
    slug = sys.argv[1]
    do_apply = "--apply" in sys.argv[2:]

    x_thread_path = SOCIAL_DIR / f"{slug}-x-thread.md"
    if not x_thread_path.exists():
        print(f"ABORT: {x_thread_path} not found.", file=sys.stderr)
        sys.exit(1)

    lint_or_abort(x_thread_path)
    tweets = parse_x_thread(x_thread_path)
    schedule = build_x_campaign(slug, tweets)

    schedule_path = REPO_ROOT / f".socialclaw-schedule-{slug}.json"
    schedule_path.write_text(json.dumps(schedule, indent=2))

    validation = run_socialclaw(["validate", "-f", str(schedule_path)])
    print(json.dumps(validation, indent=2))
    if not validation.get("ok", False):
        print("ABORT: schedule failed validation, not applying.", file=sys.stderr)
        schedule_path.unlink()
        sys.exit(1)

    if do_apply:
        result = run_socialclaw(["apply", "-f", str(schedule_path)])
        print(json.dumps(result, indent=2))
        if not result.get("ok", False):
            print("WARNING: apply did not report ok=true - check manually.", file=sys.stderr)
            schedule_path.unlink()
            sys.exit(1)

    schedule_path.unlink()


if __name__ == "__main__":
    main()
