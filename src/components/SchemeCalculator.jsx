import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Plus, Minus, MessageCircle, Sparkles, Gift, CheckCircle, Calculator } from 'lucide-react';

export default function SchemeCalculator() {
  const { t, language } = useLanguage();
  const [monthlyAmount, setMonthlyAmount] = useState(10000);

  const quickAmounts = [3000, 5000, 10000, 15000, 25000, 50000];

  const handleStep = (delta) => {
    setMonthlyAmount(prev => {
      const next = prev + delta;
      if (next < 1000) return 1000;
      if (next > 500000) return 500000;
      return next;
    });
  };

  const customerTotal = monthlyAmount * 11;
  const ggjContribution = monthlyAmount * 1;
  const totalValue = monthlyAmount * 12;

  const whatsappMessage = encodeURIComponent(
    `Hello Girishbhai Gandevikar Jewellers, I am interested in starting the 11+1 Suvarna Vruddhi Yojana with a monthly installment of ₹${monthlyAmount.toLocaleString('en-IN')}. Please guide me with the enrollment process.`
  );

  return (
    <div className="relative bg-[#FDFBF7] border-2 border-[#D7B46A]/40 rounded-sm shadow-xl p-6 sm:p-10 max-w-4xl mx-auto overflow-hidden">
      {/* Decorative corner ornament */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#8C1B22]/5 rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#D7B46A]/10 rounded-tr-full pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-2 mb-8 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8C1B22]/10 border border-[#8C1B22]/20 rounded-full text-[#8C1B22] text-[11px] font-semibold tracking-widest uppercase mb-1">
          <Calculator className="w-3.5 h-3.5 text-[#8C1B22]" />
          <span>Suvarna Vruddhi Yojana • 11+1 Gold Scheme</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-wide text-[#141210]">
          {language === 'gu' ? 'ગોલ્ડ સ્કીમ કેલ્ક્યુલેટર' : 'THE BENEFITS CALCULATOR'}
        </h3>
        <p className="text-xs sm:text-sm text-[#736C63] font-light max-w-xl mx-auto">
          {language === 'gu'
            ? 'તમારી માસિક રકમ પસંદ કરો. તમે ૧૧ મહિના જમા કરશો, અને ૧૨મા મહિનાનો હપ્તો અમે ઉમેરીશું.'
            : 'Pay for 11 months. GGJ contributes the 12th month in full. Plan your wedding or milestone jewellery effortlessly.'}
        </p>
      </div>

      {/* Quick Select Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 relative z-10">
        <span className="text-[11px] uppercase tracking-wider text-[#736C63] font-medium mr-1">
          Quick Select:
        </span>
        {quickAmounts.map(amt => (
          <button
            key={amt}
            type="button"
            onClick={() => setMonthlyAmount(amt)}
            className={`px-3.5 py-1.5 text-xs font-medium tracking-wider rounded-xs transition-all cursor-pointer border ${
              monthlyAmount === amt
                ? 'bg-[#8C1B22] text-white border-[#8C1B22] shadow-xs'
                : 'bg-white text-[#2B2825] border-[#E8E3D8] hover:border-[#D7B46A]'
            }`}
          >
            ₹{amt.toLocaleString('en-IN')}
          </button>
        ))}
      </div>

      {/* Interactive Controls & Deposit Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 relative z-10">
        {/* Input box */}
        <div className="space-y-2 text-center p-4 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs">
          <span className="text-xs font-sans text-[#736C63] block font-light">
            I want to deposit per month
          </span>
          <div className="flex items-center justify-center border border-[#D7B46A]/60 bg-[#FAF6EE] rounded-xs overflow-hidden max-w-xs mx-auto">
            <span className="pl-4 pr-1 text-xl text-[#736C63] font-serif font-bold">₹</span>
            <input
              type="number"
              step="1000"
              min="1000"
              max="500000"
              aria-label="Monthly deposit amount"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(Number(e.target.value) || 0)}
              className="w-full text-center font-serif text-2xl sm:text-3xl font-bold text-[#141210] py-2 bg-transparent focus:outline-none"
            />
            <div className="flex flex-col border-l border-[#D7B46A]/40 bg-white">
              <button
                type="button"
                onClick={() => handleStep(1000)}
                className="p-1.5 hover:bg-[#FAF6EE] text-[#8C1B22] transition-colors border-b border-[#D7B46A]/40 cursor-pointer"
                title="Increase by ₹1,000"
                aria-label="Increase amount"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleStep(-1000)}
                className="p-1.5 hover:bg-[#FAF6EE] text-[#8C1B22] transition-colors cursor-pointer"
                title="Decrease by ₹1,000"
                aria-label="Decrease amount"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <span className="text-[11px] text-[#736C63] block font-light">
            in my Suvarna Vruddhi Jewel Bank account
          </span>
        </div>

        {/* Total Deposited summary */}
        <div className="space-y-2 text-center p-4 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs">
          <span className="text-xs font-sans text-[#736C63] block font-light">
            Your total deposited amount (11 months)
          </span>
          <div className="bg-[#FAF6EE] border border-[#E8E3D8] py-2.5 px-4 max-w-xs mx-auto rounded-xs">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#141210] tracking-wide">
              ₹{customerTotal.toLocaleString('en-IN')}
            </span>
          </div>
          <span className="text-[11px] text-[#736C63] block font-light">
            11 monthly installments deposited by you
          </span>
        </div>
      </div>

      {/* Result Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 relative z-10">
        <div className="p-4 bg-[#FAF6EE] border border-[#E8E3D8] rounded-xs text-center space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#736C63] block">
            Your Investment
          </span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-[#141210] block">
            ₹{customerTotal.toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-[#736C63]">11 Installments</span>
        </div>

        <div className="p-4 bg-[#8C1B22]/10 border border-[#8C1B22]/30 rounded-xs text-center space-y-1 relative">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#8C1B22] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
            GGJ GIFT
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C1B22] block">
            12th Month Bonus
          </span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-[#8C1B22] block">
            + ₹{ggjContribution.toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-[#8C1B22]/80">Contributed 100% by GGJ</span>
        </div>

        <div className="p-4 bg-gradient-to-br from-[#FAF6EE] to-[#EBD69F]/30 border border-[#D7B46A] rounded-xs text-center space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C1B22] block">
            Total Purchase Power
          </span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-[#8C1B22] block">
            ₹{totalValue.toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-[#736C63]">Full value towards jewellery</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4 border-t border-[#E8E3D8] text-center space-y-3 relative z-10">
        <a
          href={`https://wa.me/919723822916?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-semibold text-xs uppercase tracking-[0.15em] rounded-xs hover:bg-[#1EBE5D] transition-all shadow-md hover:shadow-lg cursor-pointer group"
        >
          <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>Start Scheme via WhatsApp (₹{monthlyAmount.toLocaleString('en-IN')} / mo)</span>
        </a>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#736C63] pt-1">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            No hidden deductions
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            Redeemable on Gold, Diamonds & Polki
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            Trusted across 3 generations
          </span>
        </div>
      </div>
    </div>
  );
}
