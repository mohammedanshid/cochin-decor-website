import React, { useRef, useState, useEffect, useCallback } from 'react';
import Loader from './components/Loader';
import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import CurtainCollection from './components/CurtainCollection';
import RecentWorkMarquee from './components/RecentWorkMarquee';
import ModernBlinds from './components/ModernBlinds';
import WhyChooseUs from './components/WhyChooseUs';
import VisualExperience from './components/VisualExperience';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CollectionPage from './components/CollectionPage';

function App() {
  const consultationRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    return window.location.pathname.startsWith('/collection') ? 'collection' : 'home';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = () => {
      if (window.location.pathname.startsWith('/collection')) {
        setCurrentView('collection');
      } else {
        try {
          sessionStorage.setItem('cochin_curtain_opened', 'true');
        } catch {}
        setCurrentView('home');
        // When popping back from collection, redirect straight to #about to avoid redoing hero animation
        const scrollToAbout = () => {
          const target = document.querySelector('#about');
          if (target) {
            const navOffset = 70;
            const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
            window.scrollTo({ top: targetTop, behavior: 'instant' });
          }
        };
        scrollToAbout();
        requestAnimationFrame(scrollToAbout);
        setTimeout(scrollToAbout, 30);
        setTimeout(scrollToAbout, 100);
        setTimeout(scrollToAbout, 250);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToCollection = (_selectedId = null) => {
    try {
      sessionStorage.setItem('cochin_curtain_opened', 'true');
    } catch {}
    window.history.pushState({}, '', '/collection');
    setCurrentView('collection');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToHome = (targetHash = '#about') => {
    try {
      sessionStorage.setItem('cochin_curtain_opened', 'true');
    } catch {}
    window.history.pushState({}, '', '/');
    setCurrentView('home');
    if (targetHash) {
      const scrollToTarget = () => {
        const target = document.querySelector(targetHash);
        if (target) {
          const navOffset = 70;
          const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: targetTop, behavior: 'instant' });
        }
      };
      // Jump instantly past the hero scroll canvas so the user is directly at #about
      scrollToTarget();
      requestAnimationFrame(scrollToTarget);
      setTimeout(scrollToTarget, 30);
      setTimeout(scrollToTarget, 100);
      setTimeout(scrollToTarget, 250);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

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
    if (currentView === 'collection') {
      navigateToHome('#contact');
      setTimeout(() => {
        if (stylePreference && consultationRef.current) {
          consultationRef.current.setStylePreference(stylePreference);
        }
      }, 150);
      return;
    }

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

  // Dedicated Collection Page View
  if (currentView === 'collection') {
    return (
      <CollectionPage
        onBackToHome={() => navigateToHome('#about')}
        onEnquireStyle={(style) => scrollToConsultation(style)}
      />
    );
  }

  // Home Page View
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

        {/* Explore Our Curtain Collection (4 Featured Cards + Explore More Button) */}
        <CurtainCollection
          onEnquireStyle={(style) => scrollToConsultation(style)}
          onNavigateToCollection={navigateToCollection}
        />

        {/* Sliding Image Marquee showing Recent Work & Completed Installations */}
        <RecentWorkMarquee />

        {/* Modern Blinds & Automated Shading Solutions (Horizontal scroll on mobile) */}
        <ModernBlinds onSelectSolution={(sol) => scrollToConsultation(sol)} />

        {/* Why Choose Cochin Decor — Stacking Cards with Title & Subtitle only */}
        <WhyChooseUs onBookConsultation={() => scrollToConsultation()} />

        {/* Immersive Visual Curtain Experience */}
        <VisualExperience onBookConsultation={() => scrollToConsultation()} />

        {/* Our Simple 4-Step Process (Black Hover effect) */}
        <Process />

        {/* Floating Testimonials Marquee Moving Left to Right */}
        <Testimonials />

        {/* Frequently Asked Questions (3 Key Questions) */}
        <FAQ />

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
