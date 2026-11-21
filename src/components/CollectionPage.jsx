import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Eye, MessageCircle } from 'lucide-react';
import { CURTAIN_COLLECTIONS, BRAND } from '../data/curtainData';
import CurtainModal from './CurtainModal';
import FloatingWhatsApp from './FloatingWhatsApp';
import Footer from './Footer';

export default function CollectionPage({ onBackToHome, onEnquireStyle }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedCurtain, setSelectedCurtain] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Scroll to top upon entering the collection page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filterOptions = [
    'ALL',
    'LIGHT CONTROL',
    'HEADER STYLES',
    'CUSTOM & LUXURY',
  ];

  const filteredCollections = CURTAIN_COLLECTIONS.filter((curtain) => {
    if (activeFilter === 'ALL') return true;
    return curtain.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#111111] font-sans">
      
      {/* Top Floating / Sticky Header with Back Arrow and Logo on the Right */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAEAEA] py-3 sm:py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Back Arrow only */}
          <button
            onClick={onBackToHome}
            aria-label="Back to About"
            className="p-2 -ml-1 rounded-full text-[#111111] hover:bg-neutral-100 transition-colors cursor-pointer flex items-center justify-center group"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right: Cochin Decor Logo (positioned in place of previous consultation button) */}
          <button
            onClick={onBackToHome}
            aria-label="Cochin Decor Home"
            className="flex items-center cursor-pointer"
          >
            <img
              src="/logo-black.png"
              alt="Cochin Decor"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </button>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Page Title & Narrative */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#C5A880] mb-3 font-semibold"
          >
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span>COMPLETE CURTAIN CATALOGUE</span>
            <span className="w-6 h-[1px] bg-[#C5A880]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] leading-tight mb-4 font-normal"
          >
            Curtain Styles &amp; Fabrics <br className="hidden sm:inline" />
            <span className="italic">for Every Kerala Home.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto"
          >
            Explore our complete architectural curtain range. Each design is hand-crafted with European textiles, weighted bottom hems, and tailored to Kerala&apos;s tropical daylight.
          </motion.p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-200 border cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                    : 'bg-white text-[#666666] border-[#EAEAEA] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Full Grid of Curtain Cards (4 columns desktop, 2 columns mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredCollections.map((curtain, index) => {
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={curtain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedCurtain(curtain)}
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
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F0F0EE]">
                  <img
                    src={curtain.image}
                    alt={curtain.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
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
                  <div className="curtain-card-badge absolute top-3 left-3 px-2.5 py-1 text-[10px] font-mono tracking-widest border">
                    0{index + 1}
                  </div>
                </div>

                {/* Text Container Below Photograph */}
                <div className="curtain-card-body p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="curtain-card-title font-serif text-lg sm:text-xl font-medium tracking-tight">
                        {curtain.title}
                      </h3>
                      <ArrowUpRight className="curtain-card-arrow w-4 h-4 shrink-0 ml-1" />
                    </div>
                    
                    <p className="curtain-card-desc text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                      {curtain.description}
                    </p>
                  </div>

                  <div className="curtain-card-divider mt-4 pt-3 border-t flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold">
                    <span className="curtain-card-action">Explore Style</span>
                    <span className="curtain-card-arrow">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-20 text-center bg-white p-8 sm:p-12 border border-[#EAEAEA] max-w-4xl mx-auto shadow-xs">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] block mb-2 font-semibold">
            IN-HOME EXPERT SELECTION
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-3">
            Want to See These Fabrics In Your Home?
          </h3>
          <p className="text-sm text-[#666666] max-w-xl mx-auto mb-6">
            Our curtain specialists bring fabric sample albums directly to your villa or apartment anywhere in Kerala.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onEnquireStyle('Full Curtain Collection')}
              className="inline-flex items-center px-6 py-3 bg-[#111111] text-white text-xs font-medium tracking-[0.1em] uppercase hover:bg-neutral-800 transition-colors space-x-2 cursor-pointer"
            >
              <span>Book Free In-Home Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Hello Cochin Decor, I would like to see fabric samples for your curtain collections.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-[#111111] text-[#111111] text-xs font-medium tracking-[0.1em] uppercase hover:bg-neutral-100 transition-colors space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Specialist</span>
            </a>
          </div>
        </div>

      </main>

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

      {/* Footer */}
      <Footer onBookConsultation={() => onEnquireStyle('Full Curtain Collection')} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
