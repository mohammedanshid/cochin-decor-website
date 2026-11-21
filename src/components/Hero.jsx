import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const TOTAL_FRAMES = 120;

// Text is only shown after entering the unfinished area (progress ~0.12 to ~0.84)
// No text on frame 0 (black curtain) and no text on last frames (Cochin Decor curtain reveal)
const ACTIVE_STAGES = [
  {
    range: [0.12, 0.38],
    eyebrowText: 'COCHIN DECOR · KERALA',
    titleLine1: 'Bare space',
    titleLine2: 'to finished design.',
    description: 'Watch the space unfold as bespoke drapery opens to reveal the raw architectural canvas.',
    prompt: 'WATCH THE ROOM COME TOGETHER',
  },
  {
    range: [0.38, 0.64],
    eyebrowText: 'ARCHITECTURAL TRANSFORMATION',
    titleLine1: 'Bare drywall',
    titleLine2: 'to luxury living.',
    description: 'Finishing walls, warm herringbone wood, and tailored window blinds coming together as one.',
    prompt: 'WATCH THE ROOM COME TOGETHER',
  },
  {
    range: [0.64, 0.84],
    eyebrowText: 'TAILORED LIGHT CONTROL',
    titleLine1: 'Natural glare',
    titleLine2: 'to soft daylight.',
    description: 'Modern vertical vanes and sheer fabrics gently filtering tropical sunlight into a soothing ambient glow.',
    prompt: 'WATCH THE LIGHT TRANSFORM',
  },
];

export default function Hero({ onLoadingProgress, onLoadingComplete, onBookConsultation: _onBookConsultation }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const currentFrameRef = useRef(0);
  const lastDrawnFrameRef = useRef(-1);
  const isInitialDrawDoneRef = useRef(false);

  // Responsive device check for mobile vertical frames vs desktop landscape frames
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  // Keep callback refs stable to prevent unneeded effect restarts
  const onProgressRef = useRef(onLoadingProgress);
  const onCompleteRef = useRef(onLoadingComplete);

  useEffect(() => {
    onProgressRef.current = onLoadingProgress;
    onCompleteRef.current = onLoadingComplete;
  }, [onLoadingProgress, onLoadingComplete]);

  // Handle window resize between mobile and desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => {
        if (prev !== mobile) {
          isInitialDrawDoneRef.current = false;
          lastDrawnFrameRef.current = -1;
          return mobile;
        }
        return prev;
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper to get image path (mobile vertical 1080x1920 vs desktop 1920x1080)
  const getFrameUrl = useCallback((index, mobileMode) => {
    const pad = String(index).padStart(3, '0');
    if (mobileMode) {
      return `/images/mobile-optimized/frame_${pad}.webp`;
    }
    return `/images/optimized/frame_${pad}.webp`;
  }, []);

  // Helper to draw image cover onto canvas with proper devicePixelRatio
  const drawFrame = useCallback((img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = canvas.clientWidth || window.innerWidth;
    const displayHeight = canvas.clientHeight || window.innerHeight;

    const targetWidth = Math.round(displayWidth * dpr);
    const targetHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Calculate object-fit: cover
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = displayWidth / displayHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = displayWidth;
      drawHeight = displayWidth / imgRatio;
      offsetX = 0;
      offsetY = (displayHeight - drawHeight) / 2;
    } else {
      drawHeight = displayHeight;
      drawWidth = displayHeight * imgRatio;
      offsetX = (displayWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    ctx.restore();
  }, []);

  // Helper to render the closest available loaded frame to targetIndex
  const renderBestFrame = useCallback((targetIndex) => {
    const images = imagesRef.current;
    if (!images || images.length === 0) return;

    // Check exact target frame
    const exact = images[targetIndex];
    if (exact && exact.complete && exact.naturalWidth > 0) {
      drawFrame(exact);
      lastDrawnFrameRef.current = targetIndex;
      return;
    }

    // Search outwards for closest loaded frame (backward preferred)
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIndex - offset;
      if (prev >= 0 && images[prev]?.complete && images[prev]?.naturalWidth > 0) {
        drawFrame(images[prev]);
        lastDrawnFrameRef.current = prev;
        return;
      }
      const next = targetIndex + offset;
      if (next < TOTAL_FRAMES && images[next]?.complete && images[next]?.naturalWidth > 0) {
        drawFrame(images[next]);
        lastDrawnFrameRef.current = next;
        return;
      }
    }
  }, [drawFrame]);

  // Preload frames once with stable callbacks
  useEffect(() => {
    let isCancelled = false;
    const images = [];
    let loadedCount = 0;

    // Load initial frame immediately for instant first paint
    const initFrameIdx = 0;
    const initialImg = new Image();
    initialImg.src = getFrameUrl(initFrameIdx, isMobile);
    initialImg.onload = () => {
      if (isCancelled) return;
      images[initFrameIdx] = initialImg;
      if (!isInitialDrawDoneRef.current) {
        drawFrame(initialImg);
        isInitialDrawDoneRef.current = true;
        lastDrawnFrameRef.current = initFrameIdx;
      }
    };

    // Load all frames and track progress
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i, isMobile);
      img.onload = () => {
        if (isCancelled) return;
        loadedCount++;
        const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        if (onProgressRef.current) onProgressRef.current(pct);

        if (loadedCount >= TOTAL_FRAMES) {
          if (onCompleteRef.current) onCompleteRef.current();
        }

        // If this image is closer to the current requested frame than what is on canvas, draw it
        const currentTarget = currentFrameRef.current;
        const currentDist = Math.abs(currentTarget - lastDrawnFrameRef.current);
        const newDist = Math.abs(currentTarget - i);
        if (newDist < currentDist || lastDrawnFrameRef.current === -1) {
          drawFrame(img);
          lastDrawnFrameRef.current = i;
        }
      };
      img.onerror = () => {
        if (isCancelled) return;
        loadedCount++;
        const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        if (onProgressRef.current) onProgressRef.current(pct);
        if (loadedCount >= TOTAL_FRAMES && onCompleteRef.current) onCompleteRef.current();
      };
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
    };
  }, [drawFrame, getFrameUrl, isMobile]);

  // Handle scroll and frame mapping
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) {
            ticking = false;
            return;
          }

          const rect = container.getBoundingClientRect();
          const totalScrollable = Math.max(1, rect.height - window.innerHeight);
          const currentScrolled = Math.max(0, -rect.top);

          let progress = currentScrolled / totalScrollable;
          progress = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 0));

          setScrollProgress(progress);

          // Calculate frame index (0 to 119)
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.floor(progress * TOTAL_FRAMES))
          );

          if (frameIndex !== currentFrameRef.current) {
            currentFrameRef.current = frameIndex;
            renderBestFrame(frameIndex);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const handleWindowResize = () => {
      renderBestFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [renderBestFrame]);

  // Determine which active text stage to show (only between 0.12 and 0.84 on scrub)
  const isTextVisible = scrollProgress >= 0.12 && scrollProgress <= 0.84;
  
  let currentStageIndex = -1;
  if (isTextVisible) {
    if (scrollProgress < 0.38) {
      currentStageIndex = 0;
    } else if (scrollProgress < 0.64) {
      currentStageIndex = 1;
    } else {
      currentStageIndex = 2;
    }
  }

  const currentStageData = currentStageIndex >= 0 ? ACTIVE_STAGES[currentStageIndex] : null;

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative h-[280vh] md:h-[340vh] bg-[#111111]"
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden flex flex-col justify-end">
        
        {/* Render Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Bottom Section: Positioned with clean responsive padding */}
        <div className="relative z-10 w-full px-5 sm:px-12 md:px-16 lg:px-20 max-w-7xl mx-auto pb-4 sm:pb-6">
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              {isTextVisible && currentStageData && (
                <motion.div
                  key={currentStageIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-1.5 sm:space-y-3"
                >
                  {/* Eyebrow - Small uppercase */}
                  <div className="text-[9px] sm:text-[11px] font-normal tracking-[0.24em] uppercase text-[#7A2828]">
                    {currentStageData.eyebrowText}
                  </div>

                  {/* Heading - Slender font thickness (font-normal), Line 1 Black (no white shadow), Line 2 White */}
                  <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl lg:text-[66px] font-normal tracking-[-0.025em] leading-[1.08]">
                    {/* First line: Black font, NO white shadow */}
                    <span className="block text-[#111111] font-normal">
                      {currentStageData.titleLine1}
                    </span>
                    {/* Second line: White font */}
                    <span className="block text-white font-normal italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                      {currentStageData.titleLine2}
                    </span>
                  </h1>

                  {/* Description - Slender, natural sans-serif */}
                  <p className="text-[11px] sm:text-sm md:text-base text-[#222222] max-w-md leading-relaxed font-normal pt-0.5">
                    {currentStageData.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Centered Prompt */}
        <div className="relative z-10 pb-5 sm:pb-6 text-center pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={scrollProgress < 0.12 ? 'curtain' : scrollProgress > 0.84 ? 'atelier' : 'transform'}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="inline-flex flex-col items-center"
            >
              <span
                className={`text-[9px] sm:text-[10px] font-medium tracking-[0.28em] uppercase font-sans transition-colors ${
                  scrollProgress < 0.12 ? 'text-white/80' : scrollProgress > 0.84 ? 'text-white/80' : 'text-[#111111]/80'
                }`}
              >
                {scrollProgress < 0.12
                  ? 'SCROLL TO OPEN CURTAIN'
                  : scrollProgress > 0.84
                  ? 'COCHIN DECOR ATELIER'
                  : 'WATCH THE ROOM COME TOGETHER'}
              </span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="mt-1"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 ${
                    scrollProgress < 0.12 ? 'text-white/70' : scrollProgress > 0.84 ? 'text-white/70' : 'text-[#111111]/70'
                  }`}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Scroll Progress Bar at Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/10 z-20">
          <div
            className="h-full bg-[#111111] transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

      </div>
    </div>
  );
}
