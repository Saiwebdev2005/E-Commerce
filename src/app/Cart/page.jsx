"use client";
import React, { useContext } from 'react';
import { CartContext } from '@/context'; // Import CartContext

function Page() {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Cart Items:</h1>
      {cart.map((item, index) => (
        <div key={index} className="p-4 border rounded shadow mb-2 w-full max-w-md">
          <h2 className="text-xl">{item.title}</h2>
          <p>{item.description}</p>
          {/* Add more fields as necessary */}
        </div>
      ))}
    </div>
  )
}

export default Page;
