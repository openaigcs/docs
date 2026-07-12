import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { I18nClientProvider } from './i18n-provider';
import './global.css';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <I18nClientProvider>
          <RootProvider>{children}</RootProvider>
        </I18nClientProvider>
      </body>
    </html>
  );
}