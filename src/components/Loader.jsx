import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../data/curtainData';

export default function Loader({ progress, isLoaded }) {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#FFFFFF] flex flex-col items-center justify-center px-4 select-none pointer-events-auto"
        >
          {/* Main Brand Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.24em] font-medium uppercase text-[#111111]">
              {BRAND.name}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase font-sans font-medium text-[#666666] mt-2 mb-10">
              CURTAIN ATELIER · KERALA
            </span>

            {/* Minimalist Hairline Progress Bar */}
            <div className="w-48 sm:w-56 h-[1.5px] bg-[#EAEAEA] overflow-hidden mb-3.5 relative">
              <motion.div
                className="h-full bg-[#111111]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
              />
            </div>

            {/* Percentage Indicator */}
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#666666] uppercase">
              LOADING · {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

