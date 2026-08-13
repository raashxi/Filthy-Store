"use client";

import { useState } from "react";
import Image from "next/image";

export function ImageGallery({ images }: { images: string[] }) {
  // State to track which image is currently zoomed (-1 means modal is closed)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="mt-16 w-full border-t border-white/10 pt-12 relative z-20">
      <h2 className="mb-6 font-rajdhani text-2xl font-bold uppercase tracking-widest text-white/80">
        Inventory Showcase
      </h2>

      {/* Landscape Grid Layout */}
      {images.map((url, index) => (
          <div 
            key={index} 
            className="group relative w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-black/50 transition-all hover:border-green-500/50"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={url}
              alt={`Account screenshot ${index + 1}`}
              width={1920}
              height={1080}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Hover overlay hint */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/60">
              <span className="translate-y-4 font-rajdhani text-lg font-bold tracking-widest text-green-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                CLICK TO ZOOM
              </span>
            </div>
          </div>
        ))}

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute right-6 top-6 z-50 text-white/50 transition-colors hover:text-white"
            onClick={() => setSelectedIndex(null)}
          >
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Uncropped Image - STRICT DIMENSIONS FIX */}
          <div className="relative flex h-full w-full items-center justify-center cursor-zoom-out">
            <Image
              src={images[selectedIndex]}
              alt={`Zoomed account screenshot ${selectedIndex + 1}`}
              width={1920}
              height={1080}
              className="h-auto max-h-[85vh] w-auto max-w-full object-contain"
              priority
            />
          </div>
          <p className="mt-4 font-mono text-sm text-gray-500">Click anywhere to close</p>
        </div>
      )}
    </div>
  );
}