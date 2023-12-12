"use client"
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((currentCart) => [...currentCart, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart((currentCart) => {
      return currentCart.filter(item => item.id !== itemToRemove.id);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
