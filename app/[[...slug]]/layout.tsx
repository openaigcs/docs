import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { AppNavbar } from '../app-navbar';
import { SidebarFooter as CustomSidebarFooter } from '../sidebar-footer';

export default function Layout({ children }: { children: ReactNode }) {
  const tree = source.getPageTree('en');

  return (
    <DocsLayout
      tree={tree}
      nav={{
        component: <AppNavbar />,
      }}
      sidebar={{
        collapsible: true,
        hideSearch: true,
        footer: <CustomSidebarFooter />,
      }}
      links={[]}
      i18n={false}
      disableThemeSwitch
    >
      {children}
    </DocsLayout>
  );
}