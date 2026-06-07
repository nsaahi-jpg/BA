import fs from 'fs';
import { globSync } from 'glob';

const files = globSync('components/**/*.tsx');

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/bg-[#080B10]/g, 'bg-white');
  content = content.replace(/text-[#D1D5DB]/g, 'text-gray-600');
  content = content.replace(/text-3d-premium/g, 'text-gray-900');
  content = content.replace(/text-3d-gold/g, 'text-primary');
  content = content.replace(/bg-navy-light\/80/g, 'bg-white/80');
  content = content.replace(/bg-navy-light/g, 'bg-white');
  content = content.replace(/bg-navy-lighter/g, 'bg-gray-50');
  content = content.replace(/bg-navy\/[0-9]+/g, 'bg-white');
  content = content.replace(/bg-navy/g, 'bg-gray-50');
  content = content.replace(/font-display/g, 'font-sans');
  content = content.replace(/text-white/g, 'text-gray-900');
  content = content.replace(/text-gray-100/g, 'text-gray-800');
  content = content.replace(/text-gray-300/g, 'text-gray-700');
  content = content.replace(/text-gray-400/g, 'text-gray-600');
  content = content.replace(/border-white\/10/g, 'border-gray-200');
  fs.writeFileSync(f, content);
}
