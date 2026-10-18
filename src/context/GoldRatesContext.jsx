import React, { createContext, useContext, useState } from 'react';

const defaultRates = [
  {
    id: "1",
    purity: "91.6% Pure Gold",
    karat: "22K BIS Hallmarked",
    price: 134650,
    unit: "10 grams",
    description: "Ideal for bridal, traditional haars & heritage jewellery",
    badge: "MOST POPULAR",
    badgeColor: "bg-[#8C1B22]/10 text-[#8C1B22] border-[#8C1B22]/30",
    status: "active",
    huidCertified: true
  },
  {
    id: "2",
    purity: "99.9% Pure Gold",
    karat: "24K Fine Gold",
    price: 147184,
    unit: "10 grams",
    description: "Pure gold coins, bars & investment bullion",
    badge: "99.9% PURE",
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/30",
    status: "active",
    huidCertified: true
  },
  {
    id: "3",
    purity: "75.0% Pure Gold",
    karat: "18K Diamond Gold",
    price: 111550,
    unit: "10 grams",
    description: "Perfect for solitaire setting & lifestyle diamond pieces",
    badge: "LIFESTYLE",
    badgeColor: "bg-stone-500/10 text-stone-700 border-stone-500/30",
    status: "active",
    huidCertified: true
  },
  {
    id: "4",
    purity: "Silver Ornaments",
    karat: "Silver Ornament",
    price: 217815,
    unit: "1 kg",
    description: "Pooja articles, silverware, payal & lifestyle silver",
    badge: "999 PURE",
    badgeColor: "bg-slate-500/10 text-slate-700 border-slate-500/30",
    status: "active",
    huidCertified: true
  }
];

const GoldRatesContext = createContext();

export function GoldRatesProvider({ children }) {
  const [rates] = useState(defaultRates);
  const [isRatesOpen, setIsRatesOpen] = useState(false);
  const [lastUpdated] = useState("Today, Vadodara Bullion Market");

  const openRates = () => setIsRatesOpen(true);
  const closeRates = () => setIsRatesOpen(false);

  return (
    <GoldRatesContext.Provider
      value={{
        rates,
        isRatesOpen,
        openRates,
        closeRates,
        lastUpdated
      }}
    >
      {children}
    </GoldRatesContext.Provider>
  );
}

export function useGoldRates() {
  const context = useContext(GoldRatesContext);
  if (!context) {
    throw new Error('useGoldRates must be used within a GoldRatesProvider');
  }
  return context;
}
