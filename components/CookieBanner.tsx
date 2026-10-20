import React from 'react';
import { Link } from 'react-router-dom';
import { useCookie } from '../contexts/CookieContext';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const { cookieConsent, acceptCookies, rejectCookies } = useCookie();
  const { isHighContrast } = useAccessibility();

  if (cookieConsent !== null) return null;

  return (
    <div className={`fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 border-t shadow-[0_-4px_20px_rgba(0,0,0,0.08)] ${isHighContrast ? 'bg-black border-yellow-400 text-white' : 'bg-white border-slate-200 text-gray-800'}`} role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 id="cookie-title" className={`font-semibold text-lg mb-1 ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>
            Mapa Google jest opcjonalna
          </h2>
          <p id="cookie-desc" className={`text-sm md:text-base max-w-3xl leading-relaxed ${isHighContrast ? 'text-gray-300' : 'text-slate-600'}`}>
            Strona działa bez zgody. Mapa dojazdu ładuje się dopiero po jej wyrażeniu. Google może wtedy zapisać informacje w przeglądarce i odebrać adres IP. Zgodę można wycofać w polityce prywatności. Warunki zapisu można też ustawić w przeglądarce.
          </p>
          <Link to="/polityka-rodo" className={`inline-block mt-2 text-sm font-medium underline ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`}>
            Polityka prywatności i cookies
          </Link>
        </div>
        <div className="flex gap-3 w-full md:w-auto shrink-0">
          <Button
            variant="outline"
            onClick={rejectCookies}
            className={`flex-1 md:flex-none ${isHighContrast ? 'border-white text-white hover:bg-white hover:text-black' : ''}`}
          >
            Odmowa
          </Button>
          <Button
            variant="primary"
            onClick={acceptCookies}
            className={`flex-1 md:flex-none ${isHighContrast ? 'bg-yellow-400 text-black hover:bg-yellow-500 border-none' : ''}`}
          >
            Zgoda na mapę
          </Button>
        </div>
      </div>
    </div>
  );
};
