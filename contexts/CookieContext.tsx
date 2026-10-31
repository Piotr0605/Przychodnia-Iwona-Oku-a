import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ConsentStatus = 'accepted' | 'rejected' | null;

interface CookieContextType {
  cookieConsent: ConsentStatus;
  acceptCookies: () => void;
  rejectCookies: () => void;
  resetConsent: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

function readStoredConsent(): ConsentStatus {
  try {
    const saved = localStorage.getItem('cookie_consent');
    if (saved === 'accepted' || saved === 'rejected') return saved;
  } catch {
    return null;
  }
  return null;
}

export const CookieProvider = ({ children }: { children: ReactNode }) => {
  const [cookieConsent, setCookieConsent] = useState<ConsentStatus>(null);

  useEffect(() => {
    setCookieConsent(readStoredConsent());
  }, []);

  const acceptCookies = () => {
    setCookieConsent('accepted');
    localStorage.setItem('cookie_consent', 'accepted');
  };

  const rejectCookies = () => {
    setCookieConsent('rejected');
    localStorage.setItem('cookie_consent', 'rejected');
  };

  const resetConsent = () => {
    setCookieConsent(null);
    localStorage.removeItem('cookie_consent');
  };

  return (
    <CookieContext.Provider value={{ cookieConsent, acceptCookies, rejectCookies, resetConsent }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookie = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
};