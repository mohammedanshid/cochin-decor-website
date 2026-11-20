import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import { CURTAIN_COLLECTIONS } from '../data/curtainData';
import CurtainModal from './CurtainModal';
import ServicesGrid from './ServicesGrid';

export default function CurtainCollection({ onEnquireStyle }) {
  const [selectedCurtain, setSelectedCurtain] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterOptions = ['ALL', 'LIGHT CONTROL', 'HEADER STYLES', 'CUSTOM & LUXURY'];

  const filteredCollections = CURTAIN_COLLECTIONS.filter((curtain) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'LIGHT CONTROL') {
      return ['SHEER CURTAINS', 'BLACKOUT CURTAINS', 'LAYERED CURTAINS'].includes(curtain.title);
    }
    if (activeFilter === 'HEADER STYLES') {
      return ['EYELET CURTAINS', 'PLEATED CURTAINS', 'WAVE CURTAINS'].includes(curtain.title);
    }
    if (activeFilter === 'CUSTOM & LUXURY') {
      return ['DESIGNER CURTAINS', 'CUSTOM-MADE CURTAINS', 'WAVE CURTAINS'].includes(curtain.title);
    }
    return true;
  });

  return (
    <section id="curtains" className="py-24 sm:py-32 bg-[#F8F8F6] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#666666] mb-3 font-semibold"
          >
            <span className="w-6 h-[1px] bg-[#111111]" />
            <span>OUR CURTAIN COLLECTION</span>
            <span className="w-6 h-[1px] bg-[#111111]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] leading-tight mb-5 font-normal"
          >
            Find the Perfect Curtains <br className="hidden sm:inline" />
            <span className="italic">for Every Space.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Explore our collection of beautifully crafted curtain styles, thoughtfully selected to complement different interiors, preferences, and lifestyles.
          </motion.p>

          {/* Minimal Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-all duration-200 border ${
                  activeFilter === filter
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#666666] border-[#EAEAEA] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 4-Column Desktop / 2-Column Tablet & Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredCollections.map((curtain, index) => (
            <motion.div
              key={curtain.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              onClick={() => setSelectedCurtain(curtain)}
              className="group cursor-pointer flex flex-col bg-white border border-[#EAEAEA] transition-all duration-300 hover:shadow-xl hover:border-[#111111]"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F0F0EE]">
                <img
                  src={curtain.image}
                  alt={curtain.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center px-4 py-2 bg-white/95 text-[#111111] text-xs uppercase tracking-widest font-medium shadow-md space-x-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </span>
                </div>

                {/* Badge / Category index */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#111111] border border-[#EAEAEA]">
                  0{index + 1}
                </div>
              </div>

              {/* Text Container Below Photograph */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#111111] group-hover:underline underline-offset-4 decoration-1">
                      {curtain.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                  </div>
                  
                  <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed line-clamp-3">
                    {curtain.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0F0EE] flex items-center justify-between text-[11px] uppercase tracking-wider text-[#111111] font-semibold">
                  <span>Explore Style</span>
                  <span className="text-[#888888]">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 
        ARCHITECTURAL SERVICES SECTION 
        Completely fills the full width of the screen with dark luxury background, matching Levanto reference
      */}
      <ServicesGrid onSelectService={(service) => onEnquireStyle(service)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        {/* Bottom Editorial Callout ("Can't Decide Which Curtain Style Suits Your Windows?") */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white p-8 sm:p-10 border border-[#EAEAEA] max-w-4xl mx-auto shadow-xs"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] block mb-2">
            Tailor-Made Window Architecture
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-3">
            Can't Decide Which Curtain Style Suits Your Windows?
          </h3>
          <p className="text-sm text-[#666666] max-w-xl mx-auto mb-6">
            Our curtain specialists bring fabric sample books directly to your residence anywhere in Kerala, evaluating window orientation, ceiling heights, and privacy requirements.
          </p>
          <button
            onClick={() => onEnquireStyle("Full Curtain Collection")}
            className="inline-flex items-center px-6 py-3 bg-[#111111] text-white text-xs font-medium tracking-[0.1em] uppercase hover:bg-neutral-800 transition-colors space-x-2"
          >
            <span>Book In-Home Fabric Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <CurtainModal
        curtain={selectedCurtain}
        isOpen={!!selectedCurtain}
        onClose={() => setSelectedCurtain(null)}
        onEnquire={(styleName) => {
          setSelectedCurtain(null);
          onEnquireStyle(styleName);
        }}
      />
    </section>
  );
}
