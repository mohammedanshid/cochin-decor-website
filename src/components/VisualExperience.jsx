import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function VisualExperience({ onBookConsultation }) {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Full-width Immersive Photographic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
        >
          {/* Extraordinary photograph of luxury living room with floor-to-ceiling flowing sheer curtains and bright natural sunlight */}
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
            alt="Extraordinary luxury living room bathed in natural sunlight with floor-to-ceiling custom curtains"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Subtle dark overlay for optimal typography legibility while preserving sunlight vibrancy */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-black/30 to-black/70" />
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-white/80 mb-6 border border-white/30 px-4 py-1.5 backdrop-blur-xs"
        >
          <span>COCHIN DECOR CURTAIN ATELIER</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-tight text-white mb-6"
        >
          Let Natural Light Meet <br />
          <span className="italic font-light">Timeless Elegance.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Beautifully designed curtains make every space feel more complete.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#111111] text-xs font-semibold tracking-[0.12em] uppercase hover:bg-neutral-200 transition-all duration-300 shadow-xl group"
          >
            <span>Book In-Home Consultation</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="https://wa.me/917902797037?text=Hello%20Cochin%20Decor%2C%20I%20would%20like%20to%20know%20more%20about%20your%20curtain%20collections."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/60 text-white text-xs font-semibold tracking-[0.12em] uppercase hover:bg-white/10 transition-all duration-300"
          >
            <span>WhatsApp Quick Connect</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

