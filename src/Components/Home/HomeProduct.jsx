import React from 'react'
import Card from '../UI/Card'
import cardData from './HomeCardData';
function HomeProduct() {
  return (
    <div className='flex flex-col max-w-6xl mx-auto justify-center items-center space-y-4 m-12'>
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
  </div>


  )
}

export default HomeProduct