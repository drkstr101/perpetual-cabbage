import { type MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    // eslint-disable-next-line jsx-a11y/alt-text
    Image: (props: ImageProps) => <Image {...props} />,
    // img: (props: any) => (
    //   <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...props} />
    // ),
  };
}
