---
name: story-photo-full-v1
description: >
  Full pipeline for Facebook drama content with Nano Banana 2 image generation (4:5 vertical,
  self-taken photo aesthetic): Concept → 4:5 Photo Prompt → Facebook Caption → Full Story Article
  (3000–4000 characters) → HTML Package with copy functions.

  Use this skill whenever the user mentions any of the following:
  - "story-photo-full-v1", "story photo full", "photo story pipeline"
  - "Nano Banana 2", "Nano Banana prompt", "4:5 photo prompt", "Facebook drama photo"
  - "photo prompt for drama", "self-taken photo prompt", "candid phone photo prompt"
  - "Facebook caption + full story", "caption and article", "story for website"
  - "concepts1", "concepts2", "concept bank", category A–M drama scenarios
  - Requests involving Rich vs Poor · Workplace · Wedding · Military · Lullaby drama as photo posts
  - Drama content for Facebook post → comment article link → drive traffic to website

  Default workflow: one 4:5 hero photo prompt + caption + full story per concept.
  HTML package is always included unless the user asks for one stage only.
---

# Story-Photo-Full v1

Full pipeline: **Concept → 4:5 Photo Prompt → Facebook Caption → Full Story → HTML Package**

Platform: **Nano Banana 2** (Google image generation)

**User workflow:**
1. Generate image from 4:5 photo prompt
2. Post image + caption on Facebook
3. Comment article link when readers engage (MORE / YES / NEXT)
4. Publish full story on website — reader completes the arc

---

## When to read reference files

| File | When |
|------|------|
| `references/nano-banana-2.md` | **Always** before any photo prompt — 4:5 specs, self-taken aesthetic, Google content policy |
| `references/concepts1.md` | Category bank A–M (~130 templates): Rich vs Poor, Workplace, Military, Medical… |
| `references/concepts2.md` | Expanded bank: 240 seeds in 12 groups (Wedding, Lullaby, Owner reveal, Heirloom…) |
| `references/caption-methodology.md` | Before writing any Facebook caption |
| `references/full-story-methodology.md` | Before writing any full story article |

**Concept source rules:**
- User says "concepts1" / "category B" / "bank A–M" → load `concepts1.md`
- User says "concepts2" / "concept 03" / "240 concepts" → load `concepts2.md`
- User gives a custom scenario → no bank required
- Full batch run → load all reference files before starting

---

## Pipeline Overview

```
User gives: concept list OR topic OR "10 prompts from concepts2 group 03"
     ↓
Stage 1 — 4:5 Photo Prompt (Nano Banana 2, self-taken aesthetic)
Stage 2 — Facebook Caption (1000–1200 chars, hook only — no twist spoil)
Stage 3 — Full Story Article (3000–4000 chars, complete arc for website)
Stage 4 — HTML Package (copy photo / caption / full story)
     ↓
Output: single .html file
```

Always complete all four stages in one pass unless the user explicitly asks for only one stage.

**Production order for the user:**
1. Copy Photo Prompt → generate 4:5 image in Nano Banana 2
2. Copy Caption → post with image on Facebook
3. When readers comment MORE/YES/NEXT → post website article link in comments
4. Copy Full Story → publish on website (opening aligns with caption)

---

## Stage 1 — 4:5 Photo Prompt

**Always read `references/nano-banana-2.md` first.**

### Mandatory specs (every photo prompt)

| Field | Value |
|-------|-------|
| Aspect ratio | **4:5 vertical** — every prompt opens with this |
| Style | **Self-taken phone photo** — candid, unposed, natural light, subtle grain |
| Setting | United States — specific location + lighting locked |
| Language | **English** — prompt body and scene description |
| Content | Peak-tension moment — setup + hook visible, **twist NOT shown** |
| Policy | Google Generative AI content policy — fictional characters only |

### Internal story planning (not exported separately)

Before writing the photo prompt, plan the full 4-beat arc internally:

```
Beat 1 — Setup: humiliation or block
Beat 2 — Clue: object, detail, or pressure
Beat 3 — Turn: recognition begins
Beat 4 — Payoff: full twist (for caption + full story only — NOT in photo)
```

The photo captures **Beat 1–2 energy** — maximum scroll-stop without spoiling Beat 4.

### Photo prompt structure

One continuous prompt block per concept:

```
4:5 vertical photo, smartphone snapshot aesthetic, natural unposed moment, realistic phone-camera detail.

[Specific US location + time of day + natural lighting]. [Character lock — age, hair, outfit for every person in frame].

The photo captures [peak-tension moment]: [antagonist action + protagonist reaction + body language]. [One object or environmental detail hinting at more]. [Background — witnesses, room context].

Framing: [handheld angle]. Shallow phone depth-of-field. Candid, like someone in the room quickly took this picture. No readable text on signs, documents, phone screens, or badges. No subtitles. No watermark.
```

### Photo prompt rules

- **Character lock**: Name every person with age, hair, outfit in the prompt body
- **Self-taken look**: Must include smartphone/candid/handheld cues — never cinematic or studio
- **Twist withheld**: Do not depict reversal, reveal, or antagonist humiliated
- **Object clues**: Ring, envelope, worn shoes, badge — visible but meaning unclear
- **No readable text**: Blur or angle away from legible signs, documents, screens
- **Title format**: `NNN | [humiliation phrase] → [reveal phrase]`

### Character Lock block (also in HTML)

```
CHARACTER LOCK — do not change across photo, caption, and full story:
• Name — age, hair, outfit, distinguishing detail
• ...
• Setting — location, lighting, time of day
• Object clue — [item] (pays off in full story Act 3–4)
```

---

## Stage 2 — Facebook Caption

Load `references/caption-methodology.md` before writing.

### Quick rules

- **Length**: 1000–1200 characters (count characters, not words)
- **Language**: English
- **Structure**: 3 paragraphs + 1 blank line + CTA
- **CTA words**: Only `'MORE'`, `'YES'`, or `'NEXT'`
- **Style variety**: No two consecutive captions use the same opening style
- **Never reveal**: Do not explain full twist or summarize ending — that belongs in the website article
- **Visual anchor**: Paragraph 2 must include one detail from the photo prompt

Opening styles:
`Dialogue slap` · `Silent witness` · `Object clue` · `Accuser POV` · `Victim restraint` ·
`Room goes wrong` · `Visual reveal` · `Deadline pressure` · `Wrong apology` · `Moral choice`

---

## Stage 3 — Full Story Article

Load `references/full-story-methodology.md` before writing.

### Quick rules

- **Length**: 3000–4000 characters (count characters, not words)
- **Language**: English
- **Opening**: Must match and extend the caption — same scene, same emotional hook; reader feels continuity
- **Structure**: 4 acts in prose — Hook → Pressure → Turn → Payoff
- **Ending**: Complete twist reveal + antagonist consequence + concrete final line
- **Voice**: Storytelling — specific, human, pull-the-reader-forward; not robotic or summary-style
- **No CTA**: Do not copy Facebook CTA ("Drop MORE...") into story body

### Caption ↔ Full Story handoff

| Caption ends with... | Full story opens with... |
|----------------------|--------------------------|
| Rising tension, twist hidden | Same moment, wider lens, then moves forward |
| One quoted line | Same line in natural context, then expands |
| Object clue teased | Object gets meaning in Act 2–3 |

---

## Stage 4 — Building the HTML Package

### Required features

| Feature | Behavior |
|---------|----------|
| **Copy Photo Prompt** (per card) | Title + character lock + full 4:5 photo prompt |
| **Copy Caption** (per card) | Caption plain text |
| **Copy Full Story** (per card) | Full story article plain text |
| **Copy All Photo Prompts** | All photo prompts joined by `\n\n---\n\n` |
| **Copy All Captions** | All captions joined by `\n\n---\n\n` |
| **Copy All Full Stories** | All full stories joined by `\n\n---\n\n` |
| **Navigation** | Jump links at top, one per card |
| **Toast notification** | Confirmation on every copy action |

### Data architecture

```javascript
const data = [
  {
    id: "001",
    title: "Intern Blocked → Founder Security Guard",
    characterBible: `CHARACTER LOCK — do not change...\n• ...`,
    photoPrompt: `4:5 vertical photo, smartphone snapshot aesthetic...`,
    caption: `Opening paragraph...\n\nDrop 'MORE' if you want to know what happens next!! ⤵️`,
    fullStory: `She had already been standing at the turnstile for eleven minutes...`
  },
  ...
];

function photoText(p) {
  return `${p.id} | ${p.title}\n\n${p.characterBible}\n\n${p.photoPrompt}`;
}
function allPhotoText() {
  return data.map(photoText).join('\n\n---\n\n');
}
function allCaptionsText() {
  return data.map(p => p.caption).join('\n\n---\n\n');
}
function allFullStoriesText() {
  return data.map(p => `${p.id} | ${p.title}\n\n${p.fullStory}`).join('\n\n---\n\n');
}
```

### Design system

```css
:root {
  --bg: #f4f6fb;
  --card: #fff;
  --ink: #161c2d;
  --muted: #5e6e8a;
  --accent: #3b6df0;
  --green: #0d9373;
  --soft: #edf2ff;
  --caption: #f0f7ff;
  --photo: #fff8f0;
  --story: #f5f0ff;
  --line: #e3e9f4;
  --line2: #ccd6ec;
}
```

Fonts: `Outfit` — UI · `JetBrains Mono` — prompts · `Lora` — captions & full story

### Card structure

Each card has:
1. **Header** — badge + title + Copy Photo Prompt / Copy Caption / Copy Full Story
2. **Character Lock panel**
3. **4:5 Photo Prompt panel** (scrollable pre, max-height ~320px)
4. **Facebook Caption panel** (scrollable pre)
5. **Full Story Article panel** (scrollable pre, max-height ~480px)

Global buttons at top: Copy All Photo Prompts · Copy All Captions · Copy All Full Stories

---

## Google Content Policy Compliance

Must not: graphic violence, sexual content, real named public figures as deepfake targets,
misinformation as fact, hate speech targeting protected attributes.

Permitted: social humiliation, power reversals, confrontational dialogue, class/workplace injustice,
non-violent physical acting. Fictional characters only. See `references/nano-banana-2.md`.

---

## Prompt batch numbering

- Original series: `001` → `030`
- Concepts2 series: `C001` → `C240`
- Mix series: `M001` → `M030`
- Custom prefix: as agreed with user

---

## Output checklist

Before delivering the HTML file, verify:

**Photo prompt**
- [ ] Opens with 4:5 vertical + smartphone/self-taken aesthetic cues
- [ ] Character lock consistent; peak-tension moment shown
- [ ] Twist NOT depicted; no cinematic/studio language
- [ ] No in-scene readable text phrasing
- [ ] Google content policy respected

**Caption**
- [ ] 1000–1200 characters each
- [ ] Paragraph 2 has visual detail from photo prompt
- [ ] No twist spoil; no consecutive same opening style
- [ ] CTA uses only MORE / YES / NEXT

**Full story**
- [ ] 3000–4000 characters each
- [ ] Opening matches caption hook — reader continuity
- [ ] Complete twist + antagonist consequence + concrete final line
- [ ] Voice human and engaging, not robotic
- [ ] No Facebook CTA copied into story

**HTML**
- [ ] JS data array (not hardcoded scrape)
- [ ] All 6 copy functions work with toast
- [ ] Navigation jump links present

---

## Batch size guidance

| Request | Action |
|---------|--------|
| 1–5 prompts | Write inline preview optional, then build HTML |
| 6–30 prompts | Go straight to HTML |
| 30+ prompts | Confirm batch size with user first |
| concepts1 category | Load `references/concepts1.md` — pick templates, rotate location/twist |
| concepts2 group | Load `references/concepts2.md` — pick from Concept 01–12 groups |
| Mix banks | Combine concepts1 category + concepts2 group |
