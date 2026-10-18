import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  ShoppingBag,
  Send,
  Truck,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  MapPin,
  Heart
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function AmyaPage() {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      icon: <InstagramIcon className="w-6 h-6 text-[#8C1B22]" />,
      title: 'BROWSE ON INSTAGRAM',
      desc: 'Explore daily curations, reel drops, and modern stackables on our official handle @amya.ggj. Mix and stack pieces your way.'
    },
    {
      num: '02',
      icon: <Send className="w-6 h-6 text-[#8C1B22]" />,
      title: 'DM TO ORDER',
      desc: 'Found a piece you love? Send us a direct message on Instagram with your chosen screenshot to place an instant bespoke order.'
    },
    {
      num: '03',
      icon: <Truck className="w-6 h-6 text-[#8C1B22]" />,
      title: 'GET IT DELIVERED',
      desc: 'Enjoy fully insured, safe doorstep delivery across India, packaged in AMYA signature velvet presentation boxes.'
    }
  ];

  const lookbook = [
    {
      img: '/images/amya/1.webp',
      title: 'Minimalist 18K Gold Layering Chains',
      subtitle: 'Everyday Elegance • @amya.ggj',
      tag: 'BESTSELLER'
    },
    {
      img: '/images/amya/2.webp',
      title: 'Solitaire Stacking Bands',
      subtitle: 'Modern everyday wear • 925 Sterling',
      tag: 'NEW DROP'
    },
    {
      img: '/images/amya/3.webp',
      title: 'Rose Gold & Diamond Accent Rings',
      subtitle: 'Contemporary luxury stackables',
      tag: 'SIGNATURE'
    },
    {
      img: '/images/amya/4.webp',
      title: 'Modern Enamel & 22k Gold Drops',
      subtitle: 'Subtle pop of artisan color',
      tag: 'LIMITED'
    },
    {
      img: '/images/amya/5.webp',
      title: 'Statement Minimalist Chokers',
      subtitle: 'Day-to-evening seamless style',
      tag: 'TRENDING'
    },
    {
      img: '/images/amya/6.webp',
      title: 'AMYA Contemporary Atelier Curations',
      subtitle: 'By Girishbhai Gandevikar Jewellers',
      tag: 'HEIRLOOM'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28">
      {/* AMYA Hero Banner */}
      <section className="relative bg-[#141210] text-white py-20 sm:py-28 overflow-hidden">
        {/* Ambient background image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/images/bg.webp"
            alt="AMYA Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#141210]/60 to-[#141210] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D7B46A]/20 border border-[#D7B46A]/40 text-[#EBD69F] text-[11px] font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D7B46A]" />
            <span>Contemporary Expression of Girishbhai Gandevikar</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide text-white">
            Jewellery for now.
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#E8E3D8]/90 font-light leading-relaxed">
            Amya is the contemporary expression from the house of Girishbhai Gandevikar Jewellers — 925 silver and modern lightweight jewellery made for everyday, and for the people who wear it.
          </p>

          <p className="text-xs text-[#D7B46A] tracking-wider uppercase font-medium">
            Explore Amya on Instagram. Order online. Enjoy it at your doorstep — from a century-young jeweller.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/amya.ggj/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#8C1B22] to-[#B82B33] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:opacity-95 transition-all shadow-lg"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow & Order (@amya.ggj)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3-STEP SEAMLESS ORDERING PROCESS */}
      <section className="py-20 bg-[#FAF6EE] border-b border-[#E8E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C1B22]">
              How To Order
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141210]">
              Everyday Luxury Delivered
            </h2>
            <p className="text-xs sm:text-sm text-[#736C63] font-light">
              Simple, seamless steps from social discovery to doorstep delivery across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs relative space-y-4 hover:border-[#D7B46A] transition-colors"
              >
                <div className="font-serif text-4xl font-bold text-[#E8E3D8] absolute top-6 right-6">
                  {st.num}
                </div>
                <div className="w-12 h-12 rounded-full bg-[#FAF6EE] border border-[#E8E3D8] flex items-center justify-center">
                  {st.icon}
                </div>
                <h3 className="font-serif text-xl font-bold tracking-wider uppercase text-[#141210]">
                  {st.title}
                </h3>
                <p className="text-xs text-[#736C63] leading-relaxed font-light">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/amya.ggj/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#8C1B22] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-[#6D141A] transition-colors shadow-sm"
            >
              <span>Explore Curations on Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* AMYA LOOKBOOK GALLERY */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C1B22]">
                Instagram Lookbook
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141210]">
                To Shop • @amya.ggj
              </h2>
            </div>
            <a
              href="https://www.instagram.com/amya.ggj/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C1B22] hover:text-[#6D141A]"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>View @amya.ggj on Instagram</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {lookbook.map((item, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/amya.ggj/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-[#E8E3D8] rounded-xs overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-[#F2ECE1]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-[#D7B46A] px-2.5 py-0.5 rounded-xs text-[9px] font-bold tracking-widest uppercase">
                    {item.tag}
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 text-xs font-medium uppercase tracking-wider">
                    <ShoppingBag className="w-4 h-4" />
                    <span>DM to Order</span>
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="font-serif text-lg font-medium text-[#141210] group-hover:text-[#8C1B22] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#736C63] font-light">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-14 bg-[#FAF6EE] border-t border-[#E8E3D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <ShieldCheck className="w-6 h-6 text-[#8C1B22] mx-auto mb-2" />
            <h4 className="font-serif text-lg font-bold text-[#141210]">925 Sterling Silver</h4>
            <p className="text-xs text-[#736C63]">Hallmarked purity crafted for everyday durability.</p>
          </div>
          <div className="space-y-1">
            <Truck className="w-6 h-6 text-[#8C1B22] mx-auto mb-2" />
            <h4 className="font-serif text-lg font-bold text-[#141210]">Insured Pan-India Shipping</h4>
            <p className="text-xs text-[#736C63]">100% transit insurance directly to your doorstep.</p>
          </div>
          <div className="space-y-1">
            <Sparkles className="w-6 h-6 text-[#8C1B22] mx-auto mb-2" />
            <h4 className="font-serif text-lg font-bold text-[#141210]">Signature Velvet Packaging</h4>
            <p className="text-xs text-[#736C63]">Ready for personal luxury or thoughtful gifting.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
