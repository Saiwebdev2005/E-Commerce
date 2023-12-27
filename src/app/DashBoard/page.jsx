"use client"
import React, { useState, useEffect } from 'react';
import { signOut } from "next-auth/react";
import { useSession } from 'next-auth/react';
import fetchPurchaseData from '@/utils/fetchPurchaseData';

function Page() {
  const [showModal, setShowModal] = useState(false);
  const {data:session} = useSession();
  const userName = session?.user?.name;
  const [userData, setUserData] = useState([]); // state to store the user data

  const handleSignOut = async (e) => {
    e.preventDefault();
    setShowModal(true);
    signOut({ callbackUrl: `${window.location.origin}/` });
  }

  // call the fetchUserData function when the component mounts and userName is defined
  useEffect(() => {
    if (userName) {
      const fetchData = async () => {
        const data = await fetchPurchaseData(userName);
        console.log(`The data received in Page is ${data}`)
        setUserData(data);
      };
  
      fetchData();
    }
  }, [userName]);
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-c1 text-c2">
      <div className="text-2xl mb-4">
        Welcome, {userName}!
      </div>
      <div className="text-xl mb-4">
        Total Spending: ${userData?.totalAmount}
      </div>
      <button 
        className="px-4 py-2 text-white bg-c3 rounded mb-4" 
        onClick={handleSignOut}
      >
        Sign Out
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black text-white p-12 rounded shadow-lg text-center">
            <h2 className="text-2xl mb-4">
              signing out
            </h2>
            <div className="flex flex-col justify-center items-center space-x-1">
              <p>Redirecting</p><span className="loading loading-dots loading-lg"></span>
            </div>
          </div>
        </div>
      )}
      <div className="mt-4">
        {/* Placeholder for future items */}
        {/* Replace this with your actual item components */}
        <div className="bg-c4 shadow rounded p-4">
          Item 1
        </div>
      </div>
    </div>
  )
}

export default Page;
