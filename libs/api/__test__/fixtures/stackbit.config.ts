import { GitContentSource, type FileSystemContentSourceOptions } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';
import model from '@watheia/cabbage.model';

export const options: FileSystemContentSourceOptions = {
  rootPath: __dirname,
  contentDirs: ['content'],
  models: Object.values(model),
};

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  contentSources: [new GitContentSource(options)],
});
