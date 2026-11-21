import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function FloatingNavbar({ onBookConsultation }) {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('home');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setIsScrolledPastHero(rect.bottom <= 100);
      } else {
        setIsScrolledPastHero(window.scrollY > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Curtains', href: '#curtains' },
    { name: 'Blinds', href: '#blinds' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          isScrolledPastHero ? 'py-4 bg-white/85 backdrop-blur-md shadow-xs' : 'py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Logo on Left - Official Cochin Decor Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="pointer-events-auto group flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200/80 shadow-xs hover:bg-white transition-all"
          >
            <img
              src="/logo-black.png"
              alt="Cochin Decor"
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Capsule / Floating Pill on Right - Exactly matching reference */}
          <div className="hidden md:flex items-center pointer-events-auto">
            <div
              className={`flex items-center space-x-1 pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 ${
                isScrolledPastHero
                  ? 'bg-neutral-100/90 border border-neutral-300/80 shadow-sm'
                  : 'bg-white/75 backdrop-blur-md border border-neutral-200/80 shadow-xs hover:bg-white/90'
              }`}
            >
              <nav className="flex items-center space-x-6 mr-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[13px] font-medium tracking-[0.04em] text-[#111111] hover:text-[#555555] transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Capsule CTA Button */}
              <button
                onClick={onBookConsultation}
                className="px-5 py-2.5 rounded-full bg-[#111111] text-white text-[12px] font-medium tracking-[0.04em] hover:bg-neutral-800 transition-all duration-200 active:scale-95 shadow-xs cursor-pointer"
              >
                Book a consultation
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden pointer-events-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-300 text-[#111111] shadow-xs focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out pointer-events-auto ${
            mobileMenuOpen ? 'max-h-80 opacity-100 mt-3 px-6' : 'max-h-0 opacity-0 mt-0 px-6'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col space-y-3 pb-3 border-b border-neutral-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-serif text-[#111111] hover:text-[#666666] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookConsultation();
              }}
              className="w-full py-3 rounded-full bg-[#111111] text-white text-xs font-medium tracking-wide uppercase"
            >
              Book a consultation
            </button>
          </div>
        </div>

      </header>
    </>
  );
}
