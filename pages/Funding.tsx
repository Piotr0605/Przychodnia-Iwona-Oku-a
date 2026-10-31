import React from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';

const LOGO_ALT =
  'Fundusze Europejskie na Infrastrukturę, Klimat i Środowisko; barwy Rzeczypospolitej Polskiej; Unia Europejska; Narodowy Fundusz Zdrowia';

export const Funding: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const heading = isHighContrast ? 'text-yellow-400' : 'text-slate-900';
  const body = isHighContrast ? 'text-gray-300' : 'text-slate-700';
  const card = isHighContrast ? 'bg-gray-900 border border-yellow-400' : 'bg-white';

  return (
    <div className={`py-10 md:py-14 ${isHighContrast ? 'bg-black text-white' : 'bg-surface'}`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className={`p-6 md:p-8 rounded-2xl shadow-sm max-w-4xl mx-auto ${card}`}>
          <div className="mb-8 rounded-xl bg-white px-3 py-4 sm:px-5">
            <img
              src="/oznakowanie-funduszy.jpg"
              alt={LOGO_ALT}
              width={1024}
              height={111}
              className="mx-auto h-auto w-full"
            />
          </div>

          <h1 className={`text-2xl md:text-3xl font-semibold mb-6 ${heading}`}>
            Wsparcie podstawowej opieki zdrowotnej (POZ)
          </h1>

          <div className={`space-y-4 text-lg leading-relaxed ${body}`}>
            <p>
              <strong>Iwona Okuła</strong>, ul. Adama Mickiewicza 44A, 15-223 Białystok, realizuje Przedsięwzięcie pn. „Wsparcie podstawowej opieki zdrowotnej (POZ)” na podstawie umowy zawartej z Narodowym Funduszem Zdrowia.
            </p>
            <p>
              Przedsięwzięcie jest dofinansowane ze środków Europejskiego Funduszu Rozwoju Regionalnego w ramach Programu Fundusze Europejskie na Infrastrukturę, Klimat, Środowisko 2021–2027.
            </p>
            <p>
              Całkowita wartość Przedsięwzięcia to <strong>299 900,00 zł</strong>, z czego wysokość wkładu Funduszy Europejskich wynosi <strong>239 050,29 zł</strong>.
            </p>
            <p>
              W ramach otrzymanych środków zakupimy mobilny aparat EKG, przenośny aparat USG oraz wszechstronny aparat USG z funkcją Dopplera, funkcjami kardiologicznymi i naczyniowymi oraz funkcją badania jamy brzusznej.
            </p>
            <p>
              Przedsięwzięcie jest skierowane do pacjentów POZ — bez względu na wiek, płeć czy stan zdrowia. Zapewni równy dostęp do świadczeń, w tym osobom z niepełnosprawnościami.
            </p>
          </div>

          <h2 className={`text-xl font-semibold mt-8 mb-3 ${heading}`}>Główne cele Przedsięwzięcia:</h2>
          <ul className={`list-disc pl-6 space-y-2 text-lg leading-relaxed ${body}`}>
            <li>
              wsparcie w zakresie infrastruktury niezbędnej do prowadzenia działalności leczniczej, której celem będzie dostosowanie i poprawa funkcjonalności pomieszczeń do poszerzanych świadczeń zdrowotnych w zakresie profilaktyki, diagnostyki i leczenia na poziomie POZ w kontekście rozwoju opieki koordynowanej.
            </li>
          </ul>

          <h2 className={`text-xl font-semibold mt-8 mb-3 ${heading}`}>Oczekiwane efekty Projektu:</h2>
          <ul className={`list-disc pl-6 space-y-2 text-lg leading-relaxed ${body}`}>
            <li>zwiększenie zgłaszalności na badania profilaktyczne,</li>
            <li>poprawa świadomości zdrowotnej pacjentów,</li>
            <li>rozwój działań w ramach opieki koordynowanej.</li>
          </ul>

          <p className={`mt-8 font-semibold ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`}>
            #FunduszeEuropejskie #FunduszeUE #WsparciePOZ
          </p>
        </article>
      </div>
    </div>
  );
};
