import React from 'react';
import { Link } from 'react-router-dom';
import { useAccessibility } from '../contexts/AccessibilityContext';

export const Footer: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const currentYear = new Date().getFullYear();

  const linkClass = isHighContrast
    ? 'text-yellow-400 hover:text-white hover:underline'
    : 'text-slate-600 hover:text-brand-700 transition-colors';

  return (
    <footer className={`${isHighContrast ? 'bg-black border-t border-yellow-400 text-white' : 'bg-white border-t border-slate-200 text-slate-800'}`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className={`text-lg font-bold mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Kontakt</h2>
            <address className="not-italic space-y-2">
              <p>ul. Mickiewicza 44A</p>
              <p>15-223 Białystok</p>
              <p>Pn–Pt: 8:00–18:00</p>
              <p className="pt-2">
                <a href="tel:857482312" className={`text-2xl font-bold hover:underline ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`}>
                  85 748 23 12
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className={`text-lg font-bold mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Dla pacjenta</h2>
            <ul className="space-y-2">
              <li><Link to="/rejestracja" className={linkClass}>Rejestracja</Link></li>
              <li><Link to="/karta-poz" className={linkClass}>Karta POZ / Deklaracja</Link></li>
              <li><Link to="/gdzie-po-pomoc" className={linkClass}>Gdzie po pomoc?</Link></li>
              <li><Link to="/cennik-uslug" className={linkClass}>Cennik usług prywatnych</Link></li>
              <li><Link to="/cennik-szczepien" className={linkClass}>Cennik szczepień</Link></li>
              <li>
                <a href="https://szczepienia.pzh.gov.pl/kalendarz-szczepien-2026/" className={linkClass} target="_blank" rel="noreferrer">
                  Kalendarz szczepień
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={`text-lg font-bold mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Przychodnia</h2>
            <p className={`leading-relaxed ${isHighContrast ? 'text-white' : 'text-slate-600'}`}>
              NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła. Opieka POZ dla całej rodziny.
            </p>
            <p className="mt-4">
              <Link to="/polityka-rodo" className={linkClass}>Polityka prywatności (RODO)</Link>
            </p>
          </div>
        </div>

        <div className={`mt-10 pt-6 border-t ${isHighContrast ? 'border-yellow-400' : 'border-slate-200'}`}>
          <p className={`text-sm ${isHighContrast ? 'text-yellow-400' : 'text-slate-500'}`}>
            &copy; {currentYear} NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła. Wszelkie prawa zastrzeżone.
          </p>
          <p className="mt-3 text-sm">
            <Link to="/aktualnosci" className={linkClass}>Aktualności</Link>
            <span className={`mx-2 ${isHighContrast ? 'text-yellow-400' : 'text-slate-400'}`}>·</span>
            <a href="/dofinansowanie" className={linkClass}>Dofinansowanie (Fundusze Europejskie)</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
