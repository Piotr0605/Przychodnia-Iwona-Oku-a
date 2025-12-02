import React from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useCookie } from '../contexts/CookieContext';
import { Button } from '../components/Button';

export const Privacy: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const { resetConsent } = useCookie();

  return (
    // Updated padding to pt-32/pt-40 and width to max-w-screen-2xl
    <div className={`min-h-screen py-16 pt-32 md:pt-40 ${isHighContrast ? 'bg-black text-white' : 'bg-gray-50'}`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 rounded-2xl shadow-sm max-w-4xl mx-auto ${isHighContrast ? 'bg-gray-900 border border-yellow-400' : 'bg-white'}`}>
          <h1 className={`text-3xl font-bold mb-8 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Polityka Prywatności i Klauzula RODO</h1>
          
          <div className={`space-y-8 ${isHighContrast ? 'text-gray-300' : 'text-gray-700'}`}>
            <section>
              <h2 className={`text-xl font-bold mb-3 ${isHighContrast ? 'text-white' : 'text-gray-900'}`}>KLAUZULA INFORMACYJNA DLA PACJENTÓW</h2>
              <p className="mb-4 text-sm opacity-80">Zgodnie z art. 13 ust. 1 i ust. 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO):</p>
              
              <div className="space-y-4">
                  <div>
                      <h3 className="font-bold mb-1">1. Administrator Danych Osobowych</h3>
                      <p>Administratorem Państwa danych osobowych jest <strong>NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła</strong> z siedzibą w Białymstoku, przy ul. Mickiewicza 44A, 15-223 Białystok.</p>
                  </div>
                  
                  <div>
                      <h3 className="font-bold mb-1">2. Inspektor Ochrony Danych</h3>
                      <p>Administrator wyznaczył Inspektora Ochrony Danych, z którym można skontaktować się pisemnie na adres siedziby lub telefonicznie pod numerem przychodni.</p>
                  </div>

                  <div>
                      <h3 className="font-bold mb-1">3. Cele i podstawy przetwarzania</h3>
                      <p>Państwa dane osobowe, w tym dane o stanie zdrowia, przetwarzane są w celu:</p>
                      <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                          <li>Udzielania świadczeń zdrowotnych (diagnostyka, profilaktyka, terapia) oraz prowadzenia dokumentacji medycznej (Art. 9 ust. 2 lit. h RODO).</li>
                          <li>Wypełniania obowiązków prawnych ciążących na Administratorze, np. w zakresie sprawozdawczości do NFZ, Sanepidu (Art. 6 ust. 1 lit. c RODO).</li>
                          <li>Zapewnienia ubezpieczenia społecznego oraz zarządzania systemami i usługami opieki zdrowotnej.</li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="font-bold mb-1">4. Odbiorcy danych</h3>
                      <p>Państwa dane mogą być udostępniane:</p>
                      <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                          <li>Podmiotom uprawnionym na podstawie przepisów prawa (NFZ, ZUS, Sanepid).</li>
                          <li>Innym podmiotom leczniczym w celu zapewnienia ciągłości leczenia.</li>
                          <li>Podmiotom przetwarzającym dane na zlecenie Administratora (np. dostawcy oprogramowania medycznego, laboratoria zewnętrzne) – wyłącznie na podstawie umów powierzenia.</li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="font-bold mb-1">5. Okres przechowywania</h3>
                      <p>Dokumentacja medyczna przechowywana jest przez okres co najmniej 20 lat od końca roku kalendarzowego, w którym dokonano ostatniego wpisu, zgodnie z przepisami ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta.</p>
                  </div>

                  <div>
                      <h3 className="font-bold mb-1">6. Prawa osoby, której dane dotyczą</h3>
                      <p>Posiadają Państwo prawo do:</p>
                      <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                          <li>Dostępu do treści swoich danych oraz ich kopii.</li>
                          <li>Sprostowania (poprawiania) swoich danych.</li>
                          <li>Ograniczenia przetwarzania danych (z zastrzeżeniem wyjątków przewidzianych prawem).</li>
                          <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, gdy uznanają Państwo, iż przetwarzanie narusza przepisy RODO.</li>
                      </ul>
                      <p className="mt-2 text-sm italic">Uwaga: Prawo do usunięcia danych ("prawo do bycia zapomnianym") nie ma zastosowania w odniesieniu do dokumentacji medycznej ze względu na obowiązek prawny jej przechowywania.</p>
                  </div>

                  <div>
                      <h3 className="font-bold mb-1">7. Informacja o dobrowolności podania danych</h3>
                      <p>Podanie danych osobowych jest wymogiem ustawowym i warunkiem udzielenia świadczeń zdrowotnych. Odmowa podania danych może skutkować odmową udzielenia świadczenia zdrowotnego, z wyjątkiem stanów nagłego zagrożenia zdrowia lub życia.</p>
                  </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            <section>
              <h2 className={`text-xl font-bold mb-3 ${isHighContrast ? 'text-white' : 'text-gray-900'}`}>POLITYKA PLIKÓW COOKIES</h2>
              <p className="mb-2">
                Nasza strona internetowa wykorzystuje pliki cookies (ciasteczka) w celu zapewnienia jej prawidłowego działania, dostosowania do potrzeb użytkownika oraz w celach statystycznych.
              </p>
              <p className="mb-2">
                Na stronie osadzona jest mapa <strong>Google Maps</strong>. Wyświetlenie mapy wiąże się z pobraniem przez firmę Google plików cookies oraz przekazaniem adresu IP użytkownika do firmy Google w USA.
              </p>
              <p>
                Korzystając ze strony, wyrażasz zgodę na używanie plików cookies zgodnie z aktualnymi ustawieniami przeglądarki. W każdej chwili możesz zmienić ustawienia cookies lub wycofać zgodę.
              </p>
              
              <div className="mt-4 p-4 border rounded-lg inline-block">
                <p className="mb-3 font-semibold">Zarządzanie zgodą:</p>
                <Button onClick={() => { resetConsent(); window.location.reload(); }} variant="outline">
                  Zresetuj ustawienia cookies i mapy
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};