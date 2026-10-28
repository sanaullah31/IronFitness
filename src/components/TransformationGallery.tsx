import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const TransformationGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Weights', 'Functional', 'Cardio', 'Facility'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#FF3030] mb-2">
              Inside IronFit Compound
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white">
              FACILITY &amp; TRAINING GALLERY
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Take a closer look at our competition weight pits, turf sprint zones, and modern conditioning machinery.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#171717] rounded-lg border border-neutral-800 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FF3030] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer border border-neutral-800/80 bg-neutral-900"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#FF3030] transition-all transform scale-90 group-hover:scale-100">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF3030]">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white mt-0.5 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-400 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900/80 hover:bg-[#FF3030] text-neutral-300 hover:text-white border border-neutral-800 transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-[#FF3030] text-neutral-300 hover:text-white border border-neutral-800 transition-colors z-50 cursor-pointer hidden sm:flex"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-[#FF3030] text-neutral-300 hover:text-white border border-neutral-800 transition-colors z-50 cursor-pointer hidden sm:flex"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-full flex items-center justify-center rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950">
              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3030]">
                {filteredItems[activeLightboxIndex].category} · {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl mx-auto">
                {filteredItems[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
