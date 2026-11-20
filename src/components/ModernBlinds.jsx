import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Sliders, Layers } from 'lucide-react';
import { BLINDS_SOLUTIONS } from '../data/curtainData';

export default function ModernBlinds({ onSelectSolution }) {
  const icons = [Layers, Sliders, Cpu];

  return (
    <section id="blinds" className="pt-10 sm:pt-16 pb-20 sm:pb-28 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with reduced top gap */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-5 border-b border-[#EAEAEA]">
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
          HORIZONTAL SCROLLABLE CARDS ON MOBILE (Requested by user)
          Scrollable to left/right on mobile with snap, 3-column grid on desktop
        */}
        <div className="flex md:grid md:grid-cols-3 gap-5 sm:gap-8 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {BLINDS_SOLUTIONS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 flex-shrink-0 snap-center group flex flex-col bg-[#F8F8F6] border border-[#EAEAEA] overflow-hidden hover:border-[#111111] transition-all duration-300"
              >
                {/* Large Photograph */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-neutral-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 grayscale-15 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                  
                  {/* Number pill */}
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-xs font-mono tracking-widest text-[#111111] border border-[#EAEAEA]">
                    {item.number}
                  </div>

                  {/* Tag */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center space-x-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest">
                    <Icon className="w-3 h-3" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-8 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#111111] mb-2 sm:mb-3 group-hover:text-black">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-3 sm:mb-4">
                      {item.description}
                    </p>
                    <p className="text-xs text-[#777777] leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#EAEAEA]">
                    <button
                      onClick={() => onSelectSolution(item.title)}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.12em] text-[#111111] hover:text-[#666666] transition-colors group/btn cursor-pointer"
                    >
                      <span>Consult on this solution</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center space-x-2 text-[11px] font-mono tracking-widest uppercase text-[#888888] mt-2">
          <span>&larr; Swipe to view solutions &rarr;</span>
        </div>

      </div>
    </section>
  );
}
