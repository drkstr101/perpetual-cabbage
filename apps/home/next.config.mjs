//@ts-check
import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import { composePlugins, withNx } from '@nx/next';
import remarkGfm from 'remark-gfm';

const withMdx = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    // @ts-expect-error
    rehypePlugins: [rehypePrism],
  },
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withMdx,
];

export default composePlugins(...plugins)(nextConfig);
