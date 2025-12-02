import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AccessibilityContextType {
  isHighContrast: boolean;
  isBigFont: boolean;
  toggleHighContrast: () => void;
  toggleBigFont: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isBigFont, setIsBigFont] = useState(false);

  const toggleHighContrast = () => setIsHighContrast(prev => !prev);
  const toggleBigFont = () => setIsBigFont(prev => !prev);

  return (
    <AccessibilityContext.Provider value={{ isHighContrast, isBigFont, toggleHighContrast, toggleBigFont }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};