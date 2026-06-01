# Batch Mode — Phased Pipeline (story-photo-full-v2)

Use this file for every batch of 2+ concepts. **Never one-shot a full batch in a single session.**

**v2 lengths:** caption **4000–5000** chars (viral-long) · full story **7000–8000** chars · photo export per `photo-prompt-format.md`

---

## Session limits (hard rules)

| Phase | Max items/session | Why |
|-------|-------------------|-----|
| 0 — Plan | 10 | Outline only, lightweight |
| 1 — Photo prompt | 5 | Keep character/setting consistency |
| 2 — Caption | **3** | Viral-long ~4–5k chars each — heavy |
| 3 — Full story | **2** | ~7–8k chars each, same voice as caption |
| 4 — Export TXT | 1 batch | Format only, no creative writing |

**One session = one phase only.** Stop after each phase. Wait for user confirmation before the next.

---

## Version control (one PR per batch)

- **Phases 0–3:** never commit, never open a PR. Just update plan/JSON, stop, wait for confirmation.
- **Phase 4 only:** after the TXT export is assembled, commit everything and open **one** PR for the whole batch (new branch named for the batch, e.g. `batch-04`).
- Do not push to `main`/`master`. One batch = one branch = one PR.
- Override only if the user explicitly requests a mid-batch commit/PR.

---

## Mixed-bank batch (controlled-random)

Use when a batch should **draw from multiple banks** — typically a **setting** from concepts1/2/3 paired with an **engine** from `story-engines.md` (E00–E31). This keeps variety high without the batch turning into chaos.

**Model:** each item = `setting (concepts1/2/3) × engine (story-engines)`. **E00 = Humiliation → Reveal** is the default engine that concepts1/2/3 already run on — use it when you want a classic seed as-is; pick E01–E31 to reshape the Turn/Payoff (see `full-story-methodology.md` → Engine Adaptation).

### Controlled-random rules (enforced)

1. **≤ max distinct engines** — cap the number of different engines in one batch (default `round(N×0.7)`, clamped 3–8). Prevents "10 totally different modes" whiplash.
2. **No consecutive duplicate engine** — two adjacent items must not share an engine.
3. **Balanced tone** — mix `feel-good` / `bittersweet` / `mixed` (rough target ~40% / ~20% / ~40%). Never an all-one-tone batch.
4. **Distinct settings** — no repeated setting group when `N ≤ 50`.
5. **Rotate opening styles** — consecutive captions use different styles (match style to engine — see caption-methodology.md).
6. **Photo rule per item** — default `twist-hidden`; tag `action-in-photo` for E05/E07/E19/E22 so Phase 1 knows the peak action may be shown (outcome still hidden).

### Generate with the picker

Run the helper to apply all rules and print an engine-map + JSON skeleton (with `engine` field):

```bash
node scripts/pick-batch.js --count 10 --prefix M --batch batch-08 --seed 42 --write
```

- `--seed` makes the draw reproducible (omit for a fresh random draw; the seed used is printed).
- `--write` saves `output/<batch>/<batch>.json` (skeleton with `engine`, `tone`, `photoRule`, `openingStyle`, `conceptSource`, `seedRefs`; `status.*` all false).
- Without `--write` it prints the skeleton to stdout.

### Phase 0 requirement (mandatory)

For any mixed-bank batch, **Phase 0 MUST print the engine-map table first** (before writing arcs), so the engine/tone/setting mix is visible and approved. Use the picker's output, or reproduce the table by hand. Then fill each item's `title` + 4-beat arc + `characterBible`, keeping the planned `engine` / `tone` / `photoRule` / `openingStyle`.

---

## File layout per batch

```
output/{batch-id}/
  {batch-id}-plan.md       ← Phase 0
  {batch-id}.json          ← Phases 1–3 (source of truth)
  {batch-id}-package.txt   ← Phase 4 (assembled from JSON)
  {batch-id}-photos.txt    ← compact blocks, one blank line between items (see photo-prompt-format.md)
  {batch-id}-captions.txt
  {batch-id}-stories.txt
```

---

## JSON schema

```json
{
  "batchId": "batch-04",
  "prefix": "C041",
  "pipelineVersion": "v2",
  "conceptSource": "concepts2 / Concept 03",
  "items": [
    {
      "id": "C041",
      "title": "Tension phrase → Payoff phrase",
      "conceptSource": "Concept 03 #7",
      "engine": "humiliation → reveal",
      "openingStyle": "Silent witness",
      "characterBible": "CHARACTER LOCK — do not change...",
      "photoPrompt": null,
      "caption": null,
      "fullStory": null,
      "status": {
        "plan": true,
        "photo": false,
        "caption": false,
        "story": false
      }
    }
  ]
}
```

**Rules:**
- Create JSON skeleton in Phase 0 with `characterBible`, beats, and metadata filled
- Each later phase **updates only its fields** — never rewrite completed items unless user asks
- Set `status.*` to `true` when that field is done

---

## TXT package format (Phase 4)

```text
# BATCH-04 | C041–C050 | concepts2 Concept 03

================================================================================
C041 | Intern Blocked → Founder Security Guard
================================================================================

[CHARACTER LOCK]
...

[PHOTO PROMPT]
...

[CAPTION — 1124 chars]
...

[FULL STORY — 6847 chars]
...
```

Separator between items: 80 equals signs.

**`-photos.txt`:** items separated by **one blank line only** — no `---`. See `photo-prompt-format.md`.

**`-captions.txt` / `-stories.txt`:** items separated by one blank line.

---

## Copy-paste prompts (replace placeholders)

Placeholders: `{BATCH_ID}`, `{IDS}`, `{ID_A}`, `{ID_B}`, `{CONCEPT_SOURCE}`, `{COUNT}`, `{ENGINE}`

### Master — start a new batch

```
Dùng skill story-photo-full-v2 — BATCH MODE.

Batch: {BATCH_ID}
Items: {COUNT} ({IDS})
Concept source: {CONCEPT_SOURCE}
Engine: {ENGINE} (1 engine, hoặc luân phiên nhiều engine từ concepts4 — tránh trùng liên tiếp)

Workflow bắt buộc — mỗi phase = 1 session riêng:
  Phase 0 → plan.md + JSON skeleton
  Phase 1 → photo prompts (5+5 nếu 10 items)
  Phase 2 → captions (3+3+3+1 nếu 10 items)
  Phase 3 → full stories (2/lần)
  Phase 4 → package.txt từ JSON

KHÔNG one-shot. KHÔNG HTML. Deliverable cuối: {BATCH_ID}-package.txt

KHÔNG commit / KHÔNG tạo PR sau mỗi phase. Chỉ tạo 1 PR DUY NHẤT sau Phase 4.

Bắt đầu Phase 0 ONLY. Dừng sau khi xong, chờ tôi confirm.
```

---

### Phase 0 — Story Plan

```
Dùng skill story-photo-full-v2 — Phase 0 ONLY.

Batch: {BATCH_ID} | Items: {IDS} | Source: {CONCEPT_SOURCE}

Đọc concept bank tương ứng (concepts1 / concepts2 / concepts3 setting, concepts4 engine, hoặc concepts5 viral genre family).

Nếu MIXED-BANK: chạy `node scripts/pick-batch.js` (hoặc đọc engine-map đã có) và IN BẢNG ENGINE-MAP trước khi viết arc. Xem batch-mode.md → Mixed-bank batch.

Tạo STORY PLAN — KHÔNG viết photo prompt, caption, full story, txt.

Mỗi item gồm:
- id | title (tension → payoff)
- conceptSource
- engine (chọn từ concepts4 nếu dùng; mặc định "humiliation → reveal") — luân phiên, không trùng liên tiếp
- 4-beat arc (Setup / Clue / Turn / Payoff) — 1–2 câu/beat. Nếu engine không có antagonist: Turn = action/recognition/choice/return, Payoff = giải quyết cảm xúc (KHÔNG ép comeuppance)
- Character Lock đầy đủ (các nhân vật, setting US, object clue nếu có)
- Peak-tension moment cho photo (Beat 1–2, không spoil payoff; engine action-in-photo: E05/E07/E19/E22 được show hành động đỉnh điểm)
- openingStyle (1 trong 14 styles, không trùng liên tiếp)

Output:
1. output/{BATCH_ID}/{BATCH_ID}-plan.md
2. output/{BATCH_ID}/{BATCH_ID}.json — skeleton với characterBible + engine + status.plan=true

Rotate engine, tone (feel-good/bittersweet), location, opening style across items.
DỪNG sau Phase 0. Không làm Phase 1.
```

---

### Phase 1A — Photo Prompts (first half)

```
Dùng skill story-photo-full-v2 — Phase 1A ONLY.

Đọc references/nano-banana-2.md + references/photo-prompt-format.md
Đọc output/{BATCH_ID}/{BATCH_ID}-plan.md
Đọc output/{BATCH_ID}/{BATCH_ID}.json

Viết PHOTO PROMPT cho {IDS} (nửa đầu batch).
- characterBible = CHARACTER LOCK block (multi-line)
- photoPrompt = body only (opener + scene paragraph + Framing paragraph) — KHÔNG staccato từng câu một dòng
- Mở đầu: 4:5 vertical + smartphone snapshot aesthetic
- Peak tension Beat 1–2, twist KHÔNG được vẽ
- Không readable text in scene

Cập nhật {BATCH_ID}.json — chỉ characterBible, photoPrompt + status.photo=true cho items này.
KHÔNG viết caption, story, txt.
DỪNG sau Phase 1A.
```

**Phase 1B** — same prompt, second half of IDs.

---

### Phase 2A — Captions (first half)

```
Dùng skill story-photo-full-v2 — Phase 2A ONLY.

Đọc references/caption-methodology.md (viral-long v2)
Đọc output/{BATCH_ID}/{BATCH_ID}.json (items có photoPrompt)

Viết CAPTION cho {IDS} (tối đa 3 items/session).
- 4000–5000 ký tự mỗi caption (đếm ký tự) — vượt thì GIỮ NGUYÊN, không trim
- Viral FB voice: hook line → My name is… → staccato (nhiều câu xuống dòng riêng) → cliffhanger
- blank line + CTA chỉ MORE / YES / NEXT (format v1)
- 2–4 visual detail từ photo prompt
- Không spoil payoff cuối (để full story)
- openingStyle đúng plan

Cập nhật JSON — chỉ caption + status.caption=true.
In bảng verify: id | char count | opening style | CTA
DỪNG sau Phase 2A.
```

**Phase 2B / 2C / 2D** — next chunks of IDs (3 items per session until done).

---

### Phase 3 — Full Stories (2 items)

```
Dùng skill story-photo-full-v2 — Phase 3 ONLY.

Đọc references/full-story-methodology.md (v2)
Đọc output/{BATCH_ID}/{BATCH_ID}.json

Viết FULL STORY cho {ID_A} và {ID_B} ONLY.
- 7000–8000 ký tự mỗi bài (đếm ký tự) — vượt thì GIỮ NGUYÊN, không trim
- Cùng voice caption (first-person, staccato OK) — TIẾP TỤC từ caption, KHÔNG lặp lại đoạn caption
- 4 acts: Hook → Pressure → Turn → Payoff (payoff đầy đủ ở đây)
- Twist + consequence + final line cụ thể
- Character Lock nhất quán
- Không copy CTA Facebook vào story

Cập nhật JSON — chỉ 2 items này + status.story=true.
In verify: id | char count | first 80 chars of opening
DỪNG. Không viết story khác.
```

Repeat for each pair until all items done.

---

### Phase 4 — Export TXT

```
Dùng skill story-photo-full-v2 — Phase 4 ONLY.

Đọc output/{BATCH_ID}/{BATCH_ID}.json
Verify mọi item có characterBible, photoPrompt, caption, fullStory đầy đủ.

Chạy: node scripts/json-to-txt.js output/{BATCH_ID}/{BATCH_ID}.json
- KHÔNG sửa nội dung creative — chỉ assemble
- Kiểm tra {BATCH_ID}-photos.txt: mỗi item = id|title + LOCK + prompt; giữa items chỉ 1 dòng trống (photo-prompt-format.md)
- Ghi char count caption và full story trong package.txt

Chạy output checklist trong SKILL.md

Sau khi export xong: đây là điểm DUY NHẤT để commit + tạo PR.
Commit toàn bộ batch (plan.md, JSON, các file TXT) trên 1 branch ({BATCH_ID}) và tạo 1 PR duy nhất.
```

---

### Fix single item

```
Dùng skill story-photo-full-v2 — FIX ONLY.

Batch: {BATCH_ID} | Item: {ID_A}
Đọc output/{BATCH_ID}/{BATCH_ID}.json

Chỉ sửa {ID_A}.fullStory — hiện {CURRENT} chars, target 7000–8000 (vượt OK, không trim).
Giữ nguyên photoPrompt, caption, characterBible.
Không đụng items khác.
Sau khi sửa: cập nhật JSON + regenerate {BATCH_ID}-package.txt cho item đó hoặc cả file.
```

---

## Phase schedule for 10 items

| Session | Phase | Items |
|---------|-------|-------|
| 1 | 0 Plan | C041–C050 |
| 2 | 1A Photo | C041–C045 |
| 3 | 1B Photo | C046–C050 |
| 4 | 2A Caption | C041–C043 |
| 5 | 2B Caption | C044–C046 |
| 6 | 2C Caption | C047–C049 |
| 7 | 2D Caption | C050 |
| 8 | 3 Story | C041–C042 |
| 9 | 3 Story | C043–C044 |
| 10 | 3 Story | C045–C046 |
| 11 | 3 Story | C047–C048 |
| 12 | 3 Story | C049–C050 |
| 13 | 4 Export | assemble TXT |

Total: **13 short sessions** vs 1 session that breaks.

---

## Single concept (1 item)

For 1 concept only, run Phase 0–3 in one session is OK (total ~9k chars output).
Still use JSON + export TXT. Skip splitting into 5+5.

Prompt:

```
Dùng skill story-photo-full-v2 — single item {ID}.
Phase 0→3 trong 1 session (chỉ 1 item).
Output: output/{BATCH_ID}/{BATCH_ID}.json + {BATCH_ID}-package.txt
KHÔNG HTML.
```
