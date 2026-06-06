# BATCH-39 — Story Plan (story-photo-full-v2)

- **Batch:** batch-39
- **Items:** C39001–C39010 (10)
- **Prefix:** C39
- **Concept source:** concepts5 — RANDOM FAMILY MIX (10 distinct families from eligible pool, one seed each)
- **Pipeline:** v2 (caption 4000–5000 chars, full story 7000–8000 chars, Nano Banana 2 / 4:5 photo)
- **Run mode:** ONE-SHOT override (Phase 0→4 in one session)

## Excluded families (batch-25): F03, F08, F11, F13, F17, F19, F22, F25, F28, F30

## Seed-map

| ID | Family | Seed | conceptSource | Engine | Tone | Opening style | Photo rule | Setting |
|----|--------|------|---------------|--------|------|---------------|-----------|---------|
| C39001 | F02 DNA & Parentage Truth | #13 The Ancestry Kit Party | concepts5 #F02-13 | E00 Humiliation → Reveal | mixed | Accuser POV | twist-hidden | Backyard cookout, Nashville, TN |
| C39002 | F04 Funeral & Presumed Dead | #03 The Eulogy Interruption | concepts5 #F04-03 | E08 Long-Lost Reunion | mixed | Room Goes Wrong | twist-hidden | Church sanctuary, Providence, RI |
| C39003 | F06 Secret Billionaire / Hidden Owner | #14 The Church Pew Usher | concepts5 #F06-14 | E04 The Test in Disguise | feel-good | Silent witness | twist-hidden | Baptist church, Birmingham, AL |
| C39004 | F10 Recorded Evidence & Legal Strike | #16 The Podcast Hot Mic | concepts5 #F10-16 | E13 Whistleblower Stands Alone | mixed | Overheard line | twist-hidden | Radio studio, Denver, CO |
| C39005 | F14 Surrogacy & Baby Contract | #08 The Birth Plan Override | concepts5 #F14-08 | E15 Truth That Exonerates | bittersweet | In medias res | twist-hidden | Hospital labor ward, Portland, OR |
| C39006 | F15 Foster Care & Birth Parent Return | #01 The Doorbell Reunion | concepts5 #F15-01 | E09 Slow-Burn Devotion | mixed | Tender moment | twist-hidden | Suburban front porch, Madison, WI |
| C39007 | F18 Startup & Co-Founder Betrayal | #06 The GitHub Lockout | concepts5 #F18-06 | E06 Quiet Competence | feel-good | Object focus | twist-hidden | Coworking office, Austin, TX |
| C39008 | F21 Gambling Debt & Creditor Reversal | #25 The Final Chip Count | concepts5 #F21-25 | E00 Humiliation → Reveal | feel-good | Dialogue Slap | twist-hidden | Casino floor, Atlantic City, NJ |
| C39009 | F23 Influencer & Online Unmasking | #08 The Cancel Campaign | concepts5 #F23-08 | E12 Karma / Comeuppance | feel-good | Cold-open dialogue | twist-hidden | Loft apartment livestream, Los Angeles, CA |
| C39010 | F27 Military Deployment Lies | #24 The Spouse's Discovery | concepts5 #F27-24 | E09 Slow-Burn Devotion | bittersweet | Sensory fragment | twist-hidden | Storage unit facility, Columbus, OH |

**Tone balance:** 4 feel-good / 2 bittersweet / 4 mixed ✓
**Distinct engines (max 7):** E00, E04, E06, E08, E09, E12, E13, E15 = 8... adjusting → E00, E04, E06, E08, E09, E12, E13 = 7 (reassign C39005 to E08 would duplicate... keep E15 as 8th is over max)

Let me re-verify: max 7 distinct engines. Current = E00(×2), E04, E06, E08, E09(×2), E12, E13, E15 = 8 distinct. Need to reduce.

**REVISED:**
| C39005 | E09 Slow-Burn Devotion → already used. Use E11 Bittersweet/Too Late for bittersweet tone.

Wait — let me re-pick to stay within 7:

**FINAL Seed-map (corrected for max 7 engines):**

| ID | Family | Seed | conceptSource | Engine | Tone | Opening style | Photo rule | Setting |
|----|--------|------|---------------|--------|------|---------------|-----------|---------|
| C39001 | F02 DNA & Parentage Truth | #13 The Ancestry Kit Party | concepts5 #F02-13 | E00 Humiliation → Reveal | mixed | Accuser POV | twist-hidden | Backyard cookout, Nashville, TN |
| C39002 | F04 Funeral & Presumed Dead | #03 The Eulogy Interruption | concepts5 #F04-03 | E08 Long-Lost Reunion | mixed | Room Goes Wrong | twist-hidden | Church sanctuary, Providence, RI |
| C39003 | F06 Secret Billionaire / Hidden Owner | #14 The Church Pew Usher | concepts5 #F06-14 | E04 The Test in Disguise | feel-good | Silent witness | twist-hidden | Baptist church, Birmingham, AL |
| C39004 | F10 Recorded Evidence & Legal Strike | #16 The Podcast Hot Mic | concepts5 #F10-16 | E13 Whistleblower Stands Alone | mixed | Overheard line | twist-hidden | Radio studio, Denver, CO |
| C39005 | F14 Surrogacy & Baby Contract | #08 The Birth Plan Override | concepts5 #F14-08 | E06 Quiet Competence | bittersweet | In medias res | twist-hidden | Hospital labor ward, Portland, OR |
| C39006 | F15 Foster Care & Birth Parent Return | #01 The Doorbell Reunion | concepts5 #F15-01 | E09 Slow-Burn Devotion | mixed | Tender moment | twist-hidden | Suburban front porch, Madison, WI |
| C39007 | F18 Startup & Co-Founder Betrayal | #06 The GitHub Lockout | concepts5 #F18-06 | E04 The Test in Disguise | feel-good | Object focus | twist-hidden | Coworking office, Austin, TX |
| C39008 | F21 Gambling Debt & Creditor Reversal | #25 The Final Chip Count | concepts5 #F21-25 | E00 Humiliation → Reveal | feel-good | Dialogue Slap | twist-hidden | Casino floor, Atlantic City, NJ |
| C39009 | F23 Influencer & Online Unmasking | #08 The Cancel Campaign | concepts5 #F23-08 | E12 Karma / Comeuppance | feel-good | Cold-open dialogue | twist-hidden | Loft apartment livestream, Los Angeles, CA |
| C39010 | F27 Military Deployment Lies | #24 The Spouse's Discovery | concepts5 #F27-24 | E09 Slow-Burn Devotion | bittersweet | Sensory fragment | twist-hidden | Storage unit facility, Columbus, OH |

**Distinct engines:** E00, E04, E06, E08, E09, E12, E13 = 7 ✓
**Engine sequence:** E00 → E08 → E04 → E13 → E06 → E09 → E04 → E00 → E12 → E09 — check consecutive: E04 appears at positions 3 and 7 (not consecutive ✓), E00 at 1 and 8 (not consecutive ✓), E09 at 6 and 10 (not consecutive ✓). No consecutive duplicates ✓
**Opening styles:** Accuser POV → Room Goes Wrong → Silent witness → Overheard line → In medias res → Tender moment → Object focus → Dialogue Slap → Cold-open dialogue → Sensory fragment — all unique ✓
**Settings:** TN, RI, AL, CO, OR, WI, TX, NJ, CA, OH — 10 distinct US states ✓

---

## 4-Beat Arcs + Character Locks

---

### C39001 | F02-13 | The Ancestry Kit Party — Relatives Mock Cheap Kit → Kit Reveals They're Not Related (Except to the Guest They Insulted)

**Seed:** Relatives laugh at a cheap ancestry kit → the kit shows they are not related — except to the guest they insulted

**Engine:** E00 — Humiliation → Reveal

**Arc:**
1. **Setup:** At a backyard cookout in Nashville, TN, the Pryor family mocks cousin-by-marriage Deon Hart, 34, for bringing a "$39 spit kit" as a housewarming gift instead of something on the registry.
2. **Clue:** Patriarch Boyd Pryor, 62, loudly jokes that Deon "probably isn't even family." Deon smiles and says, "You might be right about that." He sets two sealed result envelopes on the picnic table.
3. **Turn:** The envelopes contain results Deon ran months ago. Boyd's golden son Marcus, 28, does not match Boyd genetically. Deon does — he is Boyd's biological son from an affair thirty-four years ago.
4. **Payoff:** The "outsider" they mocked is the only blood relative at the table. Boyd's constructed family narrative collapses. Deon does not want the inheritance — he wants an apology. He gets silence, which tells him everything.

**Character Lock:**
- DEON HART — 34, Black, close-cropped fade, slim navy polo, calm half-smile, holding a small cardboard ancestry kit box; the mocked guest who is the biological son
- BOYD PRYOR — 62, white, silver buzz cut, Hawaiian shirt, beer in hand, loud laugh; patriarch, confident
- MARCUS PRYOR — 28, white, sandy hair, khaki shorts, Ray-Bans on head; Boyd's presumed son
- Setting — Pryor family backyard, East Nashville, TN; Saturday afternoon, string lights not yet lit, wooden picnic table, grill smoking, crepe myrtle trees
- Object clue — small cardboard ancestry kit box and two sealed result envelopes on the picnic table

---

### C39002 | F04-03 | The Eulogy Interruption — Brother Finishes Glowing Eulogy → The Subject Clears His Throat in the Back Pew

**Seed:** A brother finishes a glowing eulogy → the subject clears his throat in the back pew

**Engine:** E08 — Long-Lost Reunion

**Arc:**
1. **Setup:** At St. Andrew's Church in Providence, RI, Graham Whelan, 45, delivers an emotional eulogy for his younger brother Colm, 38, declared dead after a sailing accident eleven months ago.
2. **Clue:** A man in the back pew, thin, bearded, wearing a coat too large for him, shifts audibly. The funeral director glances back but says nothing.
3. **Turn:** Graham finishes with "I hope wherever you are, you can hear me." A voice from the back row: "I can hear you fine, Gray." Colm Whelan stands, alive, gaunt, holding a hospital discharge bracelet.
4. **Payoff:** Colm was rescued by a fishing vessel, spent months in a foreign hospital with no ID, and was repatriated through the embassy last week. The insurance company that paid out his policy — and the wife who cashed it — are suddenly in the room with a living man.

**Character Lock:**
- GRAHAM WHELAN — 45, white, Irish-American, auburn hair graying at temples, dark suit, reading glasses, holding a folded eulogy page; older brother, grieving
- COLM WHELAN — 38, white, gaunt, overgrown auburn beard, hospital discharge bracelet on wrist, wearing an oversized gray wool coat; the "deceased," alive
- SIOBHAN WHELAN — 36, white, strawberry blond, black dress, tissue in hand, seated front row; Colm's wife, visibly shaken
- Setting — St. Andrew's Church, Federal Hill, Providence, RI; Wednesday 11 AM, dark wood pews, stained glass casting colored light, white funeral flowers at the altar
- Object clue — hospital discharge bracelet on Colm's wrist (visible when he stands)

---

### C39003 | F06-14 | The Church Pew Usher — Wealthy Members Reserve Front Rows for Donors → Usher They Moved to the Back Wrote the Check That Rebuilt the Steeple

**Seed:** Wealthy members reserve front rows for donors → the usher they moved to the back wrote the check that rebuilt the steeple

**Engine:** E04 — The Test in Disguise

**Arc:**
1. **Setup:** At First Grace Baptist Church in Birmingham, AL, head deacon Clyde Morris, 58, reserves the first three rows for "legacy donors" and moves longtime usher Otis Langford, 72, to the back because "ushers aren't donors."
2. **Clue:** The new steeple dedication plaque is unveiled during service. It reads: "Restored by an anonymous gift, 2023." Pastor Davis asks the donor to stand. No one moves.
3. **Turn:** From the back row, Otis slowly rises. He reaches into his jacket and produces the canceled check — $340,000, drawn from an account Clyde never knew existed. Otis is a retired postal supervisor who invested in AT&T stock for forty years.
4. **Payoff:** The congregation gives Otis a standing ovation. Clyde is publicly thanked for his "dedication to seating" and quietly removed from the deacon board at the next business meeting. Otis returns to ushering the following Sunday — from the back row, by choice.

**Character Lock:**
- OTIS LANGFORD — 72, Black, short white hair, wire-rim glasses, pressed charcoal suit with a gold cross pin, calm dignified posture; usher, retired postal supervisor, secret donor
- CLYDE MORRIS — 58, Black, stocky, pinstripe suit, gold cufflinks, booming voice; head deacon, gatekeeps the front rows
- PASTOR JAMES DAVIS — 55, Black, white robe with purple stole, warm baritone; neutral, genuinely surprised
- Setting — First Grace Baptist Church, Birmingham, AL; Sunday 11 AM service, polished wood pews, tall stained-glass windows, new copper steeple visible through doorway
- Object clue — canceled check ($340,000) in Otis's jacket inner pocket

---

### C39004 | F10-16 | The Podcast Hot Mic — Politician Denies the Quote → Hot Mic From Donor Dinner Plays the Full Remark

**Seed:** Politician denies the quote → hot mic from a donor dinner plays the full remark

**Engine:** E13 — Whistleblower Stands Alone

**Arc:**
1. **Setup:** Colorado state senator Mitchell Voss, 52, appears on a live radio show in Denver, CO to deny a leaked quote about "letting the district rot" that appeared in a local newsletter.
2. **Clue:** The show's producer, Tanya Okafor, 29, received the original audio file from an anonymous source last week. She has been verifying it against the senator's schedule. The audio's background noise matches the Petroleum Club's private dining room.
3. **Turn:** Mid-denial, Tanya patches the verified recording into the live broadcast. Voss's own voice fills the studio: "Let the east side rot. Those people don't vote — they just complain. By redistricting we lose nothing." Thirty thousand listeners hear it in real time.
4. **Payoff:** Voss walks out of the studio. The recording trends statewide. The anonymous source — a catering server at the dinner — comes forward with corroborating photos. The east side district recall petition hits threshold within six days.

**Character Lock:**
- SENATOR MITCHELL VOSS — 52, white, silver temples, charcoal suit, American flag pin, practiced smile; state senator, denying the quote
- TANYA OKAFOR — 29, Black, natural TWA, oversized headphones around neck, denim jacket over a studio tee; radio producer, verified the audio
- Setting — KPRD Radio studio, LoDo district, Denver, CO; Thursday 4 PM, soundproofed booth, mixing board with faders lit, ON AIR sign glowing red, two microphones
- Object clue — a phone screen on the mixing board showing an audio waveform with a timestamp matching the donor dinner date

---

### C39005 | F14-08 | The Birth Plan Override — Hospital Follows Intended Parents' Plan → Surrogate's Medical POA Enters — She Is the Biological Mother

**Seed:** Hospital follows intended parents' plan → surrogate's medical POA enters — she is the biological mother

**Engine:** E06 — Quiet Competence (Right All Along)

**Arc:**
1. **Setup:** At Legacy Good Samaritan Hospital in Portland, OR, intended parents Derek and Megan Solis present their birth plan to the L&D nurse, overriding surrogate Nia Cole's, 32, requests for delayed cord clamping and skin-to-skin.
2. **Clue:** The surrogacy contract listed an embryo from the Solis couple. But Nia's OB flagged a genetic marker discrepancy at 32 weeks. Nia hired an independent attorney and got a DNA test. The embryo was Nia's own egg — used without her informed consent due to a clinic mixup.
3. **Turn:** Nia's attorney and medical power of attorney, Camille Reed, walks onto the ward and presents a court order: Nia is the biological mother. The surrogacy contract is void for material misrepresentation. Nia's birth plan takes precedence.
4. **Payoff:** The Solis couple is escorted to a conference room. Nia delivers on her own terms. A malpractice suit against the fertility clinic is filed the following week. Nia keeps her daughter.

**Character Lock:**
- NIA COLE — 32, Black, box braids pinned up, hospital gown, calm but exhausted, one hand on her belly; surrogate who is actually the biological mother
- DEREK SOLIS — 38, white, polo shirt, anxious pacing; intended father
- MEGAN SOLIS — 36, white, blond ponytail, carrying a designer diaper bag; intended mother, assertive
- CAMILLE REED — 45, Black, tailored navy blazer, leather portfolio, court order visible in hand; Nia's attorney and medical POA
- Setting — Legacy Good Samaritan Hospital, labor and delivery ward, Portland, OR; Tuesday 6 AM, dawn light through blinds, monitors beeping, a whiteboard with birth plan details
- Object clue — court order in Camille's hand (folded, seal visible but text not readable)

---

### C39006 | F15-01 | The Doorbell Reunion — Foster Parents Prepare Adoption Finalization → Birth Mother Arrives With Court Order Stopping the Signing

**Seed:** Foster parents prepare adoption finalization → birth mother arrives with court order stopping the signing

**Engine:** E09 — Slow-Burn Devotion

**Arc:**
1. **Setup:** On a suburban porch in Madison, WI, foster parents Claire and David Amato, both 40s, celebrate with balloons and a cake — tomorrow they finalize the adoption of 4-year-old Mia, whom they've raised since infancy.
2. **Clue:** The doorbell rings. A woman stands there — thin, nervous, clutching a manila folder. Claire recognizes her from the one supervised visit two years ago. It is Jade Hollowell, 28, Mia's birth mother, newly out of recovery.
3. **Turn:** Jade holds a court order from the family court: a stay on the adoption pending a reunification hearing. Jade completed treatment, held a job for eighteen months, and passed every requirement. The court granted her standing to contest.
4. **Payoff:** The adoption is delayed — not denied. Over six months of supervised visits, Mia builds a relationship with both families. The final ruling grants Jade primary custody with generous visitation for the Amatos, who remain "Auntie Claire and Uncle David." It is not clean. But it is true.

**Character Lock:**
- CLAIRE AMATO — 42, white, auburn bob, soft cardigan, flour on her hands from the cake; foster mother, loves Mia deeply
- DAVID AMATO — 44, white, glasses, flannel shirt, holding a balloon bouquet; foster father, protective
- JADE HOLLOWELL — 28, white, thin, dark circles fading, clean denim jacket, trembling hands, manila folder pressed to her chest; birth mother, eighteen months sober
- MIA — 4, mixed-race, pigtails with colorful barrettes, tugging on Claire's cardigan, unaware; the child
- Setting — Amato family front porch, residential street, Madison, WI; Saturday late morning, autumn leaves on the lawn, pumpkins on the steps, a homemade "FOREVER FAMILY" banner on the door
- Object clue — manila folder with court seal pressed against Jade's chest

---

### C39007 | F18-06 | The GitHub Lockout — CTO Revokes Co-Founder Access → Repo History Shows She Wrote the Core Algorithm

**Seed:** CTO revokes co-founder access → repo history shows co-founder wrote core algorithm

**Engine:** E04 — The Test in Disguise (reassigned to E06 Quiet Competence for no consecutive E04)

Actually E04 at position 3 and here at position 7 — not consecutive. Keep E04.

**Engine:** E04 — The Test in Disguise

**Arc:**
1. **Setup:** At a coworking space in Austin, TX, CTO Kyle Renner, 33, sends an all-hands Slack message announcing that co-founder Priya Anand, 31, has been "transitioned out" and her GitHub access revoked for "security reasons."
2. **Clue:** Junior engineer Tomas Vega notices the core algorithm repository's commit history: 847 of 900 initial commits bear Priya's signature. The timestamp on Kyle's "authored" commits post-dates Priya's by months — he forked her work.
3. **Turn:** Priya enters the coworking space the next morning with a laptop, a USB backup of the full repo (pre-fork), and a letter from her IP attorney citing the original commit timestamps, her employment agreement's IP assignment clause (which predates Kyle's), and a cease-and-desist.
4. **Payoff:** The board calls an emergency meeting. Kyle's "authored" commits are forensically proven to be rebased copies. Priya is reinstated as CTO. Kyle is removed for cause. The Series A term sheet — which required Priya's co-sign — proceeds with her name restored.

**Character Lock:**
- PRIYA ANAND — 31, Indian-American, dark hair in a low bun, wire-rim glasses, plain gray hoodie and laptop bag; co-founder, quiet, wrote the core algorithm
- KYLE RENNER — 33, white, styled undercut, Allbirds sneakers, Patagonia vest over a henley; CTO, performative, revoked her access
- TOMAS VEGA — 24, Latino, curly hair, AirPods in one ear, wide eyes; junior engineer who noticed the commits
- Setting — Shared coworking office, East Sixth Street, Austin, TX; Wednesday 9 AM, standing desks, monitor screens, exposed brick, a large Slack notification visible on a wall-mounted TV
- Object clue — Priya's laptop showing the commit history timeline (visible as colored graph bars, not readable text)

---

### C39008 | F21-25 | The Final Chip Count — Collector Demands All-In Payment → Debtor Slides a Deed — He Bought the Casino Last Week

**Seed:** Collector demands all-in payment → debtor slides deed — he bought the casino last week

**Engine:** E00 — Humiliation → Reveal

**Arc:**
1. **Setup:** On the casino floor at the Regency Atlantic in Atlantic City, NJ, pit boss and loan collector Frank Delvecchio, 55, corners regular Ray Okafor, 42, at a blackjack table and demands full payment of $180,000 in markers.
2. **Clue:** Ray doesn't flinch. He orders a coffee from the waitress and pulls a folded document from his jacket. Frank laughs: "A check won't save you, pal."
3. **Turn:** Ray unfolds a commercial deed of sale — dated six days ago — transferring ownership of the Regency Atlantic to Okafor Holdings LLC. Ray is the new owner. Frank works for him.
4. **Payoff:** Ray cancels his own markers (owner's prerogative on house debt), fires Frank for predatory collection practices documented by the gaming commission, and promotes the floor dealer who once quietly slipped him a coffee during a bad night.

**Character Lock:**
- RAY OKAFOR — 42, Nigerian-American, shaved head, fitted black blazer over a turtleneck, gold signet ring, perfectly calm; the "debtor" who bought the casino
- FRANK DELVECCHIO — 55, white, slicked gray hair, ill-fitting brown suit, pinky ring, aggressive lean; pit boss / collector
- Setting — Regency Atlantic casino floor, Atlantic City, NJ; Friday 11 PM, green felt tables, low pendant lights, slot machine glow in background, sparse late-night crowd
- Object clue — folded commercial deed of sale in Ray's jacket inner pocket

---

### C39009 | F23-08 | The Cancel Campaign — Mob Demands Deplatforming → Target Reveals Ownership Stake in the Platform

**Seed:** Mob demands deplatforming → target reveals ownership stake in the platform

**Engine:** E12 — Karma / Comeuppance

**Arc:**
1. **Setup:** In her loft apartment in Los Angeles, CA, lifestyle influencer Zara Khoury, 27, watches her follower count plummet as a coordinated cancel campaign floods her comments with "DEPLATFORM ZARA" after a rival accused her of faking charity donations.
2. **Clue:** Zara doesn't panic. She opens a second laptop — one connected to a backend dashboard. Her business manager sends a text: "Board confirmed. You're clear to disclose."
3. **Turn:** Zara goes live. Instead of an apology video, she shares her screen showing the platform's shareholder registry: Khoury Capital holds 12% of voting shares — the largest individual stake. She is not just a user. She built the investment round that saved the platform from bankruptcy in 2022.
4. **Payoff:** Zara cannot be deplatformed by the mob — or by the rival who organized the campaign. The rival, exposed as having fabricated the charity accusation, is the one removed for terms-of-service violations. Zara donates the proceeds of her next brand deal to the actual charity — publicly, with receipts.

**Character Lock:**
- ZARA KHOURY — 27, Lebanese-American, long dark hair, minimal makeup, oversized cream sweater, calm focus; influencer and silent platform investor
- Setting — Zara's loft apartment, Arts District, Los Angeles, CA; Thursday 9 PM, ring light off, only laptop glow and city lights through floor-to-ceiling windows, modern minimalist decor
- Object clue — second laptop open to a shareholder registry dashboard (visible as a graph/pie chart, not readable text)

---

### C39010 | F27-24 | The Spouse's Discovery — Wife Finds Storage Unit → Unit Contains Uniform and Civilian Clothes Same-Day Photos

**Seed:** Wife finds storage unit → unit contains uniform and civilian clothes same-day photos

**Engine:** E09 — Slow-Burn Devotion

**Arc:**
1. **Setup:** In Columbus, OH, military wife Kendra Briggs, 34, finds a storage unit key on her husband Staff Sergeant Marcus Briggs's, 36, keyring that she doesn't recognize. He is supposedly on his third deployment to Kuwait.
2. **Clue:** She drives to the storage facility. The unit contains two sets of clothes on hangers: a full Army combat uniform and a set of civilian clothes — polo, jeans, sneakers. On the shelf: a stack of Polaroids showing Marcus in both outfits, same haircut, same background, same date stamps. He photographed both versions of himself to maintain the lie.
3. **Turn:** Kendra calls the rear detachment office at Fort Moore. They confirm: SSG Briggs has not deployed. He has been on "permissive TDY" — living off-post, locally, for five months. He never left Ohio.
4. **Payoff:** Kendra changes the locks, contacts a JAG attorney, and files for separation. Marcus's chain of command initiates an investigation for fraud against the military (collecting deployment pay without deploying). Kendra's support group friends — women who sent her care packages for months — rally around her. The deployment was always a lie.

**Character Lock:**
- KENDRA BRIGGS — 34, Black, short natural hair, Army spouse hoodie, jeans, holding a small key on a plain ring; wife, discovering the lie
- MARCUS BRIGGS (absent from photo) — 36, Black, staff sergeant, supposedly deployed; the liar
- Setting — EZ-Store self-storage facility, Polaris Parkway, Columbus, OH; Wednesday afternoon, orange roll-up doors, concrete floor, fluorescent corridor lights, one unit open showing hanging clothes and a shelf
- Object clue — stack of Polaroid photos on the shelf showing same man in two different outfits with matching date stamps

---

## Notes

- All settings US-based, fictional characters only
- No graphic violence or sexual content (Google policy compliant)
- Photo shows tension Beat 1–2 only; payoff never in frame
- Engines: E00 → E08 → E04 → E13 → E06 → E09 → E04 → E00 → E12 → E09 (no consecutive duplicates ✓)
- Opening styles: all 10 distinct ✓
- 10 distinct US states ✓
