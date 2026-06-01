---
name: story-photo-full-v2
description: >
  Phased pipeline for Facebook viral drama (Nano Banana 2, 4:5 photo): Plan → Photo Prompt →
  Long Caption (4000–5000 chars, FB scroll-fiction voice) → Full Story (7000–8000 chars, same voice)
  → TXT export. JSON source of truth; multi-session batch only.

  Use when the user mentions: story-photo-full-v2, story photo v2, viral-long caption,
  4000 caption, 7000 full story, Nano Banana 2, concepts1–5, batch mode, storywriting v2.

  Default: phased batches (never one-shot 6+ items). TXT only, never HTML.
  Read references/batch-mode.md for session prompts.
---

# Story-Photo-Full v2 (Batch Mode)

Phased pipeline: **Plan → Photo Prompt → Viral Caption → Full Story → TXT Export**

Platform: **Nano Banana 2** (4:5 vertical, self-taken phone aesthetic)

**User workflow:**
1. Generate image from photo prompt
2. Post image + long caption on Facebook
3. Comment article link when readers engage (MORE / YES / NEXT)
4. Publish full story on website

---

## Critical rules

1. **Never one-shot a batch** of 2+ items in one session
2. **One session = one phase** — stop and wait for user confirmation
3. **JSON is source of truth** — `output/{batch-id}/{batch-id}.json`
4. **Final deliverable = TXT** — never HTML unless user explicitly overrides
5. **Phase prompts** — copy from `references/batch-mode.md`
6. **One PR per batch** — commit/PR only after Phase 4 (see [Version control](#version-control))
7. **Never trim over-limit content** — caption or story over target length stays as-is

---

## When to read reference files

| File | When |
|------|------|
| `references/batch-mode.md` | **Always** for batches |
| `references/nano-banana-2.md` | Before photo prompts |
| `references/photo-prompt-format.md` | Phase 1 + Phase 4 photos export |
| `references/caption-methodology.md` | Before captions |
| `references/full-story-methodology.md` | Before full stories |
| `references/concepts1.md` – `concepts5.md` | Phase 0 seeds |
| `references/story-engines.md` | Engines E00–E31 |

**Concept source:** same as v1 — concepts1/2/3 (setting), concepts4 (engine), concepts5 (viral genre family).

---

## Phased pipeline

```
Phase 0 — Story Plan        → plan.md + JSON skeleton
Phase 1 — Photo Prompts     → JSON (max 5/session)
Phase 2 — Captions          → JSON (max 3/session)  ← heavier (4–5k each)
Phase 3 — Full Stories      → JSON (max 2/session)
Phase 4 — Export TXT        → package + split files from JSON
```

**10-item batch ≈ 12 sessions** (see `batch-mode.md` schedule).

---

## Phase 0 — Story Plan

Same as v1: 4-beat arc, Character Lock, engine, openingStyle, peak-tension for photo.

Mixed-bank: `node scripts/pick-batch.js --count N --prefix P --batch <id> [--write]`

---

## Phase 1 — Photo Prompt

Read `nano-banana-2.md` and `photo-prompt-format.md`.

- JSON fields: `characterBible` + `photoPrompt` (body only — no title line inside `photoPrompt`)
- `photoPrompt` = opener line + scene paragraph + `Framing:` paragraph (no staccato one-line-per-sentence)
- Payoff NOT in frame (action-in-photo engines: E05/E07/E19/E22 exception per story-engines.md)

---

## Phase 2 — Facebook Caption (viral-long)

Read `caption-methodology.md`.

| | |
|--|--|
| Length | **4000–5000 characters** (over = keep, no trim) |
| Voice | FB viral scroll-fiction — hook line, first-person, often one sentence per line |
| CTA | **MORE / YES / NEXT only** (v1 formats) |
| Spoil | Full payoff stays in full story |

Verify table: `id | char count | opening style | CTA`

---

## Phase 3 — Full Story

Read `full-story-methodology.md`.

| | |
|--|--|
| Length | **7000–8000 characters** (over = keep, no trim) |
| Voice | **Same as caption** — first-person, staccato lines OK, human and specific |
| Opening | Continue from caption — do not repeat caption beats |
| CTA | None in story body |

Verify: `id | char count | first 80 chars of opening`

---

## Phase 4 — TXT Export

**No creative edits** — assemble from JSON.

```bash
node scripts/json-to-txt.js output/{batch-id}/{batch-id}.json
```

Outputs:
- `{batch-id}-package.txt` — full package (sections per item)
- `{batch-id}-photos.txt` — **compact photo blocks** (see `photo-prompt-format.md`)
- `{batch-id}-captions.txt`
- `{batch-id}-stories.txt`

---

## Version control

| Phase | Commit? | PR? |
|-------|---------|-----|
| 0–3 | No | No |
| 4 Export | **Yes — once** | **One PR per batch** |

---

## JSON schema (summary)

```json
{
  "batchId": "batch-04",
  "prefix": "C061",
  "conceptSource": "concepts5 / F03",
  "pipelineVersion": "v2",
  "items": [{
    "id": "C061",
    "title": "Tension → Payoff",
    "conceptSource": "concepts5 #F03-12",
    "engine": "humiliation → reveal",
    "openingStyle": "Silent witness",
    "characterBible": "CHARACTER LOCK — do not change...",
    "photoPrompt": "4:5 vertical photo...",
    "caption": "...",
    "fullStory": "...",
    "status": { "plan": true, "photo": false, "caption": false, "story": false }
  }]
}
```

---

## Output checklist (before Phase 4)

**Photo**
- [ ] `photo-prompt-format.md` layout OK for export
- [ ] 4:5 + smartphone aesthetic; payoff hidden
- [ ] No readable in-scene text

**Caption**
- [ ] 4000–5000 chars (over OK, no trim)
- [ ] Viral-long voice; CTA = MORE / YES / NEXT
- [ ] Twist not fully spoiled

**Full story**
- [ ] 7000–8000 chars (over OK, no trim)
- [ ] Same voice as caption; continues without repeating caption
- [ ] Turn + payoff complete

**Export**
- [ ] `-photos.txt` blocks separated by single blank line only
- [ ] All status flags true

---

## Google content policy

See `references/nano-banana-2.md`. Fictional characters only; no graphic violence or sexual content.
