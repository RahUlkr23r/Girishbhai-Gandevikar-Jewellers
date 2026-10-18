import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useGoldRates } from '../context/GoldRatesContext';
import { Menu, X, ChevronDown, Phone, Sparkles, MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const { openRates } = useGoldRates();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '/', labelKey: 'nav.home', defaultLabel: 'HOME' },
    { href: '/services', labelKey: 'nav.services', defaultLabel: 'JEWELLERY & SERVICES' },
    { href: '/amya', labelKey: 'nav.amya', defaultLabel: 'AMYA' },
    { href: '/timeline', labelKey: 'nav.timeline', defaultLabel: 'TIMELINE' },
    { href: '/reviews', labelKey: 'nav.reviews', defaultLabel: 'REVIEWS' },
    { href: '/faq', labelKey: 'nav.faq', defaultLabel: 'FAQS' },
    { href: '/contact', labelKey: 'nav.contact', defaultLabel: 'CONTACT' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#E8E3D8]'
            : 'bg-[#FDFBF7]/85 backdrop-blur-xs py-3.5 border-b border-[#E8E3D8]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar: Language, Instagram, Gold Rates */}
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E3D8]/50 text-[11px] tracking-wider text-[#736C63]">
            {/* Left: Heritage Badge & Showroom Location */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[#8C1B22] font-medium uppercase tracking-[0.15em]">
                <Sparkles className="w-3.5 h-3.5 text-[#D7B46A]" />
                Since 1927 • Gaekwad Dynasty Goldsmith
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[#736C63]/90">
                <MapPin className="w-3 h-3 text-[#D7B46A]" />
                Alkapuri, Vadodara
              </span>
            </div>

            {/* Right: Gold Rates & Language */}
            <div className="flex items-center gap-2.5 ml-auto">
              {/* Instagram link */}
              <a
                href="https://www.instagram.com/gandevikar.jeweller.girishbhai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 hover:text-[#8C1B22] transition-colors py-1 px-2"
                aria-label="Follow Gandevikar Jewellers on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#8C1B22]" />
                <span className="text-[10px] tracking-widest uppercase font-medium">INSTAGRAM</span>
              </a>

              <div className="h-3 w-px bg-[#E8E3D8] hidden sm:block" />

              {/* Gold Rates Live Trigger */}
              <button
                type="button"
                onClick={openRates}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer font-semibold shadow-2xs"
                title="View Live Gold & Silver Rates"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                  {t('nav.goldRates', 'GOLD RATES')}
                </span>
                <ChevronDown className="w-3 h-3 text-emerald-700" />
              </button>

              {/* Language Switcher */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#D7B46A]/60 bg-[#FAF6EE] text-[#8C1B22] text-[10px] sm:text-[11px] font-semibold tracking-wider hover:bg-[#F2ECE1] transition-all cursor-pointer select-none shadow-2xs"
                title="Switch Language / ભાષા બદલો"
              >
                <span>{language === 'en' ? 'EN | ગુજરાતી' : 'ગુજરાતી | EN'}</span>
              </button>
            </div>
          </div>

          {/* Main Navigation Row */}
          <div className="flex items-center justify-between pt-2.5">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="Girishbhai Gandevikar Jewellers">
              <img
                src="/images/log.webp"
                alt="Girishbhai Gandevikar Jewellers"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/logo.jpg';
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-[11px] font-medium tracking-[0.2em] uppercase text-[#2B2825]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`py-1 relative transition-colors duration-200 hover:text-[#8C1B22] ${
                      isActive ? 'text-[#8C1B22] font-semibold' : ''
                    }`}
                  >
                    <span>{t(link.labelKey, link.defaultLabel)}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#8C1B22] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Action / Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919925579633"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#8C1B22] text-white text-[11px] font-semibold uppercase tracking-[0.15em] rounded-xs hover:bg-[#6D141A] transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 99255 79633</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#2B2825] hover:text-[#8C1B22] rounded-md transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/50 backdrop-blur-xs pt-[104px]">
          <div className="bg-[#FDFBF7] border-b border-[#E8E3D8] px-6 py-6 space-y-4 max-h-[calc(100vh-104px)] overflow-y-auto animate-in slide-in-from-top duration-200">
            {/* Nav list */}
            <div className="flex flex-col space-y-3 pb-4 border-b border-[#E8E3D8]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm tracking-[0.2em] uppercase py-2 transition-colors ${
                      isActive ? 'text-[#8C1B22] font-bold border-l-2 border-[#8C1B22] pl-3' : 'text-[#2B2825] pl-1 hover:text-[#8C1B22]'
                    }`}
                  >
                    {t(link.labelKey, link.defaultLabel)}
                  </Link>
                );
              })}
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openRates();
                }}
                className="w-full flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xs text-emerald-800 text-xs font-semibold tracking-wider uppercase"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{t('nav.goldRates', 'VIEW TODAY\'S GOLD RATES')}</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              <a
                href="tel:+919925579633"
                className="w-full flex items-center justify-center gap-2 p-3 bg-[#8C1B22] text-white rounded-xs text-xs font-semibold tracking-widest uppercase hover:bg-[#6D141A] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store Concierge</span>
              </a>

              <a
                href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw!18m1!1e1?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3 bg-[#FAF6EE] border border-[#D7B46A]/50 text-[#8C1B22] rounded-xs text-xs font-semibold tracking-widest uppercase"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions (Alkapuri)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
