import React from 'react';
import { useGoldRates } from '../context/GoldRatesContext';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle, TrendingUp, MapPin } from 'lucide-react';

export default function MobileQuickBar() {
  const { openRates } = useGoldRates();
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#141210]/95 backdrop-blur-md border-t border-[#D7B46A]/30 px-3 py-2 text-white shadow-xl">
      <div className="grid grid-cols-4 gap-1.5 text-center">
        {/* Rates */}
        <button
          type="button"
          onClick={openRates}
          className="flex flex-col items-center justify-center p-1.5 rounded-xs hover:bg-white/10 transition-colors text-[#D7B46A] cursor-pointer"
        >
          <TrendingUp className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Rates</span>
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collections."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xs hover:bg-white/10 transition-colors text-[#25D366]"
        >
          <MessageCircle className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href="tel:+919925579633"
          className="flex flex-col items-center justify-center p-1.5 rounded-xs hover:bg-white/10 transition-colors text-white"
        >
          <Phone className="w-4 h-4 mb-1 text-[#8C1B22]" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Call</span>
        </a>

        {/* Directions */}
        <a
          href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw!18m1!1e1?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xs hover:bg-white/10 transition-colors text-[#E8E3D8]"
        >
          <MapPin className="w-4 h-4 mb-1 text-[#D7B46A]" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Visit</span>
        </a>
      </div>
    </div>
  );
}
