import React from 'react';
import { Link } from 'react-router-dom';
import { useAccessibility } from '../contexts/AccessibilityContext';

export const Footer: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  // FORCE YEAR 2025
  const currentYear = 2025;

  const linkClass = isHighContrast 
    ? "text-yellow-400 hover:text-white hover:underline" 
    : "text-gray-400 hover:text-brand-400 transition-colors";

  return (
    <footer className={`${isHighContrast ? 'bg-black border-t border-yellow-400' : 'bg-gray-900'} text-white py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NZOZ Podstawowa Opieka Zdrowotna<br/>Iwona Okuła</h3>
            <p className={`${isHighContrast ? 'text-white' : 'text-gray-400'} leading-relaxed`}>
              Nowoczesna opieka zdrowotna dla Ciebie i Twojej rodziny. 
              Zaufaj specjalistom w sercu Białegostoku.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li><Link to="/" className={linkClass}>Strona główna</Link></li>
              <li><Link to="/rejestracja" className={linkClass}>Rejestracja</Link></li>
              <li><Link to="/karta-poz" className={linkClass}>Karta POZ / Deklaracja</Link></li>
              <li><Link to="/polityka-rodo" className={linkClass}>Polityka Prywatności (RODO)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <address className="not-italic space-y-2 text-gray-300">
              <p className={isHighContrast ? 'text-white' : ''}>ul. Mickiewicza 44A</p>
              <p className={isHighContrast ? 'text-white' : ''}>15-223 Białystok</p>
              <p className="mt-2">
                <a href="tel:857482312" className={`${linkClass} font-semibold`}>Tel: 85 748 23 12</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isHighContrast ? 'border-yellow-400' : 'border-gray-800'}`}>
          <p className={`text-sm ${isHighContrast ? 'text-yellow-400' : 'text-gray-500'}`}>
            &copy; {currentYear} NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};