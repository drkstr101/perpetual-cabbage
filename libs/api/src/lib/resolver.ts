/* eslint-disable @typescript-eslint/no-explicit-any */
import { FileSystemContentSourceOptions } from '@stackbit/cms-git';
import { glob } from 'fast-glob';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { extname, join } from 'path';

export interface ContentModel {
  options: FileSystemContentSourceOptions;
  props: Record<string, any>;
  entries: Record<string, any>[];
}

export async function resolveContentModel(
  options: FileSystemContentSourceOptions
): Promise<ContentModel> {
  const pagesDir = join(options.rootPath, 'content/pages');

  function relativePathFromFile(file: string) {
    return file
      .replace(pagesDir, '')
      .replace(extname(file), '')
      .replace(/\/index$/g, '/');
  }

  function resolveContentFile(file: string) {
    const { data, content } = matter(readFileSync(file, 'utf8'));

    return {
      __metadata: {
        id: file.replace(`${options.rootPath}/`, ''),
        urlPath: relativePathFromFile(file),
      },
      ...data,
      body: content,
    };
  }

  return {
    options,
    props: {},
    entries: (await glob(join(pagesDir, '**/*.md'))).map((f) => resolveContentFile(f)),
  };
}
