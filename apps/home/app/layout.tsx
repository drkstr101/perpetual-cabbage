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
    template: '%s - Watheia Labs',
    default: 'Watheia Labs - We make technology work for you',
  },
  description:
    'Watheia Labs, LLC. is a digital agency located in Tri-Cities, Washington, developing quality software for over 20 years.',
  alternates: {
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-neutral-50 dark:bg-black">
        <UIProvider>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
