import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'Do you bring fabric samples directly to our home in Kerala?',
    answer:
      'Yes, absolutely. Our window furnishing specialists bring comprehensive curated fabric swatch albums, motorized track demonstrations, and precision laser measurement equipment directly to your residence anywhere across Kerala—completely free of charge with zero obligation.',
  },
  {
    question: 'How long does custom curtain tailoring and installation take?',
    answer:
      'From your initial in-home fabric selection and laser survey, our master tailors stitch and hand-weight your drapes within 7 to 10 working days. Our senior technicians then complete the seamless track mounting and laser-leveled installation in a single convenient visit.',
  },
  {
    question: 'What warranty and after-sales support do you provide?',
    answer:
      'Every Cochin Decor project is backed by our comprehensive 7-year assurance covering curtain tracks, motorized systems, and artisanal stitching craftsmanship. We maintain dedicated local service support teams across all Kerala districts for swift assistance.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-[#EAEAEA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#666666] mb-3 font-semibold"
          >
            <span className="w-6 h-[1px] bg-[#111111]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span className="w-6 h-[1px] bg-[#111111]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight font-normal"
          >
            Everything You Need <br />
            <span className="italic">to Know.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs sm:text-base text-[#666666] max-w-lg mx-auto font-normal leading-relaxed"
          >
            Quick answers about our in-home Kerala consultation, bespoke tailoring, and 7-year service assurance.
          </motion.p>
        </div>

        {/* 3 Accordion FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#111111] bg-[#FDFCFB] shadow-sm'
                    : 'border-[#EAEAEA] bg-white hover:border-[#111111]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3.5 sm:space-x-4">
                    <span className="font-mono text-xs sm:text-sm text-[#C5A880] tracking-widest font-semibold shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-normal text-[#111111] tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? 'bg-[#111111] text-white'
                        : 'bg-[#F4F4F2] text-[#111111] hover:bg-[#111111] hover:text-white'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-[#F0F0EE]">
                        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light pl-7 sm:pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
