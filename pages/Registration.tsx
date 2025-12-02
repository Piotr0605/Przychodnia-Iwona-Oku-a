import React from 'react';
import { FileText, PhoneCall } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export const Registration: React.FC = () => {
  const { isHighContrast } = useAccessibility();

  return (
    <div className={`min-h-screen py-16 pt-32 md:pt-40 ${isHighContrast ? 'bg-black text-white' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12 text-center">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Rejestracja Pacjentów</h1>
          <p className={`text-lg ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>
            Dowiedz się, jak szybko i sprawnie umówić się na wizytę w naszej przychodni.
          </p>
        </header>

        <div className="grid gap-8">
          {/* Methods */}
          <div className={`p-8 rounded-2xl shadow-sm ${isHighContrast ? 'bg-gray-900 border border-white' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-6 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Sposoby rejestracji</h2>
            
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${isHighContrast ? 'bg-white text-black' : 'bg-brand-100 text-brand-600'}`}>
                   <PhoneCall size={32} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isHighContrast ? 'text-white' : 'text-gray-900'}`}>Telefonicznie</h3>
                  <p className={`mb-3 ${isHighContrast ? 'text-gray-300' : 'text-gray-600'}`}>
                    Najszybsza metoda rejestracji. Zadzwoń do naszej rejestracji w godzinach 8:00 – 18:00.
                  </p>
                  <a href="tel:857482312" className={`text-2xl font-bold ${isHighContrast ? 'text-yellow-400' : 'text-brand-600 hover:underline'}`}>
                    85 748 23 12
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200 opacity-50"></div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${isHighContrast ? 'bg-white text-black' : 'bg-brand-100 text-brand-600'}`}>
                   <FileText size={32} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isHighContrast ? 'text-white' : 'text-gray-900'}`}>Osobiście</h3>
                  <p className={`mb-3 ${isHighContrast ? 'text-gray-300' : 'text-gray-600'}`}>
                    Zapraszamy do rejestracji w naszej placówce przy ul. Mickiewicza 44A. 
                    Pamiętaj o maseczce ochronnej w przypadku objawów infekcji.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};