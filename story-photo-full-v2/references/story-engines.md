# Story Engines — Master Registry

The canonical list of **narrative engines** for the `story-photo-full-v1` pipeline. An *engine* is the emotional machine that drives a story: how the tension is set up, how it turns, and how it pays off.

- **E00** is the **default** engine — *Humiliation → Reveal*. It is the (previously unlabeled) engine behind almost every seed in `concepts1.md`, `concepts2.md`, and `concepts3.md`. Those banks supply **settings / recognition mechanics**; their default engine is **E00**.
- **E01–E31** are defined in `concepts4.md` (30 seeds each). That bank is organized **by engine** and is **setting-agnostic** — mix any engine with any setting from concepts1/2/3.

> **How to combine banks:** `setting (concepts1/2/3) × engine (this registry)`. E00 means "use the setting's seed as-is (classic humiliation→reveal)." Any other engine reshapes the Turn/Payoff (see `full-story-methodology.md` → Engine Adaptation).

---

## Field definitions

- **tone** — one of `feel-good`, `bittersweet`, `mixed` (works either way depending on ending). Used to balance a batch.
- **photo** — `twist-hidden` (default: photo shows tension, never the payoff) or `action-in-photo` (the peak *action* may be shown; the *outcome* still stays hidden). Only **E05, E07, E19, E22** are `action-in-photo`.
- **antagonist?** — whether the engine typically has a "bad guy." When **no**, do **not** force a comeuppance; the Turn is an action/recognition/choice/return and the Payoff is the emotional resolution.

> This table is the **single source of truth**. `scripts/pick-batch.js` mirrors it — if you edit tone/photo here, update the `ENGINES` array in that script to match.

---

## Registry

| ID | Engine | tone | photo | antagonist? | Turn → Payoff (one line) |
|----|--------|------|-------|-------------|--------------------------|
| **E00** | **Humiliation → Reveal** *(default for concepts1/2/3)* | mixed | twist-hidden | yes | hidden identity surfaces → antagonist consequence |
| E01 | Kindness Rewarded / Pay-It-Forward | feel-good | twist-hidden | no | the kindness loops back → unexpected reward |
| E02 | Hidden Sacrifice Revealed | mixed | twist-hidden | rare | a record/witness exposes it → community awe |
| E03 | Debt of Gratitude ("You Don't Remember Me") | feel-good | twist-hidden | no | "you changed my life" → roles invert, repaid |
| E04 | The Test in Disguise | mixed | twist-hidden | yes | the "nobody" reveals authority → kind rewarded, cruel exposed |
| E05 | Crisis Hero | mixed | **action-in-photo** | no | the dismissed one acts in the emergency → undeniable vindication |
| E06 | Quiet Competence (Right All Along) | mixed | twist-hidden | rare | events unfold as warned → vindication by truth |
| E07 | The Honest Return | feel-good | **action-in-photo** | no | the poor finder returns valuables → unexpected reward |
| E08 | Long-Lost Reunion | mixed | twist-hidden | no | a clue sparks recognition → reunion |
| E09 | Slow-Burn Devotion | mixed | twist-hidden | no | a kept object/ritual reveals devotion → quiet recognition |
| E10 | The Misjudged Protector | mixed | twist-hidden | partial | the "traitor" was shielding the accusers → trust restored |
| E11 | Bittersweet / Too Late | bittersweet | twist-hidden | no | the truth lands at the threshold → poignancy |
| E12 | Karma / Comeuppance | mixed | twist-hidden | yes | the bully's cruelty loops back → they lose what they lorded |
| E13 | The Whistleblower Stands Alone | mixed | twist-hidden | yes | the lone voice is proven right → vindication after isolation |
| E14 | The Sacrificial Choice | mixed | twist-hidden | no | right is chosen over self-interest → moral elevation |
| E15 | The Truth That Exonerates | mixed | twist-hidden | partial | new evidence proves innocence → name restored |
| E16 | The Forgiveness That Transforms | mixed | twist-hidden | partial | mercy over revenge → the wrongdoer changes |
| E17 | Found Family / Community Rallies | feel-good | twist-hidden | no | a community unites for one person → overwhelming warmth |
| E18 | The Stranger Who Stayed | feel-good | twist-hidden | no | the least-expected one remains → quiet heroism of presence |
| E19 | Good Deed Witnessed | feel-good | **action-in-photo** | no | private kindness caught by chance → it spreads |
| E20 | Generational Kindness Repaid | feel-good | twist-hidden | no | an old kindness returns to the next generation → circle closes |
| E21 | The Last Wish Fulfilled | bittersweet | twist-hidden | no | a final dream is quietly made true → grace at the threshold |
| E22 | Underdog Wins on Merit | feel-good | **action-in-photo** | no | the dismissed competitor simply wins → vindication by performance |
| E23 | Hidden Talent Discovered | feel-good | twist-hidden | no | an overlooked gift surfaces → recognition, opportunity |
| E24 | Earned Trust Over Time | feel-good | twist-hidden | no | steady action wins skeptics → belonging |
| E25 | Mentor–Student Torch Passing | mixed | twist-hidden | no | the spark is recognized → the torch passes |
| E26 | The Misunderstanding Explained | mixed | twist-hidden | no | the real reason for the rift comes out → the wall falls |
| E27 | The Protector Who Stayed Away | bittersweet | twist-hidden | no | the "abandoner" left to protect → love reframed |
| E28 | Unlikely Alliance (Enemies → Allies) | mixed | twist-hidden | partial | rivals forced to rely on each other → genuine bond |
| E29 | Reunion of Rivals | mixed | twist-hidden | no | former rivals meet late → the fire becomes affection |
| E30 | Full-Circle Role Reversal (Met With Grace) | mixed | twist-hidden | partial | the underdog now holds power → responds with grace, not revenge |
| E31 | The Provider in Disguise | feel-good | twist-hidden | no | the "needy" one is the quiet benefactor → warm surprise |

---

## Tone groups (for batch balancing)

- **feel-good (11):** E01, E03, E07, E17, E18, E19, E20, E22, E23, E24, E31
- **bittersweet (3):** E11, E21, E27
- **mixed (18):** E00, E02, E04, E05, E06, E08, E09, E10, E12, E13, E14, E15, E16, E25, E26, E28, E29, E30

## Action-in-photo engines (4)

E05 (Crisis Hero), E07 (Honest Return), E19 (Good Deed Witnessed), E22 (Underdog Wins). The photo may depict the peak *action*; the outcome/recognition still stays out of frame.

---

## Bank → default engine map

| Bank | Organized by | Default engine |
|------|--------------|----------------|
| `concepts1.md` | Setting (categories A–M) | **E00** |
| `concepts2.md` | Recognition mechanic (groups 1–12) | **E00** |
| `concepts3.md` | Setting (50 groups) | **E00** |
| `concepts4.md` | **Engine** (E01–E31) | the engine itself |

When building a **mixed-bank batch**, pull the *setting* from concepts1/2/3 and assign an *engine* from this registry. See `references/batch-mode.md` → **Mixed-bank batch**, and use `scripts/pick-batch.js` to generate the engine-map + JSON skeleton.
