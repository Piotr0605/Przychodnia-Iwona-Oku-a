import React from 'react';
import { MapPin, PhoneCall } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export const Registration: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const heading = isHighContrast ? 'text-yellow-400' : 'text-slate-900';
  const body = isHighContrast ? 'text-gray-300' : 'text-slate-600';

  return (
    <div className={`min-h-screen py-16 pt-28 md:pt-36 ${isHighContrast ? 'bg-black text-white' : 'bg-surface'}`}>
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className={`text-2xl md:text-3xl font-semibold mb-3 ${heading}`}>Rejestracja pacjentów</h1>
          <p className={`text-base md:text-lg ${body}`}>
            Wizytę umówisz telefonicznie albo na miejscu, od poniedziałku do piątku w godzinach 8:00–18:00.
          </p>
        </header>

        <div className={`p-6 md:p-8 rounded-2xl border ${isHighContrast ? 'bg-gray-900 border-white' : 'bg-white border-slate-200'}`}>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isHighContrast ? 'bg-white text-black' : 'bg-brand-50 text-brand-700'}`}>
              <PhoneCall size={24} />
            </div>
            <div>
              <h2 className={`text-xl font-semibold mb-2 ${heading}`}>Telefonicznie</h2>
              <p className={`mb-3 ${body}`}>Najszybszy sposób rejestracji.</p>
              <a href="tel:857482312" className={`text-2xl font-semibold ${isHighContrast ? 'text-yellow-400' : 'text-brand-700 hover:underline'}`}>
                85 748 23 12
              </a>
            </div>
          </div>

          <div className={`my-6 h-px ${isHighContrast ? 'bg-white/20' : 'bg-slate-100'}`}></div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isHighContrast ? 'bg-white text-black' : 'bg-brand-50 text-brand-700'}`}>
              <MapPin size={24} />
            </div>
            <div>
              <h2 className={`text-xl font-semibold mb-2 ${heading}`}>Osobiście</h2>
              <p className={body}>Rejestracja w placówce przy ul. Mickiewicza 44A, 15-223 Białystok.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
