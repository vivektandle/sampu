import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { galleryCategories, galleryItems, type GalleryCategory } from '@/src/data/gallery';
import { SmartImage } from './SmartImage';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';

interface GalleryGridProps {
  limit?: number;
  showFilters?: boolean;
}

export function GalleryGrid({ limit, showFilters = true }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const visibleItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + visibleItems.length) % visibleItems.length
    );
  }, [visibleItems.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % visibleItems.length));
  }, [visibleItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  const activeItem = lightboxIndex !== null ? visibleItems[lightboxIndex] : null;

  return (
    <div>
      {showFilters && (
        <div
          role="group"
          aria-label="Gallery category filters"
          className="mb-8 flex flex-wrap gap-2"
        >
          {galleryCategories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setLightboxIndex(null);
                }}
                className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#363789] text-white shadow-xs'
                    : 'border border-slate-200 bg-white text-[#68778A] hover:border-[#363789]/40 hover:text-[#363789]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleItems.map((item, idx) => (
          <figure
            key={item.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="relative block aspect-[16/10] w-full overflow-hidden bg-[#F5F6FA] text-left cursor-pointer"
              aria-label={`Open ${item.title} in lightbox`}
            >
              <SmartImage
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[#363789]/0 transition-colors duration-200 group-hover:bg-[#363789]/40 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-[#363789] shadow">
                  <Expand className="h-3.5 w-3.5 text-[#EC3237]" aria-hidden="true" />
                  <span>View Photo</span>
                </span>
              </div>
            </button>
            <figcaption className="p-3.5">
              <p className="text-[11px] font-semibold text-[#EC3237]">{item.category}</p>
              <h3 className="mt-0.5 font-heading text-sm font-semibold text-[#363789] line-clamp-1">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-[#68778A] leading-relaxed line-clamp-2">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxIndex(null);
        }}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-[#202124] border-[#363789]">
          {activeItem && (
            <div>
              <DialogTitle className="sr-only">{activeItem.title}</DialogTitle>
              <div className="relative aspect-[16/10] w-full bg-black">
                <SmartImage
                  src={activeItem.image}
                  alt={activeItem.alt}
                  loading="eager"
                  className="h-full w-full object-contain"
                />
                {visibleItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous gallery image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-white hover:bg-[#EC3237] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next gallery image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-white hover:bg-[#EC3237] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#363789] p-5 text-white">
                <div>
                  <p className="text-xs font-semibold text-white underline decoration-[#EC3237] decoration-2 underline-offset-4">
                    {activeItem.category}
                  </p>
                  <p className="mt-1 font-heading text-base font-semibold">{activeItem.title}</p>
                  <p className="text-xs text-slate-200 mt-0.5">{activeItem.caption}</p>
                </div>
                <span className="font-mono text-xs text-slate-200 tabular-nums shrink-0">
                  {(lightboxIndex ?? 0) + 1} / {visibleItems.length}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
