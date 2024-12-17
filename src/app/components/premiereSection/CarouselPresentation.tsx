'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CarouselPresentation() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/img1.png",
    "/images/img2.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="mockup-browser border border-slate-900 w-auto h-auto">
      <div className="mockup-browser-toolbar">
        <div className="input">https://fivemusics.com</div>
      </div>
      <div className="bg-base-200 flex justify-center h-full w-full">
        <Image
          className="object-contain"
          src={images[currentImage]}
          alt={`img${currentImage + 1}`}
          width={1920}
          height={1080}
          objectFit="contain" // Preserve aspect ratio and contain within the parent
          priority // Optional: Set to true for faster loading of the first image
        />
      </div>
    </div>
  );
}
