"use client";

import { useState } from "react";
import Image from "next/image";

const thumbnails = [
  { id: 1, src: "/white-shirt-thumbnail-1.jpg" },
  { id: 2, src: "/white-shirt-thumbnail-2.jpg" },
  { id: 3, src: "/white-shirt-thumbnail-3.jpg" },
  { id: 4, src: "/white-shirt-thumbnail-4.jpg" },
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-4">
      {/* Thumbnails */}
      <div className="flex order-2 lg:order-1 flex-row lg:flex-col 
        space-x-2 lg:space-x-0 lg:space-y-3 mt-2 lg:mt-0"
      >
        {thumbnails.map((thumb, idx) => (
          <button
            key={thumb.id}
            onClick={() => setSelectedImage(idx)}
            className={`relative w-20 h-24  border transition-colors overflow-hidden ${
              selectedImage === idx ? "border-foreground" : "border-border"
            }`}
          >
            <Image src={thumb.src} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="order-1 lg:order-2 relative w-full h-[300px] lg:h-[530px] overflow-hidden">
        <Image
          src={thumbnails[selectedImage].src}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
