import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SchemeCalculator from '../components/SchemeCalculator';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Clock,
  Wrench,
  Flame,
  ArrowRight,
  MessageCircle,
  Gem,
  Coins,
  BadgePercent,
  MapPin,
  Phone
} from 'lucide-react';

export default function ServicesPage() {
  const { t, language } = useLanguage();
  const [selectedMaterial, setSelectedMaterial] = useState('ALL');

  const materials = [
    {
      id: 'POLKI',
      title: 'POLKI & JADAU',
      img: '/images/ggj/polki.webp',
      badge: 'GAEKWAD ROYAL MEENAKARI',
      purity: '22k Gold + Uncut Diamonds',
      description: 'Handcrafted Polki jewellery is the crowning jewel of Gujarat and Baroda’s royal legacy. Every piece features natural uncut diamonds bezel-set in pure 22k gold with intricate Meenakari enamel on the reverse — an intimate secret of master craftsmanship known only to the wearer.',
      features: ['Gaekwad royal court designs', 'Intricate reverse Meenakari enamel', 'Heirloom bridal suites & chokers', 'Custom matching earrings & maang tikka']
    },
    {
      id: 'GOLD',
      title: 'HERITAGE & CONTEMPORARY GOLD',
      img: '/images/ggj/gold.webp',
      badge: '100% BIS HALLMARKED (HUID)',
      purity: '22k Pure Gold (916)',
      description: 'From monumental Gujarati bridal haars and thusi necklaces to lightweight daily bangles and modern chains, we bring together three generations of gold curation under one roof in Vadodara. Every gram is verified with a 6-digit HUID code and instant Karatmeter testing.',
      features: ['Traceable 6-digit HUID marking', 'Instant Karatmeter verification in store', 'Traditional thusi, chudi & bajubandh', 'Lightweight everyday gold collections']
    },
    {
      id: 'DIAMOND',
      title: 'CERTIFIED SOLITAIRES & DIAMONDS',
      img: '/images/ggj/diamond.webp',
      badge: 'GIA & IGI CERTIFIED',
      purity: '18k & 14k Diamond Gold',
      description: 'Hand-selected diamonds evaluated across the four Cs — Cut, Colour, Clarity, and Carat. Whether you seek a bespoke solitaire engagement ring, a wedding necklace set, or modern diamond studs, our certified gemologists guide your selection with complete transparency.',
      features: ['GIA & IGI grading certificates', 'Certified solitaire engagement rings', 'Bespoke bridal diamond suites', 'Competitive pricing with zero inflated margins']
    },
    {
      id: 'SILVER',
      title: '925 STERLING SILVER & POOJA ARTICLES',
      img: '/images/ggj/silver.webp',
      badge: '925 HALLMARKED STERLING',
      purity: '92.5% Pure Silver & 999 Fine Silver',
      description: 'Explore Vadodara’s most comprehensive collection of 925 sterling silver jewellery, sacred pooja articles, kalash, idols, payal, and corporate silver coins. Perfect for festive gifting, wedding giveaways, and sacred family rituals.',
      features: ['Handcrafted pooja thalis, diyas & idols', '925 sterling silver lifestyle jewellery', 'Certified 999 fine silver coins & bars', 'Custom corporate & wedding gifting packaging']
    }
  ];

  const atelierServices = [
    {
      icon: <Flame className="w-5 h-5 text-[#8C1B22]" />,
      title: 'Piercing Services',
      desc: 'Gentle, sterile ear and nose piercing for kids and adults, performed with surgical care and authentic 22k gold or 925 silver studs.',
      actionText: 'Book Piercing Session'
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#8C1B22]" />,
      title: 'Repairing & Polishing',
      desc: 'Give your beloved family heirlooms a second life. Precision ultrasonic cleaning, stone tightening, re-stringing, and royal enamel touch-ups.',
      actionText: 'Request Repair Estimate'
    },
    {
      icon: <Gem className="w-5 h-5 text-[#8C1B22]" />,
      title: 'Customisation & Bespoke Atelier',
      desc: 'Have a particular design or heirloom redesign in mind? Sit with our master karigars to craft bespoke jewellery tailored to your vision.',
      actionText: 'Consult Designer'
    },
    {
      icon: <Coins className="w-5 h-5 text-[#8C1B22]" />,
      title: 'Old Gold Exchange',
      desc: 'Bring your existing gold from any jeweller. We test it transparently in front of your eyes on our Karatmeter and credit its full value.',
      actionText: 'Learn Exchange Terms'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#8C1B22]" />,
      title: 'Gold & Diamond Guidance',
      desc: 'Understand purity, HUID tracking, diamond cut grades, and market value before you make an investment. Impartial, honest family guidance.',
      actionText: 'Ask Gemologist'
    },
    {
      icon: <BadgePercent className="w-5 h-5 text-[#8C1B22]" />,
      title: 'Cash for Old Gold',
      desc: 'Turn your old gold into cash with immediate transparent valuation. Assessed with Karatmeter accuracy and legal documentation.',
      actionText: 'Instant Valuation'
    }
  ];

  const filteredMaterials = selectedMaterial === 'ALL'
    ? materials
    : materials.filter(m => m.id === selectedMaterial);

  return (
    <div className="pt-24 sm:pt-28">
      {/* Page Header */}
      <section className="bg-[#FAF6EE] py-14 sm:py-20 border-b border-[#E8E3D8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8C1B22]/10 border border-[#8C1B22]/20 rounded-full text-[#8C1B22] text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vadodara Atelier & Showroom</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#141210]">
            Jewellery & Services
          </h1>
          <p className="text-sm sm:text-base text-[#736C63] font-light max-w-2xl mx-auto leading-relaxed">
            From everyday gold jewellery to certified solitaires, royal Polki, and sacred silver, we bring together Vadodara’s most comprehensive jewellery collections and atelier services under one roof.
          </p>
        </div>
      </section>

      {/* Material Filter Tabs */}
      <section className="sticky top-[72px] sm:top-[80px] z-20 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E3D8] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 overflow-x-auto">
          {['ALL', 'POLKI', 'GOLD', 'DIAMOND', 'SILVER'].map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedMaterial(cat)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                selectedMaterial === cat
                  ? 'bg-[#8C1B22] text-white shadow-xs'
                  : 'bg-white border border-[#E8E3D8] text-[#736C63] hover:border-[#D7B46A]'
              }`}
            >
              {cat === 'ALL' ? 'All Collections' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Detailed Material Showcase */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredMaterials.map((mat, idx) => (
            <div
              key={mat.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-10 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`relative aspect-4/3 overflow-hidden rounded-xs bg-[#F2ECE1] border border-[#E8E3D8] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={mat.img}
                  alt={mat.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm text-[#D7B46A] px-3 py-1 rounded-xs text-[10px] font-semibold tracking-widest uppercase">
                  {mat.badge}
                </div>
              </div>

              {/* Text side */}
              <div className={`space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#8C1B22]">
                    {mat.purity}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#141210]">
                    {mat.title}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#736C63] leading-relaxed font-light">
                  {mat.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8E3D8]">
                  {mat.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#2B2825]">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20am%20interested%20in%20viewing%20your%20collection."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#8C1B22] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#6D141A] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#E8E3D8] text-[#141210] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#FAF6EE] transition-colors"
                  >
                    <span>Visit Showroom</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11+1 SUVARNA VRUDDHI YOJANA SECTION */}
      <section id="suvarna-vruddhi" className="py-20 bg-[#FAF6EE] border-t border-[#E8E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C1B22]">
              Official Savings Scheme
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#141210]">
              11 + 1 Suvarna Vruddhi Yojana
            </h2>
            <p className="text-xs sm:text-sm text-[#736C63] font-light leading-relaxed">
              Pay for 11 months. GGJ adds the 12th month installment on your behalf. Turn steady monthly savings into your dream bridal, polki, or gold jewellery.
            </p>
          </div>

          <SchemeCalculator />
        </div>
      </section>

      {/* CRAFTSMANSHIP & CARE (ATELIER SERVICES) */}
      <section className="py-20 bg-[#FDFBF7] border-t border-[#E8E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C1B22]">
              In-House Atelier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141210]">
              Craftsmanship & Care
            </h2>
            <p className="text-xs sm:text-sm text-[#736C63] font-light">
              From precision piercing to bespoke karigar design, we provide comprehensive jewellery care in Vadodara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atelierServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs hover:border-[#D7B46A] transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EE] border border-[#E8E3D8] flex items-center justify-center">
                    {srv.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#141210]">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#736C63] leading-relaxed font-light">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E3D8]">
                  <a
                    href={`https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(srv.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C1B22] hover:text-[#6D141A]"
                  >
                    <span>{srv.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="py-16 bg-[#141210] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal">
            Visit Gandevikar Jewellers - Girishbhai
          </h2>
          <p className="text-xs sm:text-sm text-[#A89F91] max-w-xl mx-auto font-light">
            Jetalpur Road Char Rasta, Opp. Kashi Vishweshwar Temple, Anand Nagar, Alkapuri, Vadodara.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw!18m1!1e1?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C1B22] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#6D141A] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
            <a
              href="tel:+919925579633"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Concierge: 99255 79633</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
