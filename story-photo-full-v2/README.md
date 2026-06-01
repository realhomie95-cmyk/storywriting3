# story-photo-full-v2

Phased pipeline for Facebook viral drama + **Nano Banana 2** (4:5 photos).

| Stage | Output |
|-------|--------|
| Phase 0 | `output/{batch}/{batch}-plan.md` + `{batch}.json` skeleton |
| Phase 1 | Photo prompts in JSON |
| Phase 2 | Captions **4000–5000** chars (viral FB voice) |
| Phase 3 | Full stories **7000–8000** chars (same voice) |
| Phase 4 | TXT export via `node scripts/json-to-txt.js` |

**Start here:** `SKILL.md` and `references/batch-mode.md`

**v1 repo:** `/Users/jack/Downloads/storywriting3` (unchanged)

**Photo export:** `{batch}-photos.txt` — compact blocks, one blank line between items (`references/photo-prompt-format.md`).
