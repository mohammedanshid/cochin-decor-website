import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { BRAND } from '../data/curtainData';

export default function Navbar({ onBookConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Curtains', href: '#curtains' },
    { name: 'Blinds', href: '#blinds' },
    { name: 'Why Cochin Decor', href: '#why-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-[0_1px_0_0_#EAEAEA]'
            : 'bg-white py-5 border-b border-[#EAEAEA]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex flex-col"
            >
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#111111] uppercase transition-colors group-hover:text-black">
                {BRAND.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#666666] font-sans -mt-0.5">
                Kerala • Window Furnishings
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-[13px] font-medium tracking-[0.06em] uppercase text-[#111111] hover:text-[#666666] transition-colors duration-200 py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#111111] transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action / CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="inline-flex items-center text-xs tracking-wider uppercase text-[#666666] hover:text-[#111111] transition-colors pr-2"
                title="Call Cochin Decor"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                <span>{BRAND.phone}</span>
              </a>
              <button
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#111111] text-white text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-neutral-800 transition-all duration-200 shadow-sm active:scale-95 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#111111] hover:text-[#666666] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-[#EAEAEA] bg-white ${
            mobileMenuOpen ? 'max-h-[460px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 space-y-4">
            <div className="flex flex-col space-y-3 pb-4 border-b border-[#EAEAEA]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-serif tracking-wide text-[#111111] hover:text-[#666666] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col space-y-3">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center text-sm text-[#666666] hover:text-[#111111]"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Direct Hotline: {BRAND.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full py-3 bg-[#111111] text-white text-xs font-medium tracking-[0.08em] uppercase flex items-center justify-center space-x-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

