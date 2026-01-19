import React from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { Phone, Moon, Ambulance } from 'lucide-react';

export const PatientHelp: React.FC = () => {
  const { isHighContrast } = useAccessibility();

  return (
    // Increased pt-32/pt-40 to pt-36/pt-48 to clear the header
    <div className={`min-h-screen py-16 pt-36 md:pt-48 ${isHighContrast ? 'bg-black text-white' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12 text-center">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Gdzie po pomoc?</h1>
          <p className={`text-lg ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>
            Informacje o pomocy medycznej w nocy, w weekendy i w stanach nagłych.
          </p>
        </header>

        <div className="space-y-8">
          
          {/* Night Care */}
          <div className={`p-8 rounded-2xl shadow-sm ${isHighContrast ? 'bg-gray-900 border border-white' : 'bg-white'}`}>
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-indigo-100 text-indigo-600'}`}>
                    <Moon size={32} />
                </div>
                <h2 className={`text-2xl font-bold ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Nocna i Świąteczna Opieka Zdrowotna</h2>
            </div>
            <p className={`mb-4 text-lg ${isHighContrast ? 'text-gray-300' : 'text-gray-700'}`}>
                Działa od poniedziałku do piątku w godz. <strong>18:00 – 8:00</strong> oraz całodobowo w soboty, niedziele i święta.
            </p>
            <div className="space-y-4 mt-6">
                <div className={`p-4 rounded-lg border ${isHighContrast ? 'border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
                    <h3 className="font-bold text-lg mb-1">Szpital Wojewódzki w Białymstoku</h3>
                    <p>ul. Marii Skłodowskiej-Curie 26</p>
                    <a href="tel:857488100" className="text-brand-600 font-bold hover:underline">Tel: 85 748 81 00</a>
                </div>
                <div className={`p-4 rounded-lg border ${isHighContrast ? 'border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
                    <h3 className="font-bold text-lg mb-1">USK (Uniwersytecki Szpital Kliniczny)</h3>
                    <p>ul. Marii Skłodowskiej-Curie 24a</p>
                    <a href="tel:858318000" className="text-brand-600 font-bold hover:underline">Tel: 85 831 80 00</a>
                </div>
            </div>
          </div>

          {/* Emergency (SOR) */}
          <div className={`p-8 rounded-2xl shadow-sm ${isHighContrast ? 'bg-gray-900 border border-red-500' : 'bg-red-50 border border-red-100'}`}>
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${isHighContrast ? 'bg-red-500 text-white' : 'bg-white text-red-600 shadow-sm'}`}>
                    <Ambulance size={32} />
                </div>
                <h2 className={`text-2xl font-bold ${isHighContrast ? 'text-red-500' : 'text-red-700'}`}>Stan Zagrożenia Życia (SOR)</h2>
            </div>
            <p className={`mb-4 text-lg ${isHighContrast ? 'text-white' : 'text-gray-800'}`}>
                W przypadku nagłego zagrożenia zdrowia lub życia (np. utrata przytomności, bóle w klatce piersiowej, wypadki) należy bezzwłocznie wezwać pogotowie.
            </p>
            <div className="text-center py-6">
                <a href="tel:112" className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white text-3xl font-bold rounded-full hover:bg-red-700 shadow-lg hover:scale-105 transition-transform">
                    <Phone size={32} /> 112
                </a>
                <p className="mt-2 text-sm opacity-75">lub 999</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};