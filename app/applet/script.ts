import fs from 'fs';
import { globSync } from 'glob';

const files = globSync('components/**/*.tsx');

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/text-gray-900/g, 'text-white');
  content = content.replace(/text-gray-800/g, 'text-gray-100');
  content = content.replace(/text-gray-700/g, 'text-gray-300');
  content = content.replace(/text-gray-600/g, 'text-gray-400');
  content = content.replace(/text-gray-500/g, 'text-gray-400');
  content = content.replace(/bg-white\/90/g, 'bg-navy\/90');
  content = content.replace(/bg-white\/95/g, 'bg-navy\/95');
  content = content.replace(/bg-white\/80/g, 'bg-navy\/80');
  content = content.replace(/bg-white\/60/g, 'bg-navy\/60');
  content = content.replace(/bg-white\/30/g, 'bg-navy\/30');
  content = content.replace(/bg-white/g, 'bg-navy-light');
  content = content.replace(/bg-gray-50\/50/g, 'bg-navy\/50');
  content = content.replace(/bg-gray-50/g, 'bg-navy-lighter');
  content = content.replace(/border-gray-100/g, 'border-white\/10');
  content = content.replace(/border-gray-200/g, 'border-white\/10');
  fs.writeFileSync(f, content);
}
