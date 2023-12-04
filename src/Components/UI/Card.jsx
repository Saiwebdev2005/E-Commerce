import React from 'react'

function Card({image, title, description}) {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="text-lg sm:text-xl font-bold mb-2">{title}</div>
        <p className="text-sm sm:text-base text-gray-700">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-end">
        <button className="text-sm sm:text-base button transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Buy Now</button>
      </div>
    </div>
  )
}

export default Card
