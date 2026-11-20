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
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-[#110D0B] text-white pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 my-6 sm:my-10 border-y border-[#1E1814]">
      {/* Centered structured container matching the Levanto reference */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header matching Levanto Reference */}
        <div className="mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A880] mb-2"
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

        {/* 6-Card Architectural Grid with instant white hover on cursor movement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26201C] border border-[#26201C]">
          {SERVICES.map((item, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={item.number}
                onClick={() => {
                  if (onSelectService) onSelectService(item.title);
                }}
                onPointerEnter={() => setHoveredCard(index)}
                onPointerMove={() => setHoveredCard(index)}
                onPointerLeave={() => setHoveredCard(null)}
                className={`service-card p-6 sm:p-7 lg:p-8 flex flex-col justify-between cursor-pointer relative select-none min-h-[180px] sm:min-h-[195px] lg:min-h-[205px] ${
                  isHovered ? 'is-active-hover' : ''
                }`}
              >
                {/* Number */}
                <div className="service-num text-[12px] font-mono tracking-widest font-medium mb-3 sm:mb-4">
                  {item.number}
                </div>

                {/* Title & Description */}
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="service-title font-serif text-[18px] sm:text-[20px] font-normal tracking-tight leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="service-desc text-[12px] sm:text-[12.5px] leading-relaxed font-light">
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
