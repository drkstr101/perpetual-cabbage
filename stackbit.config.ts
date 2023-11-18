import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';
import model from './libs/model/src/index';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  buildCommand: 'nx build home',
  devCommand: 'nx serve home --port {PORT}',
  installCommand: 'yarn install',
  nodeVersion: '18',
  presetSource: {
    type: 'files',
    presetDirs: ['.stackbit/presets'],
  },
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: Object.values(model),
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'apps/home/public',
        uploadDir: 'images',
        publicPath: '/',
      },
    }),
  ],
});
