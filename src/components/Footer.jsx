import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, Award, Star } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#141210] text-[#E8E3D8] border-t-2 border-[#D7B46A]/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8C1B22]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D7B46A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#2C2825]">
          
          {/* Column 1: Brand & Heritage */}
          <div className="space-y-5">
            <Link to="/" className="inline-block" aria-label="Girishbhai Gandevikar Jewellers Home">
              <img
                src="/images/log.webp"
                alt="Girishbhai Gandevikar Jewellers"
                className="h-12 w-auto object-contain filter brightness-0 invert"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/logo.jpg';
                }}
              />
            </Link>
            
            <p className="text-xs text-[#A89F91] leading-relaxed font-light">
              {language === 'gu'
                ? '૧૯૨૭થી વડોદરાનું વિશ્વસનીય હેરીટેજ જ્વેલરી હાઉસ. ગાયકવાડ રાજવી પરંપરાથી લઈને આધુનિક બ્રાઇડલ કલેક્શન સુધી, વિશ્વાસ અને શુદ્ધતાની સદી.'
                : "Vadodara's most trusted heritage jewellery house since 1927. From royal Gaekwad dynasty goldsmiths to contemporary bridal suites, carrying forward a century of unyielding trust and purity."}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="flex text-[#D7B46A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">4.9 / 5.0</span>
              <span className="text-[11px] text-[#A89F91]">(4,065+ Google Reviews)</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/gandevikar.jeweller.girishbhai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#D7B46A]/30 flex items-center justify-center text-[#D7B46A] hover:bg-[#8C1B22] hover:text-white hover:border-[#8C1B22] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb8ncXM7dmeSr0LOrm3Q"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#D7B46A]/30 flex items-center justify-center text-[#D7B46A] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@girishbhaigandevikarjewell1457"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#D7B46A]/30 flex items-center justify-center text-[#D7B46A] hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-colors"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg tracking-widest uppercase text-[#D7B46A] border-b border-[#2C2825] pb-2 font-semibold">
              Explore Collections
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A89F91] tracking-wider uppercase">
              <li>
                <Link to="/" className="hover:text-[#D7B46A] transition-colors">
                  {t('nav.home', 'Home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D7B46A] transition-colors">
                  {t('nav.services', 'Jewellery & Services')}
                </Link>
              </li>
              <li>
                <Link to="/services#suvarna-vruddhi" className="hover:text-[#D7B46A] transition-colors">
                  11+1 Suvarna Vruddhi Yojana
                </Link>
              </li>
              <li>
                <Link to="/amya" className="hover:text-[#D7B46A] transition-colors">
                  AMYA — 925 Everyday Silver
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="hover:text-[#D7B46A] transition-colors">
                  {t('nav.timeline', '100-Year Heritage Timeline')}
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#D7B46A] transition-colors">
                  {t('nav.reviews', 'Customer Reviews')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#D7B46A] transition-colors">
                  {t('nav.faq', 'Frequently Asked Questions')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D7B46A] transition-colors">
                  {t('nav.contact', 'Contact Atelier')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Atelier Pillars */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg tracking-widest uppercase text-[#D7B46A] border-b border-[#2C2825] pb-2 font-semibold">
              Purity & Trust
            </h3>
            <ul className="space-y-3 text-xs text-[#A89F91]">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D7B46A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">100% BIS Hallmarked (HUID)</strong>
                  Six-digit traceability verifiable on BIS Care app.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#D7B46A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">1st Karatmeter in Vadodara</strong>
                  Instant, transparent gold purity testing in front of you.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D7B46A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">GIA Certified Diamonds</strong>
                  Cut, clarity, color, and carat guaranteed.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#D7B46A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Old Gold Exchange</strong>
                  Transparent valuation with zero guesswork.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Flagship Showroom & Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg tracking-widest uppercase text-[#D7B46A] border-b border-[#2C2825] pb-2 font-semibold">
              Flagship Atelier
            </h3>
            
            <div className="space-y-3 text-xs text-[#A89F91]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C1B22] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  Jetalpur Road Char Rasta, Opp. Kashi Vishweshwar Temple, Anand Nagar, Alkapuri, Vadodara, Gujarat 390007
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D7B46A] shrink-0" />
                <a href="tel:+919925579633" className="hover:text-white transition-colors">
                  +91 99255 79633
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D7B46A] shrink-0" />
                <a href="mailto:mandargandevikar@gmail.com" className="hover:text-white transition-colors">
                  mandargandevikar@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#D7B46A] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-white font-medium">Showroom Hours:</span>
                  <span>Mon – Sat: 10:30 AM – 8:30 PM</span>
                  <span className="block">Sun: 10:30 AM – 2:00 PM</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw!18m1!1e1?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#8C1B22] text-white rounded-xs text-[11px] font-semibold tracking-wider uppercase hover:bg-[#6D141A] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions (Google Maps)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736C63] gap-4">
          <p>© {new Date().getFullYear()} Girishbhai Gandevikar Jewellers. All rights reserved.</p>
          <p className="text-[11px] tracking-wider text-center sm:text-right">
            Gaekwad Heritage Jewellery Since 1927 • Jetalpur Road, Alkapuri, Vadodara
          </p>
        </div>
      </div>
    </footer>
  );
}
