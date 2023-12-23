"use client";
// HomeProduct.js

import React, { useContext,useState,useEffect } from 'react';
import Card from '../UI/Card';
import { CartContext } from '@/context'; // Import CartContext
import Data from '../../utils/fetchData'
import Link from 'next/link';

function HomeProduct() {
  const [data, setData] = useState([]); // The data to display
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Destructure addToCart from context
  
  //Fetch The data
  useEffect(() => {
    const fetchData = async () => {
      const result = await Data(); // Fetch the data
      setData(result); // Set the fetched data
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  },[]);
  return (
    <div className='flex flex-col max-w-6xl mx-auto justify-center items-center space-y-4 mt-12'>
      <div>
        <h1 className='text-3xl md:text-6xl font-bold text-c2'>Our New Arrivals</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-12'>
      {data.slice(0, 3).map((data, index) => (
    <Card 
    key={index}
    image={data.image} 
    title={data.title} 
    description={data.description} 
    gender={data.gender}
    price={data.price} // pass the price here
    className="w-full h-48 object-cover"
    onButtonClick={() => addToCart(data)} // Use addToCart function here
/>
  ))}
      </div>
      <div>
        <button className='button mb-6'><Link href='\NewArrival'>View More</Link></button>
      </div>
    </div>
  );
}

export default HomeProduct;

