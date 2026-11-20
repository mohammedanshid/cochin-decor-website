import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/curtainData';

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#666666] mb-3 font-semibold"
          >
            <span className="w-6 h-[1px] bg-[#111111]" />
            <span>HOW WE WORK</span>
            <span className="w-6 h-[1px] bg-[#111111]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight font-normal"
          >
            Simple. Transparent. <br />
            <span className="italic">Flawlessly Executed.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs sm:text-base text-[#666666] max-w-lg mx-auto font-normal leading-relaxed"
          >
            A seamless, white-glove window furnishing process designed to take the stress out of home dressing.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Thin connecting line for Desktop (Horizontal) */}
          <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-[1px] bg-[#D4D4D2] z-0" />

          {/* 4 Steps Grid with instant black hover effect on cursor movement */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isHovered = hoveredStep === index;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  onPointerEnter={() => setHoveredStep(index)}
                  onPointerMove={() => setHoveredStep(index)}
                  onPointerLeave={() => setHoveredStep(null)}
                  className={`process-card group flex flex-col p-6 sm:p-7 border relative cursor-pointer select-none ${
                    isHovered ? 'is-active-hover' : ''
                  }`}
                >
                  {/* Number Circle / Node */}
                  <div className="process-num-badge w-13 h-13 sm:w-14 sm:h-14 bg-[#111111] text-white flex items-center justify-center font-mono text-sm tracking-wider mb-5 sm:mb-6 shrink-0 shadow-xs transition-colors duration-300">
                    {step.number}
                  </div>

                  <div className="process-step-label text-[10px] uppercase tracking-[0.2em] text-[#666666] mb-1 font-semibold transition-colors duration-300">
                    Step 0{index + 1}
                  </div>

                  <h3 className="process-title font-serif text-lg sm:text-xl font-medium text-[#111111] mb-2 sm:mb-3 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="process-desc text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 transition-colors duration-300">
                    {step.description}
                  </p>

                  <div className="process-divider mt-auto pt-3 border-t border-[#F0F0EE] text-[11px] text-[#888888] transition-colors duration-300">
                    <span className="process-outcome-label font-medium text-[#111111]">Outcome: </span>
                    {step.deliverable}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
