import React from 'react';

const COMPLETED_PROJECTS = [
  {
    title: 'Waterfront Villa Residence',
    location: 'Marine Drive, Kochi',
    category: 'Motorized Wave Sheers',
    image: 'https://images.unsplash.com/photo-1619096897137-e5f01babdee7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Contemporary Lakeview Manor',
    location: 'Kumarakom, Kerala',
    category: 'Belgian Linen Pinch Pleats',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Minimalist Architectural Haven',
    location: 'Kozhikode City',
    category: 'Floor-to-Ceiling Blackout',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Modern Glasshouse Residence',
    location: 'Kowdiar, Trivandrum',
    category: 'Designer Roller & Zebra Blinds',
    image: 'https://images.unsplash.com/photo-1609423433459-a65b330ef5da?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Heritage Courtyard Residence',
    location: 'Thrissur Town',
    category: 'Natural Wood Venetian Blinds',
    image: 'https://images.unsplash.com/photo-1674766325986-2c577ca1957e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Skyline Penthouse Suites',
    location: 'Panampilly Nagar, Kochi',
    category: 'Bespoke S-Fold Architectural Drapes',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  },
];

export default function RecentWorkMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...COMPLETED_PROJECTS, ...COMPLETED_PROJECTS];

  return (
    <section className="py-12 sm:py-16 bg-[#F8F8F6] border-y border-[#EAEAEA] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold mb-2">
            <span className="w-5 h-[1px] bg-[#C5A880]" />
            <span>RECENT INSTALLATIONS · KERALA</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal tracking-tight">
            Completed Projects &amp; Recent Work
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#777777] max-w-sm">
          A glimpse into bespoke curtain and drapery installations tailored across luxury residences in Kerala.
        </p>
      </div>

      {/* Infinite Automatic Sliding Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Subtle Fade Edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F8F8F6] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F8F8F6] to-transparent z-10" />

        <div className="flex w-max space-x-4 sm:space-x-6 animate-marquee hover:[animation-play-state:paused] py-2">
          {marqueeItems.map((project, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[360px] md:w-[400px] flex-shrink-0 bg-white border border-[#EAEAEA] group overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAEAEA]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#C5A880] font-mono border border-white/10">
                  {project.category}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="font-serif text-base sm:text-lg font-medium leading-tight">
                    {project.title}
                  </div>
                  <div className="text-[11px] text-[#E0DBD5] font-light mt-0.5">
                    {project.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
