---
name: story-photo-full-v1
description: >
  Phased pipeline for Facebook drama content with Nano Banana 2 image generation (4:5 vertical,
  self-taken photo aesthetic): Concept Plan → 4:5 Photo Prompt → Facebook Caption → Full Story
  (6000–8000 chars) → TXT package export. Uses JSON source of truth and multi-session batch mode
  to avoid agent context overflow.

  Use whenever the user mentions: storywriting, story-photo-full-v1, story photo full, photo story
  pipeline, batch mode, Nano Banana 2, 4:5 photo prompt, Facebook drama photo, self-taken photo
  prompt, Facebook caption + full story, concepts1, concepts2, concepts3, concepts4, concepts5, concept bank,
  viral drama genre, viral-long caption,
  narrative engine, category A–M drama,
  Rich vs Poor, Workplace, Wedding, Military, Lullaby drama photo posts.

  Default: phased batch workflow (never one-shot 6+ items). Output TXT package, never HTML.
  Single item: Phases 0–3 in one session OK. Read references/batch-mode.md for session prompts.
---

# Story-Photo-Full v1 (Batch Mode)

Phased pipeline: **Plan → Photo Prompt → Caption → Full Story → TXT Export**

Platform: **Nano Banana 2** (Google image generation)

**User workflow:**
1. Generate image from 4:5 photo prompt
2. Post image + caption on Facebook
3. Comment article link when readers engage (MORE / YES / NEXT)
4. Publish full story on website

---

## Critical rules

1. **Never one-shot a batch** of 2+ items in one session — agent will degrade or break
2. **One session = one phase** — stop and wait for user confirmation
3. **JSON is source of truth** — `output/{batch-id}/{batch-id}.json`
4. **Final deliverable = TXT** — never HTML unless user explicitly overrides
5. **Phase prompts** — copy from `references/batch-mode.md`
6. **One PR per batch** — never commit or open a PR after each phase. Commit/PR only **once**, after Phase 4 (TXT export) completes. See [Version control](#version-control).
7. **Never trim over-limit content** — if a full story or caption exceeds its character limit, leave it as-is. Do not cut, summarize, or rewrite to fit.

---

## When to read reference files

| File | When |
|------|------|
| `references/batch-mode.md` | **Always** for batches — session limits, prompts, JSON schema, TXT format |
| `references/nano-banana-2.md` | Before any photo prompt |
| `references/concepts1.md` | Category bank A–M (~130 templates) |
| `references/concepts2.md` | 240 seeds in 12 groups |
| `references/concepts3.md` | 600 seeds in 50 new setting groups |
| `references/concepts4.md` | 930 seeds in 31 narrative engines (beyond humiliation→reveal) |
| `references/concepts5.md` | 750 seeds in 30 viral drama genre families (FB long-caption style) |
| `references/story-engines.md` | Master engine registry (E00 + E01–E31): tone, photo rule, Turn→Payoff |
| `references/caption-methodology.md` | Before any caption |
| `references/full-story-methodology.md` | Before any full story |

**Concept source:**
- "concepts1" / "category B" → `concepts1.md`
- "concepts2" / "concept 03" → `concepts2.md`
- "concepts3" / "group 07" → `concepts3.md`
- "concepts4" / "engine 07" → `concepts4.md` (organized by narrative engine; mix with any setting)
- "concepts5" / "family F07" / "viral genre" → `concepts5.md` (genre family; default E00; pair with any setting/engine)
- Custom scenario → no bank required

---

## Narrative engines

The pipeline's **default engine is *humiliation → reveal*** (labeled **E00** in `references/story-engines.md`). `concepts4.md` adds **31 engines** (kindness, crisis hero, reunion, debt of gratitude, sacrifice, forgiveness, bittersweet, etc.) so a batch isn't one-note. The master registry (`story-engines.md`) is the source of truth for each engine's **tone** and **photo rule**.

- **Pick an engine per item** in Phase 0 and record it (`engine` field). Rotate engines across a batch — avoid 2+ consecutive items on the same engine.
- **Engine labels concepts1/2/3 too:** those banks supply settings/recognition mechanics; their default engine is **E00**. Mix any setting with any engine: `setting (concepts1/2/3) × engine (story-engines)`.
- **Not every engine has an antagonist.** When there's none, the Turn is an action / recognition / choice / return, and the Payoff is the emotional resolution — **not** a forced comeuppance. The methodology files carry the engine-aware branches.
- **Twist stays out of the photo** for all engines, with **one exception**: four **action-in-photo** engines may show the peak action itself (the *outcome* still stays hidden):
  - Crisis Hero (E05), The Honest Return (E07), Good Deed Witnessed (E19), Underdog Wins on Merit (E22).
- **Tone:** engines are tagged `feel-good`, `bittersweet`, or `mixed` — vary tone across a batch too.
- **Mixed-bank batches:** use `scripts/pick-batch.js` to apply controlled-random rules (≤ max engines, no consecutive duplicate, balanced tone) and print an engine-map + JSON skeleton. See `batch-mode.md` → **Mixed-bank batch**.

---

## Phased pipeline

```
Phase 0 — Story Plan        → plan.md + JSON skeleton
Phase 1 — Photo Prompts     → JSON (max 5/session)
Phase 2 — Captions          → JSON (max 5/session)
Phase 3 — Full Stories      → JSON (max 2/session)
Phase 4 — Export TXT        → package.txt from JSON (format only)
```

**Session limits:** see `references/batch-mode.md`

**10-item batch = ~11 sessions** (not 1).

---

## Phase 0 — Story Plan

Before any creative writing, plan every item:

> **Mixed-bank tip:** run `node scripts/pick-batch.js --count N --prefix P --batch <id> [--write]` to auto-generate the engine-map + JSON skeleton (controlled-random: ≤ max engines, no consecutive duplicate, balanced tone). Then fill arcs in this phase.

```
Beat 1 — Setup: the core tension (humiliation/block, OR need, mystery, longing, crisis, choice)
Beat 2 — Clue/Build: object, detail, or rising pressure
Beat 3 — Turn: the pivot (reveal / action / recognition / choice / return)
Beat 4 — Payoff: engine-appropriate resolution (caption + story only — NOT in photo, except action-in-photo engines)
```

Per item output in plan + JSON:
- id | title (tension → payoff)
- conceptSource
- **engine** (from concepts4 if used; default "humiliation → reveal") — rotate across batch
- 4-beat arc (1–2 sentences each)
- Character Lock (all persons, setting US, object clue)
- Peak-tension moment for photo (Beat 1–2; for action-in-photo engines, the peak action)
- openingStyle (rotate across batch — no consecutive duplicates)

---

## Phase 1 — 4:5 Photo Prompt

Read `references/nano-banana-2.md` first.

| Field | Value |
|-------|-------|
| Aspect ratio | **4:5 vertical** — opens every prompt |
| Style | Self-taken phone photo — candid, natural light, subtle grain |
| Setting | United States — specific location + lighting |
| Language | English |
| Content | Peak-tension Beat 1–2 — **payoff NOT shown** (action-in-photo engines may show the peak action) |
| Policy | Google Generative AI — fictional characters only |

### Prompt structure

```
4:5 vertical photo, smartphone snapshot aesthetic, natural unposed moment, realistic phone-camera detail.

[US location + time + lighting]. [Character lock — age, hair, outfit for every person].

The photo captures [peak-tension moment]: [who is doing what + reactions — antagonist/protagonist for conflict engines, or the act of help / the charged moment for other engines]. [Object clue]. [Background context].

Framing: [handheld angle]. Shallow phone depth-of-field. Candid snapshot. No readable text on signs, documents, screens, or badges. No watermark.
```

### Rules

- Character lock in prompt body for every person
- Self-taken cues required — never cinematic/studio
- Payoff withheld — no reveal, reunion result, or antagonist humiliated in frame
- **Action-in-photo exception** (Crisis Hero, Honest Return, Good Deed Witnessed, Underdog Wins): the peak *action* may be shown; the *outcome/recognition* still stays hidden
- Title format: `NNN | [tension] → [payoff]`

### Character Lock block (JSON `characterBible`)

```
CHARACTER LOCK — do not change across photo, caption, and full story:
• Name — age, hair, outfit, distinguishing detail
• Setting — location, lighting, time of day
• Object clue — [item] (pays off in full story Act 3–4)
```

---

## Phase 2 — Facebook Caption

Read `references/caption-methodology.md` first.

- **Length**: 2000–3000 characters (count characters)
- **If over 3000 chars**: leave it as-is — do **not** trim, cut, or compress to fit. Length cap is a target, not a hard ceiling.
- **Voice**: Storytelling — scene-driven prose, human and specific (see caption-methodology.md)
- **Structure**: 5–7 short paragraphs + blank line + CTA
- **CTA**: Only `MORE`, `YES`, or `NEXT`
- **No twist spoil** — payoff stays in full story
- **Visual anchor**: Paragraph 3 (photo moment) weaves in 2–3 details from photo prompt
- **Style variety**: No two consecutive same opening style

Opening styles:
`Dialogue slap` · `Silent witness` · `Object clue` · `Accuser POV` · `Victim restraint` ·
`Room goes wrong` · `Visual reveal` · `Deadline pressure` · `Wrong apology` · `Moral choice` ·
`Tender moment` · `Crisis clock` · `The return` · `Quiet devotion` (engine-flexible — see caption-methodology.md)

After writing, print verify table: `id | char count | opening style | CTA`

---

## Phase 3 — Full Story Article

Read `references/full-story-methodology.md` first.

- **Length**: 6000–8000 characters (count characters)
- **If over 8000 chars**: leave it as-is — do **not** trim, cut scenes, or summarize to fit. Length cap is a target, not a hard ceiling.
- **Opening**: Match and extend caption — same scene, same hook
- **Structure**: 4 acts — Hook → Pressure → Turn → Payoff
- **Ending**: Turn paid off + engine-appropriate resolution (antagonist consequence only if there's an antagonist; else reunion/reward/vindication/grace/poignancy) + concrete final line
- **Voice**: Human storytelling — not summary-style or robotic
- **No CTA** in story body

After writing, print verify: `id | char count | first 80 chars of opening`

### Caption ↔ Story handoff

| Caption ends with... | Story opens with... |
|----------------------|---------------------|
| Rising tension, twist hidden | Same moment, wider lens |
| One quoted line | Same line in context, then expands |
| Object clue teased | Object gets meaning in Act 2–3 |

---

## Phase 4 — TXT Export

**Do not rewrite content** — assemble from JSON only.

Output: `output/{batch-id}/{batch-id}-package.txt`

Format per item:
```
================================================================================
{id} | {title}
================================================================================

[CHARACTER LOCK]
...

[PHOTO PROMPT]
...

[CAPTION — {n} chars]
...

[FULL STORY — {n} chars]
...
```

Optional split files: `-photos.txt`, `-captions.txt`, `-stories.txt`

**Zero-token export:** run from skill folder:
```bash
node scripts/json-to-txt.js output/{batch-id}/{batch-id}.json
```

---

## Version control

**One PR per batch — never per phase.**

- **Phases 0–3:** do **not** commit and do **not** open a PR. Each phase only updates the plan/JSON locally, then stops and waits for user confirmation.
- **Phase 4 (after TXT export):** this is the **only** point where you commit and open a PR — a single PR containing the whole batch (plan.md, JSON, and all TXT files).
- Never push directly to `main`/`master`. Always use a new branch named for the batch (e.g. `batch-04`).
- If the user explicitly asks for a commit/PR mid-batch, follow that instruction — otherwise hold everything for the single end-of-batch PR.

| Phase | Commit? | PR? |
|-------|---------|-----|
| 0 Plan | No | No |
| 1 Photo | No | No |
| 2 Caption | No | No |
| 3 Story | No | No |
| 4 Export TXT | **Yes — once** | **Yes — one PR for the batch** |

---

## JSON schema (summary)

```json
{
  "batchId": "batch-04",
  "prefix": "C041",
  "conceptSource": "concepts2 / Concept 03",
  "items": [{
    "id": "C041",
    "title": "Tension → Payoff",
    "conceptSource": "Concept 03 #7",
    "engine": "humiliation → reveal",
    "openingStyle": "Silent witness",
    "characterBible": "...",
    "photoPrompt": "...",
    "caption": "...",
    "fullStory": "...",
    "status": { "plan": true, "photo": true, "caption": true, "story": true }
  }]
}
```

Full schema + copy-paste prompts: `references/batch-mode.md`

---

## Batch numbering

- Original: `001` → `030`
- Concepts2: `C001` → `C240`
- Mix: `M001` → `M030`

---

## Output checklist (before Phase 4)

**Photo prompt**
- [ ] 4:5 vertical + smartphone aesthetic
- [ ] Character lock consistent; Beat 1–2 shown
- [ ] Payoff NOT depicted (action-in-photo engines: action OK, outcome hidden)
- [ ] No readable in-scene text
- [ ] Google content policy OK

**Caption**
- [ ] 2000–3000 chars each (if over, keep as-is — do not trim)
- [ ] Storytelling voice; 5–7 paragraphs before CTA
- [ ] Photo moment paragraph has 2–3 visual details from prompt
- [ ] No twist spoil; no consecutive same opening style
- [ ] CTA = MORE / YES / NEXT only

**Full story**
- [ ] 6000–8000 chars each (if over, keep as-is — do not trim)
- [ ] Opening matches caption
- [ ] Turn paid off + engine-appropriate resolution (consequence only if antagonist exists)
- [ ] No Facebook CTA in body

**JSON + TXT**
- [ ] All items have photoPrompt, caption, fullStory
- [ ] All status flags true
- [ ] package.txt assembled (no content edits during export)

---

## Batch size guidance

| Request | Action |
|---------|--------|
| 1 item | Phases 0–3 in one session OK → export TXT |
| 2–10 items | **Mandatory batch mode** — follow phase schedule |
| 10+ items | Default batch size; confirm if 20+ |
| Fix 1 item | Fix prompt in batch-mode.md — touch JSON field only |

---

## Google content policy

Must not: graphic violence, sexual content, real public figures as deepfake targets,
misinformation as fact, hate speech.

Permitted: social humiliation, power reversals, confrontational dialogue, class/workplace
injustice, non-violent acting. Fictional characters only. See `references/nano-banana-2.md`.
