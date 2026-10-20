import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { DocumentMeta } from './DocumentMeta';
import { useAccessibility } from '../contexts/AccessibilityContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isBigFont } = useAccessibility();

  // Base font size adjustment on the root wrapper
  const fontSizeClass = isBigFont ? 'text-xl' : 'text-base';

  return (
    <div className={`flex h-dvh flex-col overflow-hidden ${fontSizeClass}`}>
      <DocumentMeta />
      <Header />
      <div id="page-scroll" className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
};