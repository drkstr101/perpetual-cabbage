import glob from 'fast-glob';
import { resolve } from 'path';

interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

async function importArticle(articleFilename: string): Promise<ArticleWithSlug> {
  const { article } = (await import(`@/app/articles/${articleFilename}`)) as { article: Article };

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
