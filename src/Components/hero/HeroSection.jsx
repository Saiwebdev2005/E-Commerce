"use client";
import React, { useState } from 'react';

const images = [
  "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
  "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
  "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
  "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Change image every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div id="default-carousel" className="relative w-full mt-6">
      <div className="relative h-32 sm:h-48 md:h-56 lg:h-64 xl:h-96 overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}>
            <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current={index === activeIndex} aria-label={`Slide ${index + 1}`} onClick={() => setActiveIndex(index)}></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;