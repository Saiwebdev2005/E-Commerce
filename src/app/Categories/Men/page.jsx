"use client";
import React, { useState, useEffect,useContext } from 'react';
import cardData from '../../../Components/Data/cardData';
import Card from '@/Components/UI/Card';
import { CartContext } from '@/context';
function page() {
  const { addToCart } = useContext(CartContext);
  const [start, setStart] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    // Update the number of items per page when the window is resized
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 640 ? 8 : 15);
    };

    window.addEventListener('resize', handleResize);

    // Call the handleResize function to set the initial value of itemsPerPage
    handleResize();

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setStart(prevStart => prevStart + itemsPerPage);
  };
  const handlePrevious = () => {
    setStart(prevStart => Math.max(prevStart - itemsPerPage, 0));
  };

  // Filter the cardData to only include items where gender is "Male"
  const maleCardData = cardData.filter(data => data.gender === "Male");

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-2 gap-1 md:gap-4 md:grid-cols-3 justify-center items-center mt-16 mb-4'>
        {maleCardData.slice(start, start + itemsPerPage).map((data, index) => (
          <Card 
            key={index}
            image={data.image} 
            title={data.title} 
            description={data.description} 
            gender={data.gender}
            price={data.price} 
            className="w-full h-48 object-cover"
            onButtonClick={() => addToCart(data)}
          />
        ))}
      </div>
      <div className='flex flex-row justify-center items-center space-x-4 my-12'>
        <button className='button' onClick={handlePrevious} disabled={start === 0}>Previous</button>
        {start + itemsPerPage < maleCardData.length && <button className='button' onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
}

export default page;
