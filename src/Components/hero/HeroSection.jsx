"use client";
import React, { useState } from 'react';

const images = [
  "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg",
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
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div id="default-carousel" className="relative w-full h-[200px] md:h-[675px]">
      <div className="relative h-full overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}>
            <img src={image} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        ))}
      </div>
      <div className="bg-c3 -mb-4 md:mb-0 md:p-2 rounded-xl absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-1 md:space-x-3 rtl:space-x-reverse">
  {images.map((_, index) => (
    <button 
      key={index} 
      type="button" 
      className="flex justify-center items-center w-1 md:w-4 h-1 md:h-full rounded-full button md:px-4 px-2 text-xs" 
      aria-current={index === activeIndex} 
      aria-label={`Slide ${index + 1}`} 
      onClick={() => setActiveIndex(index)}
    >
     <span className='md:font-bold'>{index + 1}</span> 
    </button>
  ))}
</div>

    </div>

  );
}

export default Carousel;
