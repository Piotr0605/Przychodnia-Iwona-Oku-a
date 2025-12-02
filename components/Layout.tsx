import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { useAccessibility } from '../contexts/AccessibilityContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isBigFont } = useAccessibility();

  // Base font size adjustment on the root wrapper
  const fontSizeClass = isBigFont ? 'text-xl' : 'text-base';

  return (
    <div className={`flex flex-col min-h-screen ${fontSizeClass}`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};