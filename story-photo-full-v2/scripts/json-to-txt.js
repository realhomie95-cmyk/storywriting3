#!/usr/bin/env node
/**
 * Assemble batch JSON into TXT package files (story-photo-full-v2).
 * Usage: node scripts/json-to-txt.js path/to/batch.json
 */

const fs = require('fs');
const path = require('path');

const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error('Usage: node scripts/json-to-txt.js <batch.json>');
  process.exit(1);
}

const batch = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const dir = path.dirname(jsonPath);
const base = batch.batchId || path.basename(jsonPath, '.json');
const sep = '='.repeat(80);
const ids = batch.items.map((i) => i.id).join('–');

/** Compact block for -photos.txt: id|title, lock, blank line, prompt body; items separated by one blank line */
function photoExportBlock(item) {
  const titleLine = `${item.id} | ${item.title}`;
  const lock = (item.characterBible || '').trim();
  const prompt = (item.photoPrompt || '').trim();
  if (!lock) return prompt ? `${titleLine}\n\n${prompt}` : titleLine;
  return prompt ? `${titleLine}\n${lock}\n\n${prompt}` : `${titleLine}\n${lock}`;
}

function storyBlock(item) {
  return `${item.id} | ${item.title}\n\n${item.fullStory || ''}`;
}

const packageLines = [
  `# ${base.toUpperCase()} | ${ids} | ${batch.conceptSource || ''} | pipeline v2`,
  '',
];

for (const item of batch.items) {
  const capLen = item.caption ? item.caption.length : 0;
  const storyLen = item.fullStory ? item.fullStory.length : 0;
  packageLines.push(
    sep,
    `${item.id} | ${item.title}`,
    sep,
    '',
    '[CHARACTER LOCK]',
    item.characterBible || '',
    '',
    '[PHOTO PROMPT]',
    item.photoPrompt || '',
    '',
    `[CAPTION — ${capLen} chars]`,
    item.caption || '',
    '',
    `[FULL STORY — ${storyLen} chars]`,
    item.fullStory || '',
    ''
  );
}

const packagePath = path.join(dir, `${base}-package.txt`);
fs.writeFileSync(packagePath, packageLines.join('\n'), 'utf8');

const photosPath = path.join(dir, `${base}-photos.txt`);
fs.writeFileSync(
  photosPath,
  batch.items.map(photoExportBlock).join('\n\n'),
  'utf8'
);

const captionsPath = path.join(dir, `${base}-captions.txt`);
fs.writeFileSync(
  captionsPath,
  batch.items.map((i) => i.caption || '').join('\n\n'),
  'utf8'
);

const storiesPath = path.join(dir, `${base}-stories.txt`);
fs.writeFileSync(
  storiesPath,
  batch.items.map(storyBlock).join('\n\n'),
  'utf8'
);

console.log('Wrote:');
console.log(' ', packagePath);
console.log(' ', photosPath);
console.log(' ', captionsPath);
console.log(' ', storiesPath);
