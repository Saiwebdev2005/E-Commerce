"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import fetchPurchaseData from '@/utils/fetchPurchaseData';

function Page() {
  const {data:session} = useSession();
  const name = session?.user?.name;
  const [userData, setUserData] = useState(null); // initialize userData as null

  // call the fetchUserData function when the component mounts and userName is defined
  useEffect(() => {
    if (name) {
      const fetchData = async () => {
        const data = await fetchPurchaseData(name);
        setUserData(data);
      };
  
      fetchData();
    }
  }, [name]);

  // check if userData is still null
  if (!userData) {
    return <div>Loading...</div>; // return a loading message
  }
  
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {userData.map((item, index) => (
        <div key={index}>
          <h2>Total Spending: ${item.totalAmount}</h2>
          <h2>Number of Items in Cart: {item.cartLength}</h2>
        </div>
      ))}
    </div>
  )
}

export default Page;

