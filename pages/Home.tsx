import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Stethoscope, Phone, Map as MapIcon, Lock, FileText, ClipboardList, Syringe, Wallet, Users, ShieldCheck, HeartPulse } from 'lucide-react';
import { Button } from '../components/Button';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useCookie } from '../contexts/CookieContext';

export const Home: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const { cookieConsent, acceptCookies } = useCookie();
  const [isTeamExpanded, setIsTeamExpanded] = useState(false);

  const services = [
    {
      title: 'Wizyta w ramach NFZ',
      desc: 'Porada lekarza, leczenie chorób ostrych i przewlekłych oraz profilaktyka dla pacjentów przychodni.',
      icon: <Stethoscope size={22} />,
    },
    {
      title: 'E-recepta i e-skierowanie',
      desc: 'Dokumenty elektroniczne ustalisz w rejestracji, telefonicznie albo na miejscu.',
      icon: <FileText size={22} />,
      to: '/rejestracja',
      linkLabel: 'Przejdź do rejestracji',
    },
    {
      title: 'Bilans dziecka',
      desc: 'Bilans zdrowia dzieci i młodzieży oraz orzeczenia.',
      icon: <ClipboardList size={22} />,
    },
    {
      title: 'Szczepienie',
      desc: 'Szczepienia ochronne i sezonowe.',
      icon: <Syringe size={22} />,
      to: '/cennik-szczepien',
      linkLabel: 'Cennik szczepień',
    },
    {
      title: 'Wizyta prywatna',
      desc: 'Świadczenia odpłatne, poza wizytą w ramach NFZ.',
      icon: <Wallet size={22} />,
      to: '/cennik-uslug',
      linkLabel: 'Cennik usług',
    },
  ];

  const teamGroups = [
    {
      title: 'Lekarze',
      people: [
        { initials: 'IO', name: 'lek. Iwona Okuła', role: 'Specjalista medycyny rodzinnej' },
        { initials: 'EP', name: 'lek. Elżbieta Pawłowska', role: 'Internista, specjalista medycyny rodzinnej' },
        { initials: 'JO', name: 'lek. Joanna Oklińska', role: 'Lekarz' },
        { initials: 'JZ', name: 'lek. Julia Zawadzka', role: 'Rezydentka medycyny rodzinnej' },
      ],
    },
    {
      title: 'Pielęgniarki i położna',
      people: [
        { initials: 'JP', name: 'mgr Jolanta Parafianowicz', role: 'Pielęgniarka' },
        { initials: 'RM', name: 'mgr Renata Mróz', role: 'Pielęgniarka' },
        { initials: 'KB', name: 'mgr Katarzyna Kitlasz-Baczyńska', role: 'Położna' },
      ],
    },
    {
      title: 'Dietetyk',
      people: [
        { initials: 'PM', name: 'mgr Patrycja Michalczuk', role: 'Dietetyk' },
      ],
    },
  ];

  let personIndex = 0;

  return (
    <div className="flex flex-col w-full">
      <section className={`relative w-full ${isHighContrast ? 'bg-black text-white' : 'bg-surface text-slate-900'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-12 lg:pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(23rem,24.5rem)] gap-8 lg:gap-12 items-start">
            <div className="space-y-5 max-w-xl">
              <p className={`text-sm font-semibold tracking-wide ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`}>
                NZOZ Iwona Okuła · Białystok
              </p>
              <div className="space-y-2">
                <h1 className={`text-3xl md:text-4xl font-semibold tracking-tight ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>
                  Przychodnia POZ w Białymstoku
                </h1>
                <p className={`flex items-center gap-2 text-base md:text-lg ${isHighContrast ? 'text-white' : 'text-slate-600'}`}>
                  <MapPin size={18} className={`shrink-0 ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`} aria-hidden="true" />
                  ul. Mickiewicza 44A
                </p>
              </div>
              <p className={`text-base md:text-lg leading-relaxed ${isHighContrast ? 'text-white' : 'text-slate-600'}`}>
                Podstawowa opieka zdrowotna dla całej rodziny. Rejestracja telefoniczna od poniedziałku do piątku.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:857482312"
                  className={`inline-flex w-full sm:w-auto items-center justify-center gap-3 whitespace-nowrap rounded-lg px-6 py-4 text-xl font-bold shadow-sm ${isHighContrast ? 'bg-black border-2 border-yellow-400 text-yellow-400' : 'bg-brand-600 text-white hover:bg-brand-700'}`}
                >
                  <Phone size={22} /> 85 748 23 12
                </a>
                <Button
                  to="/rejestracja"
                  variant="outline"
                  className={`w-full sm:w-auto whitespace-nowrap ${isHighContrast ? 'border-white text-white hover:bg-white hover:text-black' : ''}`}
                >
                  Jak się zarejestrować
                </Button>
              </div>
            </div>

            <aside className="w-full sm:max-w-md lg:max-w-none">
              <div className={`rounded-2xl p-5 sm:p-6 w-full border ${isHighContrast ? 'bg-black border-yellow-400 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-sm'}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-50 text-brand-700'}`}>
                    <Clock size={20} aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-semibold">Godziny przyjęć</h2>
                </div>

                <dl className="text-sm">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className={`whitespace-nowrap ${isHighContrast ? 'text-gray-300' : 'text-slate-600'}`}>Poniedziałek–piątek</dt>
                    <dd className={`whitespace-nowrap text-lg font-semibold tabular-nums leading-none ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>8:00–18:00</dd>
                  </div>
                  <div className={`mt-3 pt-3 border-t flex items-baseline justify-between gap-4 ${isHighContrast ? 'border-gray-800' : 'border-slate-100'}`}>
                    <dt className={`whitespace-nowrap ${isHighContrast ? 'text-gray-300' : 'text-slate-600'}`}>Sobota–niedziela</dt>
                    <dd className={`whitespace-nowrap font-semibold ${isHighContrast ? 'text-gray-500' : 'text-slate-400'}`}>Nieczynne</dd>
                  </div>
                </dl>

                <p className={`mt-4 pt-4 border-t text-sm leading-relaxed ${isHighContrast ? 'border-gray-800' : 'border-slate-100'}`}>
                  <Link to="/gdzie-po-pomoc" className={`font-medium hover:underline ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`}>
                    <span className="whitespace-nowrap">Po 18:00 i w weekend</span>
                    <span className="whitespace-nowrap"> — gdzie po pomoc</span>
                  </Link>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="o-nas" className={`py-14 sm:py-16 lg:py-20 scroll-mt-4 ${isHighContrast ? 'bg-black text-white' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,27rem)] gap-8 lg:gap-14 items-start">
            <div className="max-w-2xl">
              <h2 className={`text-2xl md:text-3xl font-semibold ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>O nas</h2>
              <div className={`mt-4 space-y-4 text-base md:text-lg leading-relaxed ${isHighContrast ? 'text-gray-300' : 'text-slate-600'}`}>
                <p>
                  NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła od wielu lat otacza opieką całe rodziny, od najmłodszych po seniorów.
                </p>
                <p>
                  Współpracujemy z Narodowym Funduszem Zdrowia w ramach podstawowej opieki zdrowotnej, profilaktyki i szczepień.
                </p>
              </div>
            </div>
            <ul className={`w-full max-w-xl lg:max-w-none rounded-2xl border divide-y ${isHighContrast ? 'border-yellow-400 divide-yellow-400 bg-black' : 'border-slate-200 divide-slate-200 bg-surface'}`}>
              {[
                { label: 'Opieka dla całej rodziny', icon: <Users size={20} aria-hidden="true" /> },
                { label: 'Wizyty w ramach NFZ', icon: <ShieldCheck size={20} aria-hidden="true" /> },
                { label: 'Lekarze, pielęgniarki, położna i dietetyk', icon: <HeartPulse size={20} aria-hidden="true" /> },
              ].map((fact) => (
                <li key={fact.label} className="flex items-center gap-4 px-4 py-4 min-h-[4.75rem]">
                  <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${isHighContrast ? 'border-yellow-400 bg-yellow-400 text-black' : 'border-slate-200 bg-white text-brand-700'}`}>
                    {fact.icon}
                  </span>
                  <span className={`text-[15px] font-medium leading-snug ${isHighContrast ? 'text-yellow-400' : 'text-slate-800'}`}>{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className={`py-16 md:py-20 scroll-mt-4 ${isHighContrast ? 'bg-gray-900 text-white' : 'bg-surface'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-3 ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Z czym można się zgłosić</h2>
            <p className={isHighContrast ? 'text-white' : 'text-slate-600'}>
              Najczęstsze sprawy pacjentów przychodni.
            </p>
          </div>

          <div className={`rounded-2xl border divide-y ${isHighContrast ? 'bg-black border-white divide-white/20' : 'bg-white border-slate-200 divide-slate-100'}`}>
            {services.map((service) => (
              <div key={service.title} className="flex gap-4 p-5 md:p-6">
                <div className={`mt-0.5 shrink-0 ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>{service.title}</h3>
                  <p className={`mt-1 leading-relaxed ${isHighContrast ? 'text-gray-300' : 'text-slate-600'}`}>{service.desc}</p>
                  {service.to && service.linkLabel && (
                    <Link to={service.to} className={`inline-block mt-2 font-semibold hover:underline ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`}>
                      {service.linkLabel}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="zespol" className={`py-20 scroll-mt-4 ${isHighContrast ? 'bg-black text-white border-t border-yellow-400' : 'bg-white'}`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-3 ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Nasz zespół</h2>
            <p className={isHighContrast ? 'text-white' : 'text-gray-600'}>
              Doświadczeni specjaliści, którym możesz zaufać.
            </p>
          </div>

          <div className="space-y-10">
            {teamGroups.map((group) => {
              const people = group.people.map((person) => ({ ...person, index: personIndex++ }));
              const groupVisibleOnMobile = people.some((person) => person.index < 3 || isTeamExpanded);
              return (
                <div key={group.title} className={groupVisibleOnMobile ? '' : 'hidden md:block'}>
                  <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-slate-500'}`}>
                    {group.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {people.map((person) => (
                      <article
                        key={person.name}
                        className={`flex items-center gap-4 p-5 rounded-xl border ${person.index >= 3 && !isTeamExpanded ? 'hidden md:flex' : 'flex'} ${isHighContrast ? 'bg-gray-900 border-white' : 'bg-white border-slate-200'}`}
                      >
                        <div
                          className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-600 text-white'}`}
                          aria-hidden="true"
                        >
                          {person.initials}
                        </div>
                        <div>
                          <h4 className={`text-lg font-bold leading-tight ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>
                            {person.name}
                          </h4>
                          <p className={`text-sm mt-1 ${isHighContrast ? 'text-gray-300' : 'text-slate-500'}`}>
                            {person.role}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:hidden text-center mt-8">
            <Button
              onClick={() => setIsTeamExpanded((open) => !open)}
              variant="outline"
              className={isHighContrast ? 'text-yellow-400 border-yellow-400' : ''}
            >
              {isTeamExpanded ? 'Zwiń zespół' : 'Pokaż cały zespół'}
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section id="kontakt" className={`py-16 md:py-20 scroll-mt-4 ${isHighContrast ? 'bg-gray-900 text-white border-t border-yellow-400' : 'bg-surface'}`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className={`text-2xl md:text-3xl font-semibold ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Kontakt</h2>

              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-100 text-brand-700'}`}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Adres</h3>
                      <p className={isHighContrast ? 'text-gray-300' : 'text-slate-600'}>ul. Mickiewicza 44A</p>
                      <p className={isHighContrast ? 'text-gray-300' : 'text-slate-600'}>15-223 Białystok</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-100 text-brand-700'}`}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Telefon</h3>
                      <a href="tel:857482312" className={`font-semibold hover:underline ${isHighContrast ? 'text-white' : 'text-brand-700'}`}>
                        85 748 23 12
                      </a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-100 text-brand-700'}`}>
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Godziny</h3>
                      <p className={isHighContrast ? 'text-gray-300' : 'text-slate-600'}>Poniedziałek–piątek, 8:00–18:00</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Added min-h-[400px] to force height on mobile */}
            <div className={`min-h-[400px] h-[400px] rounded-2xl overflow-hidden shadow-lg relative ${isHighContrast ? 'border-2 border-yellow-400 bg-gray-900' : 'bg-gray-100'}`}>
              {cookieConsent === 'accepted' ? (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.3248462469415!2d23.1665!3d53.1275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc0000000001%3A0x0!2sBia%C5%82ystok%2C%20Mickiewicza%2044A!5e0!3m2!1spl!2spl!4v1630000000000!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Mapa dojazdu"
                  className={isHighContrast ? 'grayscale invert' : ''}
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 w-full h-full">
                   <div className={`mb-4 p-4 rounded-full ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-500'}`}>
                      {cookieConsent === 'rejected' ? <Lock size={32} /> : <MapIcon size={32} />}
                   </div>
                   <h3 className={`text-xl font-bold mb-2 ${isHighContrast ? 'text-white' : 'text-gray-900'}`}>
                     {cookieConsent === 'rejected' ? 'Mapa jest wyłączona' : 'Mapa wymaga zgody'}
                   </h3>
                   <p className={`mb-6 max-w-sm ${isHighContrast ? 'text-gray-300' : 'text-gray-600'}`}>
                     {cookieConsent === 'rejected' 
                       ? 'Nie wyrażono zgody na mapę Google, więc nie jest ładowana. Zgodę można wyrazić poniżej.' 
                       : 'Mapa Google ładuje się dopiero po zgodzie. Bez niej strona działa dalej, a Google nie dostaje adresu IP z tej mapy.'}
                   </p>
                   <Button 
                     onClick={acceptCookies}
                     variant={isHighContrast ? 'primary' : 'primary'}
                     className={isHighContrast ? 'bg-yellow-400 text-black hover:bg-yellow-500' : ''}
                   >
                     Zgoda na mapę Google
                   </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
