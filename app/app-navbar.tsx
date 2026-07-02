'use client';

import Link from 'next/link';
import { Languages } from 'lucide-react';
import { LanguageToggle, LanguageToggleText } from 'fumadocs-ui/components/layout/language-toggle';
import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle';
import { LargeSearchToggle } from 'fumadocs-ui/components/layout/search-toggle';
import { NavbarSidebarTrigger } from 'fumadocs-ui/layouts/docs.client';

export function AppNavbar() {
  return (
    <header
      className="sticky top-0 z-30 flex h-14 flex-row items-center gap-2 border-b bg-fd-background/80 px-4 backdrop-blur-lg"
      style={{ '--fd-nav-height': '3.5rem' } as React.CSSProperties}
    >
      <NavbarSidebarTrigger className="-ms-2 md:hidden" />
      <Link href="/" className="inline-flex items-center gap-2.5 py-1 font-medium max-md:hidden">
        AIGCS
      </Link>
      <div className="flex-1" />
      <LargeSearchToggle className="min-w-[260px]" />
      <LanguageToggle>
        <Languages className="size-5" />
        <LanguageToggleText className="md:hidden" />
      </LanguageToggle>
      <ThemeToggle className="p-0" />
    </header>
  );
}
