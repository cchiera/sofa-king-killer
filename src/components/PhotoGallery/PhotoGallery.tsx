"use client";

import { useState } from "react";
import Image from "next/image";
import "./PhotoGallery.css";

export interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="photo-gallery">
        {photos.map((photo, i) => (
          <button
            key={i}
            className="photo-gallery__item"
            onClick={() => setActivePhoto(photo)}
            aria-label={`View ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={0}
              height={0}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </button>
        ))}
      </div>

      {activePhoto && (
        <div
          className="photo-gallery__modal"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
        >
          <button
            className="photo-gallery__modal-close"
            onClick={() => setActivePhoto(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <div
            className="photo-gallery__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {activePhoto.alt && (
              <p className="photo-gallery__modal-caption">{activePhoto.alt}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
