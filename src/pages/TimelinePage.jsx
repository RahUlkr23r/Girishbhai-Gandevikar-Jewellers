import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Award,
  ShieldCheck,
  Eye,
  Hammer,
  Compass,
  HeartHandshake,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight
} from 'lucide-react';

export default function TimelinePage() {
  const { t, language } = useLanguage();

  const milestones = [
    {
      year: '1927',
      phase: 'Where it began',
      title: 'Late Shri Laxmanrao Mahadevrao Gandevikar — Dearly called Shethji',
      desc: 'A jeweller, a karigar. A man who worked with his hands and built his reputation through the quality of his work. His craft and integrity took him to the Gaekwad Royal Dynasty, where he served as their personal goldsmith.',
      img: '/images/timeline_1927.webp',
      badge: 'ROYAL BARODA GOLDSMITH'
    },
    {
      year: '1975',
      phase: 'From workshop to shop',
      title: 'Girishbhai, along with family, takes the business forward',
      desc: "For the second generation, it began with their father's 10'x10' workshop. A little display beside the workbench was added. The display became a shop. The shop grew. And slowly, the workshop found its place in the lives of more families in Vadodara. The business grew, but the way of doing business stayed the same.",
      img: '/images/timeline_1975.webp',
      badge: 'GROWTH WITH UNCHANGED VALUES',
      extraImg: '/images/bill.webp'
    },
    {
      year: 'Mid 2000s',
      phase: 'Before it became a norm',
      title: 'First in Vadodara to introduce the Karatmeter',
      desc: 'GGJ was the first jeweller in Vadodara to introduce the Karatmeter for customers, allowing them to see the purity of their gold tested right in front of them — reinforcing a principle we had always believed in: transparency without asking you to simply trust our word.',
      img: '/images/timeline_mid2000s.webp',
      badge: 'FIRST KARATMETER IN VADODARA'
    },
    {
      year: '2014',
      phase: 'A new home on Jetalpur Road',
      title: '3-Storey Landmark Showroom at Jetalpur Road Char Rasta',
      desc: 'By 2014, the little workshop that started it all had travelled quite a distance. GGJ opened a new 3 storey showroom at Jetalpur Road Char Rasta, bringing gold, silver, diamond, gemstones and platinum jewellery together under one roof. The address changed. The values didn’t.',
      img: '/images/showroom.webp',
      badge: 'JETALPUR ROAD CHAR RASTA'
    },
    {
      year: '2024+',
      phase: 'A new chapter • Centennial Legacy',
      title: 'Third generation takes the journey forward',
      desc: 'As we complete 100 years, the journey continues with the third generation carrying the legacy forward, while making it relevant to the way families live today. Thanks to the trust of generations of Vadodara families, GGJ is moving into a new showroom on Jetalpur Road — nearly twice the size of our current store. A contemporary space, shaped around the evolving needs and sensibilities of a new generation.',
      img: '/images/store.webp',
      badge: 'NEXT-GENERATION FLAGSHIP'
    }
  ];

  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#8C1B22]" />,
      title: 'Purity',
      tagline: 'A standard we have always believed in.',
      desc: 'Pure gold has never been a selling point for us. It has simply been the standard.'
    },
    {
      icon: <Eye className="w-6 h-6 text-[#8C1B22]" />,
      title: 'Transparency',
      tagline: 'Nothing hidden. Nothing assumed.',
      desc: 'From testing gold in front of you to explaining what you are buying, we believe you should know exactly what you are paying for.'
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#8C1B22]" />,
      title: 'Craftsmanship',
      tagline: 'Knowledge passed from hand to hand.',
      desc: 'Generations of working with gold have taught us to respect the craft — and the people who practise it.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#8C1B22]" />,
      title: 'Curation',
      tagline: 'A wider India, thoughtfully brought together.',
      desc: 'From traditional jewellery traditions across the country to contemporary designs, our collection is carefully chosen for the way Indian families live and celebrate today.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#8C1B22]" />,
      title: 'Guidance',
      tagline: 'Jewellery is personal. Choosing it should be too.',
      desc: 'Whether it is your first piece or something you are buying for the next generation, we take the time to understand what you are looking for.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#8C1B22]" />,
      title: 'Care',
      tagline: 'The relationship does not end at the purchase.',
      desc: 'We want the experience of owning jewellery to be as reassuring as the moment you choose it.'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28">
      {/* Page Header */}
      <section className="bg-[#FAF6EE] py-16 sm:py-24 border-b border-[#E8E3D8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8C1B22]/10 border border-[#8C1B22]/20 rounded-full text-[#8C1B22] text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>1927 – 2026 • Gaekwad Royal Court to Modern Landmark</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#141210]">
            Our 100-Year Heritage Timeline
          </h1>
          <p className="text-sm sm:text-base text-[#736C63] font-light max-w-2xl mx-auto leading-relaxed">
            From Late Shri Laxmanrao Mahadevrao Gandevikar serving the Gaekwad Royal Dynasty to the third generation building a new flagship showroom on Jetalpur Road — discover the hundred-year journey of trust.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#FDFBF7] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-[#D7B46A]/50 pl-6 sm:pl-10 space-y-16 sm:space-y-24 ml-2 sm:ml-6">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#8C1B22] border-4 border-[#FDFBF7] shadow-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Milestone Card */}
                <div className="bg-white border border-[#E8E3D8] rounded-xs shadow-2xs p-6 sm:p-8 space-y-5 hover:border-[#D7B46A] transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E3D8] pb-3">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#8C1B22]">
                      {ms.year}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#FAF6EE] text-[#141210] border border-[#E8E3D8] rounded-xs">
                      {ms.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#736C63]">
                      {ms.phase}
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#141210]">
                      {ms.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#736C63] leading-relaxed font-light">
                      {ms.desc}
                    </p>
                  </div>

                  {/* Imagery */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="aspect-16/10 rounded-xs overflow-hidden bg-[#FAF6EE] border border-[#E8E3D8]">
                      <img
                        src={ms.img}
                        alt={ms.title}
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {ms.extraImg && (
                      <div className="aspect-16/10 rounded-xs overflow-hidden bg-[#FAF6EE] border border-[#E8E3D8]">
                        <img
                          src={ms.extraImg}
                          alt="Historical GGJ Purchase Bill"
                          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 6 Core Heritage Pillars */}
      <section className="py-20 bg-[#FAF6EE] border-t border-[#E8E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C1B22]">
              Uncompromising Foundations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141210]">
              The Principles That Guide Us
            </h2>
            <p className="text-xs sm:text-sm text-[#736C63] font-light">
              Our legacy is built on unyielding principles of trust, transparency, and personal care across three generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pil, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs space-y-4 hover:border-[#D7B46A] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF6EE] border border-[#E8E3D8] flex items-center justify-center">
                  {pil.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#141210]">
                    {pil.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C1B22] tracking-wider mt-1">
                    {pil.tagline}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#736C63] leading-relaxed font-light">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Invitation */}
      <section className="py-16 bg-[#141210] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal">
            Experience 100 Years of Craftsmanship
          </h2>
          <p className="text-xs sm:text-sm text-[#A89F91] max-w-xl mx-auto font-light leading-relaxed">
            Visit our 3-storey showroom at Jetalpur Road Char Rasta, opp. Kashi Vishweshwar Temple, Alkapuri, Vadodara, Gujarat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw!18m1!1e1?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#8C1B22] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#6D141A] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
            <a
              href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
