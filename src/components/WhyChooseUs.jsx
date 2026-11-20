import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Home, Wrench } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/curtainData';

export default function WhyChooseUs({ onBookConsultation: _onBookConsultation }) {
  const icons = [Sparkles, Home, Wrench, Shield];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FBFBFA] border-b border-[#EAEAEA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#666666] mb-3 font-semibold"
          >
            <span className="w-6 h-[1px] bg-[#111111]" />
            <span>THE COCHIN DECOR DIFFERENCE</span>
            <span className="w-6 h-[1px] bg-[#111111]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight font-normal"
          >
            Thoughtfully Selected. <br />
            <span className="italic">Beautifully Installed.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs sm:text-base text-[#666666] max-w-xl mx-auto font-normal leading-relaxed"
          >
            Every curtain drape from Cochin Decor represents a harmonious blend of international textiles, artisanal tailoring, and rigorous architectural installation standards.
          </motion.p>
        </div>

        {/* 
          STACKING RECTANGULAR CARDS
          With only title and subtitle as requested by user (no excessive details)
        */}
        <div className="relative pb-10 sm:pb-16">
          {WHY_CHOOSE_US.map((block, index) => {
            const Icon = icons[index];

            return (
              <div
                key={block.number}
                className="sticky mb-12 sm:mb-20"
                style={{
                  top: `${84 + index * 16}px`,
                  zIndex: index + 1,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#110D0B] text-white border border-[#26201C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
                    
                    {/* Content Side: ONLY Title and Subtitle */}
                    <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                      {/* Feature Number Badge */}
                      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1A1512] border border-[#332A22] text-[10px] sm:text-[11px] font-mono tracking-widest text-[#C5A880] rounded-xs mb-3 w-fit">
                        <Icon className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>FEATURE {block.number}</span>
                      </div>

                      {/* Main Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-white font-normal leading-snug tracking-tight mb-2.5">
                        {block.title}
                      </h3>

                      {/* Clean Subtitle / 1-Line Description */}
                      <p className="text-sm sm:text-base text-[#D4CDC5] font-light leading-relaxed">
                        {block.description}
                      </p>
                    </div>

                    {/* Image Side: Framed Photograph */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                      <div className="relative overflow-hidden rounded-xl border border-[#26201C] bg-[#181310]">
                        <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden">
                          <img
                            src={block.image}
                            alt={block.title}
                            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
                          
                          <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-xs px-2.5 py-1 text-[9px] sm:text-[10px] uppercase tracking-widest text-[#C5A880] font-mono border border-[#332A22] rounded-xs">
                            Cochin Decor Standard
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
