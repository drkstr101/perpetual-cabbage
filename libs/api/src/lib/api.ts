import { glob } from 'fast-glob';
import { readFileSync } from 'fs';
import * as matter from 'gray-matter';
import { extname, join, resolve } from 'path';

const PAGES_DIR = resolve('content/pages');

function relativePathFromFile(file: string) {
  return file
    .replace(PAGES_DIR, '')
    .replace(extname(file), '')
    .replace(/\/index$/g, '/');
}

function pagePathMap() {
  const allPagePaths = glob.sync(join(PAGES_DIR, '**/*.md'));
  return Object.fromEntries(allPagePaths.map((file) => [relativePathFromFile(file), file]));
}

export async function getPagePaths() {
  return Object.keys(pagePathMap());
}

export async function getPageFromSlug(slug: string) {
  const absPath = pagePathMap()[slug];
  const rawContent = readFileSync(absPath, 'utf8');
  const { data, content } = matter(rawContent);

  return {
    _id: absPath.replace(`${process.cwd()}/`, ''),
    ...data,
    body: content,
  };
}
