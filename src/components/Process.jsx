import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/curtainData';

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#F8F8F6] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#666666] mb-3 font-semibold"
          >
            <span className="w-6 h-[1px] bg-[#111111]" />
            <span>YOUR JOURNEY WITH US</span>
            <span className="w-6 h-[1px] bg-[#111111]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight font-normal"
          >
            From First Selection <br />
            <span className="italic">to Final Installation.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#666666] max-w-lg mx-auto font-normal leading-relaxed"
          >
            A seamless, white-glove window furnishing process designed to take the stress out of home dressing.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Thin connecting line for Desktop (Horizontal) */}
          <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-[1px] bg-[#D4D4D2] z-0" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col bg-white p-6 sm:p-7 border border-[#EAEAEA] relative"
              >
                {/* Number Circle / Node */}
                <div className="w-14 h-14 bg-[#111111] text-white flex items-center justify-center font-mono text-sm tracking-wider mb-6 shrink-0 shadow-xs">
                  {step.number}
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-[#666666] mb-1 font-semibold">
                  Step 0{index + 1}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#111111] mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="mt-auto pt-3 border-t border-[#F0F0EE] text-[11px] text-[#888888]">
                  <span className="font-medium text-[#111111]">Outcome: </span>
                  {step.deliverable}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

