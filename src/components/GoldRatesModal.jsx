import React from 'react';
import { useGoldRates } from '../context/GoldRatesContext';
import { useLanguage } from '../context/LanguageContext';
import { X, ShieldCheck, MessageCircle, TrendingUp, Sparkles, Phone } from 'lucide-react';

export default function GoldRatesModal() {
  const { rates, isRatesOpen, closeRates, lastUpdated } = useGoldRates();
  const { t, language } = useLanguage();

  if (!isRatesOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="relative w-full max-w-2xl bg-[#FDFBF7] border border-[#E8E3D8] shadow-2xl rounded-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#8C1B22] via-[#D7B46A] to-[#8C1B22]" />

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[#E8E3D8] flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C1B22]">
                {t('nav.todaysRates', "TODAY'S RATES")}
              </span>
              <span className="text-[11px] text-[#736C63] tracking-wider">• {t('nav.vadodaraMarket', 'Vadodara Market')}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#141210]">
              {language === 'gu' ? 'આજના સોના-ચાંદીના ભાવ' : 'Live Bullion & Jewellery Rates'}
            </h2>
            <p className="text-xs text-[#736C63] mt-0.5">
              {lastUpdated} • 100% BIS Hallmarked (HUID)
            </p>
          </div>
          <button
            onClick={closeRates}
            className="p-1.5 text-[#736C63] hover:text-[#141210] hover:bg-[#F2ECE1] rounded-full transition-colors cursor-pointer"
            aria-label="Close rates modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Rates Grid */}
        <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
          {rates.map((item) => (
            <div
              key={item.id}
              className={`p-4 border rounded-xs transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                item.badge === 'MOST POPULAR'
                  ? 'bg-[#FAF6EE] border-[#D7B46A]/60 shadow-xs'
                  : 'bg-white border-[#E8E3D8]'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg font-semibold text-[#141210]">
                    {item.karat}
                  </h3>
                  {item.badge && (
                    <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#736C63]">{item.description}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#8C1B22] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{item.purity}</span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="font-serif text-2xl font-bold text-[#8C1B22]">
                  ₹{item.price.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-[#736C63] font-light">
                  per {item.unit}
                </div>
              </div>
            </div>
          ))}

          {/* Hallmarking note */}
          <div className="mt-4 p-3.5 bg-[#FAF6EE] border border-[#E8E3D8] rounded-xs flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#D7B46A] shrink-0 mt-0.5" />
            <p className="text-xs text-[#736C63] leading-relaxed">
              <strong>Transparency Note:</strong> Every piece of gold jewellery at Girishbhai Gandevikar Jewellers is marked with a 6-digit alphanumeric <strong>HUID</strong> and tested transparently on our <strong>in-store Karatmeter</strong> before your eyes.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F5F0E6] border-t border-[#E8E3D8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#736C63] text-center sm:text-left">
            Need customized bridal suite estimates or gold rate lock-in?
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20would%20like%20to%20inquire%20about%20today%27s%20gold%20rates%20and%20bridal%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href="tel:+919925579633"
              className="px-3 py-2 bg-[#8C1B22] text-white text-xs font-semibold rounded-xs hover:bg-[#6D141A] transition-colors"
              title="Call Store Concierge"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
