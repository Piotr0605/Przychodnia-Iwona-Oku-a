import React from "react";
import { Link } from "react-router-dom";
import { useAccessibility } from "../contexts/AccessibilityContext";

export const NotFound: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const heading = isHighContrast ? "text-yellow-400" : "text-slate-900";
  const body = isHighContrast ? "text-gray-300" : "text-slate-600";

  return (
    <div className={`py-16 md:py-24 ${isHighContrast ? "bg-black text-white" : "bg-surface"}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-2xl md:text-3xl font-semibold mb-3 ${heading}`}>Nie znaleziono strony</h1>
        <p className={`text-base md:text-lg leading-relaxed ${body}`}>
          Ten adres nie istnieje. Sprawdź link albo wróć na stronę główną.
        </p>
        <p className="mt-6">
          <Link to="/" className={`font-semibold hover:underline ${isHighContrast ? "text-yellow-400" : "text-brand-700"}`}>
            Strona główna
          </Link>
        </p>
      </div>
    </div>
  );
};
