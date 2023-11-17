import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';
import { button } from './.stackbit/models/button';
import { hero } from './.stackbit/models/hero';
import { page } from './.stackbit/models/page';
import { stats } from './.stackbit/models/stats';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  buildCommand: 'nx build home',
  devCommand: 'nx serve home --port {PORT}',
  installCommand: 'yarn install',
  nodeVersion: '18',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [button, hero, page, stats],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'apps/home/public',
        uploadDir: 'images',
        publicPath: '/',
      },
    }),
  ],
});
