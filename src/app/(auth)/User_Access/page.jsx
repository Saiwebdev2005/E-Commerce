
import React from "react";
import Link from "next/link";
function page() {
  return (
    <div className="bg-c3 w-full flex items-center justify-center h-screen">
    <div className="grid gap-6 mx-auto p-12 rounded-lg shadow-md bg-c1">
      <div className="flex flex-col items-center p-4 bg-light-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-c3 hover:-translate-y-1 duration-300 border-2 border-c3">
        <span className="font-semibold text-xl mb-2">If you Already have an Account</span>
         <Link href="/User_Access/Login">
          <button className="button font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200">
            Sign In
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center p-4 bg-light-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-c3 hover:-translate-y-1 duration-300 border-2 border-c3">
        <span className="font-semibold text-xl mb-2">
          If you Don't have an Account
        </span>
        <Link href="/User_Access/SignUp">
          <button className="button font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
}

export default page;
