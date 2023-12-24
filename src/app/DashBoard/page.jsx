"use client"
import React, { useState } from 'react'
import { signOut } from "next-auth/react";


function Page() {
  const [showModal, setShowModal] = useState(false);

  const handleSignOut = async (e) => {
    e.preventDefault();
    setShowModal(true);
    signOut({ callbackUrl: `${window.location.origin}/` });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-c1 text-c2">
      <div className="text-2xl mb-4">
        Welcome, user name{/* {userName}! Display the user's name */}
      </div>
      <div className="text-xl mb-4">
        Total Spending: $100{/*${totalSpending}  Display the user's total spending */}
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

export default Page
