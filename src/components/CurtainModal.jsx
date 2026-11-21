import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Check, ArrowRight, MessageCircle } from 'lucide-react';
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
      <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm"
        />

        {/* Scrollable Container with Safe Top & Bottom Insets */}
        <div className="min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6 pt-6 sm:pt-10 pb-8 relative z-10 pointer-events-none">
          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative bg-white w-full max-w-3xl overflow-hidden shadow-2xl border border-[#EAEAEA] rounded-xl sm:rounded-2xl pointer-events-auto"
          >
            {/* Top Navigation Bar: Back Arrow on Left, Close X on Right */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30">
              <button
                onClick={onClose}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white/95 hover:bg-[#111111] text-[#111111] hover:text-white backdrop-blur-md rounded-full text-xs font-medium tracking-wider shadow-md border border-[#EAEAEA] transition-all cursor-pointer group"
                aria-label="Back to collection"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>Back</span>
              </button>
            </div>

            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
              <button
                onClick={onClose}
                className="p-2 bg-white/95 hover:bg-[#111111] text-[#111111] hover:text-white backdrop-blur-md rounded-full shadow-md border border-[#EAEAEA] transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-56 sm:h-72 md:h-full md:min-h-[360px] bg-[#F8F8F6]">
                <img
                  src={curtain.image}
                  alt={curtain.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-3 left-4 text-white text-[11px] font-mono uppercase tracking-widest md:hidden">
                  {BRAND.name} · KERALA
                </div>
              </div>

              {/* Content Side */}
              <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666] font-semibold">
                    Curtain Style Collection
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111111] mt-1 mb-1.5">
                    {curtain.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#666666] mb-3">
                    {curtain.tagline}
                  </p>

                  <div className="w-10 h-[1.5px] bg-[#111111] mb-4" />

                  <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-3.5">
                    {curtain.description}
                  </p>

                  <p className="text-xs text-[#666666] leading-relaxed mb-5 bg-[#F8F8F6] p-3 border border-[#EAEAEA]">
                    {curtain.details}
                  </p>

                  <div className="mb-5">
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
                    className="w-full py-3 bg-[#111111] text-white text-xs font-medium tracking-[0.08em] uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-sm active:scale-98"
                  >
                    <span>Request In-Home Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full py-2.5 bg-[#F8F8F6] border border-[#EAEAEA] text-[#111111] text-xs font-medium tracking-[0.08em] uppercase hover:bg-white hover:border-[#111111] transition-colors flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

