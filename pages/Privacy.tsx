import React from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useCookie } from '../contexts/CookieContext';
import { Button } from '../components/Button';

export const Privacy: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const { resetConsent } = useCookie();
  const heading = isHighContrast ? 'text-yellow-400' : 'text-slate-900';
  const body = isHighContrast ? 'text-gray-300' : 'text-slate-700';

  return (
    <div className={`min-h-screen py-16 pt-28 md:pt-36 ${isHighContrast ? 'bg-black text-white' : 'bg-surface'}`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className={`p-6 md:p-8 rounded-2xl shadow-sm max-w-4xl mx-auto ${isHighContrast ? 'bg-gray-900 border border-yellow-400' : 'bg-white'}`}>
          <h1 className={`text-2xl md:text-3xl font-semibold mb-4 ${heading}`}>Polityka prywatności i klauzula RODO</h1>
          <p className={`mb-8 text-sm ${body}`}>
            Informacja według art. 13 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz art. 399 Prawa komunikacji elektronicznej.
          </p>

          <div className={`space-y-8 ${body}`}>
            <section className="space-y-3">
              <h2 className={`text-xl font-semibold ${heading}`}>Administrator i kontakt</h2>
              <p>
                Administratorem danych jest <strong>NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła</strong>, ul. Mickiewicza 44A, 15-223 Białystok, tel. <a className="font-semibold hover:underline" href="tel:857482312">85 748 23 12</a>.
              </p>
              <p>
                Z inspektorem ochrony danych można skontaktować się pisemnie na adres przychodni albo telefonicznie pod tym samym numerem.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className={`text-xl font-semibold ${heading}`}>Dane pacjentów</h2>
              <p>Dane pacjentów, w tym dane o zdrowiu, są przetwarzane w celu:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>udzielania świadczeń zdrowotnych i prowadzenia dokumentacji medycznej (art. 9 ust. 2 lit. h oraz art. 9 ust. 3 RODO),</li>
                <li>wykonania obowiązków prawnych, w tym rozliczeń i sprawozdań wobec NFZ oraz obowiązków sanitarnych (art. 6 ust. 1 lit. c RODO).</li>
              </ul>
              <p>Odbiorcami mogą być podmioty uprawnione przepisami (NFZ, ZUS, organy inspekcji sanitarnej), inne podmioty lecznicze, gdy wymaga tego ciągłość leczenia, oraz podmioty przetwarzające dane na zlecenie przychodni, na przykład dostawca oprogramowania medycznego lub laboratorium, wyłącznie na podstawie umowy powierzenia.</p>
              <p>
                Dokumentacja medyczna jest przechowywana przez 20 lat od końca roku kalendarzowego, w którym dokonano ostatniego wpisu. Ustawa o prawach pacjenta i Rzeczniku Praw Pacjenta przewiduje wyjątki, w tym 30 lat przy zgonie na skutek uszkodzenia ciała lub zatrucia oraz przy danych do monitorowania losów krwi, 22 lata dla dokumentacji dziecka do ukończenia 2. roku życia, 10 lat dla zdjęć rentgenowskich przechowywanych poza dokumentacją oraz krótsze terminy dla skierowań i zleceń.
              </p>
              <p>Podanie danych jest wymogiem ustawowym i warunkiem udzielenia świadczenia. W stanie nagłego zagrożenia zdrowia lub życia świadczenie może być udzielone także bez kompletnych danych.</p>
            </section>

            <section className="space-y-3">
              <h2 className={`text-xl font-semibold ${heading}`}>Strona internetowa</h2>
              <p>Na stronie nie ma formularza, konta pacjenta, statystyk odwiedzin ani reklam. Przychodnia nie prowadzi na tej stronie zautomatyzowanego podejmowania decyzji ani profilowania.</p>
              <p>Serwer wyświetlający stronę może przez czas potrzebny do jej dostarczenia i zabezpieczenia przetwarzać techniczny adres IP. Czcionka jest pobierana z tej samej strony, a nie z serwera Google.</p>
              <p>W przeglądarce zostaje tylko zapis decyzji o mapie (pamięć lokalna, klucz cookie_consent). Ten zapis nie jest wysyłany do przychodni. Służy temu, żeby ponownie nie pytać o zgodę i żeby nie ładować mapy wbrew decyzji. Można go usunąć przyciskiem na dole tej strony albo czyszcząc dane witryny w przeglądarce. Jest przechowywany do czasu usunięcia.</p>
            </section>

            <section className="space-y-3">
              <h2 className={`text-xl font-semibold ${heading}`}>Pliki cookies i mapa</h2>
              <p>Zapis informacji w urządzeniu użytkownika albo odczyt takiej informacji wymaga uprzedniej informacji i zgody, chyba że jest niezbędny do przesłania komunikatu albo do usługi, o którą użytkownik sam prosi (art. 399 Prawa komunikacji elektronicznej). Zgoda ma znaczenie nadane w RODO: jest dobrowolna, konkretna, świadoma i wyrażona wyraźnym działaniem. Samo wejście na stronę nie jest zgodą.</p>
              <p>Mapa Google nie jest potrzebna do korzystania ze strony. Ładuje się dopiero po wybraniu „Zgoda na mapę”. Wtedy Google może zapisać własne pliki w przeglądarce i odebrać adres IP. Odmowa zostawia stronę działającą, bez mapy.</p>
              <p>Dane mapy mogą trafić do Google LLC w Stanach Zjednoczonych. Podstawą przekazania jest zgoda. Google uczestniczy w programie EU-US Data Privacy Framework. Gdyby ten program przestał obejmować Google, przekazanie opiera się na standardowych klauzulach umownych stosowanych przez Google.</p>
              <p>Warunki zapisu informacji można też ustawić w przeglądarce. Zgodę na mapę wycofuje się tak samo łatwo, jak się jej udziela: przyciskiem poniżej. Wycofanie nie wpływa na zgodność z prawem przetwarzania sprzed wycofania.</p>
              <div className={`mt-2 p-4 border rounded-lg ${isHighContrast ? 'border-yellow-400' : 'border-slate-200'}`}>
                <p className="mb-3 font-semibold">Wycofanie zgody na mapę</p>
                <Button
                  onClick={() => {
                    resetConsent();
                    window.localStorage.removeItem('cookie_consent');
                    window.location.replace('/?cookies=ask');
                  }}
                  variant="outline"
                >
                  Usuń decyzję i pokaż pytanie ponownie
                </Button>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className={`text-xl font-semibold ${heading}`}>Prawa osób</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>dostęp do danych i otrzymanie kopii,</li>
                <li>sprostowanie danych,</li>
                <li>usunięcie danych, gdy przychodnia nie ma obowiązku ich przechowywać; nie dotyczy to dokumentacji medycznej objętej obowiązkiem ustawowym,</li>
                <li>ograniczenie przetwarzania w przypadkach przewidzianych w RODO,</li>
                <li>przenoszenie danych, gdy podstawą jest zgoda albo umowa i przetwarzanie odbywa się automatycznie; nie dotyczy dokumentacji prowadzonej z obowiązku prawnego,</li>
                <li>sprzeciw wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
                <li>wycofanie zgody na mapę,</li>
                <li>skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl.</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};
