"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GalleryGridProps = {
  images: string[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, index) => (
        <motion.article
          key={`${src}-${index}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-3xl border border-[#0B5D3B]/10 bg-white shadow-sm"
        >
          <div className="relative h-[280px] sm:h-[320px]">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.article>
      ))}
    </div>
  );
}
