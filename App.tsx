import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { CookieProvider } from './contexts/CookieContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { Privacy } from './pages/Privacy';
import { PozCard } from './pages/PozCard';
import { PatientHelp } from './pages/PatientHelp';
import { PrivatePriceList } from './pages/PrivatePriceList';
import { VaccinationPriceList } from './pages/VaccinationPriceList';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <CookieProvider>
        <HashRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rejestracja" element={<Registration />} />
              <Route path="/polityka-rodo" element={<Privacy />} />
              <Route path="/karta-poz" element={<PozCard />} />
              <Route path="/gdzie-po-pomoc" element={<PatientHelp />} />
              <Route path="/cennik-uslug" element={<PrivatePriceList />} />
              <Route path="/cennik-szczepien" element={<VaccinationPriceList />} />
            </Routes>
          </Layout>
          <Analytics />
        </HashRouter>
      </CookieProvider>
    </AccessibilityProvider>
  );
};

export default App;