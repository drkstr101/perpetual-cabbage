// eslint-disable-next-line @nx/enforce-module-boundaries
import { compile } from '../../../dist/libs/mdx';

describe('watheia.cabbage/jest-mdx-transformer', () => {
  it('should render mdx in jest', async () => {
    const result = await compile('# Hello, World!');
    expect(result).toBeDefined();
  });
});
