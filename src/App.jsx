import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { GoldRatesProvider } from './context/GoldRatesContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';
import GoldRatesModal from './components/GoldRatesModal';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AmyaPage from './pages/AmyaPage';
import TimelinePage from './pages/TimelinePage';
import ReviewsPage from './pages/ReviewsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <LanguageProvider>
      <GoldRatesProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2B2825] font-sans antialiased selection:bg-[#8C1B22] selection:text-white pb-14 lg:pb-0">
            {/* Navigation Header */}
            <Header />

            {/* Main Content Area */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/amya" element={<AmyaPage />} />
                <Route path="/timeline" element={<TimelinePage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Mobile Fixed Action Bar */}
            <MobileQuickBar />

            {/* Live Gold Rates Modal */}
            <GoldRatesModal />
          </div>
        </Router>
      </GoldRatesProvider>
    </LanguageProvider>
  );
}
