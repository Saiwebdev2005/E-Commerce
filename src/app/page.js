"use client"
import React, { useState, useEffect } from 'react';
import HomeProduct from '@/Components/Home/HomeProduct'
import HeroSection from '@/Components/hero/HeroSection'
import LoadingSpinner from '@/Components/UI/LoadingSpinner';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <LoadingSpinner />; // Show the loading spinner
  }

  return (
    <div className='bg-c1'>
      <HeroSection/>
      <HomeProduct/>
    </div>
  )
}
