import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Bridal Consultation',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, contact phone number, and enquiry details.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const generateWhatsAppInquiry = () => {
    const msg = encodeURIComponent(
      `Hello Girishbhai Gandevikar Jewellers,\n\nName: ${formData.name || 'Client'}\nEnquiry Type: ${formData.enquiryType}\nPhone: ${formData.phone || 'N/A'}\nMessage: ${formData.message || 'I would like to schedule a jewellery consultation.'}`
    );
    return `https://wa.me/919925579633?text=${msg}`;
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* Header */}
      <section className="bg-[#FAF6EE] py-16 sm:py-20 border-b border-[#E8E3D8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8C1B22]/10 border border-[#8C1B22]/20 rounded-full text-[#8C1B22] text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Concierge & Showroom</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#141210]">
            We’re always open to a conversation.
          </h1>

          <p className="text-sm sm:text-base text-[#736C63] font-light max-w-2xl mx-auto leading-relaxed">
            For bridal enquiries, gold rate consultations, bespoke karigar designs, Suvarna Vruddhi scheme enrollment, or showroom appointments, drop us a note or call our concierge.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Details + Form */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Cards & Showroom Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C1B22]">
                  Flagship Atelier
                </span>
                <h2 className="font-serif text-3xl font-medium text-[#141210]">
                  Gandevikar Jewellers - Girishbhai
                </h2>
                <p className="text-xs sm:text-sm text-[#736C63] leading-relaxed font-light">
                  A century of trust on Jetalpur Road. Visit our 3-storey landmark showroom for personalized family hospitality and transparent Karatmeter verification.
                </p>
              </div>

              {/* Direct Touchpoints */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="p-4 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#8C1B22] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#736C63]">
                      Direct Concierge
                    </div>
                    <a
                      href="tel:+919925579633"
                      className="font-serif text-lg font-bold text-[#141210] hover:text-[#8C1B22] transition-colors"
                    >
                      +91 99255 79633
                    </a>
                    <div className="text-[11px] text-[#736C63]">Available during showroom hours</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-4 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#736C63]">
                      Instant WhatsApp Chat
                    </div>
                    <a
                      href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20would%20like%20to%20inquire%20about%20a%20jewellery%20consultation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-lg font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                    <div className="text-[11px] text-[#736C63]">Quick replies for bridal & rate queries</div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#8C1B22] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#736C63]">
                      Email Enquiries
                    </div>
                    <a
                      href="mailto:mandargandevikar@gmail.com"
                      className="font-serif text-base font-bold text-[#141210] hover:text-[#8C1B22] transition-colors"
                    >
                      mandargandevikar@gmail.com
                    </a>
                    <div className="text-[11px] text-[#736C63]">For collaborations, media & quotes</div>
                  </div>
                </div>

                {/* Showroom Address & Hours */}
                <div className="p-4 bg-white border border-[#E8E3D8] rounded-xs shadow-2xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#8C1B22] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#736C63]">
                      Address & Location
                    </div>
                    <address className="not-italic text-xs text-[#2B2825] leading-relaxed">
                      Jetalpur Road Char Rasta, Opp. Kashi Vishweshwar Temple, Anand Nagar, Alkapuri, Vadodara, Gujarat 390007
                    </address>
                    <div className="text-[11px] text-[#736C63] pt-1">
                      <strong>Hours:</strong> Mon–Sat: 10:30 AM – 8:30 PM | Sun: 10:30 AM – 2:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Maps Link */}
              <a
                href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw!18m1!1e1?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 p-3.5 bg-[#8C1B22] text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-xs hover:bg-[#6D141A] transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps App</span>
              </a>
            </div>

            {/* Right Column: Interactive Consultation Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E8E3D8] rounded-xs shadow-md p-6 sm:p-10 relative">
                {/* Decorative border strip */}
                <div className="h-1 bg-gradient-to-r from-[#8C1B22] via-[#D7B46A] to-[#8C1B22] absolute top-0 left-0 right-0" />

                <div className="mb-8 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C1B22]">
                    Send a Message
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#141210]">
                    Atelier Consultation Request
                  </h3>
                  <p className="text-xs text-[#736C63] font-light">
                    Share your requirements with our jewellery specialists. We typically reply within a few hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 px-6 text-center space-y-4 bg-[#FAF6EE] border border-[#E8E3D8] rounded-xs animate-in fade-in duration-300">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-[#141210]">
                      Thank you, {formData.name}!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#736C63] max-w-md mx-auto leading-relaxed">
                      Your enquiry regarding <strong>{formData.enquiryType}</strong> has been received by our Vadodara concierge. We will reach you shortly at <strong>{formData.phone}</strong>.
                    </p>
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={generateWhatsAppInquiry()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#1EBE5D] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Continue via WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', phone: '', email: '', enquiryType: 'Bridal Consultation', message: '' });
                        }}
                        className="px-4 py-2.5 border border-[#E8E3D8] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-white cursor-pointer"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#141210]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Radhika Patel"
                          className="w-full px-4 py-3 bg-[#FAF6EE]/50 border border-[#E8E3D8] text-xs text-[#141210] placeholder:text-[#736C63]/60 focus:outline-none focus:border-[#8C1B22] rounded-xs transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#141210]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 99255 79633"
                          className="w-full px-4 py-3 bg-[#FAF6EE]/50 border border-[#E8E3D8] text-xs text-[#141210] placeholder:text-[#736C63]/60 focus:outline-none focus:border-[#8C1B22] rounded-xs transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#141210]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 bg-[#FAF6EE]/50 border border-[#E8E3D8] text-xs text-[#141210] placeholder:text-[#736C63]/60 focus:outline-none focus:border-[#8C1B22] rounded-xs transition-colors"
                        />
                      </div>

                      {/* Enquiry Type */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#141210]">
                          Enquiry Category
                        </label>
                        <select
                          name="enquiryType"
                          value={formData.enquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#FAF6EE]/50 border border-[#E8E3D8] text-xs text-[#141210] focus:outline-none focus:border-[#8C1B22] rounded-xs transition-colors cursor-pointer"
                        >
                          <option value="Bridal Consultation">Bridal Suite Consultation</option>
                          <option value="Gold & Diamond Purchase">Gold & Diamond Purchase</option>
                          <option value="11+1 Suvarna Vruddhi Scheme">11+1 Suvarna Vruddhi Scheme</option>
                          <option value="Custom Bespoke Design">Custom Bespoke Design</option>
                          <option value="Old Gold Exchange">Old Gold Exchange / Karatmeter</option>
                          <option value="Repairing & Piercing">Repairing, Polishing & Piercing</option>
                          <option value="AMYA 925 Silver Online Order">AMYA 925 Silver Online Order</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#141210]">
                        Message & Requirements *
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe the jewellery piece, gold purity, enamel artwork, wedding timeline, or viewing appointment preferences you would like to discuss..."
                        className="w-full px-4 py-3 bg-[#FAF6EE]/50 border border-[#E8E3D8] text-xs text-[#141210] placeholder:text-[#736C63]/60 focus:outline-none focus:border-[#8C1B22] rounded-xs resize-none transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#8C1B22] text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#6D141A] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Note...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Consultation Note</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Showroom Map Section */}
      <section className="py-16 bg-[#FAF6EE] border-t border-[#E8E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C1B22]">
              Find Us In Vadodara
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#141210]">
              Jetalpur Road Char Rasta
            </h2>
            <p className="text-xs text-[#736C63]">
              Opposite Kashi Vishweshwar Temple, Anand Nagar, Alkapuri, Vadodara, Gujarat 390007.
            </p>
          </div>

          {/* Map Frame / Card */}
          <div className="rounded-xs overflow-hidden border border-[#E8E3D8] bg-white shadow-md relative aspect-21/9 min-h-[300px]">
            <iframe
              title="Girishbhai Gandevikar Jewellers Vadodara Map"
              src="https://maps.google.com/maps?q=22.307462,73.1740238&hl=en&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
