import { AuthButtons } from "@/Components/auth/AuthButtons";
import React from "react";
import Link from "next/link";
function page() {
  return (
    <div className="bg-c3 w-full">
      <div className="flex flex-col justify-center items-center mx-auto space-y-6 p-12 h-screen">
        <div className="flex flex-col justify-center items-center p-2 rounded-lg border">
          <span>If you Already have an Account</span>
        <AuthButtons />
        </div>
        <div className="flex flex-col justify-center items-center  p-2 rounded-lg border">
          <span>
            If you Don't have an account
          </span>
        <Link href="User_Access\SignUp">
          <span className="button text-2xl mt-1.5">Sign up </span>
        </Link>
        </div>
        
      </div>
    </div>
  );
}

export default page;
