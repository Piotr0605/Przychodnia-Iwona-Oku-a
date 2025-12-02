import React from 'react';
import { Download, CheckSquare } from 'lucide-react';
import { Button } from '../components/Button';
import { useAccessibility } from '../contexts/AccessibilityContext';

export const PozCard: React.FC = () => {
  const { isHighContrast } = useAccessibility();

  return (
    <div className={`min-h-screen py-16 pt-32 md:pt-40 ${isHighContrast ? 'bg-black text-white' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Karta POZ / Deklaracja</h1>
          <p className={`text-lg ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>
            Zostań naszym pacjentem składając deklarację wyboru lekarza, pielęgniarki i położnej POZ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Column 1: Info */}
           <div className={`p-8 rounded-2xl shadow-sm h-full ${isHighContrast ? 'bg-gray-900 border border-white' : 'bg-white'}`}>
             <h2 className={`text-2xl font-bold mb-6 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Dlaczego warto?</h2>
             <ul className={`space-y-4 ${isHighContrast ? 'text-gray-300' : 'text-gray-600'}`}>
               {[
                 'Bezpłatna opieka w ramach NFZ',
                 'Dostęp do doświadczonych lekarzy rodzinnych i pediatrów',
                 'Szybka diagnostyka laboratoryjna na miejscu',
                 'Wizyty domowe w uzasadnionych przypadkach medycznych'
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3">
                   <CheckSquare className={`shrink-0 mt-1 ${isHighContrast ? 'text-yellow-400' : 'text-brand-500'}`} size={20} />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
           </div>

           {/* Column 2: Action */}
           <div className={`p-8 rounded-2xl shadow-sm h-full flex flex-col justify-center items-center text-center ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-500 text-white'}`}>
              <Download size={48} className="mb-4 opacity-80" />
              <h2 className="text-2xl font-bold mb-4">Pobierz Deklarację</h2>
              <p className="mb-8 opacity-90">
                Wypełnij formularz w domu i przynieś go do naszej rejestracji, aby zaoszczędzić czas.
              </p>
              <Button 
                variant="white" 
                className={isHighContrast ? 'bg-black text-yellow-400 border border-black' : 'text-brand-600'}
                external={true}
                to="https://www.gov.pl/attachment/e2429539-655b-4786-9ef1-61c7c2b0b340"
              >
                Pobierz PDF
              </Button>
              <p className="mt-6 text-sm opacity-75">
                Możesz również wypełnić deklarację na miejscu w rejestracji.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};