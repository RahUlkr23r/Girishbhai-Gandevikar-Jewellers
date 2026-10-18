import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useGoldRates } from '../context/GoldRatesContext';
import SchemeCalculator from '../components/SchemeCalculator';
import CursorGlow from '../components/ui/CursorGlow';
import TiltCard from '../components/ui/TiltCard';
import Carousel from '../components/ui/Carousel';
import Marquee from '../components/ui/Marquee';
import { useParallax } from '../hooks/useParallax';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Compass,
} from 'lucide-react';

export default function HomePage() {
  const { t, language } = useLanguage();
  const { openRates } = useGoldRates();
  const reduce = useReducedMotion();

  // Hero parallax (scroll-linked with Framer Motion)
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroVideoY = useTransform(heroProgress, [0, 1], ['0%', '18%']);
  const heroContentY = useTransform(heroProgress, [0, 1], ['0%', '35%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  // Section-level parallax (lightweight hook)
  const philosophyImageRef = useParallax(0.12);
  const philosophyBgRef = useParallax(0.08);
  const schemeBgRef = useParallax(0.1);
  const showroomRef = useParallax(0.15);

  const categories = [
    { nameKey: 'cat.wedding', defaultName: 'Wedding', img: '/images/ggj/wedding.webp', desc: 'Regal bridal suites, choker haars & royal Meenakari sets.' },
    { nameKey: 'cat.engagement', defaultName: 'Engagement', img: '/images/ggj/engagement.webp', desc: 'GIA certified solitaire rings & diamond bands.' },
    { nameKey: 'cat.everyday', defaultName: 'Everyday', img: '/images/ggj/Everyday.webp', desc: 'Lightweight gold & 925 silver pieces for daily grace.' },
    { nameKey: 'cat.festive', defaultName: 'Festive', img: '/images/ggj/Festive.webp', desc: 'Antique Gujarati thusi, bajubandh & temple ornaments.' },
    { nameKey: 'cat.weddingGifting', defaultName: 'Wedding Gifting', img: '/images/ggj/weddinggift.webp', desc: 'Memorable coins, bracelets & bridal gifts.' },
    { nameKey: 'cat.corporateGifting', defaultName: 'Corporate Gifting', img: '/images/ggj/corporategifting.webp', desc: 'Custom silver coins, pooja articles & luxury tokens.' },
    { nameKey: 'cat.custom', defaultName: 'Custom', img: '/images/ggj/custom.webp', desc: 'One-of-a-kind bespoke creations crafted to your vision.' },
    { nameKey: 'cat.mens', defaultName: "Men's", img: '/images/ggj/mens.webp', desc: 'Solid 22k gold kadas, rings & regal chains.' },
  ];

  const materialHighlights = [
    { title: 'POLKI', img: '/images/ggj/polki.webp', desc: 'Uncut diamond polki set in 22k gold with royal Meenakari enamel reverse.' },
    { title: 'GOLD', img: '/images/ggj/gold.webp', desc: '100% BIS Hallmarked 22k gold with 6-digit HUID and Karatmeter verification.' },
    { title: 'DIAMOND', img: '/images/ggj/diamond.webp', desc: 'Ethically sourced, GIA-certified solitaire diamonds with flawless brilliance.' },
    { title: 'SILVER', img: '/images/ggj/silver.webp', desc: '925 sterling silver everyday lifestyle jewellery and sacred pooja heirlooms.' },
  ];

  const reviewsPreview = [
    { name: 'Hardik Patel', text: 'Purchased our bridal Meenakari sets from here. Purity of 22k gold is 100% verified with hallmark certificates. The family hospitality makes you feel so welcomed.', rating: 5, type: 'Bridal Shopping' },
    { name: 'Divya Goel', text: 'I had a fantastic experience with Girishbhai Gandevikar Jewellers. I am based in the USA and needed jewelry for the family — their responsiveness, speed, and guidance were extraordinary.', rating: 5, type: 'International Patron (USA)' },
    { name: 'Purohit Mansi Rajendrakumar', text: 'The experience I shared with my family was exceptional. Our ideas and requests were respectfully met and I got my engagement shopping done with such ease and delight.', rating: 5, type: 'Engagement Jewellery' },
  ];

  return (
    <div className="pt-24 sm:pt-28 relative">
      {/* Global cursor aura — desktop only */}
      <CursorGlow />

      {/* =========================================
          1. HERO — video parallax + content drift
          ========================================= */}
      <section
        ref={heroRef}
        className="relative w-full h-[88vh] min-h-[580px] max-h-[900px] overflow-hidden bg-[#141210] flex items-center justify-center text-white"
      >
        {/* Parallax video layer */}
        <motion.div
          style={{ y: reduce ? 0 : heroVideoY }}
          className="absolute inset-0 will-change-transform"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none scale-110"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero_poster.webp"
            aria-label="Girishbhai Gandevikar Jewellers — Heritage Bridal Showcase"
          >
            <source src="/images/download.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-[#141210]/80 pointer-events-none" />

        {/* Floating gold particles (decorative) */}
        {!reduce && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-[#D7B46A]"
                style={{
                  width: 3 + (i % 3),
                  height: 3 + (i % 3),
                  left: `${12 + i * 15}%`,
                  top: `${20 + (i % 4) * 18}%`,
                  opacity: 0.35,
                }}
                animate={{
                  y: [0, -22, 0],
                  opacity: [0.15, 0.55, 0.15],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.7,
                }}
              />
            ))}
          </div>
        )}

        {/* Hero content */}
        <motion.div
          style={{ y: reduce ? 0 : heroContentY, opacity: reduce ? 1 : heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 will-change-transform"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C1B22]/60 border border-[#D7B46A]/50 backdrop-blur-md text-[#EBD69F] text-[11px] font-medium tracking-[0.2em] uppercase shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D7B46A]" />
            <span>GAEKWAD ROYAL DYNASTY GOLDSMITH • SINCE 1927</span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide leading-tight text-white drop-shadow-md"
          >
            {language === 'gu' ? (
              'દરેક પેઢી અને દરેક પ્રસંગ માટેનું ઘરેણું'
            ) : (
              <>
                Jewellery for every Generation <br className="hidden sm:inline" />
                <span className="italic font-light text-[#EBD69F]">and every Occasion</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-[#E8E3D8]/90 font-light tracking-wide leading-relaxed"
          >
            {language === 'gu'
              ? 'એક સદીથી વડોદરાના પરિવારોનો અખૂટ વિશ્વાસ. ૧૦૦% BIS હોલમાર્ક ૨૨ કેરેટ સોનું, ગાયકવાડ મીનાકારી અને GIA હીરા.'
              : 'Vadodara’s most trusted heritage jewellery house for nearly a century. 100% BIS Hallmarked 22k gold, GIA certified diamonds, and bespoke bridal suites.'}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-[#8C1B22] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-[#6D141A] transition-all shadow-lg hover:shadow-xl group hover:-translate-y-0.5"
            >
              <span>{t('common.exploreCollections', 'Explore The Collections')}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-black/40 border border-[#D7B46A]/60 text-[#EBD69F] text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-[#D7B46A]/20 transition-all backdrop-blur-sm hover:-translate-y-0.5"
            >
              <span>{t('common.ourStory', 'Our Story (1927–2026)')}</span>
            </Link>

            <button
              type="button"
              onClick={openRates}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-semibold tracking-[0.15em] uppercase rounded-xs hover:bg-emerald-900/80 transition-all cursor-pointer backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t('nav.todaysRates', "Today's Rates")}</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: reduce ? 1 : heroOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-[#A89F91]"
        >
          <span>SCROLL TO DISCOVER</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#D7B46A] to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Gold rate ticker right after hero */}
      <Marquee speed={40} className="py-3 bg-[#0F0D0B] border-y border-[#D7B46A]/20">
        {[
          '22K GOLD ₹13,465/g',
          '24K GOLD ₹14,718/g',
          '18K GOLD ₹11,155/g',
          'SILVER ₹218/g',
          'HUID 100% BIS HALLMARKED',
          'GIA CERTIFIED DIAMONDS',
          'KARATMETER VERIFIED PURITY',
        ].map((item) => (
          <span
            key={item}
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D7B46A] whitespace-nowrap"
          >
            {item}
            <span className="ml-8 text-[#8C1B22]">◆</span>
          </span>
        ))}
      </Marquee>

      {/* =========================================
          2. HOUSE & PHILOSOPHY — image parallax
          ========================================= */}
      <section className="py-20 sm:py-28 bg-[#FDFBF7] relative overflow-hidden">
        <div
          ref={philosophyBgRef}
          aria-hidden="true"
          className="absolute -top-32 right-[-10%] w-[520px] h-[520px] rounded-full bg-[#D7B46A]/[0.06] blur-3xl pointer-events-none will-change-transform"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual column with parallax + tilt */}
            <div className="relative group">
              <TiltCard maxTilt={6}>
                <div className="relative overflow-hidden rounded-xs border border-[#E8E3D8] shadow-xl">
                  <div ref={philosophyImageRef} className="will-change-transform">
                    <img
                      src="/images/hero_bridal_masterpiece.webp"
                      alt="Girishbhai Gandevikar Heritage Bridal Masterpiece"
                      className="w-full h-[460px] sm:h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D7B46A] mb-1">
                      Gaekwad Royal Heritage
                    </div>
                    <div className="font-serif text-2xl font-medium">
                      Handcrafted Meenakari &amp; Polki Bridal Suite
                    </div>
                  </div>
                </div>
              </TiltCard>

              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#141210] text-white p-5 border border-[#D7B46A] shadow-2xl rounded-xs max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#D7B46A] mb-1">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    3 Generations of Trust
                  </span>
                </div>
                <p className="text-[11px] text-[#A89F91] leading-relaxed">
                  First jewellery house in Vadodara to introduce the Karatmeter for transparent purity verification.
                </p>
              </div>
            </div>

            {/* Narrative column */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 30 }}
              whileInView={reduce ? false : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[#8C1B22] text-xs font-semibold uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-[#8C1B22]" />
                <span>Our Heritage Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141210] leading-tight">
                {t('home.philosophy.heading', 'Jewellery for every Generation & every Occasion')}
              </h2>

              <p className="text-sm sm:text-base text-[#736C63] leading-relaxed font-light">
                {t('home.philosophy.p1', 'For a century now, families in Vadodara have trusted us with their gold, their celebrations and their stories.')}
              </p>
              <p className="text-sm sm:text-base text-[#736C63] leading-relaxed font-light">
                {t('home.philosophy.p2', 'Today, the third generation carries that trust forward, bringing together India’s jewellery traditions with a more contemporary way of experiencing them.')}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#E8E3D8]">
                {[
                  { v: '1927', t: 'Established in Vadodara', s: 'Royal Baroda Gaekwad lineage' },
                  { v: '100%', t: 'BIS Hallmarked with HUID', s: 'Traceable purity guarantee' },
                  { v: '4,065+', t: 'Google Reviews (4.9 ★)', s: 'Loved across generations' },
                  { v: '1st', t: 'Karatmeter in Vadodara', s: 'Zero guesswork gold testing' },
                ].map((stat) => (
                  <div key={stat.v} className="space-y-1">
                    <div className="font-serif text-2xl font-bold text-[#8C1B22]">{stat.v}</div>
                    <div className="text-xs font-medium text-[#141210]">{stat.t}</div>
                    <div className="text-[11px] text-[#736C63]">{stat.s}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/timeline"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#8C1B22] hover:text-[#6D141A] group"
                >
                  <span>Explore The Full 100-Year Timeline</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. OCCASIONS — CAROUSEL
          ========================================= */}
      <section className="py-20 bg-[#FAF6EE] border-y border-[#E8E3D8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C1B22]">
              Curated By Occasion
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#141210]">
              {t('home.moments.title', "Jewellery for Life's Many Moments")}
            </h2>
            <p className="text-xs sm:text-sm text-[#736C63] font-light leading-relaxed">
              {t('home.moments.line1', "Sometimes it’s tradition. Sometimes it’s celebration.")}{' '}
              {t('home.moments.line2', 'Gold, diamonds, polki and silver, find what speaks to you.')}
            </p>
          </motion.div>

          <Carousel
            items={categories}
            perView={{ base: 1, sm: 2, lg: 4 }}
            interval={4500}
            renderItem={(cat) => (
              <TiltCard maxTilt={5}>
                <Link
                  to="/services"
                  className="group relative overflow-hidden bg-white border border-[#E8E3D8] rounded-xs shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F2ECE1]">
                    <img
                      src={cat.img}
                      alt={cat.defaultName}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide">
                        {t(cat.nameKey, cat.defaultName)}
                      </h3>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2">
                    <p className="text-[11px] text-[#736C63] leading-relaxed line-clamp-2 font-light">
                      {cat.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#8C1B22] group-hover:translate-x-1 transition-transform">
                      <span>View Collection</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            )}
          />

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#141210] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-[#8C1B22] transition-colors shadow-sm"
            >
              <span>Explore All Jewellery &amp; Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          4. FOUR PILLARS — staggered + tilt
          ========================================= */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14 space-y-2"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C1B22]">
              Atelier Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141210]">
              Four Pillars of Craftsmanship
            </h2>
            <p className="text-xs sm:text-sm text-[#736C63] font-light">
              Every metal, gemstone, and diamond curated with uncompromising standards of purity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materialHighlights.map((mat, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={reduce ? false : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard maxTilt={6}>
                  <div className="group bg-white border border-[#E8E3D8] rounded-xs overflow-hidden shadow-2xs hover:border-[#D7B46A] transition-all duration-300 h-full">
                    <div className="relative aspect-square overflow-hidden bg-[#F2ECE1]">
                      <img
                        src={mat.img}
                        alt={mat.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#D7B46A] block">
                          GGJ Atelier
                        </span>
                        <h3 className="font-serif text-2xl font-bold tracking-widest uppercase">
                          {mat.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <p className="text-xs text-[#736C63] leading-relaxed font-light">{mat.desc}</p>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#8C1B22] hover:text-[#6D141A]"
                      >
                        <span>Explore {mat.title}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          5. SUVARNA VRUDDHI — parallax backdrop
          ========================================= */}
      <section id="suvarna-vruddhi" className="py-20 bg-[#FAF6EE] border-t border-[#E8E3D8] relative overflow-hidden">
        <div
          ref={schemeBgRef}
          aria-hidden="true"
          className="absolute -bottom-40 left-[-15%] w-[640px] h-[640px] rounded-full bg-[#8C1B22]/[0.04] blur-3xl pointer-events-none will-change-transform"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-12">
            <SchemeCalculator />
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#141210] to-[#242220] text-white p-6 sm:p-8 rounded-sm border border-[#D7B46A]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-5">
              <img
                src="/images/mark.webp"
                alt=""
                className="w-16 h-16 object-contain filter brightness-0 invert hidden sm:block shrink-0"
              />
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D7B46A] font-semibold">
                  Jewel Bank Savings Program
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-medium">
                  Plan Ahead For Weddings &amp; Celebrations With Zero Stress
                </h4>
                <p className="text-xs text-[#A89F91] max-w-xl font-light">
                  Join hundreds of Vadodara families who plan gold investments ahead of time. Monthly flexible payments via UPI, bank transfer, or in-showroom.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <a
                href="https://wa.me/919723822916?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20want%20to%20know%20more%20about%20the%2011%2B1%20Suvarna%20Vruddhi%20Yojana."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
              <Link
                to="/services#suvarna-vruddhi"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/30 text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-white/10 transition-colors"
              >
                <span>Scheme FAQs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. AMYA — image drift + tilt
          ========================================= */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TiltCard maxTilt={4}>
            <div className="bg-[#141210] text-white rounded-sm overflow-hidden border border-[#D7B46A]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-14 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D7B46A]/20 border border-[#D7B46A]/40 rounded-full text-[#EBD69F] text-[10px] tracking-[0.2em] uppercase font-semibold">
                    Contemporary Sub-Brand
                  </div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
                    AMYA <span className="text-[#D7B46A] italic font-light">— Everyday Elegance</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A89F91] leading-relaxed font-light">
                    Amya is the contemporary expression from the house of Girishbhai Gandevikar Jewellers — 925 sterling silver jewellery made for everyday, and for the people who wear it.
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-[#E8E3D8]">
                    {[
                      <>Browse curations on Instagram <strong>@amya.ggj</strong></>,
                      <>Direct Message (DM) to order instantly</>,
                      <>Fully insured safe doorstep delivery across India</>,
                    ].map((line, k) => (
                      <div key={k} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D7B46A]" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    to="/amya"
                    className="px-6 py-3.5 bg-[#8C1B22] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-[#6D141A] transition-colors"
                  >
                    Explore AMYA Lookbook
                  </Link>
                  <a
                    href="https://www.instagram.com/amya.ggj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-white/10 border border-white/20 text-[#EBD69F] text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-white/20 transition-colors"
                  >
                    Order on Instagram (@amya.ggj)
                  </a>
                </div>
              </div>

<div className="relative flex items-center justify-center overflow-hidden bg-stone-900 p-6 sm:p-8 lg:p-10">
  <img
    src="/images/amya.webp"
    alt="AMYA Contemporary Jewellery by Girishbhai Gandevikar"
    className="w-full h-auto max-h-[260px] sm:max-h-[300px] lg:max-h-[360px] object-contain object-center transition-transform duration-700 hover:scale-105"
    loading="lazy"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
</div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* =========================================
          7. REVIEWS — staggered reveal
          ========================================= */}
      <section className="py-20 bg-[#FAF6EE] border-t border-[#E8E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#8C1B22]">
                <Star className="w-4 h-4 fill-current text-[#D7B46A]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                  4,065+ Google Reviews • Rated 4.9/5
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141210]">
                Loved Across Generations
              </h2>
              <p className="text-xs sm:text-sm text-[#736C63] font-light">
                Authentic stories from families and brides who trusted our atelier in Vadodara.
              </p>
            </div>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#8C1B22] hover:text-[#6D141A]"
            >
              <span>Read All 4,065+ Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsPreview.map((rev, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? false : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#D7B46A]">
                      {[...Array(rev.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-[#736C63] uppercase tracking-wider font-medium">
                      Google Review
                    </span>
                  </div>
                  <p className="text-xs text-[#2B2825] leading-relaxed italic font-light">
                    “{rev.text}”
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8E3D8] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#141210]">{rev.name}</div>
                    <div className="text-[10px] text-[#736C63]">{rev.type}</div>
                  </div>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-medium">
                    Verified Buyer
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          8. SHOWROOM — deep parallax backdrop
          ========================================= */}
      <section className="py-20 bg-[#141210] text-white relative overflow-hidden">
        <motion.div
          ref={showroomRef}
          aria-hidden="true"
          className="absolute inset-[-15%] pointer-events-none opacity-20 will-change-transform"
        >
          <img
            src="/images/showroom.webp"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141210] via-[#141210]/90 to-[#141210]/70 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -30 }}
              whileInView={reduce ? false : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 text-[#D7B46A] text-xs font-semibold uppercase tracking-[0.2em]">
                <Compass className="w-4 h-4" />
                <span>Visit The Atelier</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight">
                Come see it for yourself.
              </h2>

              <p className="text-sm text-[#A89F91] leading-relaxed font-light">
                There is only so much a screen can tell you about jewellery. The weight of 22k gold in your hand, the fire of a certified diamond, and the warmth of personal hospitality.
              </p>

              <div className="space-y-3 text-xs text-[#E8E3D8] border-l-2 border-[#D7B46A] pl-4">
                <div className="font-semibold text-white">Gandevikar Jewellers - Girishbhai</div>
                <div>Jetalpur Road Char Rasta, opp. Kashi Vishweshwar Temple, Anand Nagar, Alkapuri, Vadodara, Gujarat 390007</div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#A89F91] pt-1">
                  <span>Mon – Sat: 10:30 AM – 8:30 PM</span>
                  <span>Sun: 10:30 AM – 2:00 PM</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw!18m1!1e1?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#8C1B22] text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-xs hover:bg-[#6D141A] transition-colors shadow-lg hover:-translate-y-0.5"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
                <a
                  href="tel:+919925579633"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-xs hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Concierge: 99255 79633</span>
                </a>
              </div>
            </motion.div>

            <TiltCard maxTilt={5}>
              <div className="relative rounded-xs overflow-hidden border border-[#D7B46A]/40 shadow-2xl">
                <img
                  src="/images/store.webp"
                  alt="Girishbhai Gandevikar Jewellers Showroom at Jetalpur Road Alkapuri"
                  className="w-full h-[380px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-3 text-white text-xs rounded-xs border border-white/10">
                  <div className="text-[#D7B46A] font-semibold text-[11px] uppercase tracking-wider">
                    Flagship 3-Storey Showroom
                  </div>
                  <div className="text-[11px] text-[#A89F91]">
                    Jetalpur Road Char Rasta, Opp. Kashi Vishweshwar Temple, Alkapuri
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>
    </div>
  );
}
