import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Introduction() {
  const stats = [
    {
      target: 450,
      suffix: '+',
      label: 'Residences draped across Kerala',
    },
    {
      target: 7,
      suffix: ' yrs',
      label: 'Comprehensive track & fabric warranty',
    },
    {
      target: 10,
      suffix: ' days',
      label: 'Typical project, selection to laser fitting',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#14110F] text-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: About Us Content matching Reference */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A880] mb-5"
            >
              ABOUT US
            </motion.div>

            {/* Big Two-Tone Serif Heading: Line 1 in White, Line 2 in Gold/Bronze */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-normal tracking-[-0.03em] leading-[1.04] mb-7"
            >
              <span className="block text-white">
                Tailored drapes,
              </span>
              <span className="block text-[#C5A880]">
                built to last.
              </span>
            </motion.h2>

            {/* Narrative Description tailored for Cochin Decor */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-[17px] text-[#C4BCB5] leading-relaxed font-light max-w-xl mb-10"
            >
              Cochin Decor is a Kerala bespoke curtain and window furnishing studio specializing in luxury draperies, European fabrics, and motorized light control. We select textiles with you in your home, calculate how every fold and wave will fall before anything is tailored, and our master technicians manage your installation from laser measurement to the final perfect drape.
            </motion.p>

            {/* Minimal Hairline Divider */}
            <div className="w-full h-[1px] bg-[#2D2622] mb-10 sm:mb-12" />

            {/* Three Large Stat Columns with Animated Countdown / Countup */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
                  className="flex flex-col"
                >
                  <div className="font-serif text-4xl sm:text-5xl md:text-[56px] font-normal text-[#C5A880] tracking-tight leading-none mb-2.5">
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      duration={1600 + idx * 250}
                    />
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#A69E98] leading-relaxed font-light max-w-[170px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Tall High-Resolution Photorealistic Curtain Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
                alt="Luxury living room featuring tailored floor-to-ceiling drapes and warm ambient lighting"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle architectural vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              
              {/* Refined corner watermark / hallmark */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/15">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#C5A880] font-sans">
                  Crafted by Cochin Decor
                </div>
                <div className="text-xs text-white/90 font-serif font-light mt-0.5">
                  Bespoke pinch pleat drapes in warm neutral weave
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
