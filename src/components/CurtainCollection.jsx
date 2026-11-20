import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { CURTAIN_COLLECTIONS } from '../data/curtainData';
import ServicesGrid from './ServicesGrid';
import CurtainModal from './CurtainModal';

export default function CurtainCollection({ onEnquireStyle, onNavigateToCollection }) {
  const [selectedCurtain, setSelectedCurtain] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Show exactly 4 featured cards on the homepage matching reference (Image 3)
  const featuredCurtains = CURTAIN_COLLECTIONS.slice(0, 4);

  const handleCardClick = (curtain) => {
    if (onNavigateToCollection) {
      onNavigateToCollection(curtain.id);
    } else {
      setSelectedCurtain(curtain);
    }
  };

  return (
    <section id="curtains" className="pt-16 sm:pt-24 pb-12 sm:pb-16 bg-[#FBFBFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
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
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] leading-tight mb-4 font-normal"
          >
            Find the Perfect Curtains <br className="hidden sm:inline" />
            <span className="italic">for Every Space.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Explore our collection of beautifully crafted curtain styles, thoughtfully selected to complement different interiors, preferences, and lifestyles.
          </motion.p>
        </div>

        {/* 
          EXACTLY FOUR RECTANGULAR CARDS (matching Image 3 layout)
          2-column on mobile, 4-column on desktop with sharp architectural edges
          Featuring instant black hover on cursor movement or hand touch without click
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredCurtains.map((curtain, index) => {
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={curtain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => handleCardClick(curtain)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseMove={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onPointerEnter={() => setHoveredCard(index)}
                onPointerMove={() => setHoveredCard(index)}
                onPointerLeave={() => setHoveredCard(null)}
                onTouchStart={() => setHoveredCard(index)}
                className={`curtain-card group cursor-pointer flex flex-col border select-none ${
                  isHovered ? 'is-active-hover' : ''
                }`}
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden bg-[#F0F0EE]">
                  <img
                    src={curtain.image}
                    alt={curtain.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Badge Number */}
                  <div className="curtain-card-badge absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 text-[9px] sm:text-[10px] font-mono tracking-widest border">
                    0{index + 1}
                  </div>
                </div>

                {/* Text Container Below Photograph */}
                <div className="curtain-card-body p-3.5 sm:p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="curtain-card-title font-serif text-sm sm:text-lg font-medium tracking-tight line-clamp-1">
                      {curtain.title}
                    </h3>
                    
                    <p className="curtain-card-desc text-[11px] sm:text-xs leading-relaxed line-clamp-2 mt-1">
                      {curtain.description}
                    </p>
                  </div>

                  <div className="curtain-card-divider mt-3 pt-2 sm:pt-3 border-t flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                    <span className="curtain-card-action">Explore Style</span>
                    <span className="curtain-card-arrow inline-block">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EXPLORE MORE BUTTON UNDER THE FOUR CARDS (Requested by user) */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={() => onNavigateToCollection && onNavigateToCollection()}
            className="inline-flex items-center px-7 py-3 bg-[#111111] text-white text-xs font-medium tracking-[0.12em] uppercase hover:bg-neutral-800 transition-all duration-200 shadow-sm space-x-2 cursor-pointer active:scale-98"
          >
            <span>Explore More Curtains</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* 
        ARCHITECTURAL SERVICES SECTION 
        Completely fills the full width of the screen with dark luxury background, matching Levanto reference
      */}
      <ServicesGrid onSelectService={(service) => onEnquireStyle(service)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        {/* Bottom Editorial Callout ("Can't Decide Which Curtain Style Suits Your Windows?") */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white p-7 sm:p-10 border border-[#EAEAEA] max-w-4xl mx-auto shadow-xs"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] block mb-2 font-medium">
            Tailor-Made Window Architecture
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-2 sm:mb-3 font-normal">
            Can&apos;t Decide Which Curtain Style Suits Your Windows?
          </h3>
          <p className="text-xs sm:text-sm text-[#666666] max-w-xl mx-auto mb-5 sm:mb-6 leading-relaxed">
            Our curtain specialists bring fabric sample books directly to your residence anywhere in Kerala, evaluating window orientation, ceiling heights, and privacy requirements.
          </p>
          <button
            onClick={() => onEnquireStyle('Full Curtain Collection')}
            className="inline-flex items-center px-6 py-3 bg-[#111111] text-white text-xs font-medium tracking-[0.1em] uppercase hover:bg-neutral-800 transition-colors space-x-2 cursor-pointer"
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
