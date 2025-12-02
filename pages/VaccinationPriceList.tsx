import React from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export const VaccinationPriceList: React.FC = () => {
  const { isHighContrast } = useAccessibility();

  const vaccines = [
    { name: 'Szczepienie przeciw grypie (Vaxigrip Tetra)', price: '60 zł' },
    { name: 'WZW typu B (Engerix B) - dorośli', price: '80 zł' },
    { name: 'Kleszczowe zapalenie mózgu (FSME-Immun)', price: '140 zł' },
    { name: 'Tężec, Błonica, Krztusiec (Boostrix)', price: '130 zł' },
    { name: 'Pneumokoki (Prevenar 13)', price: '280 zł' },
    { name: 'Meningokoki B (Bexsero)', price: '350 zł' },
    { name: 'Ospa wietrzna (Varilrix)', price: '220 zł' },
    { name: 'Rotawirusy (Rotarix)', price: '300 zł' },
  ];

  return (
    <div className={`min-h-screen py-16 pt-32 md:pt-40 ${isHighContrast ? 'bg-black text-white' : 'bg-gray-50'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12 text-center">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Cennik Szczepień</h1>
          <p className={`text-lg ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>
            Szczepienia zalecane i dodatkowe (odpłatne).
          </p>
        </header>

        <div className={`rounded-2xl shadow-sm overflow-hidden ${isHighContrast ? 'bg-gray-900 border border-white' : 'bg-white'}`}>
            <table className="w-full text-left">
                <thead className={`${isHighContrast ? 'bg-gray-800 text-yellow-400' : 'bg-green-50 text-green-800'}`}>
                    <tr>
                        <th className="p-4 md:p-6 font-bold">Nazwa szczepionki</th>
                        <th className="p-4 md:p-6 font-bold text-right">Cena (z kwalifikacją)</th>
                    </tr>
                </thead>
                <tbody className={`divide-y ${isHighContrast ? 'divide-gray-700' : 'divide-gray-100'}`}>
                    {vaccines.map((item, idx) => (
                        <tr key={idx} className={`transition-colors ${isHighContrast ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                            <td className="p-4 md:p-6">{item.name}</td>
                            <td className="p-4 md:p-6 text-right font-semibold whitespace-nowrap">{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <p className="mt-6 text-sm text-center opacity-70">Cena obejmuje preparat oraz badanie lekarskie kwalifikujące do szczepienia.</p>
      </div>
    </div>
  );
};