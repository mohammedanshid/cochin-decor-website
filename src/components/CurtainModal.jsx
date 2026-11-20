import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/curtainData';

export default function CurtainModal({ curtain, isOpen, onClose, onEnquire }) {
  if (!isOpen || !curtain) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Cochin Decor, I am interested in your ${curtain.title} collection for my home. Please share fabric options and consultation details.`
    );
    window.open(`https://wa.me/917902797037?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white w-full max-w-3xl overflow-hidden shadow-2xl border border-[#EAEAEA] z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-md rounded-full text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 md:h-full min-h-[320px] bg-[#F8F8F6]">
              <img
                src={curtain.image}
                alt={curtain.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 text-white text-xs font-mono uppercase tracking-widest md:hidden">
                {BRAND.name}
              </div>
            </div>

            {/* Content Side */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666] font-semibold">
                  Curtain Style Collection
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111111] mt-1 mb-2">
                  {curtain.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#666666] mb-4">
                  {curtain.tagline}
                </p>

                <div className="w-10 h-[1.5px] bg-[#111111] mb-5" />

                <p className="text-sm text-[#444444] leading-relaxed mb-4">
                  {curtain.description}
                </p>

                <p className="text-xs text-[#666666] leading-relaxed mb-6 bg-[#F8F8F6] p-3 border border-[#EAEAEA]">
                  {curtain.details}
                </p>

                <div className="mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#111111] font-semibold mb-2">
                    Key Architectural Features:
                  </div>
                  <ul className="space-y-1.5">
                    {curtain.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-xs text-[#444444]">
                        <Check className="w-3.5 h-3.5 text-[#111111] mr-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-[#EAEAEA]">
                <button
                  onClick={() => {
                    onClose();
                    onEnquire(curtain.title);
                  }}
                  className="w-full py-3 bg-[#111111] text-white text-xs font-medium tracking-[0.08em] uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Request In-Home Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 bg-[#F8F8F6] border border-[#EAEAEA] text-[#111111] text-xs font-medium tracking-[0.08em] uppercase hover:bg-white hover:border-[#111111] transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#111111]" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

