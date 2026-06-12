"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import type { GalleryImage } from "@/types/content";
import Lightbox from "./Lightbox";

interface MasonryGalleryProps {
  images: GalleryImage[];
}

export default function MasonryGallery({ images }: MasonryGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-stone">
        No photos yet. Drop some images into{" "}
        <code className="rounded bg-charcoal px-2 py-1 text-gold">/public/gallery</code> to
        see them here.
      </p>
    );
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg bg-charcoal"
            aria-label={`Open ${image.name} in full screen`}
          >
            <Image
              src={image.src}
              alt={image.name}
              width={image.width}
              height={image.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
              <Expand className="text-cream" size={28} />
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChangeIndex={setActiveIndex}
        />
      )}
    </>
  );
}
