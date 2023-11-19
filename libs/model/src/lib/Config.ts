import { Model } from '@stackbit/types';

export const Config: Model = {
  type: 'data',
  name: 'Config',
  label: 'Config',
  labelField: 'titleSuffix',
  fields: [
    {
      type: 'image',
      name: 'favicon',
      label: 'Favicon',
      required: false,
      hidden: false,
      localized: false,
    },
    {
      type: 'string',
      name: 'defaultTitle',
      label: 'Default page title',
      description: 'The page title to display when there is no title defined for a specific page',
      required: false,
      hidden: false,
      localized: false,
    },
    {
      type: 'image',
      name: 'defaultSocialImage',
      label: 'Default image for social sharing',
      description:
        'Default image to use for the og:image meta tag in all pages, except in pages that define another image.',
      required: false,
      hidden: false,
      localized: false,
    },
    {
      type: 'list',
      name: 'defaultMetaTags',
      label: 'Default additional meta tags',
      description:
        'Additional meta tags to set as default in all pages. Tags defined here are low-priority: they may be overriden by page-level settings.',
      required: false,
      hidden: false,
      localized: false,
      items: {
        type: 'model',
        models: ['MetaTag'],
      },
    },
  ],
  singleInstance: true,
  readOnly: true,
  file: 'data/config.json',
};
