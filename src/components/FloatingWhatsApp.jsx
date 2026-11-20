import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto"
    >
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917902797037?text=Hello%20Cochin%20Decor%2C%20I%20would%20like%20to%20book%20a%20free%20in-home%20curtain%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#111111] text-white p-3.5 shadow-2xl hover:bg-neutral-800 transition-all duration-300 border border-neutral-700/50"
        title="Chat on WhatsApp with Cochin Decor"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs tracking-wider uppercase pr-0 group-hover:pr-2 font-medium">
          Chat on WhatsApp
        </span>
        <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
}

