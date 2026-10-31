import React from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export const News: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const heading = isHighContrast ? 'text-yellow-400' : 'text-slate-900';
  const body = isHighContrast ? 'text-gray-300' : 'text-slate-700';
  const muted = isHighContrast ? 'text-gray-400' : 'text-slate-500';
  const card = isHighContrast ? 'bg-gray-900 border border-yellow-400' : 'bg-white';
  const buttonClass = isHighContrast
    ? 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-yellow-400 text-yellow-400 hover:bg-gray-900'
    : 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-brand-700 hover:bg-brand-900 text-white shadow-sm';

  return (
    <div className={`py-10 md:py-14 ${isHighContrast ? 'bg-black text-white' : 'bg-surface'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 md:mb-10 text-center">
          <h1 className={`text-2xl md:text-3xl font-semibold mb-3 ${heading}`}>Aktualności</h1>
          <p className={`text-lg ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>
            Informacje o przychodni i realizowanych przedsięwzięciach.
          </p>
        </header>

        <article className={`p-5 sm:p-8 rounded-2xl shadow-sm ${card}`}>
          <p className={`text-sm font-medium mb-3 ${muted}`}>31 października 2026</p>
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${heading}`}>
            Wsparcie podstawowej opieki zdrowotnej (POZ)
          </h2>
          <p className={`text-lg leading-relaxed ${body}`}>
            Informacja o Przedsięwzięciu „Wsparcie podstawowej opieki zdrowotnej (POZ)” dofinansowanym ze środków Funduszy Europejskich.
          </p>
          <div className="mt-6">
            <a href="/dofinansowanie" className={buttonClass}>
              Pełna informacja o dofinansowaniu
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};
