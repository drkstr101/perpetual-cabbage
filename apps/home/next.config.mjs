//@ts-check

import nextMDX from '@next/mdx';
import { composePlugins, withNx } from '@nx/next';
import { mdxOptions } from '../../dist/libs/mdx/index.cjs.mjs';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: mdxOptions,
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withMDX,
];

export default composePlugins(...plugins)(nextConfig);
