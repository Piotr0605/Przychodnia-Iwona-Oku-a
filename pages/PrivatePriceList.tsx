import React from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export const PrivatePriceList: React.FC = () => {
  const { isHighContrast } = useAccessibility();

  const prices = [
    { name: 'Konsultacja lekarska (wizyta prywatna)', price: '150 zł' },
    { name: 'Konsultacja dietetyczna (pierwsza)', price: '120 zł' },
    { name: 'Konsultacja dietetyczna (kolejna)', price: '80 zł' },
    { name: 'Badanie EKG z opisem', price: '50 zł' },
    { name: 'Iniekcja domięśniowa / podskórna', price: '30 zł' },
    { name: 'Pomiar ciśnienia tętniczego', price: 'Bezpłatnie' },
    { name: 'Wydanie zaświadczenia lekarskiego', price: '50 zł' },
    { name: 'Kopiowanie dokumentacji medycznej (za stronę)', price: '0,50 zł' },
  ];

  return (
    // Increased pt-32/pt-40 to pt-36/pt-48 to clear the header
    <div className={`py-10 md:py-14 ${isHighContrast ? 'bg-black text-white' : 'bg-surface'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-8 md:mb-10 text-center">
          <h1 className={`text-2xl md:text-3xl font-semibold mb-3 ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Cennik usług prywatnych</h1>
          <p className={`text-lg ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>
            Usługi świadczone komercyjnie poza kontraktem z NFZ.
          </p>
        </header>

        <div className={`rounded-2xl shadow-sm overflow-hidden ${isHighContrast ? 'bg-gray-900 border border-white' : 'bg-white'}`}>
            <table className="w-full text-left">
                <thead className={`${isHighContrast ? 'bg-gray-800 text-yellow-400' : 'bg-brand-50 text-brand-700'}`}>
                    <tr>
                        <th className="p-4 md:p-6 font-bold">Nazwa usługi</th>
                        <th className="p-4 md:p-6 font-bold text-right">Cena</th>
                    </tr>
                </thead>
                <tbody className={`divide-y ${isHighContrast ? 'divide-gray-700' : 'divide-gray-100'}`}>
                    {prices.map((item, idx) => (
                        <tr key={idx} className={`transition-colors ${isHighContrast ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                            <td className="p-4 md:p-6">{item.name}</td>
                            <td className="p-4 md:p-6 text-right font-semibold whitespace-nowrap">{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <p className="mt-6 text-sm text-center opacity-70">Cennik ważny od 01.01.2025. Ceny mogą ulec zmianie.</p>

      </div>
    </div>
  );
};