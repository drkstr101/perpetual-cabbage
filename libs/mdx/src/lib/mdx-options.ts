import { CompileOptions } from "@mdx-js/mdx";
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';

export const mdxOptions: CompileOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypePrism],
};
