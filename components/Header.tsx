import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, UserPlus, Eye, Type, Clock } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPatientMenuOpen, setIsPatientMenuOpen] = useState(false);
  const { isHighContrast, toggleHighContrast, toggleBigFont } = useAccessibility();
  const location = useLocation();
  const navigate = useNavigate();

  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeDrawer();
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('http')) return; 

    e.preventDefault();
    closeDrawer();
    setIsPatientMenuOpen(false);

    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { targetId } });
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { name: 'Strona główna', path: '/' },
    { name: 'O nas', path: '/#o-nas' },
    { name: 'Usługi', path: '/#uslugi' },
    { name: 'Kontakt', path: '/#kontakt' },
    { name: 'Karta POZ / Deklaracja', path: '/karta-poz' },
  ];

  const patientLinks = [
    { name: 'Gdzie po pomoc?', path: '/gdzie-po-pomoc' },
    { name: 'Kalendarz szczepień', path: 'https://szczepienia.pzh.gov.pl/kalendarz-szczepien-2024/', external: true },
    { name: 'Cennik usług prywatnych', path: '/cennik-uslug' },
    { name: 'Cennik szczepień', path: '/cennik-szczepien' },
  ];

  const isHome = location.pathname === '/';
  
  // Logic matches static main.js: Solid if scrolled OR not home OR high contrast.
  // Importantly: removed isMobile check to allow transparent->white transition on mobile too.
  const showSolidBackground = isScrolled || !isHome || isHighContrast;
  const isDarkText = showSolidBackground && !isHighContrast;

  const wrapperClass = isHighContrast 
    ? 'fixed top-0 left-0 w-full z-50 bg-black border-b-2 border-yellow-400'
    : `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showSolidBackground ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`;

  const topBarClass = isHighContrast 
    ? 'bg-yellow-400 text-black' 
    : (showSolidBackground ? 'bg-cyan-900 text-cyan-50' : 'bg-transparent text-white/90 border-b border-white/10');

  const navLinkClass = isHighContrast
    ? 'text-white hover:text-yellow-400 font-bold cursor-pointer inline-flex items-center justify-center h-10 px-3 rounded-lg transition-colors'
    : (isDarkText
        ? 'text-slate-600 hover:text-brand-600 font-medium hover:bg-slate-50 inline-flex items-center justify-center h-10 px-3 rounded-lg transition-colors cursor-pointer'
        : 'text-white hover:text-cyan-200 font-medium hover:bg-white/10 inline-flex items-center justify-center h-10 px-3 rounded-lg transition-colors cursor-pointer');

  return (
    <>
      <div className={wrapperClass}>
        <div className={`w-full py-2 px-4 text-xs md:text-sm font-medium transition-colors ${topBarClass}`}>
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="hidden md:flex items-center gap-4 opacity-90">
              <span className="flex items-center gap-1.5"><Clock size={14} /> Pn-Pt: 08:00 – 18:00</span>
              <span className="w-px h-3 bg-current opacity-30"></span>
              <span>Rejestracja: 08:00 – 18:00</span>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <span className="md:hidden flex items-center gap-1.5"><Clock size={14} /> 8:00–18:00</span>
              <div className="flex items-center gap-3">
                <button onClick={toggleHighContrast} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-1 focus:ring-current rounded px-1">
                  <Eye size={14} /><span className="hidden sm:inline">{isHighContrast ? 'Wyłącz kontrast' : 'Kontrast'}</span>
                </button>
                <button onClick={toggleBigFont} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-1 focus:ring-current rounded px-1">
                  <Type size={14} /><span className="hidden sm:inline">Czcionka</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Updated to py-2 to match static version */}
        <header className={`w-full transition-all duration-300 py-2`}>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-2 md:gap-4 group">
                <div className={`shrink-0 transition-transform duration-300 group-hover:scale-105 ${isHighContrast ? 'text-yellow-400' : 'text-brand-500'}`}>
                  <svg width="46" height="46" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[56px] md:h-[56px]">
                    <path d="M38 12C38 8.68629 40.6863 6 44 6H56C59.3137 6 62 8.68629 62 12V38H88C91.3137 38 94 40.6863 94 44V56C94 59.3137 91.3137 62 88 62H62V88C62 91.3137 59.3137 94 56 94H44C40.6863 94 38 91.3137 38 88V62H12C8.68629 62 6 59.3137 6 56V44C6 40.6863 8.68629 38 12 38H38V12Z" fill={isHighContrast ? "#facc15" : (isDarkText ? "#06b6d4" : "#ffffff")} />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="16" fontFamily="sans-serif" fontWeight="800" fill={isHighContrast ? "black" : (isDarkText ? "white" : "#0891b2")} style={{ letterSpacing: '0.05em' }}>NZOZ</text>
                  </svg>
                </div>
                <div className="flex flex-col justify-center -space-y-0.5 md:-space-y-1">
                   <span className={`hidden md:block text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1 ${isHighContrast ? 'text-yellow-400' : (isDarkText ? 'text-slate-400' : 'text-cyan-100')}`}>NZOZ</span>
                   <div className="flex flex-col leading-none">
                     <span className={`text-sm sm:text-lg md:text-xl font-bold tracking-tight transition-colors ${isHighContrast ? 'text-white' : (isDarkText ? 'text-slate-800' : 'text-white')}`}>Podstawowa</span>
                     <span className={`text-sm sm:text-lg md:text-xl font-bold tracking-tight transition-colors ${isHighContrast ? 'text-white' : (isDarkText ? 'text-brand-600' : 'text-cyan-200')}`}>Opieka Zdrowotna</span>
                   </div>
                   <span className={`hidden sm:block text-xs md:text-sm font-medium mt-0.5 md:mt-1 ${isHighContrast ? 'text-gray-300' : (isDarkText ? 'text-slate-500' : 'text-white/80')}`}>Iwona Okuła</span>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className={navLinkClass}>
                    {link.name}
                  </a>
                ))}
                
                {/* Desktop Dropdown */}
                <div 
                    className="relative group" 
                    onMouseEnter={() => setIsPatientMenuOpen(true)}
                    onMouseLeave={() => setIsPatientMenuOpen(false)}
                >
                    <button className={`${navLinkClass} gap-1`}>
                        Pacjent
                    </button>
                    {isPatientMenuOpen && (
                        <div className={`absolute top-full left-0 w-60 pt-2`}>
                            <div className={`rounded-xl shadow-xl overflow-hidden border py-2 ${isHighContrast ? 'bg-black border-yellow-400' : 'bg-white border-gray-100'}`}>
                                {patientLinks.map((link) => (
                                    <a 
                                        key={link.name}
                                        href={link.path}
                                        target={link.external ? "_blank" : "_self"}
                                        onClick={(e) => !link.external && handleNavClick(e, link.path)}
                                        className={`block px-4 py-2 text-sm font-medium transition-colors ${isHighContrast ? 'text-white hover:bg-gray-900 hover:text-yellow-400' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'}`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
              </nav>

              <div className={`hidden lg:flex items-center gap-4 pl-6 border-l ml-2 ${isDarkText ? 'border-gray-100' : 'border-white/20'}`}>
                <div className="flex flex-col items-end mr-2">
                   <span className={`text-[10px] font-bold uppercase tracking-wider ${isHighContrast ? 'text-gray-400' : (isDarkText ? 'text-gray-400' : 'text-cyan-100')}`}>Rejestracja</span>
                   <a href="tel:857482312" className={`font-bold text-lg leading-none hover:underline transition-colors ${isHighContrast ? 'text-yellow-400' : (isDarkText ? 'text-gray-800' : 'text-white')}`}>85 748 23 12</a>
                </div>
                <Button to="/rejestracja" variant={isHighContrast ? 'outline' : (isDarkText ? 'primary' : 'white')} className="shadow-lg !py-2.5 !px-5 rounded-full">Umów wizytę</Button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className={`lg:hidden p-2 rounded-md transition-colors ${isHighContrast ? 'text-yellow-400 hover:bg-gray-800' : (isDarkText ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/20')}`} 
                onClick={() => setIsDrawerOpen(true)}
              >
                <Menu size={32} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* MOBILE DRAWER */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={closeDrawer}></div>
          <div className={`fixed inset-y-0 right-0 w-[85%] max-w-xs shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isHighContrast ? 'bg-black border-l border-yellow-400' : 'bg-white'}`}>
            <div className="p-5 flex justify-between items-center border-b border-gray-100">
              <span className={`font-bold text-lg ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}>Menu</span>
              <button onClick={closeDrawer} className={`p-2 rounded-full transition-colors ${isHighContrast ? 'text-white hover:text-yellow-400' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-5">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                   <a key={link.name} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className={`text-lg font-medium px-4 py-3 rounded-xl transition-all ${isHighContrast ? 'text-white hover:bg-gray-900 hover:text-yellow-400' : 'text-gray-700 hover:bg-brand-50 hover:text-brand-600'}`}>
                     {link.name}
                   </a>
                ))}
                
                <div className="mt-4 mb-2 px-4 text-xs font-bold uppercase tracking-wider text-gray-400">Pacjent</div>
                {patientLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.path} 
                        target={link.external ? "_blank" : "_self"}
                        onClick={(e) => { if(!link.external) handleNavClick(e, link.path); else closeDrawer(); }} 
                        className={`text-base font-medium px-4 py-2 rounded-lg transition-all ${isHighContrast ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        {link.name}
                    </a>
                ))}

                <div className="my-4 border-t border-gray-100"></div>
                <Link to="/polityka-rodo" onClick={closeDrawer} className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${isHighContrast ? 'text-gray-400' : 'text-gray-500'}`}>Polityka Prywatności</Link>
              </nav>
            </div>
            <div className={`p-6 border-t mt-auto space-y-3 ${isHighContrast ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
              <a href="tel:857482312" className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold text-lg border-2 transition-colors ${isHighContrast ? 'border-yellow-400 text-yellow-400' : 'border-brand-200 text-brand-700 bg-white'}`}>
                <Phone size={20} /> 85 748 23 12
              </a>
              <Button to="/rejestracja" onClick={closeDrawer} className="w-full flex items-center justify-center gap-2 shadow-lg">
                <UserPlus size={20} /> Zarejestruj się
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};