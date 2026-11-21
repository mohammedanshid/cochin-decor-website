import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Dr. Rahul & Priya Menon',
    location: 'Panampilly Nagar, Kochi',
    project: 'Motorized Wave Sheers & Blackout',
    quote: 'Cochin Decor completely transformed our double-height living room. The motorized wave sheers glide effortlessly and filter the tropical sunlight into an elegant glow.',
  },
  {
    name: 'Adv. Thomas & Sneha Kurian',
    location: 'Kowdiar, Trivandrum',
    project: 'Belgian Linen Pinch Pleat Drapes',
    quote: 'Exceptional craftsmanship. They brought fabric albums right to our villa, measured with laser precision, and installed custom drapes in just 8 days with weighted bottom hems.',
  },
  {
    name: 'Faizal & Nafisa Rahman',
    location: 'Beach Road, Kozhikode',
    project: 'Natural Wood Venetian Blinds & Drapes',
    quote: 'The craftsmanship on our pinch pleats and wooden Venetian blinds is architectural perfection. Their 7-year warranty and attentive team gave us complete peace of mind.',
  },
  {
    name: 'Capt. George Varghese',
    location: 'Kumarakom, Kottayam',
    project: 'Waterfront Villa Custom Shading',
    quote: 'Our lakefront home required specialized moisture-resistant tracks and sheer fabrics. Cochin Decor delivered millimeter-accurate drapery that looks stunning every day.',
  },
  {
    name: 'Divya Nambiar',
    location: 'Thrissur Town',
    project: 'Dual-Track Day & Night Curtains',
    quote: 'The dual-track system in our bedrooms is wonderful—total blackout at night for deep sleep, and luminous warm voiles during the morning hours. Impeccable service.',
  },
  {
    name: 'Ar. Vivek & Anjali Pillai',
    location: 'Aluva, Kochi',
    project: 'Architectural Floor-to-Ceiling Drapes',
    quote: 'As architects, we have strict requirements for fabric fullness and concealed track finishes. Cochin Decor is undoubtedly Kerala’s benchmark in custom window dressing.',
  },
];

export default function Testimonials() {
  // Duplicate array for seamless infinite floating marquee from left to right
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-16 sm:py-24 bg-[#FDFCFB] border-t border-[#EAEAEA] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#666666] mb-3 font-semibold"
        >
          <span className="w-6 h-[1px] bg-[#111111]" />
          <span>KERALA HOMEOWNER STORIES</span>
          <span className="w-6 h-[1px] bg-[#111111]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight font-normal"
        >
          Cherished by Kerala’s <br />
          <span className="italic">Finest Residences.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-xs sm:text-base text-[#666666] max-w-lg mx-auto font-normal leading-relaxed"
        >
          Hear how our bespoke curtain tailoring and motorized shading elevate living spaces across Kerala.
        </motion.p>
      </div>

      {/* Floating Marquee moving from Left to Right */}
      <div className="relative w-full">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#FDFCFB] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#FDFCFB] to-transparent" />

        <div className="animate-marquee-reverse flex gap-5 sm:gap-6 py-2">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white border border-[#EAEAEA] hover:border-[#111111] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl rounded-none group cursor-pointer"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-[#C5A880]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#EAEAEA] group-hover:text-[#C5A880] transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-[13.5px] text-[#333333] leading-relaxed font-light mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="pt-4 border-t border-[#F0F0EE]">
                <div className="font-serif text-sm sm:text-base font-medium text-[#111111]">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#777777] mt-0.5">
                  {item.location}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#C5A880] font-mono mt-1 font-medium">
                  {item.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
