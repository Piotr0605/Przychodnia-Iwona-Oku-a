import React from 'react';
import { useCookie } from '../contexts/CookieContext';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { Button } from './Button';
import { Cookie } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const { cookieConsent, acceptCookies, rejectCookies } = useCookie();
  const { isHighContrast } = useAccessibility();

  // Don't show if user has already made a choice
  if (cookieConsent !== null) return null;

  return (
    <div className={`fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 border-t-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500 ${isHighContrast ? 'bg-black border-yellow-400 text-white' : 'bg-white border-brand-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className={`hidden md:flex p-3 rounded-full shrink-0 ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-50 text-brand-500'}`}>
            <Cookie size={24} />
          </div>
          <div>
            <h3 className={`font-bold text-lg mb-1 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>
              Szanujemy Twoją prywatność
            </h3>
            <p className={`text-sm md:text-base max-w-3xl ${isHighContrast ? 'text-gray-300' : 'text-gray-600'}`}>
              Używamy plików cookies, aby zapewnić prawidłowe działanie strony, w tym wyświetlanie mapy dojazdu Google Maps. 
              Klikając "Akceptuję", wyrażasz zgodę na używanie plików cookies. Możesz odmówić, co spowoduje zablokowanie mapy.
            </p>
          </div>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto shrink-0">
          <Button 
            variant="outline" 
            onClick={rejectCookies}
            className={`flex-1 md:flex-none ${isHighContrast ? 'border-white text-white hover:bg-white hover:text-black' : ''}`}
          >
            Odmów
          </Button>
          <Button 
            variant="primary" 
            onClick={acceptCookies}
            className={`flex-1 md:flex-none ${isHighContrast ? 'bg-yellow-400 text-black hover:bg-yellow-500 border-none' : ''}`}
          >
            Akceptuję
          </Button>
        </div>
      </div>
    </div>
  );
};