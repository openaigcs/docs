import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { I18nClientProvider } from './i18n-provider';
import './global.css';

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