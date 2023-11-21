import { compile } from '@mdx-js/mdx';

describe('watheia.cabbage/jest-mdx-transformer', () => {
  it('should render mdx in jest', async () => {
    const result = await compile('# Hello, World!');
    expect(result).toBeDefined();
  });
});
