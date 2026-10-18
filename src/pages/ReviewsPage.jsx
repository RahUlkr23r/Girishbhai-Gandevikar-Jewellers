import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Star,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
  Heart,
  Globe,
  Gem,
  Wrench
} from 'lucide-react';

export default function ReviewsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('ALL');

  const allReviews = [
    {
      id: 1,
      name: 'Hardik Patel',
      headline: 'Best jewellery showroom in Vadodara',
      text: 'Purchased our bridal Meenakari sets from here. Purity of 22k gold is 100% verified with hallmark certificates. The family hospitality makes you feel so welcomed. Will definitely return for all family functions!',
      category: 'BRIDAL',
      rating: 5,
      date: 'Google Review • Verified Buyer',
      badge: 'Bridal Suite'
    },
    {
      id: 2,
      name: 'Divya Goel',
      headline: 'Flawless international experience from USA',
      text: 'I had a fantastic experience with Girishbhai Gandevikar Jewellers and was amazed by their quality, responsiveness, speed, and guidance. I am based in the USA and needed jewelry for the family — every piece exceeded our highest expectations.',
      category: 'NRI',
      rating: 5,
      date: 'Google Review • USA Patron',
      badge: 'Global NRI Client'
    },
    {
      id: 3,
      name: 'Purohit Mansi Rajendrakumar',
      headline: 'Exceptional engagement shopping',
      text: 'The experience I shared with my family was exceptional. Our ideas and requests were respectfully met and I got my engagement shopping done with such ease and delight. I am in love with my diamond solitaire!',
      category: 'BRIDAL',
      rating: 5,
      date: 'Google Review • Verified Buyer',
      badge: 'Engagement Diamond'
    },
    {
      id: 4,
      name: 'Pradeep Mistry',
      headline: 'Personal & reassuring all the way from the UK',
      text: "I ordered from the UK and I honestly can't thank the team at Girishbhai Gandevikar Jewellers enough. From the very beginning, the whole experience felt personal and truly caring.",
      category: 'NRI',
      rating: 5,
      date: 'Google Review • UK Patron',
      badge: 'Global NRI Client'
    },
    {
      id: 5,
      name: 'Nishwalsinh Thakor',
      headline: 'Wonderful jewellery buying experience',
      text: 'Dear Girish bhai Gandevikar Jewellers Team, Thank you for the wonderful jewellery buying experience today. Yashasvi ji, Sandeep bhai and entire staff were very supportive and guided us with great patience.',
      category: 'SERVICE',
      rating: 5,
      date: 'Google Review • Local Vadodara',
      badge: 'Family Shopping'
    },
    {
      id: 6,
      name: 'RONAK PANCHOLI',
      headline: 'Utmost care & customer oriented',
      text: 'Sujay bhai is very supportive and cooperative for repairing of gold items with utmost care... Prioritized the repair with precision. His behaviour is remarkably customer oriented. Thanks!',
      category: 'ATELIER',
      rating: 5,
      date: 'Google Review • Atelier Service',
      badge: 'Jewellery Care'
    },
    {
      id: 7,
      name: 'priyanka panchal',
      headline: 'Wide range of designer jewellery',
      text: 'We had a great experience at the jewellery shop. Ms. Parul provided excellent customer service—she was very helpful, patient, and showed us beautiful and suitable options matching our budget.',
      category: 'GOLD',
      rating: 5,
      date: 'Google Review • Verified Customer',
      badge: 'Designer Gold'
    },
    {
      id: 8,
      name: 'Abhishek K',
      headline: 'Great customer service for silver & gold',
      text: 'Went there to buy Silver chain and had a really good experience. Mahima and Kashak gave us great customer service and were really helpful. They took the time and explained purity hallmarks in depth.',
      category: 'SERVICE',
      rating: 5,
      date: 'Google Review • In-Store Purchase',
      badge: '925 Silver'
    },
    {
      id: 9,
      name: 'Sury turnITin',
      headline: 'An experience to cherish',
      text: 'Very good infrastructure and authentic jewellery store. The staff and specially the owner Girishbhai and his family are extremely helpful, gentle and courteous towards everyone who walks in.',
      category: 'SERVICE',
      rating: 5,
      date: 'Google Review • Vadodara Heritage',
      badge: 'Family Hospitality'
    },
    {
      id: 10,
      name: 'Ayeshah Khan',
      headline: 'Upto the mark — beyond expectations!',
      text: 'It was a great experience. Upto the mark. At first I was doubtful ordering online, but it arrived safely packed and was far beyond expectations.',
      category: 'NRI',
      rating: 5,
      date: 'Google Review • Online Order',
      badge: 'Online Doorstep Delivery'
    },
    {
      id: 11,
      name: 'Gunjan theunflinchinggal',
      headline: 'Custom gold nose rings',
      text: 'You turn 37 only once & this time I got these two gorgeous gold nose rings. Mahima was the perfect help in selecting what I had in mind & Sandeep bhaiya got it customized perfectly.',
      category: 'ATELIER',
      rating: 5,
      date: 'Google Review • Bespoke Design',
      badge: 'Custom Atelier'
    },
    {
      id: 12,
      name: 'Rajiv Patel',
      headline: 'Excellent customer service & wide selection',
      text: 'Excellent customer service and wide selection of silver, gold, and diamond items. Purity tested right on their Karatmeter.',
      category: 'GOLD',
      rating: 5,
      date: 'Google Review • Verified Buyer',
      badge: 'Gold & Diamond'
    }
  ];

  const filteredReviews = filter === 'ALL'
    ? allReviews
    : allReviews.filter(r => r.category === filter);

  return (
    <div className="pt-24 sm:pt-28">
      {/* Page Header */}
      <section className="bg-[#FAF6EE] py-16 sm:py-20 border-b border-[#E8E3D8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8C1B22]/10 border border-[#8C1B22]/20 rounded-full text-[#8C1B22] text-[11px] font-semibold tracking-widest uppercase">
            <Star className="w-3.5 h-3.5 fill-current text-[#D7B46A]" />
            <span>4,065+ Google Reviews • Rated 4.9 out of 5</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#141210]">
            Customer Reviews & Love Stories
          </h1>

          <p className="text-sm sm:text-base text-[#736C63] font-light max-w-2xl mx-auto leading-relaxed">
            Discover authentic reviews and bridal stories from clients across Vadodara, India, and the globe who have entrusted our atelier since 1927 with their most cherished celebrations.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,17z/data=!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C1B22] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#6D141A] transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Write a Review on Google</span>
            </a>

            <a
              href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,17z/data=!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[#E8E3D8] text-[#141210] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#F2ECE1] transition-colors"
            >
              <span>View All on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Aggregate Rating Banner */}
      <section className="bg-white py-10 border-b border-[#E8E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#8C1B22]">4.9 ★</div>
              <div className="text-xs font-medium text-[#141210]">Overall Rating</div>
              <div className="text-[11px] text-[#736C63]">On Google Business</div>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#8C1B22]">4,065+</div>
              <div className="text-xs font-medium text-[#141210]">Verified Reviews</div>
              <div className="text-[11px] text-[#736C63]">Real Vadodara patrons</div>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#8C1B22]">100%</div>
              <div className="text-xs font-medium text-[#141210]">Purity Transparency</div>
              <div className="text-[11px] text-[#736C63]">In-store Karatmeter</div>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#8C1B22]">3 Generations</div>
              <div className="text-xs font-medium text-[#141210]">Continuous Legacy</div>
              <div className="text-[11px] text-[#736C63]">Serving families since 1927</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 bg-[#FDFBF7] border-b border-[#E8E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 overflow-x-auto">
          {[
            { id: 'ALL', label: 'All Reviews (4,065+)' },
            { id: 'BRIDAL', label: 'Bridal & Meenakari' },
            { id: 'NRI', label: 'NRI & International' },
            { id: 'GOLD', label: 'Gold & Hallmarking' },
            { id: 'ATELIER', label: 'Repairs & Custom' },
            { id: 'SERVICE', label: 'Hospitality & Staff' }
          ].map(f => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                filter === f.id
                  ? 'bg-[#8C1B22] text-white shadow-xs'
                  : 'bg-white border border-[#E8E3D8] text-[#736C63] hover:border-[#D7B46A]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-[#E8E3D8] rounded-xs p-6 shadow-2xs hover:border-[#D7B46A] transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#D7B46A]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#FAF6EE] text-[#8C1B22] border border-[#D7B46A]/40">
                      {rev.badge}
                    </span>
                  </div>

                  {rev.headline && (
                    <h3 className="font-serif text-lg font-bold text-[#141210]">
                      {rev.headline}
                    </h3>
                  )}

                  <p className="text-xs sm:text-sm text-[#2B2825] leading-relaxed font-light italic">
                    “{rev.text}”
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E3D8] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#141210]">{rev.name}</div>
                    <div className="text-[10px] text-[#736C63]">{rev.date}</div>
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="text-center mt-14 space-y-3">
            <p className="text-xs text-[#736C63]">
              Have you visited our Vadodara showroom recently? We would love to hear your story.
            </p>
            <a
              href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,17z/data=!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#8C1B22] text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-xs hover:bg-[#6D141A] transition-colors"
            >
              <Star className="w-4 h-4 fill-current text-[#D7B46A]" />
              <span>Rate Girishbhai Gandevikar on Google</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
