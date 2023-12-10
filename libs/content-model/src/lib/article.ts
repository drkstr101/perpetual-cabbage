import { PageModel } from '@stackbit/types';

export const Article: PageModel = {
  name: 'Article',
  type: 'page',
  hideContent: true,
  urlPath: '/{slug}',
  filePath: 'content/pages/articles/{slug}.md',
  fields: [
    { name: 'title', type: 'string', required: true },
    { name: 'description', type: 'string', required: true },
    { name: 'author', type: 'string', required: true },
    { name: 'date', type: 'date', required: true },
  ],
};
