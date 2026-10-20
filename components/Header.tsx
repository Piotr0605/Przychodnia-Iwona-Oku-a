import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Eye, Type, Clock, ChevronDown } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);
  const { isHighContrast, isBigFont, toggleHighContrast, toggleBigFont } = useAccessibility();
  const location = useLocation();
  const navigate = useNavigate();

  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    closeDrawer();
    setIsPriceMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('http')) return;

    e.preventDefault();
    closeDrawer();
    setIsPriceMenuOpen(false);

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
    { name: 'Rejestracja', path: '/rejestracja' },
    { name: 'Karta POZ', path: '/karta-poz' },
    { name: 'Kontakt', path: '/#kontakt' },
  ];

  const priceLinks = [
    { name: 'Cennik usług prywatnych', path: '/cennik-uslug' },
    { name: 'Cennik szczepień', path: '/cennik-szczepien' },
  ];

  const moreLinks = [
    { name: 'Gdzie po pomoc?', path: '/gdzie-po-pomoc', external: false },
    { name: 'Kalendarz szczepień', path: 'https://szczepienia.pzh.gov.pl/kalendarz-szczepien-2024/', external: true },
  ];

  const isCurrentPath = (path: string) => !path.startsWith('/#') && location.pathname === path;
  const pricesActive = priceLinks.some((link) => link.path === location.pathname);
  const desktopItemClass = (path: string) => {
    if (!isCurrentPath(path)) return navLinkClass;
    return isHighContrast
      ? `${navLinkClass} text-yellow-400 underline decoration-2 underline-offset-4`
      : `${navLinkClass} text-brand-700 underline decoration-2 underline-offset-4 decoration-brand-600`;
  };
  const mobileItemClass = (path: string, nested = false) => {
    const current = isCurrentPath(path);
    if (isHighContrast) {
      return `${nested ? 'text-base' : 'text-lg'} font-medium px-4 py-3 rounded-xl ${current ? 'text-yellow-400 underline' : 'text-white hover:bg-gray-900 hover:text-yellow-400'}`;
    }
    return `${nested ? 'text-base' : 'text-lg'} font-medium px-4 ${nested ? 'py-2.5' : 'py-3'} rounded-xl ${current ? 'bg-brand-50 text-brand-700' : 'text-slate-800 hover:bg-slate-50 hover:text-brand-700'}`;
  };

  const wrapperClass = isHighContrast
    ? 'fixed top-0 left-0 w-full z-50 bg-black border-b-2 border-yellow-400'
    : 'fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200';

  const topBarClass = isHighContrast
    ? 'bg-yellow-400 text-black'
    : 'bg-slate-50 text-slate-600 border-b border-slate-200';

  const navLinkClass = isHighContrast
    ? 'text-white hover:text-yellow-400 font-bold cursor-pointer inline-flex items-center justify-center h-10 px-3 rounded-lg transition-colors'
    : 'text-slate-700 hover:text-brand-700 font-medium hover:bg-slate-50 inline-flex items-center justify-center h-10 px-3 rounded-lg transition-colors cursor-pointer';

  return (
    <>
      <div className={wrapperClass}>
        <div className={`w-full py-2 px-4 text-xs md:text-sm font-medium ${topBarClass}`}>
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center gap-3">
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> Pn–Pt: 8:00–18:00
            </span>
            <div className="flex items-center gap-3">
              <button onClick={toggleHighContrast} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-1 focus:ring-current rounded px-1">
                <Eye size={14} /><span className="hidden sm:inline">{isHighContrast ? 'Wyłącz kontrast' : 'Kontrast'}</span>
              </button>
              <button onClick={toggleBigFont} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-1 focus:ring-current rounded px-1">
                <Type size={14} /><span className="hidden md:inline">{isBigFont ? 'Standardowy tekst' : 'Większy tekst'}</span>
              </button>
            </div>
          </div>
        </div>

        <header className="w-full py-2">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-4">
              <Link to="/" className="flex items-center gap-2 md:gap-4 group min-w-0">
                <div className={`shrink-0 ${isHighContrast ? 'text-yellow-400' : 'text-brand-600'}`}>
                  <svg width="46" height="46" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[52px] md:h-[52px]">
                    <path d="M38 12C38 8.68629 40.6863 6 44 6H56C59.3137 6 62 8.68629 62 12V38H88C91.3137 38 94 40.6863 94 44V56C94 59.3137 91.3137 62 88 62H62V88C62 91.3137 59.3137 94 56 94H44C40.6863 94 38 91.3137 38 88V62H12C8.68629 62 6 59.3137 6 56V44C6 40.6863 8.68629 38 12 38H38V12Z" fill={isHighContrast ? "#facc15" : "#0891b2"} />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="16" fontFamily="sans-serif" fontWeight="800" fill={isHighContrast ? "black" : "white"} style={{ letterSpacing: '0.05em' }}>NZOZ</text>
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                   <span className={`text-sm sm:text-lg font-bold tracking-tight leading-tight ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>Podstawowa<br />Opieka Zdrowotna</span>
                   <span className={`text-xs sm:text-sm font-medium ${isHighContrast ? 'text-gray-300' : 'text-slate-500'}`}>Iwona Okuła</span>
                </div>
              </Link>

              <nav className="hidden xl:flex items-center gap-1">
                {navLinks.slice(0, 3).map((link) => (
                  <a key={link.name} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className={desktopItemClass(link.path)} aria-current={isCurrentPath(link.path) ? 'page' : undefined}>
                    {link.name}
                  </a>
                ))}

                <div
                  className="relative"
                  onMouseEnter={() => setIsPriceMenuOpen(true)}
                  onMouseLeave={() => setIsPriceMenuOpen(false)}
                >
                  <button
                    className={`${pricesActive ? desktopItemClass(priceLinks.find((link) => link.path === location.pathname)?.path ?? '') : navLinkClass} gap-1`}
                    aria-expanded={isPriceMenuOpen}
                    onClick={() => setIsPriceMenuOpen((open) => !open)}
                  >
                    Cenniki <ChevronDown size={16} />
                  </button>
                  {isPriceMenuOpen && (
                    <div className="absolute top-full left-0 w-64 pt-2">
                      <div className={`rounded-xl shadow-lg overflow-hidden border py-2 ${isHighContrast ? 'bg-black border-yellow-400' : 'bg-white border-slate-200'}`}>
                        {priceLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => handleNavClick(e, link.path)}
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${isCurrentPath(link.path) ? (isHighContrast ? 'text-yellow-400 underline' : 'text-brand-700 bg-brand-50') : (isHighContrast ? 'text-white hover:bg-gray-900 hover:text-yellow-400' : 'text-slate-700 hover:bg-slate-50 hover:text-brand-700')}`}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {navLinks.slice(3).map((link) => (
                  <a key={link.name} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className={desktopItemClass(link.path)}>
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className={`hidden xl:flex items-center gap-4 pl-4 border-l ${isHighContrast ? 'border-yellow-400' : 'border-slate-200'}`}>
                <a href="tel:857482312" className={`font-bold text-lg leading-none hover:underline ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`}>85 748 23 12</a>
                <Button to="/rejestracja" variant={isHighContrast ? 'outline' : 'primary'} className="!py-2.5 !px-5">Rejestracja</Button>
              </div>

              <a href="tel:857482312" className={`xl:hidden shrink-0 font-bold text-sm sm:text-base whitespace-nowrap ${isHighContrast ? 'text-yellow-400' : 'text-brand-700'}`}>
                85 748 23 12
              </a>
              <button
                className={`xl:hidden p-2 rounded-md transition-colors ${isHighContrast ? 'text-yellow-400 hover:bg-gray-800' : 'text-slate-700 hover:bg-slate-100'}`}
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Otwórz menu"
              >
                <Menu size={32} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </header>
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeDrawer}></div>
          <div className={`fixed inset-y-0 right-0 w-[85%] max-w-xs shadow-2xl flex flex-col ${isHighContrast ? 'bg-black border-l border-yellow-400' : 'bg-white'}`}>
            <div className="p-5 flex justify-between items-center border-b border-slate-100">
              <span className={`font-bold text-lg ${isHighContrast ? 'text-yellow-400' : 'text-slate-900'}`}>Menu</span>
              <button onClick={closeDrawer} aria-label="Zamknij menu" className={`p-2 rounded-full ${isHighContrast ? 'text-white hover:text-yellow-400' : 'text-slate-500 hover:bg-slate-100'}`}><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-5">
              <nav className="flex flex-col space-y-1">
                {navLinks.slice(0, 3).map((link) => (
                   <a key={link.name} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className={mobileItemClass(link.path)} aria-current={isCurrentPath(link.path) ? 'page' : undefined}>
                     {link.name}
                   </a>
                ))}
                <div className="mt-4 mb-1 px-4 text-xs font-bold uppercase tracking-wider text-slate-400">Cenniki</div>
                {priceLinks.map((link) => (
                  <a key={link.name} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className={mobileItemClass(link.path, true)} aria-current={isCurrentPath(link.path) ? 'page' : undefined}>
                    {link.name}
                  </a>
                ))}
                {navLinks.slice(3).map((link) => (
                   <a key={link.name} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className={mobileItemClass(link.path)}>
                     {link.name}
                   </a>
                ))}
                <div className="my-3 border-t border-slate-100"></div>
                {moreLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    onClick={(e) => { if (!link.external) handleNavClick(e, link.path); else closeDrawer(); }}
                    className={mobileItemClass(link.path, true)}
                  >
                    {link.name}
                  </a>
                ))}
                <Link to="/polityka-rodo" onClick={closeDrawer} className={`text-sm font-medium px-4 py-2 rounded-lg ${isHighContrast ? 'text-gray-400' : 'text-slate-500'}`}>Polityka prywatności</Link>
              </nav>
            </div>
            <div className={`p-6 border-t mt-auto space-y-3 ${isHighContrast ? 'bg-gray-900 border-gray-700' : 'bg-surface border-slate-200'}`}>
              <a href="tel:857482312" className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold text-lg border-2 ${isHighContrast ? 'border-yellow-400 text-yellow-400' : 'border-brand-200 text-brand-700 bg-white'}`}>
                <Phone size={20} /> 85 748 23 12
              </a>
              <Button to="/rejestracja" onClick={closeDrawer} className="w-full">
                Rejestracja
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
