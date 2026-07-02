'use client';

import { I18nProvider } from 'fumadocs-ui/i18n';
import { usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';

export function I18nClientProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const cookie = document.cookie.match(/FD_LOCALE=([^;]+)/)?.[1];
    if (cookie) return;

    const browserLang = navigator.language?.startsWith('zh') ? 'zh' : 'en';
    const isZhPath = pathname.startsWith('/zh');

    if (browserLang === 'zh' && !isZhPath) {
      document.cookie = 'FD_LOCALE=zh;path=/;max-age=31536000';
      window.location.href = `/zh${pathname}`;
    } else if (browserLang === 'en' && isZhPath) {
      document.cookie = 'FD_LOCALE=en;path=/;max-age=31536000';
      window.location.href = pathname.replace(/^\/zh/, '') || '/';
    } else {
      document.cookie = `FD_LOCALE=${browserLang};path=/;max-age=31536000`;
    }
  }, [pathname]);

  const locale = pathname.startsWith('/zh') ? 'zh' : 'en';

  return (
    <I18nProvider
      locale={locale}
      locales={[
        { locale: 'en', name: 'English' },
        { locale: 'zh', name: '中文' },
      ]}
      translations={
        locale === 'zh'
          ? {
              search: '搜索',
              searchNoResult: '未找到结果',
              toc: '本页内容',
              tocNoHeadings: '无标题',
              lastUpdate: '最后更新',
              chooseLanguage: '选择语言',
              nextPage: '下一页',
              previousPage: '上一页',
              chooseTheme: '主题',
              editOnGithub: '在 GitHub 上编辑',
            }
          : undefined
      }
      onChange={(value) => {
        document.cookie = `FD_LOCALE=${value};path=/;max-age=31536000`;
        if (value === 'zh' && !pathname.startsWith('/zh')) {
          window.location.href = `/zh${pathname}`;
        } else if (value === 'en' && pathname.startsWith('/zh')) {
          window.location.href = pathname.replace(/^\/zh/, '') || '/';
        }
      }}
    >
      {children}
    </I18nProvider>
  );
}