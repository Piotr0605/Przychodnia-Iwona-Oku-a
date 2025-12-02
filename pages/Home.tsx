import React, { useState } from 'react';
import { Clock, MapPin, Stethoscope, Phone, Map as MapIcon, Lock, FileText, ClipboardList, Syringe } from 'lucide-react';
import { Button } from '../components/Button';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useCookie } from '../contexts/CookieContext';

export const Home: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const { cookieConsent, acceptCookies } = useCookie();
  const [isTeamExpanded, setIsTeamExpanded] = useState(false);

  const services = [
    { 
      title: 'Porady', 
      desc: 'Diagnostyka, leczenie ostrych i przewlekłych.', 
      icon: <Stethoscope size={32} /> 
    },
    { 
      title: 'E-recepty i e-skierowania', 
      desc: 'Szybko i bezpiecznie.', 
      icon: <FileText size={32} /> 
    },
    { 
      title: 'Bilanse i orzeczenia', 
      desc: 'Dla dzieci, młodzieży i dorosłych.', 
      icon: <ClipboardList size={32} /> 
    },
    { 
      title: 'Szczepienia', 
      desc: 'Program szczepień ochronnych i sezonowych.', 
      icon: <Syringe size={32} /> 
    },
  ];

  const team = [
    { initials: 'IO', name: 'lek. Iwona Okuła', role: 'Specjalista medycyny rodzinnej' },
    { initials: 'EP', name: 'lek. Elżbieta Pawłowska', role: 'Internista, specjalista medycyny rodzinnej' },
    { initials: 'JO', name: 'lek. Joanna Oklińska', role: 'Lekarz' },
    { initials: 'JZ', name: 'lek. Julia Zawadzka', role: 'Rezydentka medycyny rodzinnej' },
    { initials: 'JP', name: 'mgr. Jolanta Parafianowicz', role: 'Pielęgniarka' },
    { initials: 'RM', name: 'mgr. Renata Mróz', role: 'Pielęgniarka' },
    { initials: 'KB', name: 'mgr. Katarzyna Baczyńska', role: 'Położna' },
    { initials: 'PM', name: 'mgr. Patrycja Michalczuk', role: 'Dietetyk' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[700px] flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2070&auto=format&fit=crop" 
            alt="Medyczna ilustracja" 
            className={`w-full h-full object-cover object-center ${isHighContrast ? 'grayscale opacity-30' : 'opacity-100'}`}
          />
          <div className={`absolute inset-0 ${isHighContrast ? 'bg-black/90' : 'bg-gradient-to-b from-cyan-900/90 via-cyan-800/80 to-cyan-900/60'}`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32 md:pt-48 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white'}`}>
                Twój partner w zdrowiu
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isHighContrast ? 'text-yellow-400' : 'text-white'}`}>
                Nowoczesna opieka <br/> dla całej rodziny
              </h1>
              <p className={`text-lg md:text-xl max-w-lg ${isHighContrast ? 'text-white' : 'text-gray-100'}`}>
                Zapewniamy kompleksową podstawową opiekę zdrowotną (POZ) dla pacjentów w każdym wieku. Zaufaj naszemu doświadczonemu zespołowi lekarzy, pielęgniarek i położnych.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  to="/rejestracja" 
                  variant={isHighContrast ? 'outline' : 'white'} 
                  className={`
                    w-full sm:w-auto 
                    transform transition-all duration-300 ease-out 
                    hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] active:scale-95 active:shadow-sm
                    ${isHighContrast 
                      ? 'bg-black border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' 
                      : 'bg-white text-brand-600 hover:bg-white shadow-xl font-bold'
                    }
                  `}
                >
                  Zostań pacjentem
                </Button>
                
                <Button 
                  to="#o-nas" 
                  variant="outline" 
                  className={`
                    w-full sm:w-auto border-2 
                    transform transition-all duration-300 ease-out
                    hover:scale-105 hover:bg-white/10 active:scale-95
                    ${isHighContrast ? 'border-white text-white' : 'border-white text-white'}
                  `}
                >
                  Poznaj nas
                </Button>
              </div>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className={`rounded-xl p-6 shadow-xl w-full max-w-sm ${isHighContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-white/95 backdrop-blur-md text-gray-800'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-50 text-brand-600'}`}>
                    <Clock size={20} />
                  </div>
                  <h3 className="text-lg font-bold">Godziny przyjęć</h3>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-end">
                    <span className={isHighContrast ? 'text-gray-300' : 'text-gray-600'}>Pon. - Piątek</span>
                    <span className={`text-lg font-bold leading-none ${isHighContrast ? 'text-yellow-400' : 'text-brand-600'}`}>08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className={isHighContrast ? 'text-gray-300' : 'text-gray-600'}>Sobota - Niedziela</span>
                    <span className={`font-semibold ${isHighContrast ? 'text-gray-500' : 'text-gray-400'}`}>Nieczynne</span>
                  </div>
                </div>

                <div className={`mt-5 pt-4 border-t ${isHighContrast ? 'border-gray-800' : 'border-gray-100'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-70">Rejestracja</span>
                    <a href="tel:857482312" className={`text-xl font-bold hover:underline ${isHighContrast ? 'text-yellow-400' : 'text-brand-600'}`}>
                      85 748 23 12
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="o-nas" className={`py-20 scroll-mt-28 ${isHighContrast ? 'bg-black text-white' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="max-w-4xl mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>O nas</h2>
                <div className={`space-y-6 text-lg leading-relaxed text-justify ${isHighContrast ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>
                    NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła to miejsce, w którym zdrowie naszych Pacjentów jest zawsze na pierwszym miejscu. Od wielu lat otaczamy opieką całe rodziny – od najmłodszych po seniorów.
                  </p>
                  <p>
                    Nasz zespół tworzą doświadczeni lekarze, pielęgniarki i rejestratorki, którzy codziennie dbają o to, by każda wizyta przebiegała w atmosferze zaufania i zrozumienia. Współpracujemy z Narodowym Funduszem Zdrowia, oferując kompleksową opiekę w ramach Podstawowej Opieki Zdrowotnej (POZ), profilaktykę, szczepienia oraz konsultacje specjalistyczne.
                  </p>
                  <p>
                    Naszym celem jest nie tylko leczenie, ale też edukacja i profilaktyka – by nasi Pacjenci mogli cieszyć się zdrowiem każdego dnia.
                  </p>
                </div>
             </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className={`py-20 scroll-mt-28 ${isHighContrast ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Nasze Usługi</h2>
            <p className={`max-w-2xl mx-auto ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>
              Świadczymy szeroki zakres usług medycznych w ramach Podstawowej Opieki Zdrowotnej.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${isHighContrast ? 'bg-black border border-white hover:border-yellow-400' : 'bg-white shadow-md hover:shadow-lg border border-transparent hover:border-brand-100'}`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${isHighContrast ? 'bg-white text-black' : 'bg-brand-50 text-brand-500'}`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isHighContrast ? 'text-yellow-400' : 'text-brand-500'}`}>{service.title}</h3>
                <p className={`text-base leading-relaxed ${isHighContrast ? 'text-gray-300' : 'text-gray-600'}`}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="zespol" className={`py-20 scroll-mt-28 ${isHighContrast ? 'bg-black text-white border-t border-yellow-400' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Nasz Zespół</h2>
            <p className={isHighContrast ? 'text-white' : 'text-gray-600'}>
              Doświadczeni specjaliści, którym możesz zaufać.
            </p>
          </div>

          <div className="md:hidden text-center mb-8">
            {!isTeamExpanded && (
               <Button 
                 onClick={() => setIsTeamExpanded(true)} 
                 variant={isHighContrast ? 'outline' : 'outline'}
                 className={isHighContrast ? 'text-yellow-400 border-yellow-400' : ''}
               >
                 Poznaj nasz zespół
               </Button>
            )}
          </div>

          <div className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 
            transition-all duration-700 ease-in-out overflow-hidden
            ${isTeamExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}
          `}>
            {team.map((person, idx) => (
              <article 
                key={idx} 
                className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-200 ${isHighContrast ? 'bg-gray-900 border border-white hover:border-yellow-400' : 'bg-white shadow-sm border border-gray-100 hover:shadow-md'}`}
              >
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shrink-0 ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-500 text-white'}`} 
                  aria-hidden="true"
                >
                  {person.initials}
                </div>
                <div>
                  <h4 className={`text-lg font-bold leading-tight ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>
                    {person.name}
                  </h4>
                  <p className={`text-sm mt-1 ${isHighContrast ? 'text-gray-300' : 'text-gray-500'}`}>
                    {person.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section id="kontakt" className={`py-20 scroll-mt-28 ${isHighContrast ? 'bg-gray-900 text-white border-t border-yellow-400' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Kontakt</h2>
                <p className={`text-lg ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>
                  Jesteśmy dostępni od poniedziałku do piątku. Skontaktuj się z nami telefonicznie lub odwiedź nas osobiście.
                </p>
              </div>

              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-100 text-brand-600'}`}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Adres</h3>
                      <p className={isHighContrast ? 'text-gray-300' : 'text-gray-600'}>ul. Mickiewicza 44A</p>
                      <p className={isHighContrast ? 'text-gray-300' : 'text-gray-600'}>15-223 Białystok</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-100 text-brand-600'}`}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Telefon</h3>
                      <p className="text-gray-600">
                        <a href="tel:857482312" className={`font-bold hover:underline ${isHighContrast ? 'text-white' : 'text-brand-600'}`}>
                          85 748 23 12
                        </a>
                      </p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-brand-100 text-brand-600'}`}>
                      <Stethoscope size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Rejestracja</h3>
                      <p className={isHighContrast ? 'text-gray-300' : 'text-gray-600'}>Zachęcamy do kontaktu telefonicznego w godzinach pracy przychodni oraz do odwiedzenia nas osobiście.</p>
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
                     {cookieConsent === 'rejected' ? 'Mapa zablokowana' : 'Mapa wymaga zgody na cookies'}
                   </h3>
                   <p className={`mb-6 max-w-sm ${isHighContrast ? 'text-gray-300' : 'text-gray-600'}`}>
                     {cookieConsent === 'rejected' 
                       ? 'Zablokowałeś pliki cookie, dlatego nie możemy wyświetlić mapy Google. Zmień ustawienia, aby zobaczyć mapę.' 
                       : 'Aby zobaczyć mapę dojazdu Google Maps, musisz zaakceptować pliki cookies związane z usługami Google.'}
                   </p>
                   <Button 
                     onClick={acceptCookies}
                     variant={isHighContrast ? 'primary' : 'primary'}
                     className={isHighContrast ? 'bg-yellow-400 text-black hover:bg-yellow-500' : ''}
                   >
                     Zaakceptuj cookies i pokaż mapę
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