import React from 'react'
import Card from '../UI/Card'
import cardData from './HomeCardData';
import Link from 'next/link';
function HomeProduct() {
  return (
    <div className='flex flex-col max-w-6xl mx-auto justify-center items-center space-y-4 mt-12'>
      <div>
        <h1 className='text-3xl md:text-6xl font-bold text-c2'>Our New Arrivals</h1>
      </div>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-12'>
      {cardData.map((data, index) => (
        <Card 
          key={index}
          image={data.image} 
          title={data.title} 
          description={data.description} 
        />
      ))}
    </div>
    <div>
      <button className='button mb-6'><Link href='\NewArrival'>View More</Link></button>
    </div>
  </div>


  )
}

export default HomeProduct