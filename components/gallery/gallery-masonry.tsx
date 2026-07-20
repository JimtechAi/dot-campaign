"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { useMemo, useState } from "react";

type GalleryMasonryProps = {
  images: string[];
};

type Category = "All" | "Portraits" | "Campaign" | "Traditional" | "Events" | "Members";

const categories: Category[] = ["All", "Portraits", "Campaign", "Traditional", "Events", "Members"];
const IMAGES_PER_PAGE = 9;

function inferCategory(src: string, index: number): Exclude<Category, "All"> {
  const value = src.toLowerCase();

  if (value.includes("portrait") || value.includes("candidate")) {
    return "Portraits";
  }

  if (value.includes("campaign")) {
    return "Campaign";
  }

  if (value.includes("event")) {
    return "Events";
  }

  if (value.includes("member") || value.includes("supporter") || value.includes("team")) {
    return "Members";
  }

  const fallback: Exclude<Category, "All">[] = ["Portraits", "Campaign", "Traditional", "Events", "Members"];
  return fallback[index % fallback.length];
}

export function GalleryMasonry({ images }: GalleryMasonryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const categorizedImages = useMemo(
    () => images.map((src, index) => ({ src, category: inferCategory(src, index) })),
    [images],
  );

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return categorizedImages;
    }

    return categorizedImages.filter((item) => item.category === selectedCategory);
  }, [categorizedImages, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredImages.length / IMAGES_PER_PAGE));

  const paginatedImages = useMemo(() => {
    const start = (currentPage - 1) * IMAGES_PER_PAGE;
    return filteredImages.slice(start, start + IMAGES_PER_PAGE);
  }, [filteredImages, currentPage]);

  const openLightbox = (absoluteIndex: number) => {
    setLightboxIndex(absoluteIndex);
    setZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomed(false);
  };

  const goToPreviousImage = () => {
    if (lightboxIndex === null) {
      return;
    }

    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    setZoomed(false);
  };

  const goToNextImage = () => {
    if (lightboxIndex === null) {
      return;
    }

    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    setZoomed(false);
  };

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pb-20 pt-14 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]">Gallery</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0B5D3B] sm:text-5xl">Campaign Moments</h1>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={[
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              selectedCategory === category
                ? "border-[#0B5D3B] bg-[#0B5D3B] text-white"
                : "border-[#0B5D3B]/20 bg-white text-[#0B5D3B] hover:border-[#C8A24C] hover:bg-[#C8A24C]/10",
            ].join(" ")}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredImages.length === 0 ? (
        <div className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-8 text-[#2E2E2E]/75 shadow-sm">
          No gallery images available for this category.
        </div>
      ) : (
        <>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {paginatedImages.map((item, index) => {
              const absoluteIndex = (currentPage - 1) * IMAGES_PER_PAGE + index;

              return (
                <motion.button
                  key={`${item.src}-${selectedCategory}-${index}`}
                  type="button"
                  onClick={() => openLightbox(absoluteIndex)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                  className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl border border-[#0B5D3B]/10 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0B5D3B]/12"
                >
                  <div className="relative">
                    <Image
                      src={item.src}
                      alt="SURV. David Olaniyi Taiwo (DOT)"
                      width={1000}
                      height={1400}
                      loading="lazy"
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="rounded-full border border-[#0B5D3B]/20 bg-white px-4 py-2 text-sm font-medium text-[#0B5D3B] shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-sm font-medium text-[#2E2E2E]/80">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full border border-[#0B5D3B]/20 bg-white px-4 py-2 text-sm font-medium text-[#0B5D3B] shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      )}

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToPreviousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => setZoomed((state) => !state)}
              className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label={zoomed ? "Zoom out" : "Zoom in"}
            >
              {zoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
            </button>

            <div className="max-h-[90vh] max-w-[90vw] overflow-auto rounded-2xl">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt="SURV. David Olaniyi Taiwo (DOT)"
                width={1800}
                height={2200}
                className={[
                  "h-auto max-h-[88vh] w-auto max-w-[88vw] rounded-2xl object-contain transition-transform duration-300",
                  zoomed ? "scale-125" : "scale-100",
                ].join(" ")}
                priority
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
