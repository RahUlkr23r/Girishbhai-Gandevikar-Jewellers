import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  ChevronDown,
  Search,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Coins,
  Gem,
  Award,
  MessageCircle,
  Phone
} from 'lucide-react';

export default function FaqPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const faqData = [
    // General
    {
      id: 'gen-1',
      category: 'GENERAL',
      question: 'What is Girishbhai Gandevikar Jewellers (GGJ) and where is it located?',
      answer: 'Girishbhai Gandevikar Jewellers is a trusted heritage jewellery house in Vadodara offering gold, diamond, bridal, and 925 silver jewellery since 1927. Our flagship 3-storey showroom is located at Jetalpur Road Char Rasta, opposite Kashi Vishweshwar Temple, Anand Nagar, Alkapuri, Vadodara, Gujarat 390007.'
    },
    {
      id: 'gen-2',
      category: 'GENERAL',
      question: 'What collections and jewellery types do you offer?',
      answer: 'GGJ offers gold, diamond, bridal, and silver jewellery in a range of traditional and contemporary designs. Our collections include wedding haars, engagement rings, everyday wear, festive ornaments (thusi, bajubandh, chudi), corporate gifts, and modern stackables via our AMYA silver line.'
    },
    {
      id: 'gen-3',
      category: 'GENERAL',
      question: 'Do you offer bespoke jewellery customisation?',
      answer: 'Yes. Girishbhai Gandevikar Jewellers offers bespoke jewellery customisation. Depending on your preferences, you can sit with our jewellery designers and master karigars to modify designs, dimensions, gemstones, gold purities, and personalized engravings.'
    },

    // Hallmarking & Karatmeter
    {
      id: 'hall-1',
      category: 'HALLMARKING',
      question: 'What is BIS Hallmarking and does GGJ provide HUID on gold?',
      answer: 'BIS hallmarking is the official certification of precious-metal purity by the Bureau of Indian Standards. Every piece of gold jewellery at Girishbhai Gandevikar Jewellers carries the BIS Standard Mark, fineness mark (e.g. 22K 916), and a unique 6-digit alphanumeric HUID (Hallmark Unique Identification).'
    },
    {
      id: 'hall-2',
      category: 'HALLMARKING',
      question: 'How can I verify the HUID of gold jewellery purchased from GGJ?',
      answer: 'You can verify the HUID using the official "BIS Care" mobile app. Simply navigate to the "Verify HUID" feature and type the 6-digit alphanumeric code stamped on your jewellery piece. The app will confirm the jeweller registration, assaying center, and purity.'
    },
    {
      id: 'hall-3',
      category: 'HALLMARKING',
      question: 'What is a Karatmeter and how does GGJ use it?',
      answer: 'A Karatmeter is an advanced non-destructive X-ray fluorescence (XRF) machine that accurately determines the exact elemental purity of gold in seconds. GGJ was the first jeweller in Vadodara to introduce the Karatmeter for customers, allowing you to see the exact karat purity of your gold tested right before your eyes with zero guesswork.'
    },

    // Old Gold Exchange
    {
      id: 'gold-1',
      category: 'EXCHANGE',
      question: 'Can I exchange old gold jewellery towards new purchases?',
      answer: 'Yes. GGJ accepts eligible old gold jewellery for exchange. Your gold is tested transparently on our in-store Karatmeter in front of you. Its net weight and purity are measured to establish the exact gold value, which is then credited 100% towards your new jewellery.'
    },
    {
      id: 'gold-2',
      category: 'EXCHANGE',
      question: 'Can I exchange gold jewellery purchased from another jeweller or unhallmarked gold?',
      answer: 'Yes. Gold jewellery purchased from any other jeweller, as well as vintage unhallmarked gold or broken ornaments, can be evaluated for exchange. The valuation is based strictly on the tested gold content and purity rather than the original condition or place of purchase.'
    },
    {
      id: 'gold-3',
      category: 'EXCHANGE',
      question: 'Can I sell my old gold for immediate cash?',
      answer: 'Yes. Girishbhai Gandevikar Jewellers evaluates eligible old gold jewellery for cash purchase, subject to legal verification and identity documentation. The valuation is transparently calculated based on current market rates and verified purity.'
    },

    // Bridal & Diamonds
    {
      id: 'bridal-1',
      category: 'BRIDAL',
      question: 'Does GGJ provide certification for diamond jewellery?',
      answer: 'Yes. GGJ provides authentic certification from recognized diamond grading laboratories (such as GIA and IGI) for eligible diamond jewellery and solitaires, documenting the exact Cut, Colour, Clarity, and Carat weight.'
    },
    {
      id: 'bridal-2',
      category: 'BRIDAL',
      question: 'How do I plan a bridal jewellery suite for my wedding?',
      answer: 'We recommend starting with your wedding outfits, ceremony timeline (Mehendi, Sangeet, Wedding, Reception), personal style, and budget. Our senior bridal specialists assist you in curating function-by-function suites — balancing statement heirloom pieces with versatile items you can re-wear for decades.'
    },
    {
      id: 'bridal-3',
      category: 'BRIDAL',
      question: 'What is royal Meenakari and why is it unique to GGJ?',
      answer: 'Meenakari is the ancient royal art of enamelling gold with vibrant mineral pigments. Stemming from Late Shri Laxmanrao Gandevikar’s service to the Gaekwad Royal Court, GGJ preserves authentic reverse-enamel techniques on Polki necklaces, creating timeless collector pieces.'
    },

    // Legacy & Silver
    {
      id: 'leg-1',
      category: 'LEGACY',
      question: 'What is the history of the Gandevikar name in Vadodara?',
      answer: 'Girishbhai Gandevikar Jewellers traces its legacy back to 1927 and is the pioneering Gandevikar jewellery house in Vadodara, founded by Late Shri Laxmanrao Mahadevrao Gandevikar ("Shethji"). Over the decades, other family branches have also operated in the city, but Girishbhai Gandevikar Jewellers continues the original founding Gaekwad royal legacy, currently operating from our flagship on Jetalpur Road Char Rasta.'
    },
    {
      id: 'leg-2',
      category: 'LEGACY',
      question: 'Does GGJ offer 925 sterling silver pooja articles and gifts?',
      answer: 'Yes. GGJ offers 925 sterling silver pooja thalis, diyas, sacred idols, silver coins (999 pure), payal, and contemporary everyday silver through the AMYA collection. All silver articles are hallmarked for verified fineness.'
    }
  ];

  const categories = [
    { id: 'ALL', label: 'All Questions' },
    { id: 'GENERAL', label: 'General & Showroom' },
    { id: 'HALLMARKING', label: 'BIS Hallmarking & Karatmeter' },
    { id: 'EXCHANGE', label: 'Old Gold Exchange & Cash' },
    { id: 'BRIDAL', label: 'Bridal & Certified Diamonds' },
    { id: 'LEGACY', label: 'The Gandevikar Legacy & Silver' }
  ];

  const filteredFaqs = faqData.filter(item => {
    const matchesCat = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28">
      {/* Header */}
      <section className="bg-[#FAF6EE] py-16 sm:py-20 border-b border-[#E8E3D8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8C1B22]/10 border border-[#8C1B22]/20 rounded-full text-[#8C1B22] text-[11px] font-semibold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparency & Clarity</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#141210]">
            Frequently Asked Questions
          </h1>

          <p className="text-sm sm:text-base text-[#736C63] font-light max-w-2xl mx-auto leading-relaxed">
            All your questions answered: 100% BIS Hallmarking, HUID verification, Karatmeter testing, bridal consultation, old gold exchange, and the 100-year Gandevikar legacy.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search gold purity, Karatmeter, bridal, AMYA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8E3D8] rounded-xs text-xs text-[#141210] placeholder:text-[#736C63]/60 focus:outline-none focus:border-[#8C1B22] shadow-2xs transition-colors"
              />
              <Search className="w-4 h-4 text-[#736C63] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 bg-[#FDFBF7] border-b border-[#E8E3D8] sticky top-[72px] sm:top-[80px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 overflow-x-auto">
          {categories.map(c => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === c.id
                  ? 'bg-[#8C1B22] text-white shadow-xs'
                  : 'bg-white border border-[#E8E3D8] text-[#736C63] hover:border-[#D7B46A]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <p className="text-sm text-[#736C63]">No questions found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('ALL'); }}
                className="text-xs text-[#8C1B22] font-semibold uppercase tracking-wider underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-[#E8E3D8] rounded-xs overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#FAF6EE]/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl font-semibold text-[#141210] pr-2">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8C1B22] shrink-0 transition-transform duration-200 mt-1 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#736C63] leading-relaxed border-t border-[#E8E3D8]/50 bg-[#FAF6EE]/30 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-[#141210] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium">
            Have a Specific Question About Your Jewellery?
          </h2>
          <p className="text-xs sm:text-sm text-[#A89F91] max-w-xl mx-auto font-light leading-relaxed">
            Our family and senior gemologists are always happy to discuss gold purity, custom bridal suites, and scheme enrollment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <a
              href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20have%20a%20question%20regarding%20jewellery."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href="tel:+919925579633"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C1B22] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#6D141A] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Concierge (+91 99255 79633)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
