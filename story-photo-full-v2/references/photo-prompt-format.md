# Photo Prompt Format (v2)

How to **write** photo prompts in JSON and how **Phase 4** exports `{batch-id}-photos.txt`.

---

## Per-item structure (JSON)

| Field | Content |
|-------|---------|
| `title` | `Tension phrase → Payoff phrase` (no ID prefix in JSON) |
| `characterBible` | Full CHARACTER LOCK block (multi-line bullets OK) |
| `photoPrompt` | **Body only** — do not repeat `id \| title` or CHARACTER LOCK inside this field |

### `photoPrompt` body (3 parts, normal paragraphs)

1. **Opener** (one line): `4:5 vertical photo, smartphone snapshot aesthetic, natural unposed moment, realistic phone-camera detail.`
2. **Scene block** (one or two dense paragraphs): US location, time, lighting, every person from lock, peak-tension action, object clue, reactions. No payoff.
3. **Framing block** (one paragraph): starts with `Framing:` — handheld angle, depth-of-field, grain, policy lines (no readable text, no watermark).

**Do not** use caption-style staccato (one sentence per line) in `photoPrompt`.

**Do** use blank lines only between the three parts above (optional single blank line between scene and Framing).

---

## Export: `{batch-id}-photos.txt`

Assembled by `scripts/json-to-txt.js`. **No `---` separators.**

Each item = one block:

```text
C061 | Wedding Waitress Mocked → Groom Hears Birth Mother's Song
CHARACTER LOCK — do not change across photo, caption, and full story:
• Nathan Vale — 31, groom in black tux, champagne flute paused near chest, stunned eyes
• Theresa Vale — 58, silver-blonde bob, pearl suit, sharp accusing gesture
• Elena Ortiz — 55, catering uniform, dark braid with gray strands, tray cloth with stitched initials
• Setting — Rosemont Estate wedding tent, Lexington, Kentucky, string lights, Saturday 7pm
• Object clue — stitched initials tag on tray cloth (pays off in full story Act 3–4)

4:5 vertical photo, smartphone snapshot aesthetic, natural unposed moment, realistic phone-camera detail.
Rosemont Estate wedding tent in Lexington, Kentucky, Saturday evening around 7pm, warm string lights glowing over white table linens and champagne flutes. Nathan Vale, 31, groom in a black tux, stands frozen mid-toast with a champagne flute paused near his chest, stunned eyes locked on the catering aisle. Theresa Vale, 58, silver-blonde bob, pearl suit, points sharply at Elena Ortiz, 55, catering uniform, dark braid with gray strands, who holds a tray cloth bunched in one hand with a small stitched tag folded toward camera but not readable. Guests at nearby tables turn in awkward silence, a half-cleared tray of glasses between them.
Framing: eye-level handheld shot from a seated guest near the head table, slightly off-center and caught mid-argument. Shallow phone depth-of-field on Nathan's frozen face and Elena's cloth. Candid snapshot, subtle phone-camera grain, realistic skin texture. No readable text on menus, tags, signs, documents, phone screens, or badges. No subtitles. No watermark.

C062 | Gate Guard Humiliated → Retired Studio Owner Controls Budget
CHARACTER LOCK — do not change across photo, caption, and full story:
...
```

### Rules

- **Between items:** exactly **one blank line** (`\n\n`). No `---`, no `===`.
- **First line of each block:** `{id} | {title}`
- **Then:** `characterBible` verbatim
- **Then:** one blank line
- **Then:** `photoPrompt` verbatim (trimmed; internal paragraph breaks preserved)
- **No extra line breaks** injected inside `photoPrompt` during export

---

## Package file (`-package.txt`)

Photo section under each item still uses labeled blocks:

```text
[CHARACTER LOCK]
...

[PHOTO PROMPT]
...
```

Same content as JSON; formatting can use normal line breaks for readability.
