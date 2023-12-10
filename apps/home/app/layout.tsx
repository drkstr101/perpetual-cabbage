import { type Metadata } from 'next';

import { Layout, UIProvider } from '@watheia/cabbage.base-ui';

// import global styles
import '@watheia/cabbage.base-ui';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  'http://localhost:4200';

export const metadata: Metadata = {
  title: {
    template: '%s - Spencer Sharp',
    default: 'Spencer Sharp - Software designer, founder, and amateur astronaut',
  },
  description:
    'I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <UIProvider>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
