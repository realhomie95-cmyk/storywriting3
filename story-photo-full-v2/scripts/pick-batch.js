#!/usr/bin/env node
/**
 * Controlled-random batch picker for the story-photo-full-v1 pipeline.
 *
 * Pairs a SETTING (concepts3, 50 groups) with an ENGINE (story-engines.md,
 * E00-E31) for each item, then enforces:
 *   - at most --max-engines DISTINCT engines in the batch
 *   - no two CONSECUTIVE items share an engine
 *   - balanced TONE (feel-good / bittersweet / mixed)
 *   - distinct settings (when count <= 50)
 *   - rotated opening styles
 *
 * Prints an engine-map table + a JSON skeleton with an `engine` field.
 * Optionally writes the skeleton to output/<batch>/<batch>.json.
 *
 * Usage:
 *   node scripts/pick-batch.js --count 10 --prefix M --batch batch-08
 *   node scripts/pick-batch.js -n 10 -p M -b batch-08 --max-engines 7 --seed 42 --write
 *
 * NOTE: the ENGINES table below MIRRORS references/story-engines.md.
 *       Keep them in sync (tone + photo + name).
 */

'use strict';

const fs = require('fs');
const path = require('path');

// --- Engine registry (mirror of references/story-engines.md) -------------
// tone: feel-good | bittersweet | mixed ; photo: hidden | action
const ENGINES = [
  ['E00', 'Humiliation → Reveal', 'mixed', 'hidden'],
  ['E01', 'Kindness Rewarded', 'feel-good', 'hidden'],
  ['E02', 'Hidden Sacrifice Revealed', 'mixed', 'hidden'],
  ['E03', 'Debt of Gratitude', 'feel-good', 'hidden'],
  ['E04', 'The Test in Disguise', 'mixed', 'hidden'],
  ['E05', 'Crisis Hero', 'mixed', 'action'],
  ['E06', 'Quiet Competence', 'mixed', 'hidden'],
  ['E07', 'The Honest Return', 'feel-good', 'action'],
  ['E08', 'Long-Lost Reunion', 'mixed', 'hidden'],
  ['E09', 'Slow-Burn Devotion', 'mixed', 'hidden'],
  ['E10', 'The Misjudged Protector', 'mixed', 'hidden'],
  ['E11', 'Bittersweet / Too Late', 'bittersweet', 'hidden'],
  ['E12', 'Karma / Comeuppance', 'mixed', 'hidden'],
  ['E13', 'The Whistleblower Stands Alone', 'mixed', 'hidden'],
  ['E14', 'The Sacrificial Choice', 'mixed', 'hidden'],
  ['E15', 'The Truth That Exonerates', 'mixed', 'hidden'],
  ['E16', 'The Forgiveness That Transforms', 'mixed', 'hidden'],
  ['E17', 'Found Family / Community Rallies', 'feel-good', 'hidden'],
  ['E18', 'The Stranger Who Stayed', 'feel-good', 'hidden'],
  ['E19', 'Good Deed Witnessed', 'feel-good', 'action'],
  ['E20', 'Generational Kindness Repaid', 'feel-good', 'hidden'],
  ['E21', 'The Last Wish Fulfilled', 'bittersweet', 'hidden'],
  ['E22', 'Underdog Wins on Merit', 'feel-good', 'action'],
  ['E23', 'Hidden Talent Discovered', 'feel-good', 'hidden'],
  ['E24', 'Earned Trust Over Time', 'feel-good', 'hidden'],
  ['E25', 'Mentor–Student Torch Passing', 'mixed', 'hidden'],
  ['E26', 'The Misunderstanding Explained', 'mixed', 'hidden'],
  ['E27', 'The Protector Who Stayed Away', 'bittersweet', 'hidden'],
  ['E28', 'Unlikely Alliance', 'mixed', 'hidden'],
  ['E29', 'Reunion of Rivals', 'mixed', 'hidden'],
  ['E30', 'Full-Circle Role Reversal', 'mixed', 'hidden'],
  ['E31', 'The Provider in Disguise', 'feel-good', 'hidden'],
].map(([id, name, tone, photo]) => ({
  id,
  name,
  tone,
  photoRule: photo === 'action' ? 'action-in-photo' : 'twist-hidden',
  seeds: id === 'E00' ? 0 : 30, // concepts4 seeds per engine (E00 lives in concepts1/2/3)
}));

// Suggested opening styles per engine (from caption-methodology.md).
const STYLES = {
  conflict: ['Dialogue slap', 'Silent witness', 'Accuser POV', 'Wrong apology'],
  warmth: ['Tender moment', 'Moral choice'],
  crisis: ['Crisis clock', 'Visual reveal'],
  return: ['The return', 'Room goes wrong'],
  devotion: ['Quiet devotion', 'Object clue'],
  neutral: ['Object clue', 'Silent witness', 'Room goes wrong'],
};
const STYLE_BY_ENGINE = {
  E00: 'conflict', E04: 'conflict', E12: 'conflict', E13: 'conflict', E15: 'conflict',
  E01: 'warmth', E17: 'warmth', E18: 'warmth', E20: 'warmth', E24: 'warmth', E31: 'warmth', E14: 'warmth',
  E05: 'crisis', E22: 'crisis', E07: 'crisis', E19: 'crisis', E06: 'crisis',
  E03: 'return', E08: 'return', E29: 'return', E26: 'return', E28: 'return', E30: 'return',
  E09: 'devotion', E11: 'devotion', E21: 'devotion', E27: 'devotion', E02: 'devotion', E10: 'devotion',
  E16: 'neutral', E23: 'neutral', E25: 'neutral',
};

// --- Settings (concepts3, 50 groups, 12 seeds each) ----------------------
const SETTINGS = [
  'Airports & Air Travel', 'Hotels & Hospitality', 'Banking & Lending',
  'Real Estate & Open Houses', 'Auto Dealerships & Repair', 'Tech Startups & Silicon Valley',
  'Luxury Retail & Boutiques', 'Funerals & Estate', 'Veterinary & Animal Rescue',
  'Farming & Rural Life', 'Fishing, Docks & Maritime', 'Construction & Skilled Trades',
  'Firefighters, EMS & Rescue', 'Trains & Public Transit', 'Rideshare & Taxi',
  'Bookstores & Publishing', 'Museums & Archives', 'Fashion & Modeling',
  'Salons, Barbershops & Beauty', 'Gyms & Personal Training', 'Casinos & High-Stakes Gambling',
  'Nightclubs & Bouncers', 'Graduations & Award Ceremonies', 'Corporate Boardrooms & Mergers',
  'Call Centers & Customer Service', 'Pharmacies & Drugstores', 'Dental Clinics',
  'Nursing Homes & Elder Care', 'Home Renovation & Interior Design', 'Disability & Accessibility',
  'Cruise Ships & Resorts', 'School Reunions', 'Social Media & Influencers',
  'Theme Parks & Entertainment Venues', 'Gaming & Esports', 'Research Labs & Academia',
  'Space & Aerospace', 'City Hall & Local Politics', 'Newsrooms & Journalism',
  'Charity Galas & Philanthropy', 'Auction Houses', 'Pawn Shops & Antiques',
  'Jewelers & Watchmakers', 'Vineyards & Wine', 'Coffee Shops & Cafés',
  'Landscaping & Gardens', 'Couriers, Moving & Delivery', 'Security Firms & Guards',
  'Prisons, Corrections & Reentry', 'Insurance & Claims',
];
const SETTING_SEEDS = 12;

// --- Seeded RNG (mulberry32) ---------------------------------------------
function hashSeed(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function randInt(rng, min, max) {
  return min + Math.floor(rng() * (max - min + 1));
}
function shuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Arg parsing ----------------------------------------------------------
function parseArgs(argv) {
  const out = {
    count: 10, prefix: 'M', batch: null, start: 1,
    maxEngines: null, seed: null, write: false,
  };
  const alias = { n: 'count', p: 'prefix', b: 'batch', s: 'seed' };
  for (let i = 0; i < argv.length; i++) {
    let key = argv[i];
    if (!key.startsWith('-')) continue;
    key = key.replace(/^--?/, '');
    key = alias[key] || key;
    const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    if (camel === 'write') { out.write = true; continue; }
    const val = argv[++i];
    if (['count', 'start', 'maxEngines', 'seed'].includes(camel)) out[camel] = parseInt(val, 10);
    else out[camel] = val;
  }
  if (!out.batch) out.batch = `batch-${out.prefix.toLowerCase()}`;
  if (out.maxEngines == null) out.maxEngines = Math.min(8, Math.max(3, Math.round(out.count * 0.7)));
  if (out.seed == null) out.seed = hashSeed(`${out.batch}|${out.count}|${Date.now()}`);
  return out;
}

// --- Tone target distribution --------------------------------------------
function toneTargets(n) {
  let bs = Math.min(Math.max(Math.round(n * 0.2), 1), Math.floor(n * 0.3));
  if (n < 3) bs = 0; // too small to spare a bittersweet slot
  let fg = Math.round(n * 0.4);
  let mx = n - bs - fg;
  while (mx < 0) { fg--; mx = n - bs - fg; }
  return { 'feel-good': fg, bittersweet: bs, mixed: mx };
}

// Largest-remainder allocation of `total` slots across buckets by weight.
function allocate(weights, total, caps) {
  const keys = Object.keys(weights).filter((k) => weights[k] > 0);
  const sumW = keys.reduce((s, k) => s + weights[k], 0);
  const alloc = {};
  let used = 0;
  const rema = [];
  for (const k of keys) {
    const raw = (weights[k] / sumW) * total;
    let base = Math.max(1, Math.floor(raw)); // at least 1 per active bucket
    base = Math.min(base, caps[k]);
    alloc[k] = base;
    used += base;
    rema.push([k, raw - Math.floor(raw)]);
  }
  // distribute / trim to hit `total` exactly, respecting caps
  rema.sort((a, b) => b[1] - a[1]);
  let idx = 0;
  while (used < total) {
    const k = rema[idx % rema.length][0];
    if (alloc[k] < caps[k]) { alloc[k]++; used++; }
    idx++;
    if (idx > total * keys.length + 10) break;
  }
  // if over (caps forced base too high), trim from largest
  const order = keys.slice().sort((a, b) => alloc[b] - alloc[a]);
  let oi = 0;
  while (used > total) {
    const k = order[oi % order.length];
    if (alloc[k] > 1) { alloc[k]--; used--; }
    oi++;
    if (oi > total * keys.length + 10) break;
  }
  return alloc;
}

// Greedy interleave so no two consecutive entries share an id.
function interleave(multiset, rng) {
  const counts = {};
  for (const e of multiset) counts[e.id] = (counts[e.id] || 0) + 1;
  const byId = {};
  for (const e of multiset) byId[e.id] = e;
  const result = [];
  let last = null;
  for (let step = 0; step < multiset.length; step++) {
    const candidates = Object.keys(counts).filter((id) => counts[id] > 0 && id !== last);
    let pool = candidates.length ? candidates : Object.keys(counts).filter((id) => counts[id] > 0);
    // prefer the id with the highest remaining count (spreads big buckets)
    const maxC = Math.max(...pool.map((id) => counts[id]));
    pool = pool.filter((id) => counts[id] === maxC);
    const pick = pool[Math.floor(rng() * pool.length)];
    result.push(byId[pick]);
    counts[pick]--;
    last = pick;
  }
  return result;
}

// --- Build the batch ------------------------------------------------------
function build(opts) {
  const rng = mulberry32(opts.seed);
  const n = opts.count;

  const byTone = { 'feel-good': [], bittersweet: [], mixed: [] };
  for (const e of ENGINES) byTone[e.tone].push(e);

  const targets = toneTargets(n);
  const caps = {};
  for (const t of Object.keys(targets)) {
    // distinct engines available in this tone AND can't exceed item count
    caps[t] = Math.min(byTone[t].length, targets[t]);
  }
  const slotAlloc = allocate(targets, Math.min(opts.maxEngines, n), caps);

  // pick distinct engines per tone, then assign item counts across them
  let multiset = [];
  for (const tone of Object.keys(targets)) {
    const items = targets[tone];
    if (items <= 0) continue;
    const slots = Math.max(1, slotAlloc[tone] || 1);
    const chosen = shuffle(byTone[tone], rng).slice(0, slots);
    // even spread of `items` across `chosen`
    for (let i = 0; i < items; i++) multiset.push(chosen[i % chosen.length]);
  }

  const ordered = interleave(multiset, rng);

  // distinct settings + seed indices
  const settingIdx = shuffle(SETTINGS.map((_, i) => i), rng);
  const items = [];
  let prevStyle = null;
  for (let i = 0; i < n; i++) {
    const eng = ordered[i];
    const gi = settingIdx[i % settingIdx.length];
    const groupNo = String(gi + 1).padStart(2, '0');
    const settingName = SETTINGS[gi];
    const settingSeed = randInt(rng, 1, SETTING_SEEDS);

    // opening style: pick from engine's group, avoid repeating previous
    const styleGroup = STYLES[STYLE_BY_ENGINE[eng.id] || 'neutral'];
    let style = styleGroup.find((s) => s !== prevStyle) || styleGroup[0];
    prevStyle = style;

    const id = `${opts.prefix}${String(opts.start + i).padStart(3, '0')}`;
    const isE00 = eng.id === 'E00';
    const engSeed = isE00 ? null : randInt(rng, 1, eng.seeds);
    const settingRef = `concepts3 #${groupNo}-${settingSeed}`;
    const engineRef = isE00 ? null : `concepts4 #${eng.id}-${engSeed}`;
    const conceptSource = isE00
      ? `${settingName} (${settingRef}) — E00 humiliation→reveal`
      : `${settingName} (${settingRef}) × ${eng.id} ${eng.name} (${engineRef})`;

    items.push({
      id,
      title: null,
      engine: `${eng.id} — ${eng.name}`,
      tone: eng.tone,
      photoRule: eng.photoRule,
      openingStyle: style,
      setting: `${settingName} (concepts3 #${groupNo})`,
      seedRefs: { setting: settingRef, engine: engineRef },
      conceptSource,
      characterBible: null,
      photoPrompt: null,
      caption: null,
      fullStory: null,
      status: { plan: false, photo: false, caption: false, story: false },
    });
  }
  return items;
}

// --- Reporting ------------------------------------------------------------
function pad(s, w) { s = String(s); return s + ' '.repeat(Math.max(0, w - s.length)); }

function printEngineMap(items, opts) {
  const distinct = new Set(items.map((i) => i.engine));
  const tones = items.reduce((m, i) => ((m[i.tone] = (m[i.tone] || 0) + 1), m), {});
  let dup = 0;
  for (let i = 1; i < items.length; i++) if (items[i].engine === items[i - 1].engine) dup++;

  console.log(`\n# ENGINE MAP — ${opts.batch} | ${items.length} items | seed=${opts.seed}`);
  console.log(`# distinct engines: ${distinct.size} (max ${opts.maxEngines}) | tone: ` +
    Object.entries(tones).map(([t, c]) => `${t}=${c}`).join(', ') +
    ` | consecutive-dup: ${dup === 0 ? 'OK (0)' : 'WARN (' + dup + ')'}`);
  console.log('-'.repeat(118));
  console.log(
    pad('#', 3), pad('id', 6), pad('engine', 34), pad('tone', 12),
    pad('photo', 16), pad('opening', 15), 'setting / seeds'
  );
  console.log('-'.repeat(118));
  items.forEach((it, i) => {
    const seeds = it.seedRefs.engine ? `${it.seedRefs.setting}  ${it.seedRefs.engine}` : it.seedRefs.setting;
    console.log(
      pad(i + 1, 3), pad(it.id, 6), pad(it.engine, 34), pad(it.tone, 12),
      pad(it.photoRule, 16), pad(it.openingStyle, 15),
      `${it.setting.replace(/ \(concepts3.*/, '')} | ${seeds}`
    );
  });
  console.log('-'.repeat(118));
}

// --- Main -----------------------------------------------------------------
function main() {
  const opts = parseArgs(process.argv.slice(2));
  const items = build(opts);

  const skeleton = {
    batchId: opts.batch,
    prefix: opts.prefix,
    pipelineVersion: 'v2',
    conceptSource: 'mixed-bank (concepts3 settings × story-engines)',
    generated: new Date().toISOString(),
    seed: opts.seed,
    maxEngines: opts.maxEngines,
    items,
  };

  printEngineMap(items, opts);

  if (opts.write) {
    const dir = path.join('output', opts.batch);
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${opts.batch}.json`);
    fs.writeFileSync(file, JSON.stringify(skeleton, null, 2), 'utf8');
    console.log(`\nWrote skeleton: ${file}`);
    console.log('Next: run Phase 0 to fill title + 4-beat arc + characterBible per item (keep the engine/tone/photoRule/openingStyle as planned).');
  } else {
    console.log('\n# JSON SKELETON (pipe to a file, or re-run with --write):\n');
    console.log(JSON.stringify(skeleton, null, 2));
  }
}

main();
