import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    number: '01',
    title: 'Full home curtain dressing',
    description: 'Turnkey custom drapery for luxury villas and residences across Kerala, managed end-to-end from laser survey to final installation.',
  },
  {
    number: '02',
    title: 'Wave & pleated tailoring',
    description: 'Architectural S-fold wave drapes and artisanal pinch pleats hand-finished with weighted bottom corner hems for flawless drape.',
  },
  {
    number: '03',
    title: 'Dual-track day & night',
    description: 'Pairing luminous sheer voiles for glowing daylight with multi-pass blackout drapes for total evening seclusion and thermal comfort.',
  },
  {
    number: '04',
    title: 'Motorized & smart tracks',
    description: 'Whisper-quiet motorized curtain systems integrated with home automation, smartphone controls, and wireless designer remotes.',
  },
  {
    number: '05',
    title: 'Designer blinds & shading',
    description: 'Modern roller, zebra, Roman, and wooden Venetian blinds engineered for precise tropical light management and modern aesthetics.',
  },
  {
    number: '06',
    title: 'In-home fabric consultation',
    description: 'Our curtain specialists bring curated European textile swatch albums directly to your doorstep anywhere in Kerala.',
  },
];

export default function ServicesGrid({ onSelectService }) {
  // Initially null so all columns start dark (no white card before user touches or hovers)
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-[#110D0B] text-white py-16 sm:py-20 lg:py-24 my-14 sm:my-20 border-y border-[#1E1814]">
      {/* Centered structured container matching the Levanto reference */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header matching Levanto Reference */}
        <div className="mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A880] mb-2.5"
          >
            SERVICES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-serif text-3xl sm:text-4xl md:text-[46px] font-normal text-white tracking-tight leading-tight"
          >
            What we tailor.
          </motion.h2>
        </div>

        {/* 6-Card Architectural Grid matching exact measurements from Levanto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26201C] border border-[#26201C]">
          {SERVICES.map((item, index) => {
            const isWhite = hoveredCard === index;

            return (
              <div
                key={item.number}
                onClick={() => {
                  if (onSelectService) onSelectService(item.title);
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onTouchStart={() => setHoveredCard(index)}
                onTouchEnd={() => {
                  // Keep briefly or allow tap to select
                  setTimeout(() => setHoveredCard(null), 1500);
                }}
                className={`group p-6 sm:p-7 lg:p-8 flex flex-col justify-between cursor-pointer transition-colors duration-200 relative select-none min-h-[180px] sm:min-h-[195px] lg:min-h-[205px] ${
                  isWhite
                    ? 'bg-white text-[#111111]'
                    : 'bg-[#110D0B] text-white hover:bg-white'
                }`}
              >
                {/* Number */}
                <div
                  className={`text-[12px] font-mono tracking-widest font-medium mb-3 sm:mb-4 transition-colors duration-200 ${
                    isWhite
                      ? 'text-[#111111]'
                      : 'text-[#C5A880] group-hover:text-[#111111]'
                  }`}
                >
                  {item.number}
                </div>

                {/* Title & Description */}
                <div className="flex-1 flex flex-col justify-start">
                  <h3
                    className={`font-serif text-[18px] sm:text-[20px] font-normal tracking-tight leading-snug mb-2 transition-colors duration-200 ${
                      isWhite
                        ? 'text-[#111111]'
                        : 'text-[#F5F2EB] group-hover:text-[#111111]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[12px] sm:text-[12.5px] leading-relaxed font-light transition-colors duration-200 ${
                      isWhite
                        ? 'text-[#444444]'
                        : 'text-[#9E9690] group-hover:text-[#444444]'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
