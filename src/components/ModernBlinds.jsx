import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BLINDS_SOLUTIONS } from '../data/curtainData';

export default function ModernBlinds({ onSelectSolution }) {
  return (
    <section id="blinds" className="pt-6 sm:pt-10 pb-14 sm:pb-20 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 pb-4 border-b border-[#EAEAEA]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#666666] mb-2 sm:mb-3 font-semibold"
            >
              <span className="w-6 h-[1px] bg-[#111111]" />
              <span>BEYOND TRADITIONAL CURTAINS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight font-normal"
            >
              Modern Solutions. <br />
              <span className="italic">Effortless Living.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 md:mt-0 text-xs sm:text-base text-[#666666] max-w-md font-normal leading-relaxed"
          >
            Sleek window shading engineering tailored for contemporary architectural openings, double-height voids, and smart home automation.
          </motion.p>
        </div>

        {/* 
          COMPACT SLIDING CARDS (Matching Image 2 Reference)
          Slender portrait cards that peek cleanly on mobile with smooth swipe,
          and expand into an architectural 4-column grid on desktop.
        */}
        <div className="flex md:grid md:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 pt-1 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {BLINDS_SOLUTIONS.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => onSelectSolution && onSelectSolution(item.title)}
              className="w-[210px] sm:w-[240px] md:w-auto min-w-[210px] sm:min-w-[240px] md:min-w-0 flex-shrink-0 snap-start group flex flex-col bg-[#FDFCFB] border border-[#EAEAEA] hover:border-[#111111] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Portrait Photograph */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Number Badge */}
                <div className="absolute top-2.5 left-2.5 bg-white/95 px-2 py-0.5 text-[9px] font-mono tracking-widest text-[#111111] border border-[#EAEAEA]">
                  {item.number}
                </div>
              </div>

              {/* Text Body Matching Reference Image 2 */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-[#FDFCFB]">
                <div>
                  {/* Category in Bronze / Gold */}
                  <div className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#B38E5D] mb-1.5 font-sans">
                    {item.category}
                  </div>

                  {/* 1px Bronze Hairline Accent */}
                  <div className="w-8 h-[1px] bg-[#B38E5D] mb-3" />

                  {/* Clean Short Description */}
                  <p className="text-xs sm:text-[13px] text-[#333333] leading-relaxed line-clamp-3 mb-4 font-normal">
                    {item.shortSummary || item.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-auto pt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B38E5D] group-hover:text-[#111111] flex items-center space-x-1.5 transition-colors">
                  <span>EXPLORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center space-x-2 text-[10px] font-mono tracking-widest uppercase text-[#888888] mt-3">
          <span>&larr; Swipe to view solutions &rarr;</span>
        </div>

      </div>
    </section>
  );
}
