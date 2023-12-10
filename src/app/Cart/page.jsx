"use client"
import React, { useContext } from 'react';
import { CartContext } from '@/context'; // Import CartContext
import { formatCurrency } from '@/utils/formatCurrency'; // Import formatCurrency

function Page() {
  const { cart } = useContext(CartContext);

  // Calculate the total amount
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Cart Items:</h1>
      {cart.map((item, index) => (
        <div key={index} className="p-4 border rounded shadow mb-2 w-full max-w-md">
          <h2 className="text-xl">{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: {formatCurrency(item.price)}</p> {/* Display the price of each item */}
        </div>
      ))}
      <h2 className="text-xl font-bold">Total: {formatCurrency(totalAmount)}</h2> {/* Display the total amount */}
    </div>
  )
}

export default Page;
