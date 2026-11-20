import React, { useRef, useState, useEffect, useCallback } from 'react';
import Loader from './components/Loader';
import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import CurtainCollection from './components/CurtainCollection';
import ModernBlinds from './components/ModernBlinds';
import WhyChooseUs from './components/WhyChooseUs';
import VisualExperience from './components/VisualExperience';
import Process from './components/Process';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const consultationRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth loading progression that transitions gracefully into the page
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 6;
      if (current >= 100) {
        current = 100;
        setLoadingProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 300);
      } else {
        setLoadingProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleLoadingProgress = useCallback((pct) => {
    setLoadingProgress((prev) => Math.max(prev, pct));
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setLoadingProgress(100);
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  const scrollToConsultation = (stylePreference = null) => {
    if (stylePreference && consultationRef.current) {
      consultationRef.current.setStylePreference(stylePreference);
    }
    const target = document.querySelector('#contact');
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
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#111111] selection:text-white">
      {/* Luxury White Loading Screen with Black Font */}
      <Loader progress={loadingProgress} isLoaded={isLoaded} />

      {/* Floating Capsule Navbar matching Levanto reference */}
      <FloatingNavbar onBookConsultation={() => scrollToConsultation()} />

      <main>
        {/* Full Screen Interactive Canvas Scroll Hero */}
        <Hero
          onLoadingProgress={handleLoadingProgress}
          onLoadingComplete={handleLoadingComplete}
          onBookConsultation={() => scrollToConsultation()}
        />

        {/* Editorial Introduction — The Art of Window Dressing */}
        <Introduction onBookConsultation={() => scrollToConsultation()} />

        {/* Explore Our Curtain Collection — The Main Showcase */}
        <CurtainCollection onEnquireStyle={(style) => scrollToConsultation(style)} />

        {/* Modern Blinds & Automated Curtain Solutions */}
        <ModernBlinds onSelectSolution={(sol) => scrollToConsultation(sol)} />

        {/* Why Choose Cochin Decor — 7-Year Assurance */}
        <WhyChooseUs onBookConsultation={() => scrollToConsultation()} />

        {/* Immersive Visual Curtain Experience */}
        <VisualExperience onBookConsultation={() => scrollToConsultation()} />

        {/* Our Simple 4-Step Process */}
        <Process />

        {/* In-Home Consultation Booking Form with Direct WhatsApp Integration */}
        <Consultation ref={consultationRef} />
      </main>

      {/* Luxury Black Footer */}
      <Footer onBookConsultation={() => scrollToConsultation()} />

      {/* Floating Quick WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
