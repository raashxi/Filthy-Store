"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useState } from "react";

export function ImageGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (images.length === 0) return null;

  const activeImage = images[activeIndex];

  return (
    <section>
      <div className="gallery-stage corner-frame">
        <Image
          src={activeImage}
          alt={`Account screenshot ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1160px) 100vw, 62vw"
        />
        <button type="button" className="brand-button" style={{ position: "absolute", top: 18, right: 18, minHeight: 42 }} onClick={() => setLightboxOpen(true)}>
          <Maximize2 size={16} /> Zoom
        </button>
      </div>

      {images.length > 1 && (
        <div className="thumb-grid">
          {images.map((url, index) => (
            <button
              key={`${url}-${index}`}
              type="button"
              className={`thumb ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open screenshot ${index + 1}`}
            >
              <Image src={url} alt={`Thumbnail ${index + 1}`} fill sizes="160px" />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <button type="button" aria-label="Close lightbox" className="icon-button lightbox-close" onClick={() => setLightboxOpen(false)}>
            <X size={22} />
          </button>
          <Image
            src={activeImage}
            alt={`Zoomed account screenshot ${activeIndex + 1}`}
            width={1920}
            height={1080}
            priority
          />
        </div>
      )}
    </section>
  );
}
