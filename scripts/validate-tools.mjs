import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read tools.ts file content
const toolsFilePath = join(__dirname, '../src/data/tools.ts');
const fileContent = readFileSync(toolsFilePath, 'utf8');

console.log('🔍 Auditing AI Toolbox dataset...');

// Isolate the AI_TOOLS block
const startIdx = fileContent.indexOf('export const AI_TOOLS: AITool[] = [');
const endIdx = fileContent.indexOf('];', startIdx);
const toolsBlock = fileContent.substring(startIdx, endIdx);

const idRegex = /id:\s*'([^']+)'/g;
const urlRegex = /officialUrl:\s*'([^']+)'/g;
const nameRegex = /name:\s*'([^']+)'/g;
const categoryRegex = /category:\s*'([^']+)'/g;

const ids = [];
let match;
while ((match = idRegex.exec(toolsBlock)) !== null) {
  ids.push(match[1]);
}

const urls = [];
while ((match = urlRegex.exec(toolsBlock)) !== null) {
  urls.push(match[1]);
}

const names = [];
while ((match = nameRegex.exec(toolsBlock)) !== null) {
  names.push(match[1]);
}

const categories = [];
while ((match = categoryRegex.exec(toolsBlock)) !== null) {
  categories.push(match[1]);
}

console.log(`📊 Found ${ids.length} tools in AI_TOOLS dataset.`);

const errors = [];

// 1. Unique Identifiers
const idSet = new Set();
for (const id of ids) {
  if (idSet.has(id)) {
    errors.push(`Duplicate ID found: "${id}"`);
  }
  idSet.add(id);
}

// 2. Count match check
if (ids.length !== urls.length || ids.length !== names.length || ids.length !== categories.length) {
  errors.push(`Mismatched property count: ids (${ids.length}), urls (${urls.length}), names (${names.length}), categories (${categories.length})`);
}

// 3. Absolute HTTPS URLs and no placeholder/generic directories
const placeholderKeywords = ['example.com', 'localhost', 'placeholder', 'directory.com', 'affiliate', 'search?q='];

for (let i = 0; i < urls.length; i++) {
  const url = urls[i];
  const name = names[i] || 'Unknown';

  if (!url.startsWith('https://')) {
    errors.push(`Tool "${name}" has invalid non-HTTPS officialUrl: ${url}`);
  }

  for (const placeholder of placeholderKeywords) {
    if (url.includes(placeholder)) {
      errors.push(`Tool "${name}" has suspicious placeholder or directory URL: ${url}`);
    }
  }

  try {
    new URL(url);
  } catch (err) {
    errors.push(`Tool "${name}" has malformed URL: ${url}`);
  }
}

// 4. Check for valid categories
const validCategories = [
  'AI Assistants',
  'Coding & Development',
  'Writing & Content',
  'Image Generation & Design',
  'Video & Animation',
  'Audio & Music',
  'Research & Education',
  'Productivity & Automation',
  'Business & Marketing',
  'Data Analysis',
];

for (let i = 0; i < categories.length; i++) {
  const cat = categories[i];
  const name = names[i] || 'Unknown';
  if (!validCategories.includes(cat)) {
    errors.push(`Tool "${name}" has invalid category: "${cat}"`);
  }
}

if (errors.length > 0) {
  console.error('❌ Validation Failed with errors:');
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
} else {
  console.log('✅ All validation checks passed successfully!');
  console.log(`✅ ${ids.length} tools verified with canonical HTTPS domains, unique identifiers, and valid categories.`);
}
