import { AuthButtons } from "@/Components/auth/AuthButtons";
import React from "react";
import Link from "next/link";
function page() {
  return (
    <div className="bg-c3 w-full flex items-center justify-center h-screen">
    <div className="grid gap-6 mx-auto p-12 rounded-lg shadow-md bg-c2">
      <div className="flex flex-col items-center p-4 bg-light-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-c4 hover:-translate-y-1 duration-300 border-2 border-c4">
        <span className="font-semibold text-xl mb-2">If you Already have an Account</span>
        <AuthButtons >
          <button className="button  font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200">
            Go to Sign In
          </button>
        </AuthButtons>
      </div>
      <div className="flex flex-col items-center p-4 bg-light-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-c4 hover:-translate-y-1 duration-300 border-2 border-c4">
        <span className="font-semibold text-xl mb-2">
          If you Don't have an Account
        </span>
        <Link href="/User_Access/SignUp">
          <button className="button font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200">
            Go to Sign Up
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
}

export default page;
