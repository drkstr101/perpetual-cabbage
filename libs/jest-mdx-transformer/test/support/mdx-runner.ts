import { compile } from '@mdx-js/mdx';
import { CompileOptions } from '@mdx-js/mdx/lib/compile';
import type { MDXContent, MDXModule } from 'mdx/types';
import { rm, writeFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { Compatible } from 'vfile';

export async function renderMdx(
  input: Readonly<Compatible>,
  options: Readonly<CompileOptions> | null = null
) {
  return renderToStaticMarkup(createElement(await run(await compile(input, options))));
}

export async function run(input: Readonly<Compatible>): Promise<MDXContent> {
  const mod = await runWhole(input);
  return mod.default;
}

export async function runWhole(input: Readonly<Compatible>): Promise<MDXModule> {
  const fileName = 'fixture-' + Math.random() + '.js';
  const fileUrl = new URL(fileName, __dirname);
  const doc = String(input);

  await writeFile(fileUrl, doc);

  try {
    /** @type {MDXModule} */
    return await import(fileUrl.href);
  } finally {
    // This is not a bug: the `finally` runs after the whole `try` block, but
    // before the `return`.
    await rm(fileUrl);
  }
}
