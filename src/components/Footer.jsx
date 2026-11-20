import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { BRAND } from '../data/curtainData';

export default function Footer({ onBookConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Curtain Collection', href: '#curtains' },
    { name: 'Blinds', href: '#blinds' },
    { name: 'Our Advantage', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#111111] text-[#FFFFFF] border-t border-[#262626]">
      {/* Top Banner with Kerala architectural focus */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-[#262626]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#888888] font-sans block mb-1">
              Kerala's Benchmark In Window Dressing
            </span>
            <div className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Tailored Light Control for Kerala Homes.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onBookConsultation}
              className="px-6 py-3 bg-white text-[#111111] text-xs font-semibold tracking-[0.1em] uppercase hover:bg-neutral-200 transition-colors"
            >
              Book In-Home Consultation
            </button>
            <a
              href="https://wa.me/917902797037"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/30 text-white text-xs font-semibold tracking-[0.1em] uppercase hover:border-white transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <img
              src="/logo-white.png"
              alt="Cochin Decor"
              className="h-14 sm:h-16 w-auto object-contain mb-2"
            />
            <p className="text-sm text-[#AAAAAA] leading-relaxed max-w-sm">
              Bespoke curtains, premium fabrics, and custom window solutions across Kerala.
            </p>
            <div className="text-xs text-[#777777] leading-relaxed pt-2">
              Specialists in sheer curtains, blackout drapery, architectural wave folds, eyelet &amp; pinch pleats, and whisper-quiet motorized automation for luxury villas and apartments.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold">
              Contact Details
            </div>
            
            <div className="space-y-3 text-sm text-[#CCCCCC]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium">Location:</div>
                  <div className="text-[#AAAAAA]">{BRAND.location}</div>
                  <div className="text-xs text-[#777777] mt-0.5">{BRAND.serviceArea}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <div>
                  <div className="text-white font-medium">Phone:</div>
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="text-[#AAAAAA] hover:text-white transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <div>
                  <div className="text-white font-medium">Email:</div>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-[#AAAAAA] hover:text-white transition-colors"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-white shrink-0" />
                <div>
                  <div className="text-white font-medium">WhatsApp:</div>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AAAAAA] hover:text-white transition-colors"
                  >
                    +91 7902797037 (Click to chat)
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright & Scroll to Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[#262626]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <p>{BRAND.copyright}</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-[#AAAAAA] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

