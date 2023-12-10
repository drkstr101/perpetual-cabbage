import { ArticleProps } from '@watheia/cabbage.content-model';
import glob from 'fast-glob';
import { resolve } from 'path';

export interface ArticleWithSlug extends ArticleProps {
  slug: string;
}

async function importArticle(articleFilename: string): Promise<ArticleWithSlug> {
<<<<<<<< HEAD:libs/cabbage-api/src/lib/cabbage-api.ts
  const { article } = (await import(`@/app/articles/${articleFilename}`)) as { article: Article };
========
  const { article } = (await import(`@/app/articles/${articleFilename}`)) as {
    article: ArticleProps;
  };
>>>>>>>> 53a6839 (feat: add content-model and content-helpers):libs/content-api/src/lib/cabbage-api.ts

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  };
}

export async function getAllArticles() {
  const articleFilenames = await glob('*/page.mdx', {
    cwd: resolve('app/articles'),
  });

  const articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}

export function cabbageApi(): string {
  return 'cabbage-api';
}
